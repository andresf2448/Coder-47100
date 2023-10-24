//Eventos
// let boton = document.getElementById("boton");

// const saludar = () => {
//   console.log("Hola");
// };

//Primera forma para agregar un evento
//el addEventListener recibe el nombre del evento y la DECLARACIÓN de una función
// boton.addEventListener("click", saludar);

//Segunda forma para agregar un evento
// boton.onclick = saludar;

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, saludar);

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese el nombre");

// boton.addEventListener("click", () => saludar(nombre));

//Eventos comunes del click
// let boton = document.getElementById("boton");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.onmousedown = () => console.log("mousedown");
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "azul";
// });

//Eventos comunes del teclado
// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "amarillo";
//   } else if (e.key === "d") {
//     saludo.className = "verde";
//   } else if (e.key === "f") {
//     saludo.className = "azul";
//   }
// });

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");
// nombre.addEventListener("change", () => console.log("change"));
// nombre.addEventListener("input", () => {
// if (!nombre.value.includes("@")) {
//   saludo.className = "rojo";
// }else{
//   saludo.className = "blanco";
// }

//   if (nombre.value.length < 5) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// let formulario = document.getElementById("formulario");
// 
// formulario.addEventListener("submit", (e) => {
  // e.preventDefault();

  // let inputs = e.target.children;

  // if (!inputs[0].value.includes("@")) {
  //   alert("El campo debe ser un email");
  //   inputs[0].value = "";
  // }

  // if (inputs[0].value.length < 5) {
  //   alert("El campo debe tener mínimo 5 caracteres");
  //   inputs[0].value = "";
  // }
// });
