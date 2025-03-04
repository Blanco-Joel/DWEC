
<?php
	if (isset($_GET["inicio"])) {
		header('Content-Type:text/xml');
		$datos="<data><productos><producto>Samsung</producto><producto>Telefunken</producto><producto>Viera</producto><producto>Marca Pocha</producto></productos><dimensiones><dimension>21 in</dimension><dimension>24 in</dimension><dimension>32 in</dimension><dimension>55 in</dimension></dimensiones></data>";
		echo $datos;
	}

?>