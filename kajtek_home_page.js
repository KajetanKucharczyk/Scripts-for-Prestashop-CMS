/*
/themes/zro03/modules/blockcategories/blockcategories.tpl
*/

//PANEL SPECJALNIE DLA CIEBIE
function kajtek_home_page(){
	$("#follow_block_button_0")
	.mouseover(function(){
		$(this).stop().animate({
			"padding-left": "60px"
		}, 250)
		$(this).css("background-color", "#fafafa");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "40px"
		}, 250)
		$(this).css("background-color", "white");
	})
	.click(function(){
		if(window.location.href.split("/")[3] == "en"){
			window.open("https://agtom.eu/en/content/4-hobby-store", "_self");
		}else{
			window.open("https://agtom.eu/content/4-about-us", "_self");
		}
	})
	$("#follow_block_button_1")
	.mouseover(function(){
		$(this).stop().animate({
			"padding-left": "60px"
		}, 250)
		$(this).css("background-color", "#fafafa");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "40px"
		}, 250)
		$(this).css("background-color", "white");
	})
	.click(function(){
		window.open("https://agtom.eu/pl/blog", "_self");
	})
	$("#follow_block_button_11")
	.mouseover(function(){
		$(this).stop().animate({
			"padding-left": "60px"
		}, 250)
		$(this).css("background-color", "#fafafa");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "40px"
		}, 250)
		$(this).css("background-color", "white");
	})
	.click(function(){
		if(window.location.href.split("/")[3] == "en"){
			window.open("https://agtom.eu/en/content/category/3-knowledge", "_self");
		}else{
			window.open("https://agtom.eu/content/category/3-baza-wiedzy", "_self");
		}
	})
	$("#follow_block_button_2")
	.mouseover(function(){
		$(this).stop().animate({
			"padding-left": "30px"
		}, 250)
		$(this).css("background-color", "#3b5998");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "10px"
		}, 250)
		$(this).css("background-color", "#516ca5");
	})
	.click(function(){
		window.open("https://pl-pl.facebook.com/agtom.eu/");
	})
	$("#follow_block_button_3")
	.mouseover(function(){
		$(this).stop().animate({
			"padding-left": "30px"
		}, 250)
		$(this).css("background-color", "#3b5998");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "10px"
		}, 250)
		$(this).css("background-color", "#516ca5");
	})
	.click(function(){
		window.open("https://www.facebook.com/groups/308204276182942/");
	})
	$("#follow_block_button_4")
	.mouseover(function(){
	$(this).stop().animate({
			"padding-left": "30px"
		}, 250)
		$(this).css("background-color", "#cc181e");
	})
	.mouseout(function(){
		$(this).stop().animate({
			"padding-left": "10px"
		}, 250)
		$(this).css("background-color", "#e84349");
	})
	.click(function(){
		window.open("https://www.youtube.com/channel/UCr_Bc5zqi-di2kN9XZNhJAA");
	})
}
function kajtek_home_page_translate(){
	if(window.location.href.split("/")[3] == "en"){
		$(".follow_block_header").html($(".follow_block_header").html().replace("Specjalnie dla Ciebie", "Specially for You"));
		$("#follow_block_button_11").html($("#follow_block_button_11").html().replace("Baza wiedzy", "Knowledge"));
		$("#follow_block_button_0").html($("#follow_block_button_0").html().replace("Sklep stacjonarny w Krakowie", "Modeling store in Krakow"));
		$("#follow_block_button_1").remove();
		$("#follow_block_button_2").html($("#follow_block_button_2").html().replace("Nasz sklep na Facebooku", "Our shop on Facebook"));
		$("#follow_block_button_3").html($("#follow_block_button_3").html().replace("Grupa modelarska Agtom", "Agtom modelling group"));
		$("#follow_block_button_4").html($("#follow_block_button_4").html().replace("Nasz kanał na YouTube", "Our YouTube channel"));
	}
}
function kajtek_home_page_resize(){
	/*$(".follow_block_button").each(function(){
		txt = $(this).attr("full-text");
		if($("#follow_block") < 210){
			//SKRACANIE
			$(this).text(txt.slice(10) + "...");
		}else{
			//SKRACANIE
			$(this).text(txt);
		}
	})	*/
}