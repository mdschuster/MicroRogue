# MicroRogue

MicroRogue is an unfinished clone of Rogue intended as a beginner JavaScript game development workshop.

## Getting Started  
The first few slides of the presentation describe the tools and requirements needed to create the game. A brief list is here:  
* A code editor that can be used to write JavaScript
* Pixelbox.js game engine: [link](https://pixwlk.itch.io/pixelbox)

Running and/or building the game is done directly through the game engine.

## File Organization
***Starter Code***  
Most of the files in this repo are created by the game engine itself. The starter code files are located in src/.
`main.js:` Main javascript file that contains the update loop for the game.  
`camera.js:` Camera class that controls the view location of the camera.  
`character.js:` Character class that contains all the parameters and methods for the player character.  
`enemy.js:` Enemy class that contains all the parameters and methods for the playter character.  
`fog.js:` Fog class that creates the "fog of war" over the map. This fog is uncovered by the player as they move.   

There are a couple of other files related to the graphics that are important:  

`assets/map.json:` Contains the tile maps that are displayed to the screen.  
`assets/tilesheet.png:` Contains the tiles that can be used to construct the map. The included tile sheet the monochrome sheet from Kenney's Micro Roguelike ([link](https://kenney.nl/assets/micro-roguelike)).  
`assets/palette.png:` Contains the colors used in the tilesheet.  

***Completed project***  
The files in `full/` contain the completed Pixelbox.js project for reference.  
