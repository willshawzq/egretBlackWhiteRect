class GameRect extends Rect {
    private _item: any;
    get clickable(): boolean {
        return this._item.clickable;
    }
    set clickable(able: boolean) {
        this._item.clickable = able;
        if(able) this._item.color = COLOR.Black;
        else this._item.color = COLOR.White;
        this.drawRect(this._item);
        this.toggleRightShape(false);
    }
    public constructor(item: any) {
        super(item);
        this._item = item;
        this.initRightShape();
        this.initWrongShape();
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    private onClick(event: egret.TouchEvent): void {
        if(this._item.clickable) {
            this.dispatchEventWith(Util.NEXT_STEP, true, this);
        }else {
            this.gameOver();
        }
    }
    private _rightShape: egret.Sprite;
    private initRightShape(): void {
        this._rightShape = this.drawShape(COLOR.Gray);
        this.toggleRightShape(false);
    }
    private toggleRightShape(flag: boolean): void {
        if(flag) {
            egret.Tween.get(this._rightShape)
                .to({
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1
                }, Util.CLICK_ANIMATION_TIME, egret.Ease.sineIn);
        }else {
            this._rightShape.scaleX = 0;
            this._rightShape.scaleY = 0;
            this._rightShape.x = this._item.width / 2;
            this._rightShape.y = this._item.height / 2;
        }
    }

    private _wrongShape: egret.Sprite;
    private initWrongShape(): void {
        this._wrongShape = this.drawShape(COLOR.Red);

        let {width, height} = this._item;
        let shape = new egret.Shape();
        shape.graphics.beginFill(Util.colorArray[COLOR.Gray]);
        shape.graphics.drawRect((width - 100) / 2, (height - 20) / 2, 100, 20);
        shape.graphics.endFill();
        this._wrongShape.addChild(shape);

        this.toggleWrongShape(false);
    }
    public gameOver(): void {
        this.dispatchEventWith(Util.CANNT_TOUCH, true);

        let timer: egret.Timer = new egret.Timer(200, 10);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplate, this);
        timer.start();
    }
    private timerStart(event: egret.TimerEvent): void {
        if(event.target.currentCount % 2 === 0) {
            this.toggleWrongShape(true);
        }else {
            this.toggleWrongShape(false);
        }
    }
    private timerComplate(event: egret.TimerEvent): void {
        this.toggleWrongShape(false);
        this.dispatchEventWith(Util.GAME_OVER, true);
    }
    private toggleWrongShape(flag: boolean): void {
        if(flag) {
            this._wrongShape.visible = true;
        }else {
            this._wrongShape.visible = false;
        }
    }

    private drawShape(color: number): egret.Sprite {
        let shape = new egret.Sprite();
        let {width, height, lineStyle} = this._item;

        shape.graphics.lineStyle(lineStyle[0], Util.colorArray[lineStyle[1]]);
        shape.graphics.beginFill(Util.colorArray[color]);
        shape.graphics.drawRect(0, 0, width, height);
        shape.graphics.endFill();

        this.addChild(shape);
        return shape;
    }
}