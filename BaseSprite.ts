class BaseSprite {
    public sprite: Sprite;

    get lives(): number {
        return info.life();
    }
    set lives(lives: number) {
        info.setLife(lives)
    }

    get spriteKind(): any {
        return this.sprite.kind()
    }
    set spriteKind(spriteKind: any) {
        this.sprite.setKind(spriteKind)
    }

    get position(): number[] {
        return [this.sprite.x, this.sprite.y, this.sprite.z];
    }
    set position(spritePosition: number[]) {
        this.sprite.x = spritePosition[0];
        this.sprite.y = spritePosition[1];
        this.sprite.z = spritePosition[2];
    }

    get velocity(): number[] {
        return [this.sprite.vx, this.sprite.vy];
    }
    set velocity(spriteVelocity: number[]) {
        this.sprite.vx = spriteVelocity[0];
        this.sprite.vy = spriteVelocity[1];
    }

    constructor(spriteImage: Image) {
        this.sprite = sprites.create(spriteImage)
        this.sprite.data = new SpriteData();
    }
}
