$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	
	$.post("php/ajax-02.php", {"nombre":nom,"apellidos":ape}, recibido);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}
