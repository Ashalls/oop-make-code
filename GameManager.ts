class GameManager {
    private player: Player;
    private floor: Asset;
    private level: Level;

    private initialSpawnRun: boolean;

    constructor() {
        this.setupLevel();
        this.registerPlayers();
        this.registerAssets();
        this.buttonClickRegister();
        this.gameUpdateFunctions();
        this.gameoverlapDetects();
    }

    private setupLevel() : void {
        this.level = new Level();
        this.level.gravity = 5;
        this.level.background = 9;
    }

    private registerPlayers() : void {
        this.player = new Player(assets.image`dino`);
        this.player.position = [15, 80, 0]
        this.player.jumpHeight = -150;
    }

    private registerAssets() : void {
        this.floor = new Asset(assets.image`floor`);
        this.floor.position = [80, 115, 0]
    }

    private buttonClickRegister() : void {
        controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
            if (this.player.sprite.overlapsWith(this.floor.sprite)) {
                this.player.sprite.vy = this.player.jumpHeight;
                this.player.velocity = [0, this.player.sprite.vy];
            }
        })
    }

    private spawnCactus() : void {
        let cactus = new Enemy(assets.image`cactus`);
        cactus.position = [160, 105, 0];
        cactus.velocity = [-75, 0];
    }

    private spawnCoin(): void {
        let coin = new InteractableAsset(assets.image`coin`);
        coin.spriteKind = SpriteKind.Food;
        coin.position = [160, 60, 0];
        coin.velocity = [-75, 0];
        coin.sprite.setScale(1.5, ScaleAnchor.Middle);
        coin.sprite.data.isCollectable = true;
        coin.sprite.data.collectableType = CollectableType.Coin;
    }

    private spawnJetpack(): void {
        let jetPack = new InteractableAsset(assets.image`jetPack`);
        jetPack.spriteKind = SpriteKind.PowerUp;
        jetPack.position = [160, 60, 0];
        jetPack.velocity = [-75, 0];
        jetPack.sprite.data.collectableType = CollectableType.PowerUp;
    }

    private gameUpdateFunctions() : void {
        game.onUpdate(function () {
            this.player.sprite.vy += this.level.gravity;
            
            if (this.player.sprite.overlapsWith(this.floor.sprite)) {
                this.player.sprite.vy = 0;
            }

            // Fix for when Dino falls gets stuck in the floor
            if (this.player.sprite.bottom > 112) {
                this.player.sprite.bottom = 109;
            }

            this.player.velocity = [0, this.player.sprite.vy];
        })

        game.onUpdateInterval(randint(10000, 15000), function () {
            if (this.initialSpawnRun) {
                this.spawnJetpack();
            }
        })

        game.onUpdateInterval(randint(2000, 3000), function () {
            this.spawnCoin();
        })

        game.onUpdateInterval(randint(1500, 3000), function (){
            this.spawnCactus();
            this.initialSpawnRun = true;
        })
    }

    private gameoverlapDetects(): void {
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function() {
            game.over(false)
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(player: Sprite, coin: Sprite) {
            music.baDing.play();
            this.level.score += 100;
            
            if (coin.data.isCollectable && coin.data.collectableType == CollectableType.Coin){
                coin.destroy();
            }
        })

        sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (player: Sprite, jetPack: Sprite) {
            // power up - use on button push
            // timer.debounce("action", 5000, power_down)
            jetPack.destroy();
        })
    }
}
