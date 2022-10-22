class GameManager {
    public playerOne: Player;

    constructor() {
        this.registerPlayers();
        this.buttonClickRegister();
        this.tick();
    }

    private registerPlayers() {
        this.playerOne = new Player(
            sprites.create(assets.image`test`, SpriteKind.Player));
        this.playerOne.lives = 7;
        console.log(this.playerOne.lives);
    }

    private buttonClickRegister() {
        controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
            this.playerOne.doThisOnMove();
        })
    }

    private tick() {
        game.onUpdate(function () {
            // console.log("Running on update");
            this.playerOne.playerSprite.x += 10;
        })
    }
}

