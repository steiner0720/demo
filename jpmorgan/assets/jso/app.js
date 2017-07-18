$(function() {
	var navTrigger = $('.cd-nav-trigger'),
		verticalNavigation = $('.cd-vertical-nav'),
		scrollArrow = $('.cd-scroll-down');
		//distance = $('.phraA').offset().top ,
		//distanceB= $('#ankor').offset().top,
		//distanceC= $('#ankorA').offset().top,
	    $window = $(window),
	    checkNums = 0;
	    //var docViewBottom = $(window).scrollTop() + $(window).height();
	    
	    
	    
	
	
	$.scrollify({
		section: ".panel",
		scrollbars: true,
		before: function(i, panels) {
			var ref = panels[i].attr("data-section-name");
			$(".pagination a.active").removeClass("active");
			$(".pagination a[href=#" + ref + "]").addClass("active");
			
			//console.log( $(".pagination a.active").length )	
		},
		afterResize: initialPosition,
		afterRender: initialPosition
	});
	
	
	$(".pagination a").on("click", function() {
		/*if ( $('.phraB').hasClass('active')  ) {
		    $('.phraB').removeClass('active')
		}*/
		$.scrollify.move($(this).attr("href"));
		verticalNavigation.removeClass('open');
		navTrigger.removeClass('cd-image-replace')
		


		
		//$('.secB').css('position','relative');
	});
	
	
	navTrigger.on('click', function(event) {
		event.preventDefault();
		verticalNavigation.toggleClass('open');
		navTrigger.toggleClass('cd-image-replace');
		
		
		
	});

	function initialPosition() {
		var current = $.scrollify.current();
	} /**/
	
	
	scrollArrow.on('click', function(event) {
		event.preventDefault();
		smoothScroll($(this.hash));
	});
	
	function smoothScroll(target) {
		$('body,html').animate({
			'scrollTop': target.offset().top
		}, 300);
	}
	

	
	$window.scroll(function(e) {
		
		//detectDiv();

				   
	})
	
	
	function detectDiv(){

			
		
	
	}
	

		
	
	
});

