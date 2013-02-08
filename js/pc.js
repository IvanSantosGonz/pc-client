function Jornada(Isla,Categoria,Competicion,Jornada) {

$.getJSON("https://pcan-ivansantos.rhcloud.com/calendarios.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&&Jornada=" + Jornada + "&callback=?", function(data) {
  var items = [];
  $.each(data[0], function(key, val) {
    items.push('<li id="' + key + '">' + val + '</li>');
  });
  $('<ul/>', {
    'class': 'my-new-list',
    html: items.join('')
  }).appendTo('#images');
});

}





function Actual(Isla,Categoria,Competicion) {
	
	$.getJSON("https://pcan-ivansantos.rhcloud.com/jornada_actuals.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" +Competicion  + "&callback=?", function(data) {
 	var actual
 	actual = data[0].Jornada;
 	$.getJSON("https://pcan-ivansantos.rhcloud.com/calendarios.json?Isla=" + Isla +"&&Categoria=" + Categoria + "&&Competicion=" + Competicion + "&&Jornada=" + actual + "&callback=?", function(data) {
  		var items = [];
  
		for (var i=0;i<data.length;i++){
  			$.each(data[i], function(key, val) {
    			items.push('<li id="' + key + '">' + val + '</li>');
	 		 });
			 var todos = $('<ul/>', {
  	  			 'class': 'my-new-list',
   	 			 html: items.join('')
 			})
  		}
  		todos.appendTo('#images');
	});

});

}


