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

module.exports = {
  agregarTarea: agregarTarea,
  borrarTareas: borrarTareas,
  obtenerTareas: obtenerTareas,
};
