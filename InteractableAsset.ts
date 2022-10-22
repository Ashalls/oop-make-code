class InteractableAsset extends BaseAsset {

    constructor(interactableSprite: Sprite) {
        super(interactableSprite);
        this.baseAsset.setFlag(SpriteFlag.AutoDestroy, true);
    }
}
