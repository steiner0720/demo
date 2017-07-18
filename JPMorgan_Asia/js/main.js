$(function(){

	$(function() {
		$('#datepicker').datepicker({
			dayNamesMin:["日","一","二","三","四","五","六"],
			monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
			monthNamesShort:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
			prevText:"上月",
			nextText:"次月",
			showMonthAfterYear:true,
 			dateFormat : 'yy/mm/dd',
			changeYear: false,
			changeMonth: false,
			defaultDate : '2017/04/05',
			maxDate: '2017/06/30',
			minDate: '2017/04/05',
			beforeShow: function() {
				setTimeout(function(){
					$('.ui-datepicker').css('z-index', 12)
				}, 0)
			}
		})
	})

	$(function(){
		var dateTag = $('#datepicker')
		var string_A = '5/1-5/31',
			string_B = '6/1-6/30',
			string_C = '7/1-7/30',
			string_D = '8/1-8/31'

		$('#submit_date').click(function(){
			// value 1
			if(dateTag.val().slice(6, 7) == 4 && dateTag.val().slice(8,10) < 21){
				$('.result-replace').html(string_A)
			}
			// value 2
			else if(dateTag.val().slice(6, 7) == 4 && dateTag.val().slice(8,10) > 20){
				$('.result-replace').html(string_B)
			}
			// value 2
			if(dateTag.val().slice(6, 7) == 5 && dateTag.val().slice(8,10) < 20){
				$('.result-replace').html(string_B)
			}
			// value 3
			else if(dateTag.val().slice(6, 7) == 5 && dateTag.val().slice(8,10) > 19){
				$('.result-replace').html(string_C)
			}
			// value 3
			if(dateTag.val().slice(6, 7) == 6 && dateTag.val().slice(8,10) < 21){
				$('.result-replace').html(string_C)
			}
			// value 4
			else if(dateTag.val().slice(6, 7) == 6 && dateTag.val().slice(8,10) > 20){
				$('.result-replace').html(string_D)
			}
			$('.result-container').css('display', 'block')
		})
	})

	$(function(){
		$('.result-close img').click(function(){
			$('.result-container').css('display', 'none')
			$('.result-replace').html('')
		})
	})

	if($(window).width() > 767){
		$(function(){
			$('html, body').on('mousewheel', function(event) {
				if(event.deltaY < 0){
					$('.nav').stop(true,false).animate({top: 40},500)
					$('.rightside-ads').stop(true,false).animate({top: 100},500)
				}else{
					$('.nav').stop(true,false).animate({top: 110, opacity: 1},500)
					$('.rightside-ads').stop(true,false).animate({top: 157},500)
				}
			})
		})
	}

	$(function(){
		$('.rightside-ads').click(function(){
			$('.rightside-ads').stop(true,false).animate({right: '-400px'})
			$('.ads').stop(true,false).delay(300).animate({height: '100vh'})
			$('.ads-container').stop(true,false).delay(600).animate({opacity: 1})
		})
		$('.close-ads').click(function(){
			$('.ads-container').delay(300).stop(true,false).animate({opacity: 0})
			$('.ads').stop(true,false).delay(600).animate({height: '0px'})
			$('.rightside-ads').stop(true,false).animate({right: '0px'})
		})

	})


	$(function(){
		// open effect //
		$('.month-option, .read-btn').click(function(){
			$('.rightside-ads').stop(true,false).animate({right: '-400px'})
		})
		// ad-list-1-1 open //
		$('.month-option:eq(1) div:eq(1)').click(function(){
			$('.pop-list:eq(0)').stop(true,false).animate({'z-index': 9, opacity: 1},10)
		})
		// ad-list-1-2 open //
		$('.month-option:eq(1) div:eq(0)').click(function(){
			$('.pop-list:eq(1)').stop(true,false).animate({'z-index': 9, opacity: 1},10)
		})

		// ad-list-2-1 open //
		$('.month-option:eq(0) div:eq(1)').click(function(){
			$('.pop-list:eq(2)').stop(true,false).animate({'z-index': 9, opacity: 1},10)
		})
		// ad-list-2-2 open //
		$('.month-option:eq(0) div:eq(0)').click(function(){
			$('.pop-list:eq(3)').stop(true,false).animate({'z-index': 9, opacity: 1},10)
		})

		// ad-list-3-1 open //
		$('.read-btn').click(function(){
			$('.pop-list:eq(4)').stop(true,false).animate({'z-index': 9, opacity: 1},10)
		})

		// close effect //
		$('.close-list img').click(function(){
			$('.pop-list').stop(true,false).animate({'z-index': -1, opacity: 0})
			$('.rightside-ads').stop(true,false).animate({right: '0px'})
		})

	})


	// mobile menu function  //
	$(function(){
		$('.menu-btn:eq(1) img').click(function(){
			$('.nav-mobile').stop(true,false).animate({height: '100vh'})
			$('.menu-btn:eq(1)').stop(true,false).animate({opacity: 0, 'z-index': -1})
			$('.menu-btn:eq(0)').stop(true,false).animate({opacity: 1, 'z-index': 9})
		})
		$('.menu-btn:eq(0)').click(function(){
			$('.nav-mobile').stop(true,false).animate({height: 0})
			$('.menu-btn:eq(0)').stop(true,false).animate({opacity: 0, 'z-index': -1})
			$('.menu-btn:eq(1)').stop(true,false).animate({opacity: 1, 'z-index': 9})
		})
	})


	$(function(){
		var sectitle = $(".section-title")
		var num_li = $(".nav li").length
			for( i = 0 ;i < num_li - 1; i++ ){
				$(".nav li:eq(" + i + "), .nav-mobile li:eq(" + i + ")").click({id:i},function(e){
						section_title=e.data.id
						$("html,body").stop(true,false).animate({"scrollTop": sectitle.eq(section_title).offset().top - 150}, 700)
						$('.nav-mobile').stop(true,false).animate({height: 0})
						$('.menu-btn:eq(0)').stop(true,false).animate({opacity: 0, 'z-index': -1})
						$('.menu-btn:eq(1)').stop(true,false).animate({opacity: 1, 'z-index': 9})
				})
			}
		$('.subtitle').click(function(){
			$("html,body").stop(true,false).animate({"scrollTop": $('.intro').offset().top -250}, 700)
		})

	})



	$(function(){
		// close click //
		$('.cbt-pop-close:eq(0)').click(function(){
			$('.cbt-pop-earth').removeClass('cbt-pop-earth-add')
			$('.cbt-pop-wrap').removeClass('cbt-pop-wrap-add')
			$('.cbt-pop-bg:eq(0)').stop(true,false).animate({height: 0},150).animate({opacity: 0},100)
			setTimeout(function(){
				$('.cbt-pop-bg:eq(0)').removeClass('cbt-pop-bg-add');
			},800);
		})
		$('.cbt-pop-close:eq(1)').click(function(){
			$('.cbt-pop-earth').removeClass('cbt-pop-earth-add')
			$('.cbt-pop-wrap').removeClass('cbt-pop-wrap-add')
			$('.cbt-pop-bg:eq(1)').stop(true,false).animate({height: 0},150).animate({opacity: 0},100)
			setTimeout(function(){
				$('.cbt-pop-bg:eq(1)').removeClass('cbt-pop-bg-add');
			},800);
		})
		// open click //
		$('.cbt-info:eq(0)').click(function(){
			$('.cbt-pop-bg:eq(0)').stop(true,false).animate({opacity: 1},150).animate({height: '100vh'},100)
			$('.cbt-pop-bg:eq(0)').addClass('cbt-pop-bg-add')
			$('.cbt-pop-wrap').addClass('cbt-pop-wrap-add')
			$('.cbt-pop-earth').addClass('cbt-pop-earth-add')
		})
		$('.cbt-info:eq(1)').click(function(){
			$('.cbt-pop-bg:eq(1)').stop(true,false).animate({opacity: 1},150).animate({height: '100vh'},100)
			$('.cbt-pop-bg:eq(1)').addClass('cbt-pop-bg-add')
			$('.cbt-pop-wrap').addClass('cbt-pop-wrap-add')
			$('.cbt-pop-earth').addClass('cbt-pop-earth-add')

		})
	})




	// particlesJS //
	$(function(){

		// particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":true,"value_area":300}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.7,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":159.84015984015983,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

		// particlesJS("particles-js", {
		//   "particles": {
		//     "number": {
		//       "value": 70,
		//       "density": {
		//         "enable": true,
		//         "value_area": 1000
		//       }
		//     },
		//     "color": {
		//       "value": "#fff"
		//     },
		//     "shape": {
		//       "type": "circle",
		//       "stroke": {
		//         "width": 0,
		//         "color": "#fff"
		//       },
		//       "polygon": {
		//         "nb_sides": 5
		//       },
		//       "image": {
		//         "src": "img/github.svg",
		//         "width": 100,
		//         "height": 100
		//       }
		//     },
		//     "opacity": {
		//       "value": 0.3,
		//       "random": false,
		//       "anim": {
		//         "enable": false,
		//         "speed": 1,
		//         "opacity_min": 0,
		//         "sync": false
		//       }
		//     },
		//     "size": {
		//       "value": 3,
		//       "random": true,
		//       "anim": {
		//         "enable": true,
		//         "speed": 3,
		//         "size_min": 2,
		//         "sync": true
		//       }
		//     },
		//     "line_linked": {
		//       "enable": false,
		//       "distance": 30,
		//       "color": "#000000",
		//       "opacity": 0.4,
		//       "width": 2
		//     },
		//     "move": {
		//       "enable": true,
		//       "speed": 2,
		//       "direction": "none",
		//       "random": false,
		//       "straight": false,
		//       "out_mode": "out",
		//       "bounce": false,
		//       "attract": {
		//         "enable": false,
		//         "rotateX": 600,
		//         "rotateY": 1200
		//       }
		//     }
		//   },
		//   "interactivity": {
		//     "detect_on": "canvas",
		//     "events": {
		//       "onhover": {
		//         "enable": true,
		//         "mode": "bubble"
		//       },
		//       "onclick": {
		//         "enable": false,
		//         "mode": "bubble"
		//       },
		//       "resize": true
		//     },
		//     "modes": {
		//       "grab": {
		//         "distance": 400,
		//         "line_linked": {
		//           "opacity": 1
		//         }
		//       },
		//       "bubble": {
		//         "distance": 100,
		//         "size": 5,
		//         "duration": 2,
		//         "opacity": 1,
		//         "speed": 3
		//       },
		//       "repulse": {
		//         "distance": 200,
		//         "duration": 0.4
		//       },
		//       "push": {
		//         "particles_nb": 4
		//       },
		//       "remove": {
		//         "particles_nb": 2
		//       }
		//     }
		//   },
		//   "retina_detect": true
		// });


	})







})


