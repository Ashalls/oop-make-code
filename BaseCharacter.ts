class BaseCharacter {
    public character: Sprite;

    get lives(): any {
        return info.life();
    }
    set lives(lives: any) {
        info.setLife(lives)
    }

    get position(): number[] {
        return [this.character.x, this.character.y, this.character.z];
    }
    set position(spritePosition: number[]) {
        this.character.x = spritePosition[0];
        this.character.y = spritePosition[1];
        this.character.z = spritePosition[2];
    }

    get velocity(): number[] {
        return [this.character.vx, this.character.vy];
    }
    set velocity(spriteVelocity: number[]) {
        this.character.vx = spriteVelocity[0];
        this.character.vy = spriteVelocity[1];
    }

    constructor(enemySprite: Sprite) {
        this.character = enemySprite;
    }
}
