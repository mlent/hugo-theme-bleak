/**
* @license lyradesigns.com v1
* Updated: Dec 17, 2014
* Add pin buttons to images
* Copyright (c) 2014 Jonas Goslow - LYRA
* Released under the MIT license
* https://github.com/timmywil/jquery.panzoom/blob/master/MIT-License.txt
*/
(function( $ ){
  $.fn.imgPin = function( options ) {


    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var defaults = {
      pinImg : 'https://assets.pinterest.com/images/pidgets/pin_it_button.png',
      position: 1, // Display default header
    };
    var options = $.extend( {}, defaults, options );

    var url = encodeURIComponent(document.URL),
        pinImg = options.pinImg,
        position = '';

    switch (options.position) {
      case 1:
        position = 'top left'; break;
      case 2:
        position = 'top right'; break;
      case 3:
        position = 'bottom right'; break;
      case 4:
        position = 'bottom left'; break;
      case 5:
        position = 'center'; break;
    }

    this.each(function(){ // add Pin buttons to all images
      var port = window.location.port;
      var src = 'http://' + window.location.hostname + (port ? ':' + port : '') +
        ($(this).attr('src') || $(this).attr('data-lazy'));
      var shareURL = url;

      // Get Title and img to pin - encode them
      var title = $(this).attr('title');
      var description = encodeURIComponent(title);

      var imgURL = encodeURIComponent(src);

      // Generate link
      var link = 'https://www.pinterest.com/pin/create/button/';
          link += '?url='+shareURL;
          link += '&media='+imgURL;
          link += '&description='+description;

      //add wrappers
      $(this).wrap('<div class="imgPinWrap">').after('<a href="'+link+'" class="pin '+position+'"><img src="'+pinImg+'" alt="Pin this!"></a>');

      //set click events
      $('.imgPinWrap .pin').click(function(){
        var w = 700,
          h = 400;
        var left = (screen.width/2)-(w/2);
        var top = (screen.height/2)-(h/2);
        var imgPinWindow = window.open(this.href,'imgPngWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=700, height=400');
        imgPinWindow.moveTo(left, top);
        return false;
      });

    });


  }


})( jQuery );
