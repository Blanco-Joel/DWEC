$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let objetoAjax={method:"GET",
					url:"php/ajax-01.php?nombre="+nom+"&apellidos="+ape,
					success:recibido,
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}
