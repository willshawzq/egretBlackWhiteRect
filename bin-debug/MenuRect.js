var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuRect = (function (_super) {
    __extends(MenuRect, _super);
    function MenuRect(item) {
        var _this = _super.call(this, item) || this;
        _this.type = item.type;
        _this.addText(item);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        return _this;
    }
    MenuRect.prototype.addText = function (item) {
        if (item.type === 'setting') {
            item.height /= 2;
            this.addChild(new SoundLabel(item));
            this.addChild(new AlertLabel(item));
        }
        else {
            this.addChild(new Label(item));
        }
    };
    MenuRect.prototype.onClick = function (event) {
        var type = event.currentTarget.type;
        if (type !== 'setting') {
            this.dispatchEventWith(Util.PLAY_GAME, true, type, true);
        }
    };
    return MenuRect;
}(Rect));
__reflect(MenuRect.prototype, "MenuRect");
//# sourceMappingURL=MenuRect.js.map