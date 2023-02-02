export default class Node {
  #pos = null;

  constructor(pos) {
    this.pos = pos;
  }

  set pos(pos) {
    this.#pos = pos;
  }

  get pos() {
    return this.#pos;
  }
}
