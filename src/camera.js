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
export default class Camera {

    constructor(target) {
        this.x = 0;
        this.y = 0;
        this.target = target;
        this.SCREENWIDTH = $screen.width;
        this.SCREENHEIGHT = $screen.height;


    }


    update() {
        let relativeX = Math.abs(this.x - this.target.x);
        let relativeY = Math.abs(this.y - this.target.y);

        if (relativeX >= this.SCREENWIDTH - this.SCREENWIDTH / 3 || relativeX <= this.SCREENWIDTH / 3) {
            this.x = this.target.x - this.SCREENWIDTH / 2;
        }
        if (relativeY >= this.SCREENHEIGHT - this.SCREENHEIGHT / 3 || relativeY <= this.SCREENHEIGHT / 3) {
            this.y = this.target.y - this.SCREENHEIGHT / 2;
        }
        camera(this.x, this.y)

    }
}