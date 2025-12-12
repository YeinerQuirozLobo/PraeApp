let paso = 0;
let datos = {
    grado: "",
    asignatura: "",
    dimension: "",
    sesiones: ""
};

document.addEventListener("DOMContentLoaded", () => {
    botMessage("Hola 👋. Vamos a crear una planeación usando tu modelo pedagógico.");
    botMessage("¿Para qué grado deseas crear la planeación?");
});

function enviarMensaje() {
    const input = document.getElementById("userInput");
    const texto = input.value.trim();

    if (!texto) return;

    userMessage(texto);

    switch (paso) {
        case 0:
            datos.grado = texto;
            botMessage("Perfecto. ¿Para qué asignatura? (Ej: Ciencias Naturales, Química, Biología)");
            paso++;
            break;

        case 1:
            datos.asignatura = texto;
            botMessage("Muy bien. ¿Qué dimensión del PRAE deseas trabajar? (Ej: Agua, Residuos, Biodiversidad, Energía)");
            paso++;
            break;

        case 2:
            datos.dimension = texto;
            botMessage("Entendido. ¿Cuántas sesiones deseas que dure esta planeación?");
            paso++;
            break;

        case 3:
            datos.sesiones = texto;
            generarPlaneacion();
            paso++;
            break;
    }

    input.value = "";
}

function botMessage(texto) {
    let chat = document.getElementById("chat-window");
    chat.innerHTML += `<div class="msg bot">${texto}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function userMessage(texto) {
    let chat = document.getElementById("chat-window");
    chat.innerHTML += `<div class="msg user">${texto}</div>`;
    chat.scrollTop = chat.scrollHeight;
}

function generarPlaneacion() {
    const { grado, asignatura, dimension, sesiones } = datos;

    let planeacion = `
<b>TÍTULO:</b> Unidad didáctica para ${grado} en ${asignatura}<br><br>

<b>PROBLEMA AMBIENTAL CENTRAL:</b> ${dimension}<br><br>

<b>DURACIÓN:</b> ${sesiones} sesiones<br><br>

<h3>🔹 Enfoque Pedagógico Basado en tu Modelo</h3>

<b>Desde la Pedagogía Crítica (Freire):</b><br>
- Se inicia con una problematización real del entorno del estudiante relacionada con ${dimension}.<br>
- Se promueve el diálogo horizontal mediante preguntas generadoras.<br>
- El estudiante es sujeto activo y constructor de sentido.<br><br>

<b>Desde el Pensamiento Complejo (Morin):</b><br>
- Se integran relaciones entre ambiente–sociedad–escuela.<br>
- Se analiza la interdependencia entre sistema natural y sistema humano.<br>
- Se incorporan múltiples perspectivas para comprender el problema de ${dimension}.<br><br>

<b>Desde la Ecopedagogía (Gadotti):</b><br>
- La planeación busca desarrollar conciencia planetaria.<br>
- Se promueve el cuidado del territorio y la acción transformadora.<br>
- Se incluyen actividades que fortalezcan el sentido de pertenencia ambiental.<br><br>

<h3>🔹 Actividades Sugeridas</h3>
<b>Sesión 1:</b> Problematización inicial. Conversatorio crítico sobre cómo afecta ${dimension} al colegio y al territorio.<br><br>

<b>Sesión 2:</b> Mapa de relaciones (Morin): factores naturales, humanos, escolares, sociales, económicos.<br><br>

<b>Sesión 3:</b> Actividad ecopedagógica: recorrido ambiental o análisis de evidencias reales del entorno.<br><br>

<b>Sesión 4:</b> Construcción colectiva de propuestas de mejoramiento del ${dimension}.<br><br>

<b>Sesión 5:</b> Socialización, acuerdos y compromisos PRAE.<br><br>

<h3>🔹 Evaluación Formativa</h3>
- Rúbrica basada en participación, reflexión, conexión teoría-contexto, propuesta ambiental y trabajo colectivo.<br><br>

<h3>🔹 Integración PRAE</h3>
- Esta planeación aporta a la línea de acción: ${dimension}.<br>
- Se sugiere incluir evidencia para el PRAE institucional.<br>
`;

    botMessage("Excelente. Aquí está tu planeación generada:");
    botMessage(planeacion);

    guardarPlaneacion(planeacion);
}

function guardarPlaneacion(texto) {
    let lista = JSON.parse(localStorage.getItem("planeacionesChat")) || [];
    lista.push({
        ...datos,
        planeacion: texto,
        fecha: new Date().toLocaleDateString()
    });
    localStorage.setItem("planeacionesChat", JSON.stringify(lista));

    botMessage("La planeación fue guardada en tu historial ✔");
    botMessage("¿Deseas crear otra?");
}
