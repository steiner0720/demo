jQuery(document).ready(function(){



	//fullpage//
	$(function(){
		$('#fullpage').fullpage({
			css3: true,
			anchors: ['welcome', 'brief', 'feature', 'works-graphic', 'works-webvisual', 'works-motionfilm'],
        	autoScrolling: true,
        	scrollingSpeed: 1000,
       		fitToSection: true,
        	fitToSectionDelay: 1000,
        	scrollBar: false,


        	onLeave: function(index, nextIndex, direction){

            	//after leaving section 2
            		// $('.section').eq(3).stop(true,false).animate({opacity: 0}, 1000)
            		// $('.section').eq(4).stop(true,false).animate({opacity: 0}, 1000)
            		// $('.section').eq(5).stop(true,false).animate({opacity: 0}, 1000)
            	if(index == 1 && direction =='down'){
            	    $('.bg-brief img').stop(true,false).delay(250).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).delay(500).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).delay(750).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).delay(1000).animate({opacity: 1}, 1000)
            	    $('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0), .award-content:eq(0)').stop(true,false).delay(1250).animate({opacity: 1}, 1000)
            		$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-content:eq(1)').stop(true,false).delay(1500).animate({opacity: 1}, 1000)
            		$('.award-name:eq(2), .award-content:eq(2)').stop(true,false).delay(1750).animate({opacity: 1}, 1000)
            		$('.award-name:eq(3), .award-content:eq(3)').stop(true,false).delay(2000).animate({opacity: 1}, 1000)
            		$('.award-name:eq(4), .award-content:eq(4)').stop(true,false).delay(2250).animate({opacity: 1}, 1000)
            		$('.award-name:eq(5), .award-content:eq(5)').stop(true,false).delay(2500).animate({opacity: 1}, 1000)
            		$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(6), .award-content:eq(6)').stop(true,false).delay(2750).animate({opacity: 1}, 1000)
            	}
            	if(index == 2 && direction =='up'){
                	$('.bg-brief img').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).animate({opacity: 0})
            	    $('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0), .award-content:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-content:eq(1)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(2), .award-content:eq(2)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(3), .award-content:eq(3)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(4), .award-content:eq(4)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(5), .award-content:eq(5)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(6), .award-content:eq(6)').stop(true,false).animate({opacity: 0}, 1000)
        	    }
        	    else if(index == 2 && direction =='down'){
        	        $('.bg-brief img').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).animate({opacity: 0})
            	    $('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).animate({opacity: 0})
            	    $('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0), .award-content:eq(0)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-content:eq(1)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(2), .award-content:eq(2)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(3), .award-content:eq(3)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(4), .award-content:eq(4)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-name:eq(5), .award-content:eq(5)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(6), .award-content:eq(6)').stop(true,false).animate({opacity: 0}, 1000)
            		$('.main-works').stop(true,false).delay(500).animate({opacity: 1}, 1000)
            		$('.sub-works').stop(true,false).delay(1000).animate({opacity: 1}, 1000)
         	   }
         	   if(index == 3 && direction =='up'){
         	    	$('.bg-brief img').stop(true,false).delay(250).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(0), .intro-content:eq(0)').stop(true,false).delay(500).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(1), .intro-content:eq(1)').stop(true,false).delay(750).animate({opacity: 1}, 1000)
            	    $('.intro-year:eq(2), .intro-content:eq(2)').stop(true,false).delay(1000).animate({opacity: 1}, 1000)
            	    $('.award-line:eq(0), .award-year:eq(0), .award-name:eq(0), .award-content:eq(0)').stop(true,false).delay(1250).animate({opacity: 1}, 1000)
            		$('.award-line:eq(1), .award-year:eq(1), .award-name:eq(1), .award-content:eq(1)').stop(true,false).delay(1500).animate({opacity: 1}, 1000)
            		$('.award-name:eq(2), .award-content:eq(2)').stop(true,false).delay(1750).animate({opacity: 1}, 1000)
            		$('.award-name:eq(3), .award-content:eq(3)').stop(true,false).delay(2000).animate({opacity: 1}, 1000)
            		$('.award-name:eq(4), .award-content:eq(4)').stop(true,false).delay(2250).animate({opacity: 1}, 1000)
            		$('.award-name:eq(5), .award-content:eq(5)').stop(true,false).delay(2500).animate({opacity: 1}, 1000)
            		$('.award-line:eq(2), .award-year:eq(2), .award-name:eq(6), .award-content:eq(6)').stop(true,false).delay(2750).animate({opacity: 1}, 1000)
            		$('.main-works').stop(true,false).animate({opacity: 0}, 1000)
            		$('.sub-works').stop(true,false).animate({opacity: 0}, 1000)
            		// $('.section').eq(3).stop(true,false).animate({opacity: 0}, 1000)
        	    }
        	    else if(index == 3 && direction =='down'){
         	       $('.bg-brief img').stop(true,false).animate({opacity: 0})
            		$('.main-works').stop(true,false).animate({opacity: 0}, 1000)
            		$('.sub-works').stop(true,false).animate({opacity: 0}, 1000)
            		// $('.section').eq(3).stop(true,false).animate({opacity: 1}, 1000)
         	   }

         	   if(index == 4 && direction =='up'){
            		$('.main-works').stop(true,false).delay(500).animate({opacity: 1}, 1000)
            		$('.sub-works').stop(true,false).delay(1000).animate({opacity: 1}, 1000)
            		// $('.section').eq(3).stop(true,false).animate({opacity: 0}, 1000)

         	   	}

        	    else if(index == 4 && direction =='down'){
            		// $('.section').eq(4).stop(true,false).animate({opacity: 1}, 1000)

         	   }

         	   if(index == 5 && direction =='up'){
					// $('.section').eq(3).stop(true,false).animate({opacity: 1}, 1000)
     //        		$('.section').eq(4).stop(true,false).animate({opacity: 1}, 1000)
         	   	}

        	    else if(index == 5 && direction =='down'){
            		// $('.section').eq(5).stop(true,false).animate({opacity: 1}, 1000)

         	   }
         	   if(index == 6 && direction =='up'){
            		// $('.section').eq(4).stop(true,false).animate({opacity: 1}, 1000)
            		// $('.section').eq(5).stop(true,false).animate({opacity: 0}, 1000)
         	   	}

        	}


		})
	});






	// mouseover_parallax // 

	$(function(){
		$('.section').mousemove(function(e){
   		var x = -(e.pageX + this.offsetLeft) / 20
    	var y = -(e.pageY + this.offsetTop) / 20
    	$(this).css('background-position', x + 'px ')
  		})
		$('.section').mousemove(function(e){
   		var x = -(e.pageX + this.offsetLeft) / 20
    	var y = -(e.pageY + this.offsetTop) / 20
    	$('.title-welcome-first').css('background-position', x + 'px ' + y + 'px')
  		})

	});


	//window resize//
	var window_height = $(window).height()
	var window_width = $(window).width()


	// catch window width for some element //

	$(function(){
		function center(){
			$('.section').css({height: window_height})
			var brief_height = $('.brief').height()
			$('.brief').css({width: window_width / 3, 'margin-top': window_height - window_width / 3 * 0.9 })
			$('.bg-brief').css({width: window_width / 2})
			var tww_brief = $('.title-welcome').width()
			var twh_brief = $('.title-welcome').height()
			$('.title-welcome').css({'margin-top': window_height / 2 - twh_brief / 2, left: window_width / 2 - tww_brief / 2})
			var sdw_brief = $('.scroll-down-brief').width()
			var sdh_brief = $('.scroll-down-brief').height()
			$('.scroll-down-brief').css({'margin-top': window_height - sdh_brief / 2, left: window_width / 2 - sdw_brief / 2 })
			var sdtw_brief = $('.scroll-down-text').width()
			var sdth_brief = $('.scroll-down-text').height()
			$('.scroll-down-text').css({'margin-top': window_height - sdth_brief / 2 - sdh_brief / 2, left: window_width / 2 - sdtw_brief / 2 })
			var arw_brief = $('.arrow-down').width()
			var arh_brief = $('.arrow-down').height()
			$('.arrow-down').css({'margin-top': window_height - arh_brief / 2 - sdh_brief / 2, left: window_width / 2 - arw_brief / 2 })
			var itw = $('.intro').width()
			$('.intro').css({left: window_width / 2 - itw / 2 })
			var adw = $('.award').width()
			$('.award').css({left: window_width / 2 - adw / 2 + adw})


			// scroll down btn //
			var sdt2w_brief = $('.scroll-down-text-2').width()
			var sdt2h_brief = $('.scroll-down-text-2').height()
			$('.scroll-down-text-2').css({top: window_height * 2 - sdt2h_brief / 2 - sdt2h_brief / 2 - 40, left: window_width / 2 - sdt2w_brief / 2 })
			var sdw_feature = $('.scroll-down-feature').width()
			var sdh_feature = $('.scroll-down-feature').height()
			$('.scroll-down-feature').css({top: window_height * 2- sdh_feature / 2 , left: window_width / 2 - sdw_feature / 2 })
			var arw_feature = $('.arrow-down-2').width()
			var arh_feature = $('.arrow-down-2').height()
			$('.arrow-down-2').css({top: window_height * 2 - arh_feature / 2 -20, left: window_width / 2 - arw_feature / 2 })

			var sdt3w_works = $('.scroll-down-text-3:eq(0)').width()
			var sdt3h_works = $('.scroll-down-text-3:eq(0)').height()
			$('.scroll-down-text-3:eq(0)').css({top: window_height * 3 - sdt3h_works / 2 - 60, left: window_width / 2 - sdt3w_works / 2 })
			var sdw_works = $('.scroll-down-works:eq(0)').width()
			var sdh_works = $('.scroll-down-works:eq(0)').height()
			$('.scroll-down-works:eq(0)').css({top: window_height * 3 - sdh_works / 2, left: window_width / 2 - sdw_works / 2 })
			var arw_works = $('.arrow-down-3:eq(0)').width()
			var arh_works = $('.scroll-down-text-3:eq(0)').height()
			$('.arrow-down-3:eq(0)').css({top: window_height * 3 - arh_works / 2, left: window_width / 2 - arh_works / 2 })

			var sdt3w_works = $('.scroll-down-text-3:eq(1)').width()
			var sdt3h_works = $('.scroll-down-text-3:eq(1)').height()
			$('.scroll-down-text-3:eq(1)').css({top: window_height * 4 - sdt3h_works / 2 - 60, left: window_width / 2 - sdt3w_works / 2 })
			var sdw_works = $('.scroll-down-works:eq(1)').width()
			var sdh_works = $('.scroll-down-works:eq(1)').height()
			$('.scroll-down-works:eq(1)').css({top: window_height * 4 - sdh_works / 2, left: window_width / 2 - sdw_works / 2 })
			var arw_works = $('.arrow-down-3:eq(1)').width()
			var arh_works = $('.scroll-down-text-3:eq(1)').height()
			$('.arrow-down-3:eq(1)').css({top: window_height * 4 - arh_works / 2, left: window_width / 2 - arh_works / 2 })

			var sdt3w_works = $('.scroll-down-text-3:eq(2)').width()
			var sdt3h_works = $('.scroll-down-text-3:eq(2)').height()
			$('.scroll-down-text-3:eq(2)').css({top: window_height * 5 - sdt3h_works / 2 - 60, left: window_width / 2 - sdt3w_works / 2 })
			var sdw_works = $('.scroll-down-works:eq(2)').width()
			var sdh_works = $('.scroll-down-works:eq(2)').height()
			$('.scroll-down-works:eq(2)').css({top: window_height * 5 - sdh_works / 2, left: window_width / 2 - sdw_works / 2 })
			var arw_works = $('.arrow-down-3:eq(2)').width()
			var arh_works = $('.scroll-down-text-3:eq(2)').height()
			$('.arrow-down-3:eq(2)').css({top: window_height * 5 - arh_works / 2, left: window_width / 2 - arh_works / 2 })
			var work_iconw = $('.works-icon').width()
			$('.works-icon').css({left: window_width / 2 - work_iconw / 2 })

			var workw_bg = $('#wkbg_1').width()
			var workh_bg = $('#wkbg_1').height()
			$('#wkbg_1').css({top: window_height * 7 / 2 - workh_bg / 2, left: window_width / 2 - workw_bg / 2 })
			var wktw = $('#wkt_1').width()
			var wkth = $('#wkt_1').height()
			$('#wkt_1').css({top: window_height * 7 / 2 - wkth / 2 -60, left: window_width / 2 - wktw / 2 })

			var workw2_bg = $('#wkbg_2').width()
			var workh2_bg = $('#wkbg_2').height()
			$('#wkbg_2').css({top: window_height * 9 / 2 - workh2_bg / 2, left: window_width / 2 - workw2_bg / 2 })
			var wktw2 = $('#wkt_2').width()
			var wkth2 = $('#wkt_2').height()
			$('#wkt_2').css({top: window_height * 9 / 2 - wkth2 / 2 -60, left: window_width / 2 - wktw2 / 2 })

			var workw3_bg = $('#wkbg_3').width()
			var workh3_bg = $('#wkbg_3').height()
			$('#wkbg_3').css({top: window_height * 11 / 2 - workh3_bg / 2, left: window_width / 2 - workw3_bg / 2 })
			var wktw3 = $('#wkt_3').width()
			var wkth3 = $('#wkt_3').height()
			$('#wkt_3').css({top: window_height * 11 / 2 - wkth3 / 2 -60, left: window_width / 2 - wktw3 / 2 })




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
				$('.brief').css({width: 650})
				var brief_height = $('.brief').height()
				$('.brief').css({'margin-top': '23%' , left: window_width / 2 - 10})
				$('.bg-brief').css({width: '100vw'})
				var itw = $('.intro').width()
				$('.intro').css({left: 0})
				var sdw_feature = $('.scroll-down-feature').width()
				var sdh_feature = $('.scroll-down-feature').height()
				$('.scroll-down-feature').css({top: window_height * 2- sdh_feature / 2 , left: window_width / 2 - sdw_feature / 2 })
				var work_iconw = $('.works-icon').width()
				$('.works-icon').css({left: window_width / 2 - work_iconw / 2 })
				var adw = $('.award').width()
				$('.award').css({left: window_width / 2})
				var sdw_feature = $('.scroll-down-feature').width()
				var sdh_feature = $('.scroll-down-feature').height()
				$('.scroll-down-feature').css({top: window_height * 2- sdh_feature / 2 -40, left: window_width / 2 - sdw_feature / 2 })
				// toggle //
				$(function(){
					$('.nav-works').click(function(){
						$('.menu-works').slideToggle('slow')
					})
				})


			}


		});

	});










	// hover //
	$(function(){
		$('.works-text').hover(
			function() {
  				$('.works-content-bg').stop(true,false).css({ backgroundColor: '#856e40' },300)
			}, function(){
  				$('.works-content-bg').stop(true,false).css({ backgroundColor: '#1a1a1a' },200)
			}
		);

		$('.scroll-down-text').hover(
			function() {
  				$('.scroll-down-brief').stop(true,false).animate({height: '40'},300)
			}, function(){
  				$('.scroll-down-brief').stop(true,false).animate({height: '120'},200)
			}
		);


		$('.nav-animation-works').hover(
			function() {
  				$('.nav-works').stop(true,false).show(200)
			}, function(){
  				$('.nav-works').stop(true,false).hide(200)
			}
		);

	});






});








