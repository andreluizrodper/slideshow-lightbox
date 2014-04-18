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
		$('body').append(
			$("<div/>").addClass('modal-overlay').css({'position':'fixed', 'top':0,'left':0,'bottom':0,'right':0}).click(function(){
				$('.modal-overlay, .modal-holder').remove()
				return false;
			})
		).append(
			$("<div/>").addClass('modal-holder').css({'position':'absolute', 'top':'0','left':'50%'}).append(
				$('<img/>').attr({"src":$(this).data('big')}).hide().load(function(){
					$(".modal-holder").css({"marginLeft":-($(this).width() / 2), "top":($(window).height() / 2 - $(this).height() / 2) + $(window).scrollTop()})
					$(this).show()
				})
			)
		).append(
			$("<a/>").addClass('close').css({'position':'fixed', 'top':20,'right':20}).click(function(){
				$('.modal-overlay, .modal-holder').remove()
				return false;
			})
		)
		$(window).resize(function(){
			$(".modal-holder").css({"marginLeft":-($('.modal-holder img').width() / 2), "top":($(window).height() / 2 - $('.modal-holder img').height() / 2) + $(window).scrollTop()})
		})
		return false;
	})
	$(this).find('ul:first').remove()
})