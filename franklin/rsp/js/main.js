// ========= header ==============================================================================================================================
Vue.component('headerArea', {
	data: function(){
		return {
			menuBtnActive: false,
			navbarShow: false,
		};
	},
	props: ['activeNumber'],
	template: ` <header class="header">
					<div class="container clearfix">
						<div class="logo">
							<a href="http://www.franklin.com.tw/" target="_blank" title="富蘭克林證券投顧">
								<picture>
									<source media="(max-width: 991px)" srcset="https://event.franklin.com.tw/commonResources/images/logo2019.svg">
									<img src="https://event.franklin.com.tw/commonResources/images/header-logo.png" alt="富蘭克林‧國民的基金">
								</picture>
								<div class="logo-text">
									富蘭克林‧國民的基金
								</div>
							</a>
						</div>
						<nav class="navBar" :class="{show: navbarShow}">
							<ul>
								<li :class="{active : (activeNumber == 0)}">
									<a href="index.html" title="首頁">
										首頁
									</a>
								</li>
								<li :class="{active : (activeNumber == 1)}">
									<a href="concept.html" title="什麼是定期定額">
										什麼是定期定額
									</a>
								</li>
								<li :class="{active : (activeNumber == 2)}">
									<a href="video.html" title="免費影音教學">
										免費影音教學
									</a>
								</li>
								<li :class="{active : (activeNumber == 3)}">
									<a href="qa.html" title="Q&A">
										Q&A
									</a>
								</li>
							</ul>
						</nav>

						<!--手機menu按鍵-->
						<div class="menuBtn" data-wow-delay="0.8s" :class="{active: menuBtnActive}" @click="toggleMobileNavbar()">
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
	methods: {
		toggleMobileNavbar() {
			this.menuBtnActive === false ? (this.menuBtnActive = true) : (this.menuBtnActive = false);
			this.navbarShow === false ? (this.navbarShow = true) : (this.navbarShow = false);
		},
		hideMobileNavbar() {
			this.menuBtnActive = false;
			this.navbarShow = false;
		},
	},
});

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
				info: `本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。`
			},
			{
				id: 1,
				info: `本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。`
			},
			{
				id: 2,
				info: `由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。`
			},
			{
				id: 3,
				info: `由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。`
			},
			{
				id: 4,
				info: `境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。`
			},
			{
				id: 5,
				info: `基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.franklin.com.tw" target="_blank">https://www.franklin.com.tw</a>)查閱。`
			},
			{
				id: 6,
				info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。【富蘭克林證券投顧獨立經營管理】`
			},
			{
				id: 7,
				info: `投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證。`
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

// ========= 報酬率排名 ==============================================================================================================================
Vue.component('returnRanking', {
	data: function () {
		return {
			list: [
				{
					id: 0,
					tit: `資訊科技股票`,
					rsp: `101.96%`,
					single: `216.30%`,
				},
				{
					id: 1,
					tit: `歐洲房地產股票`,
					rsp: `57.58%`,
					single: `131.67%`,
				},
				{
					id: 2,
					tit: `公用事業股票`,
					rsp: `73.91%`,
					single: `188.10%`,
				},
				{
					id: 3,
					tit: `主題股票 水資源`,
					rsp: `47.38%`,
					single: `115.54%`,
				},
				{
					id: 4,
					tit: `醫療保健股票`,
					rsp: `63.52%`,
					single: `159.28%`,
				},
				{
					id: 5,
					tit: `瑞士中小型股票`,
					rsp: `44.71%`,
					single: `131.32%`,
				},
				{
					id: 6,
					tit: `生物科技股票`,
					rsp: `63.46%`,
					single: `195.85%`,
				},
				{
					id: 7,
					tit: `非必需消費品股票`,
					rsp: `42.88%`,
					single: `139.21%`,
				},
				{
					id: 8,
					tit: `美國股票`,
					rsp: `61.08%`,
					single: `149.50%`,
				},
				{
					id: 9,
					tit: `大中華股票`,
					rsp: `42.57%`,
					single: `76.21%`,
				},
			],
		}
	},
	template: ` <article class="returnRanking">
					<section class="returnRanking-item" v-for="item in list" v-bind:key="item.id">
						<div class="returnRanking-content">
							<h4 class="returnRanking-tit" :title="item.tit">
								{{item.tit}}
							</h4>
							<div class="returnRanking-bottom">
								<div class="returnRanking-bottom-item">
									定期定額
									<strong>
										{{item.rsp}}
									</strong>
								</div>
								<div class="returnRanking-bottom-item">
									單筆
									<strong>
										{{item.single}}
									</strong>
								</div>
							</div>
						</div>
					</section>
				</article>`,
});

// ========= 基金列表 ==============================================================================================================================
Vue.component('fundList', {
	props: ['tag', 'img', 'url', 'name'],
	template: ` <section class="fundList-item">
					<div class="fundList-content">
						<h4 class="fundList-tag" :title="tag" v-html="tag"></h4>
						<img :src="img" :alt="this.stripHTML(name)" class="fundList-img">
						<div class="btn neumorphismType">
							<a :href="url" target="_blank" :title="'立即申購-' + this.stripHTML(name)">
								立即申購 <i class="fas fa-angle-right"></i>
							</a>
						</div>
						<p class="fundList-name" v-html="name"></p>
					</div>
				</section>`,
	methods: {
		stripHTML(n) {
			let reTag = /<(?:.|\s)*?>/g;
			return n.replace(reTag,"");
		},
	},
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

// ========= Q&A ==============================================================================================================================
Vue.component('qaItem',{
	props: ['tit'],
	data: function() {
		return {
			toggle: false,
		};
	},
	template: ` <section class="qa-item">
					<div class="qa-content">
						<h3 class="qa-tit" :class="toggle == true ? 'active': ''" :title="tit" @click="toggleQaItem();">
							{{tit}}
						</h3>
						<div class="qa-info" v-show="toggle">
							<slot name="qaInfo"></slot>
						</div>
					</div>
				</section>`,
	methods: {
		toggleQaItem() {
			this.toggle = !this.toggle;
		},
	},
});

var content = new Vue({
	el: "#content",
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
		kinds: 1,
	},
	mounted() {
		this.addNoOpener();
		this.useJq();
		this.hideIeMask();
		this.showTarget();
		this.topBtn();
		this.sameHeight('advantage-content');
		this.sameHeight('sameHeightItme1 .introduction-content p');
		this.sameHeight('sameHeightItme2 .introduction-content p');


		$(window).resize(() => {
			this.windowWidth = $(window).innerWidth();
			this.windowHeight = $(window).innerHeight();
			this.sameHeight('advantage-content');
			this.sameHeight('sameHeightItme1 .introduction-content p');
			this.sameHeight('sameHeightItme2 .introduction-content p');
		});
	},
	methods: {
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

			//-------------------------------------敬請期待
			$('.stayTuned').on('click', function(){
				alert('敬請期待')
			});

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
		kinds(val) {
			this.kinds = val
		},
	},
});