import { gameBoard } from "./game-board.js"

export class Player{

    constructor(){
        this.board = new gameBoard()
        this.isPlayer = true
        this.previousAttacks = []
    }

    attackOpponent (x, y) {
        
    }

    computerAttack(){
        this.isPlayer = false
        let XCor, YCor;
        do {
            XCor = Math.floor(Math.random() * 10);
            YCor = Math.floor(Math.random() * 10);
        } while (this.board.missedShots.some(shot => shot[0] === XCor && shot[1] === YCor) || 
                this.board.hitShots.some(shot => shot[0] === XCor && shot[1] === YCor));

        this.board.recieveAttack(XCor, YCor);
        }
}