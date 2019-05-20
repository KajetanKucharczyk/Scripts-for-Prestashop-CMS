<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

spl_autoload_register(function ($class_name) {
    include '../Classes/'.$class_name . '.php';
});

//POŁĄCZENIE Z DB
$connection = Connection::getInstance();

//POBIERZ OPISY
$q = $connection->getConnection()->prepare("SELECT ID_MODELU FROM gotowe_opisy");
$q->execute(); 	
$result = $q->fetchAll();

//SPRAWDZ ILOSC SLOW
foreach($result as $key => $value){
	$id = $value['ID_MODELU'];
	
	//DESC PL
	$q = $connection->getConnection()->prepare("SELECT description FROM product_lang WHERE id_product=$id AND id_lang=1");
	$q->execute(); 	
	$result = $q->fetchAll();
	$pl = strlen($result[0]['description']);
	
	//DESC ENG
	$q = $connection->getConnection()->prepare("SELECT description FROM product_lang WHERE id_product=$id AND id_lang=2");
	$q->execute(); 	
	$result = $q->fetchAll();
	$eng = strlen($result[0]['description']);
	
	//WYPISZ
	echo $id."  ".$pl."  ".$eng;
	
	//USUWANIE
	if($pl < 350 OR $eng < 350 OR abs($pl - $eng) > 400){
		echo "  DO USUNIĘCIA";
		$connection->getConnection()->exec("DELETE FROM gotowe_opisy WHERE ID_MODELU=$id");	
	}
	echo "<br>";
}
?>
