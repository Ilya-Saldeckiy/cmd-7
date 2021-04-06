$(document).ready(function($) {
	$('.popup-open').click(function() {
		$(".logo").addClass("logo-off");
		$('.popup-fade-1').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(".logo").removeClass("logo-off");
		$(this).parents('.popup-fade-1').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-1').fadeOut(0);
			$(".logo").removeClass("logo-off");
		}
	});
	
	$('.popup-fade-1').click(function(e) {
		if ($(e.target).closest('.popup-1').length == 0) {
			$(this).fadeOut(0);	
			$(".logo").removeClass("logo-off");				
		}
	});

	$('.popup-open-2').click(function() {
		$(".logo").addClass("logo-off");
		$('.popup-fade-2').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(".logo").removeClass("logo-off");
		$(this).parents('.popup-fade-2').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-2').fadeOut(0);
			$(".logo").removeClass("logo-off");
		}
	});
	
	$('.popup-fade-2').click(function(e) {
		if ($(e.target).closest('.popup-2').length == 0) {
			$(".logo").removeClass("logo-off");
			$(this).fadeOut(0);					
		}
	});
});