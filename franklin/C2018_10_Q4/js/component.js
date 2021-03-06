/*
    ====================================================================
	⚓ /───────╮  /────╮  /────────╮/────────╮/────────╮/───╮/──╮   /──╮⚓
	 │  ╭─────╯ / ╭──╮ \ │  ╭──╮  │╰──╮  ╭──╯│  ╭──╮  ││   ││    \ │  │
	 │  │      │  ╰──╯  ││  ╰──╯  │   │  │   │  ╰──╯  ││   ││  │\ \│  │
	 │  │      │  ╭──╮  ││  ╭─────/   │  │   │  ╭──╮  ││   ││  │ \ │  │
	 │  ╰─────╮│  │  │  ││  │         │  │   │  │  │  ││   ││  │  \   │
    ⚓╰────────/╰──╯  ╰──/╰──/         ╰──/   ╰──╯  ╰──/╰───/╰──/   ╰──/⚓
    Captain Wei 201809.
    ====================================================================
*/
// ========= 開戶 ==============================================================================================================================
Vue.component('account-opening-btn', {
    template:  `<a class="btn btn-type1" target="_blank" href="https://etrade.franklin.com.tw/Open/NewMember" title="預約開戶買湯去">
                    <div class="btn-type1-info">
                        <div class="btn-type1-info-sTit">
                            預約開戶
                        </div>
                        <div class="btn-type1-info-tit">
                            買湯去 <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </a>`,
});

// ========= 登入下單 ==============================================================================================================================
Vue.component('login-order-btn', {
    template:  `<a class="btn btn-type1 btn-type1-style2" target="_blank" href="https://etrade.franklin.com.tw/Home/Login" title="登入下單喝湯去">
                    <div class="btn-type1-info">
                        <div class="btn-type1-info-sTit">
                            登入下單
                        </div>
                        <div class="btn-type1-info-tit">
                            喝湯去 <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </a>`,
});

Vue.component('login-order-btn2', {
    template:  `<a class="btn btn-type1" target="_blank" href="https://etrade.franklin.com.tw/Home/Login" title="登入下單喝湯去">
                    <div class="btn-type1-info">
                        <div class="btn-type1-info-sTit">
                            登入下單
                        </div>
                        <div class="btn-type1-info-tit">
                            喝湯去 <i class="fas fa-caret-right"></i>
                        </div>
                    </div>
                </a>`,
});

// ========= 太醫院把脈 ==============================================================================================================================
Vue.component('questionnaire-option', {
    props: ['option'],
    template:  `<div class="questionnaire-right-info-option-list">
                    <div>
                        <strong>{{option}}</strong>
                        <div class="questionnaire-right-info-option-list-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <img src="images/nav-bg-icon.png" alt="">
                    </div>
                </div>`,
});

