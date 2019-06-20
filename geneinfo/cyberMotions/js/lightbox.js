// 燈箱效果
//design by kevin 20160130版

	var winHeight;  	  	    //螢幕高度
	var insideDomHeight;		//燈箱內可見的DOM 的高度
	var lightboxMainHeight;	    //燈箱主體高度

	//----------------------------------------------------添加燈箱高度
	function lightboxHeight(){
		winHeight    = $(window).height();
		$(".lightboxArea").css({
			'height': winHeight+'px'
		})
	}
	
	//----------------------------------------------------顯示燈箱
	function lightboxShow(){
		
		$(".lightboxArea").show();
		
		setTimeout(function(){
			$(".lightboxMain").css({
				'transform':'scale(1)'
			})
		},300)
		
	}
	
	//----------------------------------------------------隱藏燈箱
	function lightboxHide() {
		
		setTimeout(function(){
			$(".lightboxArea").hide();
		},300)
		
		$(".lightboxMain").removeAttr("style");
		
	}

	//----------------------------------------------------燈箱內資料如果矮於燈箱區塊　讓資料置中
	function lightboxInsideMiddle(){
		insideDomHeight	   = $(".lightboxContentArea").children("div:visible").height();
		lightboxMainHeight = $(".lightboxMain").height();
		var paddingPx	   = lightboxMainHeight-insideDomHeight;
		//要padding的高度↑
		//console.log(paddingPx);
		if ( insideDomHeight < lightboxMainHeight ) {
			$(".lightboxContentArea").children("div:visible").css({
				'padding-top': paddingPx/2+'px'
			})
		}else {
			$(".lightboxContentArea").children("div:visible").removeAttr("style");
		}
	}

	//----------------------------------------------------自動開啟的燈箱用
	function autoLightboxShow(cookieName) {
		var hasAuto =  $(".auto").length;
		
		if ( hasAuto > 0 && $.cookie(cookieName)==null ) { 											//如果有自動開啟燈箱 才執行
			lightboxShow();
			$(".auto").siblings().hide();
			$(".lightboxArea").addClass("auto_use");
		}
	}
	

	
$(function(){
	//----------------------------------------------------添加燈箱高度
	lightboxHeight();
	
	$(window).resize(function(e) {
		setTimeout(function(){
			lightboxHeight();
		},300)
	});
	
	//----------------------------------------------------顯示燈箱
	$(".lightBoxShow").click(function(e) {
		
		lightboxShow();
		
		//顯示燈箱內相應的區塊
		var thisId = $(this).attr("id");
		$('#'+thisId+'_area').show().siblings().hide();
		
	});
	
	//----------------------------------------------------隱藏燈箱
	$(".lightboxClose, .lightboxBG").click(function(e) {
		
		lightboxHide();
		
		setTimeout(function(){
			$(".lightboxArea").removeClass("video_use");			//移除影片燈箱的樣式
			$(".lightboxArea").removeClass("auto_use");				//移除自動開啟的燈箱用樣式
		},300)
		$(".video iframe").remove();								//移除影片燈箱內的iframe
		
	});
	
	//----------------------------------------------------燈箱內資料如果矮於燈箱區塊　讓資料置中
	$(".lightBoxShow").click(function(e) {
		setTimeout(function(){
			lightboxInsideMiddle();
		},300)
	});
	
	$(window).resize(function(e) {
		setTimeout(function(){
			lightboxInsideMiddle();
		},300)
	});
	
	//----------------------------------------------------燈箱內是影片時
	$(".play_video").click(function(e) {
		$(".lightboxArea").addClass("video_use");					//添加影片燈箱的樣式
		
		var thisId = $(this).attr("id");							//取得相對應燈箱區塊的data-url(youtube網址)
		var youtubeUrl = $('#'+thisId+'_area').attr("data-url");	//→↑
		//console.log(youtubeUrl);				
		var iframeDom = $(youtubeUrl);
		iframeDom.appendTo($('#'+thisId+'_area'));					//添加iframe到相對應的區塊內
	});
	
	//----------------------------------------------------自動開啟的燈箱用
	$(".auto_lightbox").click(function(e) {
		$(".auto").siblings().hide();
		$(".lightboxArea").addClass("auto_use");
    });
	
});





