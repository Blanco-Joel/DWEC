<?php
    $archivo = $_REQUEST["provincia"];
    $file = file_get_contents("../".$archivo);
	$posIni = strpos($file,"<div id=\"contenido\">");
	$posFin = strpos($file,"</div>",$posIni);
	$cadena = html_entity_decode(trim(substr($file,$posIni+strlen("<div id=\"contenido\">"),$posFin-$posIni-strlen("<div id=\"contenido\">"))));
    echo $cadena ;
?>