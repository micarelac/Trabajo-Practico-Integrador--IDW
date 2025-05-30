import { salonesIniciales } from "/src/db/salonesIniciales.js";

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

if (!localStorage.getItem("salones")) {
    localStorage.setItem("salones", JSON.stringify(salonesIniciales));
}