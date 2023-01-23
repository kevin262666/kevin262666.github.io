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
                    info: `基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。部份基金進行配息前未先扣除應負擔之費用。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.franklin.com.tw" target="_blank">https://www.franklin.com.tw/</a>)查閱。基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動，投資人於獲配息時，宜一併注意基金淨值之變動。`,
                },
                {
                    info: `股票型基金配息機制說明：本基金主要配息來源為股息收益，配息也可能從基金資本中支付。境外基金機構針對本基金配息政策設有相關控管機制，視實際收到股息收益及評估未來市場狀況以決定當期配息水準，惟配息發放並非保證，配息金額並非不變，亦不保證配息率水準。`,
                },
                {
                    info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw" target="_blank">https://www.franklin.com.tw/</a>)查閱。`,
                },
                //{
                //	info: `<b class="focus">基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.Franklin.com.tw" target="_blank">https://www.franklin.com.tw</a>)查閱。</b>`
                //},
                // {
                // 	info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw" target="_blank">https://www.franklin.com.tw/</a>)查閱。`
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
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
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
Vue.component("commonVersionBanner", {
    props: ["title"],
    template: ` <section class="commonVersionBanner">
                    <h1 :title="title">
                        {{title}}
                    </h1>
                    <picture>
                        <source media="(max-width: 767px)" srcset="images/banner-mobile-1.jpg">
                        <img src="images/banner-pc-1.jpg" :alt="title" class="commonVersionBanner-kv">
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

        bannerCoinNo: 1,

        whatHasChangedOptions: {
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            infinite: true,
        },

        fundIntroductionOptions: {
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            arrows: true,
            infinite: true,
            centerMode: true,
            centerPadding: "300px",
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        centerPadding: "150px",
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        centerPadding: "80px",
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        centerPadding: "0px",
                    },
                },
            ],
        },

        fundIntroduction_yearInfo: [
            {
                year: `2007-2008年`,
                text: `美國次級房貸風暴，團隊<span class="focus">加債減股</span>`,
            },
            {
                year: `2008~2009年`,
                text: `金融海嘯，高收益市場被嚴重拋售價格錯置，<span class="focus">團隊危機入市高收益債及股票</span>。`,
            },
            {
                year: `2012~2014年`,
                text: `股市正常化，部分公司股利率甚至優於公司債殖利率，團隊<span class="focus">加碼股票</span>；2013年聯準會縮減QE，股優於債。`,
            },
            {
                year: `2018-2019年`,
                text: `美中貿易紛爭及地緣政治風險增加，<span class="focus">2018年第二季起提高債券比例</span>。`,
            },
            {
                year: `2019-2020年`,
                text: ` 防範市場波動增持現金及可轉換證券，至<span class="focus">2020年起減碼債券加碼股票</span>。`,
            },
        ],

        fund1Dividend: [
            ["2021/05/10", "0.055", "5.67", "0.47", "1.64"],
            ["2021/04/09", "0.055", "5.8", "0.48", "4.19"],
            ["2021/03/08", "0.055", "5.96", "0.5", "2.87"],
            ["2021/02/08", "0.055", "6.05", "0.5", "-0.89"],
            ["2021/01/11", "0.055", "6.03", "0.5", "2.31"],
            ["2020/12/08", "0.055", "6.12", "0.51", "8.85"],
            ["2020/11/09", "0.055", "6.5", "0.54", "-1.08"],
            ["2020/10/08", "0.055", "6.54", "0.55", "-1.92"],
            ["2020/09/08", "0.055", "6.47", "0.54", "2.14"],
            ["2020/08/10", "0.055", "6.48", "0.54", "1.77"],
            ["2020/12/08", "0.055", "6.12", "0.51", "8.85"],
            ["2020/11/09", "0.055", "6.5", "0.54", "-1.08"],
        ],

        fund2Shareholding: [
            ["Bank of America Corp.(美國銀行)", "銀行", "4.12", "1.46", "17.36"],
            ["Kraft Heinz Co/The(卡夫亨氏)", "食品", "3.63", "1.07", "14.63"],
            ["Merck & Co., Inc.(默克藥廠)", "製藥", "3.26", "7.44", "14.27"],
            ["Comcast Corp.", "媒體", "3.17", "2.73", "24.17"],
            ["JPMorgan Chase & Co.(摩根大通)", "銀行", "3.11", "1.98", "12.68"],
            ["Novartis AG", "製藥", "3.02", "3.92", "25.23"],
            ["Everest Re Group Ltd.", "保險", "2.97", "1.09", "31.15"],
            ["Johnson Controls International(江森自控)", "資本設備", "2.85", "2.61", "27.27"],
            ["Oracle Corp.", "軟體", "2.79", "25.71", "22.26"],
            ["Brixmor Property Group", "REITs", "2.65", "2.43", "51.46"],
        ],

        fund3WithBidenInfo: [
            {
                icon: `images/withBiden_icon-1.png`,
                tit1: `成長型資產`,
                tit2: `使用者付費資產`,
                text: `具備低收益、高景氣連動特色，和該國國內生產總值高度相關`,
                industry: `項目：道路、鐵路、港口及機場等`,
            },
            {
                icon: `images/withBiden_icon-2.png`,
                tit1: `防禦型資產`,
                tit2: `受政府管制資產`,
                text: `具備高收益、低景氣相關性特色，可望於各景氣階段獲得相對穩定收入`,
                industry: `項目：電力、供水、瓦斯傳送及運輸等`,
            },
            {
                icon: `images/withBiden_icon-3.png`,
                tit1: `趨勢型資產`,
                tit2: `自由競爭資產`,
                text: `不受法令規範的資產`,
                industry: `項目：再生能源、通訊及能源基礎建設`,
            },
        ],

        fund3Dividend: [
            ["2021/06/01", "0.025497292", "3.10%", "0.26%", "0.00%"],
            ["2021/04/30", "0.027234822", "3.33%", "0.28%", "7.79%"],
            ["2021/03/31", "0.026060942", "3.22%", "0.27%", "-1.39%"],
            ["2021/02/26", "0.021884354", "2.87%", "0.24%", "-2.91%"],
            ["2021/01/29", "0.023674366", "3.04%", "0.25%", "0.21%"],
            ["2020/12/31", "0.029689456", "3.76%", "0.31%", "8.47%"],
            ["2020/11/30", "0.025264712", "3.14%", "0.26%", "1.05%"],
            ["2020/10/30", "0.031914757", "4.33%", "0.36%", "0.11%"],
            ["2020/09/30", "0.029729528", "4.07%", "0.34%", "-0.92%"],
            ["2020/08/31", "0.028816041", "3.89%", "0.32%", "-0.19%"],
            ["2020/07/31", "0.033195368", "4.49%", "0.37%", "-0.99%"],
            ["2020/06/30", "0.030334736", "4.09%", "0.34%", "3.32%"],
        ],

        bank: [
            "三信商銀",
            "上海銀行",
            "土地銀行",
            "中國信託",
            "台中銀行",
            "永豐銀行",
            "玉山銀行",
            "合庫銀行",
            "安泰銀行",
            "法巴銀行",
            "第一銀行",
            "凱基銀行",
            "華南銀行",
            "華泰銀行",
            "陽信銀行",
            "新光銀行",
            "臺灣銀行",
            "聯邦銀行",
            "元富證券",
            "永豐金證券",
            "基富通證券",
            "凱基證券",
            "富邦證券",
            "群益金鼎證券",
        ],

        showDiscountInfo: true,
    },
    // components: {
    // },
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

        let bannerCoinLoop = setInterval(() => {
            this.bannerCoin();
        }, 200);

        setTimeout(() => {
            clearInterval(bannerCoinLoop);
        }, 100000);

        this.ieMask();
        this.chart1();
        this.chart2();
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
                if(openInfo == 'type2') {
                    this.showDiscountInfo = false;
                    // this.$set(this.showDiscountInfo, 0, false);
                    // console.log(openInfo);
                }if (openInfo && $("#" + openInfo).length > 0) {
                    setTimeout(function () {
                        var targetOffset = $("#" + openInfo).offset().top;
                        window.scrollTo(0, targetOffset);
                        setTimeout(function () {
                            var targetOffset = $("#" + openInfo).offset().top;
                            window.scrollTo(0, targetOffset);
                            setTimeout(function () {
                                var targetOffset = $("#" + openInfo).offset().top;
                                window.scrollTo(0, targetOffset);
                            }, 500);
                        }, 500);
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
                return Math.round(Math.round(val * Math.pow(10, (precision || 0) + 1)) / 10) / Math.pow(10, precision || 0);
            };
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
            new WOW().init();
        },

        //-------------------------------------scrollMagic
        scrollMagic() {
            // TweenMax.from('.banner-man', 0.3, {opacity: 0, delay: 0, x: -200, y: 420});
            // TweenMax.to(".banner-man", 0.3, {x: 10, y: 10, delay: 0.3});
            // TweenMax.from('.banner-tit', 0.3, {opacity: 0, delay: 0.3});
            // TweenMax.from('.banner-tit-sTit', 0.3, {delay: 0.3, x: -300, y: 20});
            // TweenMax.from('h1', 0.3, {opacity: 0, delay: 0.5, x: -300, y: 20});

            // TweenMax.to('.banner-man', 1, { x: 0, y: 0, repeat: -1, yoyo: true, delay: 0.6 });

            // init controller
            const controller = new ScrollMagic.Controller();

            // whatHasChanged區塊--------------------------------------------------------------------------------
            var whatHasChangedOffset,
                whatHasChangeItemHeight = 0;

            if (this.windowWidth > 767) {
                whatHasChangedOffset = 500;
            } else {
                whatHasChangedOffset = 300;
            }

            for (let n = 1; n <= $(".whatHasChanged-content .item").length; n++) {
                whatHasChangeItemHeight += $(".whatHasChanged-content .item").innerHeight();
            }

            var whatHasChangedParallaxTimeLine = new TimelineMax(),
                whatHasChangedParallax = new ScrollMagic.Scene({ triggerElement: ".whatHasChanged", duration: whatHasChangeItemHeight, offset: whatHasChangedOffset })
                    .setTween(whatHasChangedParallaxTimeLine)
                    .setPin(".whatHasChanged-tit")
                    // .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

            if (this.windowWidth < 768) {
                controller.destroy(true);
            }

            //--------- 文字滾動視差
            var whatHasChanged_textTattoo = new TimelineMax().add([
                TweenMax.fromTo(".whatHasChanged-textTattoo div:eq(1)", 1, { y: 0 }, { y: 800, ease: Linear.easeNone }),
                TweenMax.fromTo(".whatHasChanged-textTattoo div:eq(2)", 1, { y: -1200 }, { y: 100, ease: Linear.easeNone }),
            ]);

            var whatHasChangedScene = new ScrollMagic.Scene({ triggerElement: ".whatHasChanged", duration: whatHasChangeItemHeight, offset: whatHasChangedOffset })
                .setTween(whatHasChanged_textTattoo)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            // 防疫三招--------------------------------------------------------------------------------
            var uniqueSkill_textTattoo = new TimelineMax().add([TweenMax.fromTo(".uniqueSkill-textTattoo div:eq(1)", 1, { y: 0 }, { y: 300, ease: Linear.easeNone })]);

            var uniqueSkillScene = new ScrollMagic.Scene({ triggerElement: ".uniqueSkill", duration: $(".uniqueSkill").innerHeight(), offset: 300 })
                .setTween(uniqueSkill_textTattoo)
                // .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        },

        //-------------------------------------banner
        bannerCoin() {
            if (this.bannerCoinNo < 5) {
                this.bannerCoinNo++;
            } else {
                this.bannerCoinNo = 1;
            }
        },

        //-------------------------------------chart
        chart1() {
            var ctx = document.getElementById("chart1"),
                example = new Chart(ctx, {
                    // 參數設定[註1]
                    type: "bar", // 圖表類型
                    data: {
                        labels: ["2021Q1", "2021Q2", "2021Q3", "2021Q4", "2021年▲", "2022年▲"], // 標題
                        datasets: [
                            {
                                label: "GDP成長率(%)", // 標籤
                                data: [6, 11, 8.5, 6.5, 7, 5.1], // 資料
                                backgroundColor: [
                                    // 背景色
                                    "#a5feea",
                                    // "#04886e",
                                    // "#04886e",
                                    "#005598",
                                    "#005598",
                                    "#a5feea",
                                    // "#ea9d36",
                                    // "#ea9d36",
                                    "#04886e",
                                    "#04886e",
                                ],
                                borderWidth: 0, // 外框寬度
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: "季比年率預估(%)",
                                    font: {
                                        family: "Noto Sans TC",
                                        size: 16,
                                        weight: "bold",
                                    },
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "GDP成長率",
                                    font: {
                                        family: "Noto Sans TC",
                                        size: 16,
                                        weight: "bold",
                                    },
                                },
                            },
                        },
                    },
                });
        },
        chart2() {
            var delayed;
            var ctx = document.getElementById("chart2"),
                example = new Chart(ctx, {
                    // 參數設定[註1]
                    type: "bar", // 圖表類型
                    data: {
                        labels: ["1Q20", "2Q20", "3Q20", "4Q20", "1Q21", "2Q21"], // 標題
                        datasets: [
                            {
                                label: "累積超額儲蓄", // 標籤
                                data: [78, 918, 1286, 1533, 1941, 2443], // 資料
                                backgroundColor: [
                                    // 背景色
                                    "#005598",
                                ],
                                borderWidth: 0, // 外框寬度
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    // text: '季比年率預估(%)',
                                    font: {
                                        family: "Noto Sans TC",
                                        size: 16,
                                        weight: "bold",
                                    },
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: "(單位: 十億美元)",
                                    font: {
                                        family: "Noto Sans TC",
                                        size: 14,
                                        // weight: 'bold',
                                    },
                                },
                            },
                        },
                        animation: {
                            onComplete: () => {
                                delayed = true;
                            },
                            delay: (context) => {
                                let delay = 0;
                                if (context.type === "data" && context.mode === "default" && !delayed) {
                                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                                }
                                return delay;
                            },
                        },
                    },
                });
        },

        //-------------------------------------ie遮罩用
        // 取ie版本
        getIEVersion() {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
            var isIE11 = userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion == 7) {
                    return 7;
                } else if (fIEVersion == 8) {
                    return 8;
                } else if (fIEVersion == 9) {
                    return 9;
                } else if (fIEVersion == 10) {
                    return 10;
                } else {
                    return 6; //IE版本<=7
                }
            } else if (isEdge) {
                return "edge"; //edge
            } else if (isIE11) {
                return 11; //IE11
            } else {
                return -1; //不是ie浏览器
            }
        },
        ieMask() {
            this.getIEVersion() != "edge" && this.getIEVersion() != -1 ? document.body.classList.add("fixedBody") : "";
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
