class AlertLabel extends Label {
    private _sound: Array<string> = ['提示：开', '提示：关'];
    private _index: number = 0;
    
    public constructor(item: any) {
        super(item);
        this.y = item.height;
        this.text = this._sound[this._index];
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    private onClick(event: egret.TouchEvent): void {
        this._index = (this._index + 1) % 2;
        this.text = this._sound[this._index];
        this.dispatchToggleEvent();
    }
    private dispatchToggleEvent(): void {
        this.dispatchEventWith(Util.TOGGLE_ALERT, true, !!this._index, true);
    }
}