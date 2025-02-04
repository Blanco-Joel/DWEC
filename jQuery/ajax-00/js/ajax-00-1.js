$(window).on("load", inicio);

function inicio(){
		$("#es").on("click", function () {procesar("cantabria-es.html")});
		$("#fr").on("click", function () {procesar("cantabria-fr.html")});
		$("#dt").on("click", function () {procesar("cantabria-dt.html")});
		$("#en").on("click", function () {procesar("cantabria-en.html")});
}

function procesar(fichero){
	$("#contenido").load("texto/"+fichero)
}
