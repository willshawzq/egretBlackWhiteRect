var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameRect = (function (_super) {
    __extends(GameRect, _super);
    function GameRect(item) {
        var _this = _super.call(this, item) || this;
        _this._item = item;
        _this.initRightShape();
        _this.initWrongShape();
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        return _this;
    }
    Object.defineProperty(GameRect.prototype, "clickable", {
        get: function () {
            return this._item.clickable;
        },
        set: function (able) {
            this._item.clickable = able;
            if (able)
                this._item.color = COLOR.Black;
            else
                this._item.color = COLOR.White;
            this.drawRect(this._item);
            this.toggleRightShape(false);
        },
        enumerable: true,
        configurable: true
    });
    GameRect.prototype.onClick = function (event) {
        if (this._item.clickable) {
            this.dispatchEventWith(Util.NEXT_STEP, true, this);
        }
        else {
            this.gameOver();
        }
    };
    GameRect.prototype.initRightShape = function () {
        this._rightShape = this.drawShape(COLOR.Gray);
        this.toggleRightShape(false);
    };
    GameRect.prototype.toggleRightShape = function (flag) {
        if (flag) {
            egret.Tween.get(this._rightShape)
                .to({
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1
            }, Util.CLICK_ANIMATION_TIME, egret.Ease.sineIn);
        }
        else {
            this._rightShape.scaleX = 0;
            this._rightShape.scaleY = 0;
            this._rightShape.x = this._item.width / 2;
            this._rightShape.y = this._item.height / 2;
        }
    };
    GameRect.prototype.initWrongShape = function () {
        this._wrongShape = this.drawShape(COLOR.Red);
        var _a = this._item, width = _a.width, height = _a.height;
        var shape = new egret.Shape();
        shape.graphics.beginFill(Util.colorArray[COLOR.Gray]);
        shape.graphics.drawRect((width - 100) / 2, (height - 20) / 2, 100, 20);
        shape.graphics.endFill();
        this._wrongShape.addChild(shape);
        this.toggleWrongShape(false);
    };
    GameRect.prototype.gameOver = function () {
        this.dispatchEventWith(Util.CANNT_TOUCH, true);
        var timer = new egret.Timer(200, 10);
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerStart, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComplate, this);
        timer.start();
    };
    GameRect.prototype.timerStart = function (event) {
        if (event.target.currentCount % 2 === 0) {
            this.toggleWrongShape(true);
        }
        else {
            this.toggleWrongShape(false);
        }
    };
    GameRect.prototype.timerComplate = function (event) {
        this.toggleWrongShape(false);
        this.dispatchEventWith(Util.GAME_OVER, true);
    };
    GameRect.prototype.toggleWrongShape = function (flag) {
        if (flag) {
            this._wrongShape.visible = true;
        }
        else {
            this._wrongShape.visible = false;
        }
    };
    GameRect.prototype.drawShape = function (color) {
        var shape = new egret.Sprite();
        var _a = this._item, width = _a.width, height = _a.height, lineStyle = _a.lineStyle;
        shape.graphics.lineStyle(lineStyle[0], Util.colorArray[lineStyle[1]]);
        shape.graphics.beginFill(Util.colorArray[color]);
        shape.graphics.drawRect(0, 0, width, height);
        shape.graphics.endFill();
        this.addChild(shape);
        return shape;
    };
    return GameRect;
}(Rect));
__reflect(GameRect.prototype, "GameRect");
//# sourceMappingURL=GameRect.js.map