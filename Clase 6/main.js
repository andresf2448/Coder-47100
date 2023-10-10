/* 
estructura de un arreglo

[valor1, valor2, ..., valorn];
*/

// const vacio = [];
// const numeros = [4, 5, 7, 8, 9];
// const nombres = ["andres", "pepito", "carlitos"];
// const valores = [true, false, false, true];
// const variados = [1, true, "andres"];

// const nombres = ["andres", "pepito", "carlitos"];
// const numeros = [4, 5, 7, 8, 9];

// console.log(nombres[1]);
// console.log(numeros[0] + numeros[3]);

// const nombres = ["andres", "pepito", "carlitos"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

//Métodos y propiedades de los arreglos
//length devuelve la longitud o cantidad de elementos del arreglo

// const nombres = ["andres", "pepito", "carlitos"];

//push agregar un elemento al final del arreglo
// nombres.push("juanita");
// console.log(nombres);

//unshift agrega un elemento al inicio del arreglo
// nombres.unshift("pedrito");
// console.log(nombres);

//pop elimina el último elemento del arreglo
// nombres.pop();
// console.log(nombres);

//shift elimina el primer elemento del arreglo
// nombres.shift();
// console.log(nombres);

// const nombres = ["andres", "pepito", "carlitos", "pedrito", "juanita"];

//splice elimina uno o varios elementos del arreglo en cualquier porsición
// nombres.splice(1, 2); //el primer parámetro es donde me quiero parar y el segundo la cantidad a eliminar desde el punto de parada
// console.log(nombres);

//join une en un solo string los elementos de un arreglo separados por el parámetro
// console.log(nombres.join("****"));

// const verificacion = [5, 4, 5, 5];
// console.log(verificacion.join(""));

// const nombres = ["andres", "pepito", "carlitos", "pedrito", "juanita"];

//concat concatena los elementos de varios arreglos en uno solo
// const mascotas = ["firu", "max"];
// const varios = mascotas.concat(nombres);
// console.log(varios);

//slice crea una copia de un fragmento del arreglo
// const copia = nombres.slice(1, 5); //primer parámetro donde me quiero parar y el segundo hasta que posición menos uno quiero llegar
// console.log(copia);

//indexOf devuelve la posición del elemento, si no lo encuentra devuelve -1
// console.log(nombres.indexOf("carlitos"));
// console.log(nombres.indexOf("carlitosasdfasdf"));

//includes verifica la existencia del elemento
// console.log(nombres.includes("pedrito"));
// console.log(nombres.includes("pedritoasdf"));

// const productos = ["camisa", "zapato", "gorra"];

// let nombre = prompt("Ingrese el nombre del producto a validar");

// if (productos.includes(nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

//reverse invierte el orden del arreglo
// const productos = ["camisa", "zapato", "gorra"];
// productos.reverse();
// console.log(productos);

// const productos = ["camisa", "zapato", "gorra"];

// const eliminarPorNombre = (nombre) => {
//   //buscamos la posición del producto
//   let index = productos.indexOf(nombre);

//   //si lo encuentra el indice es diferente de -1
//   if (index != -1) {
//     //eliminamos el producto en la posición index
//     productos.splice(index, 1);
//     console.log(productos);
//   }
// };

// eliminarPorNombre("zapato");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 751 },
//   { id: 3, nombre: "zapato", precio: 377 },
//   { id: 4, nombre: "media", precio: 100 },
// ];

// for(const item of productos){
//   console.log(item.nombre);
//   console.log(item.precio);
// }

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const productos = [];

productos.push(new Producto("camisa", 1000));
productos.push(new Producto("pantalon", 750));
productos.push(new Producto("zapato", 300));
productos.push(new Producto("gorra", 100));

console.log(productos);
