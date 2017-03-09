class SoundLabel extends Label {
    private _sound: Array<string> = ['音效：开', '音效：关'];
    private _index: number = 0;
    
    public constructor(item: Object) {
        super(item);
        this.text = this._sound[this._index];
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    }
    private onClick(event: egret.TouchEvent): void {
        this._index = (this._index + 1) % 2;
        this.text = this._sound[this._index];
        this.dispatchToggleEvent();
    }
    private dispatchToggleEvent(): void {
        // 此处开发冒泡，menu对象才可捕获如下事件
        this.dispatchEventWith(Util.TOGGLE_SOUND, true, !!this._index, true);
    }
}