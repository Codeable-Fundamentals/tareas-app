const tareasMod = require("./tareas");

var input = document.getElementById("nueva-tarea");
var buttonAgregar = document.getElementById("agregar");
var buttonBorrar = document.getElementById("borrar");
var ul = document.getElementById("tareas");

function mostrarTareas() {
  ul.innerHTML = "";
  var tareas = tareasMod.obtenerTareas();

  for (const tarea of tareas) {
    var li = document.createElement("li");
    li.textContent = tarea;
    ul.append(li);
  }
}

function handleAgregar(_event) {
  var nuevaTarea = input.value;
  if (nuevaTarea === "") return;

  tareasMod.agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

function handleBorrar(_event) {
  ul.innerHTML = "";
  tareasMod.borrarTareas();
}

buttonAgregar.onclick = handleAgregar;
buttonBorrar.onclick = handleBorrar;

mostrarTareas();
