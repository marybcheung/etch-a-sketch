//returns squareSize as a percentage of the gridSize
let grid = document.querySelector(".grid");
let reset = document.querySelector("button");
let form = document.querySelector("form");
const initGridSize = 64;

function calculateSquareSize(size) {
    return 1/size*100;
}

function bindEventsToSquares() {
    let squares = document.querySelectorAll(".grid div");
    squares.forEach((square) => 
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blueviolet";
        }
    ));
}

function makeGrid(gridSize) {
    let squareSize = calculateSquareSize(gridSize);
    for (let i=0; i<gridSize; i++) {
        for (let j=0; j<gridSize; j++) {
            let div = document.createElement("div");
            if (j==0) div.style.clear = "both";
            div.style.height = squareSize + "%";
            div.style.width = squareSize + "%";
            grid.appendChild(div);
        }
    }
    bindEventsToSquares();
}

function removeGrid() {
    let squares = document.querySelectorAll(".grid div");
    squares.forEach((square) => {
        grid.removeChild(square);
    });
}

makeGrid(initGridSize);

 function getRadioVal() {
     let inputs = document.querySelectorAll("input[type=radio]");
     for (let i=0; i<inputs.length; i++){
         if (inputs[i].checked == true) return inputs[i].value;
     }
 }

reset.addEventListener("click", () => {
    const squares = parseInt(prompt("How many squares per side?"));
    if (isNaN(squares) || squares <= 0){
        alert("That's not a valid number. Please try again.");
        return;
    }
    removeGrid();
    makeGrid(squares);
    let link = document.querySelector("link");
    switch(getRadioVal()) {
        case "purple": link.href = "style.css";
        break;
        case "black-and-white": link.href = "style2.css";
        break;
        case "rainbow": link.href = "style3.css";
        break
    }
}); 