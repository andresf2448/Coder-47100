/* 
estructura del fetch

fetch(url, config);
*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   })
//   .catch((error) => console.log(error));

// const listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       let li = document.createElement("li");
//       li.innerHTML = `
//         <h2>Titulo: ${publicacion.title}</h2>
//         <p>Contenido: ${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   })
//   .catch((error) => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Nuestra primera publicación",
//     body: "Nuestra primera publicación en coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//       <h2>ID: ${producto.id}</h2>
//       <p>Nombre: ${producto.nombre}</p>
//       <b>$${producto.precio}</b>
//     `;

//       listado.append(li);
//     });
//   });

const listado = document.getElementById("listado");

const pedirDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      let li = document.createElement("li");
      li.innerHTML = `
              <h2>Titulo: ${publicacion.title}</h2>
              <p>Contenido: ${publicacion.body}</p>
            `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

pedirDatos();
