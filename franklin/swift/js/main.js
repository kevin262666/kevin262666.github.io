// ========= footer ==============================================================================================================================
// footer
Vue.component("footerArea", {
    template: ` <footer class="footer">
					<div class="container">
						<div class="footer-header clearfix">
							<div class="footer-header-left">
								<div class="footer-header-left-logo">
									<a href="http://www.franklin.com.tw/" target="_blank" title="富蘭克林證券投顧">
										<img src="https://event.franklin.com.tw/commonResources/images/footer-logo.png" alt="富蘭克林證券投顧">
									</a>
								</div>
								<div class="footer-header-left-companyName">
									富蘭克林證券投資顧問(股)公司
								</div>
								<div class="footer-header-left-idCode">
									101年金管投顧新字第025號 | 富蘭克林證券投顧獨立經營管理
								</div>
							</div>
							<div class="footer-header-right">
								<ul class="footer-header-right-socialMedia">
									<li>
										<a href="https://www.facebook.com/franklin.taiwan/" target="_blank" title="粉絲團">
											<i class="fab fa-facebook-square"></i>
										</a>
									</li>
									<li>
										<a href="http://line.naver.jp/ti/p/%40franklin" target="_blank" title="Line">
											<i class="fab fa-line"></i>
										</a>
									</li>
									<li>
										<a href="https://www.youtube.com/user/franklin0800885888" target="_blank" title="youtube">
											<i class="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
								<div class="footer-header-right-phone">
									<div class="footer-header-right-phone-tit">
										國民理財專線：
									</div>
									<div class="footer-header-right-phone-phone">
										<a href="tel:0800-885-888" title="國民理財專線">
											0800-885-888
										</a>
									</div>
								</div>
								<div class="footer-header-right-address">
									106台北市大安區忠孝東路四段87號8樓
								</div>
								<div class="footer-header-right-telAndFax">
									電話: (02)2781-0088　傳真: (02)2781-7788
								</div>
							</div>
						</div>
						<slot name="warning">
							<footer-warning></footer-warning>
						</slot>
						<div class="copyright">
							<div>
								版權所有富蘭克林證券投顧  FRANKLIN TEMPLETON INVESTMENTS
							</div>
						</div>
					</div>
				</footer>`,
});
Vue.component("footer-warning", {
    data: function () {
        return {
            list: [
                {
                    info: `本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。`,
                },
                {
                    info: `本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。`,
                },
                {
                    info: `<b class="focus">由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。</b>`,
                },
                {
                	info: `由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。`
                },
                {
                 	info: `投資中國比重指掛牌於大陸及香港地區中國企業之投資比重，依規定境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，直接及間接投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。`
                },
                {
                 	info: `基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原本基金之配息來源含股息收益，配息也可能從基金資本中支付。境外基金機構針對本基金配息政策設有相關控管機制，視實際收到股息收益及評估未來市場狀況以決定當期配息水準，惟配息發放並非保證，配息金額並非不變，亦不保證配息率水準。`
                },
                {
                    info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。`
                },
                // {
                //  	info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。`
                // },
            ],
        };
    },
    template: `<div class="footer-warning">
                    <ul>
                        <li v-for="(item, index) in list" :key="index" v-html="item.info"></li>
                    </ul>
                </div>`,
});

// ========= 燈箱 ==============================================================================================================================
Vue.component("modal", {
    props: ["canClose"],
    data: function () {
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
            default: function () {
                return {};
            },
        },
    },
    mounted() {
        this.create();
    },
    destroyed: function () {
        $(this.$el).slick("unslick");
    },
    methods: {
        create: function () {
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
        destroy: function () {
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
        reSlick: function () {
            this.destroy();
            this.create();
        },
        next: function () {
            $(this.$el).slick("slickNext");
        },
        prev: function () {
            $(this.$el).slick("slickPrev");
        },
        pause: function () {
            $(this.$el).slick("slickPause");
        },
        play: function () {
            $(this.$el).slick("slickPlay");
        },
        goTo: function (index, dontAnimate) {
            $(this.$el).slick("slickGoTo", index, dontAnimate);
        },
        currentSlide: function () {
            return $(this.$el).slick("slickCurrentSlide");
        },
        add: function (element, index, addBefore) {
            $(this.$el).slick("slickAdd", element, index, addBefore);
        },
        remove: function (index, removeBefore) {
            $(this.$el).slick("slickRemove", index, removeBefore);
        },
        filter: function (filterData) {
            $(this.$el).slick("slickFilter", filterData);
        },
        unfilter: function () {
            $(this.$el).slick("slickUnfilter");
        },
        getOption: function (option) {
            $(this.$el).slick("slickGetOption", option);
        },
        setOption: function (option, value, refresh) {
            $(this.$el).slick("slickSetOption", option, value, refresh);
        },
        setPosition: function () {
            $(this.$el).slick("set-position");
        },
        // Events
        onAfterChange: function (event, slick, currentSlide) {
            this.$emit("after-change", event, slick, currentSlide);
        },
        onBeforeChange: function (event, slick, currentSlide, nextSlide) {
            this.$emit("before-change", event, slick, currentSlide, nextSlide);
        },
        onBreakpoint: function (event, slick, breakpoint) {
            this.$emit("breakpoint", event, slick, breakpoint);
        },
        onDestroy: function (event, slick) {
            this.$emit("destroy", event, slick);
        },
        onEdge: function (event, slick, direction) {
            this.$emit("edge", event, slick, direction);
        },
        onInit: function (event, slick) {
            this.$emit("init", event, slick);
        },
        onReInit: function (event, slick) {
            this.$emit("reInit", event, slick);
        },
        onSetPosition: function (event, slick) {
            this.$emit("set-position", event, slick);
        },
        onSwipe: function (event, slick, direction) {
            this.$emit("swipe", event, slick, direction);
        },
        onLazyLoaded: function (event, slick, image, imageSource) {
            this.$emit("lazyLoaded", event, slick, image, imageSource);
        },
        onLazyLoadError: function (event, slick, image, imageSource) {
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
				responsive: [
					{
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

// ========= 公版banner ==============================================================================================================================
Vue.component('commonVersionBanner', {
    props: ['title', 'alt'],
    template: ` <section class="commonVersionBanner">
                    <h1 :title="title">
                        {{title}}
                    </h1>
                    <picture>
                        <source media="(max-width: 767px)" srcset="images/banner-mobile-1.jpg">
                        <img src="images/banner-pc-1.jpg" :alt="alt" class="commonVersionBanner-kv">
                    </picture>
                </section>`,
});

var content = new Vue({
    el: "#content",
    mixins: [slickFunction],
    data: {
        name: "富蘭克林證券投顧",
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        navbarShow: false,
        thisPath: location.protocol + "//" + location.host,
        activeNumber: "999",

    },
    // components: {
    // },
    mounted() {
        // this.signature();
        // this.addNoOpener();
        this.useJq();
        this.showTarget();
        this.topBtn();
        // this.scrollMagic();

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

        window.addEventListener('mousemove', e => {
            this.setMoneyPos();
        });
        window.addEventListener('deviceorientation', e => {
            this.setMoneyPos2();
        });
    },
    methods: {
        signature() {
            console.log(
                "%cMade by Captain%c2022/04",
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
                        .forEach(function (pair) {
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
                    setTimeout( ()=> {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                        console.log(openInfo, targetOffset)
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
                .bind("scroll resize", function () {
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
            String.prototype.stripHTML = function () {
                var reTag = /<(?:.|\s)*?>/g;
                return this.replace(reTag, "");
            };
            return info.stripHTML();
        },
        countToNumber1(element, number, suffix, duration) {
            // 數字遞增效果 - 小數點第一位
            var roundX = function (val, precision) {
                return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, (precision || 0));
            }
            $({ count: parseInt(element.text().split("+")[0].replace(/\,/g, "")) }).animate(
                { count: number },
                {
                    duration: duration ? duration : 1000,
                    easing: "swing",
                    step: function (now) {
                        element.text((roundX(now, 1) + suffix).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    },
                    complete: function () {
                        // countingFromZero = false;
                    },
                }
            );
        },
        countToNumber2(element, number, suffix, duration) {
            // 數字遞增效果
            $({ count: parseInt(element.text().split("+")[0].replace(/\,/g, "")) }).animate(
                { count: number },
                {
                    duration: duration ? duration : 1000,
                    easing: "swing",
                    step: function (now) {
                        element.text((Math.floor(now) + suffix).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    },
                    complete: function () {
                        // countingFromZero = false;
                    },
                }
            );
        },

        //-------------------------------------navbar
        toggleMobileNavbar() {
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
            AOS.init();
        },

        //-------------------------------------scrollMagic
        scrollMagic() {
            // // init controller
            // let controller = new ScrollMagic.Controller(),
            //     bannerTit = new TimelineMax();
            // // howToPickTimeLine = new TimelineMax(),

            // new ScrollMagic.Scene({
            //     triggerElement: ".banner",
            //     duration: 400,
            //     // offset: 0,
            // })
            //     .setTween(bannerTit)
            //     // .addIndicators({name: "1 (duration: 0)"})
            //     .addTo(controller);

            // bannerTit.add(
            //     TweenMax.from(".banner-tit-sTit", 5, {
            //         x: 50,
            //         y: -80,
            //     })
            // );
            TweenMax.from('.banner-man', 0.3, {opacity: 0, delay: 0, x: -200, y: 420});
            TweenMax.to(".banner-man", 0.3, {x: 10, y: 10, delay: 0.3});
            TweenMax.from('.banner-tit', 0.3, {opacity: 0, delay: 0.3});
            TweenMax.from('.banner-tit-sTit', 0.3, {delay: 0.3, x: -300, y: 20});
            TweenMax.from('h1', 0.3, {opacity: 0, delay: 0.5, x: -300, y: 20});

            TweenMax.to('.banner-man', 1, { x: 0, y: 0, repeat: -1, yoyo: true, delay: 0.6 });
        },

        setMoneyPos() {
            let e = window.event;

            let posX = e.clientX;
            let posY = e.clientY;
            $('.banner-tattoo').css({
                'transform' : 'translate(-' + posX/40 + 'px, -' + posY/40 + 'px)',
            });
            $('.banner-kv').css({
                'transform' : 'translate(' + posX/40 + 'px, ' + posY/40 + 'px)',
            });
            // $('.kv-circle').css({
            //     'transform' : 'translate(-' + posX/100 + 'px)',
            // });
            // $('.kv-springCouplets, .kv-lantern img').css({
            //     'transform' : 'translate(-' + posX/80 + 'px)',
            // });
            // $('.kv-fan img, .kv-ferry').css({
            //     'transform' : 'translate(-' + posX/40 + 'px)',
            // });
            // $('.kv-gift').css({
            //     'transform' : 'translate(-' + posX/40 + 'px)',
            // });
            // $('.kv-ingots').css({
            //     'transform' : 'translate(-' + posX/20 + 'px)',
            // });
        },

        setMoneyPos2() {
            let e = window.event;

            let posX = e.gamma;
            let posY = 0;
            $('.kv-tit img').css({
                'transform' : 'translate(' + posX/2 + 'px, ' + posY/2 + 'px)',
            });
            $('.kv-circle').css({
                'transform' : 'translate(' + posX/2 + 'px)',
            });
            $('.kv-springCouplets, .kv-lantern img').css({
                'transform' : 'translate(' + posX/4 + 'px)',
            });
            $('.kv-fan img, .kv-ferry').css({
                'transform' : 'translate(' + posX/2 + 'px)',
            });
            $('.kv-gift').css({
                'transform' : 'translate(' + posX/2 + 'px)',
            });
            $('.kv-ingots').css({
                'transform' : 'translate(' + posX/1 + 'px)',
            });
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
