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

function calculadora(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return "Operación no identificada";
  }
}

let numeroUno = Number(prompt("Ingrese el número uno"));
let numeroDos = Number(prompt("Ingrese el número dos"));
let operacion = prompt("Ingrese la operación");

let resultado = calculadora(numeroUno, numeroDos, operacion);
alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);
