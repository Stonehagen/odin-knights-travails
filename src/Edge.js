export default class Edge {
  #a = null;

  #b = null;

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(a) {
    this.#a = a;
  }

  get a() {
    return this.#a;
  }

  set b(b) {
    this.#b = b;
  }

  get b() {
    return this.#b;
  }
}
