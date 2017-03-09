var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var GroupGameRect = (function (_super) {
    __extends(GroupGameRect, _super);
    function GroupGameRect(item) {
        var _this = _super.call(this) || this;
        _this._rectArr = [];
        var offsetY = item.offsetY, rest = __rest(item, ["offsetY"]);
        _this.y = offsetY;
        _this.initRects(rest);
        _this.addEventListener(Util.NEXT_STEP, _this.nextStep, _this);
        return _this;
    }
    GroupGameRect.prototype.initRects = function (item) {
        var cols = Util.COLS;
        var color = item.color, index = item.index, rest = __rest(item, ["color", "index"]);
        var clickIndex = this.getRandomNumber();
        for (var i = 0; i < cols; i++) {
            var isEqual = i === clickIndex && color !== COLOR.Yellow;
            var rect = new GameRect(__assign({}, rest, { offsetX: i * item.width, lineStyle: [2, COLOR.Black], clickable: isEqual ? true : false, color: isEqual ? COLOR.Black : color }));
            this.addChild(rect);
            this._rectArr.push(rect);
        }
        this.updateIndex(index);
    };
    GroupGameRect.prototype.getRandomNumber = function () {
        return Math.floor(Math.random() * Util.COLS);
    };
    GroupGameRect.prototype.nextStep = function (event) {
        if (!this.getIndexClickable()) {
            event.stopPropagation();
            event.data.gameOver();
        }
        else {
            // 确认是正确的黑块时加入动画
            event.data.toggleRightShape(true);
        }
    };
    GroupGameRect.prototype.updateGroup = function () {
        this._rectArr.forEach(function (rect) { return rect.clickable = false; });
        var clickIndex = this.getRandomNumber();
        this._rectArr[clickIndex].clickable = true;
    };
    GroupGameRect.prototype.updateIndex = function (index) {
        this._index = index;
    };
    GroupGameRect.prototype.getIndexClickable = function () {
        return this._index === Util.ROWS - 1;
    };
    GroupGameRect.prototype.getIndex = function () {
        return this._index;
    };
    return GroupGameRect;
}(egret.Sprite));
__reflect(GroupGameRect.prototype, "GroupGameRect");
//# sourceMappingURL=GroupGameRect.js.map