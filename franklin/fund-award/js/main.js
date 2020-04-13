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
						<footer-warning></footer-warning>
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
			list: [{
					id: 0,
					info: `<b>本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。</b>`
				},
				{
					id: 1,
					info: `<b>本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。</b>`
				},
				{
					id: 2,
					info: `<b>由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。</b>`
				},
				{
					id: 3,
					info: `<b>本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。</b>`
				},
				{
					id: 4,
					info: `<b>由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。</b>`
				},
				{
					id: 5,
					info: `<b>境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。</b>`
				},
				{
					id: 6,
					info: `<b>基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.Franklin.com.tw" target="_blank">https://www.Franklin.com.tw</a>)查閱。</b>`
				},
				{
					id: 7,
					info: `<b>投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。</b>`
				},
				{
					id: 8,
					info: `<b>基金得獎資料來源：理柏、財團法人台北金融研究發展基金會、晨星、晨星暨Smart智富、指標雜誌，截至2019/3/13，獎項評選期間截至2018年底(2018年指標台灣基金獎截至2018/9/30)。查詢完整得獎記錄請見： <a href="http://bit.ly/2Fbfq1e" target="_blank">http://bit.ly/2Fbfq1e</a>。</b>`
				},
			]
		};
	},
	template: `<div class="footer-warning">
                    <ul>
                        <li v-for="item in list" v-bind:key="item.id" v-html="item.info"></li>
                    </ul>
                </div>`
});

