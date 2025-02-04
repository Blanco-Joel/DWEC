$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let datos = new FormData();
	datos.append("nombre",nom);
	datos.append("apellidos",ape);
	let objetoAjax={method:"POST",
					data:datos,
					success:recibido,
					contentType:false,
					processData:false
	}
	$.ajax("php/ajax-03.php",objetoAjax);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}
