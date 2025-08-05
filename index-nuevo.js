import { mostrarTareas } from "./src/dom.js";

mostrarTareas();

let test = document.documentElement;
let head = document.head;
let body = document.body;
console.log(head.childNodes)

let description = document.getElementById("descripcion");
let parrafo = document.querySelector("p");
description.style.color = "blue";

let buttonGoHome = document.getElementById("ir-a-casa");

function saludar() {
  window.location.href = "https://codeable.la";
}

buttonGoHome.onclick = saludar;
