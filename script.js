import { initSimbols } from "./symbols-initialization.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

const symbols = initSimbols(canvas.width, canvas.height, FONT_SIZE);
ctx.font = `bold ${FONT_SIZE}px monospace`;

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.textAlign = 'center';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // set symbols color
  ctx.fillStyle = 'green';
  symbols.forEach(symbol => symbol.draw(ctx));

  setTimeout(() => requestAnimationFrame(animate), 100);
}

animate();