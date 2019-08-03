// ========= header ==============================================================================================================================
Vue.component('headerArea', {
    template: ` <header class="header">
                    <div class="colorLine" id="top">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="container">

                        <div class="logo">
                            <a href="https://www.firstbank.com.tw/" target="_blank" title="第一銀行">
                                <img src="images/logo.png" alt="第一銀行">
                            </a>
                        </div>
                        <div class="mainName">
                            <a href="index.html">
                                薪轉戶專區
                            </a>
                        </div>
                        <div class="topIcon-area">
                            <div class="topIcon">
                                <a href="member.html">
                                    <div class="topIcon-qty">1</div>
                                    <i class="far fa-bell"></i>
                                </a>
                            </div>
                            <div class="topIcon">
                                <a href="collection.html">
                                    <i class="far fa-heart"></i>
                                </a>
                            </div>
                            <div class="topIcon">
                                <a href="member.html">
                                    <i class="far fa-user"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </header>`,
});

// ========= navbar ==============================================================================================================================
Vue.component('navbarArea', {
    props: ['now'],
    template: ` <nav class="banner-navbar">
                    <div class="nav" :class="now == 1 ? 'active' : ''">
                        <a href="latestOffers.html">
                            VIP優惠
                        </a>
                    </div>
                    <div class="nav" :class="now == 2 ? 'active' : ''">
                        <a href="deposit.html">
                            外匯
                        </a>
                    </div>
                    <div class="nav" :class="now == 3 ? 'active' : ''">
                        <a href="loan.html">
                            貸款
                        </a>
                    </div>
                    <div class="nav" :class="now == 4 ? 'active' : ''">
                        <a href="insurance.html">
                            保險
                        </a>
                    </div>
                    <div class="nav" :class="now == 5 ? 'active' : ''">
                        <a href="creditCard.html">
                            信用卡
                        </a>
                    </div>
                    <div class="nav" :class="now == 6 ? 'active' : ''">
                        <a href="collection.html">
                            追蹤清單
                        </a>
                    </div>
                    <div class="nav" :class="now == 7 ? 'active' : ''">
                        <a href="coupon.html">
                            折價券
                        </a>
                    </div>
                    <div class="nav" :class="now == 8 ? 'active' : ''">
                        <a href="member.html">
                            會員中心
                        </a>
                    </div>
                </nav>`,
});

