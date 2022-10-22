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
}
