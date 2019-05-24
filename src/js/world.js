import { cell } from './constants';


class World {
  constructor(player, rows = 30, cols = 30) {
    this.rows = rows;
    this.cols = cols;

    this.grid = [[]];
    this.generateGrid();
    this.finalGrid = [...this.grid];
    this.player = player;
    this.player.position = this.getRandomFloorCell();
  }

  update() {
    this.player.checkNeightbours(this.grid);
    const playerPos = this.player.position;
    this.finalGrid = this.grid.map((row, i) => (
      row.map((currentCell, j) => {
        if (i === playerPos.row && j === playerPos.col) {
          return cell.PLAYER;
        }
        return currentCell;
      })
    ));
    // this.finalGrid = [...this.grid];
    // this.finalGrid[playerPos.row][playerPos.col] = cell.PLAYER;
  }

  generateGrid() {
    this.initGrid();
    this.smoothGrid(4);
  }

  initGrid() {
    this.grid = Array.from(new Array(this.rows), (_, i) => (
      Array.from(new Array(this.cols), (_, j) => {
        if (
          (i === 0 || i === this.rows - 1)
          || (j === 0 || j === this.cols - 1)
        ) {
          return cell.BORDER;
        }
        return Math.round(Math.random());
      })
    ));
  }

  smoothGrid(smoothSteps) {
    for (let i = 0; i < smoothSteps; i += 1) {
      this.grid = this.grid.map((row, i) => {
        if (i > 0 && i < this.rows - 1) {
          return row.map((_, j) => (
            this.compareWalls(i, j)
          ));
        }
        return row;
      });
    }
  }

  compareWalls(i, j) {
    let newCell = this.grid[i][j];
    if (j > 0 && j < this.cols - 1) {
      let activesCounter = 0;
      if (this.grid[i][j + 1] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i][j - 1] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i + 1][j] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i - 1][j] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i + 1][j + 1] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i + 1][j - 1] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i - 1][j + 1] === cell.WALL) {
        activesCounter += 1;
      }
      if (this.grid[i - 1][j - 1] === cell.WALL) {
        activesCounter += 1;
      }

      if (activesCounter > 4) {
        newCell = cell.WALL;
      } else if (activesCounter < 4) {
        newCell = cell.FLOOR;
      }
      return newCell;
    }
    return newCell;
  }

  getRandomFloorCell() {
    const floorCells = [];
    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        if (this.grid[i][j] === cell.FLOOR) {
          floorCells.push({
            row: i,
            col: j,
          });
        }
      }
    }
    return floorCells[Math.floor(Math.random() * floorCells.length)];
  }
}


export default World;
