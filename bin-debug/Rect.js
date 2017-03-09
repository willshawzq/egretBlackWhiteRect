var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect(item) {
        var _this = _super.call(this) || this;
        _this.drawRect(item);
        _this.touchEnabled = true;
        return _this;
    }
    Rect.prototype.drawRect = function (item) {
        var color = item.color, width = item.width, height = item.height, offsetX = item.offsetX, lineStyle = item.lineStyle;
        if (lineStyle)
            this.graphics.lineStyle(lineStyle[0], Util.colorArray[lineStyle[1]]);
        this.graphics.beginFill(Util.colorArray[color]);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
        if (offsetX) {
            this.x = offsetX;
        }
    };
    return Rect;
}(egret.Sprite));
__reflect(Rect.prototype, "Rect");
//# sourceMappingURL=Rect.js.map