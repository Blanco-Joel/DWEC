$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let datos = new FormData();
	datos.append("nombre",nom);
	datos.append("apellidos",ape);
	$("#muestra").load("php/ajax-02.php",datos);
}

