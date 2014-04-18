$('html').find('.slideshow-lightbox').each(function(){
	$(this).attr({'max':parseInt($(this).find('li').size() - ($(this).width() / $(this).find('li:first').outerWidth())), 'mov':0}).append(
		$("<div/>").addClass('holder').css({"overflow":"hidden"}).width($(this).width()).height($(this).height()).append(
			$(this).find('ul').clone()
		)
	).prepend(
		$("<a/>").addClass('nav prev').click(function(){
			if($(this).parent().attr('mov') == 0)
				return false;
			if($(this).parent().attr('mov') == 0)
				$(this).find('.prev').hide()
			$(this).find('.next').show()
			$(this).parent().attr('mov', parseInt($(this).parent().attr('mov')) - 1)
			$(this).parent().find('ul').animate({'marginLeft': -parseInt($(this).parent().attr('mov')) * $(this).parent().find('li:first').outerWidth()})
			return false;
		})
	).append(
		$("<a/>").addClass('nav next').click(function(){
			if($(this).parent().attr('mov') == $(this).parent().attr('max'))
				return false;
			if($(this).parent().attr('mov') == $(this).parent().attr('max'))
				$(this).find('.next').hide()
			$(this).find('.prev').show()
			$(this).parent().attr('mov', parseInt($(this).parent().attr('mov')) + 1)
			$(this).parent().find('ul').animate({'marginLeft': -parseInt($(this).parent().attr('mov')) * $(this).parent().find('li:first').outerWidth()})
			return false;
		})
	).find('ul').width($(this).find('li:first').outerWidth() * $(this).find('li').size()).find('li').click(function(){
		$(this).parent().find('li.active').removeClass('active')
		$(this).addClass('active')
		elem = $(this)
		if(!$('.modal-overlay')[0]){
			$('body').append(
				$("<div/>").addClass('modal-overlay').hide().css({'position':'fixed', 'top':0,'left':0,'bottom':0,'right':0}).click(function(){
					$('.modal-overlay, .modal-holder').fadeOut(function(){
						$(this).remove()
					})
					return false;
				}).fadeIn()
			).append(
				$("<div/>").addClass('modal-holder').css({'position':'absolute', 'top':($(window).height() / 2 - 4) + $(window).scrollTop(),'left':'50%', 'marginLeft':'-8px'}).append(
					$('<div/>').addClass('content').height(16).width(16).append(
						$('<img/>').attr({"src":$(this).data('big')}).hide().load(function(){
							$(".modal-holder").animate({"marginLeft":-($(this).width() / 2), "top":($(window).height() / 2 - $(this).height() / 2) + $(window).scrollTop()})
							img = $(this)
							$(".modal-holder .content").animate({'width':$(this).width(), 'height':$(this).height()}, function(){
								img.fadeIn()
								if(elem.next()[0]){
									$(".modal-holder .content").append(
										$('<a/>').addClass('nav next').html('&rarr;').click(function(){
											$(".modal-holder .content img").fadeOut(function(){
												$(".modal-close").hide()
												$(".modal-holder .content .nav").hide()
												$('.modal-holder').animate({'top':($(window).height() / 2 - 4) + $(window).scrollTop(),'left':'50%', 'marginLeft':'-8px'})
												$(this).remove()
												img = $(this)
												$(".modal-holder .content").animate({'width':16, 'height':16}, function(){
													elem.parent().find('li.active').next().click();
												})
											})
										})
									)
								}
								if(elem.prev()[0]){
									$(".modal-holder .content").prepend(
										$('<a/>').addClass('nav prev').html('&larr;').click(function(){
											$(".modal-holder .content img").fadeOut(function(){
												$(".modal-close").hide()
												$(".modal-holder .content .nav").hide()
												$('.modal-holder').animate({'top':($(window).height() / 2 - 4) + $(window).scrollTop(),'left':'50%', 'marginLeft':'-8px'})
												$(this).remove()
												$(".modal-holder .content").animate({'width':16, 'height':16}, function(){
													elem.parent().find('li.active').prev().click();
												})
											})
										})
									)
								}
								$(".modal-close").show()
							})
						})
					).append(
						$("<a/>").addClass('modal-close').hide().text('x').click(function(){
							$('.modal-overlay, .modal-holder').fadeOut(function(){
								$(this).remove()
							})
							return false;
						})
					)
				)
			)
		}else{
			$('.content img').remove()
			$('.content').append(
				$('<img/>').attr({"src":$(this).data('big')}).hide().load(function(){
					$(".modal-holder").animate({"marginLeft":-($(this).width() / 2), "top":($(window).height() / 2 - $(this).height() / 2) + $(window).scrollTop()})
					img = $(this)
					$(".modal-holder .content").animate({'width':$(this).width(), 'height':$(this).height()}, function(){
						$(".modal-close").show()
						img.fadeIn()
						if(elem.prev()[0]){
							$(".modal-holder .content .nav.prev").show()
						}else{
							$(".modal-holder .content .nav.prev").hide()
						}
						if(elem.next()[0]){
							$(".modal-holder .content .nav.next").show()
						}else{
							$(".modal-holder .content .nav.next").hide()
						}
					})
				})
			)
		}
		$(window).resize(function(){
			$(".modal-holder").css({"marginLeft":-($('.modal-holder img').width() / 2), "top":($(window).height() / 2 - $('.modal-holder img').height() / 2) + $(window).scrollTop()})
		})
		return false;
	})
	$(this).find('ul:first').remove()
})