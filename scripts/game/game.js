import Level1 from '../levels/level1.js';

export default class Game {
    constructor(canvas) {
        this.levels = [
            new Level1,
        ];
        this.currentLevel = null;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.lastT = 0;
    }

    async initialize() {
        this.currentLevel = this.levels[0];
        await this.currentLevel.initialize(this.canvas, this.context);

        requestAnimationFrame((t) => this.update(t));
    }

    update(t) {
        let delta = t - this.lastT;
        this.lastT = t;

        this.currentLevel.update(delta, this.canvas, this.context);
        requestAnimationFrame((t) => this.update(t));
    }
}
