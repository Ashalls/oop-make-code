class Enemy extends BaseAsset {

    constructor(enemySpriteImage: Image) {
        super(enemySpriteImage);
        this.spriteKind = SpriteKind.Enemy;
    }
}
