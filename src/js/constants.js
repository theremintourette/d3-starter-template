export const key = {
  UP: 87,
  DOWN: 83,
  LEFT: 65,
  RIGHT: 68,
};

export const cell = {
  PLAYER: 2,
  WALL: 1,
  FLOOR: 0,
  BORDER: -1,
};

export const color = {
  PLAYER: 50,
  FLOOR: 230,
  WALL: 120,
  BORDER: 0,
};


const rows = 30;
const cols = 30;

export const grid = {
  rows,
  cols,
  // cellSize: Math.floor(document.querySelector('canvas').width / this.rows),
};
