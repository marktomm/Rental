jQuery(document).ready(function(){


jQuery('.click-avto').slick({
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});
jQuery('.fancybox').fancybox({
  maxWidth: 790,
  width: 790,
  padding: 0
});
jQuery('.avto-pop-up, .avto-pop-up2, .pop-up, .pop-up2, .pop-up3, .pop-kia').fancybox({
  padding: 0
});
$('button[href="#rent-car"]').click(function(){
  $('#rent_auto-name').text($(this).data('car'))
})

jQuery('nav.col-xs-8 ul.nav a').click(function(){
  jQuery('.navbar-collapse').removeClass('in');
});

jQuery('.navbar-collapse, article').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function(jQuerycurrentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});



var sync1 = $(".sync1");
var sync2 = $(".sync2");
sync1.owlCarousel({
  responsive: true,
  responsiveRefreshRate : 200,
  responsiveBaseWidth: window,
  singleItem : true,
  slideSpeed : 1000,
  navigation: false,
  pagination:false,
  afterAction : syncPosition

});
sync2.owlCarousel({
  responsive: true,
  responsiveBaseWidth: window,
  items : 3,
  navigationText:	["",""],
  itemsDesktop      : [1199,4],
  itemsDesktopSmall     : [979,4],
  itemsTablet       : [768,3],
  itemsMobile       : [479,2],
  pagination:false,
  navigation: true,
  responsiveRefreshRate : 100,
  afterInit : function(el){
    el.find(".owl-item").eq(0).addClass("synced");
  }
});



  function syncPosition(el){
    var current = this.currentItem;
    $(".sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    if($(".sync2").data("owlCarousel") !== undefined){
      center(current)
    }
  }

  $(".sync2").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });

  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }

    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }

  }


/*
$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 75,
	  maxItems: 4,
    itemMargin: 10,
    asNavFor: '#slider'
  });

  $('#slider').flexslider({
    animation: "slide",
	directionNav: false,
	keyboardNav: false,
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});
*/

});

$(function (){
    if($('#chose_file').length){
        $('#chose_file').click(function(){
            $('#chose_file_input').click();
            return(false);
        });

        $('#chose_file_input').change(function(){
            $('#chose_file_text').html($(this).val());
        }).change(); // .change() в конце для того чтобы событие сработало при обновлении страницы
    }

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $( ".datepicker" ).datepicker({
        inline: true
    });
});

/*----------------------------------------------------*/
/*	GOOGLE map
/*----------------------------------------------------*/
var options, image, map, marker;
function initialize() {
  options = {
    center: new google.maps.LatLng(59.436687,24.750925),
    zoom: 17,
    scrollwheel: false,
    disableDefaultUI: true
  };
  map = new google.maps.Map(document.getElementById('gmap'), options);
  // image = {
  //   url: '/images/gpoint.png',
  //   size: new google.maps.Size(70, 91),
  //   origin: new google.maps.Point(0, 0),
  //   anchor: new google.maps.Point(35, 91)
  // };
  marker = new google.maps.Marker({
      position: options.center,
      map: map
      //icon: image,
  });

    // latlng is the apparent centre-point
    // offsetx is the distance you want that point to move to the right, in pixels
    // offsety is the distance you want that point to move upwards, in pixels
    // offset can be negative
    // offsetx and offsety are both optional

  setTimeout(() => {
    var scale = Math.pow(2, map.getZoom());
    var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(new google.maps.LatLng(59.436687,24.750925));
    var pixelOffset = new google.maps.Point((-200/scale) || 0,(1/scale) ||0);
    var worldCoordinateNewCenter = new google.maps.Point(
        worldCoordinateCenter.x - pixelOffset.x,
        worldCoordinateCenter.y + pixelOffset.y
    );
    var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);
    map.setCenter(newCenter);
  }, 1000);

};
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'resize', initialize);

