
if (document.addEventListener)
	window.addEventListener("load", inicio);
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	crearSelects();
	let boton=document.getElementById("obtener");
	
	if (document.addEventListener)
		boton.addEventListener("click", llamada);
	else if (document.attachEvent)
		boton.attachEvent("onclick", llamada);
}

function crearSelects(){
	let conn;
		if (window.XMLHttpRequest)
			conn = new XMLHttpRequest;
		else if (window.ActiveXObject)
			conn= new ActiveXObject("Microsoft.XMLHttp");
		
		if (document.addEventListener)
			conn.addEventListener("readystatechange", respuestaSelects);
		else if (document.attachEvent)
			conn.attachEvent("onreadystatechange", respuestaSelects);
		
		conn.open("GET","php/php.php?inicio=true");
		conn.send(null);
	

}

function llamada(){
    
    let marca    = document.getElementById("marca").value.trim();
	let pulgadas = document.getElementById("pulgadas").value.trim();
	
	let conn;

	if (window.XMLHttpRequest)
		conn = new XMLHttpRequest;
	else if (window.ActiveXObject)
		conn= new ActiveXObject("Microsoft.XMLHttp");
	
	if (document.addEventListener)
		conn.addEventListener("readystatechange", respuesta);
	else if (document.attachEvent)
		conn.attachEvent("onreadystatechange", respuesta);
	
	conn.open("POST","php/php2.php",true);

	let datos= "<producto><marca>"+marca+"</marca><pulgadas>"+pulgadas+"</pulgadas></producto>";
	conn.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	conn.send(datos);
}

function respuestaSelects(evento)
{
	if (evento.target.readyState==4 && evento.target.status==200)
	{
		for (let i = 0; i < 4; i++) {
			
			let linea = evento.target.responseXML.getElementsByTagName("producto").item(i).textContent;
			let opcion = document.createElement("option"); 
			opcion.value = linea;  
			opcion.textContent = linea; 
			document.getElementById("marca").appendChild(opcion); 
		}
		for (let i = 0; i < 4; i++) {
			let linea = evento.target.responseXML.getElementsByTagName("dimension").item(i).textContent;
			let opcion = document.createElement("option"); 
			opcion.value = linea;  
			opcion.textContent = linea; 
			document.getElementById("pulgadas").appendChild(opcion); 
		}
		
	}
}
function respuesta(evento)
{
	if (evento.target.readyState==4 && evento.target.status==200)
        document.getElementById("precio").value=evento.target.responseXML.getElementsByTagName("precio").item(0).textContent;	
}