// ========= 燈箱 ==============================================================================================================================
Vue.component("light-box", {
	props: ["canClose"],
	data: function() {
		return {
			toggle: false,
			isFixedHeight: false
		};
	},
	template: ` <transition>
					<div class="lightBox" v-if="toggle">
						<div class="lightBox-bg" @click="closeLightBox()" v-if="canClose == true"></div>
						<div class="lightBox-bg" v-if="canClose == false"></div>
						<div class="lightBox-container" :class="{fixedHeight: isFixedHeight}" ref="lightBoxContainer" id="lightBoxContainer">
							<div class="lightBox-close closeBtn" @click="closeLightBox()" v-if="canClose == true">
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
	}
});

// ========= 演說 ==============================================================================================================================
var speech = {
	data() {
        return {
			speech_no: 0,
			speech_content: [
				{
					img: 'images/man-1.png',
					tag: `金手套`,
					fundName: `精選收益基金`,
					fundWarning: `(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)`,
					text: `<p>進攻贏得比賽，防守才能贏得總冠軍！這句話不只適用於籃球競賽，更適用於投資領域！</p>
							<p>因為我從來不把雞蛋放在同一個籃子裡，而是分散投資各類型美元債券，在市場恐慌情緒升溫的時候，我能展現充分抗壓性；而當市場樂觀情緒高漲時，我也不會放棄追求獲利機會，簡而言之就是攻守兼備！</p>
							<p>更重要的是我非常靈活，我會依照市場多空變化，動態調整債券投資組合，以靈活應市場萬變，投資機會決不漏接！</p>`,
					source: ``,
					moreLink: `https://event.franklin.com.tw/strategic-income-fund/index.html`,
				},
				{
					img: 'images/man-2.png',
					tag: `金妥當`,
					fundName: `公用事業基金`,
					fundWarning: `(本基金之配息來源可能為本金)`,
					text: `<p>各位觀眾，請叫我沉惦惦吃三碗公的好基金，當大家都在追逐市場熱門標的的時候，只有我堅持走自己的路！</p>
							<p>我堅持投資美國電力、天然氣、自來水等民生必需公司，產業獲利相對穩定，當別人為了貿易紛爭與疫情變數焦頭爛額時，我卻可以高枕無憂！此外，這些公司大多穩定配發股利，所以投資我除了享有資本增值機會外，也可坐擁高股利投資收益。</p>
							<p>我的堅持讓我自2010年以來在台累積獲獎數達8座*，在詭譎多變的2020年，投資我最妥當啦！</p>`,
					source: `*資料來源：得獎紀錄統計美元A股及美元A1股歷史得獎紀錄，財團法人台北金融研究發展基金會，指標雜誌、晨星暨Smart智富，截至2019/2/19，獎項評選期間截至頒獎年度之前一年年底(指標台灣基金獎截至九月底)。查詢完整得獎記錄請見 <a href="https://www.franklin.com.tw/Award.html" target="_blank">https://www.franklin.com.tw/Award.html</a>。`,
					moreLink: `https://event.franklin.com.tw/utilities-fund/index.html`,
				},
				{
					img: 'images/man-3.png',
					tag: `金神氣`,
					fundName: `伊斯蘭債券基金`,
					fundWarning: `(本基金之配息來源可能為本金)`,
					text: `<p>別人說我太神祕，我笑他人看不穿，我是中東神秘力量加持的伊斯蘭債券基金。</p>
							<p>我只是投資符合伊斯蘭教義的債券，拒絕賭博、酒精、菸草、豬肉相關，或是傳統收息金融等產業，也因此深受信奉伊斯蘭教的投資人以及伊斯蘭保險或基金公司的青睞。</p>
							<p>也因為我獨樹一格，我和其他主要債券的相關性相對較低，投資我可以降低整體投資組合的波動風險，抗波動又求收益，還有鐵粉愛戴，誰能比我更神氣！</p>`,
					source: ``,
					moreLink: `https://event.franklin.com.tw/C2019_05_islam/index.html`,
				},
				{
					img: 'images/man-4.png',
					tag: `金有料`,
					fundName: `坦伯頓科技基金`,
					fundWarning: ``,
					text: `<p>如果有金才敢大聲，我絕對是最有資格嗆聲的那一個！自2010年以來累積海內外得獎數高68座*，金牌基金說的就是我本人！</p>
							<p>我放眼全球具有品牌知名度、產業領導地位、獨特專利權及技術競爭優勢的科技類股，技術不夠有料、含金量不夠高的公司，還沒資格進入我的投資組合！</p>
							<p>展望2020年，我十分看好數位轉型的龐大商機，尤其人工智慧(AI)、雲端(Cloud)、電商(E-commerce)等產業。選擇投資未來的我，就等於投資自己的未來！</p>
							<p>再跟大家爆個料，我還有一個遠房親戚也很犀利，他就是<b>富蘭克林高科技基金<span class="focus">(本基金之配息來源可能為本金)</span></b>，左擁科技右抱醫療兩大創新產業，想要找最有料的基金，選擇我們對了！</p>`,
					source: `*註：資料來源：理柏、晨星、財團法人台北金融研究發展基金會(獎項評選期間截至各頒獎年度前一年年底)，香港指標雜誌(Benchmark)(2013~2015年獎項評選期間截至九月底，2011~2012年評選期間截至十月底)，統計至2019/4/26，查詢完整得獎記錄請見：<a href="https://www.franklin.com.tw/Award.html" target="_blank">https://www.franklin.com.tw/Award.html</a>。`,
					moreLink: `https://www.franklin.com.tw/Fund/BasicInformation/0797`,
				},
				{
					img: 'images/man-5.png',
					tag: `金厲害`,
					fundName: `坦伯頓生技領航基金`,
					fundWarning: ``,
					text: `<p>除了老年趨勢、創新醫療與產業併購題材外，最近又多了新型冠狀病毒肺炎的議題，讓我備受市場關注。</p>
							<p>我只投資技術領先的生技或藥品廠商，並且善於挖掘需求尚未被滿足，具有高定價能力的領域，根本就是投資伯樂來著！</p>
							<p>我受景氣週期影響較低，加上老年化趨勢帶動醫療需求不墜，以及未來可能還會有各種新型態病毒產生，無論從市場趨勢或資產配置的角度，我絕對是值得您擁有的選擇！</p>
							<p>人類的生老病死都和我有關係，你說我厲不厲害？</p>`,
					source: ``,
					moreLink: `https://event.franklin.com.tw/C2018_07_Q3_0796/`,
				},
				{
					img: 'images/man-6.png',
					tag: `金出息`,
					fundName: `新興市場月收益基金`,
					fundWarning: `(本基金之配息來源可能為本金)`,
					text: `<p>現階段究竟投資新興股票好，還是布局新興債券佳？小孩子才選擇，成熟的大人兩個都要！</p>
							<p>因為我背後有三大團隊撐腰，能動態平衡布局新興市場股債資產，一舉網羅股債匯市的收益機會！此外，我堅持採取可持續性配息的投資策略，為投資人尋找的潛在股利與債息收益，掌握新興市場風華再起的投資契機！</p>
							<p>雖然我很年輕，但絕對是值得信賴的明日之星，想要投資有出息，找我準沒錯！</p>`,
					source: ``,
					moreLink: `https://event.franklin.com.tw/em-dynamic-income-fund/index.html`,
				},
			],
        }
	},
	methods: {
		nextSpeech() {
			this.speech_no == (this.speech_content.length)-1 ? this.speech_no = 0 : this.speech_no ++;
		},
		preSpeech() {
			this.speech_no == 0 ? this.speech_no = (this.speech_content.length)-1 : this.speech_no --;
		},
		scrollToMedals() {
			var _target = $('#medals-item-area').offset().top;
			$("html,body").animate({
				scrollTop: _target
			}, 800);
		},
		toggleMedals() {
			TweenMax.fromTo(".speech-content-img-light div:eq(0), .speech-content-img-light div:eq(1)", 0.5, {
				y: '-5px',
				opacity: 0,
			},{
				y: '-75px',
				opacity: 1,
			});

			TweenMax.fromTo(".speech-content-img-bg", 0.5, {
				scale: 0.5,
				opacity: .6,
			},{
				scale: 1,
				opacity: 1,
			});

			TweenMax.fromTo(".speech-content-img-man", 0.5, {
				x: -100,
				opacity: 0,
			},{
				x: 0,
				opacity: 1,
			});

			TweenMax.fromTo(".speech-content-tag", 0.5, {
				y: 50,
				opacity: 0,
			},{
				y: 0,
				opacity: 1,
			});

			TweenMax.fromTo(".speech-content-tit", 0.5, {
				y: 50,
				opacity: 0,
			},{
				y: 0,
				opacity: 1,
				delay: 0.2
			});

			TweenMax.fromTo(".speech-content-text", 0.5, {
				y: 50,
				opacity: 0,
			},{
				y: 0,
				opacity: 1,
				delay: 0.4
			});
		},
	},
	watch: {
		speech_no(val) {
			this.speech_no = val
		},
	},
};

