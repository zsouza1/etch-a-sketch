const container = document.querySelector("#container");


const box = document.createElement("div");



function createGrid() {
    for (let i = 0; i < 100; i++) {
        const box = document.createElement("div");
        box.classList.add("box")
        container.appendChild(box);
        box.textContent = i
        box.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "black";
})
    }
}

createGrid();

const reset = document.createElement("button");
container.appendChild(reset);
reset.textContent = "Reset";
reset.addEventListener("click", () => {
    box.style.background = "grey";
        
   
    console.log("click")
});



