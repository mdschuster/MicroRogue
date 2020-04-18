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

    if (btn.up) {
        moved = c.move("up");
    } else if (btn.right) {
        moved = c.move("right");
    }
    else if (btn.down) {
        moved = c.move("down");
    }
    else if (btn.left) {
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
