$(window).on("load", inicio);

function inicio(){
	$("#calcular").on("click", iniciar);
}
function iniciar(){
	let primerLinea=$("#tablaCoches>tbody>tr");
	
	if (primerLinea != "")
	{
		let todosDatos=new Array();
		for (i =0 ; i< $(primerLinea).length; i++){
			let tds=$(primerLinea).eq(i).find("td");

			let moto=$(tds).eq(0).text();
			let velocidad=$(tds).eq(1).text();
			let aceleracion=$(tds).eq(2).text();
			let tiempo=$(tds).eq(3).text();
			let datos=new Object();
			datos.moto = moto;
			datos.velocidad = velocidad;
			datos.aceleracion = aceleracion;
			datos.tiempo = tiempo;
			todosDatos[i]=datos;
		}
		console.log(todosDatos);
		let envio=JSON.stringify(todosDatos);
		let obj={
			method:"POST",
			url:"php/distancia.php" ,
			data:envio,
			success:respuesta,
			dataType:"json"
		}
		$.ajax(obj);
	}
	
}

function respuesta(dato){
	console.log(dato);
	let padre=$("#tablaCoches>tbody>tr");
	for (let i = 0; i < dato.length; i++) {
		let distancia = dato[i].distancia;
		$(padre).eq(i).find("td:nth-child(5)").text(distancia);
	}
}
