// JavaScript共用區
$(function(){

	//浮動式top鍵
	$(window).load(function(){
		$(window).bind('scroll resize', function(){
			var $this = $(this);
			var $this_Top=$this.scrollTop();
			
			//當高度小於100時，關閉區塊
			if($this_Top < 200){
				$('.top_btn').stop().animate({bottom:"-100px"});
				$('.fixed_navbar').stop().animate({top:"-100px"});
				$('.fixed_limit_buy').stop().animate({bottom:"-100px"});
			}
			if($this_Top > 200){
				$('.top_btn').stop().animate({bottom:"102px"});
				$('.fixed_navbar').stop().animate({top:"0px"});
				$('.fixed_limit_buy').stop().animate({bottom:"0px"});
			}
			
		}).scroll();
	});
	
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
	
	//----------------------------------將主體添加最小高度 讓footer置底----------------------------------
	var winHeight;      //螢幕高度
	var hederHeight;	//版頭高度
	var footerHeight;	//版腳高度
	
	function mainH() {
		winHeight    = $(window).height();
		hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		
		$(".main").css({
			'min-height': winHeight-hederHeight-footerHeight-5+'px'
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
	
	//----------------------------------有限時搶購時撐footer底----------------------------------
	var hasFixedLimit   = $(".fixed_limit_buy").length;		//判斷是否有浮動限時搶購

	$(window).scroll(function(e) {
		var windowScrollTop = $(window).scrollTop();		//取得捲軸位置
		
        if ( hasFixedLimit > 0 ) {							//如果有浮動限時搶購
			if ( windowScrollTop > 200 ) {					//如果滾動大於200 需跟浮動限時搶購出現的尺寸依樣
				$(".footer_company_info").css({
					'padding-bottom':'52px'
				})
			}
		}
    });
	

});