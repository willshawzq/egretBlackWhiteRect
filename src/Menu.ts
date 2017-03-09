class Menu extends egret.Sprite {
    private _items: Array<any> = [
        {
            title: '经典',
            type: 'Classic',
            color: COLOR.Black,
            textColor: COLOR.White
        }, {
            title: '街机',
            type: 'Arcade',
            color: COLOR.White,
            textColor: COLOR.Black
        }, {
            title: '禅',
            type: 'Buddhist',
            color: COLOR.White,
            textColor: COLOR.Black
        }, {
            title: '极速',
            type: 'TopSpeed',
            color: COLOR.Black,
            textColor: COLOR.White
        }, {
            title: '接力',
            type: 'Relay',
            color: COLOR.Black,
            textColor: COLOR.White
        }, {
            title: '设置',
            type: 'setting',
            color: COLOR.White,
            textColor: COLOR.Black
        }
    ];
    private _color: string = 'Black';
    public constructor() {
        super();
        this.drawMenu();
    }
    private drawMenu(): void {
        let rectWidth = Util.stageWidth / 2;
        let rectHeight = Util.stageHeight / 3;
        this._items.forEach(function(item, i) {
            let x = i % 2 === 0 ? 0 : rectWidth;
            let y = Math.floor(i / 2) * rectHeight;
            item.width = rectWidth;
            item.height = rectHeight;
            let rect = new MenuRect(item);
            rect.x = x;
            rect.y = y;
            this.addChild(rect);
        }, this);
    }
}