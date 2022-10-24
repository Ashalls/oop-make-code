class Enemy extends BaseAsset implements IModifierProvider{

    constructor(enemySpriteImage: Image) {
        super(enemySpriteImage);
        this.spriteKind = SpriteKind.Enemy;
    }

    public getAdditiveModifiers(stat: Stat){
        return 3;
    }

    public getPercentageModifiers(stat: Stat) {
        return 3;
    }
}
