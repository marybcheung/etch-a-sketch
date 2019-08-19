//returns squareSize as a percentage of the gridSize
let grid = document.querySelector(".grid");
let reset = document.querySelector("button");
let field = document.querySelector("#size");
let inputs = document.querySelectorAll("input[type=radio]");
let initGridSize = 16;
let greyVal = 197;
let colorSquare = (square) => colorSquarePurple(square);

function calculateSquareSize(size) {
    return 1/size*100;
}

function colorSquarePurple(square) {
    square.style.backgroundColor = "blueviolet";
}

function colorSquareBlack(square) {
    let colorVal = square.getAttribute("shade");
    square.style.backgroundColor = "rgb("+colorVal+","+colorVal+","+colorVal+")";
    if (colorVal > 0) square.setAttribute("shade", String(+colorVal-36));
}

function randomRGB() {
    return Math.floor(Math.random()*360);
}

function colorSquareRainbow(square) {
    square.style.backgroundColor = "rgb("+randomRGB()+","+randomRGB()+","+randomRGB()+")";
}

function bindEventsToSquares() {
    let squares = document.querySelectorAll(".grid div");
    squares.forEach((square) => 
        square.addEventListener("mouseenter", () => {
            colorSquare(square);
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
            div.setAttribute("shade", "360");
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

reset.addEventListener("click", () => {
    const squares = prompt("How many squares would you like per side?");
    if (isNaN(squares) || squares <= 0 || squares > 128){
        alert("Please enter a number between 1 and 128 inclusive.");
        return;
    }
    removeGrid();
    makeGrid(squares);
}); 

inputs.forEach((input) => {
    let link = document.querySelector("link");
    input.addEventListener("click", () => {
        switch (input.value) {
        case "purple": link.href = "styles\\purple.css";
            colorSquare = colorSquarePurple;
            break;
        case "black-and-white": link.href = "styles\\bw.css";
            colorSquare = colorSquareBlack;
            break;
        case "rainbow": link.href = "styles\\rainbow.css";
            colorSquare = colorSquareRainbow;
            counter = 0;
            break;
        }
    });
});