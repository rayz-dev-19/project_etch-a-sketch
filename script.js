const container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    let squares = document.createElement('div');
    squares.classList = "squares";
    container.appendChild(squares);

    squares.addEventListener("mouseenter", (e) => {
        squares.classList.add("hovered");
    });

}


