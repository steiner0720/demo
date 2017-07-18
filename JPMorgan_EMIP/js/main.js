$(function(){

	$(function(){
		$('.popup--close img').click(function(){
			$('.popup--title, .popup--content').stop(true,false).animate({opacity: 0, top: -50},'easeOutQuad')
			$('.popup--wrap').stop(true,false).delay(50).animate({opacity: 0, top: -50},'easeOutQuad')
			$('.popup--fadeOut').stop(true,false).delay(200).animate({height: 0},'easeOutQuad')
		})
		$('.bottom-btn').click(function(){
			$('.popup--fadeOut').stop(true,false).animate({height: '100vh'},'easeOutQuad')
			$('.popup--wrap').stop(true,false).delay(50).animate({opacity: 1, top: 0},'easeOutQuad')
			$('.popup--title, .popup--content').delay(200).stop(true,false).animate({opacity: 1, top: 0},'easeOutQuad')
		})

		$(function(){
			$('.ads img').click(function(){
				$('html, body').stop(true,false).animate({"scrollTop": $('.section--title:eq(1)').offset().top -100}, 700)
			})
		})


	})

})