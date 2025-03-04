if (document.addEventListener)
    window.addEventListener("load", inicio);
else if (document.attachEvent)
    window.attachEvent("onload", inicio);

function inicio() {
    crearSelects();
    let boton = document.getElementById("obtener");

    if (document.addEventListener)
        boton.addEventListener("click", llamada);
    else if (document.attachEvent)
        boton.attachEvent("onclick", llamada);
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
    let parser = new DOMParser();
    let xml = parser.parseFromString(response.data, "application/xml");

    for (let i = 0; i < 4; i++) {
        let linea = xml.getElementsByTagName("producto").item(i).textContent;
        let opcion = document.createElement("option");
        opcion.value = linea;
        opcion.textContent = linea;
        document.getElementById("marca").appendChild(opcion);
    }

    for (let i = 0; i < 4; i++) {
        let linea = xml.getElementsByTagName("dimension").item(i).textContent;
        let opcion = document.createElement("option");
        opcion.value = linea;
        opcion.textContent = linea;
        document.getElementById("pulgadas").appendChild(opcion);
    }
}

function llamada() {
    let marca = document.getElementById("marca").value.trim();
    let pulgadas = document.getElementById("pulgadas").value.trim();

    let datos = `<producto><marca>${marca}</marca><pulgadas>${pulgadas}</pulgadas></producto>`;

    axios.post("php/php2.php", datos, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(muestraContenido)
    .catch(errores);
}

function errores() {
    alert("Error en la conexión");
}

function muestraContenido(response) {
    let parser = new DOMParser();
    let xml = parser.parseFromString(response.data, "application/xml");
    document.getElementById("precio").value = xml.getElementsByTagName("precio").item(0).textContent;
}
