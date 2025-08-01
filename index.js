(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // tareas.js
  var require_tareas = __commonJS({
    "tareas.js"(exports, module) {
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
        agregarTarea,
        borrarTareas,
        obtenerTareas
      };
    }
  });

  // dom.js
  var require_dom = __commonJS({
    "dom.js"() {
      var tareasMod = require_tareas();
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
    }
  });
  require_dom();
})();
