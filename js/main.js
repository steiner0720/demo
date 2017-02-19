jQuery(document).ready(function(){



	//fullpage//
	$(function(){
		$('#fullpage').fullpage({
			css3: true,
			anchors: ['welcome', 'brief', 'works-graphic', 'page4'],
        	autoScrolling: true,
       		fitToSection: true,
        	fitToSectionDelay: 1000,
        	scrollBar: false,
		})
	})


	// mouseover_parallax // 

	$(function(){
		$('.section').mousemove(function(e){
   		var x = -(e.pageX + this.offsetLeft) / 100
    	var y = -(e.pageY + this.offsetTop) / 100
    	$(this).css('background-position', x + 'px ')
  		})
		$('.section').mousemove(function(e){
   		var x = -(e.pageX + this.offsetLeft) / 20
    	var y = -(e.pageY + this.offsetTop) / 20
    	$('.title-welcome-first').css('background-position', x + 'px ' + y + 'px')
  		})
	})


	//window resize//
	var window_height = $(window).height()
	var window_width = $(window).width()

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

		}
			center()
		$(window).resize(function(){
			center()
			location.reload()
		})

		$(function(){
			$('html, body').stop(true,false).animate({opacity: 0}, 0).delay(3000)
			$('html, body').stop(true,false).animate({opacity: 1}, 1000)
		})
	})



	$(function(){
		$('.nav-animation-logo').hover(
			function() {
  				$('.nav-animation-logo-bg').stop(true,false).animate({width:'120', left: '18.27%', height: '35'},500)

			}, function(){
  				$('.nav-animation-logo-bg').stop(true,false).animate({width:'40', left: '18.27%', height: '35'},500)
			}
		)

		$('.nav-animation-brief').hover(
			function() {
  				$('.nav-animation-brief-bg').stop(true,false).animate({width:'80', right: '27.04%'},500)

			}, function(){
  				$('.nav-animation-brief-bg').stop(true,false).animate({width:'0', right: '30.04%'},500)
			}
		)

		$('.nav-animation-works').hover(
			function() {
  				$('.nav-animation-works-bg').stop(true,false).animate({width:'80', right: '18.27%'},500)

			}, function(){
  				$('.nav-animation-works-bg').stop(true,false).animate({width:'0', right: '21.27%'},500)
			}
		)
	})

})





	// $(function(){
	// 	$('.brief').css({width: window_width / 2.5, 'margin-top': window_height + 50 - window_width / 2.5 * 1.1 })
	// 	$('.bg-brief').css({width: window_width / 2})
	// 	$('.title-welcome').css({'margin-top': window_height / 2 -200, left: window_width / 2 - 340})
	// })





	//menu move function//

	// $(function(){
	// 	$('.nav li:eq(0)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(0)').offset().top})
	// 		console.log(n=0)
	// 	})
	// 	$('.nav li:eq(1)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(1)').offset().top})
	// 		console.log(n=1)
	// 	})
	// 	$('.nav li:eq(2)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(3)').offset().top})
	// 		console.log(n=2)
	// 	})
	// 	$('.nav li:eq(3)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(4)').offset().top})
	// 		console.log(n=3)
	// 	})
	// 	$('.nav li:eq(4)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(5)').offset().top})
	// 		console.log(n=4)
	// 	})
	// 	$('.nav li:eq(5)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(6)').offset().top})
	// 		console.log(n=5)
	// 	})
	// 	$('.nav li:eq(6)').click(function(){
	// 		$('html, body').animate({'scrollTop':$('.section:eq(7)').offset().top})
	// 		console.log(n=6)
	// 	})
	// })

	//menu color change function//

	// $(window).scroll(function(){
	// 	if($(window).scrollTop()>=$('.section:eq(0)').offset().top && $(window).scrollTop()<$('.section:eq(1)').offset().top){
	// 		$('.nav li').css('background-color','#fff')
	// 		$('.nav li:eq(0)').css('background-color','#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(1)').offset().top && $(window).scrollTop()<$('.section:eq(2)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(1)').css('background-color', '#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(2)').offset().top && $(window).scrollTop()<$('.section:eq(3)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(2)').css('background-color', '#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(4)').offset().top && $(window).scrollTop()<$('.section:eq(5)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(3)').css('background-color', '#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(5)').offset().top && $(window).scrollTop()<$('.section:eq(6)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(4)').css('background-color', '#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(6)').offset().top && $(window).scrollTop()<$('.section:eq(7)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(5)').css('background-color', '#ED8B00')
	// 	}else if($(window).scrollTop()>=$('.section:eq(7)').offset().top){
	// 			$('.nav li').css('background-color','#fff')
	// 			$('.nav li:eq(6)').css('background-color', '#ED8B00')
	// }
	// })

	//mousewheel callback function//

	// $(function(){
	// 	// var num_li = $('.nav li').length
	// 	n = 0
	// 	moving = 0
	// 	$(window).mousewheel(function(e){
	// 		if(moving==0){
	// 			moving=1
	// 			if(e.deltaY==-1){
	// 				if( n<9 ){
	// 					n++
	// 				}
	// 			}else{
	// 				if(n>0){
	// 					n--
	// 				}
	// 			}
	// 		}
	// 		$('html, body').stop(true,false).animate({'scrollTop':$('.section').eq(n).offset().top},500,function(){moving=0})
	// 		console.log(n)
	// 	})
	// 	return false
	// })



	//mobile move//



	// $(function(){
	// 	var nowpage = 0
	// 	$('body, html').swipe({
	// 		swipe:function(event, direction, distance, duration, fingerCount){
	// 			if(direction == 'up'){
	// 				nowpage = nowpage + 1
	// 			}else if(direction == 'down'){
	// 				nowpage = nowpage - 1
	// 			}

	// 			if(nowpage > 9){
	// 				nowpage = 9
	// 			}
	// 			if(nowpage < 0){
	// 				nowpage = 0
	// 			}
	// 			$('body, html').stop(true,false).animate({'scrollTop': $('.section').eq(nowpage).offset().top},500)
	// 			console.log(nowpage)
	// 		}
	// 	})
	// })







