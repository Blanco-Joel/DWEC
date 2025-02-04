$(window).on("load", inicio);

function inicio(){
		$("#segovia").on("click", function () {procesar("segovia.txt")});
		$("#sevilla").on("click", function () {procesar("sevilla.txt")});
}

function procesar(fichero){
	
	$.get("texto/"+fichero, proceso)
}

function proceso(dato){
	$("#contenido").text(dato)
}
