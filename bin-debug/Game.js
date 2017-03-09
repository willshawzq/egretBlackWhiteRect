var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(type) {
        var _this = _super.call(this) || this;
        _this._groupArr = [];
        _this._isStarted = false;
        _this._type = type;
        _this.touchEnabled = true;
        _this.initComponent();
        _this.addEventListener(Util.NEXT_STEP, _this.nextStep, _this);
        return _this;
    }
    Object.defineProperty(Game.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.initComponent = function () {
        this.initRects();
        this.addChild(new TimerLabel());
    };
    Game.prototype.initRects = function () {
        var COLS = Util.COLS, ROWS = Util.ROWS, BLANK_PERCENT = Util.BLANK_PERCENT, stageWidth = Util.stageWidth, stageHeight = Util.stageHeight;
        var rectWidth = stageWidth / 4;
        var rectHeight = this._rectHeight = stageHeight / (ROWS + BLANK_PERCENT);
        var initRows = ROWS + 1;
        for (var i = 0; i < initRows; i++) {
            var group = new GroupGameRect({
                index: i,
                width: rectWidth,
                height: rectHeight,
                color: i === ROWS ? COLOR.Yellow : COLOR.White,
                offsetY: i * rectHeight
            });
            this.addChild(group);
            this._groupArr.push(group);
        }
        // 默认显示在可视区域上方
        this.y = -initRows * rectHeight;
        // 缓动动画
        var offsetY = this._offsetY = -rectHeight * (1 - BLANK_PERCENT);
        var tw = egret.Tween.get(this);
        tw.to({ x: 0, y: offsetY }, 1000, egret.Ease.sineIn);
    };
    Game.prototype.nextStep = function () {
        egret.Tween.get(this)
            .to({ x: 0, y: 0 }, Util.CLICK_ANIMATION_TIME, egret.Ease.sineIn)
            .call(this.updateGroups, this);
    };
    Game.prototype.updateGroups = function () {
        var $last = this._groupArr.pop();
        $last.y = 0;
        $last.updateIndex(0);
        // 之前处理是在当前行监听点击事件，进行重绘处理（最后一行可点）
        // 现在每一行都只进行点击正确与否的校验，（最后第二行可点和实际游戏一致）
        $last.updateGroup();
        this._groupArr.forEach(function (group, i) {
            group.y += this._rectHeight;
            group.updateIndex(i + 1);
        }, this);
        this._groupArr.unshift($last);
        this.y = this._offsetY;
    };
    return Game;
}(egret.Sprite));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map