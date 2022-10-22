class Player {
    public playerSprite: Sprite;
    
    get lives(): any {
        return info.life();
    }
    set lives(lives: any) {
        info.setLife(lives)
    }
    
    constructor(playerSprite: Sprite) {
        this.playerSprite = playerSprite;
    }

    public doThisOnMove() {
        this.playerSprite.x += 10;
    }
}