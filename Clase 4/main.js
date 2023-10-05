/* 
estructura de una función

function nombreFuncion(){
  código a ejecitar por la función
}

para ejecutar la función debemos hacer lo siguiente
nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function pedirDatos() {
//   let nombre = prompt("Ingrese su nombre");
//   alert(`su nombre es ${nombre}`);
// }

// pedirDatos();

/* 
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("hola", "juan");
// saludar("Bienvenido", "pepito");

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// sumar(5, 6);
// sumar(11, 9);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let resultado = sumar(5, 6);
// console.log("resultado", resultado);

// function armar(partes) {
//   return `Muñeco armado con ${partes}`;
// }

// function pintar(munecoArmado) {
//   return `${munecoArmado} y pintado`;
// }

// function ropaBodega(munecoPintado) {
//   console.log(`${munecoPintado}, con ropa y enviado a bodega`);
// }

// let armado = armar("madera");
// let pintado = pintar(armado);
// ropaBodega(pintado);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;

//     case "-":
//       return num1 - num2;

//     case "*":
//       return num1 * num2;

//     case "/":
//       return num1 / num2;

//     default:
//       return "Operación no identificada";
//   }
// }

// let numeroUno = Number(prompt("Ingrese el número uno"));
// let numeroDos = Number(prompt("Ingrese el número dos"));
// let operacion = prompt("Ingrese la operación");

// let resultado = calculadora(numeroUno, numeroDos, operacion);
// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

//SCOPE

// let resultado;

// function sumar(numeroUno, numeroDos) {
//   resultado = numeroUno + numeroDos;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   let nombre = "juan";
// }

// console.log(nombre);

// let nombre = "andres";

// function saludar() {
//   let nombre = "juan";
//   console.log(nombre);
// }

// saludar();
// console.log(nombre);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

// const sumar = (a, b) => {
//   return a + b;
// };

// function sumar(a, b) {
//   return a + b;
// }

//si la arrow function no tiene parámetros entonces se dejan los paréntesis vacíos
//si la arrow function solo tiene un parámetro se pueden quitar los paréntesis
//si quitamos las llaves y el return la arrow function hace un return implícito

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const sumar = x => {
//   return x + 6;
// }

// console.log(sumar(9));

// const sumar = (x, y) => x + y;

// let numeroUno = Number(prompt("Ingrese el numero"));
// let numeroDos = Number(prompt("Ingrese el numero"));
// console.log(sumar(numeroUno, numeroDos));

// const suma = (x, y) => x + y;
// const resta = (x, y) => x - y;
// const iva = (precio) => precio * 0.21;

// let precioProducto = Number(prompt("Ingrese el precio del producto"));
// let descuento = Number(prompt("Ingrese el descuento a aplicar"));

// // precioProducto + iva - descuento
// let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// // = resta(suma(1000, iva(1000)), 100);
// // = resta(suma(1000, 210), 100);
// // = resta(1210, 100);
// // = 1110
// alert(nuevoPrecio);

const saludar = () => {
  console.log("Hola");
};

saludar();