Vue.component('questionnaire-right', {
    data: function(){
        return {
            no: 0,
            list: [
                {
                    infoTit: '先提供你現在的生活角色？',
                    infoTitImg: 'images/section-3-stit-1.png',
                    infoTitImgAlt: '望診',
                    option1: '我是剛出社會的小資族',
                    option2: '我是工作一段時間的三明治族',
                    option3: '已經是快樂的退休族',
                    manImg: 'images/section-3-man-1.png',
                },
                {
                    infoTit: '當早上起床看到新聞播著市場大跌，你會？',
                    infoTitImg: 'images/section-3-stit-2.png',
                    infoTitImgAlt: '聞診',
                    option1: '覺得人生好難、全部或部分賣出',
                    option2: '先觀望，不動聲色',
                    option3: '變身現代巴菲特，危機入市',
                    manImg: 'images/section-3-man-2.png',
                },
                {
                    infoTit: '你偏好怎樣的投資配置？',
                    infoTitImg: 'images/section-3-stit-3.png',
                    infoTitImgAlt: '問診',
                    option1: '喜歡積極、報酬高的投資',
                    option2: '波動太大會睡不著，最好是穩穩領息最好',
                    option3: '我什麼都不懂，最好是有人可以幫我決定',
                    manImg: 'images/section-3-man-3.png',
                },
                {
                    infoTit: '當壓力大的時候，肩頸僵硬程度？',
                    infoTitImg: 'images/section-3-stit-4.png',
                    infoTitImgAlt: '切診',
                    option1: '不管壓力再大，從來都不會影響',
                    option2: '偶爾容易緊張，吃頓好的就好',
                    option3: '非常容易焦慮，常常去中醫報到',
                    manImg: 'images/section-3-man-4.png',
                }
            ],
            questionnaireBtn: false,
            isShow: false,
        }
    },
    template:  `<div class="questionnaire-right wow fadeIn">
                    <div class="questionnaire-right-text">
                        <strong>中醫進補最忌盲目亂補，投資也是如此，喝湯前先讓太醫院把把脈吧</strong>
                    </div>
                    <div class="questionnaire-right-info" :class="{show: isShow}">
                        <div class="infoFrameCorner">
                            <div class="infoFrameCorner-cornerRound">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div class="infoFrameCorner-cornerIcon">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <h3 class="questionnaire-right-info-tit" :title="this.list[no].infoTit">
                                <img :src="this.list[no].infoTitImg" :alt="this.list[no].infoTitImgAlt"> <strong>{{this.list[no].infoTit}}</strong>
                            </h3>
                            <div class="questionnaire-right-info-option">
                                <questionnaire-option :option="this.list[no].option1" @click.native="nextQuestion('0')"></questionnaire-option>
                                <questionnaire-option :option="this.list[no].option2" @click.native="nextQuestion('1')"></questionnaire-option>
                                <questionnaire-option :option="this.list[no].option3" @click.native="nextQuestion('2')"></questionnaire-option>
                            </div>
                        </div>
                    </div>
                    <div class="questionnaire-right-btnArea">
                        <div class="questionnaire-right-btn">
                            <slot name="btn"></slot>
                        </div>
                        <div class="questionnaire-right-btn">
                            <button class="btn btn-type1 btn-type2" v-if="questionnaireBtn" @click="resetQuestion()">
                                <div class="btn-type1-info">
                                    <div class="btn-type1-info-tit">
                                        重新把脈去 <i class="fas fa-redo-alt"></i>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="questionnaire-right-man wow fadeInUp">
                        <img :src="this.list[no].manImg" alt="">
                    </div>
                </div>`,
    methods: {
        nextQuestion(num) {
            // this.no == 3 ? this.list[3].manImg = 'images/section-3-man-5.png' : '';
            if ( this.no == 3 ) {
                this.list[3].manImg = 'images/section-3-man-5.png';
                this.questionnaireBtn = true;
                content.questionnaireBtn = true;
            }if ( this.no < 3 ) {
                this.no = this.no + 1;
                this.isShow = true;
                setTimeout(() => {
                    this.isShow = false;
                }, 500);
                if ( this.no == 3 ) {
                    content.questionnaireAnswer = num
                }
            }
            // console.log(num, this.no);
        },
        resetQuestion() {
            this.no = 0;
            this.list[3].manImg = 'images/section-3-man-4.png';
            this.questionnaireBtn = false;
            content.questionnaireBtn = false;
            this.isShow = true;
            setTimeout(() => {
                this.isShow = false;
            }, 500);
        },
    }
});

// ========= 基金介紹 ==============================================================================================================================
Vue.component('fund-introduction', {
    props: ['no', 'list', 'tit', 'titWarning', 'seoTit', 'text', 'remarks', 'link', 'orderLink'],
    template:  `<div class="fundLightBox">
					<h3 class="tit" :title="list[no].seoTit">
						<strong>{{list[no].tit}}<span class="tit-fundFocus">{{list[no].titWarning}}</span></strong>
					</h3>
					<div class="lightBox-container-text" v-html="list[no].text"></div>
                    <div class="lightBox-container-remarks" v-html="list[no].remarks"></div>
                    <div class="lightBox-container-btnArea">
                        <div class="lightBox-container-btn">
							<login-order-btn2 :href="list[no].orderLink"></login-order-btn2>
						</div>
						<div class="lightBox-container-btn">
							<a class="btn btn-type1 btn-type2" target="_blank" :href="list[no].link">
								<div class="btn-type1-info">
									<div class="btn-type1-info-tit">
										更多基金資訊 <i class="fas fa-caret-right"></i>
									</div>
								</div>
							</a>
						</div>
					</div>
                </div>`,
});

