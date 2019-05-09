// var win_W = $(window).width();                                      // 螢幕寬度
// var win_H = $(window).innerHeight();                                // 螢幕高度
// var win_Scroll = $(window).scrollTop();                             // 捲軸位置
// var thisPath = location.protocol + '//' +location.host;             // 網域

// $(window).resize(function (e) {
//     win_W = $(window).width();
//     win_Scroll = $(window).scrollTop();
// });

// $(window).scroll(function(){
//     win_Scroll = $(window).scrollTop();
// });

//-------------------------------------錨點平滑滾動效果
// $('a[href*=#]').click(function () {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var $target = $(this.hash);
//         $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
//         if ($target.length) {
//             var targetOffset = $target.offset().top;
//             $('html,body').animate({
//                     scrollTop: targetOffset
//                 },
//                 1000);
//             return false;
//         }
//     }
// });