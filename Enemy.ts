class Enemy extends BaseAsset implements IModifierProvider{

    constructor(enemySpriteImage: Image) {
        super(enemySpriteImage);
        this.spriteKind = SpriteKind.Enemy;
    }

    getAdditiveModifiers(stat: Stat){
        return 3;
    }

    getPercentageModifiers(stat: Stat) {
        return 3;
    }
}
