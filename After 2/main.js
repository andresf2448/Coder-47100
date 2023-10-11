// class Producto {
//   constructor(nombre, precio, imagen, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.cantidad = cantidad;
//   }

//   vender() {
//     if (this.cantidad === 0) {
//       console.log("No quedan productos para vender");
//     } else {
//       console.log("Producto vendido");
//       this.cantidad -= 1; // this.cantidad = this.cantidad - 1
//     }
//   }
// }

// const productos = [];

// productos.push(new Producto("camisa", 1000, "httpp", 3));
// productos.push(new Producto("pantalon", 1000, "httpp", 3));
// productos.push(new Producto("media", 1000, "httpp", 3));
// productos.push(new Producto("zapato", 1000, "httpp", 3));

// let nombre = prompt("Ingrese el nombre del producto a consultar");
// let producto;

// for (const item of productos) {
//   if (item.nombre.includes(nombre)) {
//     producto = item;
//   }
// }

// if (producto) {
//   alert(`
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `);
// } else {
//   alert("El producto no ha sido encontrado");
// }

// const persona = { nombre: "camila", edad: 18, direccion: "AV" };

// console.log(Object.values(persona));
// console.log(Object.keys(persona));