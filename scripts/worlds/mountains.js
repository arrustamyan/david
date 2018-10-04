import World from './world.js';

export default class Mountains extends World {
    async initialize(canvas, context) {
        console.log('initializing the whole world!!!');
        await Promise.all(this.objects.map(object => object.initialize()));
        return this.objects.map(object => object.place(canvas, context));
    }

    update(delta, canvas, context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.objects.map(object => object.update(delta, canvas, context));
    }
}
