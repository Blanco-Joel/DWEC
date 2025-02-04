<?php
	$nombre=$_REQUEST["nombre"];
	$apellidos=$_REQUEST["apellidos"];
	$modulo = $_REQUEST["modulo"];
	$nota= $_REQUEST["nota"];
	$nota2 = ($nota < 5) ? "SUSPENSO" : (($nota < 6) ? "SUFICIENTE" : (($nota < 7) ? "BIEN" : (($nota < 9) ? "NOTABLE" : (($nota <= 10) ? "SOBRESALIENTE" : "ERROR"))));
	echo $nota2;
?>