var content = new Vue({
	el: "#content",
	mixins: [speech],
	data: {
		name: "富蘭克林證券投顧",
		screenWidth: document.body.clientWidth,
		screenHeight: document.body.clientHeight,
		windowWidth: $(window).innerWidth(),
		windowHeight: $(window).innerHeight(),
		menuBtnActive: false,
		navbarShow: false,
		ieUseMask: true,
		thisPath: location.protocol + "//" + location.host,
	},
	mounted() {
		// this.signature();
		this.addNoOpener();
		this.useJq();
		this.hideIeMask();
		this.showTarget();
		this.topBtn();
		this.scrollMagic();
		// this.sameHeight('discount-item-text');


		$(window).resize(() => {
			this.windowWidth = $(window).innerWidth();
			this.windowHeight = $(window).innerHeight();
			// this.sameHeight('discount-item-text');
		});

		setTimeout(() => {
			this.playVoice(277.18);
			setTimeout(()=>{
				this.playVoice(349.23);
				setTimeout(() => {
					this.playVoice(392.00);
				}, 200);
			}, 400);
		}, 1000);
	},
	methods: {
		signature() {
			console.log(
				"%cMade by Captain%c2020/02",
				"color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
				"color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;"
			);
		},
		toggleLightBox(name) {
			this.$refs[name].toggle = !this.$refs[name].toggle;
		},
		toggleMobileNavbar() {
			this.menuBtnActive === false ? (this.menuBtnActive = true) : (this.menuBtnActive = false);
			this.navbarShow === false ? (this.navbarShow = true) : (this.navbarShow = false);
		},
		hideMobileNavbar() {
			this.menuBtnActive = false;
			this.navbarShow = false;
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
				_linkHasTargetBlank
					.eq(n)
					.attr("href")
					.indexOf(this.thisPath) ?
					_linkHasTargetBlank.eq(n).attr("rel", "nofollow me noopener noreferrer") :
					"";
			};
		},
		hideIeMask() {
			// ie用的遮罩
			setTimeout(() => {
				this.ieUseMask = false
			}, 4000);
		},
		showTarget() {
			// 抓網址參數判斷要馬上顯示的區塊
			var url = location.href,
				i,
				openInfo = '';

			if (url.indexOf('?') != -1) {

				// 抓取網址參數判斷 --- Start
				function getUrlParams(url) {
					// 回傳網址參數Object
					var params = {};
					(url + "?").split("?")[1].split("&").forEach(function (pair) {
						pair = (pair + "=").split("=").map(decodeURIComponent);
						if (pair[0].length) {
							params[pair[0]] = pair[1];
						}
					});
					return params;
				}

				var obj = getUrlParams(location.href);
				// 因為#hash會直接串在最後一個參數後面, 故需要取代處理
				if (Object.keys(obj).length && obj.hasOwnProperty('openInfo')) openInfo = obj.openInfo.indexOf('#') > -1 ? obj.openInfo.replace(location.hash, "") : obj.openInfo;
				// 抓取網址參數判斷 --- End

				if (this.$refs[openInfo] != undefined) {
					this.$refs[openInfo].toggle = true;
					if (openInfo == 'q1' || openInfo == 'q2' || openInfo == 'q3' || openInfo == 'q4') {
						setTimeout(function(){
							var targetOffset = $('.qa').offset().top;
							window.scrollTo(0, targetOffset);
						}, 500);
					};
					if (openInfo == 'fund1' || openInfo == 'fund2' || openInfo == 'fund3' || openInfo == 'fund4') {
						setTimeout(function () {
							var targetOffset = $('#recommend').offset().top;
							window.scrollTo(0, targetOffset - 100);
						}, 500);
					};
				};
				if (openInfo == 'recommend') {
					setTimeout(function () {
						var targetOffset = $('#recommend').offset().top;
						window.scrollTo(0, targetOffset-100);
						// console.log(openInfo, targetOffset);
					}, 500);
				};
                /*
                    例 /index.html?openInfo=q1
                */
			};
		},
		topBtn() {
			$(window).bind('scroll resize', function () {
			    var $this = $(this);
			    var $this_Top = $this.scrollTop();

			    //當高度小於100時，關閉區塊 
			    if ($this_Top < 100) {
			        $('.topBtn').stop().css({
						'transform': "matrix(1, 0, 0, 1, 0, 400)",
						opacity: 0,
			        });
			    }
			    if ($this_Top > 100) {
			        $('.topBtn').stop().css({
						'transform': "matrix(1, 0, 0, 1, 0, 0)",
						opacity: 1,
			        });
			    }
			}).scroll();
		},

		//-------------------------------------scrollMagic
		scrollMagic() {
			// init controller
			var controller = new ScrollMagic.Controller();

			// banner --------------------------------------------------
			var bannerTimeLine = new TimelineMax();

			new ScrollMagic.Scene({triggerElement: ".banner", offset: 0})
				.setTween(bannerTimeLine)
				.addTo(controller);
			
			bannerTimeLine.add(
				TweenMax.from('.banner-content-tit', 0.4, {
					y: 100,
					opacity: 0,
				}),
			).add(
				TweenMax.from('.banner-content-text', 0.4, {
					y: 100,
					opacity: 0,
				}), 0.2
			).add(
				TweenMax.from('.banner-kv-mike', 0.4, {
					x: -100,
					opacity: 0,
				}), 0.6
			).add(
				TweenMax.from('.banner-kv-man', 0.4, {
					x: -100,
					opacity: 0,
				}), 0.8
			);

			// 獎牌區 --------------------------------------------------
			var introductionTimeLine = new TimelineMax();

			new ScrollMagic.Scene({triggerElement: ".introduction", offset: 0})
				.setTween(introductionTimeLine)
				.addTo(controller);

			introductionTimeLine.add(
				TweenMax.staggerFrom('.medals-item', 0.3, {
					y: 100,
					opacity: 0,
				}, 0.1),
			);

			// 演講區 --------------------------------------------------
			var speechTimeLine = new TimelineMax();

			new ScrollMagic.Scene({triggerElement: ".speech", offset: 0})
				.setTween(speechTimeLine)
				.addTo(controller);

			speechTimeLine.add([
				TweenMax.fromTo(".speech-content-img-light div:eq(0), .speech-content-img-light div:eq(1)", 0.5, {
					y: '-5px',
					opacity: 0,
				},{
					y: '-75px',
					opacity: 1,
				}),
	
				TweenMax.fromTo(".speech-content-img-bg", 0.5, {
					scale: 0.5,
					opacity: .6,
				},{
					scale: 1,
					opacity: 1,
				}),
	
				TweenMax.fromTo(".speech-content-img-man", 0.5, {
					x: -100,
					opacity: 0,
				},{
					x: 0,
					opacity: 1,
				}),

				TweenMax.fromTo(".speech-content-tag", 0.5, {
					y: 50,
					opacity: 0,
				},{
					y: 0,
					opacity: 1,
				}),
	
				TweenMax.fromTo(".speech-content-tit", 0.5, {
					y: 50,
					opacity: 0,
				},{
					y: 0,
					opacity: 1,
					delay: 0.2
				}),
	
				TweenMax.fromTo(".speech-content-text", 0.5, {
					y: 50,
					opacity: 0,
				},{
					y: 0,
					opacity: 1,
					delay: 0.4
				}),
			]);
		
		},

		//-------------------------------------使用jq區塊
		useJq() {
			//-------------------------------------錨點平滑滾動效果
			$('a[href*="#"]').click(function () {
				if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
					var $target = $(this.hash);
					$target = ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
					if ($target.length) {
						var targetOffset = $target.offset().top;
						$("html,body").animate({
							scrollTop: targetOffset
						},
							1000
						);
						return false;
					}
				}
			});

		},

		//-------------------------------------播放聲音
		playVoice(hz) {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;
			(function () {
				if (!window.AudioContext) {
					console.log("當前瀏覽器不支援Web Audio API");
					return;
				}

				// 創建新的音頻上下文接口
				var audioCtx = new AudioContext();

				// 發出的聲音頻率數據，表現為音調的高低(赫茲Hz)
				var arrFrequency = [hz, hz];

				// 音調依次遞增或者遞減處理需要的參數
				var start = 0,
					direction = 1;

				// 當前頻率
				var frequency = arrFrequency[start];
				// 如果到頭，改變音調的變化規則（增減切換）
				if (!frequency) {
					direction = -1 * direction;
					start = start + 2 * direction;
					frequency = arrFrequency[start];
				}
				// 改變索引，下一次hover時候使用
				start = start + direction;

				// 創建一個OscillatorNode, 它表示一個週期性波形（振盪），基本上來說創造了一個音調
				var oscillator = audioCtx.createOscillator();
				// 創建一個GainNode,它可以控制音頻的總音量
				var gainNode = audioCtx.createGain();
				// 把音量，音調和終節點進行關聯
				oscillator.connect(gainNode);
				// audioCtx.destination返回AudioDestinationNode對象，表示當前audio context中所有節點的最終節點，一般表示音頻渲染設備
				gainNode.connect(audioCtx.destination);
				// 指定音調的類型，其他還有sine|square|triangle|sawtooth
				oscillator.type = "sine";
				// 設置當前播放聲音的頻率，也就是最終播放聲音的調調
				oscillator.frequency.value = frequency;
				// 當前時間設置音量為0
				gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
				// 0.01秒後音量為1
				gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
				// 音調從當前時間開始播放
				oscillator.start(audioCtx.currentTime);
				// 1秒內聲音慢慢降低，是個不錯的停止聲音的方法
				gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
				// 1秒後完全停止聲音
				oscillator.stop(audioCtx.currentTime + 1);
			})();
		},
	},
	watch: {
		screenWidth(val) {
			this.screenWidth = val
		},
		screenHeight(val) {
			this.screenHeight = val
		},
		windowWidth(val) {
			this.windowWidth = val
		},
		windowHeight(val) {
			this.windowHeight = val
		},
	},
});