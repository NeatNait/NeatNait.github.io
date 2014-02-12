/**
 * @name		  jQuery Random Word
 * @author		Álvaro Cerdá Pinot
 * @version 	0.1
 * @url			  http://neatnait.com/products/jquery-random-word/
 * @license		MIT License
 * @date      2013-10-30
 */

$.fn.randomWord = function(options) {
  
  var settings = $.extend({
      // These are the defaults.
      //words: ['Hacemos','Creamos','Quieres','Imaginamos','Inventamos']
      words: [this.text()] //if there's no words get the original text
    }, options );
    
  //set the text of the element to one random item from the array
  this.text(settings.words[Math.floor(Math.random() * settings.words.length)]);
  
  return this;
}

