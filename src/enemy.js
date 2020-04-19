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
 * Class Enemy. Contains the properties and methods for enemy AI.
 */
export default class Enemy {

    constructor() {

    }

    /**
     * Method to move and draw the enemy object.
     */
    update() {

    }

    /**
     * Decides if the enemy will move or attack, based on relative position between enemy and player.
     * Updates the appropriate enemy fields.
     */
    move() {

    }

    /**
     * Performs attack.
     */
    attack() {

    }





    //utility functions

    /**
     * Examines all tiles around the enemy and determines which is cloest to the player.
     * @returns {Tile} Tile that the enemy will attempt to move to.
     */
    getTile() {
        let dirs = [];
        dirs[0] = this.map.get(this.col, this.row - 1);  //up
        dirs[1] = this.map.get(this.col + 1, this.row);  //right
        dirs[2] = this.map.get(this.col, this.row + 1);  //down
        dirs[3] = this.map.get(this.col - 1, this.row);  //left

        dirs.forEach((dir, i) => {
            if (dir == null || this.boundarySprites.includes(dir.sprite)) {
                dirs[i] = null;
            }
        });

        return this.shortestDistanceToPlayer(dirs[0], this.shortestDistanceToPlayer(dirs[1], this.shortestDistanceToPlayer(dirs[2], dirs[3])));

    }
    /**
     * Draws the enemy sprite at its current location.
     */
    draw() {
        sprite(this.spriteNumber, this.x, this.y)
    }

    /**
     * Computes euclidean distance between two tiles.
     * @param {Tile} tile1 First tile.
     * @param {Tile} tile2 Second tile.
     * @returns {Tile} Euclidean distance between the two parameters.
     */
    computeDistance(tile1, tile2) {
        return Math.sqrt((tile1.x - tile2.x) * (tile1.x - tile2.x) + (tile1.y - tile2.y) * (tile1.y - tile2.y));
    }

    /**
     * Compares two tiles to determine if they have the same x and y coordinate.
     * @param {Tile} tile1 First tile to compare.
     * @param {Tile} tile2 Second tile to compare.
     * @returns {Boolean} True if the tiles have the same coordinates, false otherwise.
     */
    equals(tile1, tile2) {
        if (tile1 == null || tile2 == null) {
            return false;
        }
        if (tile1.x == tile2.x && tile1.y == tile2.y) { return true; }
        return false;
    }

    /**
     * Detmines which of the two input tiles are closest to the player.
     * @param {Tile} tile1 First tile to consider.
     * @param {Tile} tile2 Second tile to consider.
     * @returns {Tile} Reference to the tile that is closer to the player, null if both inputs are null.
     */
    shortestDistanceToPlayer(tile1, tile2) {
        if (tile1 == null && tile2 == null) {
            return null;
        } else if (tile1 == null) {
            return tile2;
        } else if (tile2 == null) {
            return tile1;
        }

        if (this.computeDistance(tile1, this.player.tile) < this.computeDistance(tile2, this.player.tile)) {
            return tile1;
        } else {
            return tile2;
        }

    }

}