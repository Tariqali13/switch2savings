$(document).ready(function () {	
	var responsiveMenu = $("#menu").html();
	$('body').prepend("<div id='responsiveMenu'><p><span>Menu</span> <a href='javascript:void(0)' class='menuClose'></a></p>" + responsiveMenu + "</div>")
	
	$('body').wrapInner('<div class="overFlowHidden"></div>');
	
	$('#menu').prepend("<a href='javascript:void(0)' class='menuDown'><span>Menu</span></a>");
	
	
	$('#responsiveMenu ul li').each(function(index) {
		if ($(this).find('ul').length > 0) {
			$(this).append('<a href="javascript:void(0)" class="downarrow"><span></span></a>');
		}
		else {
			$(this).append('');
		}
	});
    $(".downarrow").click(function () {
		$(this).parent().find('ul:eq(0)').slideToggle();
		$(this).parent().addClass('selected');
		$(this).toggleClass('uparrow');
    });
	

	/*************************************** main menu *******************************/
	$('#menu > ul > li').each(function(index) {
		if ($(this).find('ul').length > 0) {
			$(this).append('<span class="downarrow"></span>');
		}
		else {
			$(this).append('');
		}
	});
	$('#menu ul li ul li').each(function(index) {
		if ($(this).find('ul').length > 0) {
			$(this).append('<span class="rightarrow"></span>');
		}
		else {
			$(this).append('');
		}
	});
	$('#menu ul ul').each(function() {
		//alert($(this).find('li').length);
		if ($(this).find('li').length > 9) {
			$(this).addClass('twoList');
			$(this).find('li:nth-child(2n)').css({'margin-left': 20});
		}
	});
	
    $("#menu > ul > li").hover(function () {
        //var itemheight = $(this).height(); /* Getting the LI width */
        $(this).children("ul:eq(0)").slideDown(250);
        $(this).children("a:eq(0)").addClass('selected');
    }, function () {
        $(this).find("ul").slideUp(100); /* fading out the sub menu */
        $(this).children("a").removeClass('selected');
    });
    $("#menu li li").hover(function () {
        $(this).children("a:eq(0)").addClass('selected');
        $(this).children("ul:eq(0)").slideDown(250);
    }, function () {
        $(this).find("ul").slideUp(100); /* fading out the sub menu */
        $(this).children("a").removeClass('selected');
    });
	
	/*****************************************************************************************/
//	$('.responsivemenu ul li').each(function(index) {
//		if ($(this).find('ul').length > 0) {
//			$(this).append('<span class="downarrow"></span>');
//		}
//		else {
//			$(this).append('');
//		}
//	});
	
    $("#menu .menuDown").click(function () {
		$("#responsiveMenu").fadeIn(0).animate({marginTop:0, opacity:1}, 200);
		$('.overFlowHidden').css({'position': 'absolute', 'overflow': 'hidden', 'width': '100%', 'height': '100%'});
    });
    $("#responsiveMenu .menuClose").click(function () {
		$("#responsiveMenu ").animate({marginTop:50, opacity:0}, 200).fadeOut(0);
		$('.overFlowHidden').removeAttr('style');
    });
		
		
	$("#topMenu").find("ul li").addClass('hiddenNav');
	
	var topNav = $("#topMenu").find("ul").html();
	$("#menu > ul").append(topNav);
	
	/*****************************************************/
	
	
});

