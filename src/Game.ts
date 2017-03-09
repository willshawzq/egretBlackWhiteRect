class Game extends egret.Sprite {
    private _type: string;
    get type(): string {
        return this._type;
    }
    set type(type: string) {
        this._type = type;
    }
    public constructor(type:string) {
        super();
        this._type = type;
        this.touchEnabled = true;
        this.initComponent();
        this.addEventListener(Util.NEXT_STEP, this.nextStep, this);
    }
    private initComponent(): void {
        this.initRects();
        this.addChild(new TimerLabel());
    }

    private _groupArr: Array<GroupGameRect> = [];
    private _rectHeight: number ;
    private _offsetY: number;
    private initRects(): void {
        let {COLS, ROWS, BLANK_PERCENT, stageWidth, stageHeight} = Util;
        let rectWidth = stageWidth / 4;
        let rectHeight = this._rectHeight = stageHeight / (ROWS + BLANK_PERCENT);
        let initRows = ROWS + 1;
        for(let i = 0; i < initRows; i++) {
            let group = new GroupGameRect({
                index: i,
                width: rectWidth,
                height: rectHeight,
                color: i === ROWS ? COLOR.Yellow : COLOR.White,
                offsetY: i * rectHeight
            });
            this.addChild(group);
            this._groupArr.push(group);
        }

        // 默认显示在可视区域上方
        this.y = -initRows * rectHeight;
        // 缓动动画
        let offsetY = this._offsetY = -rectHeight * (1 - BLANK_PERCENT);        
        let tw = egret.Tween.get(this);
        tw.to({x: 0,y: offsetY}, 1000, egret.Ease.sineIn);
    }

    private _isStarted: boolean = false;
    private nextStep(): void {
        egret.Tween.get(this)
            .to({x: 0,y: 0}, Util.CLICK_ANIMATION_TIME, egret.Ease.sineIn)
            .call(this.updateGroups, this);
    }
    private updateGroups(): void {
        let $last = this._groupArr.pop();
        $last.y = 0;
        $last.updateIndex(0);
        // 之前处理是在当前行监听点击事件，进行重绘处理（最后一行可点）
        // 现在每一行都只进行点击正确与否的校验，（最后第二行可点和实际游戏一致）
        $last.updateGroup();
        this._groupArr.forEach(function(group, i) {
            group.y += this._rectHeight;
            group.updateIndex(i + 1);
        }, this);
        this._groupArr.unshift($last);
        this.y = this._offsetY;
    }
}