// ========= footer ==============================================================================================================================
Vue.component('footerCopyright', {
    template: ` <footer class="footer">
                    <div class="colorLine">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div class="container clearfix">
                        <div class="footer-copyright">
                            © 第一商業銀行股份有限公司 <br/>First Commercial Bank
                        </div>
                        <div class="footer-content">
                            24小時服務專線：<br/>(02)2181-1111 或 0800-031-111(限市話)
                        </div>
                        <div class="footer-socialMedia">
                            <div class="footer-socialMedia-link">
                                <a href="https://www.facebook.com/pg/firsthaka/" target="_blank" title="facebook">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </div>
                            <div class="footer-socialMedia-link">
                                <a href="https://timeline.line.me/user/_dW1ZzmUBqoshC6wYHZZUuJBpYjMe8434Df3ShHk" target="_blank" title="LINE">
                                    <i class="fab fa-line"></i>
                                </a>
                            </div>
                            <div class="footer-socialMedia-link">
                                <a href="https://www.instagram.com/firstbank.tw/" target="_blank" title="instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>`,
})
Vue.component('topBtn', {
    template: ` <div class="topBtn">
                    <a href="#top">
                        <i class="fas fa-angle-up"></i>
                        TOP
                    </a>
                </div>`,
})
Vue.component('footerArea', {
    data: function () {
        return {
            mobileMenuShow: false,
        }
    },
    props: ['path'],
    template: ` <div>
                    <footer-copyright></footer-copyright>
                    <top-btn></top-btn>

                    <div class="pinBottom-mask" v-if="mobileMenuShow" @click="toggleMobileMenu();"></div>
                    <div class="pinBottom">
                        <div class="container">
                            <div class="pinBottom-item-area">
                                <div class="pinBottom-item">
                                    <a :href="[path==undefined || path=='' ? '' : '../'] + 'index.html'" title="首頁">
                                        <i class="fas fa-home"></i>
                                        <div class="pinBottom-item-tit">
                                            首頁
                                        </div>
                                    </a>
                                </div>
                                <div class="pinBottom-item">
                                    <a href="#" title="回饋意見">
                                        <i class="far fa-envelope"></i>
                                        <div class="pinBottom-item-tit">
                                            回饋意見
                                        </div>
                                    </a>
                                </div>
                                <div class="pinBottom-item">
                                    <a href="javascript:void(0)" title="功能選單" @click="toggleMobileMenu();">
                                        <i class="fas fa-bars"></i>
                                        <div class="pinBottom-item-tit">
                                            功能選單
                                        </div>
                                    </a>
                                </div>
                                <div class="pinBottom-item">
                                    <a :href="[path==undefined || path=='' ? '' : '../'] + 'collection.html'" title="追蹤清單">
                                        <i class="far fa-heart"></i>
                                        <div class="pinBottom-item-tit">
                                            追蹤清單
                                        </div>
                                    </a>
                                </div>
                                <div class="pinBottom-item">
                                    <a :href="[path==undefined || path=='' ? '' : '../'] + 'member.html'" title="會員中心">
                                        <i class="fas fa-user"></i>
                                        <div class="pinBottom-item-tit">
                                            會員中心
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="pinBottom-menu" v-if="mobileMenuShow">
                            <div class="pinBottom-menu-close" @click="toggleMobileMenu();">
                                <i class="fas fa-times"></i>
                            </div>
                            <div class="pinBottom-menu-navbar">
                                <ul>
                                    <li>
                                        <a :href="[path==undefined || path=='' ? '' : '../'] + 'latestOffers.html'" title="VIP優惠">
                                            VIP優惠
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="[path==undefined || path=='' ? '' : '../'] + 'deposit.html'" title="外匯">
                                            外匯
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="[path==undefined || path=='' ? '' : '../'] + 'loan.html'" title="貸款">
                                            貸款
                                        </a>
                                    </li>
                                    <li>
                                        <a :href="[path==undefined || path=='' ? '' : '../'] + 'insurance.html'" title="保險">
                                            保險
                                        </a>
                                    </li>
                                    <li class="">
                                        <a :href="[path==undefined || path=='' ? '' : '../'] + 'creditCard.html'" title="信用卡">
                                            信用卡
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`,
    methods: {
        //-------------------------------------手機版選單
        toggleMobileMenu() {
            function show(_this) {
                _this.mobileMenuShow = true;
                $('html, body').addClass('noScroll');
            };
            function hide(_this) {
                _this.mobileMenuShow = false;
                $('html, body').removeClass('noScroll');
            };
            this.mobileMenuShow === false ? show(this) : hide(this);
        },
    },
});
Vue.component('footerArea_2', {
    props: ['path'],
    template: ` <div>
                    <footer-copyright></footer-copyright>
                    <top-btn></top-btn>
                </div>`,
});

// ========= 燈箱 ==============================================================================================================================
Vue.component('light-box', {
    data: function () {
        return {
            toggle: false,
            isFixedHeight: false,
        }
    },
    template: `<transition>
                    <div class="lightBox" v-if="toggle">
                        <div class="lightBox-bg" @click="closeLightBox()"></div>
                        <div class="lightBox-container" :class="{fixedHeight: isFixedHeight}" ref="lightBoxContainer" id="lightBoxContainer">
                            <div class="lightBox-close closeBtn" @click="closeLightBox()">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                            <div class="lightBox-container-infoArea">
                                <slot name="infoArea"></slot>
                            </div>
                        </div>
                    </div>
                </transition>`,
    methods: {
        closeLightBox() {
            this.toggle = false;
        }
    },
});

// ========= 信用額度調整 ==============================================================================================================================
Vue.component('increaseLimitHead', {
    template: ` <div>
                    <header class="header type2">
                        <div class="colorLine" id="top">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div class="container">
                            <div class="logo">
                                <a href="https://www.firstbank.com.tw/" target="_blank" title="第一銀行">
                                    <img src="../images/logo.png" alt="第一銀行">
                                </a>
                            </div>
                            <div class="mainName">
                                <span>
                                    信⽤額度調升申請
                                </span>
                            </div>
                        </div>
                    </header>
                    <div class="increaseLimit-headBg">
                        <img src="../images/increaseLimitHeaderBottom.png" alt="">
                    </div>
                </div>`,
});

