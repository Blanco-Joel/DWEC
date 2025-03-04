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
	let nota      = document.getElementById("nota1").value.trim();
	
	axios({
			method: "post",
			url: "php/php.php",
			params: {
				nombre: nombre,
				apellidos: apellidos,
				modulo: modulo,
				nota:nota
			}
		})
		.then(muestraContenido)
		.catch(errores);

}

function errores(){
	alert("Error en la conexión");
}

function muestraContenido(dato)
{
	document.getElementById("nota2").value=dato.data;	
}
