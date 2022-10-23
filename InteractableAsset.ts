class InteractableAsset extends BaseAsset {

    constructor(interactableSpriteImage: Image) {
        super(interactableSpriteImage);
        this.baseAsset.setFlag(SpriteFlag.AutoDestroy, true);
    }
}