// ========= 警語 ==============================================================================================================================
Vue.component('warningArea', {
    template: ` <section class="warningArea">
                    <div class="container">
                        <div class="warningArea-tit">
                            謹慎理財 信用至上
                        </div>
                        <div class="warningArea-text">
                            差別循環信用年利率為一銀放款基準利率+2.31%～9.31%｜差別循環信用年利率依電腦評定，最高為15%．利率之基準日為2015年9月1日｜預借現金手續費：預借金額X3.5%（最低新臺幣100元/3.5美元/400日圓/3歐元計）．其他收費項目及權益請上網查詢。
                        </div>
                    </div>
                </section>`,
});

// ========= step ==============================================================================================================================
Vue.component('stepArea', {
    props: ['otherClass'],
    template: ` <section class="stepArea wow fadeInUp" :class="otherClass">
                    <div class="container">
                        <div class="stepArea-content">
                            <div class="stepArea-content-left">
                                <div class="stepItem">
                                    <div class="stepItem-no" title="身分認證">
                                        <span>1</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        身分認證
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="填寫申請資料">
                                        <span>2</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        填寫申請資料
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="上傳檔案">
                                        <span>3</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        上傳檔案
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="確認資料">
                                        <span>4</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        確認資料
                                    </div>
                                </div>
                            </div>
                            <div class="stepArea-content-right">
                                <div class="stepItem">
                                    <div class="stepItem-no" title="填寫申請資料">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="上傳檔案">
                                        <span>3</span>
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="確認資料">
                                        <span>4</span>
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="申請完成">
                                        <span>5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`,
});
Vue.component('stepArea_2', {
    props: ['otherClass'],
    template: ` <section class="stepArea wow fadeInUp" :class="otherClass">
                    <div class="container">
                        <div class="stepArea-content">
                            <div class="stepArea-content-left">
                                <div class="stepItem">
                                    <div class="stepItem-no" title="身分認證">
                                        <span>1</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        身分認證
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="填寫申請資料">
                                        <span>2</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        填寫申請資料
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="確認資料">
                                        <span>3</span>
                                        <i class="fas fa-check"></i>
                                    </div>
                                    <div class="stepItem-text">
                                        確認資料
                                    </div>
                                </div>
                                <div class="stepItem"></div>
                            </div>
                            <div class="stepArea-content-right">
                                <div class="stepItem">
                                    <div class="stepItem-no" title="填寫申請資料">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="確認資料">
                                        <span>3</span>
                                    </div>
                                </div>
                                <div class="stepItem">
                                    <div class="stepItem-no" title="申請完成">
                                        <span>4</span>
                                    </div>
                                </div>
                                <div class="stepItem"></div>
                            </div>
                        </div>
                    </div>
                </section>`,
});

