<?php
require_once(dirname(__FILE__)."/../kajtek_init.php");

//MODELE

//POBRANIE PRODUCT ID
$product_ids = json_decode($category->get_all_product_id_by_category_id_ALL(7), true);

//TABELA -> WYPISANIE
echo "<table style='border-collapse:collapse;'>";

//TABELA -> NAGŁÓWEK
echo "<tr><td style='border:1px solid black;text-align:center;' colspan=2><b>MODELE DO SKLEJANIA</b></td></tr>";

//PĘTLA PO WYNIKACH
foreach($product_ids as $key => $value){
	
	//SPRAWDZ CZY MA SKALE
	if(!$features->check_feature_by_product_id($value['id_product'], 11)){
		
		//POBIERZ NAZWĘ PL
		$nazwa = $product->get_name_by_product_id($value['id_product']);
		
		//SPRAWDZ CZY MA SKALĘ
		preg_match_all('(\d:\d+)', $nazwa, $skala);
		if(count($skala[0]) > 0){
			
			//PRODUKT MA SKALĘ
			$_skala = $skala[0][0];
			
			//SZUKANIE CECHY
			if($features->check_feature_value_by_name($_skala, 11)){
				
				//ZNALEZIONO DOPASOWANIE
				//DODANIE CECH
				$features->insert_feature_value($value['id_product'], 11, $features->get_feature_value_by_feature_value_name($_skala));
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>$_skala</td></tr>";
			}else{
				
				//DODANIE CECHY
				$features->insert_feature_value($value['id_product'], 11, 32191);
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK CECHY</td></tr>";
			}
		}else{
				
			//NIE MA SKALI W OPISIE PRODUKTU
			//DODANIE CECHY POZOSTAŁE
			$features->insert_feature_value($value['id_product'], 11, 32191);
				
			//WYSWIETL
			echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK SKALI W OPISIE</td></tr>";
		}
		//DODANIE CECHY DO ZŁOŻENIA
		$features->insert_feature_value($value['id_product'], 33, 32144);
	}	
}

//MODELE KOLEKCJONERSKIE

//POBRANIE PRODUCT ID
$product_ids = json_decode($category->get_all_product_id_by_category_id_ALL(6), true);

//TABELA -> NAGŁÓWEK
echo "<tr><td style='border:1px solid black;text-align:center;' colspan=2><b>MODELE KOLEKCJONERSKIE</b></td></tr>";

//PĘTLA PO WYNIKACH
foreach($product_ids as $key => $value){
	
	//SPRAWDZ CZY MA SKALE
	if(!$features->check_feature_by_product_id($value['id_product'], 11)){
		
		//POBIERZ NAZWĘ PL
		$nazwa = $product->get_name_by_product_id($value['id_product']);
		
		//SPRAWDZ CZY MA SKALĘ
		preg_match_all('(\d:\d+)', $nazwa, $skala);
		if(count($skala[0]) > 0){
			
			//PRODUKT MA SKALĘ
			$_skala = $skala[0][0];
			
			//SZUKANIE CECHY
			if($features->check_feature_value_by_name($_skala, 11)){
				
				//ZNALEZIONO DOPASOWANIE
				//DODANIE CECH
				$features->insert_feature_value($value['id_product'], 11, $features->get_feature_value_by_feature_value_name($_skala));
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>$_skala</td></tr>";
			}else{
				
				//DODANIE CECHY
				$features->insert_feature_value($value['id_product'], 11, 32191);
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK CECHY</td></tr>";
			}
		}else{
				
			//NIE MA SKALI W OPISIE PRODUKTU
			//DODANIE CECHY POZOSTAŁE
			$features->insert_feature_value($value['id_product'], 11, 32191);
				
			//WYSWIETL
			echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK SKALI W OPISIE</td></tr>";
		}
		//DODANIE CECHY DIE CAST
		$features->insert_feature_value($value['id_product'], 33, 32145);
	}	
}

//DODATKI

//POBRANIE PRODUCT ID
$product_ids = json_decode($category->get_all_product_id_by_category_id_ALL(208), true);

//TABELA -> NAGŁÓWEK
echo "<tr><td style='border:1px solid black;text-align:center;' colspan=2><b>DODATKI DO MODELI</b></td></tr>";

//PĘTLA PO WYNIKACH
foreach($product_ids as $key => $value){
	
	//SPRAWDZ CZY MA SKALE
	if(!$features->check_feature_by_product_id($value['id_product'], 11)){
		
		//POBIERZ NAZWĘ PL
		$nazwa = $product->get_name_by_product_id($value['id_product']);
		
		//SPRAWDZ CZY MA SKALĘ
		preg_match_all('(\d:\d+)', $nazwa, $skala);
		if(count($skala[0]) > 0){
			
			//PRODUKT MA SKALĘ
			$_skala = $skala[0][0];
			
			//SZUKANIE CECHY
			if($features->check_feature_value_by_name($_skala, 11)){
				
				//ZNALEZIONO DOPASOWANIE
				//DODANIE CECH
				$features->insert_feature_value($value['id_product'], 11, $features->get_feature_value_by_feature_value_name($_skala));
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>$_skala</td></tr>";
			}else{
				
				//DODANIE CECHY
				$features->insert_feature_value($value['id_product'], 11, 32191);
				
				//WYSWIETL
				echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK CECHY</td></tr>";
			}
		}else{
				
			//NIE MA SKALI W OPISIE PRODUKTU
			//DODANIE CECHY POZOSTAŁE
			$features->insert_feature_value($value['id_product'], 11, 32191);
				
			//WYSWIETL
			echo "<tr><td style='border:1px solid black;text-align:center;'>$nazwa</td><td style='border:1px solid black;text-align:center;'>BRAK SKALI W OPISIE</td></tr>";
		}
	}	
}

//TABELA -> WYPISANIE
echo "</table>";
?>
