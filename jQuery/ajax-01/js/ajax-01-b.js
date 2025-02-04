$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let objetoAjax={method:"GET",
					success:recibido,
	}
	$.ajax("php/ajax-01.php?nombre="+nom+"&apellidos="+ape,objetoAjax);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}