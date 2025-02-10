$(window).on("load", inicio);

function inicio(){
	let boton=$("#obtener");
	boton.on("click", llamada);

}

function llamada(){
    
    let nombre    = $("#nombre").val().trim();
	let apellidos = $("#apellidos").val().trim();
	let modulo    = $("#modulo").val().trim();

	$("#nota").load("php/ej2.php?"+$.param({nombre:nombre,apellidos:apellidos,modulo:modulo}),muestraContenido);
}
function muestraContenido(datos)
{
    $("#nota").val(datos);	
}



