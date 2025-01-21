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
function enviar(fichero) {
    if (window.XMLHttpRequest) {
        conn = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        conn = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if (document.addEventListener) {
        conn.addEventListener("readystatechange", muestraContenido);
    } else if (document.attachEvent) {
        conn.attachEvent("onreadystatechange", muestraContenido);
    }

    conn.open('GET', "./php/php.php?provincia="+fichero);
    conn.send(null);
}

function muestraContenido() {
    if (conn.readyState == 4) {
        if (conn.status == 200) {
            var ele_div = document.getElementById("provincia");
            ele_div.innerHTML = conn.responseText;
        }
    }
}