import GameObject from './object.js';

export default class Mountains extends GameObject {
    async initialize() {
        console.log('initializing David');
        return;
    }

    place(canvas, context) {
        this.width = canvas.width;
        this.height = canvas.height;
        this.draw(context);
    }

    update(delta, canvas, context) {
        this.draw(context);
    }

    draw(context) {
      let grd = context.createLinearGradient(150.000, 0.000, 150.000, 300.000);

      grd.addColorStop(0.000, 'rgba(255, 110, 2, 1.000)');
      grd.addColorStop(1.000, 'rgba(255, 255, 0, 1.000)');
      grd.addColorStop(1.000, 'rgba(255, 109, 0, 1.000)');

      context.fillStyle = grd;
      context.fillRect(0, 0, 500.000, 300.000);
    }
}
