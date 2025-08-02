var tareas = ["tarea 1", "tarea 2", "tarea 3"];

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function borrarTareas() {
  tareas = [];
}

function obtenerTareas() {
  return tareas;
}

// Forma antigua (antes de ES6 (antes del 2015))
module.exports = {
  agregarTarea: agregarTarea,
  borrarTareas: borrarTareas,
  obtenerTareas: obtenerTareas,
};
