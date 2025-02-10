$(window).on("load",inicio);

function inicio(){
	let boton=$("#obtener");
	boton.on("click",llamada);
}
function llamada(){
    
    let nombre    = $("#nombre").val().trim();
	let apellidos = $("#apellidos").val().trim();
	let puesto    = $("#puesto").val().trim();
	
	let datos = new FormData();

	datos.append("nombre",nombre);
	datos.append("apellidos",apellidos);
	datos.append("puesto",puesto);

	let objetoAjax=
	{
		url:"php/php.php",
		type:"POST",
		data:datos,
		contentType:false,
		processData:false,
		success:muestraContenido,
	}
   	$.ajax(objetoAjax);


}

function muestraContenido(dato)
{
	$("#sueldo").val(dato);	
}