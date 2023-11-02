//Operador Spread (...)
// const nombres = ["ändres", "pepito", "juliana"];

// console.log(nombres);
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [4, 2, 75, 56, 8];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

//paso por referencia
// let persona1 = { nombre: "juan", edad: 20 };
// let persona2 = { ...persona1 };

// persona2.nombre = "camila";
// console.log(persona1);

// const nombres1 = ["andres", "pepito"];
// const nombres2 = ["pedrito", "carlitos"];

// const personas = [...nombres1, ...nombres2];
// console.log(personas);

// let persona1 = { nombre: "juan", edad: 20 };

// const usuario = {
//   ...persona1,
//   edad: 45,
//   direccion: "AV",
// };

// console.log(usuario);
// console.log(persona1);

// const sumar = (...numeros) => {
//   return numeros.reduce((acum, item) => item + acum, 0);
// };

// console.log(sumar(2, 234, 5, 76));
// console.log(sumar(2, 234, 5, 76, 1, 546, 56, 87, 8, 876, 5, 23, 4));

//Repaso

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
 */

/* 
funciones

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo e ejecutar por la funcion
}

const nombreFuncion = (parm1, parm2, ..., parmn) => {
  codigo a ejecutar por la arrow function
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

/* 
class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }

  metodo1(){
    codigo a ejecutar por el metodo1
  }

  metodo2(){
    codigo a ejecutar por el metodo1
  }
}

const producto1 = new Producto("camisa", 1000);
*/

///////////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 377 },
//   { id: 4, nombre: "pantalon", precio: 175 },
//   { id: 4, nombre: "pantalon", precio: 175 },
// ];

// const agregar = (id) => {
//   const producto = productos.find((item) => item.id === id);

//   let mensaje = `
//     Id: ${id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `;

//   alert(mensaje);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr />
//   `;
//   document.body.append(div);

//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregar(item.id));
// });

///////////////////////////////////////////////////////////
// const productos = [];
// //traigo el contenedor para cargar los productos creados
// let contenedor = document.getElementById("contenedor");

// //funcion para mostrar los productos
// const renderizar = (productos) => {
//   contenedor.innerHTML = "";
//   productos.forEach((item) => {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;
//     contenedor.append(div);
//   });
// };

// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault(); //evito que el formulario recargue la página

//   //me traigo los inputs (HTMLcollection)
//   let inputs = e.target.children;
//   let nombre = inputs[0].value;
//   let precio = inputs[1].value;

//   //agregar a productos mi nuevo producto
//   productos.push({ id: productos.length + 1, nombre, precio });

//   //funcion para renderizar o mostrar los productos en la página
//   renderizar(productos);
// });
