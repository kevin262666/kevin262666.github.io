// ========= 燈箱 ==============================================================================================================================
Vue.component("modal", {
    props: ["canClose"],
    data: function() {
        return {
            toggle: false,
            isFixedHeight: false,
        };
    },
    template: ` <transition name="modal">
					<div class="modal" v-if="toggle">
						<div class="modal-bg" @click="closeModal()" v-if="canClose == true"></div>
						<div class="modal-bg" v-if="canClose == false"></div>
						<div class="modal-container" :class="{fixedHeight: isFixedHeight}" ref="modalContainer" id="modalContainer">
							<div class="modal-close closeBtn" @click="closeModal()" v-if="canClose == true">
								<i class="fa fa-times" aria-hidden="true"></i>
							</div>
							<div class="modal-container-infoArea">
								<slot name="infoArea"></slot>
							</div>
						</div>
					</div>
				</transition>`,
    methods: {
        closeModal() {
            this.toggle = false;
        },
    },
});

// ========= vue版 slick ==============================================================================================================================
Vue.component("slick", {
    props: {
        options: {
            type: Object,
            default: function() {
                return {};
            },
        },
    },
    mounted() {
        this.create();
    },
    destroyed: function() {
        $(this.$el).slick("unslick");
    },
    methods: {
        create: function() {
            const $slick = $(this.$el);
            $slick.on("after-change", this.onAfterChange);
            $slick.on("before-change", this.onBeforeChange);
            $slick.on("breakpoint", this.onBreakpoint);
            $slick.on("destroy", this.onDestroy);
            $slick.on("edge", this.onEdge);
            $slick.on("init", this.onInit);
            $slick.on("reInit", this.onReInit);
            $slick.on("set-position", this.onSetPosition);
            $slick.on("swipe", this.onSwipe);
            $slick.on("lazyLoaded", this.onLazyLoaded);
            $slick.on("lazyLoadError", this.onLazyLoadError);
            $slick.slick(this.options);
        },
        destroy: function() {
            const $slick = $(this.$el);
            $slick.off("after-change", this.onAfterChange);
            $slick.off("before-change", this.onBeforeChange);
            $slick.off("breakpoint", this.onBreakpoint);
            $slick.off("destroy", this.onDestroy);
            $slick.off("edge", this.onEdge);
            $slick.off("init", this.onInit);
            $slick.off("reInit", this.onReInit);
            $slick.off("set-position", this.onSetPosition);
            $slick.off("swipe", this.onSwipe);
            $slick.off("lazyLoaded", this.onLazyLoaded);
            $slick.off("lazyLoadError", this.onLazyLoadError);
            $(this.$el).slick("unslick");
        },
        reSlick: function() {
            this.destroy();
            this.create();
        },
        next: function() {
            $(this.$el).slick("slickNext");
        },
        prev: function() {
            $(this.$el).slick("slickPrev");
        },
        pause: function() {
            $(this.$el).slick("slickPause");
        },
        play: function() {
            $(this.$el).slick("slickPlay");
        },
        goTo: function(index, dontAnimate) {
            $(this.$el).slick("slickGoTo", index, dontAnimate);
        },
        currentSlide: function() {
            return $(this.$el).slick("slickCurrentSlide");
        },
        add: function(element, index, addBefore) {
            $(this.$el).slick("slickAdd", element, index, addBefore);
        },
        remove: function(index, removeBefore) {
            $(this.$el).slick("slickRemove", index, removeBefore);
        },
        filter: function(filterData) {
            $(this.$el).slick("slickFilter", filterData);
        },
        unfilter: function() {
            $(this.$el).slick("slickUnfilter");
        },
        getOption: function(option) {
            $(this.$el).slick("slickGetOption", option);
        },
        setOption: function(option, value, refresh) {
            $(this.$el).slick("slickSetOption", option, value, refresh);
        },
        setPosition: function() {
            $(this.$el).slick("set-position");
        },
        // Events
        onAfterChange: function(event, slick, currentSlide) {
            this.$emit("after-change", event, slick, currentSlide);
        },
        onBeforeChange: function(event, slick, currentSlide, nextSlide) {
            this.$emit("before-change", event, slick, currentSlide, nextSlide);
        },
        onBreakpoint: function(event, slick, breakpoint) {
            this.$emit("breakpoint", event, slick, breakpoint);
        },
        onDestroy: function(event, slick) {
            this.$emit("destroy", event, slick);
        },
        onEdge: function(event, slick, direction) {
            this.$emit("edge", event, slick, direction);
        },
        onInit: function(event, slick) {
            this.$emit("init", event, slick);
        },
        onReInit: function(event, slick) {
            this.$emit("reInit", event, slick);
        },
        onSetPosition: function(event, slick) {
            this.$emit("set-position", event, slick);
        },
        onSwipe: function(event, slick, direction) {
            this.$emit("swipe", event, slick, direction);
        },
        onLazyLoaded: function(event, slick, image, imageSource) {
            this.$emit("lazyLoaded", event, slick, image, imageSource);
        },
        onLazyLoadError: function(event, slick, image, imageSource) {
            this.$emit("lazyLoadError", event, slick, image, imageSource);
        },
    },
    template: ` <div>
                    <slot></slot>
                </div>`,
});
var slickFunction = {
    data() {
        return {
            featuredFundOptions: {
                slidesToShow: 4,
                slidesToScroll: 4,
                autoplay: true,
                pauseOnHover: false,
                // dots: true,
                infinite: true,
                autoplaySpeed: 5000,
                speed: 500,
                adaptiveHeight: true,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ],
            },
        };
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            // console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            // console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            // console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            // console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            // console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            // console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            // console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            // console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            // console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            // console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
};

