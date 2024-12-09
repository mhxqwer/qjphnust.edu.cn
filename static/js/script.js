function tab(id){
	var oTab = $(id);
	var oLi = oTab.find('ul').eq(0).find('li');
	var oDd = oTab.find('dd');
	oLi.eq(0).addClass('active')
	oDd.eq(0).css('display','block')
	 oLi.hover(function(e) {
		 var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           //setTimeout(function(){
			   thisLi.siblings('li').removeClass('active');  // 鍒犻櫎鍏朵粬鍏勫紵鍏冪礌鐨勬牱寮�
				thisLi.addClass('active');                            // 娣诲姞褰撳墠鍏冪礌鐨勬牱寮�
				oDd.css('display','none');
				oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
			   }
			   //,100)
        //}
		);
	}

//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
        $(this).addClass('on');
       $(this).find('.subNav').addClass('flipInY');
       //$(this).find('.subNav').removClass('flipOutY');
        //$(this).css('z-index','9999');
	},function (){
        $(this).removeClass('on');
        $(this).find('.subNav').removeClass('flipInY');
       //$(this).find('.subNav').addClass('flipOutY');
        //$(this).css('z-index','999');
	})	
};
//移动端主导航 
function mobideMenu(){
	$(".mobile-inner-header .mobile-inner-header-icon").click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");

	  	$(".mobile-inner-nav").slideToggle(250);
	  	// if($(this).hasClass('mobile-inner-header-icon-click')){
	  	// 	$(this).html('&times;')
	  	// }else{
	  	// 	$(this).html('+')
	  	// }
	  });
	  $(".mobile-inner-nav a").each(function( index ) {
	  	$( this ).css({'animation-delay': (index/20)+'s'});
	  });
	  $('.mobile-inner-nav li strong').click(function(){
	  	$(this).next('dl').slideToggle(500);
	  	$(this).toggleClass('on');
	  	if($(this).hasClass('on')){
	  		$(this).html("&times;")
	  	}else{
	  		$(this).html("+")
	  	}
	  })




}

// function n2(){
// 	$('.systemList').find('li').each(function(e){
// 		if(e%2==1){
// 			$(this).addClass('n2')
// 		}
// 	})
// }
//移动端顶部点击弹出下拉菜单
function Menu(menu,main){
		$(menu).click(function(){
	  	$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
	  	$(".sub_navm").slideToggle(250);
		$('.sub_navm').find('.phone_toggle').click(function(){
			$(this).next('dl').slideToggle(500);
			$(this).toggleClass('on');
			if($(this).hasClass('on')){
				$(this).html("&times;")
			}else{
				$(this).html("+")
			}
			})
	  });
};
function subLeft(){
	$('.subLeft').find('.active').each(function(){
        if($(this).parent().parent().hasClass('second_nav')){
            $(this).parent().parent().css('display','block');
             $(this).parent().parent().parent().addClass('on')
             $(this).parent().parent().prev('.toggles').html('&times;')

        }
    })
	$('.subLeft').find('.toggles').click(function(){
		$(this).next('.second_nav').slideToggle(500);
		$(this).parent('li').toggleClass('active');
		if($(this).parent('li').hasClass('active')){
				$(this).html("&times;")
			}else{
				$(this).html("+")
			}
		})
	}

/*回到顶部*/
$('.goTop').click(function(){

	$('body,html').stop().animate({scrollTop:0});

	return false;

});
function slideToggle(){
	$('.teacherList03').find('dl').each(function(){
		if($(this).hasClass('open')){
			$(this).find('dd').css('display','block');
		}
	})
	$('.teacherList03').find('dl dt span').click(function(){
		$(this).parent().nextAll('dd').slideToggle(500);
		$(this).parent().parent().toggleClass('open');
	})
	
}


$(window).resize(function(){
		subBanner()//二级banner图片

	})

//大图切换高度问题
function ImgHeight(){
	function ImgHeight02(){
		var iWSon = document.documentElement.clientWidth;
	 	if(iWSon>=1920){
	    	$('.Banner,.Banner .slides > li').css('height', 500+'px');
	    }else{
	    	$('.Banner,.Banner .slides > li').css('height',iWSon * (500/1920)+'px');
	    }
	}
	ImgHeight02();
	    $(window).resize(function(){
	    	ImgHeight02();
	    })
		
}
//二级页面大图高度问题
function subBanner(){
	var iWSon = document.documentElement.clientWidth;
 	if(iWSon>=1920){
    	$('.subBanner').css('height', 300+'px');

    }else{
    	$('.subBanner').css('height',iWSon * (300/1920)+'px');
    }
}

function menuToggle(){
	$('.menu_btn').click(function(){
		$(this).next('.system_list').slideToggle(500)
		})
	}



// $(function(){
// 	var sWSon = document.documentElement.clientWidth;
// 	if(sWSon >=1225){
// 		var headerHeight = $('.header').height();
// 		var bannerHeight = $('.subBanner').height();
// 		var footerHeight = $('.footer').height();
// 		var cHeight = document.documentElement.clientHeight;
// 		var subPage_height =cHeight-headerHeight-bannerHeight-footerHeight-114;
// 		$('.subPage').css('min-height',subPage_height+"px");
// 	}
// })
function share(){
	$('.share_btn').click(function(){
		$(this).next('.bdsharebuttonbox').slideToggle(500)
	})
	
}
// function subLeftMove(){
// 	var Top1 = $('.subLeft ul').find('.active').offset().top;
// 	//var Top1 = $('.subLeft ul').find('li').eq(0).offset().top;
// 	var headerHeight = $('.header').outerHeight();
// 	var bannerHeight = $('.subBanner').outerHeight();
// 		//alert(headerHeight)
// 	$('.line').css({"top":Top1-headerHeight-bannerHeight})
	
// 	$('.subLeft ul').mouseleave(function(){
// 		$('.line').stop().animate({"top":Top1-headerHeight-bannerHeight},200)					
// 	})
	
// 	$('.subLeft ul>li a').click(function(e){
// 		stopBubble(e)
// 	})
// 	$('.subLeft ul').mousemove(function(e){
// 		var ulTop = $('.subLeft ul').offset().top;
// 		//这里可得到鼠标X坐标
// 		var pointX = e.pageX;
// 		//这里可以得到鼠标Y坐标
// 		var pointY = e.pageY;
// 		if(pointY-ulTop >= 0){
// 			$('.line').stop().animate({"top":pointY-ulTop-20},200)
// 		}				
// 	})
// 	function stopBubble(e) { 
// 	//如果提供了事件对象，则这是一个非IE浏览器 
// 	if ( e && e.stopPropagation ) 
// 	    //因此它支持W3C的stopPropagation()方法 
// 	    e.stopPropagation(); 
// 	else
// 	    //否则，我们需要使用IE的方式来取消事件冒泡 
// 	    window.event.cancelBubble = true; 
// 	}
// }

