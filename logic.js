
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



newGrid.addEventListener('click', () =>{
    //crear funcion para remover el grid ya creado

    //preguntamos al usuario el tama;o del grid

    gridSize = parseInt(prompt('New grid size: (1-100 otherwise it will default to 16)'));
    if(!(gridSize>=1 && gridSize<=100)){ 
        gridSize = 16;
    }

    createGrid(gridSize);

});


clearGrid.addEventListener('click', () =>{

    removeAllChildren(gridContainer);
    createGrid(gridSize);
})

function removeAllChildren(selector) {

    while(selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }


}