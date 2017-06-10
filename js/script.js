$(document).ready(function(){
	$('.header_menu-btn').click(function(){
		if($(this).hasClass('open')) {
			$('.header_menu').slideUp();
			$(this).removeClass('open');
		}
		else {
			$('.header_menu').slideDown();
			$(this).addClass('open');
		}
	});
});

$(window).resize(function(){
	
});