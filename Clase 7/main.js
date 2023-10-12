//FUNCIONES DE ALTO ORDEN

// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(7));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(8));

// function operaciones(op) {
//   if (op === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (op === "restar") {
//     return (x, y) => x - y;
//   }

//   if (op === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (op === "dividir") {
//     return (x, y) => x / y;
//   }
// }

// let sumar = operaciones("sumar"); //(x, y) => x + y;
// console.log(sumar(5, 6));

// let restar = operaciones("restar"); //(x, y) => x - y;
// console.log(restar(5, 6));

// function iterador(arreglo, funcion) {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// }

// iterador([3, 4, 5, 7, 8], console.log);

// function mostrar(nombre) {
//   console.log(`Hola soy ${nombre}`);
// }

// function iterador(arreglo, funcion) {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// }

// iterador(["pepito", "carlitos"], mostrar);

//Métodos de búsqueda y transformación

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 390 },
//   { id: 3, nombre: "pantalon", precio: 200 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

// forEach, recorre el arreglo (*)
// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find, busca el primer elemento que cumpla la condición dada (*)
// const encontrado = productos.find((item) => item.nombre === "asdfasdfasdfasdfasdf");
// console.log(encontrado);

// let nombre = prompt("Ingrese el nombre del producto a buscar");

// const encontrado = productos.find((item) => item.nombre === nombre);

// if (encontrado) {
//   alert(`
//     Id: ${encontrado.id}
//     Nombre: ${encontrado.nombre}
//     Precio: ${encontrado.precio}
//   `);
// } else {
//   alert("Producto no encontrado");
// }

//filter, filtra todos los elementos que cumplan la condición dada (*)
// let filtrados = productos.filter((item) => item.precio > 300);
// console.log(filtrados);

// let precio = Number(prompt("Ingrese el precio mínimo"));

// let filtrados = productos.filter((item) => item.precio > precio);

// if (filtrados.length === 0) {
//   alert("productos no encontrados");
// } else {
//   filtrados.forEach((item) => {
//     alert(`
//       Id: ${item.id}
//       Nombre: ${item.nombre}
//       Precio: ${item.precio}
//     `);
//   });
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 390 },
//   { id: 3, nombre: "pantalon", precio: 200 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

//some, verifica si al menos un elmento del arreglo cumple la condición
// console.log(productos.some((item) => item.nombre === "camisa"));
// console.log(productos.some((item) => item.nombre === "camisaasdfasdf"));

//map, modifica o transforma los elementos del arreglo (*)
// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let precios = productos.map((item) => item.precio);
// console.log(precios);

// const descuentos = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });
// console.log(descuentos);

//reduce, reducir un arreglo a un solo valor
// const numeros = [3, 4, 56, 78, 9];

// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 390 },
//   { id: 3, nombre: "pantalon", precio: 200 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

// const total = carrito.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 390 },
//   { id: 3, nombre: "pantalon", precio: 200 },
//   { id: 4, nombre: "media", precio: 150 },
// ];

// const filtrados = carrito.filter((item) => item.precio > 300);
// const total = filtrados.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort, ordenar un arreglo
// const numeros = [40, 1, 5, 200];

// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a es igual a b
    return 0;
  })
);
