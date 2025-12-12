// Datos de ejemplo
const planeaciones = [
  { titulo: "Reciclaje básico", grado: "8°", area: "Ciencias", fecha: "2025-01-10" },
  { titulo: "El agua en mi comunidad", grado: "7°", area: "Ciencias Sociales", fecha: "2025-02-02" }
];

const prae = {
  agua: "amarillo",
  residuos: "rojo",
  energia: "verde"
};

window.onload = () => {
  const lista = document.getElementById("lista-planeaciones");
  planeaciones.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.titulo} — ${p.grado} — ${p.area}`;
    lista.appendChild(li);
  });

  const estado = document.getElementById("estado-prae");
  Object.entries(prae).forEach(([k,v]) => {
    const li = document.createElement("li");
    li.textContent = `${k}: ${v}`;
    estado.appendChild(li);
  });
};
