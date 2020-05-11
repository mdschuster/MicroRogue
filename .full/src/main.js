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
import Character from './character.js';
import Camera from './camera.js';
import Fog from './fog.js';
import Enemy from './enemy.js';
//var character = require('./character');



let background = getMap("map");
let fogMap = getMap("fog");

paper(0);

let enemies = [];

const c = new Character(background, enemies);
const camera = new Camera(c);
const fog = new Fog(fogMap);
const enemy1 = new Enemy(6, 18, c, background);



enemies[0] = enemy1;

var moved = false;
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Update is called once per frame
exports.update = function () {

    if (btnp.up) {
        moved = c.move("up");
    } else if (btnp.right) {
        moved = c.move("right");
    }
    else if (btnp.down) {
        moved = c.move("down");
    }
    else if (btnp.left) {
        moved = c.move("left");
    }
    cls();
    //camera(c.x, c.y);
    draw(background, 0, 0);

    //player update
    c.update();
    if (moved) {
        enemies.forEach(e => {
            e.update();
        });

        moved = false;
    }
    enemies.forEach(e => {
        e.draw();
    });

    //update camera to follow player
    camera.update();

    //fog update
    fog.updateFog(c);
    draw(fogMap, 0, 0);
};
