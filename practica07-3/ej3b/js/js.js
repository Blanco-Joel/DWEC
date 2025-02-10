$(window).on("load",inicio);

function inicio(){
	let boton=$("#obtener");
	boton.on("click",llamada);
}
function llamada(){
    
    let nombre    = $("#nombre").val().trim();
	let apellidos = $("#apellidos").val().trim();
	let modulo    = $("#modulo").val().trim();
	let nota      = $("#nota1").val().trim();

	$.post("./php/php.php", {"nombre":nombre,"apellidos":apellidos,"modulo":modulo,"nota":nota}, muestraContenido);

}

function muestraContenido(dato)
{
    $("#nota2").val(dato);	
}

