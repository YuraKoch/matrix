import { Column } from "./column.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FONT_SIZE = 16;

const columns = [];
const columnsCount = canvas.width / FONT_SIZE;

for (let i = 0; i < columnsCount; i++) {
  columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
}

context.font = `bold ${FONT_SIZE}px monospace`;

function animate() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // set symbols color
  context.fillStyle = 'green';
  columns.forEach(column => column.drawSymbol());

  setTimeout(() => requestAnimationFrame(animate), 50);
}

animate();