function getPlaneaciones() {
    return JSON.parse(localStorage.getItem("planeacionesChat")) || [];
}

function guardarPlaneacion(data) {
    let lista = getPlaneaciones();
    lista.push(data);
    localStorage.setItem("planeacionesChat", JSON.stringify(lista));
}
