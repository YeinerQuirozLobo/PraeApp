// Guardar planeaciones en localStorage
function getPlaneaciones() {
  return JSON.parse(localStorage.getItem("planeaciones")) || [];
}

function savePlaneacion(data) {
  const lista = getPlaneaciones();
  lista.push(data);
  localStorage.setItem("planeaciones", JSON.stringify(lista));
}

// Listado
const tabla = document.getElementById("tabla-planeaciones");
if (tabla) {
  const datos = getPlaneaciones();
  datos.forEach(p => {
    tabla.innerHTML += `
      <tr>
        <td>${p.titulo}</td>
        <td>${p.grado}</td>
        <td>${p.area}</td>
        <td>${p.fecha}</td>
        <td>${p.prae ? "Sí" : "No"}</td>
      </tr>
    `;
  });
}

// Creación
const form = document.getElementById("form-planeacion");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    
    const nueva = {
      titulo: document.getElementById("titulo").value,
      grado: document.getElementById("grado").value,
      area: document.getElementById("area").value,
      descripcion: document.getElementById("descripcion").value,
      prae: document.getElementById("prae-check").checked,
      fecha: new Date().toISOString().split("T")[0]
    };

    savePlaneacion(nueva);
    alert("Planeación guardada");
    window.location.href = "planeaciones.html";
  });
}
