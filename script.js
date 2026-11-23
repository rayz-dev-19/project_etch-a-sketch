const container = document.getElementById('container');



let rawInput;
let newSize;


let grid = document.getElementById("grid");
grid.addEventListener("click", () => {
     rawInput = prompt("Grid size", "1-100");
    if (rawInput === null) {
        return;
    }

    newSize = Number(rawInput);

    if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Invalid input.");
        return;
    }

    createGrid(newSize);
})

createGrid(16);

function createGrid(size) {
    container.innerHTML = "";
     
     console.log("size inside createGrid:", size);
    for (let k = 0; k < size * size; k++) {
        let squares = document.createElement('div');
        squares.className = "squares";
        container.appendChild(squares);

        squares.addEventListener("mouseenter", (e) => {
            squares.classList.add("hovered");
        })
        const squareSize = 800 / size;
        squares.style.width = `${squareSize}px`;
        squares.style.height = `${squareSize}px`;
    }
}


