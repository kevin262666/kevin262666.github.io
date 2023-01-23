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
                     "info": "<b class='focus'>本基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。</b>"
                },
                {
                    "info": "基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；部份基金進行配息前未先扣除應負擔之相關費用；基金淨值可能因市場因素而上下波動，投資人於獲配息時，宜一併注意基金淨值之變動。本基金之配息來源含股息收益，配息也可能從基金資本中支付。境外基金機構針對本基金配息政策設有相關控管機制，視實際收到股息收益及評估未來市場狀況以決定當期配息水準，惟配息發放並非保證，配息金額並非不變，亦不保證配息率水準。基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損，本基金進行配息前未先扣除應負擔之費用，由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站( <a href='https://www.franklin.com.tw/' target='_blank' style='color: #fff;'>https://www.franklin.com.tw/</a> )查閱。"
                },
                {
                    "info": "<b class='focus'>穩定月配之配息率或配息金額並非固定不變，此股份級別配息主要來源預期為收益(債息及/或股利)及資本利得，並可能加計本金，以達預計年度配息率或配息金額。</b>"
                },
                {
                    "info": "增益配息型類股：股票型基金之配息來源為基金投資標的所配發之股票股利，因投資標的股利發放頻率及日期不一，造成基金每月收到之股票股利收入將不平均。若當期收到投資標的之股利收入大於預計配息率，則基金僅由股利收入發放配息。若當期收到投資標的之股利收入低於預計配息率，則投資經理人得利用前期保留之股利收入，於必要時，亦得自本金配息，使配息率穩定。投資經理人將定期審視投資標的股利率水準及基金績效而調整配息率，使基金配息率貼近股利率，避免配息過度侵蝕本金之情形。<b class='focus'>增益配息類股的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額减損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站( <a href='https://www.franklin.com.tw/' target='_blank' style='color: #fff;'>https://www.franklin.com.tw/</a> )查閱。境外基金機構針對本基金配息政策設有相關控管機制，視實際收到股息收益及評估未來市場狀況以決定當期配息水準，惟配息發放並非保證，配息金額並非不變，亦不保證配息率水準。</b>"
                },
                {
                    "info": "股票型基金配息機制說明：本基金主要配息來源為股息收益，配息也可能從基金資本中支付。境外基金機構針對本基金配息政策設有相關控管機制，視實際收到股息收益及評估未來市場狀況以決定當期配息水準，惟配息發放並非保證，配息金額並非不變，亦不保證配息率水準。"
                },
                {
                    "info": "基金轉換若涉及不同計價幣別基金之轉換，轉入之基金以申請轉換當日之淨值計算。<b class='focus'>基金過去績效不代表未來績效之保證。</b>"
                },
                {
                    "info": "<b class='focus'>本文提及之標的僅為舉例用，非為個別標的之推介，投資人申購本基金係持有基金受益憑證，而非本文提及之投資資產或標的。</b>"
                },
                {
                    "info": "投資人應留意衍生性工具/證券相關商品等槓桿投資策略所可能產生之投資風險(詳見公開說明書或投資人須知)。"
                },
                {
                    "info": "<b class='focus'>非投資等級債券基金警語：由於非投資等級債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資以非投資等級債券為訴求之基金不宜占其投資組合過高之比重，投資人應審慎評估。</b>"
                },
                {
                    "info": "<b class='focus'>投資中國比重指掛牌於大陸及香港地區中國企業之投資比重，依規定境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，直接及間接投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。</b>"
                },
                {
                    "info": "<b class='focus'>新興市場警語：本基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。</b>"
                },
                {
                    "info": "<b class='focus'>中國A股警語：本基金由富蘭克林華美投信獨立經營管理。投資各類N類型受益權單位者，其手續費之收取將於買回時支付，且該費用將依持有期間而有所不同，其餘費用之計收與前收手續費類型完全相同，亦不加計分銷費用。</b>本基金以多幣別計價，如投資人以其他非本基金計價幣別之貨幣換匯後投資本基金者，須自行承擔匯率變動之風險，當本基金計價幣別相對其他貨幣貶值時，將產生匯兌損失，因投資人與銀行進行外匯交易有買價與賣價之差異，投資人進行換匯時須承擔買賣價差，此價差依各銀行報價而定，此外，投資人尚須承擔匯款費用，且外幣匯款費用可能高於新臺幣匯款費用，投資人亦須留意外幣匯款到達時點可能因受款行作業時間而遞延。此外，本基金設有人民幣計價之受益權單位，鑒於人民幣匯兌仍受管制，大陸地區之外匯管制及資金調度限制均可能影響本基金之流動性，投資人應審慎評估。基於經理公司申請獲得大陸地區合格境外機構投資者之額度及大陸地區相關規定之特定因素，本基金保留婉拒申購或暫停買回之權利。中國大陸為外匯管制市場，資金匯出匯入之限制，或新台幣兌換人民幣之限制，而可能有匯率相關風險。本基金不受存款保險、保險安定基金或其他相關保障機制之保障。故投資本基金可能發生部分或全部本金之損失，最大可能損失則為全部投資金額。有關基金應負擔之費用已揭露於基金公開說明書或簡式公開說明書中，投資人可向經理公司及基金銷售機構索取，或至公開資訊觀測站及經理公司網站中查詢。"
                },
                {
                    "info": "基金定時定額警語：投資人因不同時間進場，將有不同之投資績效，且過去績效不代表未來績效之保證。"
                },
                {
                    "info": "投資人應先審閱自動化投資顧問服務所揭露之所有相關文件，瞭解其內容、條款，以確保自身權益。投資人應認知投資工具有其內在限制與現實情況所存在的潛在落差，包括：(一)系統或程式之基本假設：投資人應體認系統本身有其限制與重要基本假設，但假設可能未必與事實或個案情節相符。(二)提供產品範圍：投資人應了解系統提供之投資產品範圍的侷限性，致使產出的投資組合建議方案有限。投資人應理解自動化投資顧問服務之產出直接繫於投資人所提供之資訊，而投資人所提供資訊則影響系統之產出結果。投資人應注意自動化投資顧問服務系統因無法評估客戶之所有情況與環境，例如，年齡、經濟狀況與財務需要、投資經驗、其他資產、稅務概況，承受風險之意願，投資回收期間長短、現金需求，與投資目標等等，從而自動化投資顧問服務系統所提出之投資組合建議未必符合投資人個人的財務需要或目標。"
                },
                {
                    "info": "本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本文提及之經濟走勢預測不必然代表本基金之績效，本基金投資風險請詳閱基金公開說明書。 【富蘭克林證券投顧獨立經營管理】投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站( <a href='https://www.fundclear.com.tw/' target='_blank' style='color: #fff;'>https://www.fundclear.com.tw/</a> )下載，或逕向本公司網站( <a href='https://www.franklin.com.tw/' target='_blank' style='color: #fff;'>https://www.franklin.com.tw/</a> )查閱。"
                },
                // {
                //     "info": "投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href='https://www.fundclear.com.tw/' target='_blank' style='color: #fff;'>https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href='https://www.franklin.com.tw/' target='_blank' style='color: #fff;'>https://www.franklin.com.tw/</a>)查閱。"
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

        tab1: [true, false, false],

        featuredFundOptions: {
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            arrows: true,
            infinite: true,
        },

        discountOptions: {
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            adaptiveHeight: true,
            arrows: false,
            infinite: true,
            asNavFor: '.discountSlick2'
        },
        discountOptions2: {
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            adaptiveHeight: true,
            arrows: false,
            infinite: true,
            asNavFor: '.discountSlick1',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: true,
                    }
                },
            ],
        },

        openAccountYoutube: false,
    },
    components: {
        // discount: httpVueLoader(
        //     "https://event.franklin.com.tw/commonResources/component/discount.vue"
        // ), // 線上投資優惠區塊元件
        fund: httpVueLoader(
            "js/fund.vue"
        ),
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

        this.countUp();

        // AOS
        AOS.init({
            duration: 1000,
            offset: this.windowWidth > 768 ? 400 : 200,
            delay: 100,
        });
    },
    methods: {
        signature() {
            console.log(
                "%cMade by Captain%c2022/12",
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

            var options={
                useEasing: true,  // 過渡動畫效果，默認ture
                useGrouping: true,  // 千分位效果，例：1000->1,000。默認true
                separator: ',',   // 使用千分位時分割符號
                decimal: '.',   // 小數位分割符號
                prefix: '',    // 前置符號
                suffix: ''    // 後置符號，可漢字
            }

            // dom節點, 初始值,  結束值, 小數位數, 過渡幾秒 , 初始參數
            var num1 = new CountUp('num1', 0, 1.4, 1, 5, options);
            var num2 = new CountUp('num2', 0, 75, 0, 5, options);
            var num3 = new CountUp('num3', 0, 284, 0, 5, options);

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
        useJq() {
            
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
            // TweenMax.from(".banner", 1, {
            //     opacity: 0,
            // });

            // TweenMax.to('.banner-man', 1, { x: 0, y: 0, repeat: -1, yoyo: true, delay: 0.6 });
            TweenMax.from('.loadingArea-logo img:eq(0)', 1, {opacity: 0,});
            TweenMax.from('.loadingArea-logo img:eq(1)', 1, {opacity: 0, y: 20,});
            TweenMax.from('.loadingArea-logo img:eq(2)', 1, {opacity: 0, y: 20, delay: 0.3});
            TweenMax.to('.loadingArea-logo-flash:eq(0)', 1, {x: 500, opacity: 0, delay: 1});
            TweenMax.to('.loadingArea-logo-flash:eq(1)', 1, {x: 500, opacity: 0, delay: 1.2});
            TweenMax.to('.loadingArea-mask div:eq(2)', 1, {x: -2000, delay: 1.8});
            TweenMax.to('.loadingArea-mask div:eq(3)', 1, {x: 2000, delay: 1.8});
            TweenMax.to('.loadingArea-logo', 0.8, {opacity: 0, delay: 1.6});
            TweenMax.to('.loadingArea-mask div:eq(0)', 1, {x: -2000, opacity: 0, delay: 2});
            TweenMax.to('.loadingArea-mask div:eq(1)', 1, {x: 2000, opacity: 0, delay: 2});

            TweenMax.from('.banner', 1, {opacity: 0, delay: 2.2});
        },

        // tab
        tab1Toggle(index) {
            this.tab1 = [false, false, false];
            this.tab1[index] = true;
            setTimeout(() => {
                this.tab1.push('tab1');
            },1000)
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
        tab1(val) {
            this.tab1 = val;
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            })
        },
    },
});
