var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimerLabel = (function (_super) {
    __extends(TimerLabel, _super);
    function TimerLabel() {
        var _this = _super.call(this) || this;
        _this.timer = 0;
        _this.drawTimerLabel();
        return _this;
    }
    TimerLabel.prototype.drawTimerLabel = function () {
        this.x = 800;
        this.y = 100;
        this.text = 'timer';
        // egret.startTick(this.updateTimer,this);
    };
    TimerLabel.prototype.updateTimer = function (timerStamp) {
        this.text = timerStamp - egret.getTimer() + '';
        return true;
    };
    return TimerLabel;
}(egret.TextField));
__reflect(TimerLabel.prototype, "TimerLabel");
//# sourceMappingURL=TimerLabel.js.map