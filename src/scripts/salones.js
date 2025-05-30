/* 
Esta función se encarga de cargar los salones en el contenedor correspondiente
y crear los elementos HTML necesarios para mostrarlos en la página
*/

function cargarSalones() {
    const contenedor = document.getElementById("catalogo-salones");
    
    const salones = JSON.parse(localStorage.getItem("salones")) || [];

    salones.forEach(salon => {
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
}

cargarSalones()