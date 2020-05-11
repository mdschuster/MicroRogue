/*
Copyright (c) 2020, Micah Schuster
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/**
 * Character Class. Contains the data and methods related to the player character.
 */
export default class Character {


    constructor(map, enemies) {
        this.spriteNumber = 4;
        this.x = 16;
        this.y = 16;
        this.row = this.y / 8;
        this.col = this.x / 8;
        this.moveAmount = 8;
        this.map = map;
        this.boundarySprites = [144, 145, 147, 148, 150, 153, 39, 40];
        this.enemies = enemies;
    }

    /**
     * Updates the sprite to the correct location and locks the movement for "maxCounter" frames.
     */
    update() {
        this.draw();
    }

    /**
     * Determines if the the player moves or attacks. Updates player data.
     * @param {string} direction Direction that the player the attempting to move.
     * @returns {Boolean} True if the player has moved or attacked, false otherwise.
     */
    move(direction) {
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

    /**
     * Performs attack action against enemy.
     * @param {Enemy} enemy 
     */
    attack(enemy) {
        console.log("Player attacked enemy");
    }



    //utility functions

    /**
     * Determines if the input tile is a boundary sprite.
     * @param {Tile} tile 
     * @returns {Boolean} True if the tile is a boundary sprite, false otherwise.
     */
    boundaryCheck(tile) {
        return this.spriteCheck(tile.x, tile.y);

    }
    /**
     * Determins if the input row and column are boundary sprites.
     * @param {Integer} xLoc Column in the tile map.
     * @param {Integer} yLoc Row in the tile map.
     */
    spriteCheck(xLoc, yLoc) {
        let t = this.map.get(xLoc, yLoc);
        if (t == null || this.boundarySprites.includes(t.sprite)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * Gets the tile in the input direction.
     * @param {string} direction Direction to examine for the tile.
     * @returns {Tile} Tile in the input direction. Null if there is no tile.
     */
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

    /**
     * Checks if the input tile contains and enemy object.
     * @param {Tile} tile Tile to examine.
     * @returns {Enemy} Enemy object if there is an enemy in the tile, null otherwise.
     */
    enemyCheck(tile) {
        let enemy = null;
        this.enemies.forEach(e => {
            if (tile.x == e.col && tile.y == e.row) {
                enemy = e;
            }
        });
        return enemy;
    }
    /**
     * Draws the sprite in the correct x and y location.
     */
    draw() {
        sprite(this.spriteNumber, this.x, this.y)
    }

}