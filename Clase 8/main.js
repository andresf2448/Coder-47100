//MATH

//constantes
// console.log(Math.E);
// console.log(Math.PI);

//propiedades máximo y mínimo
// console.log(Math.max(4, 5, 7, 9, 9, 654, 3, 3, 6, 8));
// console.log(Math.min(4, 5, 7, 9, 9, 654, 3, 3, 6, 8));
// console.log(Math.max(4, 5, 7, 9, 9, 654, Infinity, 3, 3, 6, 8));
// console.log(Math.min(4, 5, 7, 9, 9, 654, -Infinity, 3, 3, 6, 8));

//propiedades de rendondeo
// console.log(Math.ceil(3.14)); // función techo redondear hacia arriba al próximo entero
// console.log(Math.floor(3.7)); // función piso redondea hacia abajao al entero más próximo
// console.log(Math.round(4.6));
// console.log(Math.round(4.4)); // redondea hacia el más cercano

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//números aleatorios
// números entre cero y uno
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//números entre cero y diez
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

//números entre 7 y 15
//Math.round(Math.random() * amplitud + desplazamiento)
// console.log(Math.round(Math.random() * 8 + 7));
// console.log(Math.round(Math.random() * 8 + 7));
// console.log(Math.round(Math.random() * 8 + 7));
// console.log(Math.round(Math.random() * 8 + 7));
// console.log(Math.round(Math.random() * 8 + 7));
// console.log(Math.round(Math.random() * 8 + 7));

//números entre 27 y 56
// console.log(Math.round(Math.random() * 29 + 27));
// console.log(Math.round(Math.random() * 29 + 27));
// console.log(Math.round(Math.random() * 29 + 27));
// console.log(Math.round(Math.random() * 29 + 27));
// console.log(Math.round(Math.random() * 29 + 27));
// console.log(Math.round(Math.random() * 29 + 27));

//números entre 13 y 28
// console.log(Math.round(Math.random() * 15 + 13));
// console.log(Math.round(Math.random() * 15 + 13));
// console.log(Math.round(Math.random() * 15 + 13));
// console.log(Math.round(Math.random() * 15 + 13));
// console.log(Math.round(Math.random() * 15 + 13));

//crear una función que genere números aleatorios pasando por parámetro al amplitud y el desplazamiento
// const generarAleatorio = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento)
// }

// console.log(generarAleatorio(17, 3));
// console.log(generarAleatorio(17, 3));
// console.log(generarAleatorio(17, 3));
// console.log(generarAleatorio(17, 3));
// console.log(generarAleatorio(17, 3));

//construir una función que genere nombres aleatorios, dichos nombres estarán en un arreglo
// const nombres = [
//   { nombre: "camila", edad: 18, direccion: "AV" },
//   { nombre: "andres", edad: 26, direccion: "AV1" },
//   { nombre: "carlitos", edad: 32, direccion: "AV2" },
//   { nombre: "Pedrito", edad: 56, direccion: "AV3" },
//   { nombre: "Pepito", edad: 35, direccion: "AV4" },
// ];

// const generarNombreAleatorio = () => {
//   let index = Math.floor(Math.random() * nombres.length);

//   return nombres[index];
// };

// let respuesta = prompt("Quieres ver un ganador?");

// while (respuesta != "no") {
//   let ganador = generarNombreAleatorio();

//   alert(
//     `El ganador es ${ganador.nombre} con edad ${ganador.edad} y dirección ${ganador.direccion}`
//   );

//   respuesta = prompt("Quieres ver un ganador?");
// }

//DATE
// console.log(Date()); fecha actual
// console.log(new Date(2023, 9, 17)); construcción de una fecha

// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);
// const navidad = new Date("December 24, 2023 23:59:59"); //construcción de fecha con string
// console.log(navidad);

//formatos de fecha
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());

//obtener datos particulares
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

//operaciones entre fechas
//Todas las fechas se trabajan en milisegundos
const navidad = new Date("December 25, 2023");
const hoy = new Date("October 17, 2023");

console.log(navidad - hoy);

const milisegundosPorDia = 86400000;

console.log((navidad - hoy) / milisegundosPorDia);