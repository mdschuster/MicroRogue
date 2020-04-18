export default class Fog {

    constructor(fogMap) {
        this.fogMap = fogMap;
        this.range = 5;
    }

    updateFog(player) {
        let tileX = player.x / 8;
        let tileY = player.y / 8;
        for (let i = -this.range; i <= this.range; i++) {
            for (let j = -this.range; j <= this.range; j++) {
                let tileI = tileX + i;
                let tileJ = tileY + j;
                if (this.fogMap.get(tileI, tileJ) != null) {
                    this.fogMap.remove(tileI, tileJ);
                }
            }
        }

    }

}