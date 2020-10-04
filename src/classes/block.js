import { row, col, css } from '../utils'; 

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h2', style } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(style));
  }
} 

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.style));
  }
} 

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { imageStyle: s, style } = this.options;
    return row(`<img src="${this.value}" style="${css(s)}" />`, css(style));
  }
} 

export class ColumnBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const html = this.value.map(col).join('');

    return row(html, css(this.options.style));
  }
} 