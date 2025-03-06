if (document.addEventListener)
    window.addEventListener("load", inicio);
else if (document.attachEvent)
    window.attachEvent("onload", inicio);

function inicio() {
    crearSelects();
    let marca = document.getElementById("marca");
    let electrodomestico = document.getElementById("electrodomestico");

    if (document.addEventListener) {
        marca.addEventListener("input", llamada);
        electrodomestico.addEventListener("input", llamada);
    } else if (document.attachEvent) {
        marca.attachEvent("oninput", llamada);
        electrodomestico.attachEvent("oninput", llamada);
    }
}

function crearSelects() {
    axios.get("php/php.php", { params: { inicio: true } })
        .then(respuestaSelects)
        .catch(erroresSelects);
}

function erroresSelects() {
    alert("Error en la conexión");
}

function respuestaSelects(response) {
    let variosDatos = response.data; // Axios ya convierte JSON automáticamente
    for (let i = 0; i < 4; i++) {
        let opcion = document.createElement("option");
        opcion.value = variosDatos["marcas"][i];
        opcion.textContent = variosDatos["marcas"][i];
        document.getElementById("marca").appendChild(opcion);
    }
}

function llamada() {
    let marca = document.getElementById("marca").value.trim();
    let electrodomestico = document.getElementById("electrodomestico").value.trim();

    axios({
		url: "php/php2.php",
        params: {
            marca: marca,
            electrodomestico: electrodomestico
        }
    })
    .then(muestraContenido)
    .catch(errores);
}

function errores() {
    alert("Error en la conexión");
}

function muestraContenido(response) {
    let datos = response.data; // Axios ya maneja JSON automáticamente
    document.getElementById("ancho").value = datos["medidas"]["ancho"];
    document.getElementById("alto").value = datos["medidas"]["alto"];
    document.getElementById("fondo").value = datos["medidas"]["fondo"];
}
