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
	
	//----------------------------------將主體添加最小高度 讓footer置底----------------------------------
	function mainH() {
		winHeight    = $(window).height();
		hederHeight  = $(".header").innerHeight();
		footerHeight = $(".footer").innerHeight();
		
		$(".main, .right").css({
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
	
	//----------------------------------版頭右選單收合----------------------------------
	$(function(){
		$(".hRB_icon").click(function(e) {
			$(".hRB_icon").not(this).siblings(".hRB_open").removeClass("show");
            $(this).siblings(".hRB_open").toggleClass("show");
			e.stopPropagation();
        });
		$(".hRB_open").click(function(e) {
            e.stopPropagation();
        });
		$(window).click(function(e) {
            $(".hRB_open").removeClass("show");
        });
	})
	
	//----------------------------------主選單收合----------------------------------
	$(function(){
		$(".nav").children("a").click(function(e) {
			$(".nav").children("a").not(this).siblings(".nav_open").removeClass("show");
            $(this).siblings(".nav_open").toggleClass("show");
			e.stopPropagation();
			
			$(".nO_list.has_child").children(".nOL_open").removeClass("show");
        });
		$(".nO_list.has_child").click(function(e) {
			//$(".nO_list.has_child").not(this).children(".nOL_open").removeClass("show");
            $(this).children(".nOL_open").toggleClass("show");
			e.stopPropagation();
        });
		$(window).click(function(e) {
            $(".nav").children("a").siblings(".nav_open").removeClass("show");
			$(".nO_list.has_child").children(".nOL_open").removeClass("show");
        });
	})
	
	//----------------------------------手機版 主選單收合----------------------------------
	$(function(){
		$(".mune_btn").click(function(e) {
            $(".navbar").toggleClass("show");
			$(".nav").children("a").siblings(".nav_open").removeClass("show");
			$(".nO_list.has_child").children(".nOL_open").removeClass("show");
			e.stopPropagation();
        });
		$(window).click(function(e) {
            $(".navbar").removeClass("show");
        });
	});
	
	//----------------------------------左選單收合----------------------------------
	$(function(){
		$(".has_child.active").children(".lL_open ").show();
		$(".left_list.has_child").children("a").click(function(e) {
            $(this).siblings(".lL_open").slideToggle();
        });
	});
	
	//----------------------------------列表收合----------------------------------
	$(function(){
		$(".showHide_btn").click(function(e) {
            $(this).parent(".tit_style_2").siblings("div").slideToggle(200);
			$(this).toggleClass("active");
        });
	});

$(function(){
});