// ========= 把脈完答案燈箱 ==============================================================================================================================
Vue.component('prescription-lightbox', {
    props: ['list', 'no', 'titImg', 'tit', 'item1Text', 'item2Text', 'item3Text', 'baseBtn'],
    template:  `<div class="prescriptionLightBox">
					<h3 class="tit">
						<img :src="list[no].titImg" :alt="list[no].tit">
                    </h3>
					<div class="prescriptionLightBox-info">
						<div class="prescriptionLightBox-left">
							<img src="images/section-3-lightbox-man.png" alt="">
						</div>
                        <div class="prescriptionLightBox-right">
                            <div class="lightBox-container-text" v-if="list[no].hasDescription" v-html="list[no].description"></div>
							<div class="lightBox-container-text">
								<div class="tonifyingQi-info-item">
									<div class="tonifyingQi-info-item-tit"><img src="images/section-3-lightbox-stit-1.png" alt="功效"></div>
									<div class="tonifyingQi-info-item-text" v-html="list[no].item1Text"></div>
								</div>
								<div class="tonifyingQi-info-item">
									<div class="tonifyingQi-info-item-tit"><img src="images/section-3-lightbox-stit-2.png" alt="組成"></div>
									<div class="tonifyingQi-info-item-text" v-html="list[no].item2Text"></div>
								</div>
								<div class="tonifyingQi-info-item">
									<div class="tonifyingQi-info-item-tit"><img src="images/section-3-lightbox-stit-3.png" alt="用法"></div>
									<div class="tonifyingQi-info-item-text" v-html="list[no].item3Text"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="lightBox-container-btnArea" v-if="list[no].baseBtn">
						<div class="lightBox-container-btn">
							<account-opening-btn></account-opening-btn>
						</div>
                        <div class="lightBox-container-btn">
                            <login-order-btn href="https://etrade.franklin.com.tw/Areas/C2018_10_Q4_ec/Home"></login-order-btn>
						</div>
                    </div>
                    <div class="lightBox-container-btnArea" v-else>
                        <div class="lightBox-container-btn">
							<a class="btn btn-type1 manyWords" target="_blank" href="https://www.franklin.com.tw/AI_robo/onepage.html">
                                <div class="btn-type1-info">
                                    <div class="btn-type1-info-sTit">
                                        立即了解
                                    </div>
                                    <div class="btn-type1-info-tit">
                                        完整富氏蘿蔔(Robo)湯配方 <i class="fas fa-caret-right"></i>
                                    </div>
                                </div>
                            </a>
						</div>
                    </div>
				</div>`,
});

// ========= 每月特價燈箱 ==============================================================================================================================
Vue.component('special-price-lightbox', {
    props: ['no', 'list', 'tit', 'text',],
    template:  `<div class="specialPriceLightBox">
					<h3 class="tit" :title="list[no].tit">
						<strong>{{ list[no].tit }}</strong>
					</h3>
					<div class="lightBox-container-text" v-html="list[no].text"></div>
					<div class="lightBox-container-btnArea">
						<div class="lightBox-container-btn">
							<account-opening-btn></account-opening-btn>
						</div>
						<div class="lightBox-container-btn">
							<login-order-btn></login-order-btn>
						</div>
					</div>
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
                            <div>
                                <div class="lightBox-close closeBtn" @click="closeLightBox()">
                                    <i class="fa fa-times" aria-hidden="true"></i>
                                </div>
                                <div class="lightBox-container-cornerIcon">
                                    <div></div>
									<div></div>
									<div></div>
									<div></div>
                                </div>
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

// ========= footer ==============================================================================================================================
// footer
Vue.component('footer-logo', {
    data: function(){
        return {
            name: '富蘭克林證券投顧',
        }
    },
    template: `<div class="footer-logo">
                    <a href="http://www.franklin.com.tw/" target="_blank" :title="this.name">
                        <img src="images/footer-logo-1.png" :alt="this.name">
                        <strong>{{this.name}}</strong>
                    </a>
                </div>`,
});

Vue.component('footer-contact',{
    data: function(){
        return {
            phoneTit: '國民理財專線',
        }
    },
    template: `<div class="footer-contact">
                    <div class="footer-contact-tel">
                        <strong>{{ this.phoneTit }}：</strong>
                        <a href="tel:0800-885-888" :title="this.phoneTit">
                            <strong>0800-885-888</strong>
                        </a>
                    </div>
                    <ul class="footer-contact-link">
                        <li>
                            <a href="https://www.facebook.com/franklin.taiwan/" target="_blank" title="粉絲團">
                                <img src="images/icon-fb.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="http://line.naver.jp/ti/p/%40franklin" target="_blank" title="Line">
                                <img src="images/icon-line.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/franklin0800885888" target="_blank" title="youtube">
                                <img src="images/icon-youtube.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>`,
});

