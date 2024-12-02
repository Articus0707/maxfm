jQuery(document).ready(function($) {
	if (document.getElementById('my_video_1'))
	{
		videojs.options.flash.swf = "video-js/video-js.swf"
		var player1 = videojs('my_video_1');
		player1.play();
	}

	/*var options = {
		// width: 1080,
		// height: 520,
		// poster: "image/video-background.jpg",
		autoplay: true,
		controls: true,
		loop: true,
		preload: 'auto',
		sourceOrder: true,
		sources: [{
			src: 'rtmp://serv30.vintera.tv:1935/sochi/maks_fm',
			type: 'application/x-mpegURL'
		}],
		techOrder: ['html5', 'flash'],
		flash: {
			swf: 'videojs/video-js.swf'
		}
	}
	var player2 = videojs('my_video_2', options);*/
});