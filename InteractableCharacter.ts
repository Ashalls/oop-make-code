class InteractableCharacter extends BaseCharacter {

    constructor(interactableSprite: Sprite) {
        super(interactableSprite);
        this.character.setFlag(SpriteFlag.AutoDestroy, true);
    }
}
