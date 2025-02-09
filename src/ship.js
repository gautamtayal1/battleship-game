export class Ship{
    constructor(length){
        this.length = length
        this.hits = 0
    }

    hit(){
        return this.hits++
    }

    isSunk(){
        return this.length === this.hits
    }
}