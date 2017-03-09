class GroupGameRect extends egret.Sprite {
    public constructor(item: any) {
        super();
        let {offsetY, ...rest} = item;
        this.y = offsetY;
        this.initRects(rest);
        this.addEventListener(Util.NEXT_STEP, this.nextStep, this);
    }
    private _rectArr: Array<GameRect> = [];
    private _index: number;
    private initRects(item: any): void {
        let cols = Util.COLS;
        let {color, index, ...rest} = item;
        let clickIndex = this.getRandomNumber();
        
        for(let i = 0; i < cols; i++) {
            let isEqual = i === clickIndex && color !== COLOR.Yellow;
            let rect = new GameRect({
                ...rest,
                offsetX: i * item.width,
                lineStyle: [2, COLOR.Black],
                clickable: isEqual ? true : false,
                color: isEqual ? COLOR.Black : color
            });
            this.addChild(rect);
            this._rectArr.push(rect);
        }

        this.updateIndex(index);
    }
    private getRandomNumber(): number {
        return Math.floor(Math.random() * Util.COLS);
    }
    private nextStep(event: egret.Event): void {
        if(!this.getIndexClickable()) {
            event.stopPropagation();
            event.data.gameOver();
        }else {
            // 确认是正确的黑块时加入动画
            event.data.toggleRightShape(true);
        }
    }
    public updateGroup(): void {
        this._rectArr.forEach(rect => rect.clickable = false);
        let clickIndex = this.getRandomNumber();
        this._rectArr[clickIndex].clickable = true;
    }
    public updateIndex(index: number): void {
        this._index = index;
    }
    private getIndexClickable(): boolean {
        return this._index === Util.ROWS - 1;
    }
    public getIndex(): number {
        return this._index;
    }
}