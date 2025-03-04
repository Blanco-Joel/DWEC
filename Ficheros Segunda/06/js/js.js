if (document.addEventListener)
	window.addEventListener("load", iniciar);
else if (document.attachEvent)
	window.attachEvent("onload", iniciar);

function iniciar(){
    let equipos=document.getElementById("equipos");
	let temporadas=document.getElementById("temporadas");

	if (document.addEventListener)
    {
		equipos.addEventListener("change", recogerDatos);
		temporadas.addEventListener("change", recogerDatos);
    }else if (document.attachEvent)
    {
		equipos.attachEvent("change", recogerDatos);
		temporadas.attachEvent("change", recogerDatos);
    }
}

function recogerDatos(){
    let equipos=document.getElementById("equipos").value;
	let temporadas=document.getElementById("temporadas").value;
	if (equipos !="" && temporadas !="") {

		
		let conn;
		conn = window.XMLHttpRequest ? new XMLHttpRequest : window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHttp") : null ;

		if (document.addEventListener)
			conn.addEventListener("readystatechange", recibido)
		else if (document.attachEvent)
			conn.attachEvent("onreadystatechange", recibido);
		
		conn.open("POST","php/resultados.php");
		conn.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		let cadena="<datos><resultado><equipo>"+equipos+"</equipo><temporada>"+temporadas+"</temporada></resultado></datos>";
		
		conn.send(cadena);
				
	}
}

function recibido(evento){
	if (evento.target.readyState==4)
		if (evento.target.status==200){
			let datos=evento.target.responseXML;	
			let puesto=datos.getElementsByTagName("puesto").item(0).textContent;
			document.getElementById("puesto").value=puesto;
			let puntos=datos.getElementsByTagName("puntos").item(0).textContent;
			document.getElementById("puntos").value=puntos;
			let ganados=datos.getElementsByTagName("ganados").item(0).textContent;
			document.getElementById("ganados").value=ganados;
			let perdidos=datos.getElementsByTagName("perdidos").item(0).textContent;
			document.getElementById("perdidos").value=perdidos;
			let empatados=datos.getElementsByTagName("empatados").item(0).textContent;
			document.getElementById("empatados").value=empatados;
			let favor=datos.getElementsByTagName("favor").item(0).textContent;
			document.getElementById("favor").value=favor;
			let contra=datos.getElementsByTagName("contra").item(0).textContent;
			document.getElementById("contra").value=contra;
		}
}
