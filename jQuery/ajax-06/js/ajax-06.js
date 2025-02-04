$(window).on("load", inicio);

function inicio(){
	$("#obtener").on("click", procesar);
	$("#masTabla").on("click", mas);
}

function mas(){
let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	if (nom!="" && ape!=""){
		let padre=$("#tableEmpleados>tbody");
		padre.append("<tr><td>"+nom+"</td><td>"+ape+"</td><td>0</td></tr>");
	}
}

function procesar(){
	let cadenaXML="<fabrica>";
	let padre=$("#tableEmpleados>tbody");
	let filas=$(padre).find("tr");
	for (i =0 ; i< $(filas).length; i++){
		let columnas=$(filas).eq(i).find("td");
		let nom=$(columnas).eq(0).text();
		let ape=$(columnas).eq(1).text();
		cadenaXML+="<empleado><nombre>"+nom+"</nombre><apellidos>"+ape+
					"</apellidos></empleado>"
	}
	cadenaXML+="</fabrica>";
	
	
	let objetoAjax={method:"POST",
					url:"php/ajax-06.php" ,
					headers: {"Content-Type":"application/x-www-form-urlencoded"},
					data:cadenaXML,
					success:recibido,
					dataType:"xml"
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	let valores=$(dato).find("sueldo")
	let padre=$("#tableEmpleados>tbody");
	let filas=$(padre).find("tr");
	for (i =0 ; i< $(filas).length; i++){
		let columnas=$(filas).eq(i).find("td");
		let suel=$(valores).eq(i).text();
		$(columnas).eq(2).text(suel);
	}
}
