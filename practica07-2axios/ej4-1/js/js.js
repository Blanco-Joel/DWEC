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
	let puesto    = document.getElementById("puesto").value.trim();
	
	let datos = new FormData();

	datos.append("nombre",nombre);
	datos.append("apellidos",apellidos);
	datos.append("puesto",puesto);

	axios({
			method: "post",
			url: "php/php.php",
			data :datos,
			headers: {"Content-Type":"application/x-www-form-urlencoded"}
		})
		.then(muestraContenido)
		.catch(errores);

}

function errores(){
	alert("Error en la conexión");
}
function muestraContenido(dato)
{
	document.getElementById("sueldo").value=dato.data;	
}