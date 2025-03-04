console.log("ejercicio de tabla");

let productosRow = {};

const d = document;

const formulario = d.querySelector(".formulario");
const tablaproductosBody = d.querySelector(".tabla-body");

console.log(formulario, tablaproductosBody);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  productosRow = {
    producto: formulario.producto.value,
    precio: formulario.precio.value,
    descripcion: formulario.descripcion.value,
    disponibilidad: formulario.disponibilidad.value,
  };
  agregarProducto(productosRow);
  alert("formulario enviado");
  console.log(productosRow);
  limpiarFormulario();
});

const agregarProducto = (prod) => {
  const row = d.createElement("tr");
  row.innerHTML = `
  <td>${prod.producto}</td>
  <td>$${prod.precio}</td>
  <td>${prod.descripcion}</td>
  <td>${prod.disponibilidad}</td>`;
  tablaproductosBody.insertAdjacentElement("afterbegin", row);
};

const limpiarFormulario = () => {
  formulario.reset();
};
