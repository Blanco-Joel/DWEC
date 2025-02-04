
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
	let objetoAjax=
	{
		url:"php/php.php?inicio=true",
		method:"GET",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		success:respuestaSelects,
		dataType:"xml"
	}
	
	$.ajax(objetoAjax);

	

}

function respuestaSelects(dato)
{
	for (let i = 0; i < 4; i++) {
		let linea = dato.getElementsByTagName("producto").item(i).textContent;
		$("#marca").append("<option value='"+linea+"'>"+linea+"</option>"); 
	}
	for (let i = 0; i < 4; i++) {
		let linea = dato.getElementsByTagName("dimension").item(i).textContent;
		$("#pulgadas").append("<option value='"+linea+"'>"+linea+"</option>"); 
	}
}

function llamada(){
    
    let marca    = $("#marca").val().trim();
	let pulgadas = $("#pulgadas").val().trim();
	
	let datos= "<producto><marca>"+marca+"</marca><pulgadas>"+pulgadas+"</pulgadas></producto>";

	let objetoAjax={
		url:"php/php2.php",
        method:"POST",
		headers:{"Content-Type":"application/x-www-form-urlencoded"},
		success:muestraContenido,
		data:datos
    }
    
    $.ajax(objetoAjax);
	

}

function muestraContenido(dato)
{
	$("#precio").val(dato.getElementsByTagName("precio").item(0).textContent);	
}
