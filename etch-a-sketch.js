const container = document.querySelector("#container");

const pxbtn = document.createElement("button");
pxbtn.textContent = "Set Grid";
document.body.appendChild(pxbtn);

pxbtn.addEventListener("click", () => {
    let gridAsk = prompt("What grid specs do you want?");
    let n = parseInt(gridAsk);

    container.innerHTML = "";

    let squareSize = 600 / n;

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
