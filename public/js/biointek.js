$(document).ready(function () {
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