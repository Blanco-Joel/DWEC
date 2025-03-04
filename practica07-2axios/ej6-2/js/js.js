if (document.addEventListener)
	window.addEventListener("load", inicio);
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	crearSelects();
	let marca=document.getElementById("marca");
	let electrodomestico=document.getElementById("electrodomestico");

	if (document.addEventListener)
	{
		marca.addEventListener("input", llamada);
		electrodomestico.addEventListener("input", llamada);
	}else if (document.attachEvent)
	{
		marca.attachEvent("oninput", llamada);
		electrodomestico.attachEvent("oninput", llamada);
	}
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
	let variosDatos=JSON.parse(dato);
	for (let i=0; i < 4; i++){
		let opcion = document.createElement("option"); 
		opcion.value = variosDatos["marcas"][i];  
		opcion.textContent = variosDatos["marcas"][i]; 
		document.getElementById("marca").appendChild(opcion); 
	}
}

function llamada(){
	let marca = document.getElementById("marca").value.trim();
	let electrodomestico = document.getElementById("electrodomestico").value.trim();
	let misDatos=new Array();
	let datos=new Object();
	datos.marca=marca;
	datos.electrodomestico=electrodomestico;
	misDatos[0]=datos;
	
	let objetosJSON=JSON.stringify(misDatos);
	
	let objetoAxios={
		headers:{"Content-Type":"application/json"},
		body:objetosJSON,
		cache:"no-cache"
	}
	
	axios.post("php/php2.php" ,objetoAxios)
		.then(muestraContenido)
		.catch(errores);
}

function errores(){
	alert("Error en la conexión");
}
function muestraContenido(dato)
{

	let datos = JSON.parse(dato);
	document.getElementById("ancho").value=datos["medidas"]["ancho"]; 
	document.getElementById("alto").value=datos["medidas"]["alto"]; 
	document.getElementById("fondo").value=datos["medidas"]["fondo"]; 
	
}
