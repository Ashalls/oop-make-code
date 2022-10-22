class Enemy extends BaseCharacter {

    constructor(enemySprite: Sprite) {
        super(enemySprite);
        this.character.setFlag(SpriteFlag.AutoDestroy, true);
    }
}