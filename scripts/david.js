export default class David {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 100;
    this.height = 200;
    this.speed = 0;
  }

  moveBy(x, y) {
    this.x += x;
    this.y += y;
  }
}
