class GameOver extends egret.Sprite {
    public constructor(item: any) {
        super();
        this.initLabels(item);
        this.drawSplitLine();
        this.initEvents();
    }
    private _labelArray: Array<Label> = [];
    private initLabels(item: any): void {
        let {stageWidth, stageHeight} = Util;
        let params = [
            {title: item.type, width: stageWidth, height: stageHeight * .2, x: 0, y:0, textColor: COLOR.Gray, bgColor: COLOR.Red, size: 40},
            {title: item.status, width: stageWidth, height: stageHeight * .3, x: 0, y:stageHeight * .2, textColor: COLOR.White, bgColor: COLOR.Red, size: 70},
            {title: '重新开始', width: stageWidth, height: stageHeight * .25, x: 0, y:stageHeight * .5, textColor: COLOR.Black, bgColor: COLOR.White, size: 60},
            {title: '分享', width: stageWidth / 2, height: stageHeight * .25, x: 0, y:stageHeight * .75, textColor: COLOR.White, bgColor: COLOR.Red, size: 40},
            {title: '返回', width: stageWidth / 2, height: stageHeight * .25, x: stageWidth * .5, y:stageHeight * .75, textColor: COLOR.White, bgColor: COLOR.Red, size: 40}
        ];
        params.forEach((param, i) => {
           let label = new Label({
               type: item.type,
               ...param
            });
            label.x = param.x;
            label.y = param.y;
            label.size = param.size;
            this.layTxBg(label, param.bgColor);
            this.addChild(label);
            this._labelArray.push(label);
        });
    }
    private layTxBg(tx:egret.TextField, bgColor: number):void {
        var shp: egret.Shape = new egret.Shape();
        shp.graphics.beginFill(Util.colorArray[bgColor]);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    }
    private drawSplitLine(): void {
        let line = new egret.Shape();
        let {stageWidth, stageHeight} = Util;
        line.graphics.beginFill(Util.colorArray[COLOR.White]);
        line.graphics.drawRect(stageWidth * .5 - 3, stageHeight * .75, 6, stageHeight * .25);
        line.graphics.endFill();
        this.addChild(line);
    }
    private initEvents(): void {
        this._labelArray[2].addEventListener(egret.TouchEvent.TOUCH_TAP, this.replay, this);
        this._labelArray[4].addEventListener(egret.TouchEvent.TOUCH_TAP, this.goBack, this);
    }
    private replay(): void {
        this.dispatchEventWith(Util.REPLAY, true);
    }
    private goBack(): void {
        this.dispatchEventWith(Util.GO_BACK, true);
    }
}