
;(function($){


	$(function(){


		var gallerySlider = $('.ba-slider__gallery');
		gallerySlider.slick({
			slidesToShow: 3,
  			slidesToScroll: 1,
  			centerMode: true,
  			focusOnSelect: true,
  			arrows: true,
  			variableWidth: true
		});
		var testimonialsSlider = $('.ba-slider__testimonials');
		testimonialsSlider.slick({
			gorizontal: true,
			dots: true,
			arrows: true,
			infinite: true,
  			autoplay: true,
			autoplaySpeed: 4000
		});
		var partnersSlider = $('.ba-slider__partners');
		partnersSlider.slick({
			gorizontal: true,
			infinite: true,
			slidesToShow: 6,
  			slidesToScroll: 1,
  			arrows: true,
  			autoplay: true,
			autoplaySpeed: 6000,
			variableWidth: true
		});

		$('.ba-tabs-control__link').on('click', function(event){
			event.preventDefault();
			var tabItem = $(this).closest('.ba-tabs-control__item'),
				contentItem = $('.ba-tabs__item'),
				itemPosition = tabItem.index();

			contentItem.eq(itemPosition)
				.add(tabItem)
				.addClass('active')
				.siblings()
				.removeClass('active');


		});

		$(window).bind('scroll',function(e){
			parallaxScroll();
		});
		function parallaxScroll(){
			var scrolled = $(window).scrollTop();
			$('#parallax-granola').css('top',(0-(scrolled*.5))+'px');
		}
	});



})(jQuery);


