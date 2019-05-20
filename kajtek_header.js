/*
/themes/zr03/header.tpl
/modules/zeroblog/views/templates/front/header.tpl
*/

var change_cart_interval;
var change_header_option = false;
var licznik_z = 999;

//HEADER I POLE FARB
function kajtek_header(){
	
	//HEADER
	scorll_edit();
	
	//LOGO
	$("img.logo").css({
		"max-height": "90%",
		"margin": "5px 0px 0px 0px"
	});
	$("body").on('DOMSubtreeModified', ".ajax_cart_total", function(){
		if(change_header_option == true){
			setTimeout(function(){
				$(".ajax_cart_total").css("display", "none");
				$(".ajax_cart_no_product").css("display", "none");
			}, 2500)
		}
	});
	
	//DROPDOWN
	//POLE FARB
	$(".dropdown")
	.css({
		"max-height": "750px",
		"overflow-y": "auto",
		"border": "1px solid #c7c7c7",
		"box-shadow": "0xp 1px 5px #c7c7c7"
	})
	.mouseover(function(){
		$(this)
		.focus()
		.css({
			"z-index": "999"
		})
	})
	.mouseleave(function(){
		$(this)
		.scrollTop(0)
		.css({
			"z-index": "0"
		})
	})
}
function kajtek_header_translate(){
	
}
function kajtek_header_resize(){

}

