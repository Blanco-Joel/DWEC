
<?php
	if (isset($_GET["inicio"])) {
		$marcas =
		["marcas" => [
			"Phillips",
			"Balay",
			"Bosh",
			"Siemens"
		]];

		header('Content-Type: application/json');
		
		echo json_encode($marcas);

	}

?>