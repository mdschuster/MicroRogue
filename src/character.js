export default class Character {


    constructor(map, enemies) {
        this.spriteNumber = 4;
        this.x = 16;
        this.y = 16;
        this.row = this.y / 8;
        this.col = this.x / 8;
        this.moveAmount = 8;
        this.counter = 0;
        this.maxCounter = 8;
        this.isLocked = false;
        this.map = map;
        this.boundarySprites = [144, 145, 147, 148, 150, 153, 39, 40];
        this.enemies = enemies;


    }

    update() {
        this.draw();
        this.counter++;
        if (this.counter >= this.maxCounter) {
            this.isLocked = false;
            this.counter = 0;
            return;
        }
        this.isLocked = true;
    }



    move(direction) {
        if (this.isLocked == true) return;

        let chosen = this.getTile(direction);
        if (chosen == null) {
            return false;
        }

        if (this.boundaryCheck(chosen) == true) {
            return false;
        }

        let enemy = this.enemyCheck(chosen)
        if (enemy != null) {
            this.attack(enemy);
            return true;
        }

        this.row = chosen.y;
        this.col = chosen.x;
        this.x = this.col * 8;
        this.y = this.row * 8;
        this.tile = this.map.get(this.col, this.row);
        return true;
    }


    attack(enemy) {
        console.log("Player attacked enemy");
    }



    //utility functions

    boundaryCheck(tile) {
        return this.spriteCheck(tile.x, tile.y);

    }
    spriteCheck(xLoc, yLoc) {
        let t = this.map.get(xLoc, yLoc);
        if (t == null || this.boundarySprites.includes(t.sprite)) {
            return true;
        } else {
            return false;
        }
    }
    getTile(direction) {
        let yLoc = this.y;
        let xLoc = this.x;
        let row = this.row;
        let col = this.col;
        switch (direction) {
            case "up": //up
                yLoc -= this.moveAmount;
                row = yLoc / 8;
                break;
            case "right": //right
                xLoc += this.moveAmount;
                col = xLoc / 8;
                break;
            case "down": //down
                yLoc += this.moveAmount;
                row = yLoc / 8;
                break;
            case "left": //left
                xLoc -= this.moveAmount;
                col = xLoc / 8;
                break;
            default:
                return null;
        }
        return this.map.get(col, row);
    }

    enemyCheck(tile) {
        let enemy = null;
        this.enemies.forEach(e => {
            if (tile.x == e.col && tile.y == e.row) {
                enemy = e;
            }
        });
        return enemy;
    }
    draw() {
        sprite(this.spriteNumber, this.x, this.y)
    }

}