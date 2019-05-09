// ========= header ==============================================================================================================================
Vue.component('header-area', {
    template: ` <header class="header" id="top">
                    <div class="header-info">
                        <div class="container clearfix">
                            <div class="header-logo">
                                <a href="http://www.ftft.com.tw" target="_blank" title="富蘭克林華美投信">
                                    <img src="images/logo.svg" alt="富蘭克林華美投信">
                                </a>
                            </div>
                            <div class="header-phone">
                                <a href="tel:0800-088-899" title="基金專線 0800-088-899">
                                    <span class="header-phone-tit">
                                        基金專線
                                    </span>
                                    0800-088-899
                                </a>
                            </div>
                        </div>
                    </div>
                </header>`,
});

// ========= footer ==============================================================================================================================
Vue.component('footer-area', {
    template: ` <footer class="footer">
                    <div class="footer-linkArea">
                        <div class="container">
                            <ul class="footer-linkArea-list">
                                <li>
                                    <a href="http://www.ftft.com.tw/CustomerServiceFAQ/EAccount" target="_blank" title="常見問題">
                                        常見問題
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ftft.com.tw/SpecialOffers/Index" target="_blank" title="最新優惠">
                                        最新優惠
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:webservice@ftftfund.com.tw" target="_blank" title="客戶服務信箱">
                                        客戶服務信箱
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ftft.com.tw" target="_blank" title="富蘭克林華美投信理財網">
                                        富蘭克林華美投信理財網
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.ftft.com.tw/Privacy" target="_blank" title="隱私權保護政策">
                                        隱私權保護政策
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-companyInfo">
                        <div class="container">
                            <div class="footer-companyInfo-top clearfix">
                                <a href="http://www.ftft.com.tw" class="footer-companyInfo-top-logo" title="富蘭克林華美投信">
                                    <img src="images/logo-white.svg" alt="富蘭克林華美投信">
                                </a>
                                <div class="footer-companyInfo-top-info">
                                    <div class="footer-companyInfo-top-info-companyName">
                                        富蘭克林華美證券投資信託股份有限公司
                                    </div>
                                    <div class="footer-companyInfo-top-info-number">
                                        107金管 投信新字第006號
                                    </div>
                                </div>
                                <div id="twcaseal" class="small">
                                    <img src="https://etrade.ftft.com.tw//ftft/img/small.gif">
                                </div>
                            </div>
                            <div class="footer-contactInfo">
                                <div class="footer-contactInfo-item clearfix">
                                    <div class="footer-contactInfo-item-name">台北總公司</div>
                                    <div class="footer-contactInfo-item-address">106台北市大安區忠孝東路四段87號12樓</div>
                                    <div class="footer-contactInfo-item-phone">電話：(02)2781-9599</div>
                                    <div class="footer-contactInfo-item-phone">傳真：(02)2781-8299</div>
                                </div>
                                <div class="footer-contactInfo-item clearfix">
                                    <div class="footer-contactInfo-item-name">新竹分公司</div>
                                    <div class="footer-contactInfo-item-address">302新竹縣竹北市自強南路8號11樓之5</div>
                                    <div class="footer-contactInfo-item-phone">電話：(03)668-1988</div>
                                    <div class="footer-contactInfo-item-phone">傳真：(03)657-9258</div>
                                </div>
                                <div class="footer-contactInfo-item clearfix">
                                    <div class="footer-contactInfo-item-name">台中分公司</div>
                                    <div class="footer-contactInfo-item-address">404台中市北區文心路4段208-1號11樓之1</div>
                                    <div class="footer-contactInfo-item-phone">電話：(04)2293-2988</div>
                                    <div class="footer-contactInfo-item-phone">傳真：(04)2295-6588</div>
                                </div>
                                <div class="footer-contactInfo-item clearfix">
                                    <div class="footer-contactInfo-item-name">台南分公司</div>
                                    <div class="footer-contactInfo-item-address">700臺南市中西區民生路二段307號12樓之1</div>
                                    <div class="footer-contactInfo-item-phone">電話：(06)225-3788</div>
                                    <div class="footer-contactInfo-item-phone">傳真：(06)225-3299</div>
                                </div>
                                <div class="footer-contactInfo-item clearfix">
                                    <div class="footer-contactInfo-item-name">高雄分公司</div>
                                    <div class="footer-contactInfo-item-address">802高雄市苓雅區海邊路31號27樓之1</div>
                                    <div class="footer-contactInfo-item-phone">電話：(07)269-3555</div>
                                    <div class="footer-contactInfo-item-phone">傳真：(07)269-3518</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            富蘭克林華美投信版權所有
                        </div>
                    </div>
                    <div class="footer-warning">
                        <div class="container">
                            <ul class="footer-warning-list">
                                <li>
                                    <span class="focus">
                                        本基金受益憑證以無實體發行，經理公司依有價證券集中保管帳簿劃撥作業辦法及集保機構之相關規定以帳簿劃撥方式交付受益憑證。本基金經金管會核准或申報生效，惟不表示本基金絕無風險。經理公司以往之經理績效不保證基金之最低投資收益；經理公司除盡善良管理人之注意義務外，不負責基金之盈虧，亦不保證最低之收益。【富蘭克林華美投信獨立經營管理】
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="topBtn">
                        <a href="#top">
                            <i class="fas fa-caret-up"></i>
                            TOP
                        </a>
                    </div>
                </footer>`,
});

