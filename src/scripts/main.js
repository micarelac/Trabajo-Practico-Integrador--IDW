// este bloque de código se encarga de cargar el header y el footer en la página
fetch("src/components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;
    });

fetch("src/components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });

// aquie se almacenan los salones iniciales
const salonesIniciales = [
    {
        id: 1,
        titulo: "Piedra Libre Eventos",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Pascual Palma 857, Paraná - Entre Ríos",
        whatsapp: "543435194040",
        imagen: "src/imagenes/piedra-libre-1.jpg"
    },
    {
        id: 2,
        titulo: "Cachetes Felices",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Av. Francisco Ramirez 5080, Paraná - Entre Ríos",
        whatsapp: "543435728358",
        imagen: "src/imagenes/Cachetes-felices-1.jpg"
    },
    {
        id: 3,
        titulo: "Garden Park",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Courreges 345, Paraná - Entre Ríos",
        whatsapp: "543434402888",
        imagen: "src/imagenes/garden-park-1.jpg"
    },
    {
        id: 4,
        titulo: "Safari Eventos",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Cervantes 273, Paraná - Entre Ríos",
        whatsapp: "543435161859",
        imagen: "src/imagenes/safari-1.jpg"
    },
    {
        id: 5,
        titulo: "Ciudad Mágica",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Rondeau 971, Paraná - Entre Ríos",
        whatsapp: "543435224541",
        imagen: "src/imagenes/ciudad-magica-1.jpg"
    },
    {
        id: 6,
        titulo: "Bob Esponja",
        descripcion: "Salón para fiestas infantiles",
        direccion: "Gral. Gervasio Artigas 1225, Paraná - Entre Ríos",
        whatsapp: "543434531818",
        imagen: "src/imagenes/bob-esponja-1.jpg"
    }
];


if (!localStorage.getItem("salones")) {
    localStorage.setItem("salones", JSON.stringify(salonesIniciales));
}

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

        contenedor.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", cargarSalones);
