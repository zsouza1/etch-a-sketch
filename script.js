const container = document.querySelector("#container");
const gridContainer = document.querySelector("#grid-container");
const buttonContainer = document.querySelector("#button-container");
const STARTING_GRID = 16;
let pixelColor = "black"


//grid creation function
function createGrid(number) {
    for (let rowIndex = 0; rowIndex < number; rowIndex++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let colIndex = 0; colIndex < number; colIndex++) {
            const box = document.createElement("div")
            box.classList.add("box");
            box.addEventListener("mouseenter", (event) => {
            if (pixelColor == "rainbow") {
                event.target.style.backgroundColor = createRainbow();
            } else {
                event.target.style.backgroundColor = pixelColor;
            }}) 
            row.appendChild(box);
        };

        gridContainer.appendChild(row);
    } 
}
createGrid(STARTING_GRID);


const gridPrompt = document.createElement("button");
gridPrompt.classList.add("prompt-button")
buttonContainer.appendChild(gridPrompt);
gridPrompt.textContent = "Grid Size";
gridPrompt.addEventListener("click", () => {
    let number = prompt("Grid Size?");
    if (number > 100) {
        number = 100;
        alert("Grid size lowered to 100")
    } else if ((number === null) || (number === "")) {
        number = 16;
    } ;
    gridContainer.replaceChildren();
    createGrid(number);
    
})

const rainbow = document.createElement("button");
buttonContainer.appendChild(rainbow);
rainbow.textContent = "Rainbow Mode";
rainbow.addEventListener("click", () => {
    pixelColor = "rainbow";
})

const resetButton = document.createElement("button");
buttonContainer.appendChild(resetButton);
resetButton.textContent = "Reset color";
resetButton.addEventListener("click", () => {
    const resetGrid = document.querySelectorAll(".box")
    resetGrid.forEach((box) => {
        box.style.backgroundColor = "white"
        pixelColor = "black"});
});

function createRainbow() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};
