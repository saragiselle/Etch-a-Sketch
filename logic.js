
const gridContainer = document.getElementById("grid_container");

for( let element= 0; element < 16 * 16 ; element++){

    const div = document.createElement("div"); 
    div.classList.add("grid-element");
    gridContainer.appendChild(div);
    div.addEventListener("mouseover",(evt)=>{
        console.log(evt)
        evt.target.classList.add("grid-element-painted");  
    })
}


