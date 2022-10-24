class Level {
    public gravity: number;

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
