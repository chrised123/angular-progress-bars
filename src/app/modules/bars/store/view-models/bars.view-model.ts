export class Bars {
  bars: number[];
  buttons: number[];
  limit: number;

  constructor(data) {
    this.bars = data.bars;
    this.buttons = data.buttons;
    this.limit = data.limit;
  }
}
