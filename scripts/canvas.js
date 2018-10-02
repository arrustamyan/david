class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }
}

let canvas = document.getElementById('main');

export default new Canvas(canvas);
