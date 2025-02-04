$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let objetoAjax={method:"POST",
					url:"php/ajax-02.php" ,
					data:{"nombre":nom,"apellidos":ape},
					success:recibido,
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	$("#sueldo").val(dato);	
}
