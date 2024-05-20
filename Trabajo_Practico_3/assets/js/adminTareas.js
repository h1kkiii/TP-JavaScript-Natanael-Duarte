let tar = [ ]
let opc;
let salirOp = 1;

function agregarTarea(nombre) {
    const regex = /^\S+$/;
    if(regex.test(nombre)){
    tar.push(nombre)
    alert("Tarea nueva Añadida \n" + nombre)
    } else{
    alert("Ingrese un valor sin espacios!")
    }
}

function listarTareas() {
    let list = ""
    for (let i = 0; i < tar.length; i++) {
        list += tar[i] + ", ";
    }
    alert(list)
}


function editarTarea(nombre) {
    let task = tar.includes(nombre)
    if (task == true) {
        const regex = /^\S+$/;
        let nomNuev = prompt("Ingrese un nombre nuevo para la tarea:")
        if (regex.test(nomNuev)){
            tar.splice(tar.indexOf(nombre),1,nomNuev)
            alert("El nombre nuevo es: "+nomNuev)
        } else {
            alert("El nombre nuevo no debe contener espacios!")
            }
        } else {
            alert("Nombre invalido, intente de nuevo!")
        }
}   

function eliminarTarea(nombre) {
    let task = tar.includes(nombre)
    if (task == true) {
        tar.splice(tar.indexOf(nombre), 1)
    } else {
        alert("Ese nombre no se encuentra en la lista.")
    }
}
while (salirOp !== 0) {
    opc = parseInt(prompt(`Ingrese la opción a realizar:
    1-Agregar tarea
    2-ListarTareas 
    3-Editar tareas 
    4-Eliminar Tarea
    0-Salir`))



    switch (opc) {
        case 1:
            agregarTarea(prompt("Ingrese el nombre de la tarea:"));
            break;
        case 2:
            listarTareas(tar);
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea que quiere editar: "+ tar));
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre del valor que quiere eliminar: "+ tar));
            break;
        case 0:
            salirOp = 0;
            break;
        default:
            alert("ingrese una opcion dentro de los parámetros!")
            break;
    }
}