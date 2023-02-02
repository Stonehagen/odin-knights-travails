/* eslint-disable class-methods-use-this */
/* eslint-disable operator-linebreak */
export default class Graph {
  #graph = new Map();

  #root = null;

  constructor(board, piece) {
    this.#generateGraph(board, piece);
  }

  get gameboard() {
    return this.#graph;
  }

  set gameboard(board) {
    this.#graph = board;
  }

  get root() {
    return this.#root;
  }

  set root(node) {
    this.#root = node;
  }

  #getXCoordinate(x) {
    return x - 1;
  }

  #getYCoordinate(y) {
    return (y - 8) * -1;
  }

  checkPos(pos1, pos2) {
    return pos1[0] === pos2[0] && pos1[1] === pos2[1];
  }

  find(pos) {
    const nodes = Array.from(this.#graph.keys());
    return nodes.find((node) => this.checkPos(node.pos, pos));
  }

  #generateGraph(board, piece) {
    board.forEach((row) => {
      row.forEach((node) => {
        piece.possibleMoves.forEach((move) => {
          const x = move[0] + node.pos[0];
          const y = move[1] + node.pos[1];
          if (x > 0 && x <= 8 && y > 0 && y <= 8) {
            if (this.#graph.get(node)) {
              this.#graph.set(
                node,
                this.#graph
                  .get(node)
                  .concat([
                    board[this.#getYCoordinate(y)][this.#getXCoordinate(x)],
                  ]),
              );
            } else {
              this.#graph.set(node, [
                board[this.#getYCoordinate(y)][this.#getXCoordinate(x)],
              ]);
            }
          }
        });
      });
    });
  }

  checkIfVisitied(moves, node) {
    let visited = false;
    moves.forEach((move) => {
      if (move[0] === node.pos[0] && move[1] === node.pos[1]) {
        visited = true;
      }
    });
    return visited;
  }

  move(moves, startNode, endNode) {
    moves.push(startNode.pos);
    if (this.checkPos(startNode.pos, endNode.pos)) {
      return moves;
    }
    if (moves.length > 10) {
      return null;
    }
    let newMoves = null;
    this.#graph.get(startNode).forEach((node) => {
      if (!this.checkIfVisitied(moves, node)) {
        const tempMoves = this.move([...moves], node, endNode);
        if (tempMoves !== null) {
          if (newMoves !== null) {
            newMoves =
              newMoves.length > tempMoves.length ? tempMoves : newMoves;
          } else {
            newMoves = tempMoves;
          }
        }
      }
    });
    return newMoves;
  }

  findShortestPath(startPos, endPos) {
    const moves = [];
    const startNode = this.find(startPos);
    const endNode = this.find(endPos);
    console.log(this.move(moves, startNode, endNode));
  }
}
