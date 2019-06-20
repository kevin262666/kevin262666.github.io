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
			'min-height': winHeight-hederHeight-footerHeight-36+'px'		//"-30"這要隨每個案子不同調整
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
	
	//----------------------------------版頭選單收合----------------------------------
	$(function(){
		//版頭會員專區
		$(".hRTM_btn").click(function(e) {
            $(".hRTM_open").slideToggle();
			e.stopPropagation();
			$(".navOpen").slideUp();												//主按鍵選單收
        });
		
		$(".hRTM_open").click(function(e) {
            e.stopPropagation();
        });
		
		$(window).click(function(e) {
            $(".hRTM_open").slideUp();
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
	
	//----------------------------------主按鍵收合----------------------------------
	$(function(){
		//第一層收合
		$(".nav").children("a").click(function(e) {
			$(".nav").children("a").not(this).siblings(".navOpen").slideUp("fast");
            $(this).siblings(".navOpen").slideToggle("fast");
			e.stopPropagation();
			$(".hRTM_open").slideUp();												//版頭選單收
        });
		$(".navOpen").click(function(e) {
            e.stopPropagation();
        });
		
		//第二層收合
		$(".navOpen_list").children("a").click(function(e) {
			$(this).toggleClass("active");
			$(".navOpen_list").children("a").not(this).removeClass("active");
			
            var n = $(this).attr("id");
			$("."+n).toggleClass("show").siblings(".navOpen_second, .m_navOpen_second").removeClass("show");
        });
		
		$(window).click(function(e) {
            $(".navOpen").hide();
			$(".navOpen_second, .m_navOpen_second").removeClass("show");
        });
	});
	
	//----------------------------------手機版主按鍵收合----------------------------------
	$(function(){
		$(".menu_btn").click(function(e) {
            $(this).toggleClass("active");
			$(".navbar").toggleClass("active");
			$("body").toggleClass("active");
			e.stopPropagation();
			
			$(".left").removeClass("active");				//隱藏左選單
			$(".navOpen").hide();
			$(".navOpen_list").children("a").removeClass("active");
			$(".navOpen_second, .m_navOpen_second").removeClass("show");
        });
		
		$(window).resize(function(e) {
			var win_W		 = $(window).width();			//螢幕寬度
            if ( win_W > 795 ) {
				$(".navbar").removeClass("active");
				$("body").removeClass("active");
				$(".menu_btn").removeClass("active");
				$(".navOpen").hide();
				$(".navOpen_list").children("a").removeClass("active");
				$(".navOpen_second, .m_navOpen_second").removeClass("show");
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
	

$(function(){
});