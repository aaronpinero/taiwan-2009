$(document).ready(function() {
	/* Apply fancybox to multiple items */
	$(".thumb a, a.enlarge").fancybox({
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	500, 
		'speedOut'		:	500,
		'centerOnScroll':   true,
		'titlePosition' :   'inside',
		'padding'       :   20,
        'margin'        :   20,
		'overlayShow'	:	true,
		'overlayOpacity': 	0.3,
		'overlayColor' 	:	'#000'		
	});	
});
