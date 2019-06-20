// JavaScript Document
//下雪效果 20151202

$(function(){
	var windowWidth  = $(document).width();                  //取得螢幕寬度
	var windowHeight = $(document).height();                 //取得螢幕高度
	
	setInterval ( function(){
		var lift_i   = 0;                                    //亂數產出靠左的數字
		var lift_j   = 0;
		var top_i    = 0;									 //亂處產出離上面的數字
		var count    = 0;
		var showTime = 0;									 //動畫運行時間
		do{
			count++;
			lift_i   = Math.random()*windowWidth*0.3;
			lift_j   = Math.random()*windowWidth*0.3;
			top_i    = Math.random()*windowHeight*0.02;
			showTime = Math.random()*4500;
			
		}while(count>=50000)
		for ( n=1 ; n<5 ; n++ ) {
			var flake = $('<img class="flake" src="../images/flake-'+n+'.png" />');
		
			flake.clone().appendTo('body')
				.css(
					{
						'position':'fixed',
						'pointer-events':'none',
						'z-index':'99999999',
						'top': '-'+n*top_i+'px',
						'left': n*lift_i+'px'
					}
				)
				.animate
				(
					{
						'opacity':'0.1',
						'top':'100%',
						'left': n*lift_j+'px'
					},showTime*n,
					function(){
						$(this).remove();
					}
				)
		
		}
	},800);
	
		
	//alert(windowWidth);
})