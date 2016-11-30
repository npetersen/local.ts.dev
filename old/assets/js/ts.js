
//THIS IS VERSION 3 of AURA.

$(document).ready(function() {
	    

		//Mobile Nav - Manual Collapse with Easing
		$('.btn-navbar').click(function(e){
			$('.main-link a').addClass('aura-collapse-triggered');
			$('.nav-collapse').slideDown('slow','swing');

			$('.aura-collapse-triggered').click(function(e){
			$('.nav-collapse').slideUp('slow','swing');
		});
		});

		


});

$(document).ready(function() {
	    
		
		$('#main-nav li a').click(function(e) {
            $('#main-nav li').removeClass('active');
            $(this).parent('li').addClass('active');
        });
		

});

$(document).ready(function() {
	    $(".scrollme").scrollerBird({
		speed : 1500,
		easing: 'easeInOutExpo',
	});

});


$(document).ready(function(e) {
		
		//$('#left-panel'). stop().animate({top:'-12000px'});
		$('#left-panel'). stop().animate({top:'-10000px'});
		$('.promo-home').stop().animate({marginTop:'-30px'});
		
		
		
		$('#about').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					//$('#left-panel'). stop().animate({top:'-10000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-8000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-about').addClass('active');
				 }
				 else {
					//$('#left-panel'). stop().animate({top:'-12000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-10000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-home').addClass('active');
					$('.promo-home').stop().animate({marginTop:'-30px'});
				 }
		}, {
   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
});
		
		
		$('#charity').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					//$('#left-panel'). stop().animate({top:'-8000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-6000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-charity').addClass('active');
				 }
				 else {
					//$('#left-panel'). stop().animate({top:'-10000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-8000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-about').addClass('active');
				 }
		}, {
   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
});
		
		
		$('#clubs').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					//$('#left-panel'). stop().animate({top:'-6000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-4000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-clubs').addClass('active');
				 }
				 else {
					//$('#left-panel'). stop().animate({top:'-8000px'},1000,'swing');
					$('#left-panel'). stop().animate({top:'-6000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-charity').addClass('active');
				 }
		}, {
   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
});

		$('#events').waypoint(function(event, direction) {
						if (direction === 'down') {
							//$('#left-panel'). stop().animate({top:'-4000px'},1000,'swing');
							$('#left-panel'). stop().animate({top:'-2000px'},1000,'swing');
							$('#main-nav li').removeClass('active')
							$('#nav-events').addClass('active');
						 }
						 else {
							//$('#left-panel'). stop().animate({top:'-6000px'},1000,'swing');
							$('#left-panel'). stop().animate({top:'-4000px'},1000,'swing');
							$('#main-nav li').removeClass('active')
							$('#nav-clubs').addClass('active');
						 }
				}, {
		   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
		});
		

		/*$('#blog').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'-2000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-blog').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-4000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-events').addClass('active');
				 }
		}, {
   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
});*/


		$('#contact').waypoint(function(event, direction) {
		   		if (direction === 'down') {
					$('#left-panel'). stop().animate({top:'0px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					$('#nav-contact').addClass('active');
				 }
				 else {
					$('#left-panel'). stop().animate({top:'-2000px'},1000,'swing');
					$('#main-nav li').removeClass('active')
					//$('#nav-blog').addClass('active');
					$('#nav-events').addClass('active');
				 }
		}, {
   offset: '20%', scrollThrottle: 2000, resizeThrottle: 500 
});
		
		
});