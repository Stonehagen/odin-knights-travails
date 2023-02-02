// eslint-disable-next-line import/extensions
import Node from './Node.js';

export default () => {
  const width = 8;
  const height = 8;
  const board = [];
  for (let x = width; x > 0; x -= 1) {
    const row = [];
    for (let y = 0; y < height; y += 1) {
      row.push(new Node([x, y + 1]));
    }
    board.push(row);
  }

  return board;
};
