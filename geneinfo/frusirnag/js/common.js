// JavaScript共用區
$(function(){
	
	var windowWidth;	//螢幕寬度
	var winHeight;      //螢幕高度
	var hederHeight;	//版頭高度
	var footerHeight;	//版腳高度
	var windowScroll;   //取得捲軸位置
	
	//錨點平滑滾動效果
	//$(document).ready(function() {
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
	//});
	
	//----------------------------------logo用小閃光----------------------------------
	$(".logo_flash").parent().css("position","relative");
                        
	function logoFlash(){
		$(".logo_flash").addClass("logo_flash_hover");
		window.setTimeout(function(){
			$(".logo_flash").removeClass("logo_flash_hover");
		},500);
	}
	
	window.setTimeout(logoFlash,500);
	
	
	$(".logo img").mouseover(function(e) {
		logoFlash();
	});
	
	//----------------------------------主按鍵展開----------------------------------
	var navSlideSpeed = 200;											//主按鍵展開速度
	$(".nav").children("a").click(function(e) {
		$(".nav").children("a").not(this).next(".nav_open_list_area").slideUp(navSlideSpeed);
		
        $(this).next(".nav_open_list_area").slideToggle(navSlideSpeed);
    });
	
	//----------------------------------產品主按鍵展開 寬度----------------------------------
	function productNavOpenWidth(){
		var windowWidth   = $(window).width();		//螢幕寬度
		var wrapWidth     = $(".wrap").innerWidth();	    //wrap寬度
		var wrapSpace     = windowWidth-wrapWidth;
		var wrapSpaceLeft = wrapSpace/2;
		$(".product_nav .nav_open_list_area").css({
			'width':windowWidth,
			'left':'-'+wrapSpaceLeft+'px'
		})
		//console.log(wrapWidth);
	}
	
	productNavOpenWidth();
	
	$(window).resize(function(e) {
        setTimeout(function(){
			productNavOpenWidth();
		},300)
    });
	
	//----------------------------------產品主按鍵展開----------------------------------
	$(".product_nav .nav_open_list_area .nO_list").click(function(e) {
		$(".product_nav .nav_open_list_area .nO_list").not(this).children(".product_nav_open_layer2").removeAttr("style");
        $(this).children(".product_nav_open_layer2").css({
			'opacity':'1',
			//'display':'block',
			'z-index':'9'
		});
		
		//添加當前模式
		$(".product_nav .nav_open_list_area .nO_list").not(this).removeClass("active");
		$(this).addClass("active");
    });
	
	$(".product_nav_open_close").click(function(e) {
        $(".product_nav").children(".nav_open_list_area").slideUp();
    });
	
	//----------------------------------產品次選單高度----------------------------------
	$(".product_nav").click(function(e) {
    });
	
	//----------------------------------手機版menu----------------------------------
	$(".mobileMenuBtn").click(function(e) {
		//手機版menu鍵動畫
		$(this).toggleClass("menu_but_animaiton");
		
		//手機選單展開
		$(".header_right").slideToggle();
		
	});
	
	//螢幕尺寸改變時還原選單的樣式
	$(window).resize(function(e) {
		windowWidth = $(window).width();
		if ( windowWidth >= 965 ) {
			$(".header_right").removeAttr("style");
			$(".mobileMenuBtn").removeClass("menu_but_animaiton");
		}
    });
	
	//----------------------------------讓footer置底效果----------------------------------
	//將主體添加最小高度 讓footer置底
	function mainH() {
		winHeight    = $(window).height();
		hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		
		$(".main").css({
			'min-height': winHeight-hederHeight-footerHeight+'px'
		})
	}
	
	mainH();
	
	setTimeout(function(){
		mainH();
	},300)
	
	$(window).resize(function(e) {
		setTimeout(function(){
			mainH();
		},300)
	});
	
	//----------------------------------內頁左選單收合效果----------------------------------
	var left_list_areaHas;  					//判斷是否有左選單
	
	$(".in_tit").click(function(e) {
		windowWidth 	  = $(window).width();
		left_list_areaHas = $(".left_list_area").length;
		
		if ( windowWidth <= 670 ) {
			if ( left_list_areaHas > 0 ) {
				$(".left_list_area").slideToggle();
				$(this).toggleClass("active");
			}
		}
		
    });
	
	//螢幕尺寸改變時還原選單的樣式
	$(window).resize(function(e) {
		windowWidth = $(window).width();
		if ( windowWidth >= 670 ) {
			$(".left_list_area").removeAttr("style");
			$(".in_tit").removeClass("active");
		}
    });
	
	//----------------------------------右側浮動瀏覽記錄 收合----------------------------------
	$(".fR_close_btn").click(function(e) {
        $(".fixed_right").toggleClass("close");
		$(".fR_close_btn").toggleClass("fb_open_btn");
    });
	
	//----------------------------------複方成分收合----------------------------------
	$(".produrct_list_top .news_in_tit_area").click(function(e) {
        $(".produrct_list_top .text_area").slideToggle();
    });
	
	//----------------------------------語系頁logo動畫----------------------------------
	$(".lang_logo img").addClass("animate");
	
	var langShowTime = 600;
	
	setTimeout(function(){
		for ( n=0; n<4; n++ ) {
			$(".lang_btn_area a").eq(n).animate({
				'opacity':'1'
			},langShowTime*n*2)
		}
	},langShowTime)
	
	
	//----------------------------------動態效果----------------------------------
	var showTime = 500;										//延遲時間
	
	//-------------------------------------------------LOGO
	$(".logo").css({
		'transition':'2s ease all',
		'transform':'scale(1)',
		'opacity':'1'
	});
	
	//-------------------------------------------------版頭右
	setTimeout(function(){
		$(".header_right").addClass("header_right_show");
	},showTime);
	
	//-------------------------------------------------手機版menu按鍵
	setTimeout(function(){
		$(".mobileMenuBtn").css({
			'transition':'1s ease all',
			'right':'15px'
		});
	},showTime);
	
	//-------------------------------------------------輪播
	setTimeout(function(){
		$(".banner").css({
			'transition':'2s ease all',
			'opacity':'1'
		});
	},showTime*1.5);
	
	//-------------------------------------------------首頁banner下引導鍵頭
	$(".index_guide_arrow").css({
		'opacity':'0'
	});

	setTimeout(function(){
		$(".index_guide_arrow").css({
			'transition':'1s ease all',
			'opacity':'1'
		});
	},showTime*2);
	
	//-------------------------------------------------首頁主體
	$(".index_main").css({
		'opacity':'0',
		'top':'100px',
		'position':'relative'
	});
	
	function indexMainPosition(){
		windowScroll	 	   = $(window).scrollTop();
		windowWidth  	 	   = $(window).width();
		winHeight   		   = $(window).height();
		
		var hasIndexMain       = $(".index_main").length;							//判對是否有這個dom
		
		if ( hasIndexMain > 0 ) {
			
			var indexMainPosition	  = $(".index_main").position().top;			//首頁主體位置
			
			if ( windowScroll >= indexMainPosition/2-200 ) {
				$(".index_main").css({
					'transition':'1s ease all',
					'opacity':'1',
					'top':'0px'
				});
			}if ( winHeight > 700 || windowWidth < 700 ) {
				setTimeout(function(){
					$(".index_main").css({
						'transition':'1s ease all',
						'opacity':'1',
						'top':'0px'
					});
				},showTime*3);
			}
			
			//console.log(windowScroll);
			//console.log(indexProductPosition);
			
		}
		
	}
	
	indexMainPosition();
	
	$(window).scroll(function(e) {
        indexMainPosition();
    });
	
	//-------------------------------------------------內頁主體
	$(".main").css({
		'opacity':'0',
		'position':'relative'
	});
	
	setTimeout(function(){
		$(".main").css({
			'transition':'1s ease all',
			'opacity':'1'
		});
	},showTime*2);
	
	//-------------------------------------------------版腳
	$(".footer").css({
		'opacity':'0',
		'position':'relative'
	});
	
	setTimeout(function(){
		$(".footer").css({
			'transition':'1s ease all',
			'opacity':'1'
		});
	},showTime*3);
	

});




