//Home Main Carousel
$('#hero-slider .owl-carousel').owlCarousel({
    items:1,
    lazyLoad:true,
    loop:true,
		autoplay:false,
    margin: 0,
    nav: false,
    dots: true,
    responsiveRefreshRate: 10,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    responsiveRefreshRate: 10
});

//Navigation script
(function($) { "use strict";
	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});			
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});
  })(jQuery);

  $(document).on('click',function(){ 
    $('.navbar .collapse').collapse('hide');})


jQuery(function($) {
	$('.navbar ul li a, .f-info li a, .footer-wrapper01 a.f-logo, .navigation-wrap a.navbar-brand').click(function() {
		var target = $(this.hash);
		  $('html,body').stop().animate({
			scrollTop: target.offset().top - 85
		  }, 800);   
	});    
	  if (location.hash){
	  var id = $(location.hash);
	  }
	  $(window).on('load', function() {
	  if (location.hash){
		  $('html,body').animate({scrollTop: id.offset().top -85}, 800)
	  };
	  });
  });

//Scrollspy 
$(document).ready(function() {
  $('body').scrollspy({ target: '#navbarSupportedContent'}) 
});


//Lenis smooth scroll website
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf);

//Home Products Slider
$('.home-products-slider .owl-carousel').owlCarousel({
	items:3,
	lazyLoad:true,
	loop:true,
	autoplay:false,
	margin: 40,
	nav: false,
	dots: false,
	responsiveRefreshRate: 10,
	autoplayTimeout: 7000,
	smartSpeed: 800,
	responsiveRefreshRate: 10,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
		1280:{
			items:2
		},
		1281:{
			items:3
		}
	}
});


  //Product Paragraph Text Truncate Js
	let strlength = 100;
	var elements = document.querySelectorAll('.truncate-text');
	for(let i = 0; i < elements.length; i++){
			let str = elements[i].innerHTML;
			if (str.length > strlength) {
					str = str.substring(0, strlength),
					str.replace(/\w+$/, '');
					str +='..';
					elements[i].innerHTML = str;
				}
	}

	//Home Slick carousel
var $slide = $(".slide")
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".preve-slide", this).removeClass("preve-slide　slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");

//Lightgallery script
$(document).ready(function() {
	$("#lightgallery").lightGallery(); 
});



