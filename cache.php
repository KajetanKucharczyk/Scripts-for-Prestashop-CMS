<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(dirname(__FILE__)."/../kajtek_init.php");

$file = "search_errors.txt";
$query = "SELECT `entry`, `action`, `message` FROM `search_boost` WHERE `type`='ERROR'";

//CO TYDZIEŃ NOWY PLIK
if (filemtime("search_cache/".$file) < time() - 1*604800) {
	
	$result = $connection->executeS($query);
		
	$rows = array();
	
	for($i = 0; $i < count($result); $i++){
		array_push(
			$rows,
			Array(
				$result[$i]['entry'],
				$result[$i]['action'],
				$result[$i]['message']
			)
		);
	}
	
	//CACHE
	file_put_contents("search_cache/".$file, serialize($rows));				
	
	echo json_encode(unserialize(file_get_contents("search_cache/".$file)));
	
}else{
	
	echo json_encode(unserialize(file_get_contents("search_cache/".$file)));
}

?>
