var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AlertLabel = (function (_super) {
    __extends(AlertLabel, _super);
    function AlertLabel(item) {
        var _this = _super.call(this, item) || this;
        _this._sound = ['提示：开', '提示：关'];
        _this._index = 0;
        _this.y = item.height;
        _this.text = _this._sound[_this._index];
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        return _this;
    }
    AlertLabel.prototype.onClick = function (event) {
        this._index = (this._index + 1) % 2;
        this.text = this._sound[this._index];
        this.dispatchToggleEvent();
    };
    AlertLabel.prototype.dispatchToggleEvent = function () {
        this.dispatchEventWith(Util.TOGGLE_ALERT, true, !!this._index, true);
    };
    return AlertLabel;
}(Label));
__reflect(AlertLabel.prototype, "AlertLabel");
//# sourceMappingURL=AlertLabel.js.map