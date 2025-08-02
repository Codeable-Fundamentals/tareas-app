import { mostrarTareas } from "./src/dom.js";

mostrarTareas();

let description = document.getElementById("descripcion");
let parrafo = document.querySelector("p");

console.log("que hay?", description);
console.log("que selecionaste???", parrafo)

description.style.color = "blue"

console.log("aue es window.document: ", window.document)
// window.alert("hola!!!!")

// function saludar(){}

// console.log("respuesta: ", saludar === window.saludar);