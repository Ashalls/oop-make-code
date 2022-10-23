class Player extends BaseAsset{
    public yVel : number;
    public jumpHeight: number = -150;
    
    constructor(playerSpriteImage: Image) {
        super(playerSpriteImage);
        this.spriteKind = SpriteKind.Player;
        this.yVel = 0;
    }
}