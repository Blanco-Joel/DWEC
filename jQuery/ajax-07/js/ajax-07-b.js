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
	let padre=$("#tableEmpleados>tbody");
	let filas=$(padre).find("tr");
	let misDatos=new Array();
	for (i =0 ; i< $(filas).length; i++){
		let columnas=$(filas).eq(i).find("td");
		let nom=$(columnas).eq(0).text();
		let ape=$(columnas).eq(1).text();
		let datos={
			nombre:nom,
			apellidos:ape
		}
		misDatos[i]=datos;
	}
	let objetosJSON=JSON.stringify(misDatos);
	let objetoAjax={method:"POST",
					url:"php/ajax-07.php" ,
					data:objetosJSON,
					success:recibido,
					dataType:"text"
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	let valores=JSON.parse(dato);
	let padre=$("#tableEmpleados>tbody");
	let filas=$(padre).find("tr");
	for (i =0 ; i< $(filas).length; i++){
		let columnas=$(filas).eq(i).find("td");
		let suel=valores[i].sueldo;
		$(columnas).eq(2).text(suel);
	}
}
