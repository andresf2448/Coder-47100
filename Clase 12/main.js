//OPERADOR ++
// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero++;

//Operador ternario
/* 
estructuran del operador ternario
condicion ? codigo cuando condicion es verdadera : codigo cuando condicion es falsa;
*/

// let edad = 2;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// let temperatura = 50;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// const usuario = {
//   nombre: "pepito",
//   edad: 34,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a la fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "pepito",
//   edad: 34,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

//OPERADORES LOGICOS && Y ||
/* 
valor1 && valor2 retorna valor1 si este es falso, en caso contrario retorna valor2
valor1 || valor2 retorna valor1 si este es true, en caso contrario retorna valor2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("carrito está vacío");
// }

// carrito.length === 0 && console.log("carrito está vacío");

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //Hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "juanito",
//   edad: 45,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO
// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juanito",
//   edad: 45,
//   cursos: null
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");

//DESESTRUCTURACIÓN
// const usuario = {
//   nombre: "andres",
//   edad: 27,
//   direccion: "AV",
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = "AV";

// let { nombre, edad, direccion, familiar } = usuario;

// console.log(nombre);
// console.log(edad);
// console.log(familiar);

// const usuario = {
//   nombre: "andres",
//   edad: 38,
//   direccion: "AV",
//   telefonos: {
//     casa: 1324,
//     trabajo: 3567,
//   },
// };

// const {
//   nombre,
//   direccion,
//   telefonos: { casa },
// } = usuario;

// console.log(nombre);
// console.log(direccion);
// console.log(casa);

// const usuario = {
//   nombre: "andres",
//   edad: 38,
//   direccion: "AV",
//   telefonos: {
//     casa: 1324,
//     trabajo: 3567,
//   },
// };

// const {
//   nombre: nombrePersona,
//   edad: edadPersona,
//   telefonos: { trabajo: trabajoPersona },
// } = usuario;

// console.log(nombrePersona);
// console.log(edadPersona);
// console.log(trabajoPersona);

// class Persona {
//   constructor(info) {
//     this.nombre = info.nombre;
//     this.edad = info.edad;
//   }
// }

// const personas = [];

// const desestructurar = ({ nombre, edad }) => {
//   console.log(`Hola ${nombre} tienes ${edad} de edad`);
// };

// personas.push(new Persona({ nombre: "carlitos", edad: 56 }));
// personas.push(new Persona({ nombre: "carlita", edad: 56 }));

// desestructurar(personas[0]);
// desestructurar(personas[1]);

// const desestructurar = ({ nombre, edad }) => {
//   console.log(`Hola ${nombre} tienes ${edad} de edad`);
// };

// const usuario = { nombre: "carlitos", edad: 56 };

// desestructurar(usuario);

//Desestructuración de arreglos
// const nombres = ["camila", "andres", "juan", "sofia"];
// const [, , c] = nombres;

// console.log(c);

// let nombres = [{nombre: "juan", apellido: "ramirez"}, {nombre: "juan", apellido: "ramirez"}]

const usuario = {
  nombre: "andres",
  edad: 38,
  direccion: "AV",
  telefonos: {
    casa: {
      numero1: 1234,
      numero2: 12342134234,
    },
    trabajo: {
      numero1: 23434,
      numero2: 5678,
    },
  },
};

const {
  nombre,
  telefonos: {
    casa: { numero2: numeroCasa },
    trabajo: { numero2: numeroTrabajo },
  },
} = usuario;
