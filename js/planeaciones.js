window.onload = function() {
    const lista = getPlaneaciones();
    const tbody = document.getElementById("tablaPlaneaciones");

    lista.forEach((p, i) => {
        const fila = `
            <tr>
                <td>${p.grado}</td>
                <td>${p.asignatura}</td>
                <td>${p.dimension}</td>
                <td>${p.sesiones} sesiones</td>
                <td>${p.fecha}</td>
                <td>
                    <button onclick="ver(${i})">Ver</button>
                    <button onclick="eliminar(${i})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
};

function ver(index) {
    localStorage.setItem("planeacionSeleccionada", index);
    location.href = "ver-planeacion.html";
}

function eliminar(index) {
    const lista = getPlaneaciones();
    lista.splice(index, 1);
    localStorage.setItem("planeacionesChat", JSON.stringify(lista));
    location.reload();
}
