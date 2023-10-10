// let nombre = "pepito";
// let edad = 35;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// let persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// const propiedad = prompt("Ingrese la propiedad que desea ver del usuario");

// alert(persona[propiedad]);

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
//   medallas: 5
// };

// persona.nombre = "pepita";
// persona["edad"] = 67;
// persona.altura = 180;
// persona["peso"] = 45;
// console.log(persona);

//función constructora
// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("Juanita", 30, "AV1");

// console.log(persona1.nombre);
// console.log(persona2.nombre);
// console.log(persona1.direccion);
// {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV"
// }

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.altura = info.altura;
//   this.peso = info.peso;
// }

// const persona1 = new Persona({
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
//   altura: 180,
//   peso: 56,
// });

//función constructora
// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");

// console.log("nombre" in persona1);
// console.log("altura" in persona1);

// for (const clave in persona1) {
//   console.log(clave);
//   console.log("valor asociado", persona1[clave]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();
// console.log(persona1);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();
// console.log(persona1);

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "27 Monitor Curvo Fhd 1800r Con Diseño Sin",
//   742561,
//   "http:asdkfjh"
// );

// const producto2 = new Producto(
//   "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
//   1382971,
//   "http:as.dfjh"
// );

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "27 Monitor Curvo Fhd 1800r Con Diseño Sin",
//   742561,
//   "http:asdkfjh"
// );
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    vender()
  }
}

// const producto1 = new Producto(
//   "27 Monitor Curvo Fhd 1800r Con Diseño Sin",
//   742561,
//   "http:asdkfjh",
//   5
// );
// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

// let nombre = prompt("Ingrese el nombre");
// let precio = Number(prompt("Ingrese el precio del producto"));
// let imagen = prompt("Ingrese la imagen del producto");
// let cantidad = Number(prompt("Ingrese la cantidad del producto"));

// const producto = new Producto(nombre, precio, imagen, cantidad);
