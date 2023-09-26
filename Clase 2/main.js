// Boolean(0) => false
// Boolean(1) => true
// Boolean(-1) => true

// = asignación
// == comparación solo de valor
// === comparación tanto de valor como de tipo

/* estructura del condicional if

if(condicion o un valor que represente true o false){
  código a ejecutar cuando la condición es verdadera
} */

// if(false){
//   console.log("Entramos");
// }

// console.log("finalizamos proceso");

// if(-1){
//   console.log("Entramos");
// }

// console.log("finalizamos proceso");

// if("andres"){
//   console.log("Entramos");
// }

// console.log("finalizamos proceso");

// let contrasena = prompt("Ingrese su contraseña");

// if (contrasena === "andres1234") {
//   alert("Ingreso exitoso");
// }

/* 
estructura del if else

if(condicion){
  código a ejecutar cuando la condicion es verdadera
}else{
  código a ejecutar cuando al condicion es falsa
}
*/

// let contrasena = prompt("Ingrese su contraseña");

// if (contrasena === "andres1234") {
//   alert("Ingreso exitoso");
// }else{
//   alert("contraseña incorrecta");
// }

// let edad = Number(prompt("Ingrese su edad"));

// if(edad >= 18){
//   alert("Eres mayor de edad");
// }else{
//   alert("No eres mayor de edad");
// }

// let respuesta = prompt("Terminaste la tarea? (si/no)").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estructura del if else if else

if(condicion1){
  código a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  código a ejecutar cuando la condicion2 es verdadera
}else{
  código a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else if (respuesta === "no") {
//   alert("No puede salir a jugar");
// } else {
//   alert("Opción no reconocida");
// }

// let edad = parseInt(prompt("ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   let responsable = prompt("tienes algún adulto responsable");

//   if (responsable === "si") {
//     alert("Puedes entrar a la fiesta con un adulto responsable");
//   } else {
//     alert("no puedes entrar a la fiesta");
//   }
// } else {
//   alert("Puedes entrar a la fiesta");
// }

/* 
valor1 && valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso
valor1 || valor2 es verdadera cuando al menos uno de los dos valores es verdadero, en caso contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(`Hola eres ${nombre} ${apellido}`);
// } else {
//   alert("nombre y apellido son necesarios");
// }

// let nombre = "andres";
// let saludo = "Hola";

// console.log(saludo + " " + nombre + ", " + "bienvenido");
// console.log(`${saludo} ${nombre}, bienvenido`);

// let nombre = prompt("Ingrese el usuario");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("Hola Ana");
// } else {
//   alert("No eres Ana");
// }

let nombre = prompt("Ingrese el usuario");

if (nombre != "" && (nombre === "ema" || nombre === "EMA")) {
  alert("Hola EMA");
} else {
  alert("Datos incorrectos");
}
