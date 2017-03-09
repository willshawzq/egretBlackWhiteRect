class Label extends egret.TextField {
    readonly type: string;
    
    public constructor(item: any) {
        super();
        this.type = item.type;
        this.touchEnabled = true;
        this.drawTextField(item);
    }
    private drawTextField(item: any): void {
        this.text = item.title;
        this.width = item.width;
        this.height = item.height;
        this.textColor = Util.colorArray[item.textColor];
        this.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.textAlign = egret.HorizontalAlign.CENTER;
    }
}