if (document.addEventListener)
	window.addEventListener("load", inicio)
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	let boton=document.getElementById("calcular");

	if (document.addEventListener)
		boton.addEventListener("click", recogerDatos)
	else if (document.attachEvent)
		boton.attachEvent("onclick", recogerDatos);
}

function recogerDatos(){
    let tabla = document.getElementById("tablaCoches");
    let body = tabla.getElementsByTagName("tbody");
    let filas = body.item(0).getElementsByTagName("tr");
    let cadena="<resultado>";
    for (let i = 0; i < filas.length; i++) {
        
        let coche = filas.item(i).getElementsByTagName("td").item(0).textContent;
        let velocidad = filas.item(i).getElementsByTagName("td").item(1).textContent;
        let aceleracion = filas.item(i).getElementsByTagName("td").item(2).textContent;
        let tiempo = filas.item(i).getElementsByTagName("td").item(3).textContent;
        cadena +="<vehiculos><coche>"+coche+"</coche><velocidad>"+velocidad+"</velocidad><aceleracion>"+aceleracion+"</aceleracion><tiempo>"+tiempo+"</tiempo></vehiculos>";
    }
        cadena +="</resultado>";
        console.log(cadena);
	
	let obj={
		method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		body:cadena
	}
	
	fetch("php/velocidad.php" ,obj)
		.then(correcto)
		.catch(errores);
}

function correcto(respuesta){
	if (respuesta.ok)
		respuesta.text().then(recibido);
}

function errores(){
	alert("Error");
}

function recibido(dato){
	let parser = new DOMParser();
	let xml = parser.parseFromString(dato, "application/xml");
    let tabla = document.getElementById("tablaCoches");
    let body = tabla.getElementsByTagName("tbody");
    let filas = body.item(0).getElementsByTagName("tr");
    for (let i = 0; i < filas.length; i++) {
        let column = filas.item(i).getElementsByTagName("td").item(4);
        let valor = xml.getElementsByTagName("velfinal").item(i);
        column.textContent = valor.textContent;
    }
}