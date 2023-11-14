//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola a todos");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 4000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);//25
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Entramos");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

// for (let letra of "Mundo") {
//   setInterval(() => {
//     console.log(letra);
//   }, 1000);
// }

//Promesas
/* 
new Promise((resolve, reject) => {
  cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if (valor) {
//     //   resolve("Promesa resuelta");
//     // }else{
//     //   reject("Promesa rechazada");
//     // }
//     setTimeout(() => {
//       valor
//         ? resolve(["camisa", "gorra", "media"])
//         : reject("Promesa rechazada");
//     }, 3000);
//   });
// };

// //then y el catch
// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

///////////////////////////////////////////////////////////////////////// SERVIDOR
const BD = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 400 },
  { id: 3, nombre: "gorra", precio: 370 },
  { id: 4, nombre: "camisa", precio: 850 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(BD);
      reject("Intente luego");
    }, 3000);
  });
};
/////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////// FRONT
traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>ID: ${producto.id}</h2>      
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
      div.innerHTML = `Error: ${error}`

      document.body.append(div);
  });
/////////////////////////////////////////////////////////////////////////
