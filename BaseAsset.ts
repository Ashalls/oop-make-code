class BaseAsset {
    public baseAsset: Sprite;

    get lives(): number {
        return info.life();
    }
    set lives(lives: number) {
        info.setLife(lives)
    }

    get spriteKind(): any {
        return this.baseAsset.kind()
    }
    set spriteKind(spriteKind: any) {
        this.baseAsset.setKind(spriteKind)
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

    constructor(spriteImage: Image) {
        this.baseAsset = sprites.create(spriteImage)
        this.baseAsset.data = new SpriteData();
    }
}
