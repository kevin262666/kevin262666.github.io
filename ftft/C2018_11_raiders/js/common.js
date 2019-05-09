var win_W = $(window).width();                                      // 螢幕寬度
var win_H = $(window).innerHeight();                                // 螢幕高度
var win_Scroll = $(window).scrollTop();                             // 捲軸位置

$(window).resize(function (e) {
    win_W = $(window).width();
    win_H = $(window).innerHeight();
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
            $('.topBtn').stop().animate({bottom:"60px"});
        }
    }).scroll();
});

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
        } if (win_Scroll < (_itemPos[0] - _itemPosCut)) {
            $('.nav').removeClass('active');
        };
    };
}
$(window).scroll(function () {
    navIcon();
});

//-------------------------------------攻略目標 等高
var sameHeight_item_1 = $('.target-item-text-1');
var sameHeight_item_1_height = [];

var sameHeight_item_2 = $('.target-item-text-2');
var sameHeight_item_2_height = [];

function sameHeight_1() {
    sameHeight_item_1.removeAttr('style');
    var height;
    for (n = 0; n < sameHeight_item_1.length; n++) {
        sameHeight_item_1_height[n] = sameHeight_item_1.eq(n).innerHeight();
    };
    height = Math.max.apply(null, sameHeight_item_1_height);
    sameHeight_item_1.css('height', height);
    // console.log(sameHeight_item_height, height);
}

function sameHeight_2() {
    sameHeight_item_2.removeAttr('style');
    var height;
    for (n = 0; n < sameHeight_item_2.length; n++) {
        sameHeight_item_2_height[n] = sameHeight_item_2.eq(n).innerHeight();
    };
    height = Math.max.apply(null, sameHeight_item_2_height);
    sameHeight_item_2.css('height', height);
    // console.log(sameHeight_item_height, height);
}

sameHeight_1();
sameHeight_2();

$(window).resize(function () {
    setTimeout(function () {
        sameHeight_1();
        sameHeight_2();
    }, 500);
});