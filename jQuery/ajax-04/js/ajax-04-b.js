$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let cadenaXML="<fabrica><empleado><trabajador nombre='"+nom+"' apellidos='"+ape+
					"' /></empleado></fabrica>";
	let objetoAjax={method:"POST",
					url:"php/ajax-04-b.php" ,
					headers: {"Content-Type":"application/x-www-form-urlencoded"},
					data:cadenaXML,
					success:recibido,
					dataType:"xml"
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	let valor=$(dato).find("trabajador").attr("sueldo");
	$("#sueldo").val(valor);	
}
	