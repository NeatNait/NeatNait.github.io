

$(function(){
    
    $(".random-word").randomWord({words: ['Hacemos','Creamos','Quiéres','Imaginamos','Inventamos']});
    
    $(".rotate").textrotator({
      animation: "flip"
    });

  var h = $(".jumbotron").outerHeight(),
      pp = $('#push').pointPoint({maxY:h});

  //attach to scroll or something like this so its no so obstrusive
	// To destroy it, call the destroy method:
	// pp.destroyPointPoint(); 

});