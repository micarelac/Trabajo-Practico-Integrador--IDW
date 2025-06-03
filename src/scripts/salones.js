function mostrarTablaSalones(salones) {
  const contenedor = document.getElementById("catalogo-salones");
  const tabla = document.createElement("table");
  tabla.classList.add("table", "table-striped", "table-bordered", "mt-4");
  tabla.innerHTML = `
      <thead class="table-dark">
          <tr>
              <th>Título</th>
              <th>Descripción</th>
              <th>Dirección</th>
              <th>Whatsapp</th>
          </tr>
      </thead>
      <tbody>
          ${salones
            .map(
              (salon) => `
              <tr>
                  <td>${salon.titulo}</td>
                  <td>${salon.descripcion}</td>
                  <td>${salon.direccion}</td>
                  <td><a href="https://wa.me/${salon.whatsapp}" target="_blank">${salon.whatsapp}</a></td>
              </tr>
          `
            )
            .join("")}
      </tbody>
  `;
  contenedor.append(tabla);
}

/* 
Esta función se encarga de cargar los salones en el contenedor correspondiente
y crear los elementos HTML necesarios para mostrarlos en la página
*/

function cargarSalones() {
  const contenedor = document.getElementById("catalogo-salones");

  const salones = JSON.parse(localStorage.getItem("salones")) || [];

  salones.forEach((salon) => {
    const div = document.createElement("div");
    div.classList.add("salones");

    div.innerHTML = `
              <h3>${salon.titulo}</h3>
              <div class="salon">
                <div>
                  <img src="${salon.imagen}" alt="${salon.titulo}" />
                </div>
                <div>
                  <p><strong>Descripción:</strong> ${salon.descripcion}</p>
                  <p><strong>Dirección:</strong> ${salon.direccion}</p>
                  <p><strong>Contacto:</strong> <a href="https://wa.me/${salon.whatsapp}" target="_blank">Whatsapp</a></p>
                </div>
              </div>
            `;

    contenedor.append(div);
  });

  mostrarTablaSalones(salones);
}

cargarSalones();
