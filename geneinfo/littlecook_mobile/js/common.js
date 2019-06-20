// JavaScript共用區

	var winHeight;      //螢幕高度
	var hederHeight;	//版頭高度
	var footerHeight;	//版腳高度

	//浮動式top鍵
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊 
			if($this_Top < 100){
				//$('.top_but').stop().animate({bottom:"-70px"});
				$('.fixed_limit_buy').stop().animate({bottom:"-100px"});
			}
			if($this_Top > 100){
				//$('.top_but').stop().animate({bottom:"133px"});
				$('.fixed_limit_buy').stop().animate({bottom:"0px"});
			}
		}).scroll();
	});
	
	//錨點平滑滾動效果
	$(document).ready(function() {
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
	function mainH() {
		winHeight    = $(window).height();
		hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		//console.log(hederHeight);
		
		$(".main").css({
			'min-height': winHeight-hederHeight-footerHeight-5+'px'
		})
	}
	
	$(function(){
		mainH();
		
		setTimeout(function(){
			mainH();
		},300)
	})
	
	$(window).resize(function(e) {
		setTimeout(function(){
			mainH();
		},300)
	});
	
	//----------------------------------次選單收起----------------------------------
	function navOpenSlideUp() {
		setTimeout(function(){
			$(".nav_open").removeAttr("style");
		},300)
	}
	
	//----------------------------------主按鍵展開----------------------------------
	$(function(){
		$(".menu_btn").click(function(e) {
            $(".navbar").slideToggle();
			navOpenSlideUp();
			$(".hRT_cart_open_bg").slideUp();
        });
	})
	
	//----------------------------------主按鍵高度----------------------------------
	function navbarHeight() {
		winHeight = $(window).innerHeight();
		$(".navbar").css({
			'height': winHeight-60+'px'
		})
	}
	
	$(function(){
		navbarHeight();
	});
	
	$(window).resize(function(e) {
        navbarHeight();
    });
	
	//----------------------------------次按鍵展開----------------------------------
	$(function(){
		$(".nav").children("a").click(function(e) {
			$(".nav").children("a").not(this).siblings(".nav_open").slideUp();
			$(".nav").children("a").not(this).parent(".nav").removeClass("open");
            $(this).siblings(".nav_open").slideToggle();
			$(this).parent(".nav").toggleClass("open");
        });
	});
	
	//----------------------------------購物車高度----------------------------------
	function cartOpenHeight() {
		winHeight = $(window).innerHeight();
		var cartOpenHeight = $(".hRT_cart_open").innerHeight();		//取購物車展開資料區塊高度
		//console.log(cartOpenHeight);
		if ( cartOpenHeight+6 > winHeight-60 ) {
			$(".hRT_cart_open").css({
				'height':winHeight-66+'px',
				'overflow-y':'scroll'
			})
		}else {
			$(".hRT_cart_open").removeAttr("style");
		}
	}
	
	$(window).resize(function(e) {
        cartOpenHeight();
    });
	
	//----------------------------------購物車展開----------------------------------
	$(function(){
		$(".hR_cart_btn").click(function(e) {
			$(".hRT_cart_open_bg").slideToggle();
			$(".navbar").slideUp();
            navOpenSlideUp();
			cartOpenHeight();
        });
	});
	
	//----------------------------------有限時搶購時撐footer底----------------------------------
	$(function(){
		var hasFixedLimit   = $(".fixed_limit_buy").length;		//判斷是否有浮動限時搶購
		
		$(window).scroll(function(e) {
			var windowScrollTop = $(window).scrollTop();		//取得捲軸位置
			
			if ( hasFixedLimit > 0 ) {							//如果有浮動限時搶購
				if ( windowScrollTop > 200 ) {					//如果滾動大於200 需跟浮動限時搶購出現的尺寸依樣
					$(".footer").css({
						'padding-bottom':'59px'
					})
				}
			}
		});
	});
	
	//----------------------------------內頁左選單收合效果----------------------------------
	$(function(){
		var left_list_areaHas;  					//判斷是否有左選單
		
		$(".in_tit").click(function(e) {
			windowWidth 	  = $(window).width();
			left_list_areaHas = $(".left_list_area").length;
			
			if ( left_list_areaHas > 0 ) {
				$(".left_list_area").slideToggle();
				$(this).toggleClass("active");
			}
			
		});
	});
	
	//----------------------------------內頁左選單 第二層收合效果----------------------------------
	$(function(){
		$(".left_list.has_open").children("a").click(function(e) {
			$(".left_list.has_open").children("a").not(this).siblings(".lL_open_area").slideUp();
			$(".left_list.has_open").children("a").not(this).parent(".left_list.has_open").removeClass("open");
            $(this).siblings(".lL_open_area").slideToggle();
			$(this).parent(".left_list.has_open").toggleClass("open");
		});
		
		$(".left_list.has_open.active").children(".lL_open_area").show();
	});
	
	//----------------------------------頁籤變下拉選單特效----------------------------------
	$(function(){
		$(".tabs_btn_now").click(function(e) {
			$(".img-scroll").slideToggle();
		});
		
		$(".tabs li span").click(function(e) {
			var tabsText = $(this).text();
			var bodywidth=document.documentElement.clientWidth;//取得螢幕可見寬度
			
			$(".tabs_btn_now span").replaceWith('<span>'+tabsText+'</span>');
			if ( bodywidth <= 980 ) {
				$(".img-scroll").slideToggle();
			}
		});
		
		$(window).resize(function(e) {
			$(".img-scroll").removeAttr("style");
		});
	});
	

$(function(){
});