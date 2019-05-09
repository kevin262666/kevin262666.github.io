var win_W = $(window).width();                                      // 螢幕寬度
var win_H = $(window).innerHeight();                                // 螢幕高度
var win_Scroll = $(window).scrollTop();                             // 捲軸位置

$(window).resize(function (e) {
    win_W = $(window).width();
    win_Scroll = $(window).scrollTop();
});

$(window).scroll(function(){
    win_Scroll = $(window).scrollTop();
});

//-------------------------------------錨點平滑滾動效果
$('a[href*=#]').click(function () {
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

//-------------------------------------浮動式top鍵
$(window).load(function(){
    $(window).bind('scroll resize', function(){
        var $this = $(this);
        var $this_Top=$this.scrollTop();

        //當高度小於100時，關閉區塊 
        if($this_Top < 100){
            $('.topBtn').stop().animate({bottom:"-70px"});
        }
        if($this_Top > 100){
            $('.topBtn').stop().animate({bottom:"80px"});
        }
    }).scroll();
});

//-------------------------------------判斷url 點不同按鍵
var url = location.href;
var i;
var area = "";
var openInfo = '';

if (url.indexOf('?') != -1) {
    //在此直接將各自的參數資料切割放進ary中
    var ary = url.split('?')[1].split('&');

    //下迴圈去搜尋每個資料參數
    for (i = 0; i <= ary.length - 1; i++) {
        //取資料
        if (ary[i].split('=')[0] == 'openInfo') {
            openInfo = ary[i].split('=')[1];        // 取lightbox id
            openInfo = openInfo.substring(0, openInfo.indexOf("#"));
        }
    }
    
    $('#' + openInfo).click();
    // console.log(area, openInfo);

    /*
        例 /index.html?openInfo=decemberSpecials#specialPrice
        會移到每月特價 ＆ 打開十二月方案lightbox
    */
}

//-------------------------------------導航列
//-------------------------------------導航列
var _itemName = $('.item');                             // 區塊class name
var _itemPos = [];
var _itemLength = _itemName.length;
var _itemPosCut = 2;                                    // 要減掉的高度

var _navActiveWidth;
var _navActiveHeight;
var _navActivePosLeft;
var _navActivePosBottom;
var _navActivePosTop;

function navIcon() {
    for (n = 0; n < _itemLength; n++) {
        _itemPos[n] = _itemName.eq(n).offset().top;
    };
    for (n = 0; n < _itemLength; n++) {
        if (win_Scroll >= (_itemPos[n] - _itemPosCut)) {
            $('.nav').eq(n).addClass('active').siblings().removeClass('active');
        }if (win_Scroll < (_itemPos[0]-_itemPosCut)) {
            $('.nav').removeClass('active');
        };
    };
}
$(window).scroll(function(){
    navIcon();
});