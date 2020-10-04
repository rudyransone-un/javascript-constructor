import { block } from '../utils';
import { TextBlock, TitleBlock } from './block';

export class Sidebar {
  constructor(selector, callback) {
    this.$el = document.querySelector(selector);

    this.update = callback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);

    this.$el.addEventListener('submit', this.add.bind(this));
  }

  get template() {
    return [
      block('title'),
      block('text'),
    ].join('');
  }

  add(event) {
    event.preventDefault()

    const type = event.target.name;
    const value = event.target.value.value;
    const style = event.target.style.value;

    const newBlock = type === 'text' 
      ? new TextBlock(value, {style}) 
      : new TitleBlock(value, {style});

    this.update(newBlock);

    event.target.value.value = '';
    event.target.style.value = '';
  }
}

