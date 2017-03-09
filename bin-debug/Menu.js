var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super.call(this) || this;
        _this._items = [
            {
                title: '经典',
                type: 'Classic',
                color: COLOR.Black,
                textColor: COLOR.White
            }, {
                title: '街机',
                type: 'Arcade',
                color: COLOR.White,
                textColor: COLOR.Black
            }, {
                title: '禅',
                type: 'Buddhist',
                color: COLOR.White,
                textColor: COLOR.Black
            }, {
                title: '极速',
                type: 'TopSpeed',
                color: COLOR.Black,
                textColor: COLOR.White
            }, {
                title: '接力',
                type: 'Relay',
                color: COLOR.Black,
                textColor: COLOR.White
            }, {
                title: '设置',
                type: 'setting',
                color: COLOR.White,
                textColor: COLOR.Black
            }
        ];
        _this._color = 'Black';
        _this.drawMenu();
        return _this;
    }
    Menu.prototype.drawMenu = function () {
        var rectWidth = Util.stageWidth / 2;
        var rectHeight = Util.stageHeight / 3;
        this._items.forEach(function (item, i) {
            var x = i % 2 === 0 ? 0 : rectWidth;
            var y = Math.floor(i / 2) * rectHeight;
            item.width = rectWidth;
            item.height = rectHeight;
            var rect = new MenuRect(item);
            rect.x = x;
            rect.y = y;
            this.addChild(rect);
        }, this);
    };
    return Menu;
}(egret.Sprite));
__reflect(Menu.prototype, "Menu");
//# sourceMappingURL=Menu.js.map