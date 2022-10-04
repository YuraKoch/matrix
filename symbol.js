const CHARACTERS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン0123456789';

export class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.symbol = '';
    this.canvasHeight = canvasHeight;
  }

  draw(context) {
    if (this.y === 0 && Math.random() < 0.98) {
      return;
    }

    const characterIndex = Math.floor(Math.random() * CHARACTERS.length);
    this.symbol = CHARACTERS[characterIndex];

    context.fillText(this.symbol, this.x, this.y);

    if (this.y > this.canvasHeight) {
      this.y = 0;
    } else {
      this.y += this.fontSize;
    }
  }
}