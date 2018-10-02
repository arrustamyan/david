import canvas from './canvas.js';
import David from './david.js';
import Background from './background.js';

let david = new David();
let background = new Background();

canvas.canvas.width = window.innerWidth;
canvas.canvas.height = 300;

function clear() {
  canvas.context.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
}

function update(delta) {
  david.moveBy(delta * david.speed, 0);
  background.moveBy(-delta * background.speed, 0);
}

async function draw() {
  let { x, y, width, height } = david;
  let image = await background.image();
  canvas.context.drawImage(image, background.x, background.y);
  canvas.context.fillStyle = 'green';
  canvas.context.fillRect(x, y, width, height);
}

let lastT = 0;

function sync(t) {
  let delta = t - lastT;
  lastT = t;

  clear();

  update(delta);

  draw();

  requestAnimationFrame(sync);
}

requestAnimationFrame(sync);