// ========= header ==============================================================================================================================
Vue.component('headerArea', {
    props: ['activeNum'],
    template: ` <header class="header">
                    <div class="container clearfix">
                        <div class="logo wow animate__animated animate__fadeInLeft">
                            <a href="index.html" :title="$root.$data.companyName">
                                <picture>
                                    <source media="(max-width: 991px)" srcset="images/logo.svg" />
                                    <img src="images/logo.png" :alt="$root.$data.companyName" />
                                </picture>
                            </a>
                        </div>

                        <nav class="navBar wow animate__animated animate__fadeIn" :class="{show: $root.$data.navbarShow}">
                            <ul>
                                <li :class="{'active': activeNum == 0}">
                                    <a href="index.html" title="首頁">
                                        首頁
                                    </a>
                                </li>
                                <li :class="{'active': activeNum == 1}">
                                    <a href="about.html" title="品牌故事">
                                        品牌故事
                                    </a>
                                </li>
                                <li :class="{'active': activeNum == 2}">
                                    <a href="investment.html" title="如何投資">
                                        如何投資
                                    </a>
                                </li>
                                <li :class="{'active': activeNum == 3}">
                                    <a href="news.html" title="最新消息">
                                        最新消息
                                    </a>
                                </li>
                                <li :class="{'active': activeNum == 4}">
                                    <a href="https://www.franklin.com.tw/Abroad/Index?reg=ie" title="基金總覽" target="_blank">
                                        基金總覽
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <!--手機menu按鍵-->
                        <div class="menuBtn" :class="{active: $root.$data.navbarShow}" @click="$root.toggleMobileNavbar()">
                            <span>
                            </span>
                            <span>
                            </span>
                            <span>
                            </span>
                            <span>
                            </span>
                            <span>
                            </span>
                        </div>
                    </div>
                </header>`,
});

