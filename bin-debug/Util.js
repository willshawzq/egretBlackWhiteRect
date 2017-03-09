var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var COLOR;
(function (COLOR) {
    COLOR[COLOR["Black"] = 0] = "Black";
    COLOR[COLOR["White"] = 1] = "White";
    COLOR[COLOR["Yellow"] = 2] = "Yellow";
    COLOR[COLOR["Gray"] = 3] = "Gray";
    COLOR[COLOR["Red"] = 4] = "Red";
})(COLOR || (COLOR = {}));
;
var Util = (function () {
    function Util() {
    }
    return Util;
}());
Util.stageWidth = 0;
Util.stageHeight = 0;
Util.COLS = 4;
Util.ROWS = 4;
Util.BLANK_PERCENT = 0.1;
Util.NEXT_STEP = 'next_step';
Util.GAME_OVER = 'game_over';
Util.TOGGLE_SOUND = 'toggle_sound';
Util.TOGGLE_ALERT = 'toggle_alert';
Util.PLAY_GAME = 'play_game';
Util.REPLAY = 'replay';
Util.GO_BACK = 'go_back';
Util.CANNT_TOUCH = 'cannt_touch';
Util.CLICK_ANIMATION_TIME = 100;
Util.colorArray = [
    0x000000,
    0xffffff,
    0xffff00,
    0x8C8A8C,
    0xC80000,
];
__reflect(Util.prototype, "Util");
//# sourceMappingURL=Util.js.map