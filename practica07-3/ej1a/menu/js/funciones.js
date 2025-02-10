$(window).on("load", iniciar);


function iniciar() {
	let cantabria = $("#Cantabria");
    let cordoba = $("#Cordoba");
    let segovia = $("#Segovia");
    let sevilla = $("#Sevilla");

    cantabria.on("click",function(){enviar("../cantabria/cantabria.txt");});
    cordoba.on("click",function(){enviar("../cordoba/cordoba.txt");});
    segovia.on("click",function(){enviar("../segovia/segovia.html");});
    sevilla.on("click",function(){enviar("../sevilla/sevilla.html");});
    
}
function enviar(fichero){
    $("#provincia").load("./php/php.php?provincia="+fichero);
}

