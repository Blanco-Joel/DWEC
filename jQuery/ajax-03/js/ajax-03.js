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
					url:"php/ajax-03.php" ,
					data:datos,
					success:recibido,
					contentType:false,
					processData:false
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}