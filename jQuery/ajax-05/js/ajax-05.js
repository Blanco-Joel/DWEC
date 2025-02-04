$(window).on("load", inicio)

function inicio(){
	$("#obtener").on("click", procesar);
}

function procesar(){
	let nom=$("#nombre").val().trim();
	let ape=$("#apellidos").val().trim();
	let miObjeto= new Object();
	miObjeto.nombre=nom;
	miObjeto.apellidos=ape;
	let objetoJSON=JSON.stringify(miObjeto);
	let objetoAjax={method:"POST",
					url:"php/ajax-05.php" ,
					data:objetoJSON,
					success:recibido,
					dataType:"json"
	}
	$.ajax(objetoAjax);
}

function recibido(dato){
	let valor=dato;
	//let valor=JSON.parse(dato)
	$("#sueldo").val(valor.sueldo);	
}
	
	