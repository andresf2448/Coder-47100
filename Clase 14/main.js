//SWEET ALERT
let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//   });
// });

// boton.addEventListener("click", async() => {
//   const { value: fruit } = await Swal.fire({

//     title: "Select field validation",
  
//     input: "select",
  
//     inputOptions: {
  
//      Fruits: {
  
//       apples: "Apples",
  
//       bananas: "Bananas",
  
//       grapes: "Grapes",
  
//       oranges: "Oranges"
  
//      },
  
//      Vegetables: {
  
//       potato: "Potato",
  
//       broccoli: "Broccoli",
  
//       carrot: "Carrot"
  
//      },
  
//      icecream: "Ice cream"
  
//     },
  
//     inputPlaceholder: "Select a fruit",
  
//     showCancelButton: true,
  
//     inputValidator: (value) => {
  
//      return new Promise((resolve) => {
  
//       if (value === "oranges") {
  
//        resolve();
  
//       } else {
  
//        resolve("You need to select oranges :)");
  
//       }
  
//      });
  
//     }
  
//    });
  
//    if (fruit) {
  
//     Swal.fire(`You selected: ${fruit}`);
  
//    }
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "No se pudo guardar en el carrito",
//     icon: "success",
//     confirmButtonText: "OK!",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Haz clickeado el botón!",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "error",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "El producto se agregó con éxito!",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Se agrego el producto!",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el carrito?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo para ejecutar cuando se confirma
//       localStorage.removeItem("carrito");

//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese el producto a buscar",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Buscar!",
//   }).then((result) => {
//     //codigo para buscar el producto (ejemplo)

//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//LUXON
// const DateTime = luxon.DateTime;
// const dt = DateTime.local(2023, 11, 7, 12, 12);
// console.log(dt.toString());

// const now = DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.day);
// console.log(now.second);
// console.log(now.weekday);
// console.log(now.zoneName);
// console.log(now.daysInMonth);
// console.log(now.toLocaleString());
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(now.setLocale("en").toLocaleString(DateTime.DATE_FULL));
// console.log(now.setLocale("es").toLocaleString(DateTime.DATE_FULL));

// const DateTime = luxon.DateTime;
// const now = DateTime.now();

// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = now.plus({ hours: 1, minutes: 10 });
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = now.minus({ month: 1, days: 1 });
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// const DateTime = luxon.DateTime;
// const Interval = luxon.Interval;

// const now = DateTime.now();
// const navidad = DateTime.local(2023, 12, 24);

// const i = Interval.fromDateTimes(now, navidad);

// console.log(i.length("days"));
// console.log(i.length("hours"));
// console.log(i.length("minutes"));
