/* 
estructura del bucle o ciclo for

for(desde; hasta; actualizacion){
  código a repetir
}
*/

//i++      i = i + 1

// for(let i = 5; i <= 100; i++){
//   console.log(i);
// }

/* 
i = 5, 7, 
*/

// let numero = Number(prompt("Ingrese el número"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

/* 
numero = 5
i = 1, 2, 3
resultado = 5, 10, 15

*/

// let resultado = "";
// let numero = Number(prompt("Ingrese el número"));

// for (let i = 1; i <= 10; i++) {
//   let resultadoMultiplicacion = numero * i;

//   resultado += `
//   ${numero} * ${i} = ${resultadoMultiplicacion}
//   `;
// }

// alert(resultado);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");

//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Turnos agotados vuelva mañana");

/* 
turno = 1, 2
nombre = "andres", "matias"
Turno #1 Nombre: andres
Turno #2 Nombre: matias
*/

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i === 6 || i === 7) {
//     console.log("saltamos", i);
//     continue;
//   }

//   console.log(i);
// }

// for(let i = 0; i < 10; i--){ CUIDADO BUCLE INFINITO
//   console.log(i);
// }

//WHILE
/* 
estructura del bucle o ciclo while

while(condicion){
  código a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true; CUIDADO BLUCLE INFINITO

// while (repetir) {
//   console.log("hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del do while

do{
  código a ejecutar por primera vez y luego siempre y cuando la condición sea verdadera
}while(condicion);
*/

// let repetir = false;

// while(repetir){ //primero piensa y luego actua
//   console.log("Entramos");
// }

// do { //primero actua y luego piensa
//   console.log("Entramos");
// } while (repetir);

// let numero = 0;

// do {
//   numero = prompt("Ingrese un número");
// } while (parseInt(numero));

// let numero = prompt("Ingrese el numero");

// while(parseInt(numero)){
//   numero = prompt("Ingrese el numero");
// }

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando valor1 === valor
    break;

  case valor2:
    codigo a ejecutar cuando valor1 === valor
    break;

  .
  .
  .

  default:
    codigo a ejeutar cuando el valor no coincide con ninguno de los valores anteriores
    break;
}
*/

// let moneda = prompt("Ingrese la moneda");

// switch (moneda) {
//   case "ars":
//     alert("Moneda de Argentina");
//     break;

//   case "clp":
//     alert("Moneda de Chile");
//     break;

//   case "cop":
//     alert("Moneda de Colombia");
//     break;

//   default:
//     alert("Moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}
