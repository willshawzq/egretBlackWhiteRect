class Main extends egret.DisplayObjectContainer {
    private _isOpenSound: boolean = true;
    private _isOpenAlert: boolean = true;

    public constructor() {
        super();
        this.initEventListener();
    }

    private initUtil(): void {
        Util.stageWidth = this.stage.stageWidth;
        Util.stageHeight = this.stage.stageHeight;
    }

    private onAddToStage(event: egret.Event) {
        this.initUtil();
        this.initMenu();
    }

    private _menu: Menu;
    private initMenu(): void {
        let menu: Menu = this._menu = new Menu();
        this.addChild(menu);
    }

    private initEventListener(): void {
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        // 理论上label发送的事件只能label监听，这里不知为何menu对象可以监听,MD突然又好了
        this.addEventListener(Util.TOGGLE_SOUND, this.updateSound, this);
        this.addEventListener(Util.TOGGLE_ALERT, this.updateAlert, this);
        this.addEventListener(Util.PLAY_GAME, this.playGame, this);
        this.addEventListener(Util.GAME_OVER, this.gameOver, this);
        this.addEventListener(Util.REPLAY, this.replay, this);
        this.addEventListener(Util.GO_BACK, this.goBack, this);
    }

    private _game: Game;
    private _gameType: string;
    private playGame(event: egret.Event): void {
        this._gameType = event.data;
        this._game = new Game(event.data);
        this.removeChild(this._menu);
        this.addChild(this._game);
    }

    private _result: GameOver;
    private gameOver(event: egret.Event): void {
        this.removeChild(this._game);
        this._result = new GameOver({
            type: this._gameType,
            status: '失败'
        });
        this.addChild(this._result);
    }

    private updateSound(event: egret.Event): void {
        this._isOpenSound = !this._isOpenSound;
    }

    private updateAlert(event: egret.Event): void {
        this._isOpenAlert = !this._isOpenAlert;
    }

    private replay(): void {
        this.removeChild(this._result);
        this._game = new Game(this._gameType);
        this.addChild(this._game);
    }

    private goBack(): void {
        this.removeChild(this._result);
        this.addChild(this._menu);
    }
}


