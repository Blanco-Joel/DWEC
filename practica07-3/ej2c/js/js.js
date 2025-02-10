$(window).on("load",inicio);

function inicio(){
	let boton=$("#obtener");
	boton.on("click",llamada);
}
function llamada(){
    
    let nombre    = $("#nombre").val().trim();
	let apellidos = $("#apellidos").val().trim();
	let modulo    = $("#modulo").val().trim();

	let objetoAjax={
		url: "php/ej2.php",
		type:"POST",
		data:{nombre:nombre,apellidos:apellidos,modulo:modulo},
		success:muestraContenido
	}
	$.ajax(objetoAjax);
}
function muestraContenido(datos)
{
    $("#nota").val(datos);	
}


