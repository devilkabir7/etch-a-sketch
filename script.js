"use strict"

function clearGrid() {

    while(containerDiv.lastElementChild) {

        containerDiv.removeChild(containerDiv.lastElementChild);
    }
}
function createGrid(side) {

    clearGrid();
    const maxPercentage = 100;

    for(let i = 0; i < side * side; i++) {

        const divWidth = ( maxPercentage / side).toString() + "%";
        let newDiv = document.createElement("div");
        newDiv.style.width =  divWidth;
        newDiv.classList.toggle("grid-square");
    
        containerDiv.appendChild(newDiv);
    }
}

function handleHover(event) {

    const square = event.target;
    if(square.classList.contains("grid-square")) {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        square.style.backgroundColor = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
        square.style.opacity = (+square.style.opacity + 0.1).toString();
        //event.target.classList.add("black-bg");
    }
}

function changeSide() {

    let side = -1;

    while(side > 100 || side < 0) {

        console.log("in");
        side = prompt("Enter grid size (between 1 and 100");

    }

    createGrid(side);

}

const containerDiv = document.querySelector("#grid-container");
const gridButton = document.querySelector("#prompt");

containerDiv.addEventListener("mouseover", handleHover);
gridButton.addEventListener("click", changeSide);

const defaultSide = 32;
createGrid(defaultSide);