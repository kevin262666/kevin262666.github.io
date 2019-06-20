// JavaScript共用區
//20160429 by kevin

	var winHeight    = $(window).height();          //螢幕高度
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
	function mainH() {
		winHeight    = $(window).height();
		hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		
		$(".main").css({
			'min-height': winHeight-hederHeight-footerHeight+'px'		//"-30"這要隨每個案子不同調整
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
	
	//----------------------------------主按鍵收合----------------------------------
	$(function(){
		$(".nav").children("a").click(function(e) {
			$(".nav").children("a").not(this).siblings(".nav_open").slideUp("fast");
            $(this).siblings(".nav_open").slideToggle("fast");
			e.stopPropagation();
			
			$(".bRTB_open").removeClass("show");			//右選單收合
        });
		$(".nav_open").click(function(e) {
            e.stopPropagation();
        });
		$(window).click(function(e) {
            $(".nav_open").slideUp("fast");
        });
		
		//第二層
		$(".nO_list").children("a").click(function(e) {
			$(".nO_list").children("a").not(this).siblings(".navOpen2").slideUp();
            $(this).siblings(".navOpen2").slideToggle();
        });
	});
	
	//----------------------------------右邊選單收合----------------------------------
	$(function(){
		$(".bRT_btn").children("a").click(function(e) {
			$(".bRT_btn").children("a").not(this).siblings(".bRTB_open").removeClass("show");
            $(this).siblings(".bRTB_open").toggleClass("show");
			e.stopPropagation();
			
			$(".nav_open").slideUp("fast");					//主按鍵收合
        });
		$(".bRTB_open").click(function(e) {
            e.stopPropagation();
        });
		$(window).click(function(e) {
            $(".bRTB_open").removeClass("show");
        });
	});
	
	//----------------------------------會員登入----------------------------------
	$(function(){
		$(".login_open").click(function(e) {
            $(".member_login_area").addClass("show");
        });
		$(".member_login_area").click(function(e) {
            $(this).removeClass("show");
        });
		$(".mL_close").click(function(e) {
            $(".member_login_area").removeClass("show");
        });
		$(".mL_info").click(function(e) {
            e.stopPropagation();
        });
	});
	
	//----------------------------------手機版主按鍵收合----------------------------------
	$(function(){
		$(".menu_btn").click(function(e) {
            $(this).toggleClass("active");
			$(".navbar").toggleClass("active");
			$("body").toggleClass("active");
			e.stopPropagation();
        });
		
		$(window).resize(function(e) {
			var win_W		 = $(window).width();			//螢幕寬度
            if ( win_W > 795 ) {
				$(".navbar").removeClass("active");
				$("body").removeClass("active");
				$(".menu_btn").removeClass("active");
			}
        });
		
		$(".navbar").click(function(e) {
            e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".navbar").removeClass("active");
			$("body").removeClass("active");
			$(".menu_btn").removeClass("active");
        });
	});
	
	//----------------------------------手機版左選單收合----------------------------------
	$(function(){
		$(".in_tit").click(function(e) {
            var win_W		 = $(window).width();			//螢幕寬度
			if ( win_W<=760 ) {
				$(".left_list_area").slideToggle();
			}
        });
		$(window).resize(function(e) {
            var win_W		 = $(window).width();			//螢幕寬度
			if ( win_W>=761 ) {
				$(".left_list_area").removeAttr("style");
			}
        });
	});
	
	//----------------------------------左選單收合----------------------------------
	$(function(){
		$(".left_list.has_open").children("a").click(function(e) {
			$(".left_list.has_open").children("a").not(this).siblings(".left_list_open1").slideUp();
            $(this).siblings(".left_list_open1").slideToggle();
        });
	});

$(function(){
});