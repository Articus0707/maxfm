jQuery(document).ready(function($) {
	$(window).on("scroll",(function(){$(this).scrollTop()>1e3?$(".back2top-btn").show():$(".back2top-btn").hide()}));
	$(window).on("scroll",(function(){$(this).scrollTop()>80?$(".navbar-part").addClass("navbar-fixed"):$(".navbar-part").removeClass("navbar-fixed")}));
	$(".navbar-toggle").on("click",(function(){$(".navbar-overlay").addClass("active")}));
	$("body").on("click",'.cencel, .cencel i',(function(){$(".navbar-overlay").removeClass("active")}));
	$('body').on('click', '.navbar-overlay.active', function(event) {
		if ($(event.target).hasClass('navbar-overlay')) $(".navbar-overlay").removeClass("active");
	});
	$('body').on('click', '.navbar-overlay.active .navbar-dropdown a', function(event) {
		$(this).next().toggle();
		// $(".dropdown-list:visible").length>1&&($(".dropdown-list:visible").hide(),$(this).next().show())
	});
	$(".navbar-dropdown a").click((function(){}))
	$('body').on('click', 'a', function(event) {
		if ($(this).attr('href') == '#' && $(this).parents('.back2top-btn').length == 0) event.preventDefault();
	});

	$('body').on('click', '.load-ajax-link', function(event) {
		event.preventDefault();
		let href = $(this).attr('href');

		$.ajax({
			url: href,
			type: 'GET',
			dataType: 'html',
			data: {load_ajax: 1},
			beforeSend: function() {
				$('html, body').animate({scrollTop: 0}, 500);
			}
		})
		.done(function(html) {
			$('#main-wrapper').html(html);
			history.pushState(null, null, href);

			$('.navbar-overlay.active').trigger('click');

			let title = $('body').find('title').text();
			$('body').find('title').detach();
			$('head').find('title').text(title);

			$(".banner-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!0,autoplay:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]});
			$(".team-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!0,arrows:!0,slidesToShow:4,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!1}}]});
			$(".video-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!0,arrows:!0,slidesToShow:3,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0,arrows:!1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!1}}]});
			$(".blog-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!0,arrows:!0,slidesToShow:3,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,variableWidth:!0,arrows:!1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!1}}]});
			let timer = setInterval(() => {
				if ($('.blog-slider').hasClass('slick-initialized'))	
				{
					$('.blog-slider .blog-card').height($('.blog-slider').find('.slick-track').height());
					$.each($('.blog-slider').find('.blog-card'), function(index, slide) {
						// console.log($().height());
						// console.log($().height());
					});
					clearInterval(timer);
				}
			}, 500);

			$(".testi-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!1,arrows:!0,slidesToShow:3,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:!0,arrows:!1}}]});
			$(".sponsor-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!1,arrows:!0,slidesToShow:5,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}}]});
			$(".theme-slider").slick({dots:!1,infinite:!0,speed:1e3,fade:!1,autoplay:!0,arrows:!0,slidesToShow:2,slidesToScroll:1,nextArrow:'<i class="fas fa-chevron-right dandik"></i>',prevArrow:'<i class="fas fa-chevron-left bamdik"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1}}]});

			if (document.getElementById('my_video_1'))
			{
				videojs.options.flash.swf = "video-js/video-js.swf"
				var player1 = videojs('my_video_1');
				player1.play();
			}

			var wpcf7_form = document.getElementsByClassName('wpcf7-form');
			[].forEach.call(wpcf7_form, function( form ) {
				wpcf7.init( form );
			});
		})
		.fail(function(error) {
			console.log(error);
		});
	});
});