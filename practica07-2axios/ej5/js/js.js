
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
	let objetoAxios={
		headers:{"Content-Type":"application/x-www-form-urlencoded"}
	}
	
	axios.get("php/php.php?inicio=true", objetoAxios)
		.then(respuestaSelects)
		.catch(erroresSelects);
}
function erroresSelects(){
	alert("Error en la conexión");
}

function respuestaSelects(dato)
{
	let parser = new DOMParser();
	let xml = parser.parseFromString(dato, "application/xml");
	for (let i = 0; i < 4; i++) {
		
		let linea = xml.getElementsByTagName("producto").item(i).textContent;
		let opcion = document.createElement("option"); 
		opcion.value = linea;  
		opcion.textContent = linea; 
		document.getElementById("marca").appendChild(opcion); 
	}
	for (let i = 0; i < 4; i++) {
		let linea = xml.getElementsByTagName("dimension").item(i).textContent;
		let opcion = document.createElement("option"); 
		opcion.value = linea;  
		opcion.textContent = linea; 
		document.getElementById("pulgadas").appendChild(opcion); 
	}
}

function llamada(){
    
    let marca    = document.getElementById("marca").value.trim();
	let pulgadas = document.getElementById("pulgadas").value.trim();
	
	let datos= "<producto><marca>"+marca+"</marca><pulgadas>"+pulgadas+"</pulgadas></producto>";

	let objetoAxios={
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:datos
    }
    
    axios.post("php/php2.php", objetoAxios)
        .then(muestraContenido)
        .catch(errores);
	

}

function errores(){
	alert("Error en la conexión");
}


function muestraContenido(dato)
{
	let parser = new DOMParser();
	let xml = parser.parseFromString(dato, "application/xml");
	document.getElementById("precio").value=xml.getElementsByTagName("precio").item(0).textContent;	
}