function scorll_edit(){
	//PREVENT MOBILE
	if(!($(window).width() < 753 ||  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){
		//RESIZE
		$(window).resize(function(){
			if(change_header_option == true){
				view_menu(change_header_option);
				view_image(change_header_option);				
				view_search(change_header_option);
				view_urls(change_header_option);
				view_cart(change_header_option);	
			}
		})
		change_header_option = false;
		$(window).scroll(function(){
			//4 OPCJE -> WYKONYWANIE TYLKO RAZ DANEJ ZMIANY W CZASIE JEDNEGO SCROLLOWANIA	
			if($(window).scrollTop() >= 79 && change_header_option == false){
				//SCROLL + DOMYSLNY WIDOK -> NIE OK
				//TU SIĘ DZIEJE ZMIANA WYGLADU
				change_header_option = true;
				view_menu(change_header_option);
				view_image(change_header_option);				
				view_search(change_header_option);
				view_urls(change_header_option);
				view_cart(change_header_option);		
				if(!$(".zmega-menu").hasClass("affix")){
					$(".zmega-menu").addClass("affix")
					$(".zmega-menu").removeClass("affix-top")
				}
			}
			if($(window).scrollTop() >= 79 && change_header_option == true){
				//SCROLL + ZMIENIONY WIDOK -> OK
			}
			if($(window).scrollTop() < 79 && change_header_option == false){
				//BRAK SCROLLA + DOMYSLNY WIDOK -> JEST OK
			}
			if($(window).scrollTop() < 79 && change_header_option == true){
				//BRAK SCROLLA + ZMIENIONY WIDOK -> NIE OK
				//TU SIE DZIEJE ZMIANA WYGLADU
				change_header_option = false;
				view_menu(change_header_option);	
				view_image(change_header_option);
				view_search(change_header_option);
				view_urls(change_header_option);
				view_cart(change_header_option);
				if(!$(".zmega-menu").hasClass("affix-top")){
					$(".zmega-menu").addClass("affix-top")
					$(".zmega-menu").removeClass("affix")
				}
			}
		})
		//4 OPCJE -> WYKONYWANIE TYLKO RAZ DANEJ ZMIANY W CZASIE JEDNEGO SCROLLOWANIA	
		if($(window).scrollTop() >= 79 && change_header_option == false){
			//SCROLL + DOMYSLNY WIDOK -> NIE OK
			//TU SIĘ DZIEJE ZMIANA WYGLADU
			change_header_option = true;
			view_menu(change_header_option);
			view_image(change_header_option);				
			view_search(change_header_option);
			view_urls(change_header_option);
			view_cart(change_header_option);		
			if(!$(".zmega-menu").hasClass("affix")){
				$(".zmega-menu").addClass("affix")
				$(".zmega-menu").removeClass("affix-top")
			}
		}
		if($(window).scrollTop() >= 79 && change_header_option == true){
			//SCROLL + ZMIENIONY WIDOK -> OK
		}
		if($(window).scrollTop() < 79 && change_header_option == false){
			//BRAK SCROLLA + DOMYSLNY WIDOK -> JEST OK
		}
		if($(window).scrollTop() < 79 && change_header_option == true){
			//BRAK SCROLLA + ZMIENIONY WIDOK -> NIE OK
			//TU SIE DZIEJE ZMIANA WYGLADU
			change_header_option = false;
			view_menu(change_header_option);	
			view_image(change_header_option);
			view_search(change_header_option);
			view_urls(change_header_option);
			view_cart(change_header_option);
			if(!$(".zmega-menu").hasClass("affix-top")){
				$(".zmega-menu").addClass("affix-top")
				$(".zmega-menu").removeClass("affix")
			}
		}
	}
}
function view_menu(opcja){
	if(opcja == true){
		//ZMIANA WYGLADU Z NORMALNEGO NA SCROLLOWANY
		if($("#zmegamenu > div > #left_nav_trigger").length != 1){
			$("#left_nav_trigger > .nav-icon").html("");
			$("#left_nav_trigger").css({
				"position": "initial",
				"float": "left"				
			});
			$("#left_nav_trigger > a.nav-icon").css({
				"line-height": "50px",
				"font-weight": "initial"
			});
			menu = $("#left_nav_trigger").detach();
			menu.appendTo("#zmegamenu > div");
			menu = null;
		}
	}
	if(opcja == false){
		//ZMIANA WYGLADU Z SCROLLOWANEGO NA NORMALNY
		$("#left_nav_trigger").css({
			"position": "absolute",
			"float": "none"
		});
		menu = $("#left_nav_trigger").detach();
		menu.appendTo(".main-header > div.container");
		menu = null;
	}
}
function view_cart(opcja){
	if(opcja == true){
		//ZMIANA WYGLADU NORMALNEGO NA SCROLLOWANY
		//$(".ajax_cart_total, .ajax_cart_no_product").css("display", "none");
		$(".shopping_cart_wrapper").css({
			"top": "-63px"
		});
		$(".shopping_cart_wrapper > a").css({
			"font": ""
		});
		//ZMIANA KOSZYKA
		//change_cart_interval = setInterval(function(){
		//	//$(".ajax_cart_total").css("display", "none");
		//},1000)
		menu = $(".shopping_cart_wrapper").detach();
		menu.appendTo("#zmegamenu > div");
		menu = null;
	}
	if(opcja == false){
		//ZMIANA WYGLADU Z SCROLLOWANEGO NA NORMALNY
		//clearInterval(change_cart_interval);
		//$(".ajax_cart_total, .ajax_cart_no_product").css("display", "block");
		$(".shopping_cart_wrapper").css("top", "0px");
		$(".shopping_cart_wrapper").css({
			"top": "0px"
		});
		menu = $(".shopping_cart_wrapper").detach();
		menu.prependTo(".main-header > div.container");
		menu.prependTo(".main-header > div.container");
		menu = null;
	}
}
function view_search(opcja){
	if(opcja == true){
		//ZMIANA WYGLADU NORMALNEGO NA SCROLLOWANY
		if($(window).width() > 975){
			//ŚREDNI
			$("#searchbox").css({
				"width": "250px",
				"margin-top": "4px",
				"float": "left"
			});
		}else{
			if($(window).width() > 975){
				//ŚREDNI
				//NAJMNIEJSZY
				$("#searchbox").css({
					"width": "200px",
					"margin-top": "4px",
					"float": "left"
				});
			}else{
				//NAJMNIEJSZY
				$("#searchbox").css({
					"width": "145px",
					"margin-top": "4px",
					"float": "left"
				});
			}
		}
		search = $("#searchbox").detach();
		$("#searchbox").remove();
		search.appendTo("#zmegamenu > div");
		search = null;
	}
	if(opcja == false){
		//ZMIANA WYGLADU Z SCROLLOWANEGO NA NORMALNY
		$("#searchbox").css({
			"width": "",
			"margin-top": "19px",
			"float": "none"
		});
		search = $("#searchbox").detach();
		search.appendTo("#search_block_top");
		search = null;
	}
}
function view_urls(opcja){
	if(opcja == true){
		//ZMIANA WYGLADU NORMALNEGO NA SCROLLOWANY
		//TRZY REGUŁY CSS DLA RÓŻNYCH SZEROKOŚCI
		if($(window).width() > 1184){
			//NAJSZERSZY
			$("#zmegamenu").css("padding-left", "");
			$(".znav-top > li > a").css({
				"padding": "14px 13px",
				"font-size": ""
			});
			$("ul.znav-top > li.m-7").css({
				"display": ""
			});
			if($("ul.znav-top > li.m-1 > a").html() == "Modele " || $("ul.znav-top > li.m-1 > a").html() == "Modele"){
				$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele ", "Modele do sklejania"));
				$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele", "Modele do sklejania"));
			}
			if($("ul.znav-top > li.m-1 > a").html() == "Modele do sklejania do sklejania")
				$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele do sklejania do sklejania", "Modele do sklejania"));
		}else{
			if($(window).width() > 975){
				//ŚREDNI
				$("#zmegamenu").css("padding-left", "");
				$(".znav-top > li > a").css({
					"padding": "13px 1px"
				});
				$("ul.znav-top > li.m-7").css({
					"display": "none"
				});
				if($("ul.znav-top > li.m-1 > a").html() == "Modele " || $("ul.znav-top > li.m-1 > a").html() == "Modele"){
					$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele ", "Modele do sklejania"));
					$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele", "Modele do sklejania"));
				}	
				if($("ul.znav-top > li.m-1 > a").html() == "Modele do sklejania do sklejania")
					$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele do sklejania do sklejania", "Modele do sklejania"));
			}else{
				//NAJMNIEJSZY
				$("#zmegamenu").css("padding-left", "0px");
				$(".znav-top > li > a").css({
					"padding": "13px 0px"
				});
				$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele do sklejania", "Modele"));
			}
		}		
		$(".znav-top").css({
			"margin": "0px"
		});
		search = $(".znav-top").detach();
		search.appendTo("#zmegamenu > div");
		search = null;
	}
	if(opcja == false){
		//ZMIANA WYGLADU Z SCROLLOWANEGO NA NORMALNY
		$(".znav-top > li > a").css({
			"margin": "0 auto",
			"font-size": ""
		});
		$(".znav-top > li > a").css({
			"padding": ""
		});
		$(".znav-top").css({
			"margin": ""
		});
		$("ul.znav-top > li.m-7").css({
				"display": ""
			});
		if(($("ul.znav-top > li.m-1 > a").html() == "Modele " || $("ul.znav-top > li.m-1 > a").html() == "Modele")){
			$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele ", "Modele do sklejania"));
			$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele", "Modele do sklejania"));
		}
		if($("ul.znav-top > li.m-1 > a").html() == "Modele do sklejania do sklejania")
			$("ul.znav-top > li.m-1 > a").html($("ul.znav-top > li.m-1 > a").html().replace("Modele do sklejania do sklejania", "Modele do sklejania"));
		$("#zmegamenu").css("padding-left", "");
		search = $(".znav-top").detach();
		search.appendTo("#zmegamenu > div");
		search = null;
	}
}
function view_image(opcja){
	if(opcja == true){
		//ZMIANA WYGLADU NORMALNEGO NA SCROLLOWANY
		if($("#zmegamenu > div > a > img.logo").length == 1){
			$("img.logo").css({
				"height": "",
				"width": "auto",
				"margin": "0px",
				"float": ""
			});
			search = $(".logo").parent().detach();
			search.appendTo("#header_logo");
			search = null;
		}
	}
	if(opcja == false){
		//ZMIANA WYGLADU Z SCROLLOWANEGO NA NORMALNY
		//NAJSZERSZY
		$("img.logo").css({
			"height": "",
			"width": "auto",
			"margin": "0px",
			"float": ""
		});
		search = $(".logo").parent().detach();
		search.appendTo("#header_logo");
		search = null;
	}
}