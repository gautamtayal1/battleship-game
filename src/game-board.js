import { Ship } from "./ship.js"

export class gameBoard{
    constructor(ships){
        this.ships = []
        this.missedShots = []
        this.hitShots = []
    }

    createGrid(){
        let singleGrid = []
        let gridArray = []
        for (let i = 0; i < 10; i++){
            for (let j = 0; j < 10; j++) {
                singleGrid.push(0)
            }
            gridArray.push(singleGrid)
            singleGrid = []
        }
        return gridArray
    }

    shipsPosition(ship) {
        const xCor = Math.floor(Math.random() * (10 - ship))
        const yCor = Math.floor(Math.random() * (10 - ship))

        let dummyArr1 = []
        let dummyArr2 = []
        const shipCor = []

        for (let i = 0; i < ship; i++){
            let finalCor1 = [xCor, (yCor + i)]

            dummyArr1.push(finalCor1)
            let finalCor2 = [(xCor + i), yCor]

            dummyArr2.push(finalCor2)
            
        }
        const randNum = Math.random()
        if(randNum > .5){
            shipCor.push(dummyArr1)
        } else {
            shipCor.push(dummyArr2)
        }
        return shipCor
    }

    storeShips() {
        const ships = [
            new Ship(5), // Carrier
            new Ship(4), // Battleship
            new Ship(3), // Cruiser
            new Ship(3), // Submarine
            new Ship(2)  // Destroyer
        ];
        
        let shipCors = []

        for (let ship of ships){
            let cor = this.shipsPosition(ship.length)
            shipCors.push(cor)
        }
        
        let mainGrid = this.createGrid()
       
        shipCors.forEach(ship => {
            ship[0].forEach(coordinate => {
                mainGrid[coordinate[1]][coordinate[0]] = "X";
            });
        });
        return mainGrid
    }

    recieveAttack(x,y) {
        let grid = this.storeShips()
        if (grid[y][x] === "X"){
            this.hitShots.push([x,y])
            hit() //insert ship constructer hit method
        } else {
            this.missedShots.push([x,y])
        }
    }

    // isSunk(ship) {
    //     const ships = [
           
    // }

}