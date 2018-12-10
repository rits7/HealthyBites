/*$(document).ready(function() {
    $('h1').click(function() {
        $(this).css('background-color', 'red');
    })
})*/

$(document).ready(function() {
    
    /*------for sticky navigation------*/
    
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
      }, {
          offset: '70px;'
     });   
   
    /*------scroll on buttons----*/
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });
     
});

/* ------Navigation Scroll------*/

$('a[href*="#"]')
  
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/*------------Animation on Scroll-----------*/
   
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

/*------Mobile Nav--------*/

 $(".js--nav-icon").click(function() {
     var nav = $(".js--main-nav");
     var icon = $(".js--nav-icon ion-icon");
     
     nav.slideToggle(200);
     
     if (icon.hasClass("mobile-nav-icon")) {
         icon.addClass("mobile-nav-icon-close").attr("name", "close");
         icon.removeClass("mobile-nav-icon");
         
     } else {
        icon.addClass("mobile-nav-icon").attr("name", "menu");
        icon.removeClass("mobile-nav-icon-close");
     }
 });

/*----------- Maps---------------*/
    
   var element = document.querySelector('.map');
   if (typeof(element) != 'undefined' && element != null) {
     var map = new GMaps({
          div: '.map',
          lat: 38.7436883,
          lng: -9.1,
         zoom: 12
     });
     map.addMarker({
      lat: 38.7436883,
      lng: -9.1602037,
      title: 'Lisbon',
      infoWindow: {
          content: '<p>Our Lisbon HQ<p>'
          }
     });
   }