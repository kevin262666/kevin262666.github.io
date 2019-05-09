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

//-------------------------------------popup
$('.openPopup').click(function () {
    var _thisText = $(this).attr('data-popup');
    $('.popup-text').hide();
    $('.popup').fadeIn('fast');
    $('#' + _thisText).show();
});
$('.popup-close').click(function () {
    $('.popup').fadeOut('fast');
});

//-------------------------------------燈箱
$('.openLightBox').click(function(){
    var _item = $(this).attr('data-lightbox');
    $('#'+_item).fadeIn('fast');
});
$('.lightBox-close, .lightBox-bg').click(function(){
    $('.lightBox').fadeOut('fast');
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
        }if (win_Scroll < (_itemPos[0]-_itemPosCut)) {
            $('.nav').removeClass('active');
        };
    };

    if ( $('.nav.active').length > 0 ) {
        _navActiveWidth = $('.nav.active').innerWidth();
        _navActiveHeight = $('.nav.active').innerHeight();
        _navActivePosLeft = $('.nav.active').position().left;
        _navActivePosBottom = ($('.nav.active').position().top)+(_navActiveHeight);
        // _navActivePosTop = $('.nav.active').position().top;
        $('.navIcon').css({
            'left' : (_navActivePosLeft)+10,
            'top' : (_navActivePosBottom - 5),
            // 'top' : _navActivePosTop,
            'width' : (_navActiveWidth)-20
        });
        // console.log(_navActivePosLeft, _navActiveWidth);
    }else {
        $('.navIcon').removeAttr('style');
    };
}
$(window).scroll(function(){
    navIcon();
});
// console.log(_itemPos);

//-------------------------------------燈箱
var _lightBoxItem;
var _lightBoxContainer;

$('.openLightBox').click(function(){
    _lightBoxItem = $(this).attr('data-lightbox');
    $('#' + _lightBoxItem).fadeIn('fast');
    lightBoxHeight();
});
$('.lightBox-close, .lightBox-bg').click(function(){
    $('.lightBox').fadeOut('fast');
});

function lightBoxHeight() {
    _lightBoxContainer = $('#' + _lightBoxItem).find('.lightBox-container');

    if (_lightBoxContainer.find('.lightBox-container-info').innerHeight() >= (win_H / 10) * 8) {
        _lightBoxContainer.addClass('fixedHeight');
    }else {
        _lightBoxContainer.removeClass('fixedHeight');
    }
}

$(window).resize(function(){
    if (_lightBoxItem == undefined) {
        return;
    }else {
        lightBoxHeight();
    }
});

//-------------------------------------得獎名單
var _location = document.location.hostname;

function setWinList(_testShowHide, _formalShowHide, _number, _name, _phone, _mail, json, _week) {
    if (_location == 'www.ftft.com.tw' && _formalShowHide == 'no' || _testShowHide == 'no') {
        $('.winList' + _week).siblings('.winList-search').hide();
        $('.winList' + _week).hide().before('<div class="articleText">尚未公布，敬請期待</div >');
    } else {
        for (_n = 8; _n <= 408; _n++) {
            if (_n % 4 === 0) {  // 如果[_n]能被4整除
                // 放資料
                _number = json.feed.entry[_n + 1].gs$cell.$t;
                _name = json.feed.entry[_n + 2].gs$cell.$t;
                _phone = json.feed.entry[_n + 3].gs$cell.$t;
                _mail = json.feed.entry[_n + 4].gs$cell.$t;
                $('.winList' + _week).append('<div class="winList" data-phone="' + _phone +'">\
                                                <div class="winList-no">' + _number + '</div>\
                                                <div class="winList-name">' + _name + '</div>\
                                                <div class="winList-phone">' + _phone + '</div>\
                                                <div class="winList-mail">' + _mail + '</div>\
                                            </div>');
            } else {
                // 如果不能被整除  跳出這次回圈
                continue;
            };
        };

        setTimeout(function(){
            $(window).resize();
        },1000);
    };
};

$.getJSON("https://spreadsheets.google.com/feeds/cells/1sTspIvFgnKehbCBnu1KXWYy3ON8JxYUOjge4niYfW3I/1/public/values?alt=json", function (json) {
    var _testShowHide = json.feed.entry[2].gs$cell.$t;
    var _formalShowHide = json.feed.entry[4].gs$cell.$t;
    var _number;
    var _name;
    var _phone;
    var _mail;
    var _week = 1;
    setWinList(_testShowHide, _formalShowHide, _number, _name, _phone, _mail, json, _week);
});
$.getJSON("https://spreadsheets.google.com/feeds/cells/1sTspIvFgnKehbCBnu1KXWYy3ON8JxYUOjge4niYfW3I/2/public/values?alt=json", function (json) {
    var _testShowHide = json.feed.entry[2].gs$cell.$t;
    var _formalShowHide = json.feed.entry[4].gs$cell.$t;
    var _number;
    var _name;
    var _phone;
    var _mail;
    var _week = 2;
    setWinList(_testShowHide, _formalShowHide, _number, _name, _phone, _mail, json, _week);
});
$.getJSON("https://spreadsheets.google.com/feeds/cells/1sTspIvFgnKehbCBnu1KXWYy3ON8JxYUOjge4niYfW3I/3/public/values?alt=json", function (json) {
    var _testShowHide = json.feed.entry[2].gs$cell.$t;
    var _formalShowHide = json.feed.entry[4].gs$cell.$t;
    var _number;
    var _name;
    var _phone;
    var _mail;
    var _week = 3;
    setWinList(_testShowHide, _formalShowHide, _number, _name, _phone, _mail, json, _week);
});

// 搜尋
$('.winList-search input').on("change paste keyup", function(){
    var _val = $(this).val();

    if ( _val === '' ) {
        $('.winList').show();
        $(windos).resize();
    }else {
        $('.winList').show();
        $(this).parents('.winList-search').siblings('.winList-area').children('.winList:not("[data-phone*='+ _val +']")').hide();
    };
});