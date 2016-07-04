$(document).ready(function () {
	function initMap() {
	  // Create a map object and specify the DOM element for display.
	  var map = new google.maps.Map(document.getElementById('contact__map'), {
	    center: {lat: -34.397, lng: 150.644},
	    scrollwheel: false,
	    zoom: 8
	  });
	}
	
	$('.menu__list__link-item').click(function (e) {
		e.preventDefault()
		var hash = this.hash;

		$('.button-collapse').sideNav('hide');

		$('body, html').animate({
			scrollTop : $(hash).offset().top - $('.menu').height()
		}, 500, 'swing')
	})

	$('.button-collapse').sideNav();
})