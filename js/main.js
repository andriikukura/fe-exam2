;(function($){

 $(document).ready(function(){
  $('.ba-slider').slick({
   arrows: true,
 autoplay: true,
 speed: 700,
 dots: true
  });

var $gallery = $('.ba-work__gallery').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.ba-work__gallery-item',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.ba-work__gallery-sizer'
  }
});

  $('.ba-work__filter').on('click', 'a', function(evt){
    evt.preventDefault();
    var filterValue = $(this).data('filter');

    $gallery.isotope({filter: filterValue});
    $(this).addClass('active').siblings().removeClass('active');
  });

});

$(window).on('load', function(){

    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.5685, lng: 34.5845},
      zoom: 14,
      disableDefaultUI: true,
      
    });

    var marker = new google.maps.Marker({
      map: map,
      position: {lat: 49.5685, lng: 34.5545},
      icon: 'img/pin.png'
    });


  });

})(jQuery);