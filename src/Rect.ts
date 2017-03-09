class Rect extends egret.Sprite {    
    public constructor(item: any) {
        super();
        this.drawRect(item);
        this.touchEnabled = true;
    }
    public drawRect(item: any): void {
        let {color, width, height, offsetX, lineStyle} = item;
        if(lineStyle) this.graphics.lineStyle(lineStyle[0], Util.colorArray[lineStyle[1]]);
        this.graphics.beginFill(Util.colorArray[color]);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
        if(offsetX) {
            this.x = offsetX;
        }
    }
}