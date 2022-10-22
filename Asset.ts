class Asset {
    public asset: Sprite;

    constructor(assetDetails: Sprite) {
        this.asset = assetDetails;
    }

    get position(): number[] {
        return [this.asset.x, this.asset.x, this.asset.z];
    }

    set position(spritePosition: number[]) {
        this.asset.x = spritePosition[0];
        this.asset.y = spritePosition[1];
        this.asset.z = spritePosition[2];
    }

}

