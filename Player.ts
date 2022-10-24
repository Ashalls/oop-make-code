class Player extends BaseSprite implements IModifierProvider{
    public jumpHeight: number = -150;
    
    constructor(playerSpriteImage: Image) {
        super(playerSpriteImage);
        this.spriteKind = SpriteKind.Player;
    }

    public getAdditiveModifiers(stat: Stat) {
        return 3;
    }

    public getPercentageModifiers(stat: Stat) {
        return 3;
    }
}