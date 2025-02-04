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
	let objetoAjax=
	{
		url:"php/php.php?inicio=true",
		method:"GET",
		headers:{"Content-Type":"application/json"},
		success:respuestaSelects,
		dataType:"json"
	}
	
	$.ajax(objetoAjax);
}
function respuestaSelects(dato)
{
	for (let i=0; i < 4; i++){
		$("#marca").append("<option value='"+dato["marcas"][i]+"'>"+dato["marcas"][i]+"</option>"); 
	}
}

function llamada(){
	let marca = $("#marca").val().trim();
	let electrodomestico =$("#electrodomestico").val().trim();
	let misDatos=new Array();
	let datos=new Object();
	datos.marca=marca;
	datos.electrodomestico=electrodomestico;
	misDatos[0]=datos;
	
	let objetosJSON=JSON.stringify(misDatos);
	
	let objetoAjax={
		method:"POST",
		url:"php/php2.php" ,
		data:objetosJSON,
		success:muestraContenido,
		dataType:"json"
	}
	
	$.ajax(objetoAjax);
}

function muestraContenido(dato)
{

	$("#ancho").val(dato["medidas"]["ancho"]); 
	$("#alto").val(dato["medidas"]["alto"]); 
	$("#fondo").val(dato["medidas"]["fondo"]); 
	
}
