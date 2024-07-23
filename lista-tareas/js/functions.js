const list = document.getElementById("list");

let addElement = document.getElementById("addElement");
let cajaTexto = document.getElementById("text");

let contador = 1;

addElement.addEventListener("click",function () {

    let tarea = document.createElement("p");
    tarea.className = "tarea";

    let listItem = document.createElement("li");
    listItem.className = "list-item";

    let eliminarBtn = document.createElement("button");
    let editarBtn = document.createElement("button");

    eliminarBtn.className = "eliminar";
    eliminarBtn.innerHTML = "Eliminar";

    editarBtn.className = "editar";
    editarBtn.innerHTML = "Editar";

    tarea.innerHTML = cajaTexto.value;

    listItem.appendChild(tarea);
    listItem.appendChild(eliminarBtn);
    listItem.appendChild(editarBtn);
    
    list.appendChild(listItem);
    readButtons();
    

    
});

function readButtons(){

    editarArr = document.getElementsByClassName("eliminar");

    eliminarArr = document.getElementsByClassName("eliminar");

    for (let i = 0; i < eliminarArr.length; i++) {
    eliminarArr[i].onclick = function () {
        if(list.hasChildNodes()){
            list.removeChild(list.children[i]);
            readButtons();    
        }

    }


}


}
