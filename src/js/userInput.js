import {
  key,
  grid,
} from './constants';

class UserInput {
  constructor() {
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
    this.mousemove = this.mousemove.bind(this);

    this.mouse = {
      row: undefined,
      col: undefined,
    };

    this.keyMap = {
      [key.RIGHT]: 'right',
      [key.LEFT]: 'left',
      [key.UP]: 'up',
      [key.DOWN]: 'down',
    };

    this.pressedKeys = {
      left: false,
      right: false,
      up: false,
      down: false,
    };

    this.canvas = document.querySelector('canvas');
    this.canvas.addEventListener('mousedown', this.mousemove);
    window.addEventListener('keydown', this.keydown, false);
    window.addEventListener('keyup', this.keyup, false);
  }

  // eslint-disable-next-line class-methods-use-this
  mousemove(e) {
    const cellSize = Math.floor(this.canvas.width / grid.rows / 2);
    const r = this.canvas.getBoundingClientRect();
    this.mouse = {
      row: Math.floor((e.clientY - r.top) / cellSize),
      col: Math.floor((e.clientX - r.left) / cellSize),
    };
    console.log(this.mouse.row, this.mouse.col);
  }

  keydown(event) {
    const key = this.keyMap[event.keyCode];
    this.pressedKeys[key] = true;
  }

  keyup(event) {
    const key = this.keyMap[event.keyCode];
    this.pressedKeys[key] = false;
  }
}

export default UserInput;
