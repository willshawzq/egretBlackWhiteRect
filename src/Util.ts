enum COLOR {
    Black,
    White,
    Yellow,
    Gray,
    Red
};
class Util {
    public static stageWidth: number = 0;
    public static stageHeight: number = 0;

    public static COLS: number = 4;
    public static ROWS: number = 4;
    public static BLANK_PERCENT = 0.1;

    public static NEXT_STEP: string = 'next_step';
    public static GAME_OVER: string = 'game_over';
    public static TOGGLE_SOUND: string = 'toggle_sound';
    public static TOGGLE_ALERT: string = 'toggle_alert';
    public static PLAY_GAME: string = 'play_game';
    public static REPLAY: string = 'replay';
    public static GO_BACK: string = 'go_back';
    public static CANNT_TOUCH: string = 'cannt_touch';

    public static CLICK_ANIMATION_TIME: number = 100;
    
    public static colorArray: Array<number> = [
        0x000000, /*black*/
        0xffffff, /*white*/
        0xffff00, //yellow
        0x8C8A8C, //gray
        0xC80000, //red
    ];
}