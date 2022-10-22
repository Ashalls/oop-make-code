class BaseAsset {
    public baseAsset: Sprite;

    get lives(): any {
        return info.life();
    }
    set lives(lives: any) {
        info.setLife(lives)
    }

    get position(): number[] {
        return [this.baseAsset.x, this.baseAsset.y, this.baseAsset.z];
    }
    set position(spritePosition: number[]) {
        this.baseAsset.x = spritePosition[0];
        this.baseAsset.y = spritePosition[1];
        this.baseAsset.z = spritePosition[2];
    }

    get velocity(): number[] {
        return [this.baseAsset.vx, this.baseAsset.vy];
    }
    set velocity(spriteVelocity: number[]) {
        this.baseAsset.vx = spriteVelocity[0];
        this.baseAsset.vy = spriteVelocity[1];
    }

    constructor(enemySprite: Sprite) {
        this.baseAsset = enemySprite;
        let dataStorageOnSprite: { [key: string]: any } = {};
        this.baseAsset.data = dataStorageOnSprite;
    }
}
