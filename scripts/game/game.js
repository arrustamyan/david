import Clouds from '../objects/clouds.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.lastT = 0;

        this.initializeObjects();
    }

    initializeObjects() {
        this.objects = [
            new Clouds(),
        ];

        for(let object of this.objects) {
            object.initialize();
        }
    }

    async start() {
        requestAnimationFrame((t) => this.update(t));
    }

    update(t) {
        let delta = t - this.lastT;
        this.lastT = t;

        for (let object of this.objects) {
            object.update(delta, this.canvas, this.context);
        }

        requestAnimationFrame((t) => {
            this.update(t);
            this.drawProgress(t);
        });
    }

    drawProgress(t) {
        // draw the progress points
    }
}
