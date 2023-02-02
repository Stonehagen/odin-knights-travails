import Gameboard from './src/Gameboard.js';
import Graph from './src/Graph.js';
import Knight from './src/Knight.js';

const gameboard = Gameboard();

const knight = new Knight([2, 2]);
const newGraph = new Graph(gameboard, knight);
newGraph.findShortestPath([3, 3], [4, 3]);
