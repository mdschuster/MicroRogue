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

import Character from "./character";

/**
 * Fog Class. Contains data and methods for dealing with the "fog of war" on the map. 
 */
export default class Fog {

    constructor(fogMap) {
        this.fogMap = fogMap;
        this.range = 5;
    }

    /**
     * Removes fog tiles in the area around the player.
     * @param {Character} player Player character object.
     */
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