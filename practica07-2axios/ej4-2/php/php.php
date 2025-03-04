<?php
	$entrada=fopen('php://input','r');
	$datos=fgets($entrada);
	$valores=json_decode($datos,true);
	
	$nombre=$valores["nombre"];
	$apellidos=$valores["apellidos"];
	$puesto = $valores["puesto"];
	$sueldo = rand(1000,3250);
	echo $sueldo ;
?>