class Player extends BaseAsset{
    public yVel : number;
    public jumpHeight: number = -150;
    
    constructor(playerSprite: Sprite) {
        super(playerSprite);
        this.yVel = 0;
    }
}