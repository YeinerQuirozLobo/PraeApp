document.addEventListener("DOMContentLoaded", cargarPlaneaciones);

function cargarPlaneaciones() {
    let planeaciones = JSON.parse(localStorage.getItem("planeaciones")) || [];
    let tabla = document.getElementById("tablaPlaneaciones");

    tabla.innerHTML = "";

    planeaciones.forEach((p, i) => {
        let fila = `
            <tr>
                <td>${p.titulo}</td>
                <td>${p.grado}</td>
                <td>${p.fecha}</td>
                <td>${p.prae ? "Sí" : "No"}</td>
                <td>
                    <button onclick="verPlaneacion(${i})">Ver</button>
                    <button onclick="eliminarPlaneacion(${i})">Eliminar</button>
                </td>
            </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarPlaneaciones() {
    let texto = document.getElementById("searchInput").value.toLowerCase();
    let filas = document.querySelectorAll("#tablaPlaneaciones tr");

    filas.forEach(fila => {
        let contenido = fila.innerText.toLowerCase();
        fila.style.display = contenido.includes(texto) ? "" : "none";
    });
}

function verPlaneacion(index) {
    localStorage.setItem("planeacionSeleccionada", index);
    window.location.href = "ver-planeacion.html";
}

function eliminarPlaneacion(index) {
    let planeaciones = JSON.parse(localStorage.getItem("planeaciones")) || [];
    planeaciones.splice(index, 1);
    localStorage.setItem("planeaciones", JSON.stringify(planeaciones));
    cargarPlaneaciones();
}