Vue.component('footer-warning',{
    data: function(){
        return {
            list: [
                {
                    id: 0,
                    info: '本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。'
                },
                {
                    id: 1,
                    info: '本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。'
                },
                {
                    id: 2,
                    info: '由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。'
                },
                {
                    id: 3,
                    info: '由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。'
                },
                {
                    id: 4,
                    info: '境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之10%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。'
                },
                {
                    id: 5,
                    info: '基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.Franklin.com.tw" target="_blank">https://www.Franklin.com.tw</a>)查閱。'
                },
                {
                    id: 6,
                    info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。`
                },
            ]
        }
    },
    template: `<div class="footer-warning">
                    <ul>
                        <li v-for="item in list" v-bind:key="item.id" v-html="item.info"></li>
                    </ul>
                </div>`,
});

Vue.component('footer-area',{
    template: `<footer>
                    <div class="container">
                        <div class="clearfix">
                            
                            <footer-logo></footer-logo>
                            <footer-contact></footer-contact>
                            
                        </div>

                        <div class="copyright">
                            富蘭克林證券投資顧問(股)公司 ｜ 101年金管投顧新字第025號 ｜ 版權所有富蘭克林證券投顧 FRANKLIN TEMPLETON INVESTMENTS
                        </div>
                        <div class="footer-line"></div>
                        <footer-warning></footer-warning>
                    </div>
                </footer>`,
});

var content = new Vue({
    el: '#content',
    data: {
        name: '富蘭克林證券投顧',
        windowWidth: 0,
        windowHeight: 0,
        accountOpeningUrl: 'https://etrade.franklin.com.tw/Open/NewMember',
        orderUrl: 'https://etrade.franklin.com.tw/Home/Login',
        lightBoxHeight: 0,
        findno: 0,
        findList: [
            {
                tit: '富蘭克林坦伯頓精選收益基金',
                titWarning: '(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                seoTit: '富蘭克林坦伯頓精選收益基金(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                text: '本基金以歐美區域債市為主，並兼納部分新興市場債券，具有分散單一市場風險，且經理人不隨大盤配置，掌握更高收益機會。投資標的以高收益債、浮動利率貸款及投資級債為主，以其較高殖利率的特性，在利率走升期間，可具備較佳的防禦力。迎接升息環境，這檔基金已做好準備囉！',
                remarks: '註：基金持債之到期殖利率不代表基金總報酬率或配息率',
                link: 'https://event.franklin.com.tw/C2018_10_fund/0427.html',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F0427',
            },
            {
                tit: '富蘭克林坦伯頓新興國家固定收益基金',
                titWarning: '(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                seoTit: '富蘭克林坦伯頓新興國家固定收益基金(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                text: '本基金主要投資新興市場當地公債，享有新興國家相對強勁的景氣動能和評價面便宜優勢，積極配置高息債券以爭取收益空間(截至2018/6/30，持債殖利率達13.43%)，加碼具政經轉機題材的拉丁美洲，包括積極改革的巴西、新政府新氣象的阿根廷，另外也佈局在債信評等被調升的埃及、政經體質良好的印度等地，是補中益氣湯不可或缺的投資首選！',
                remarks: '註：基金持債之到期殖利率不代表基金總報酬率或配息率',
                link: 'https://event.franklin.com.tw/C2017_04_Q2/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F1049',
            },
            {
                tit: '富蘭克林坦伯頓穩定月收益基金',
                titWarning: '(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                seoTit: '富蘭克林坦伯頓穩定月收益基金(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)',
                text: '身體不適，補氣、補血缺一不可。同樣的「富蘭克林坦伯頓穩定月收益基金(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)」也是檔可補氣補血的基金，主要佈局在美國的股票與債券，股票部分目前加碼在政策作多、監管鬆綁、獲利成長動能轉佳及估值面相對便宜的金融、醫療及能源產業，債券部分則側重在高收益債，持債平均殖利率達6.78%(截至2018/6/30)，並因應景氣變化靈活調整股債配置比例，在美國經濟持續復甦下，本基金助您不漏接各產業輪動行情。',
                remarks: '註：基金持債之到期殖利率不代表基金總報酬率或配息率',
                link: 'https://event.franklin.com.tw/C2017_08_Q3_0839/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F0839',
            },
            {
                tit: '富蘭克林坦伯頓全球債券基金',
                titWarning: '(本基金之配息來源可能為本金)',
                seoTit: '富蘭克林坦伯頓全球債券基金(本基金之配息來源可能為本金)',
                text: '在美國升息、成熟國家債券價格偏貴的大環境中，本檔基金以全球思維戰略，為投資人打造高債信評級、高債息收益的債券投資新格局。因應美國利率上揚，基金瞄準新興債市高息收益機會，並搭配放空美國公債，降低持債存續期間的策略，積極爭取報酬空間。<br/>而貨幣策略側重具升息優勢的美元， 和精選反彈行情的新興國家貨幣， 並放空實施寬鬆政策和區域消息紛擾的歐日圓， 多方瞄準匯兌收益。 基金以獨門的資產配置模式， 調整債券、 貨幣的佈署策略， 將點亮債市投資光明燈。',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2017_11_Q4_0810/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F0810',
            },
            {
                tit: '富蘭克林坦伯頓多空策略基金',
                titWarning: '',
                seoTit: '富蘭克林坦伯頓多空策略基金',
                text: '「富蘭克林坦伯頓多空策略基金」是檔可有效管理風險及掌握機會下，創造超額報酬！儘管貿易戰糾紛和即將到來的期中選舉，將使市場波動和分歧度上升，但這有助股票對沖策略操作，有別於傳統股票或債券投資，這檔基金採取多空雙向配置，以尋求長期資本增值機會，是您補氣不可或缺的組方啊！',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2018_10_Q4_1641/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F1641',
            },
            {
                tit: '富蘭克林坦伯頓成長基金',
                titWarning: '(本基金之配息來源可能為本金)',
                seoTit: '富蘭克林坦伯頓成長基金(本基金之配息來源可能為本金)',
                text: '說到補氣，絕對不能不提「富蘭克林坦伯頓成長基金(本基金之配息來源可能為本金)」，這檔基金從 1954 年成立至今已經63歲了，歷經市場數次多空考驗，是國內核備104檔全球股票型基金中歷史最悠久者(理柏，2018/6月)，在基金界可以說是元氣十足阿!<br/><br/>本基金看好全球通膨、 利率及油價緩步墊高、 高齡化與新藥不斷創新的經濟環境， 因此佈局上側重各國『 金融、 能源、 醫療』 三大產業。 一起來分享本基金一甲子的投資智慧吧!',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2017_07_Q3_101/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F101',
            },
            {
                tit: '富蘭克林坦伯頓亞洲小型企業基金',
                titWarning: '',
                seoTit: '富蘭克林坦伯頓亞洲小型企業基金',
                text: '「富蘭克林坦伯頓亞洲小型企業基金」看好經濟復甦有利於小型企業獲利與股價提升，因此佈局新興亞洲小型企業的多元題材，如日常生活中接觸的服飾、食品、網購消費及超夯醫美標的。配置本檔基金不僅可活血，更有助於增加資產配置多樣性',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2017_06_Q3_1009/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F1009',
            },
            {
                tit: '富蘭克林坦伯頓科技基金',
                titWarning: '',
                seoTit: '富蘭克林坦伯頓科技基金',
                text: '今年科技類股持續擔任多頭主流，五月份MSCI世界資訊科技指數已突破三月中高點，再創新高。看到這可能有人會怕怕的，放心~與2000年科技泡沫不同，目前科技股擁有大量現金流、鞏固的經營模式，客戶基礎也夠大，且估值並無過高情況，基本面相當良好唷！<br/><br/>「富蘭克林坦伯頓科技基金」投資以美國為主的全球科技業，特別著重雲端運算、物聯網、電子商務、人工智慧等發展正夯的領域，包括許多科技龍頭公司:微軟、臉書、蘋果、Google、阿里巴巴等(截至2018/4/30)。申購本基金，就能一次參與這麼多家知名公司的成長動能，一次補好補滿！',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2018_07_Q3_0797/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F0797',
            },
            {
                tit: '富蘭克林坦伯頓生技領航基金',
                titWarning: '',
                seoTit: '富蘭克林坦伯頓生技領航基金',
                text: '學習補血養生就是希望可以透過中醫醫法讓自己和身邊的人健健康康，平時在家照顧長輩時，對於老年化趨勢想必心有戚戚焉，因此更不能錯過未來生技醫療的發展商機!<br/><br/>「富蘭克林坦伯頓生技領航基金」看好美國生技藥廠的領先技術，包括基因療法、免疫腫瘤療法等等，同時特別聚焦在癌症及孤兒藥領域，因其有大量未滿足的醫療需求、高度創新且藥價給付受到保護，近期醫學會議及新藥上市審核題材頻繁，加上併購動能增加，均有利於刺激生技類股上漲行情。申購本基金，立即掌握生技與藥品研發的投資機會!',
                remarks: '',
                link: 'https://event.franklin.com.tw/C2018_07_Q3_0796/',
                orderLink: 'https://etrade.franklin.com.tw/Home/Login?ReturnUrl=%2FTrade%2FLumpSum%2FShowForm%2F0796',
            },
        ],
        questionnaireBtn: false,
        questionnaireAnswer: 0,
        questionnaireAnswerList: [
            {
                titImg: 'images/section-3-lightbox-tit-2.png',
                tit: '烏骨雞湯',
                hasDescription: true,
                description: '<strong>冬季寒冷，強身補體首推烏股雞湯，這款投資補湯由較積極的產業型/新興市場基金及防禦型搭配而成。但投資和補身一樣，因應不同身體狀況，吃了太補有時候容易『上火』，建議可定期檢驗投資成果，在補身過程中如有任何疑問，都可以來電諮詢富氏中醫院意見！</strong>',
                item1Text: '本投資方性偏溫寒，最適合喜愛積極投資的你，深具潛力的市場除了可以奠定良好投資契機，更可為自己的未來打底',
                item2Text: '科技基金、亞洲小型企業基金、多空策略基金',
                item3Text: '每月規律服用、為自己未來打底',
                baseBtn: true,
            },
            {
                titImg: 'images/section-3-lightbox-tit-1.png',
                tit: '實在大補湯',
                hasDescription: true,
                description: '<strong>投資和補身一樣，成功關鍵就在『及早開始，持之以恆』，但投資環境變動越來越快速，建議可定期檢驗投資成果，在補身過程中如有任何疑問，都可以來電諮詢富氏中醫院意見！</strong>',
                item1Text: '本投資方性偏溫熱，最適合不愛波動喜歡領息的你，此湯具有降低投資風險，豐富資產配置等作用',
                item2Text: '坦伯頓成長基金<span class="tonifyingQi-info-item-text-fundFocus">(本基金之配息來源可能為本金)</span>、穩定月收益基金<span class="tonifyingQi-info-item-text-fundFocus">(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)</span> 、多空策略基金',
                item3Text: '每月規律服用、穩健收息',
                baseBtn: true,
            },
            {
                titImg: 'images/section-3-lightbox-tit-3.png',
                tit: '富氏蘿蔔(Robo)湯',
                hasDescription: false,
                description: '',
                item1Text: '本投資方性偏中性，適合碰到投資議題就渾身發軟，覺得投資跟人生一樣難的你，即早服下富氏蘿蔔湯， 省了投資煩惱',
                item2Text: '為您量身打造的獨家富氏蘿蔔湯，缺什麼自動補',
                item3Text: '一次打通投資血路，脫胎換骨化身理財高人',
                baseBtn: false,
            },
        ],
        specialPriceNo: 0,
        specialPriceList: [
            {
                tit: '十月方案',
                text: '<strong class="focusText">『333』</strong>大補湯優惠，於10/1~12/31提供低門檻、超優惠大補湯專屬優惠，定期定額<strong class="focusText">3</strong>檔基金只要<strong class="focusText">3</strong>千元，更可享<strong class="focusText">3</strong>折超低優惠，讓您以輕鬆、便利的方式，打通理財、人生任督二脈',
            },
            {
                tit: '十一月方案',
                text: '專屬11月抓藥優惠，不僅讓您顧好<strong class="focusText">身體</strong>，更替您省了荷包。本網頁提到之補氣、補血成分基金共計九檔，於11/1~11/30之間手續費單筆全面<strong class="focusText">0.1%</strong>優惠，股、債基金任選，補氣補血雙重功效、多元配置資產，限量1,111名，名額有限，想補要快喔！',
            },
            {
                tit: '十二月方案',
                text:  `投資和補身體一樣都需每月定時定量，維持規律，持之以恆。只要您長期投資，定期定額扣款達到一定次數，申購費率立即降！扣多多、省多多，富蘭克林為您補好補滿
                        <div class="specialPriceLightBox-table">
                            <div class="specialPriceLightBox-table-row specialPriceLightBox-table-row-tit">
                                <div class="specialPriceLightBox-table-item">
                                    <strong>扣款次數</strong>
                                </div>
                                <div class="specialPriceLightBox-table-item">
                                    <strong>費率</strong>
                                </div>
                            </div>
                            <div class="specialPriceLightBox-table-row">
                                <div class="specialPriceLightBox-table-item">
                                    1-6次
                                </div>
                                <div class="specialPriceLightBox-table-item">
                                    0.3%
                                </div>
                            </div>
                            <div class="specialPriceLightBox-table-row">
                                <div class="specialPriceLightBox-table-item">
                                    7-12次
                                </div>
                                <div class="specialPriceLightBox-table-item">
                                    0.2%
                                </div>
                            </div>
                            <div class="specialPriceLightBox-table-row">
                                <div class="specialPriceLightBox-table-item">
                                    13次以上
                                </div>
                                <div class="specialPriceLightBox-table-item">
                                    0.1%
                                </div>
                            </div>
                        </div>`,
            },
        ],
        // url: '',
        menuBtnActive: false,
        navbarShow: false,
    },
    // mounted() {
    //     this.urlOpenLightbox();
    // },
    methods: {
        toggleLightBox(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
            setTimeout(()=>{
                this.windowHeight = window.innerHeight;
                this.lightBoxHeight = document.getElementById("lightBoxContainer").offsetHeight;
                // console.log(this.windowHeight, this.lightBoxHeight, document.getElementById("lightBoxContainer").offsetHeight);
                if ( this.lightBoxHeight >= this.windowHeight ) {
                    this.$refs[name].isFixedHeight = true;
                }
            },100);
        },
        fundNo(n) {
            this.findno = n;
        },
        specialPrice_No(n) {
            this.specialPriceNo = n;
        },
        toggleMobileNavbar() {
            this.menuBtnActive === false ? this.menuBtnActive = true : this.menuBtnActive = false;
            this.navbarShow === false ? this.navbarShow = true : this.navbarShow = false;
        },
        hideMobileNavbar() {
            this.menuBtnActive = false
            this.navbarShow = false
        }
    },
});