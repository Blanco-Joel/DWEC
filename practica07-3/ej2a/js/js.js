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

	$.get("php/ej2.php?"+$.param({nombre:nombre,apellidos:apellidos,modulo:modulo}),muestraContenido);
}
function muestraContenido(datos)
{
    $("#nota").val(datos);	
}



