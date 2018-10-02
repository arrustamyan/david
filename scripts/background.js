export default class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 200;
    this.speed = 0.1;
    this.imagePromise = new Promise((resolve) => {
      let image = new Image();
      image.src = './assets/bg.jpg';
      image.onload = () => resolve(image);
    });
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }

  image() {
    return this.imagePromise;
  }
}
