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
    let objetoAjax={
        method:"GET",
        success:muestraContenido,
    }       
    $.ajax("./php/php.php?provincia="+fichero,objetoAjax)
}

function muestraContenido(datos) {
    $("#provincia").html(datos);
}