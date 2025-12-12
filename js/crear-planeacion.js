document.getElementById("formPlaneacion").addEventListener("submit", function(e) {
    e.preventDefault();

    const nueva = {
        titulo: document.getElementById("titulo").value,
        grado: document.getElementById("grado").value,
        fecha: document.getElementById("fecha").value,
        problema: document.getElementById("problema").value,
        actividades: document.getElementById("actividades").value,
        prae: document.getElementById("prae").value === "true"
    };

    let planeaciones = JSON.parse(localStorage.getItem("planeaciones")) || [];
    planeaciones.push(nueva);
    localStorage.setItem("planeaciones", JSON.stringify(planeaciones));

    alert("Planeación guardada exitosamente");
    window.location.href = "planeaciones.html";
});
