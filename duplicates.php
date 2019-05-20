<?php
require_once(dirname(__FILE__)."/../kajtek_init.php");

//ZNAJDŹ WSZYSTKIE PRODUKTY
$query = "SELECT id_product FROM `product`";
$result = $connection->ExecuteS($query);

//POBIERZ REFERENCE NUMBER
$references = array();
$ids = array();
foreach($result as $key => $value){
	array_push(
		$references,
		$reference->get_reference_by_id($value['id_product'])
	);
	array_push(
		$ids,
		$value['id_product']
	);
}

//SORTOWANIE TABELI
sort($references);

//PĘTLA TO TABLICY
$prev_ref = "";
$var = 0;
echo "<table style='border-collapse:collapse;'>";
for($i = 0; $i < count($references); $i++){
	if($references[$i] == $prev_ref){
		$var++;
	}else{
		if($var > 0){
			$ref = $prev_ref;
			$name = $product->get_name_by_product_id($reference->get_id_from_reference($ref));
			echo "<tr><td style='border:1px solid black;text-align:center;'>$ref</td><td style='border:1px solid black;text-align:center;'>$name</td></tr>";
		}
		$var = 0;
	}
	$prev_ref = $references[$i];
}
echo "</table>";

?>
