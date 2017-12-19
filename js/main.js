;(function($){
	"use strict";

	var slider = $('.ba-slider');
	slider.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		slide: '.ba-slide',
		prevArrow: '.ba-slide__controls--prev',
		nextArrow: '.ba-slide__controls--next'
	});
	
})(jQuery);