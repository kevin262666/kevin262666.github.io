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
            // featuredFundOptions: {
			// 	slidesToShow: 4,
			// 	slidesToScroll: 4,
            //     autoplay: true,
            //     pauseOnHover: false,
            //     // dots: true,
            //     infinite: true,
            //     autoplaySpeed: 5000,
			// 	speed: 500,
			// 	adaptiveHeight: true,
			// 	responsive: [
			// 		{
			// 			breakpoint: 992,
			// 			settings: {
			// 				slidesToShow: 3,
			// 				slidesToScroll: 3,
			// 			}
			// 		},
			// 		{
			// 			breakpoint: 768,
			// 			settings: {
			// 				slidesToShow: 1,
			// 				slidesToScroll: 1,
			// 			}
			// 		},
			// 	],
            // },
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

var content = new Vue({
    el: "#content",
    mixins: [slickFunction],
    data: {
        name: "魏孝峯作品集 | Kwein Wei Portfolio",
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        navbarShow: false,
        thisPath: location.protocol + "//" + location.host,

        tab: [true, false, false, false, false],

        portfolio2022: [
            {
                link: `https://kevin262666.github.io/franklin/season-offers/`,
                tit: `2023年旗艦級基金活動網頁`,
                img: `season-offers.webp`,
                website: `https://kevin262666.github.io/franklin/season-offers/`,
                behance: `https://www.behance.net/gallery/160459325/-2023`,
            },
            {
                link: `https://kevin262666.github.io/franklin/girlpower/`,
                tit: `女力投資網頁`,
                img: `girlpower.webp`,
                website: `https://kevin262666.github.io/franklin/girlpower/`,
                behance: `https://www.behance.net/gallery/144075003/_`,
            },
            {
                link: `https://kevin262666.github.io/franklin/swift/`,
                tit: `投資策略SWIFT`,
                img: `swift.webp`,
                website: `https://kevin262666.github.io/franklin/swift/`,
                behance: `https://www.behance.net/gallery/141494551/-SWIFT`,
            },
            {
                link: `https://kevin262666.github.io/franklin/legg-mason/`,
                tit: `美盛官網`,
                img: `legg-mason.webp`,
                website: `https://kevin262666.github.io/franklin/legg-mason/`,
                behance: `https://www.behance.net/gallery/122477929/_`,
            },
            {
                link: `https://kevin262666.github.io/franklin/income-fund/`,
                tit: `投資攻略`,
                img: `income-fund.webp`,
                website: `https://kevin262666.github.io/franklin/income-fund/`,
                behance: `https://www.behance.net/gallery/121536213/_`,
            },
            {
                link: `https://kevin262666.github.io/franklin/etrade-remake/signIn.html`,
                tit: `EC國民e帳戶`,
                img: `etrade-remake.webp`,
                website: `https://kevin262666.github.io/franklin/etrade-remake/signIn.html`,
                behance: `https://www.behance.net/gallery/154738505/-e`,
            },
        ],

        portfolio2021: [
            {
                link: `https://kevin262666.github.io/franklin/signup/`,
                tit: `網銀開戶推展`,
                img: `signup.webp`,
                website: `https://kevin262666.github.io/franklin/signup/`,
                behance: `https://www.behance.net/gallery/97750835/_`,
            },
            {
                link: `https://kevin262666.github.io/franklin/newAIRobo/`,
                tit: `國民理財機器人`,
                img: `newAIRobo.webp`,
                website: `https://kevin262666.github.io/franklin/newAIRobo/`,
                behance: `https://www.behance.net/gallery/100135119/_`,
            },
        ],

        portfolio2020: [
            {
                link: `https://kevin262666.github.io/franklin/strategic-income-fund/`,
                tit: `精選收益基金`,
                img: `strategic-income-fund.webp`,
                website: `https://kevin262666.github.io/franklin/strategic-income-fund/`,
                behance: `https://www.behance.net/gallery/87983549/Franklin-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/rsp/`,
                tit: `投資定心丸`,
                img: `rsp.webp`,
                website: `https://kevin262666.github.io/franklin/rsp/`,
                behance: `https://www.behance.net/gallery/94175885/_`,
            },
            {
                link: `https://kevin262666.github.io/franklin/fund-award/`,
                tit: `2020基金獎`,
                img: `fund-award.webp`,
                website: `https://kevin262666.github.io/franklin/fund-award/`,
                behance: `https://www.behance.net/gallery/92251251/Franklin-`,
            },
        ],

        portfolio2019: [
            {
                link: `https://kevin262666.github.io/franklin/FT_Retire/survey.html`,
                tit: `退休後的第二人生`,
                img: `FT_Retire.webp`,
                website: `https://kevin262666.github.io/franklin/FT_Retire/survey.html`,
                behance: `https://www.behance.net/gallery/84670845/Franklin-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2019_07_signup/`,
                tit: `網銀線上開戶`,
                img: `C2019_07_signup.webp`,
                website: `https://kevin262666.github.io/franklin/C2019_07_signup/`,
                behance: `https://www.behance.net/gallery/83086423/Franklin-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2019_04_Q2/`,
                tit: `2019第二季活動-國民輕鬆省`,
                img: `C2019_04_Q2.webp`,
                website: `https://kevin262666.github.io/franklin/C2019_04_Q2/`,
                behance: `https://www.behance.net/gallery/78198361/Franklin-2019-Q2-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2019_01_howToChoose/`,
                tit: `不知如何選基金？`,
                img: `C2019_01_howToChoose.webp`,
                website: `https://kevin262666.github.io/franklin/C2019_01_howToChoose/`,
                behance: `https://www.behance.net/gallery/75487565/Franklin-`,
            },
        ],

        portfolio2018: [
            {
                link: `https://kevin262666.github.io/franklin/C2018_12_Q4_0799/`,
                tit: `美國機會基金`,
                img: `C2018_12_Q4_0799.webp`,
                website: `https://kevin262666.github.io/franklin/C2018_12_Q4_0799/`,
                behance: `https://www.behance.net/gallery/74828197/Franklin-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2018_11_thanksgiving/`,
                tit: `寵愛粉絲感恩節特別企劃`,
                img: `C2018_11_thanksgiving.webp`,
                website: `https://kevin262666.github.io/franklin/C2018_11_thanksgiving/`,
                behance: ``,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2018_10_Q4_1641/`,
                tit: `多空策略基金`,
                img: `C2018_10_Q4_1641.webp`,
                website: `https://kevin262666.github.io/franklin/C2018_10_Q4_1641/`,
                behance: `https://www.behance.net/gallery/71122151/Franklin-`,
            },
            {
                link: `https://kevin262666.github.io/franklin/C2018_10_Q4/`,
                tit: `2018第四季活動-理財大補湯`,
                img: `C2018_10_Q4.webp`,
                website: `https://kevin262666.github.io/franklin/C2018_10_Q4/`,
                behance: `https://www.behance.net/gallery/70426239/Franklin-Q4-`,
            },
            {
                link: `https://kevin262666.github.io/ftft/onlineAccountOpen/`,
                tit: `富蘭克林華美投信-線上開戶`,
                img: `ftOnlineAccountOpen.webp`,
                website: `https://kevin262666.github.io/ftft/onlineAccountOpen/`,
                behance: `https://www.behance.net/gallery/70426239/Franklin-Q4-`,
            },
            {
                link: `https://kevin262666.github.io/ftft/C2018_11_raiders/`,
                tit: `中國市場 研習攻略`,
                img: `C2018_11_raiders.webp`,
                website: `https://kevin262666.github.io/ftft/C2018_11_raiders/`,
                behance: `https://www.behance.net/gallery/72027353/_`,
            },
            {
                link: `https://kevin262666.github.io/ftft/180806-line/`,
                tit: `LINE週週答題搶好康`,
                img: `180806-line.webp`,
                website: `https://kevin262666.github.io/ftft/180806-line/`,
                behance: `https://www.behance.net/gallery/70426555/-LINE-`,
            },
            {
                link: `https://kevin262666.github.io/soho/zimedia/`,
                tit: `字媒體Zimedia`,
                img: `zimedia.webp`,
                website: `https://kevin262666.github.io/soho/zimedia/`,
                behance: `https://www.behance.net/gallery/66293219/Zimedia`,
            },
        ],

        experience: [
            {
                tit: `副理(電子商務部)`,
                company: `凱基證券`,
                time: `2023/5~至今`,
                jobList: `<ol>
                                <li>
                                    跨部門需求溝通
                                </li>
                                <li>
                                    工作分派及進度追蹤
                                </li>
                            </ol>`,
            },
            {
                tit: `資深網頁設計師(襄理)`,
                company: `富蘭克林證券投資顧問股份有限公司(吉富集團)`,
                time: `2019/8~2023/4`,
                jobList: `<ol>
                            <li>
                                國民e帳戶改版 + 投顧、投信線上開戶改版 + 壽險專區改版
                                <ul class="tagList">
                                    <li>
                                        制定Web UI Guideline
                                    </li>
                                    <li>
                                        介面與互動設計
                                    </li>
                                    <li>
                                        Mockup(XD) / prototype製作(html、scss、vue)
                                    </li>
                                    <li>
                                        跨部門需求溝通
                                    </li>
                                    <li>
                                        介面優化調整
                                    </li>
                                </ul>
                            </li>
                            <li>
                                新版官網改版
                                <ul class="tagList">
                                    <li>
                                        切版(html、scss、vue)
                                    </li>
                                    <li>
                                        跨部門需求溝通
                                    </li>
                                    <li>
                                        介面優化調整
                                    </li>
                                </ul>
                            </li>
                            <li>
                                行銷活動網站設計切版
                            </li>
                            <li>
                                行銷宣傳物製作
                                <ul class="tagList">
                                    <li>
                                        EDM
                                    </li>
                                    <li>
                                        Banner
                                    </li>
                                    <li>
                                        DM
                                    </li>
                                </ul>
                            </li>
                            <li>
                                舊版網站異動需求
                            </li>
                            <li>
                                APP介面優化(XD繪製)
                            </li>
                            <li>
                                新進員工訓練
                            </li>
                            <li>
                                工作分派及進度追蹤
                            </li>
                        </ol>`,
            },
            {
                tit: `資深網頁設計師`,
                company: `吉立富資訊管理股份有限公司(吉富集團)`,
                time: `2018/7~2019/8 1年2個月`,
                jobList: `<ul class="tagList">
                                <li>
                                    行銷活動網站設計、切版
                                </li>
                                <li>
                                    行銷活動物製作(EDM/Banner/DM)
                                </li>
                                <li>
                                    舊版網站異動需求
                                </li>
                            </ul>`,
            },
            {
                tit: `資深網頁設計師`,
                company: `東南旅行社`,
                time: `2017/2~2018/6 1年5個月`,
                jobList: `<ol>
                            <li>
                                EC網站改版
                                <ul class="tagList">
                                    <li>
                                        制定Web UI Guideline
                                    </li>
                                    <li>
                                        介面與互動設計
                                    </li>
                                    <li>
                                        Mockup(Sketch) / prototype製作(html、scss、jq)
                                    </li>
                                    <li>
                                        code review
                                    </li>
                                    <li>
                                        跨部門需求溝通
                                    </li>
                                    <li>
                                        介面優化調整
                                    </li>
                                </ul>
                            </li>
                            <li>
                                行銷活動網站設計切版
                            </li>
                            <li>
                                行銷宣傳物製作
                                <ul class="tagList">
                                    <li>
                                        EDM
                                    </li>
                                    <li>
                                        Banner
                                    </li>
                                    <li>
                                        DM
                                    </li>
                                </ul>
                            </li>
                            <li>
                                舊版網站異動需求
                            </li>
                        </ol>`,
            },
            {
                tit: `網頁設計師`,
                company: `創世紀資訊股份有限公司`,
                time: `2013/7~2017/2 3年8個月`,
                jobList: `<ol class="tagList">
                            <li>
                                了解客戶需求，規劃並設計網站UI
                            </li>
                            <li>
                                網站前端切版
                            </li>
                            <li>
                                DM文宣設計
                            </li>
                            <li>
                                網站快速套版方案企劃、建置、執行
                            </li>
                            <li>
                                協助公司自營購物平台行銷資料設計
                            </li>
                            <li>
                                新進設計師培訓
                            </li>
                        </ol>`,
            },
        ],
    },
    components: {
        // discount: httpVueLoader(
        //     "https://event.franklin.com.tw/commonResources/component/discount.vue"
        // ), // 線上投資優惠區塊元件
    },
    mounted() {
        this.signature();
        // this.addNoOpener();
        // this.useJq();
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
        // this.getPosSetCountToNumber();

        // window.addEventListener('mousemove', e => {
        //     this.setMoneyPos();
        // });
        // window.addEventListener('deviceorientation', e => {
        //     this.setMoneyPos2();
        // });

        // setInterval(() => {
        //     this.tab1.push('tab1')
        // }, 2000)

        // this.countUp();

        // AOS
        AOS.init({
            duration: 1000,
            // offset: this.windowWidth > 768 ? 400 : 200,
            // delay: 100,
        });
    },
    methods: {
        signature() {
            console.log(
                "%cMade by CaptainWei%c2023/01",
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
                _linkHasTargetBlank.eq(n).attr("href").indexOf(this.thisPath)
                    ? _linkHasTargetBlank
                          .eq(n)
                          .attr("rel", "nofollow me noopener noreferrer")
                    : "";
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
                            pair = (pair + "=")
                                .split("=")
                                .map(decodeURIComponent);
                            if (pair[0].length) {
                                params[pair[0]] = pair[1];
                            }
                        });
                    return params;
                }

                var obj = getUrlParams(location.href);
                // 因為#hash會直接串在最後一個參數後面, 故需要取代處理
                if (Object.keys(obj).length && obj.hasOwnProperty("openInfo"))
                    openInfo =
                        obj.openInfo.indexOf("#") > -1
                            ? obj.openInfo.replace(location.hash, "")
                            : obj.openInfo;
                // 抓取網址參數判斷 --- End

                // 2020-11-26 Jeffery 修正openInfo空值在jQuery的錯誤
                if (openInfo && $("#" + openInfo).length > 0) {
                    setTimeout(() => {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                        console.log(openInfo, targetOffset);
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
        countUp() {
            // 數字遞增動畫
            let domPos = document.getElementById("crownArea").offsetTop;

            var options = {
                useEasing: true, // 過渡動畫效果，默認ture
                useGrouping: true, // 千分位效果，例：1000->1,000。默認true
                separator: ",", // 使用千分位時分割符號
                decimal: ".", // 小數位分割符號
                prefix: "", // 前置符號
                suffix: "", // 後置符號，可漢字
            };

            // dom節點, 初始值,  結束值, 小數位數, 過渡幾秒 , 初始參數
            var num1 = new CountUp("num1", 0, 1.4, 1, 5, options);
            var num2 = new CountUp("num2", 0, 75, 0, 5, options);
            var num3 = new CountUp("num3", 0, 284, 0, 5, options);

            $(window).scroll(function () {
                var scrollVal = $(this).scrollTop();
                if (scrollVal >= domPos) {
                    num1.start();
                    num2.start();
                    num3.start();
                }
            });
        },

        //-------------------------------------navbar
        toggleMobileNavbar() {
            this.menuBtnActive === false
                ? (this.menuBtnActive = true)
                : (this.menuBtnActive = false);
            this.navbarShow === false
                ? (this.navbarShow = true)
                : (this.navbarShow = false);
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
        useJq() {},

        //-------------------------------------scrollMagic
        scrollMagic() {
            var controller = new ScrollMagic.Controller();

            // build tween
            var tween = TweenMax.to(".experience-img-img img", 1, {
                top: -100,
                ease: Linear.easeNone,
            });

            // build scene
            var scene = new ScrollMagic.Scene({
                triggerElement: ".experience .itemTit",
                duration: 500,
            })
                .setTween(tween)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        },

        //-------------------------------------tab
        toggleTab(no) {
            this.tab = [false, false, false, false, false];
            this.tab[no] = true;
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
