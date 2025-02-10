//event listeners

import { Player } from "./player.js";
import { gameBoard } from "./game-board.js";


const board = new gameBoard

export function randomize(){
    const randomizeBtn = document.querySelector('.randomize-btn')
    const playerGameContainer = document.querySelector('.player-game-container')
    const compGameContainer = document.querySelector('.comp-game-container')

    //
    console.log(board);
    
    //

    let isRandomized = false

    randomizeBtn.addEventListener('click', () => {
        if(isRandomized) return
        isRandomized = true

        // Create separate game boards for player and computer
        const playerBoard = new gameBoard();
        const compBoard = new gameBoard();

        // Randomize ship positions for each board
        playerBoard.storeShips();
        compBoard.storeShips();

        const playerGridArray = playerBoard.mainGrid;
        const compGridArray = compBoard.mainGrid;

        const createGridContainer = () => {
            const gridContainer = document.createElement('div');
            for (let i = 1; i < 101; i++){ 
                const gridBox = document.createElement('div');
                gridBox.classList.add('grid-boxes');
                gridBox.innerHTML = 0;
                gridContainer.appendChild(gridBox);
            }
            gridContainer.classList.add('grid-container');
            return gridContainer;
        };

        const playerGridContainer = createGridContainer();
        const compGridContainer = createGridContainer();

        playerGameContainer.appendChild(playerGridContainer);
        compGameContainer.appendChild(compGridContainer);

        const updateGridBoxes = (container, gridArray) => {
            const gridBoxes = container.querySelectorAll('.grid-boxes');
            gridBoxes.forEach((box, index) => {
                const x = index % 10; // Column index
                const y = Math.floor(index / 10); // Row index

                if (gridArray[y] && gridArray[y][x] !== undefined) {
                    box.innerText = gridArray[y][x];
                } else {
                    console.error(`Invalid access at gridArray[${y}][${x}]`);
                }

                // Optional: Add a data attribute for easier reference
                box.setAttribute("data-x", x);
                box.setAttribute("data-y", y);
            });
        };

        updateGridBoxes(playerGridContainer, playerGridArray);
        updateGridBoxes(compGridContainer, compGridArray);
    })
}
