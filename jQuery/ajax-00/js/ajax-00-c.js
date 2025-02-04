$(window).on("load", inicio);

function inicio(){
		$("#segovia").on("click", function () {procesar("segovia.txt")});
		$("#sevilla").on("click", function () {procesar("sevilla.txt")});
}

function procesar(fichero){
	let objetoAjax={
		method:"GET",
		success:proceso
	}
	$.ajax("texto/"+fichero, objetoAjax)
}

function proceso(dato){
	$("#contenido").text(dato)
}
