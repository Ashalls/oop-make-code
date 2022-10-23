class Level {
    private _gravity: number;

    get gravity(): number {
        return this._gravity;
    }
    set gravity(gravity: number) {
        this._gravity = gravity;
    }

    get background(): number {
        return scene.backgroundColor();
    }
    set background(background: number) {
        scene.setBackgroundColor(background);
    }

    get score(): number {
        return info.score();
    }
    set score(score: number) {
        info.setScore(score)
    }
}
