<?php
    $archivo = $_REQUEST["provincia"];
    $file = file_get_contents("../".$archivo);
	$cadenaDiv = "<div id=\"contenido\">";
	$posIni = strpos($file,$cadenaDiv);
	$posFin = strpos($file,"</div>",$posIni);
	$cadena = html_entity_decode(trim(substr($file,$posIni+strlen($cadenaDiv),$posFin-$posIni-strlen($cadenaDiv))));
    echo $cadena ;
?>