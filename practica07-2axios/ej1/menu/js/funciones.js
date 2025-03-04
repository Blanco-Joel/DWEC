var conn;

if (document.addEventListener) {
    window.addEventListener("load", iniciar);
} else if (document.attachEvent) {
    window.attachEvent("onload", iniciar);
}

function iniciar() {
	let cantabria = document.getElementById("Cantabria");
    let cordoba = document.getElementById("Cordoba");
    let segovia = document.getElementById("Segovia");
    let sevilla = document.getElementById("Sevilla");
    
    if (document.addEventListener)
    {
		cantabria.addEventListener("click",function(){enviar("../cantabria/cantabria.txt");});
        cordoba.addEventListener("click",function(){enviar("../cordoba/cordoba.txt");});
        segovia.addEventListener("click",function(){enviar("../segovia/segovia.html");});
		sevilla.addEventListener("click",function(){enviar("../sevilla/sevilla.html");});
    }
    else if (document.attachEvent)
    {
		cantabria.attachEvent("onclick",function(){enviar("../cantabria/cantabria.txt");});
        cordoba.attachEvent("onclick",function(){enviar("../cordoba/cordoba.txt");});
        segovia.attachEvent("onclick",function(){enviar("../segovia/segovia.html");});
        sevilla.attachEvent("onclick",function(){enviar("../sevilla/sevilla.html");});
        
    }

}
function enviar(fichero){
	axios({
            method: "get",
            url: "./php/php.php",
            params: { "provincia": fichero }})
		.then(muestraContenido)
		.catch(errores);
}


function errores(){
	alert("Error en la conexión");
}

function muestraContenido(datos) {
    document.getElementById("provincia").textContent=datos.data;	
}