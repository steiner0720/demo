jQuery(document).ready(function(){

	$(window).on('load', function(){
		$('.loading-page-bg').stop(true,false).animate({height: '0vh'} ,1000, 'easeInQuad')
	})


	// for loop works-box bg img //
	$(function(){
		var $works_imgbox = $('.works-imgbox')
		// graphic length //
		for (i = 1; i <=  $works_imgbox.length; i++){
			$('.graphic').find($works_imgbox).eq(i - 1).css('background', 'url("imgs/works_review/review (' + i  + ').png") no-repeat')
		}
		// photography length //
		for (i = 10; i <=  18; i++){
			$('.photography').find($works_imgbox).eq(i - 10).css('background', 'url("imgs/works_review/review (' + i  + ').png") no-repeat')
		}

		// web visual length //
		for (i = 19; i <=  23; i++){
			$('.webvisual').find($works_imgbox).eq(i - 19).css('background', 'url("imgs/works_review/review (' + i  + ').png") no-repeat')
		}
		// motionfilm visual length //
		for (i = 24; i <=  27; i++){
			$('.motionfilm').find($works_imgbox).eq(i - 24).css('background', 'url("imgs/works_review/review (' + i  + ').png") no-repeat')
		}
		$('.works-imgbox').css('backgroundSize', 'cover')
		$('.works-imgbox').css('backgroundPosition', 'center')
	})








	// fullpage//
	$(function(){
		$('#fullpage').fullpage({
			css3: true,
			anchors: ['welcome', 'brief', 'awards', 'feature', 'works_graphic', 'works_photography', 'works_webvisual', 'works_motionfilm'],
        	autoScrolling: true,
        	scrollingSpeed: 1000,
       		fitToSection: true,
        	fitToSectionDelay: 1000,
        	scrollBar: false,



        	// page call back effect //
        	onLeave: function(index, nextIndex, direction){
				if(index == 1 && direction =='down'){
					// page 2 effect //
					$('.head-shot img').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).delay(600).animate({opacity: 1}, 1000)
					$('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).delay(900).animate({opacity: 1}, 1000)
					$('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).delay(1200).animate({opacity: 1}, 1000)
				}

				if(index == 2 && direction =='up'){
					// page 2 effect //
					$('.head-shot img').stop(true,false).animate({opacity: 0}, 500)
					$('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
					$('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).animate({opacity: 0}, 1000)
					$('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).animate({opacity: 0}, 1000)

				}
				else if(index == 2 && direction =='down'){
					// page 2 effect //
					$('.head-shot img').stop(true,false).animate({opacity: 0}, 500)
					$('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
					$('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).animate({opacity: 0}, 1000)
					$('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).animate({opacity: 0}, 1000)
					// page 3 effect //
					$('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0)').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-name:eq(2), .award-name:eq(3), .award-name:eq(4)').stop(true,false).delay(700).animate({opacity: 1}, 1000)
					$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(5)').stop(true,false).delay(1100).animate({opacity: 1}, 1000)
				}

				if(index == 3 && direction =='up'){
					// page 2 effect //
					$('.head-shot img').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).delay(600).animate({opacity: 1}, 1000)
					$('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).delay(900).animate({opacity: 1}, 1000)
					$('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).delay(1200).animate({opacity: 1}, 1000)
					// page 3 effect //
					$('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
					$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-name:eq(2), .award-name:eq(3), .award-name:eq(4)').stop(true,false).animate({opacity: 0}, 1000)
					$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(5)').stop(true,false).animate({opacity: 0}, 1000)

				}
				else if(index == 3 && direction =='down'){
					// page 3 effect //
					$('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
					$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-name:eq(2), .award-name:eq(3), .award-name:eq(4)').stop(true,false).animate({opacity: 0}, 1000)
					$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(5)').stop(true,false).animate({opacity: 0}, 1000)
					// page 4 effect //
					$('.main-works').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.sub-works').stop(true,false).delay(700).animate({opacity: 1}, 1000)
				}

				if(index == 4 && direction =='up'){
					// page 3 effect //
					$('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0)').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-name:eq(2), .award-name:eq(3), .award-name:eq(4)').stop(true,false).delay(700).animate({opacity: 1}, 1000)
					$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(5)').stop(true,false).delay(1100).animate({opacity: 1}, 1000)
					// page 4 effect //
					$('.main-works').stop(true,false).animate({opacity: 0}, 1000)
					$('.sub-works').stop(true,false).animate({opacity: 0}, 1000)
				}
				else if(index == 4 && direction =='down'){
					// page 4 effect //
					$('.main-works').stop(true,false).animate({opacity: 0}, 1000)
					$('.sub-works').stop(true,false).animate({opacity: 0}, 1000)
				}

				if(index == 5 && direction =='up'){
					// page 4 effect //
					$('.main-works').stop(true,false).delay(300).animate({opacity: 1}, 1000)
					$('.sub-works').stop(true,false).delay(700).animate({opacity: 1}, 1000)
				}
				else if(index == 5 && direction =='down'){
				}

				if(index == 6 && direction =='up'){

				}
				else if(index == 6 && direction =='down'){
				}

				if(index == 7 && direction =='up'){

				}


			}



		})


	})




	//nav open effect //
	$(function(){
		$('.btn-menu-open').click(function(){
			$('.nav-menu').stop(true,false).animate({height: '100vh'}, 500, 'easeOutQuad')
			$('.contact-info').stop(true,false).delay(400).animate({opacity: 1}, 600, 'easeOutQuad')
			$('.menu-list').stop(true,false).delay(600).animate({opacity: 1}, 1000, 'easeOutQuad')
		})

		$('.close-menu, .menu-list div').click(function(){
			$('.menu-list').stop(true,false).animate({opacity: 0}, 200, 'easeInQuad')
			$('.contact-info').stop(true,false).delay(400).animate({opacity: 0}, 200, 'easeOutQuad')
			$('.nav-menu').stop(true,false).delay(600).animate({height: '0vh'}, 500, 'easeOutQuad')
		})

	})





	// fancy box //

	$(function(){
	    $(".single_2").fancybox({
	    	openEffect	: 'elastic',
	    	closeEffect	: 'elastic',
	    	width : '100%',
	    	height : '100%',
	    	autoSize : false,
	    	fitToView: true,
	    	scrolling : 'no',
	    	padding : 0,
	    	// when fancy open, body can't scroll-Y //
		    beforeShow: function(){
		        $("body").css({'overflow-y':'hidden'})
		    },
		    afterClose: function(){
		        $("body").css({'overflow-y':'visible'})
		    },
	    	helpers : {
	    		title : {
	    			type : 'inside'
	    		}
	    	}

	    });

	});

	//fancy box mobile //







	// flickity_works slider box // 

	$(function(){

		// external js: flickity.pkgd.js
		$('.carousel').each( function( i, carousel ) {
			var $carousel = $( carousel );
			var flkty = new Flickity( carousel, {
			  imagesLoaded: true,
			  percentPosition: false,
			});

			var imgs = carousel.querySelectorAll('.carousel-cell img');
			// get transform property
			var docStyle = document.documentElement.style;
			var transformProp = typeof docStyle.transform == 'string' ?
			  'transform' : 'WebkitTransform';

			flkty.on( 'scroll', function() {
			  flkty.slides.forEach( function( slide, i ) {
			    var img = imgs[i];
			    var x = ( slide.target + flkty.x ) * -1/3;
			    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
			  });
			});
		});


		// external js: flickity.pkgd.js

		// get transform property
		// var docStyle = document.documentElement.style;
		// var transformProp = typeof docStyle.transform == 'string' ?
		//   'transform' : 'WebkitTransform';

		// $('.carousel').each( function( i, carousel ) {
		//   var $carousel = $( carousel );
		//   $carousel.flickity({
		//     imagesLoaded: true,
		//     percentPosition: false,
		//   });

		//   var $imgs = $carousel.find('.carousel-cell img');
		//   // get Flickity instance
		//   var flkty = $carousel.data('flickity');

		//    $carousel.on( 'scroll.flickity', function() {
		//     flkty.slides.forEach( function( slide, i ) {
		//       var img = $imgs[i];
		//       var x = ( slide.target + flkty.x ) * -1/3;
		//       img.style[ transformProp ] = 'translateX(' + x  + 'px)';
		//     });
		//   });
		  
		// });




	});



	$(function(){

		particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":300}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":159.84015984015983,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

	})
















	// TweenMax mouseover_parallax // 

	$(function(){


		// rotate3d effect //

		$(function(){
			var request = null;
			var mouse = {
			 	x: 0,
				y: 0
				};
			var cx = window.innerWidth / 2;
			var cy = window.innerHeight / 2;

			$('body').mousemove(function(event) {

				mouse.x = event.pageX;
			 	mouse.y = event.pageY;

				cancelAnimationFrame(request);
				request = requestAnimationFrame(title3d);
			});

			function title3d() {

				dx = mouse.x - cx;
				dy = mouse.y - cy;

				tiltx = (dy / cy);
				tilty = -(dx / cx);
				radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
				degree = (radius * 50);
				TweenLite.to(".title-welcome, .icon_img", 2, {
					transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
					ease: Power2.easeOut
				});
			}

			$(window).resize(function() {
				cx = window.innerWidth / 2;
				cy = window.innerHeight / 2;
			});
		})

		// scale effect //

		$(function(){
			var $box = $(".section:eq(0)"),
			    rotation = 0,
			    rotationX = 0, 
			    rotationY = 0,
			    wanderTween, ignoreRollovers;

			TweenMax.to($box, 5, {scaleX:1.05, scaleY:1.05, force3D:true, yoyo:true, repeat:-1, ease:Power1.easeInOut});

		})

	})




	//window resize//
	var window_height = $(window).height()
	var window_width = $(window).width()


	// catch window width for some element //

	$(function(){
		function center(){
			$('.section').css({height: window_height})
			var tww_brief = $('.title-welcome').width()
			var twh_brief = $('.title-welcome').height()
			$('.title-welcome').css({'margin-top': window_height / 2 - twh_brief / 2, left: window_width / 2 - tww_brief / 2})
			var scroll_down_h = $('.scroll-down').height()
			var scroll_down_w = $('.scroll-down').width()
			$('.scroll-down').eq(0).css({top: 1 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(1).css({top: 2 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(2).css({top: 3 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(3).css({top: 4 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(4).css({top: 5 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(5).css({top: 6 * window_height - scroll_down_h / 2})
			$('.scroll-down').eq(6).css({top: 7 * window_height - scroll_down_h / 2})
		}
			center()
		$(window).resize(function(){
			center()
		});

		$(function(){
			$('html, body').stop(true,false).animate({opacity: 0}, 0).delay(3000)
			$('html, body').stop(true,false).animate({opacity: 1}, 1000)
		});

		// window width change reload //

		$(function(){
			if( $(window).width() > 1000 ){
				$(window).resize(function(){
					location.reload()
				})
			}else if( $(window).width() < 1000 ){

			}
		})

	})





// all end //

})








