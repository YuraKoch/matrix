import { Symbol } from "./symbol.js";

export function initSimbols(canvasWidth, canvasHeight, fontSize) {
  const symbols = [];

  const columnsCount = canvasWidth / fontSize;

  for (let i = 0; i < columnsCount; i++) {
    symbols[i] = new Symbol(i * fontSize, 0, fontSize, canvasHeight);
  }

  return symbols;
}