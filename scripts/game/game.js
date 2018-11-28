import Level1 from '../levels/level1.js';

export default class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.lastT = 0;
    }

    async start() {
        requestAnimationFrame((t) => this.update(t));
    }

    update(t) {
        let delta = t - this.lastT;
        this.lastT = t;

        requestAnimationFrame((t) => this.update(t));
    }
}
