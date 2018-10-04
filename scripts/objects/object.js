export default class GameObject {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.motion = null;
    }

    initialize() {}

    place() {}

    update() {}

    draw() {}

    moveBy(x = 0, y = 0) {
        this.x += x;
        this.y += y;
    }
}
