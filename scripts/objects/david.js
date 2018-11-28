import LinearMove from '../motions/linearMove.js';

import GameObject from './object.js';

export default class David extends GameObject {
    async initialize() {
        return;
    }

    place(canvas, context) {
        this.width = 30;
        this.height = 70;
        this.x = 50;
        this.y = canvas.height - this.height - 50;
        this.draw(context);
    }

    draw(context) {
        // let { x, y, width, height } = this;
        // context.fillStyle = 'green';
        // context.fillRect(x, y, width, height);
    }

    update(delta, canvas, context) {
        if (this.motion && !this.motion.done()) {
            this.moveBy(...this.motion.getNextStep(delta));
        } else if (this.motion && this.motion.done()) {
            this.motion = new LinearMove();
        }
        this.draw(context);
    }
}
