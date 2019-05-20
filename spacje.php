<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(dirname(__FILE__)."/../kajtek_init.php");

//PL 500 PODWÓJNYCH SPACJI
$q = "SELECT name, id_product FROM product_lang WHERE name LIKE '%  %' AND id_lang=1 LIMIT 500";
$res = $connection->ExecuteS($q);

foreach($res as $key => $value){
	echo $value['name']."  ->  ".preg_replace('!\s+!', ' ', $value['name']);
	$nazwa_PL = preg_replace('!\s+!', ' ', $value['name']);
	$id = $value['id_product'];
	$sql = "UPDATE product_lang SET name='$nazwa_PL' WHERE id_product='$id' AND id_lang='1'";
	$res = $connection->ExecuteS($sql);

	echo "   OK<br>";
}

//ENG 500 PODWÓJNYCH SPACJI
$q = "SELECT name, id_product FROM product_lang WHERE name LIKE '%  %' AND id_lang=2 LIMIT 500";
$res = $connection->ExecuteS($q);
foreach($res as $key => $value){
	echo $value['name']."  ->  ".preg_replace('!\s+!', ' ', $value['name']);
	$nazwa_PL = preg_replace('!\s+!', ' ', $value['name']);
	$id = $value['id_product'];
	$sql = "UPDATE product_lang SET name='$nazwa_PL' WHERE id_product='$id' AND id_lang='2'";
	$res = $connection->ExecuteS($sql);
	echo "   OK<br>";
}

echo "<br><br><br>";

//PL 500 OSTATNICH SPACJI
$q = "SELECT name, id_product FROM product_lang WHERE name LIKE '% ' AND id_lang=1 LIMIT 500";
$res = $connection->ExecuteS($q);
foreach($res as $key => $value){	
	$nazwa_PL = rtrim($value['name'], " ");
	echo $value['name']."  ->  ".$nazwa_PL;
	$id = $value['id_product'];
	$sql = "UPDATE product_lang SET name='$nazwa_PL' WHERE id_product='$id' AND id_lang='1'";
	$res = $connection->ExecuteS($sql);
	echo "   OK<br>";
}

//ENG 500 OSTATNICH SPACJI
$q = "SELECT name, id_product FROM product_lang WHERE name LIKE '%  ' AND id_lang=2 LIMIT 500";
$res = $connection->ExecuteS($q);
foreach($res as $key => $value){
	$nazwa_PL = rtrim($value['name'], " ");
	echo $value['name']."  ->  ".$nazwa_PL;
	$id = $value['id_product'];
	$sql = "UPDATE product_lang SET name='$nazwa_PL' WHERE id_product='$id' AND id_lang='2'";
	$res = $connection->ExecuteS($sql);
	echo "   OK<br>";
}
?>
