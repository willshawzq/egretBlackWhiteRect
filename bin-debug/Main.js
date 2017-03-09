var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this._isOpenSound = true;
        _this._isOpenAlert = true;
        _this.initEventListener();
        return _this;
    }
    Main.prototype.initUtil = function () {
        Util.stageWidth = this.stage.stageWidth;
        Util.stageHeight = this.stage.stageHeight;
    };
    Main.prototype.onAddToStage = function (event) {
        this.initUtil();
        this.initMenu();
    };
    Main.prototype.initMenu = function () {
        var menu = this._menu = new Menu();
        this.addChild(menu);
    };
    Main.prototype.initEventListener = function () {
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 理论上label发送的事件只能label监听，这里不知为何menu对象可以监听,MD突然又好了
        this.addEventListener(Util.TOGGLE_SOUND, this.updateSound, this);
        this.addEventListener(Util.TOGGLE_ALERT, this.updateAlert, this);
        this.addEventListener(Util.PLAY_GAME, this.playGame, this);
        this.addEventListener(Util.GAME_OVER, this.gameOver, this);
        this.addEventListener(Util.REPLAY, this.replay, this);
        this.addEventListener(Util.GO_BACK, this.goBack, this);
    };
    Main.prototype.playGame = function (event) {
        this._gameType = event.data;
        this._game = new Game(event.data);
        this.removeChild(this._menu);
        this.addChild(this._game);
    };
    Main.prototype.gameOver = function (event) {
        this.removeChild(this._game);
        this._result = new GameOver({
            type: this._gameType,
            status: '失败'
        });
        this.addChild(this._result);
    };
    Main.prototype.updateSound = function (event) {
        this._isOpenSound = !this._isOpenSound;
    };
    Main.prototype.updateAlert = function (event) {
        this._isOpenAlert = !this._isOpenAlert;
    };
    Main.prototype.replay = function () {
        this.removeChild(this._result);
        this._game = new Game(this._gameType);
        this.addChild(this._game);
    };
    Main.prototype.goBack = function () {
        this.removeChild(this._result);
        this.addChild(this._menu);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map