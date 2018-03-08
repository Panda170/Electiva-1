// JavaScript Document
//$('img[src="./Universidad Pedagógica y Tecnológica de Colombia_files/banner_movi_4147.jpg"]').attr('src', '../media/ima/hndsz.jpg');
$('img[src="./Universidad Pedagógica y Tecnológica de Colombia_files/banner_movi_4147.jpg"]').attr('id', 'a123');
$('img[id="a123"]').attr('src', '../media/ima/hndsz.jpg');
$('img[id="a123"]').attr('width', '930');
$('img[id="a123"]').attr('height', '330');
$("body").css('background-color', 'black');
$("body").css('font-family', 'Lucida Calligraphy');
$("body").css('color', 'white');
$("a").css('color', '#00FF05');
$("a").css('background-color', 'black');
$("a").css('background-color', 'black');




for (var i = 0; i < $("h5").length; i++) { 
	if($($("h5")[i]).text() == "Estudiantes de Biología seleccionados por el Real Jardín Botánico de Kew "){
		console.log($($("h5")[i]).text());
		$($("h5")[i]).html("Cambio de texto por una nueva noticia")
	}
    
}

$("ul.nav li")[8].hide();
