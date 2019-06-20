// JavaScript共用區
//20160921 by kevin

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
				$('.topBtn').stop().animate({bottom:"-70px"});
			}
			if($this_Top > 100){
				$('.topBtn').stop().animate({bottom:"133px"});
			}
		}).scroll();
	});
	
	//錨點平滑滾動效果
	$(function(){
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
			'min-height': winHeight-hederHeight-footerHeight+105+'px'		//"-30"這要隨每個案子不同調整
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

	//---------------------------------右側浮動廣告收合----------------------------------
	$(function(){
		$(".fRA_close").click(function(e) {
            $(this).parents(".fixedRightAd").toggleClass("hide");
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
	
	//----------------------------------版頭主按鍵收合----------------------------------
	$(function(){
		$(".nav").children("a").click(function(e) {
			$(".nav").children("a").not(this).siblings(".navOpen_mobile").removeClass("active");
            $(this).siblings(".navOpen_mobile").toggleClass("active");
			e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".navOpen_mobile").removeClass("active");
        });
	});
	
	//----------------------------------版頭會員專區收合----------------------------------
	$(function(){
		$(".bMB_btn").children("a").click(function(e) {
            $(this).siblings(".bMBOpen_mobile").toggleClass("active");
			e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".bMBOpen_mobile").removeClass("active");
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
	
	//----------------------------------職缺搜尋區 頁籤效果----------------------------------
	$(function(){
		$(".jobSearch_tab").click(function(e) {
			var n = $(this).attr("id");
			$("#"+n+"Info").addClass("active").siblings(".jSTI_info").removeClass("active");
			$("#"+n+"Info").toggleClass("show").siblings(".jSTI_info").removeClass("show");
		});
	});

$(function(){
});