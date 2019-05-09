// JavaScript共用區
var winHeight    = $(window).height();          //螢幕高度
var winWidth	 = $(window).width();			//螢幕寬度
var hederHeight  = $(".header").innerHeight();;	//版頭高度
var footerHeight = $(".footer").innerHeight();;	//版腳高度

$(function(){
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
		
		$(".main").css({
			'min-height': winHeight-hederHeight-footerHeight-0+'px'
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

	//----------------------------------手機版選單收合----------------------------------
	$(".menuBtn").click(function(e){
		$(".mNavBar").slideToggle();
		$(this).toggleClass("active");
		e.stopPropagation();

		//$(".searchText").slideUp();
	});

	$(".mNavBar").click(function(e){
		e.stopPropagation();
	});

	//----------------------------------手機版搜尋收合----------------------------------
	$(".searchIcon").click(function(e){
		$(".searchText").slideToggle();
		e.stopPropagation();

		$(".mNavBar").slideUp();
		$(".menuBtn").removeClass("active");
	});

	$(".searchText").click(function(e){
		e.stopPropagation();
	});

	$(window).resize(function(){
		var winWidth	 = $(window).width();			//螢幕寬度
		if (winWidth>545) {
			$(".searchText").removeAttr("style");
		}
	})

	$(window).click(function(){
		$(".mNavBar").slideUp();
		$(".menuBtn").removeClass("active");

		//$(".searchText").slideUp();
	})

	//----------------------------------手機版header pin 稱高度----------------------------------
	function headerH() {
		var header_H = $(".header").innerHeight();
		$(".headerSpace").css({
			height:header_H
		})
	}

	headerH();

	$(window).resize(function(){
		headerH();
	})

	//----------------------------------手機版加入line好友 pin 稱高度----------------------------------
	function addLine() {
		var winWidth   = $(window).width();
		var hasAddLine = $(".addLine").length;
		var addLine_H  = $(".addLine").innerHeight();

		if ( hasAddLine>0 && winWidth<=1024 ) {
			$("body").css({
				'padding-bottom':addLine_H+"px"
			})
		}else {
			$("body").removeAttr("style");
		}
	}
	addLine();
	$(window).resize(function(){
		addLine();
	})

});