// JavaScript共用區
//20160429 by kevin

	var win_H		 = $(window).height();          //螢幕高度
	var win_W		 = $(window).width();			//螢幕寬度
	var hederHeight  = $(".header").innerHeight();;	//版頭高度
	var footerHeight = $(".footer").innerHeight();;	//版腳高度

	//浮動式top鍵
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊 
			if($this_Top < 100){
				$('.top_but').stop().animate({bottom:"-70px"});
			}
			if($this_Top > 100){
				$('.top_but').stop().animate({bottom:"133px"});
			}
		}).scroll();
	});
	
	$(function(){
		//錨點平滑滾動效果
		$('a[href*=#]').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({
						scrollTop: targetOffset
					},
					1000);
					return false;
				}
			}
		});
	});
	
	//----------------------------------將主體添加最小高度 讓footer置底----------------------------------
	var cut;												//要減掉的數
	if ( win_W < 920 ) {
		cut = 46;
	}else {
		cut = 0;
	}
	
	function mainH() {
		winHeight    = $(window).height();
		//hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		
		$(".right_bg").css({
			'min-height': winHeight-footerHeight-cut+'px'		//"-30"這要隨每個案子不同調整
		});
	}
	
	mainH();
	
	setTimeout(function(){
		mainH();
	},300)
	
	$(window).resize(function(e) {
		setTimeout(function(){
			mainH();
		},300);
		
		var win_W		 = $(window).width();			//螢幕寬度
		if ( win_W < 920 ) {
			cut = 46;
		}else {
			cut = 0;
		}
	});
		
	//----------------------------------左選單效果----------------------------------
	function leftNavStyle() {
		setTimeout(function(){
			var win_W			= $(window).width();				//螢幕寬度
			var win_H			= $(window).height();				//螢幕高度
			
			var leftH			= $(".left").innerHeight();			//左邊高度
			var rightH			= $(".right").innerHeight();		//右邊高度
			var logoH			= $(".logo").innerHeight();			//logo高度
			var nav1H 			= $(".navbar1").innerHeight();		//主按鍵1高度
			var nav2H 			= $(".navbar2").innerHeight();		//主按鍵2高度
			
			var leftActualH 	= (win_H-logoH);					//左邊實際可容納高度
			var navTotalH		= (nav1H+nav2H);					//兩個主按鍵高度
			
			var windowScroll	= $(window).scrollTop();			//取得捲軸位置
			
			var nav2FixedPosition = (nav1H+nav2H-leftActualH);		//主按鍵2該固定的位置
			
			if ( win_W > 920 ) {
				if ( win_H+nav2FixedPosition < rightH ) {
					if ( leftActualH > navTotalH ) {
						$(".navbar2").css({
							'position':'fixed',
							'bottom':'0px'
						});
					}else {
						if ( windowScroll >= nav2FixedPosition ) {
							$(".navbar2").css({
								'position':'fixed',
								'bottom':'0px'
							});
						}else {
							$(".navbar2").css({
								'position':'relative'
							});
						}
					}
				}else {
					$(".navbar2").css({
						'position':'relative'
					});
				}
			}
		},500)

	};

	
	$(function(){
		leftNavStyle();
	});
	
	$(window).resize(function(e) {
		leftNavStyle();
    });
	
	$(window).scroll(function(e) {
        leftNavStyle();
    });
	
	//----------------------------------左選單收和----------------------------------
	$(function(){
		$(".navbar2 .nav").children("a").click(function(e) {
			$(".navbar2 .nav").children("a").not(this).siblings(".nav_open").slideUp();
            $(this).siblings(".nav_open").slideToggle();
        });
	})
	
	//----------------------------------語系收和----------------------------------
	$(function(){
		$(".lang_list_now").click(function(e) {
            $(".lang_slider").slideToggle();
        });
		
		$(".iSS_tit").click(function(e) {
			$(".iSS_tit").not(this).siblings(".iSS_slider").slideUp("fast");
            $(this).siblings(".iSS_slider").slideToggle("fast");
        });
		
		$(".iSS_slider div").click(function(e) {
			var lang = $(this).html();
            $(this).parent(".iSS_slider").siblings(".iSS_tit").children().replaceWith('<span>'+lang+'</span>');;
			$(".iSS_slider").slideUp();
        });
	});
	
	//----------------------------------手機版主按鍵----------------------------------
	$(function(){
		$(".menu_btn").click(function(e) {
            $(this).toggleClass("active");
			$(".right").toggleClass("active");
			$(".left").toggleClass("active");
			$("body").toggleClass("active");
			e.stopPropagation();
        });
		
		$(window).resize(function(e) {
			var win_W		 = $(window).width();			//螢幕寬度
            if ( win_W > 795 ) {
				$(".right").removeClass("active");
				$(".left").removeClass("active");
				$("body").removeClass("active");
				$(".menu_btn").removeClass("active");
			}
        });
		
		$(".left").click(function(e) {
            e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".right").removeClass("active");
			$(".left").removeClass("active");
			$("body").removeClass("active");
			$(".menu_btn").removeClass("active");
        });
	});
	
	//----------------------------------手機版類別選單 收合----------------------------------
	$(function(){
		$(".in_tit.has_sort").click(function(e) {
			var win_W			= $(window).width();			//螢幕寬度
			if ( win_W < 920 ) {
				$(".mobile_sort_list_area").slideToggle();
			}
		});
	});
	
	$(window).resize(function(e) {
		var win_W			= $(window).width();			//螢幕寬度
		if ( win_W > 920 ) {
			$(".mobile_sort_list_area").removeAttr("style");
		}
	});
	

$(function(){
});