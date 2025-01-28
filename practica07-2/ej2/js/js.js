if (document.addEventListener)
	window.addEventListener("load", inicio);
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("obtener");

	if (document.addEventListener)
		boton.addEventListener("click", llamada);
	else if (document.attachEvent)
		boton.attachEvent("onclick", llamada);
}

function llamada(){
    
    let nombre    = document.getElementById("nombre").value.trim();
	let apellidos = document.getElementById("apellidos").value.trim();
	let modulo    = document.getElementById("modulo").value.trim();
	
	let objetoFetch={
        method:"GET",
        headers:{"Content-Type":"application/x-www-form-urlencoded"}
    }
    
    fetch("php/ej2.php?nombre="+nombre+"&apellidos="+apellidos+"&modulo="+modulo, objetoFetch)
        .then(correcto)
        .catch(errores);
}
function correcto(respuesta){
	if (respuesta.ok)
		respuesta.text().then(mostrarRespuesta);
}

function errores(){
	alert("Error en la conexión");
}

function mostrarRespuesta(datos)
{
    document.getElementById("nota").value=datos;	
}



