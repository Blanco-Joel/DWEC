if (document.addEventListener)
	window.addEventListener("load", inicio);
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("obtener");

	if (document.addEventListener)
		boton.addEventListener("click", llamada);
	else if (document.attachEvent)
		boton.attachEvent("onclick", llamada);
}

function llamada(){
    
    let nombre    = document.getElementById("nombre").value.trim();
	let apellidos = document.getElementById("apellidos").value.trim();
	let modulo    = document.getElementById("modulo").value.trim();
	
	let conn;

	if (window.XMLHttpRequest)
		conn = new XMLHttpRequest;
	else if (window.ActiveXObject)
		conn= new ActiveXObject("Microsoft.XMLHttp");
	
	if (document.addEventListener)
		conn.addEventListener("readystatechange", respuesta);
	else if (document.attachEvent)
		conn.attachEvent("onreadystatechange", respuesta);
	
	conn.open("GET","php/ej2.php?nombre="+nombre+"&apellidos="+apellidos+"&modulo="+modulo);
	conn.send(null);
}

function respuesta(evento)
{
	if (evento.target.readyState==4 && evento.target.status==200)
        document.getElementById("nota").value=evento.target.responseText;	
}
