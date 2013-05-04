function completo(Isla,Categoria,Competicion) {
	$(".jornada").empty();
	data = []
	$.getJSON("https://pcan-ivansantos.rhcloud.com/jornada_actuals.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" +Competicion  + "&callback=?", function(data) {
 	var actual = 0
 	actual = data[0].Jornada;
	
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendariocompleto.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&callback=?", function(data) {
		var jorn = 0;
		var items = [];
		for (var i=0;i<data.length;i++){
			 var todos = $('.jornada');
			    if (jorn != data[i].Jornada){
					if (actual > jorn){
						$(".jornada h2").css("color","#900");
					}
				 todos.append("<h2>" + "Jornada "+ data[i].Jornada + "</h2>")
				 jorn = jorn +1;
			 }
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			 
  		}
	});

});

}



function completo2(Isla,Categoria,Competicion) {
	$(".jornada").empty();
	data = []

	
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendariocompleto.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&callback=?", function(data) {
		var jorn = 0;
		var items = [];
		var todos = $('.jornada');
		todos.append("<h2>" + "Ida de Semifinales" + "</h2>")
		for (var i=0;i<2;i++){ 
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			} 
			
	    todos.append("<h2>" + "Vuelta de Semifinales" + "</h2>")
		for (var i=2;i<4;i++){ 
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			} 
			
			todos.append("<h2>" + "Final" + "</h2>")
		for (var i=4;i<5;i++){ 
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			} 

});

}



function Actual(Isla,Categoria,Competicion) {
	$(".jornada").empty();
	
	$.getJSON("https://pcan-ivansantos.rhcloud.com/jornada_actuals.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" +Competicion  + "&callback=?", function(data) {
 	var actual
 	actual = data[0].Jornada;
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendarios.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&&Jornada=" + actual + "&callback=?", function(data) {
  		var items = [];
		var todos = $('.jornada');
		if (actual == 'fin'){
			todos.append("<h2>" + "Competición Finalizada" + "</h2>");
		}
		else{
			todos.append("<h2>" + "Jornada "+ actual + "</h2>");
			for (var i=0;i<data.length;i++){	
			 todos.append("<tr><td>"+  data[i].Lucha  +  "</td><td>"  + data[i].Fecha + "</td><td>" + data[i].Hora  + "</td><td>" + data[i].Resultado + "</td></tr>")
			}
  		}
	});

});

}





function Clasificacion(Isla,Categoria,Competicion) {
	
	$(".clasificacion").empty();
	var todos = $('.clasificacion');
	todos.append("<tr class = 'clasi'><td>" + "Equipo" + "</td><td>" + "Luchas"  +  "</td><td>"  + "Victorias" + "</td><td>" + "Empates"  + "</td><td>" + "Derrotas" + "</td><td>" + "LFavor" + "</td><td>" + "LContra" + "</td><td>" + "Puntos" +"</td></tr>")
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/clasificacions.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&callback=?", function(data) {
  		var items = [];
		
		for (var i=0;i<data.length;i++){
			todos.append("<tr><td>" + data[i].Equipo + "</td><td>" + data[i].Luchas  +  "</td><td>"  + data[i].Victorias + "</td><td>" + data[i].Empates  + "</td><td>" + data[i].Derrotas + "</td><td>" + data[i].LFavor + "</td><td>" + data[i].LContra + "</td><td>" + data[i].Puntos +"</td></tr>")
			 
  		}
	});

}



function limpiar() {
	$(".clasificacion").empty();
	$(".jornada").empty();
}





function vid(id) {
	
		var auxwidth = $(id).css("width");
		auxwidth = auxwidth.replace('px','')
		var auxheight = auxwidth*0.48
		auxheight = auxheight + 'px'
		$("#youtube-channel").css("height",auxheight);
}