import "./styles.css";
import { gameBoard } from "./game-board.js";
import { Player } from "./player.js";
import { randomize } from "./DOM.js";

randomize()


const board = new gameBoard()
const player = new Player()
console.log(player.board);

