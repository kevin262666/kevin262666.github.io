/**
 * Created by akai on 2017/5/30.
 */

window.addEventListener('load', function () {
    i();

});

function i() {
    inc(function () {
        r();
        mc();
        $(window).on('resize', function () {
            mc();
        })
    });
};

function cs() {
    var w = $(window).width();
    if (w > 1240) {
        return 'w';
    } else {
        return 'm';
    }
}

function mc() {
    var _smi = $('.header-right');
    var _b = $('.header-burger');
    if (cs() == 'm') {
        _b.off();
        _b.on('click', function (e) {
            e.preventDefault();
            _smi.toggle();
            _b.toggleClass('active');
            return;
        });
    } else {
        _smi.show();
    }
};

function inc(c) {
    var g = ['header', 'footer'];
    var runNumber = 0;
    var ap = function (d,cb) {
        $.get(d + '.html', function (data) {
            if (d == 'header') {
                $('body').prepend(data);
            }
            if (d == 'footer') {
                $('body').append(data);
            }
        })
            .done(function () {
                runNumber++;
                if(runNumber == g.length && typeof cb == 'function'){
                    cb();
                }





              //====================================================
              // onClick
              //====================================================

              $('.btn-fbShare').on('click', function() {
                var reUrl = location.href
                popWindow(shareFb(reUrl), "fbshare", 600, 500, "no", "center")
              })

              $('.btn-lineShare').on('click', function() {
                var lineURL = location.href
                var _text = '富蘭克林\n' + lineURL
                location.href = 'http://line.naver.jp/R/msg/text/?' + encodeURIComponent(_text)
              })




            })
            .fail(function () {
                return;
            });
    }
    for (var i = 0; i < g.length; i++) {
        ap(g[i],function () {
            if(typeof c == 'function'){
                c();
            }
        });
    }
}

function r() {
    var a = $("[data-r]"),
        b = function () {
            return !!(window.devicePixelRatio > 1 || window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)").matches)
        };
    if (JSON.parse(a.data('r'))) {
        a && b() && a.each(function () {
            var a = $(this).attr("src").replace("@1x", "@2x");
            $(this).attr("src", a)
        });
    }
};


function shareFb(_url) {
  return "http://www.facebook.com/share.php?u=" + _url
}

function popWindow(mypage, myname, w, h, scroll, pos) {
  if (pos == "random") {
    LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100
    TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100
  }
  if (pos == "center") {
    LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100
    TopPosition = (screen.height) ? (screen.height - h) / 2 : 100
  }
  else if ((pos != "center" && pos != "random") || pos == null) {
    LeftPosition = 0
    TopPosition = 20
  }
  settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no'
  window.open(mypage, myname, settings)
}