import UserInput from './userInput';
import { cell } from './constants';

class Player {
  constructor() {
    this._position = {};
    this.velocity = 0.002;
    this.neightbours = {};
    this.UserInput = new UserInput();
  }

  get position() {
    return ({
      col: Math.round(this._position.col),
      row: Math.round(this._position.row),
    });
  }

  set position({
    row,
    col,
  }) {
    this._position = {
      row,
      col,
    };
  }

  checkNeightbours(grid) {
    const i = this.position.row;
    const j = this.position.col;
    this.neightbours.up = grid[i - 1][j];
    this.neightbours.down = grid[i + 1][j];
    this.neightbours.right = grid[i][j + 1];
    this.neightbours.left = grid[i][j - 1];
  }


  update(dt) {
    if (this.UserInput.pressedKeys.left && this.neightbours.left === cell.FLOOR) {
      this._position.col -= this.velocity * dt;
    }
    if (this.UserInput.pressedKeys.right && this.neightbours.right === cell.FLOOR) {
      this._position.col += this.velocity * dt;
    }
    if (this.UserInput.pressedKeys.down && this.neightbours.down === cell.FLOOR) {
      this._position.row += this.velocity * dt;
    }
    if (this.UserInput.pressedKeys.up && this.neightbours.up === cell.FLOOR) {
      this._position.row -= this.velocity * dt;
    }
  }
}

export default Player;
