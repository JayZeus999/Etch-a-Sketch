const container = document.querySelector("#container");


const pxbtn = document.createElement("button");
pxbtn.textContent = "Set Grid";
document.body.appendChild(pxbtn);

pxbtn.addEventListener("click", () => {
    let gridAsk = prompt("What grid specs do you want?");
    let n = parseInt(gridAsk);
    
    if (n > 100){
        prompt("Grid specs must be below 100, try again");
    }

    container.innerHTML = " ";

    const containerSize = 600;
    const gap = 2;

    let totalGap = gap * (n - 1);
    let squareSize = (containerSize - totalGap) / n;

    for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
            const sq = document.createElement("div");
            sq.classList.add("square");

            sq.addEventListener("mouseenter", () => {
                sq.style.backgroundColor = "pink";
            });

            sq.addEventListener("mouseleave", () => {
                sq.style.backgroundColor = "blue";
            });

            sq.style.height = `${squareSize}px`
            sq.style.width = `${squareSize}px`

            container.appendChild(sq);
        }
    }

});
