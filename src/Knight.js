export default class Knight {
  #pos = null;

  #possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  constructor(home) {
    this.pos = home;
  }

  get pos() {
    return this.#pos;
  }

  set pos(pos) {
    this.#pos = pos;
  }

  get possibleMoves() {
    return this.#possibleMoves;
  }
}
