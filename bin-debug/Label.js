var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Label = (function (_super) {
    __extends(Label, _super);
    function Label(item) {
        var _this = _super.call(this) || this;
        _this.type = item.type;
        _this.touchEnabled = true;
        _this.drawTextField(item);
        return _this;
    }
    Label.prototype.drawTextField = function (item) {
        this.text = item.title;
        this.width = item.width;
        this.height = item.height;
        this.textColor = Util.colorArray[item.textColor];
        this.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.textAlign = egret.HorizontalAlign.CENTER;
    };
    return Label;
}(egret.TextField));
__reflect(Label.prototype, "Label");
//# sourceMappingURL=Label.js.map