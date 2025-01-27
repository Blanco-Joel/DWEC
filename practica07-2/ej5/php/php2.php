<?php
	header('Content-Type:text/xml');
	$dato=fopen('php://input','r');
	$valor=fgets($dato);
	$television=simplexml_load_string($valor);
	$precios =[
		'Samsung' => ['21 in'=> 230,'24 in'=> 450,'32 in'=> 900,'55 in'=> 1250],
		'Telefunken' => ['21 in'=> 130,'24 in'=> 275,'32 in'=> 760,'55 in'=> 999],
		'Viera' => ['21 in'=> 140,'24 in'=> 233,'32 in'=> 922,'55 in'=> 1123],
		'Marca Pocha' => ['21 in'=> 10,'24 in'=> 20,'32 in'=> 30,'55 in'=> 40]
	];
	$precio = $precios[strval($television[0]->marca)][strval($television[0]->pulgadas)];
	$linea = "<producto><marca>".strval($television[0]->marca)."</marca><pulgadas>".strval($television[0]->pulgadas)."</pulgadas><precio>".$precio." €</precio></producto>";
	echo $linea;
?>