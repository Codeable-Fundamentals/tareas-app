import {
  obtenerTareas,
  agregarTarea,
  eliminarTareas,
} from "../tareas/tareas.js";

let input = document.getElementById("nueva-tarea");
let buttonAgregar = document.getElementById("agregar");
let buttonEliminar = document.getElementById("borrar");
let ul = document.getElementById("tareas");

export function mostrarTareas() {
  ul.innerHTML = "";
  let listaTareas = obtenerTareas();

  for (const tarea of listaTareas) {
    let li = document.createElement("li");
    li.textContent = tarea;
    ul.append(li);
  }
}

function handleAgregarTarea(_event) {
  let nuevaTarea = input.value;
  if (nuevaTarea === "") return;

  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

function handlerEliminarTarea(_event) {
  ul.innerHTML = "";
  eliminarTareas();
}

buttonAgregar.onclick = handleAgregarTarea;
buttonEliminar.onclick = handlerEliminarTarea;
