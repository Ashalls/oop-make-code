class GameManager {
    private player: Player;
    private floor: Asset;
    private level: Level;

    constructor() {
        this.setupLevel();
        this.registerPlayers();
        this.registerAssets();
        this.buttonClickRegister();
        this.gameUpdateFunctions();
        this.gameoverlapDetects();
        info.setScore(0)
    }

    private setupLevel() : void {
        this.level = new Level();
        this.level.gravity = 5;
        this.level.background = 9;
    }

    private registerPlayers() : void {
        this.player = new Player(
            sprites.create(assets.image`dino`, SpriteKind.Player));
        this.player.position = [15, 80, 0]
        this.player.jumpHeight = -150;
    }

    private registerAssets() : void {
        this.floor = new Asset(
            sprites.create(assets.image`floor`));
        this.floor.position = [80, 115, 0]
    }

    private buttonClickRegister() : void {
        controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
            if (this.player.baseAsset.overlapsWith(this.floor.asset)) {
                this.player.yVel = this.player.jumpHeight;
                this.player.velocity = [0, this.player.yVel];
            }
        })
    }

    private spawnCactus() : void {
        let cactus = new InteractableAsset(sprites.create(assets.image`cactus`, SpriteKind.Enemy))
        cactus.position = [160, 105, 0];
        cactus.velocity = [-75, 0];
    }

    private spawnCoin(): void {
        let coin = new InteractableAsset(sprites.create(assets.image`coin`, SpriteKind.Food))
        coin.position = [160, 60, 0];
        coin.velocity = [-75, 0];
        coin.baseAsset.setScale(1.5, ScaleAnchor.Middle);

        // We can store objects within the data of the sprite object in
        // order to retrieve them on events

        let coinCollectableData = new CollectableData();
        coinCollectableData.isCollectable = true;
        coinCollectableData.collectableType = CollectableType.Coin;
        coin.baseAsset.data['coinCollectableData'] = coinCollectableData;
    }

    private gameUpdateFunctions() : void {
        game.onUpdate(function () {
            this.player.yVel += this.level.gravity;
            
            if (this.player.baseAsset.overlapsWith(this.floor.asset)) {
                this.player.yVel = 0;
            }
            
            this.player.velocity = [0, this.player.yVel];
        })

        game.onUpdateInterval(2000, function (){
            this.spawnCactus();
            this.spawnCoin();
        })
    }

    private gameoverlapDetects(): void {
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function() {
            game.over(false)
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(player: Sprite, coin: Sprite) {
            music.baDing.play();
            info.setScore(info.score() + 100);
            let collectableData: CollectableData = coin.data['coinCollectableData']
            
            if (collectableData.isCollectable && collectableData.collectableType == CollectableType.Coin){
                coin.destroy();
            }
        })
    }
}
