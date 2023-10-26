//STORAGE
//localStorage

// console.log(localStorage);
// localStorage.setItem("nombre", "andres"); //para guardar en el storage
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre"); //para traer datos del storage
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log("Valor asociado", localStorage.getItem(clave));
// }

// localStorage.removeItem("nombre"); //Elimina por clave
// localStorage.clear(); //elimina todo el storage

//sessionStorage
// sessionStorage.setItem("nombre", "andres"); //para guardar en el storage
// sessionStorage.setItem("numero", 5);
// sessionStorage.setItem("valor", "true");

// let nombre = sessionStorage.getItem("nombre"); //para traer datos del storage
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for(let i = 0; i < sessionStorage.length; i++){
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log("Valor asociado", sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre"); //Elimina por clave
// sessionStorage.clear(); //elimina todo el storage

// let objeto = {
//   nombre: "pepito",
//   edad: 50,
// };

// localStorage.setItem("objeto", objeto);
// localStorage.setItem("arreglo", [4, 5, 6, 7, 8]);

//JSON
//Para guardar un objeto o un arreglo necesitamos darle el formato JSON antes de ingresarlos al storage
//JSON.stringify(elemento) colocar el formato json al elemento
//JSON.parse(elemento) quitar el formato json al elemento

// let objeto = {
//   nombre: "juan",
//   edad: 50,
// };

// console.log(typeof objeto);
// console.log(typeof JSON.stringify(objeto));

// localStorage.setItem("objeto", JSON.stringify(objeto));
// localStorage.setItem("arreglo", JSON.stringify([3, 4, 56, 7]));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = JSON.parse(localStorage.getItem("arreglo"));
// console.log(arreglo);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "gorra", precio: 380 },
//   { id: 4, nombre: "media", precio: 500 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardarStorage(item.id, JSON.stringify(item))
// })

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   alert(`Bienvenid@ ${usuario} por primera vez`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 750 },
//   { id: 3, nombre: "gorra", precio: 380 },
//   { id: 4, nombre: "media", precio: 500 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//nos traemos el boton para eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito;

//nos traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito en el storage lo aguardamos en nuestra variable, si no el carrito va como arreglo vacio
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  carrito = [];
  let div = document.createElement("div");
  div.innerHTML = "Carrito vacío";

  document.body.append(div);
}

//recorremos los productos y por cada uno creamos la etiqueta para mostrarlo en el dom
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//le agregamos el evento al boton para elminar el carrito
eliminar.addEventListener("click", () => {
  alert("Carrito Eliminado");
  localStorage.clear();

  //código para recargar la página
  location.reload();
});
