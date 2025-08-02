let tareas = ["tarea 1", "tarea 2", "tarea 3", "tarea 5"];

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function eliminarTarea() {
  tareas = [];
}

function obtenerTarea() {
  return tareas;
}

// forma moderna apartir de ES6 (2015 en adelante)
export { agregarTarea, eliminarTarea, obtenerTarea };