// ========= 可搜尋select ==============================================================================================================================
// Vue.component('v-select', VueSelect.VueSelect);

var content = new Vue({
    el: '#content',
    data: {
        areaData: '',
        city: '',
        country: '',
        areaData2: '',
        city2: '',
        country2: '',
        areaData3: '',
        city3: '',
        country3: '',
        bankData: '',
        bank: '',
        bankBranch: '',
        bankSelected: '',
        bankBranchSelected: '',
        datepicker: '',
    },
    mounted() {
        this.$nextTick(() => {
            var win_Scroll = $(window).scrollTop(); // 捲軸位置

            $(window).resize(function () {
                win_Scroll = $(window).scrollTop();
            });

            $(window).scroll(function () {
                win_Scroll = $(window).scrollTop();
            });

            new WOW().init();

            //-------------------------------------浮動式top鍵
            $(window).bind('scroll resize', function () {
                var $this = $(this);
                var $this_Top = $this.scrollTop();

                //當高度小於100時，關閉區塊 
                if ($this_Top < 100) {
                    $('.topBtn').stop().css({
                        bottom: "-70px"
                    });
                }
                if ($this_Top > 100) {
                    $('.topBtn').stop().css({
                        bottom: "70px"
                    });
                }
            }).scroll();

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

            //-------------------------------------popup
            $('.openPopup').on('click', function(){
                var openPopup = $(this).attr('data-openpopup');
                $('[data-popup="'+ openPopup +'"]').addClass('show');
            });
            $('.popup-bg, .popup .closeBtn, .closePopup').on('click', function () {
                $(this).parents('.popup').removeClass('show');
            });

            //-------------------------------------lightbox
            $('.openLightbox').on('click', function () {
                var openLightbox = $(this).attr('data-openlightbox');
                $('[data-lightBox="' + openLightbox + '"]').addClass('show');
                $('body').css('overflow', 'hidden');
            });
            $('.lightBox-bg, .lightBox .closeBtn').on('click', function () {
                $(this).parents('.lightBox').removeClass('show');
                $('body').css('overflow', 'auto');
            });

            //-------------------------------------區塊pinTop文字
            if ( $('.nextBtnArea').length > 0) {
                var _itemName = $('.infoItem');                             // 區塊class name
                var _itemPos = [];
                var _itemLength = _itemName.length;
                var _itemPosCut = 120; // 要減掉的高度
                var n;
                var _nextBtnAreaPos = $('.nextBtnArea').offset().top;

                function navIcon() {
                    for (n = 0; n < _itemLength; n++) {
                        _itemPos[n] = _itemName.eq(n).offset().top;
                    };
                    for (n = 0; n < _itemLength; n++) {
                        if (win_Scroll >= (_itemPos[n] - _itemPosCut)) {
                            _itemName.eq(n).addClass('here').siblings().removeClass('here');
                        }
                        if (win_Scroll < (_itemPos[0] - _itemPosCut) || win_Scroll > (_nextBtnAreaPos - _itemPosCut)) {
                            _itemName.removeClass('here');
                        };
                    };
                }
                $(window).scroll(function () {
                    navIcon();
                });
            }

            //-------------------------------------假驗證
            // 詳閱條款
            var _provisionAreaAgree = $('.provisionArea-agree').length > 0;
            if (_provisionAreaAgree) {
                var _provisionAreaInfo_height = $('.provisionArea-info').innerHeight();
                var _provisionAreaInfo_height2 = $('.provisionArea-info div').innerHeight();
                var _provisionAreaInfo_scroll = $('.provisionArea-info').scrollTop();
                $('.button').hide().after(` <div class="button disable">
                                                <button>
                                                    下一步 <i class="fas fa-caret-right"></i>
                                                </button>
                                            </div>`);
                // $('#agree').attr('disabled','disabled');

                $('.provisionArea-info').scroll(function(){
                    _provisionAreaInfo_scroll = $('.provisionArea-info').scrollTop();
                    if ( (_provisionAreaInfo_scroll + _provisionAreaInfo_height) >= _provisionAreaInfo_height2 ) {
                        $('#agree').removeAttr('disabled');
                    };
                    // console.log((_provisionAreaInfo_scroll + _provisionAreaInfo_height), _provisionAreaInfo_height2);
                });
                $('.provisionArea-agree .checkbox').on('click', function () {
                    if ($('#agree').prop("checked")) {
                        $('.button.disable').remove();
                        $('.button').show();
                    }else {
                        if ( $('#agree').prop("disabled") == false ) {
                            $('.button').hide().after(` <div class="button disable">
                                                            <button>
                                                                下一步 <i class="fas fa-caret-right"></i>
                                                            </button>
                                                        </div>`);
                        };
                    }
                })
            }

            //-------------------------------------日期選擇
            var picker = new Pikaday({
                field: document.getElementById("datepicker"),
                format: "YYYY/MM/DD",
                theme: "customer",
                setDefaultDate: false,
                defaultDate: new Date("1980/01/01"),
                showMonthAfterYear: true,
                showDaysInNextAndPreviousMonths: true,
                enableSelectionDaysInNextAndPreviousMonths: true,
                yearSuffix: "年",
                yearRange: [1900, new Date().getFullYear()],
                minDate: new Date("1900/01/01"),
                maxDate: new Date(),
                i18n: {
                    previousMonth: "上月",
                    nextMonth: "下月",
                    months: [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月",
                        "11月",
                        "12月"
                    ],
                    weekdays: [
                        "星期一",
                        "星期二",
                        "星期三",
                        "星期四",
                        "星期五",
                        "星期六",
                        "星期日"
                    ],
                    weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
                }
            });
            // picker.show();
            
        })
    },
    computed: {
        sortData() {
            var newData = [];
            Object.keys(this.areaData).forEach((key, index) => {
                newData.push({
                    city: key,
                    country: this.areaData[key]
                });
            });
            return newData;
        },
        countries() {
            return this.city ? this.city.country : [];
        },
        sortData2() {
            var newData = [];
            Object.keys(this.areaData2).forEach((key, index) => {
                newData.push({
                    city2: key,
                    country2: this.areaData2[key]
                });
            });
            return newData;
        },
        countries2() {
            return this.city2 ? this.city2.country2 : [];
        },
        sortData3() {
            var newData = [];
            Object.keys(this.areaData3).forEach((key, index) => {
                newData.push({
                    city3: key,
                    country3: this.areaData3[key]
                });
            });
            return newData;
        },
        countries3() {
            return this.city3 ? this.city3.country3 : [];
        },
        bankSortData() {
            var newData = [];
            Object.keys(this.bankData).forEach((key, index) => {
                newData.push({
                    bank: key,
                    bankBranch: this.bankData[key]
                });bankData
            });
            return newData;
        },
        branches() {
            return this.bank ? this.bank.bankBranch : [];
        },
    },
});