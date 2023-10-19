// console.log(document);

//Acceso al DOM

//getElementById(id);
// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion.innerHTML); //el contenido html
// console.log(aplicacion.innerText); //el contenido de texto

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName(clase);
// let perritos = document.getElementsByClassName("perritos"); //HTMLcollection
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName(nombre);
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//querySelector
// let div = document.querySelector("#saludo");

// let perritos = document.querySelectorAll("perritos");

//Modificar el DOM
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "Hola Coder";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la sección deseada");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenido a nuestra super página</h1>";
//   saludo.className = "verde";
// }

// let estilo = prompt("Ingrese el color favorito");

// if (estilo === "rojo") {
//   document.body.className = "rojo";
// } else if (estilo === "azul") {
//   document.body.className = "azul";
// } else {
//   document.body.className = "verde";
// }

//Agregar nodos al DOM
// creación de la etiqueta
// let div = document.createElement("div");

//agregado de contenido
// div.innerHTML = "<h1>Hola a todos</h1>";

//agregado de una padre
//1. en body
// document.body.append(div)

//2. en un contendor del html
// let contenedor = document.getElementById("contenedor");
// contenedor.append(div);

//Quitar nodos del DOM
// let saludo = document.getElementById("saludo");
// saludo.remove();

// const productos = ["camisa", "gorra", "zapato", "pantalon"];

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = item;
//   document.body.append(div);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "media", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 100 },
// ];

// let precio = Number(prompt("Ingrese el precio mínimo"));

// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((producto) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2 class="rojo">Id: ${producto.id}</h2>
//     <p class="verde">Nombre: ${producto.nombre}</p>
//     <b class="azul">$${producto.precio}</b>
//     <hr />
//   `;

//   document.body.append(div);
// });


