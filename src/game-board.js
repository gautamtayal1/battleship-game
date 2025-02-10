import { Ship } from "./ship.js"

export class gameBoard{
    constructor(){
        this.ships = {
            carrier: new Ship(5),
            battleship: new Ship(4),
            cruiser: new Ship(3),
            submarine: new Ship(3),
            destroyer: new Ship(2) 
        }
        this.missedShots = []
        this.hitShots = []
        this.mainGrid = this.createGrid()
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
        console.log(gridArray)
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
        let shipCors = []

        for (let ship of Object.values(this.ships)) {
            let cor = this.shipsPosition(ship.length);
            ship.coordinates = cor[0]; // Store the coordinates in the ship object
            shipCors.push(cor);
            console.log(shipCors);
        }
        
        shipCors.forEach(ship => {
            ship[0].forEach(coordinate => {
                this.mainGrid[coordinate[1]][coordinate[0]] = "X";
            });
        });
        console.log(Object.values(this.ships))
        return this.mainGrid
    }

    recieveAttack(x,y) {
        if (this.mainGrid[y][x] === "X"){
            this.hitShots.push([x,y])
            let shipObj = Object.values(this.ships)
            for (let i = 0; i < 5; i++){
                for (let j = 0; j < shipObj[i].coordinates.length; j++){
                    if (x === shipObj[i].coordinates[j][1] && y == shipObj[i].coordinates[j][0]){
                        shipObj[i].hit()

                        if (shipObj[i].isSunk()){
                            console.log("sunk")
                        }
                    }
                }
            }
        } else {
            this.missedShots.push([x,y])
        }
    }

    allShipsSunk() {
        return Object.values(this.ships).every(ship => ship.isSunk());
    }
    
}