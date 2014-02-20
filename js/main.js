

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


    //smooth scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target),
	    marginTop = 50;

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - marginTop
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});

wow = new WOW(
  {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200           // default
  }
);
wow.init();