// ========= footer ==============================================================================================================================
Vue.component('footerArea', {
    template: ` <div>
                    <footer class="footer">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 col-lg-7 col-md-24">
                                    <div class="footer-logo">
                                        <a href="index.html" :title="$root.$data.companyName">
                                            <picture>
                                                <source media="(max-width: 991px)" srcset="images/logo_white.svg" />
                                                <img src="images/logo_white.png" :alt="$root.$data.companyName" />
                                            </picture>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-17 col-md-24">
                                    <div class="footer-companyInfo">
                                        <div class="footer-companyInfo-companyName">
                                            <b>美盛證券投資顧問股份有限公司獨立經營管理</b>
                                        </div>
                                        電話：02 8722 1666<span v-if="$root.$data.windowWidth > 767"> | </span><br v-if="$root.$data.windowWidth < 768"/>地址：台北市110 信義路五段 7 號台北 101 大樓 55 樓之一 
                                        <br/>
                                        營業執照字號： (109)金管投顧新字第 035 號
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright">
                            <div class="container">
                                Copyright © 2020 FRANKLIN TEMPLETON INVESTMENTS All rights reserved.
                            </div>
                        </div>
                    </footer>

                    <div class="fixedLeftArrow">
                        <div class="fixedLeftArrow-text">scroll</div>
                        <div class="fixedLeftArrow-scrollLine"></div>
                        <div class="fixedLeftArrow-arrow">
                            <i class="fas fa-caret-down"></i>
                        </div>
                    </div>

                    <div class="topBtn">
                        <a href="#top" title="返回最上面" @click.prevent="$scrollTo('body')">
                            <span>
                                <i class="fas fa-caret-up"></i>
                                TOP
                            </span>
                        </a>
                    </div>
                </div>`,
});

