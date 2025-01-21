if (document.addEventListener)
	window.addEventListener("load", inicio);
else if (document.attachEvent)
	window.attachEvent("onload", inicio);

function inicio(){
	crearSelects();
	let marca=document.getElementById("marca");
	let electrodomestico=document.getElementById("electrodomestico");
	llamada();
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
	let electrodomestico = document.getElementById("electrodomestico").value.trim();
	
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

	let datos= "<producto><marca>"+marca+"</marca><pulgadas>"+electrodomestico+"</pulgadas></producto>";
	conn.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	conn.send(datos);
}

function respuestaSelects(evento)
{
	if (evento.target.readyState==4 && evento.target.status==200)
	{
		let datos=evento.target.responseText;	
		let variosDatos=JSON.parse(datos);
		for (let i=0; i < 4; i++){
			let opcion = document.createElement("option"); 
			opcion.value = variosDatos["marcas"][i];  
			opcion.textContent = variosDatos["marcas"][i]; 
			document.getElementById("marca").appendChild(opcion); 
		}

		
	}
}
function respuesta(evento)
{
	if (evento.target.readyState==4 && evento.target.status==200)
        document.getElementById("precio").value=evento.target.responseXML.getElementsByTagName("precio").item(0).textContent;	
}
