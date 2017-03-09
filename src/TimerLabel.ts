class TimerLabel extends egret.TextField {
    public constructor() {
        super();
        this.drawTimerLabel();
    }
    private timer: number = 0;
    private drawTimerLabel(): void {
        this.x = 800;
        this.y = 100;
        this.text = 'timer';
        // egret.startTick(this.updateTimer,this);
    }
    private updateTimer(timerStamp: number): boolean {
        this.text = timerStamp - egret.getTimer() + '';
        return true;
    }
}