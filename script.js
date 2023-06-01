import { Column } from "./column.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const FONT_SIZE = 16;
let columns = [];
let columnsCount = 0;

initCanvasSize();
initColumns();

animate();

function initCanvasSize() {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
}

function initColumns() {
  columnsCount = canvas.width / FONT_SIZE;
  columns = [];
  for (let i = 0; i < columnsCount; i++) {
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context));
  }
}

function animate() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // set symbols color
  context.fillStyle = 'green';
  context.font = `bold ${FONT_SIZE}px monospace`;
  columns.forEach(column => column.drawSymbol());

  setTimeout(() => requestAnimationFrame(animate), 50);
}

window.addEventListener('resize', () => {
  initCanvasSize();
  initColumns();
  context.clearRect(0, 0, canvas.width, canvas.height);
});


// audio

// Создаем элемент аудио
var audio = new Audio('./assets/audio/sound.mp3'); // Путь к звуку 'audio.mp3

// Устанавливаем атрибуты для аудио
audio.loop = true; // Устанавливаем зацикливание музыки
audio.volume = 0.5; // Устанавливаем громкость (от 0 до 1)

// Вставляем элемент аудио на страницу
document.body.appendChild(audio);

// Создаем кнопку для управления музыкой
var audio_button = document.createElement('button'); // Создаем кнопку
audio_button.innerHTML = 'Play music'; // Устанавливаем название кнопки
audio_button.style.position = 'absolute'; // Устанавливаем абсолютное позиционирование
audio_button.style.top = '10px'; // Устанавливаем отступ сверху
audio_button.style.left = '10px'; // Устанавливаем отступ слева
audio_button.style.zIndex = '100'; // Устанавливаем z-index
audio_button.style.padding = '10px'; // Устанавливаем отступ внутри кнопки
audio_button.style.borderRadius = '5px'; // Устанавливаем радиус скругления уголков
audio_button.style.border = 'none'; // Устанавливаем границу
audio_button.style.outline = 'none'; // Убираем контур
audio_button.onclick = function() {
  if (audio.paused) { // Проверяем, если аудио на паузе
    audio.play(); // Запускаем
    audio_button.innerHTML = 'Pause music'; // Меняем название кнопки
  } else { // Иначе
    audio.pause(); // Ставим на паузу
    audio_button.innerHTML = 'Play music'; // Меняем название кнопки
  }
}
// Вставляем кнопку на страницу
document.body.appendChild(audio_button);

