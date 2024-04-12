
const gridContainer = document.getElementById("grid_container");
const colorPicker = document.getElementById("color-picker");
const newGrid = document.getElementById("new-grid");
const clearGrid = document.getElementById("clear-grid");


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



