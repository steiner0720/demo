$(function(){
	// slick main //
	$('.slick').slick({
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		arrows: false,
		draggable: true,
		dots: false,
		adaptiveHeight: true,
		asNavFor: '.slider-nav',
		swipe: true,
		touchThreshold: 5
	})
	// slick-nav //
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slick',
		speed: 600,
		infinite: true,
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true
	})

	// slick iconChange //
	$('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		q = 72
		r = -7
		var directionMove = slick.currentDirection
		var sum = nextSlide
		if(directionMove < 1){
			$('.mainIcon').stop(true,false).animate({left: sum*q},300)
			$('.controlLine').stop(true,false).animate({left: sum*r},300)
		} else{
			$('.mainIcon').stop(true,false).animate({left: sum*q},300)
			$('.controlLine').stop(true,false).animate({left: sum*r},300)
		}
	})

	// arrows function //
	$('.controlLeft').click(function(){
		$('.slick').slick('slickPrev')
	})
	$('.controlRight').click(function(){
		$('.slick').slick('slickNext')
	})

	// dot click //
	$('.dot[data-slide]').click(function(e) {
		e.preventDefault()
		var slideno = $(this).data('slide')
		$('.slick').slick('slickGoTo', slideno - 1)
	})
	
	// yearpicker //// new Date().getFullYear()
	$(function(){
		for (i = 1996 ; i > 1951; i--)
		{
			$('#yearpicker').append($('<option />').val(i).html(i));
		}
		$('#yearsOld select').change(function(){
			$('#nowYears').html(2017 - $(this).val())
		})

	})


	// total //
	$(function(){
		$('#yearsOld, #monthRange, #yearsRange, #moneyRange').change(function(){
			var a = $('#nowYears').text();
			var b = $('#monthRange').val();
			var c = $('#yearsRange').val();
			var d = $('#moneyRange').val();
			a = Math.ceil(a/5)*5;
			c = Math.ceil(c/5)*5;
			var key = c + "-0.1-" + a;
			a = parseFloat(a)
			b = parseFloat(b)
			c = parseFloat(c)
			d = parseFloat(d)
			var total = cal[key][b] - d;
			num = Math.floor(total*100)/100;
			if(num<0){
				num = 0
			}
			$('#finishMoney').html(num);
			$('#finishYears').html(c);
		})
		$('.nextBtn').click(function(){
			var a = $('#nowYears').text();
			var b = $('#monthRange').val();
			var c = $('#yearsRange').val();
			var d = $('#moneyRange').val();
			a = Math.ceil(a/5)*5;
			c = Math.ceil(c/5)*5;
			var key = c + "-0.1-" + a;
			a = parseFloat(a)
			b = parseFloat(b)
			c = parseFloat(c)
			d = parseFloat(d)
			var total = cal[key][b] - d;
			num = Math.floor(total*100)/100;
			if(num<0){
				num = 0
			}
			$('#finishMoney').html(num);
			$('#finishYears').html(c);
		})


	})




	// rangeslider //
	$(function(){
		var $rangeslider1 = $('#monthRange');
		var $amount1 = $('#monthInput');
		var $rangeslider2 = $('#yearsRange');
		var $amount2 = $('#yearsInput');
		var $rangeslider3 = $('#moneyRange');
		var $amount3 = $('#moneyInput');

		// 1 //
		$('#monthRange').rangeslider({
			polyfill:false
		})
		.on('input', function() {
			$amount1[0].value = this.value;
		});
		$amount1.on('input', function() {
			$rangeslider1.val(this.value).change();
		});
		// 2//
		$('#yearsRange').rangeslider({
			polyfill:false
		})
		.on('input', function() {
			$amount2[0].value = this.value;
		});
		$amount2.on('input', function() {
			$rangeslider2.val(this.value).change();
		});
		// 3//
		$('#moneyRange').rangeslider({
			polyfill:false
		})
		.on('input', function() {
			$amount3[0].value = this.value;

			$amount3.on('input', function() {
				$rangeslider3.val(this.value).change();
			});
		});

	});

	// actuarialPage UX //
	// actuarialPage open//
	$(function(){
		q = 0
		// actuarialPage function//
		$('.nextBtn:eq(0), .nextBtn:eq(1), .nextBtn:eq(2)').click(function(){
			q = q - 210
			$('.calculateStep').stop(true,false).animate({top: q})
			$('.closeBtn').click(function(){
				q = 0
			})
		})
		// actuarialPage finish function //
		$('#moneyFinish').click(function(){
			$('.finishWrap, .fund, .model').removeClass('hiddenAdd');
			$('.calculateTopic').removeClass('heightAdd');
			$('.calculateStep').stop(true,false).animate({top: 0});
			$('.circleLine img:eq(0), .circleLine img:eq(3), .circleLine img:eq(6), .circleLine img:eq(9)').css({'display': 'none'});
			$('.calculateBox').stop(true,false).animate({top: -42},100);
			$('.nextBtn').addClass('hiddenFadeOut');
			var targetFinish = $('.finish').offset()
			$('html, body').stop(true,false).animate({scrollTop: targetFinish.top-400},700)
		})
		// closeBtn //
		$('.closeBtn').click(function(){
			$('.actuarialBg').stop(true,false).delay(600).animate({width: '0px'},300);
			$('.closeBtn img').stop(true,false).delay(0).animate({right: '-200px'},300);
			$('.container').removeClass('heightFull');
			$('.actuarialB').stop(true,false).delay(200).animate({opacity: 0},700)
			$('.calculate, .fund, .model').stop(true,false).animate({opacity: 0},700)
			$('.actuarialPage').addClass('hiddenAdd')
			$('html, body').stop(true,false).animate({scrollTop: 0}, 300)
			// finish function //
			$('.finishWrap, .fund, .model').addClass('hiddenAdd');
			$('.calculateTopic').addClass('heightAdd');
			$('.circleLine img:eq(0), .circleLine img:eq(3), .circleLine img:eq(6), .circleLine img:eq(9)').css({'display': 'block'});
			$('.calculateBox').stop(true,false).animate({top: 0},100);
			$('.lineFlow').stop(true,false).animate({right: 0},300);
			$('.nextBtn').removeClass('hiddenFadeOut');
		})
	})

	// actuarialPage open//
	$(function(){
		// actionBtn //
		$('#actuarialAction').click(function(){
			$('html, body').stop(true,false).animate({scrollTop: 0}, 300)
			$('.actuarialBg').stop(true,false).animate({width: '100%'},300);
			$('.closeBtn img').stop(true,false).delay(100).animate({right: '250px'},300);
			$('.actuarialPage').removeClass('hiddenAdd');
			$('.container').addClass('heightFull');
			$('.actuarialB').stop(true,false).delay(500).animate({opacity: 1, top: 0},600)
			$('.calculate, .fund, .model').stop(true,false).delay(800).animate({opacity: 1, top: 0},600)
			$('.lineFlow').stop(true,false).animate({right: -200},300)
		})
		var url = window.location.hash;
		var hashA = url.substring(url.indexOf('#'));
		var hashB = hashA.slice(1,16);
		if(hashB == 'actuarialAction'){
			$('#actuarialAction').click()
		}
		$('.contentAct').click(function(){
			$('#actuarialAction').click()
		})
	})


	// mainPage UX //
	$(function(){
		$('.slickControl').stop(true,false).animate({bottom: -100}, 300)
		$(window).scroll(function () {
			var paperTop = $('.paper').offset();
			var papaerH = $('.paper').height();
			var windowH = $(window).height();
			var scrollVal = $(this).scrollTop();
			pos = paperTop.top
			$('.actionBar').stop(true,false).animate({top: 200, opacity: 0},500)
			if(scrollVal + windowH - papaerH +50 > pos){
				$('.actionBar').stop(true,false).animate({top: 0, opacity: 1},500)
			}else{
				$('.actionBar').stop(true,false).animate({top: 200, opacity: 0},500)
				$('.slickControl').stop(true,false).animate({bottom: -100}, 100)
				$('.step, .footer').addClass('hiddenAdd');
			}
		})
		$('.actionBar').hover(function(){
			$('.actionBar h1, .actionBar img:eq(1)').stop(true,false).animate({top: -5},300)
		}, function(){
			$('.actionBar h1, .actionBar img:eq(1)').stop(true,false).animate({top: 0},200)
		})
		// actionBar onClick //
		$('.actionBar').click(function(){
			$('.step, .footer').removeClass('hiddenAdd');
			var acbTop = $('.actionBar').offset();
			goTop = acbTop.top;
			$('html, body').stop(true,false).animate({scrollTop: goTop}, 300);
			$('.slickControl').stop(true,false).animate({bottom: 0}, 300)
		})



	})



})



$(function(){
	
})