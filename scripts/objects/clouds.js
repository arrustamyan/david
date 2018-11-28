import GameObject from './object.js';

import LinearMove from '../motions/linearMove.js';

export default class Clouds extends GameObject {
    async initialize(canvas, context) {
        console.log('init');
        this.clouds = [];
        this.motion = new LinearMove(0.02);
        return;
    }

    place(canvas, context) {
        this.width = canvas.width;
        this.height = canvas.height;

        this.clouds.push(this.generateCloud());

        this.draw(canvas, context);
    }

    generateCloud() {
        return {
            x: 300,
            y: 100,
        }
    }

    update(delta, canvas, context) {
        console.log('update');
        this.clouds.forEach(cloud => {
            let [x, y] = this.motion.getNextStep(delta);
            cloud.x += x;
            cloud.y += y;

            if (cloud.x < -15) {
                cloud.x = canvas.width + 15;
            }
        });
        this.draw(canvas, context);
    }

    draw(canvas, context) {
        this.clouds.forEach(cloud => {
            context.fillStyle = '#EEE';
            context.beginPath();
            context.arc(cloud.x, cloud.y, 20, 0, 2 * Math.PI);
            context.closePath();
            context.fill();

            context.fillStyle = '#DDD';
            context.beginPath();
            context.arc(cloud.x - 20, cloud.y + 10, 7, 0, 2 * Math.PI);
            context.closePath();
            context.fill();

            context.fillStyle = '#CCC';
            context.beginPath();
            context.arc(cloud.x + 15, cloud.y + 5, 10, 0, 2 * Math.PI);
            context.closePath();
            context.fill();

        });
    }
}
