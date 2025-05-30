/**
 * Estas funciones se encargan del manejo de los salones, como el listado,  la creación, edición y eliminación de los mismos.
 */

function listaSalones() {
  const contenedor = document.getElementById("salones-lista");
  contenedor.innerHTML = "";
  const salones = JSON.parse(localStorage.getItem("salones")) || [];

  salones.forEach((salon, index) => {
    const div = document.createElement("div");
    div.classList.add("salones");
    div.id = `salon-${index}`;

    div.innerHTML = generarVistaSalon(salon, index);
    contenedor.append(div);
  });
}

function generarVistaSalon(salon, index) {
  return `
      <div class="container my-4 p-3 border rounded shadow-sm bg-light">
        <div class="row align-items-start">
          <div class="col-md-4">
            <img src="${salon.imagen}" alt="Imagen del salón" class="img-fluid rounded shadow-sm">
          </div>
          <div class="col-md-8">
            <div class="row mb-2">
              <div class="col-4 text-end fw-bold">Título:</div>
              <div class="col-8">${salon.titulo}</div>
            </div>
            <div class="row mb-2">
              <div class="col-4 text-end fw-bold">Descripción:</div>
              <div class="col-8">${salon.descripcion}</div>
            </div>
            <div class="row mb-2">
              <div class="col-4 text-end fw-bold">Dirección:</div>
              <div class="col-8">${salon.direccion}</div>
            </div>
            <div class="row mb-2">
              <div class="col-4 text-end fw-bold">WhatsApp:</div>
              <div class="col-8">${salon.whatsapp}</div>
            </div>
            <div class="text-end mt-3">
              <button class="btn btn-sm btn-primary me-2" onclick="mostrarFormularioEdicion(${index})">Editar</button>
              <button class="btn btn-sm btn-danger" onclick="eliminarSalon(${index})">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    `;
}

function mostrarFormularioEdicion(index) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  const salon = salones[index];

  const contenedor = document.getElementById(`salon-${index}`);
  contenedor.innerHTML = `
      <form onsubmit="guardarEdicion(event, ${index})" class="container my-4 p-3 border rounded shadow-sm bg-white">
        <div class="row g-3">
          <div class="col-md-4">
            <img src="${salon.imagen}" alt="Imagen del salón" class="img-fluid rounded shadow-sm">
          </div>
          <div class="col-md-8">
            <input type="text" class="form-control mb-2" name="titulo" value="${salon.titulo}" required />
            <textarea class="form-control mb-2" name="descripcion" required>${salon.descripcion}</textarea>
            <input type="text" class="form-control mb-2" name="direccion" value="${salon.direccion}" required />
            <input type="tel" class="form-control mb-2" name="whatsapp" value="${salon.whatsapp}" required />
            <input type="text" class="form-control mb-2" name="imagen" value="${salon.imagen}" required />
  
            <div class="text-end mt-2">
              <button type="submit" class="btn btn-success me-2">Guardar</button>
              <button type="button" class="btn btn-secondary" onclick="cancelarEdicion(${index})">Cancelar</button>
            </div>
          </div>
        </div>
      </form>
    `;
}

/**
 * Esta función se encarga de mostrar u ocultar el dropdown de los salones
 */

const toggleButton = document.getElementById("toggle-salones");
const dropdown = document.getElementById("salones-dropdown");
let isVisible = true; // Variable para controlar la visibilidad del dropdown

toggleButton.addEventListener("click", () => {
  if (isVisible) {
    isVisible = false; // Cambia el estado de visibilidad
    toggleButton.textContent = "más";
    dropdown.className =
      "invisible position-absolute top-0 start-50 translate-middle-x"; // vuelve al estilo original
  } else {
    isVisible = true; // Cambia el estado de visibilidad
    toggleButton.textContent = "menos"; // Cambia el texto del botón
    dropdown.className = "visible"; // muestra el div
  }
});

function guardarEdicion(event, index) {
  event.preventDefault();
  const form = event.target;
  const salones = JSON.parse(localStorage.getItem("salones")) || [];

  salones[index] = {
    titulo: form.titulo.value,
    descripcion: form.descripcion.value,
    direccion: form.direccion.value,
    whatsapp: form.whatsapp.value,
    imagen: form.imagen.value,
  };

  localStorage.setItem("salones", JSON.stringify(salones));
  listaSalones();
}

function cancelarEdicion(index) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  const contenedor = document.getElementById(`salon-${index}`);
  contenedor.innerHTML = generarVistaSalon(salones[index], index);
}

const form = document.getElementById("salon-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const direccion = document.getElementById("direccion").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const imagen = document.getElementById("imagen").value;
  const descripcion = document.getElementById("descripcion").value;

  const nuevoSalon = {
    id: Date.now(),
    titulo,
    direccion,
    whatsapp,
    imagen,
    descripcion,
  };

  const salones = JSON.parse(localStorage.getItem("salones")) || [];

  salones.push(nuevoSalon);
  localStorage.setItem("salones", JSON.stringify(salones));

  alert("Salón guardado con éxito ✅");

  form.reset();
});

/**
 * Esta función se encarga de cargar los salones en el contenedor correspondiente
 * y crear los elementos HTML necesarios para mostrarlos en la página
 */

function eliminarSalon(index) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  if (confirm("¿Estás seguro de eliminar este salón?")) {
    salones.splice(index, 1); // eliminar por índice
    localStorage.setItem("salones", JSON.stringify(salones));
    listaSalones(); // recargar la vista
  }
}

// ESTA FUNCION NO SE ESTA USANDO
function editarSalon(index) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  const salon = salones[index];

  const nuevoTitulo = prompt("Editar título:", salon.titulo);
  const nuevaDescripcion = prompt("Editar descripción:", salon.descripcion);
  const nuevaDireccion = prompt("Editar dirección:", salon.direccion);
  const nuevoWhatsapp = prompt("Editar WhatsApp:", salon.whatsapp);
  const nuevaImagen = prompt("Editar URL de imagen:", salon.imagen);

  if (nuevoTitulo !== null) {
    salones[index] = {
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
      direccion: nuevaDireccion,
      whatsapp: nuevoWhatsapp,
      imagen: nuevaImagen,
    };
    localStorage.setItem("salones", JSON.stringify(salones));
    listaSalones(); // actualizar
  }
}

listaSalones();
