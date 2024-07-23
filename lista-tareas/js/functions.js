const list = document.getElementById("list");

let addElement = document.getElementById("addElement");
let cajaTexto = document.getElementById("text");


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
    eliminarTarea();
    editarTarea();
    
});

function readButtons(){
    editarArr = document.getElementsByClassName("editar");

    eliminarArr = document.getElementsByClassName("eliminar");
}


function eliminarTarea(){
    for (let i = 0; i < eliminarArr.length; i++) {
        eliminarArr[i].onclick = () =>{
            list.hasChildNodes() ?  list.removeChild(list.children[i]) : console.log("Error"); 
            readButtons();
        }
    }
}

function editarTarea(){
    for (let i = 0; i < editarArr.length; i++) {
         editarArr[i].onclick = function (){
            let contenido = list.children[i].querySelectorAll("p")[0].textContent;
            list.children[i].querySelectorAll("p")[0].innerHTML = prompt("Edite Su Tarea", contenido);
            readButtons();
         }
    }
}





