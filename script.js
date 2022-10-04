import { initSimbols } from "./symbols-initialization.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 14;

const symbols = initSimbols(canvas.width, canvas.height, FONT_SIZE);
ctx.font = FONT_SIZE + 'px monospace';

let lastTime = 0;
const TIME_DELAY = 25;
function animate(timestamp) {
  if (timestamp - lastTime > TIME_DELAY) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.textAlign = 'center';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // set symbols color
    ctx.fillStyle = 'green';
    symbols.forEach(symbol => symbol.draw(ctx));

    lastTime = timestamp;
  }

  requestAnimationFrame(animate);
}

animate(0);