$(window).on("load", inicio);

function inicio(){
		$("#segovia").on("click", function () {procesar("segovia.txt")});
		$("#sevilla").on("click", function () {procesar("sevilla.txt")});
}

function procesar(fichero){
	let objetoAjax={
		url:"texto/"+fichero,
		method:"GET",
		success:proceso
	}
	$.ajax(objetoAjax)
}

function proceso(dato){
	$("#contenido").text(dato)
}
