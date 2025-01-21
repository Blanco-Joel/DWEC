<?php
	$entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=json_decode($datos,true);
	$medidas = [
		"Phillips" => 	["Lavadora" => ["ancho" => 60, "alto" => 85, "fondo" => 55], "Lavavajillas" => ["ancho" => 59, "alto" => 82, "fondo" => 57], "Frigorifico" => ["ancho" => 70, "alto" => 200, "fondo" => 60], "Horno" => ["ancho" => 59, "alto" => 59, "fondo" => 54], "Microondas" => ["ancho" => 45, "alto" => 32, "fondo" => 38], "Placa" => ["ancho" => 60, "alto" => 5, "fondo" => 50], "Campana" => ["ancho" => 60, "alto" => 15, "fondo" => 50]], 
		"Balay" => 		["Lavadora" => ["ancho" => 59, "alto" => 84, "fondo" => 56],"Lavavajillas" => ["ancho" => 60, "alto" => 81, "fondo" => 55],"Frigorifico" => ["ancho" => 65, "alto" => 190, "fondo" => 65],"Horno" => ["ancho" => 60, "alto" => 60, "fondo" => 55],"Microondas" => ["ancho" => 44, "alto" => 30, "fondo" => 35],"Placa" => ["ancho" => 58, "alto" => 6, "fondo" => 48],"Campana" => ["ancho" => 90, "alto" => 20, "fondo" => 55],],
		"Bosh" => 		["Lavadora" => ["ancho" => 61, "alto" => 86, "fondo" => 58],"Lavavajillas" => ["ancho" => 58, "alto" => 80, "fondo" => 58],"Frigorifico" => ["ancho" => 75, "alto" => 210, "fondo" => 66],"Horno" => ["ancho" => 58, "alto" => 57, "fondo" => 52],"Microondas" => ["ancho" => 43, "alto" => 31, "fondo" => 37],"Placa" => ["ancho" => 62, "alto" => 4, "fondo" => 52],"Campana" => ["ancho" => 80, "alto" => 18, "fondo" => 60],],
		"Siemens" => 	["Lavadora" => ["ancho" => 62, "alto" => 87, "fondo" => 60],"Lavavajillas" => ["ancho" => 61, "alto" => 83, "fondo" => 57],"Frigorifico" => ["ancho" => 68, "alto" => 195, "fondo" => 62],"Horno" => ["ancho" => 59, "alto" => 61, "fondo" => 53],"Microondas" => ["ancho" => 46, "alto" => 33, "fondo" => 39],"Placa" => ["ancho" => 63, "alto" => 5, "fondo" => 51],"Campana" => ["ancho" => 70, "alto" => 17, "fondo" => 55],]
	];
	$respuesta=new stdClass();
	$respuesta->marca=$valores[0]["marca"];
	$respuesta->electrodomestico=$valores[0]["electrodomestico"];
	$respuesta->medidas=$medidas[$valores[0]["marca"]][$valores[0]["electrodomestico"]];
	echo json_encode($respuesta);
	
?>