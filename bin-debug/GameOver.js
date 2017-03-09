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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver(item) {
        var _this = _super.call(this) || this;
        _this._labelArray = [];
        _this.initLabels(item);
        _this.drawSplitLine();
        _this.initEvents();
        return _this;
    }
    GameOver.prototype.initLabels = function (item) {
        var _this = this;
        var stageWidth = Util.stageWidth, stageHeight = Util.stageHeight;
        var params = [
            { title: item.type, width: stageWidth, height: stageHeight * .2, x: 0, y: 0, textColor: COLOR.Gray, bgColor: COLOR.Red, size: 40 },
            { title: item.status, width: stageWidth, height: stageHeight * .3, x: 0, y: stageHeight * .2, textColor: COLOR.White, bgColor: COLOR.Red, size: 70 },
            { title: '重新开始', width: stageWidth, height: stageHeight * .25, x: 0, y: stageHeight * .5, textColor: COLOR.Black, bgColor: COLOR.White, size: 60 },
            { title: '分享', width: stageWidth / 2, height: stageHeight * .25, x: 0, y: stageHeight * .75, textColor: COLOR.White, bgColor: COLOR.Red, size: 40 },
            { title: '返回', width: stageWidth / 2, height: stageHeight * .25, x: stageWidth * .5, y: stageHeight * .75, textColor: COLOR.White, bgColor: COLOR.Red, size: 40 }
        ];
        params.forEach(function (param, i) {
            var label = new Label(__assign({ type: item.type }, param));
            label.x = param.x;
            label.y = param.y;
            label.size = param.size;
            _this.layTxBg(label, param.bgColor);
            _this.addChild(label);
            _this._labelArray.push(label);
        });
    };
    GameOver.prototype.layTxBg = function (tx, bgColor) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(Util.colorArray[bgColor]);
        shp.graphics.drawRect(tx.x, tx.y, tx.width, tx.height);
        shp.graphics.endFill();
        this.addChild(shp);
    };
    GameOver.prototype.drawSplitLine = function () {
        var line = new egret.Shape();
        var stageWidth = Util.stageWidth, stageHeight = Util.stageHeight;
        line.graphics.beginFill(Util.colorArray[COLOR.White]);
        line.graphics.drawRect(stageWidth * .5 - 3, stageHeight * .75, 6, stageHeight * .25);
        line.graphics.endFill();
        this.addChild(line);
    };
    GameOver.prototype.initEvents = function () {
        this._labelArray[2].addEventListener(egret.TouchEvent.TOUCH_TAP, this.replay, this);
        this._labelArray[4].addEventListener(egret.TouchEvent.TOUCH_TAP, this.goBack, this);
    };
    GameOver.prototype.replay = function () {
        this.dispatchEventWith(Util.REPLAY, true);
    };
    GameOver.prototype.goBack = function () {
        this.dispatchEventWith(Util.GO_BACK, true);
    };
    return GameOver;
}(egret.Sprite));
__reflect(GameOver.prototype, "GameOver");
//# sourceMappingURL=GameOver.js.map