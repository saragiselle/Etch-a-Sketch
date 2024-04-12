
const gridContainer = document.getElementById("grid_container");
const colorPicker = document.getElementById("color-picker")

let gridSize = 16;

createGrid(gridSize);


function createGrid(gridSize) {

for( let i= 0; i < gridSize * gridSize ; i++){

    const rowColumn = document.createElement("div"); 
    rowColumn.setAttribute('class', 'grid-element');
    gridContainer.appendChild(rowColumn);
    rowColumn.addEventListener("mouseover",(evt)=>{
        rowColumn.style.backgroundColor=colorPicker.value
    })
}

}

