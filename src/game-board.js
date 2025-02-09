import { Ship } from "./ship.js"

export class gameBoard{
    constructor(ships ){
        this.ships = ships
    }

    createShips() {
        const carrier = new Ship(5)
        const battleship = new Ship(4)
        const cruiser = new Ship(3)
        const submarine = new Ship(3)
        const destroyer = new Ship(2)
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

    storeShips(ship) {
        const xCor = Math.floor(Math.random() * (10 - ship))
        const yCor = Math.floor(Math.random() * (10 - ship))

        const shipCor = []

        for (let i = 0; i < ship; i++){
            let finalCor1 = [xCor, (yCor + i)]
            let dummyArr1 = []
            dummyArr1.push(finalCor1)
            
            let finalCor2 = [(xCor + i), yCor]
            let dummyArr2 = []
            dummyArr2.push(finalCor2)

            const randNum = Math.random()
            
            if(randNum > .5){
                shipCor.push(dummyArr1)
            } else {
                shipCor.push(dummyArr2)
            }
        }
        return shipCor
    }
}

