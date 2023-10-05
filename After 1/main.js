// let numero = parseInt(prompt("Ingrese el número"));
// let resultado = "";

// for (let i = 1; i <= numero; i++) {
//   resultado += `
//     Hola
//   `;
// }

// alert(resultado);

/* 
numero = 3
i = 1, 2, 3
Hola
Hola
Hola
*/

// let numero = 5;

// numero += 3; // numero = numero + 3;
// console.log(numero);

// let string = "Hola ";

// string += "juan"; // string = string + "juan"
// console.log(string);

// 13

// 2 3 4 5 6 7 8 9 10 11 12

let numero = 8;
let primo = true;

for (let divisor = 2; divisor < numero; divisor++) {
  if (numero % divisor === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  console.log("El número es primo");
} else {
  console.log("El número no es primo");
}
