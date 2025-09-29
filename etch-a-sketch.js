const container = document.querySelector("#container");

const pxbtn = document.createElement("button");
pxbtn.textContent = "Set Grid";
document.body.appendChild(pxbtn)

pxbtn.addEventListener("click", () => {
    let gridask = prompt("What grid specs do you want?");
});

for (j = 0; j < 16; j++) {
    for (i = 0; i < 16; i++) {
        const sq = document.createElement("div");
        sq.classList.add("square");

        sq.addEventListener("mouseenter", () => {
            sq.style.backgroundColor = "pink";
        });

        sq.addEventListener("mouseleave", () => {
            sq.style.backgroundColor = "blue";
        });

        container.appendChild(sq);
    }
}
