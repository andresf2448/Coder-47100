//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola a todos");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 4000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);//25
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Entramos");
// }, 1000);

let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000);
