class MenuRect extends Rect {
    readonly type: string;
    
    public constructor(item: any) {
        super(item);
        this.type = item.type;
        this.addText(item);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    private addText(item: any): void {
        if(item.type === 'setting') {
            item.height /= 2;
            this.addChild(new SoundLabel(item));
            this.addChild(new AlertLabel(item));
        }else {
            this.addChild(new Label(item));
        }
    }
    private onClick(event: egret.TouchEvent): void {
        let type = event.currentTarget.type;
        if(type !== 'setting') {
            this.dispatchEventWith(Util.PLAY_GAME, true, type, true);
        }
    }
}