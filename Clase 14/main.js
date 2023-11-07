//SWEET ALERT
let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//   });
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

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese el producto a buscar",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Buscar!",
  }).then((result) => {
    //codigo para buscar el producto (ejemplo)

    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
});
