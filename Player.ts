class Player extends BaseAsset implements IModifierProvider{
    public yVel : number;
    public jumpHeight: number = -150;
    
    constructor(playerSpriteImage: Image) {
        super(playerSpriteImage);
        this.spriteKind = SpriteKind.Player;
        this.yVel = 0;
    }

    public getAdditiveModifiers(stat: Stat) {
        return 3;
    }

    public getPercentageModifiers(stat: Stat) {
        return 3;
    }
}