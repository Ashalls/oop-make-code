class InteractableAsset extends BaseSprite {

    constructor(interactableSpriteImage: Image) {
        super(interactableSpriteImage);
        this.sprite.setFlag(SpriteFlag.AutoDestroy, true);
    }
}
