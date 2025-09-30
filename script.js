const container = document.querySelector("#container");
const gridContainer = document.querySelector("#grid-container");
const buttonContainer = document.querySelector("#button-container");
const STARTING_GRID = 10;

//grid creation function
function createGrid(number) {
    for (let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        
        for (let i = 0; i < number; i++) {
            const box = document.createElement("div")
            box.classList.add("box");
            box.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
            })
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
        number = 10;
    } ;
    gridContainer.replaceChildren();
    createGrid(number);
    
})







const resetButton = document.createElement("button");
buttonContainer.appendChild(resetButton);
resetButton.textContent = "Reset color";
resetButton.addEventListener("click", () => {
    const resetGrid = document.querySelectorAll(".box")
    resetGrid.forEach((box) => {
        box.style.backgroundColor = "white"});
});

