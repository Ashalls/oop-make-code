class Player extends BaseAsset implements IModifierProvider{
    public yVel : number;
    public jumpHeight: number = -150;
    
    constructor(playerSpriteImage: Image) {
        super(playerSpriteImage);
        this.spriteKind = SpriteKind.Player;
        this.yVel = 0;
    }

    getAdditiveModifiers(stat: Stat) {
        return 3;
    }

    getPercentageModifiers(stat: Stat) {
        return 3;
    }
}