$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	
	$("#muestra").load("php/ajax-02.php",{nombre:nom,apellidos:ape});
}

