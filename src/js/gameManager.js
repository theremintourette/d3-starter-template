import World from './world';
import Player from './player';
import UserInput from './userInput';


class GameManager {
  constructor() {
    this.loop = this.loop.bind(this);

    this.lastTime = 0;

    const canvas = document.getElementById('frame').firstChild;
    this.userInput = new UserInput(canvas);
    this.player = new Player();
    this.world = new World(this.player);
    this.grid = this.world.finalGrid;

    this.initGame();
  }

  initGame() {
    window.requestAnimationFrame(this.loop);
    this.started = true;
  }

  stopGame() {
    this.started = false;
  }

  update(dt) {
    this.player.update(dt);
    this.world.update(dt);
  }

  loop(timestamp) {
    if (this.started === true) {
      const dt = timestamp - this.lastTime;
      this.update(dt);
      this.lastTime = timestamp;

      window.requestAnimationFrame(this.loop);
    }
  }
}


export default GameManager;