var content = new Vue({
    el: '#content',
    data: {
        name: '第一銀行薪轉戶專區',
        screenWidth: document.body.clientWidth,
        windowWidth: 0,
        windowHeight: 0,
        menuBtnActive: false,
        navbarShow: false,
    },
    mounted() {
        window.onload = () => {
            this.sameHeight('indexLatestOffers-item-bg');
            this.sameHeight('applyConditions-item-bg');
        }
        this.useJq();

        $(window).resize(()=>{
            setTimeout(()=>{
                this.sameHeight('indexLatestOffers-item-bg');
                this.sameHeight('applyConditions-item-bg');
            }, 300)
        });

        this.$nextTick(() => {
            //-------------------------------------WOW + scrollspy
            // Helper function for add element box list in WOW
            // WOW.prototype.addBox = function (element) {
            //     this.boxes.push(element);
            // };

            // Init WOW.js and get instance
            // var wow = new WOW();
            // wow.init();

            // Attach scrollSpy to .wow elements for detect view exit events,
            // then reset elements and add again for animation
            // $('.wow').on('scrollSpy:exit', function () {
            //     $(this).css({
            //         'visibility': 'hidden',
            //         'animation-name': 'none'
            //     }).removeClass('animated');
            //     wow.addBox(this);
            // }).scrollSpy();
        });
        
    },
    methods: {
        toggleLightBox(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
        },
        sameHeight(name) {
            let item = $('.' + name),
                itemLeight = item.length,
                giftItemHeight = [];

            item.removeAttr('style');

            for (let n = 0; n < itemLeight; n++) {
                giftItemHeight[n] = item.eq(n).innerHeight();
            };
            let height = Math.max.apply(null, giftItemHeight);
            item.css('height', height);
        },

        //-------------------------------------使用jq區塊
        useJq() {

            var wow = new WOW();
            wow.init();

            var win_W = $(window).width();                                      // 螢幕寬度
            var win_H = $(window).innerHeight();                                // 螢幕高度
            var win_Scroll = $(window).scrollTop();                             // 捲軸位置
            var thisPath = location.protocol + '//' + location.host;             // 網域
            var n;

            $(window).resize(function (e) {
                win_W = $(window).width();
                win_Scroll = $(window).scrollTop();
            });

            $(window).scroll(function () {
                win_Scroll = $(window).scrollTop();
            });

            //-------------------------------------資安用  target="_blank" 加 rel="nofollow me noopener noreferrer"
            function addNoOpener() {
                var _linkHasTargetBlank = $('a[target="_blank"]');
                for (n = 0; n < _linkHasTargetBlank.length; n++) {
                    // 如果要連的網址跟這網站網域不同  加[rel="nofollow me noopener noreferrer"]
                    _linkHasTargetBlank.eq(n).attr('href').indexOf(thisPath) ? _linkHasTargetBlank.eq(n).attr('rel', 'nofollow me noopener noreferrer') : '';
                };
            }
            addNoOpener();

            //-------------------------------------錨點平滑滾動效果
            $('a[href*="#"]').click(function () {
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
            $(window).bind('scroll resize', function () {
                var $this = $(this);
                var $this_Top = $this.scrollTop();

                //當高度小於100時，關閉區塊 
                if ($this_Top < 100) {
                    $('.topBtn').removeClass('show');
                }
                if ($this_Top > 100) {
                    $('.topBtn').addClass('show');
                }
            }).scroll();

            //-------------------------------------slick輪播
            $('.slickSlider').slick({
                arrows: true,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                // autoplay: false,
                autoplaySpeed: 5000,
                // fade: true,
                // responsive: [
                //     {
                //         breakpoint: 768,
                //         settings: {
                //             autoplay: true,
                //             autoplaySpeed: 5000,
                //             dots: true
                //         }
                //     },
                // ]
            });
            $('.slickSlider-arrow-left').on('click', () => {
                $('.slick-prev').click();
            });
            $('.slickSlider-arrow-right').on('click', () => {
                $('.slick-next').click();
            });

            // 信用卡
            $('.creditCardSlider-content-slider').slick({
                arrows: true,
                slidesToScroll: 4,
                dots: true,
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 4,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToScroll: 1,
                            slidesToShow: 1,
                            // centerMode: true,
                        }
                    },
                ]
            });
            $('.creditCardSlider-content-arrow-left').on('click', () => {
                $('.slick-prev').click();
            });
            $('.creditCardSlider-content-arrow-right').on('click', () => {
                $('.slick-next').click();
            });

            //-------------------------------------popup
            $('.openPopup').on('click', function () {
                var openPopup = $(this).attr('data-openpopup');
                $('[data-popup="' + openPopup + '"]').addClass('show');
            });
            $('.popup-bg, .popup .closeBtn, .closePopup').on('click', function () {
                $(this).parents('.popup').removeClass('show');
            });

            //-------------------------------------tab
            $('.tabArea .tabBtn a').on('click', function(){
                var n = $(this).parent('.tabBtn').index();
                $(this).parent('.tabBtn').addClass('active').siblings('.tabBtn').removeClass('active');
                $(this).parents('.tabArea').find('.tabContent').eq(n).addClass('show').siblings().removeClass('show');
            });

        },

        contactWay() {
            if (document.getElementById("htmlContactMethodMobile").selected) {
                $('.phoneContact, .emailContact').toggleClass('hide');
            }else {
                $('.phoneContact, .emailContact').toggleClass('hide');
            }
        },

        reason() {
            if (document.getElementById("otherReason").selected) {
                $('.formArea-item.reason').addClass('showOtherInput');
            }else {
                $('.formArea-item.reason').removeClass('showOtherInput');
            }
        },

    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val
        },
    },
});