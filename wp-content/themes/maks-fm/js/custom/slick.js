function sliders_init()
{
jQuery(document).ready(function($) {
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
});
}
sliders_init();