var content = new Vue({
    el: "#content",
    mixins: [slickFunction],
    data: {
        companyName: "美盛證券投資顧問股份有限公司",
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        navbarShow: false,
        thisPath: location.protocol + "//" + location.host,
        activeNumber: "999",

        newsList: [
            {
                tit: `美盛旗下在台總代理基金移轉之重要公告`,
                link: `doc/public-annoucement-hp-15-03-2021.pdf`,
                blank: true,
            },
            {
                tit: `美盛防制洗錢及打擊資恐內部控制制度聲明書`,
                link: `doc/aml-internal-control.pdf`,
                blank: true,
            },
        ],
    },
    // components: {
    // },
    computed: {
        
    },
    mounted() {
        // this.signature();
        // this.addNoOpener();
        this.useJq();
        this.showTarget();
        this.topBtn();
        this.scrollMagic();

        // this.sameHeight("notSureWhatItIs2-item-bg");
        // setTimeout(() => {
        //     this.sameHeight('notSureWhatItIs2-item-bg');
        // }, 1000);

        $(window).resize(() => {
            this.windowWidth = $(window).innerWidth();
            this.windowHeight = $(window).innerHeight();

            // this.sameHeight('notSureWhatItIs2-item-bg');
        });

        // this.countToNumber1($('.assets1Num'), 1.5, '', 2500);
        // this.countToNumber2($('.assets2Num'), 1500000000000, '', 2500);
    },
    methods: {
        signature() {
            console.log(
                "%cMade by Captain%c2021/06",
                "color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
                "color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;"
            );
        },
        toggleModal(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
        },
        sameHeight(name) {
            let item = $("." + name),
                itemLeight = item.length,
                giftItemHeight = [];

            item.removeAttr("style");

            for (let n = 0; n < itemLeight; n++) {
                giftItemHeight[n] = item.eq(n).innerHeight();
            }
            let height = Math.max.apply(null, giftItemHeight);
            item.css("height", height);
        },
        addNoOpener() {
            // 資安用  target="_blank" 加 rel="nofollow me noopener noreferrer"
            var _linkHasTargetBlank = $('a[target="_blank"]');
            for (var n = 0; n < _linkHasTargetBlank.length; n++) {
                // 如果要連的網址跟這網站網域不同  加[rel="nofollow me noopener noreferrer"]
                _linkHasTargetBlank.eq(n).attr("href").indexOf(this.thisPath) ? _linkHasTargetBlank.eq(n).attr("rel", "nofollow me noopener noreferrer") : "";
            }
        },
        showTarget() {
            // 抓網址參數判斷要馬上顯示的區塊
            var url = location.href,
                i,
                openInfo = "";

            if (url.indexOf("?") != -1) {
                // 抓取網址參數判斷 --- Start
                function getUrlParams(url) {
                    // 回傳網址參數Object
                    var params = {};
                    (url + "?")
                    .split("?")[1]
                        .split("&")
                        .forEach(function(pair) {
                            pair = (pair + "=").split("=").map(decodeURIComponent);
                            if (pair[0].length) {
                                params[pair[0]] = pair[1];
                            }
                        });
                    return params;
                }

                var obj = getUrlParams(location.href);
                // 因為#hash會直接串在最後一個參數後面, 故需要取代處理
                if (Object.keys(obj).length && obj.hasOwnProperty("openInfo")) openInfo = obj.openInfo.indexOf("#") > -1 ? obj.openInfo.replace(location.hash, "") : obj.openInfo;
                // 抓取網址參數判斷 --- End

                // 2020-11-26 Jeffery 修正openInfo空值在jQuery的錯誤
                if (openInfo && $("#" + openInfo).length > 0) {
                    setTimeout(function() {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                    }, 500);
                    // setTimeout(()=>{
                    // 	this.$scrollTo('#' + openInfo);
                    // }, 500)
                }
                /*
                    例 /index.html?openInfo=q1
                */
            }
        },
        topBtn() {
            $(window)
                .bind("scroll resize", function() {
                    var $this = $(this);
                    var $this_Top = $this.scrollTop();

                    //當高度小於100時，關閉區塊
                    if ($this_Top < 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 400)",
                            opacity: 0,
                        });
                    }
                    if ($this_Top > 100) {
                        $(".topBtn").stop().css({
                            transform: "matrix(1, 0, 0, 1, 0, 0)",
                            opacity: 1,
                        });
                    }
                })
                .scroll();
        },
        toThousands(num) {
            // 錢加逗號
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1,`);
        },
        delHtmlTag(info) {
            // 剔除htmlCode 只留文字
            String.prototype.stripHTML = function() {
                var reTag = /<(?:.|\s)*?>/g;
                return this.replace(reTag, "");
            };
            return info.stripHTML();
        },
        countToNumber1(element, number, suffix, duration) {
            // 數字遞增效果 - 小數點第一位
            var roundX = function(val, precision) {
                return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
            }
            $({ count: parseInt(element.text().split("+")[0].replace(/\,/g, "")) }).animate({ count: number }, {
                duration: duration ? duration : 1000,
                easing: "swing",
                step: function(now) {
                    element.text((roundX(now, 1) + suffix).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                },
                complete: function() {
                    // countingFromZero = false;
                },
            });
        },
        countToNumber2(element, number, suffix, duration) {
            // 數字遞增效果
            $({ count: parseInt(element.text().split("+")[0].replace(/\,/g, "")) }).animate({ count: number }, {
                duration: duration ? duration : 1000,
                easing: "swing",
                step: function(now) {
                    element.text((Math.floor(now) + suffix).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                },
                complete: function() {
                    // countingFromZero = false;
                },
            });
        },

        //-------------------------------------navbar
        toggleMobileNavbar() {
            console.log('testset')
            this.menuBtnActive === false ? (this.menuBtnActive = true) : (this.menuBtnActive = false);
            this.navbarShow === false ? (this.navbarShow = true) : (this.navbarShow = false);
        },
        hideMobileNavbar() {
            this.menuBtnActive = false;
            this.navbarShow = false;
        },
        navClick(no, hashName) {
            this.navbarShow = false;
            this.$scrollTo("#" + hashName);
        },

        //-------------------------------------使用jq區塊
        useJq() {
            new WOW().init();
        },

        //-------------------------------------scrollMagic
        scrollMagic() {
        },
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
        },
        screenHeight(val) {
            this.screenHeight = val;
        },
        windowWidth(val) {
            this.windowWidth = val;
        },
        windowHeight(val) {
            this.windowHeight = val;
        },
    },
});