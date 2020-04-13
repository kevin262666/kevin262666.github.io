// ========= footer ==============================================================================================================================
// footer
Vue.component("footer-logo", {
	data: function () {
		return {
			name: "富蘭克林證券投顧"
		};
	},
	template: `<div class="footer-logo">
                    <a href="http://www.franklin.com.tw/" target="_blank" :title="name">
                        <logo-svg></logo-svg>
                        <strong>{{name}}</strong>
                    </a>
                </div>`
});

Vue.component("footer-contact", {
	data: function () {
		return {
			phoneTit: "國民理財專線"
		};
	},
	template: `<div class="footer-contact">
                    <div class="footer-contact-tel">
                        <span>{{ phoneTit }}：</span>
                        <a href="tel:0800-885-888" :title="phoneTit">
                            <strong>0800-885-888</strong>
                        </a>
                    </div>
                    <ul class="footer-contact-link">
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
                </div>`
});

Vue.component("footer-warning", {
	data: function () {
		return {
			list: [{
					id: 0,
					info: "本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。"
				},
				{
					id: 1,
					info: `<b>本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。</b>`
				},
				{
					id: 2,
					info: `<b class="footer-warning-focus">由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。</b>`
				},
				{
					id: 3,
					info: "由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。"
				},
				{
					id: 4,
					info: `<span class="footer-warning-focus">境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之20%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。</span>`
				},
				{
					id: 5,
					info: `<b>基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.franklin.com.tw" target="_blank">https://www.franklin.com.tw</a>)查閱。</b>`
				},
				{
					id: 6,
					info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。
                            <div class="footer-warning-remark">【富蘭克林證券投顧獨立經營管理】</div>`
				}
			]
		};
	},
	template: `<div class="footer-warning">
                    <ul>
                        <li v-for="item in list" v-bind:key="item.id" v-html="item.info"></li>
                    </ul>
                </div>`
});

Vue.component("footer-area", {
	template: `<footer>
                    <div class="footer-header">
                        <div class="container">
                            <div class="clearfix">
                                <footer-logo></footer-logo>
                                <footer-contact></footer-contact>
                            </div>
                            <div class="copyright">
                                富蘭克林證券投資顧問(股)公司 ｜ 台北市忠孝東路四段87號8樓 ｜ 101年金管投顧新字第025號 ｜ 版權所有富蘭克林證券投顧 FRANKLIN TEMPLETON INVESTMENTS
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <footer-warning></footer-warning>
                    </div>
                </footer>`
});

// ========= logo ==============================================================================================================================
Vue.component("logoSvg", {
	template: ` <svg version="1.1" x="0px" y="0px" viewBox="0 0 303 145" style="enable-background:new 0 0 303 145;" xml:space="preserve">
                    <g>
                        <path class="st0" d="M11.2,107c-0.26-0.99-0.49-1.66-0.91-2.16c-0.49-0.62-1.14-0.83-2.81-0.83H5.95c-0.86,0-0.96,0.05-0.96,0.88
                        v5.9h2.34c2.31,0,2.52-0.23,2.83-1.9h0.86v5.1h-0.86c-0.29-1.74-0.52-2-2.83-2H4.99v4.34c0,2.37,0.21,2.52,2.52,2.71v0.83h-7.72
                        v-0.83c1.95-0.18,2.18-0.34,2.18-2.71v-9.88c0-2.31-0.23-2.47-2.16-2.63v-0.86H11.8c0,0.62,0.13,2.47,0.26,3.9L11.2,107z
                        M30.7,120.1c-0.21,0-0.49-0.03-0.81-0.03c-2.81-0.13-3.82-0.8-4.94-2.47c-0.75-1.14-1.53-2.63-2.29-3.95
                        c-0.44-0.75-0.88-1.09-1.92-1.09h-0.6v3.93c0,2.16,0.23,2.37,2.24,2.55v0.83h-7.46v-0.83c2-0.18,2.26-0.39,2.26-2.55v-10.17
                        c0-2.13-0.23-2.34-2.16-2.52v-0.83h6.97c2.16,0,3.46,0.23,4.47,0.94c1.04,0.7,1.74,1.85,1.74,3.46c0,2.26-1.46,3.56-3.28,4.32
                        c0.42,0.81,1.43,2.52,2.21,3.72c0.91,1.4,1.46,2.18,2.03,2.78c0.6,0.65,1.09,0.96,1.69,1.14L30.7,120.1z M21.03,111.6
                        c1.17,0,2.03-0.18,2.65-0.7c0.91-0.75,1.3-1.79,1.3-3.15c0-2.81-1.69-3.82-3.33-3.82c-0.7,0-1.09,0.1-1.27,0.26
                        c-0.18,0.16-0.23,0.44-0.23,1.04v6.37H21.03z M42.11,119.87v-0.83c1.56-0.23,1.74-0.52,1.35-1.61c-0.29-0.86-0.73-2.08-1.2-3.33
                        h-5.17c-0.34,0.94-0.7,1.95-1.01,2.99c-0.44,1.4-0.31,1.72,1.59,1.95v0.83h-5.75v-0.83c1.69-0.21,2.03-0.47,2.91-2.71l5.36-13.44
                        l1.14-0.31c1.64,4.52,3.28,9.21,4.97,13.68c0.86,2.29,1.2,2.6,2.86,2.78v0.83H42.11z M39.77,106.84h-0.05
                        c-0.78,2-1.48,4.03-2.21,5.98h4.34L39.77,106.84z M69.43,103.8c-1.4,0.08-1.97,0.42-2.11,1.59c-0.1,0.8-0.21,2-0.21,4.34v10.4
                        h-1.09L55.1,106.92h-0.05V113c0,2.34,0.11,3.51,0.18,4.29c0.13,1.22,0.65,1.64,2.5,1.74v0.83h-6.27v-0.83
                        c1.46-0.1,2.08-0.49,2.18-1.66c0.1-0.86,0.23-2.03,0.23-4.37v-5.51c0-1.8-0.05-2.13-0.52-2.73c-0.52-0.65-1.09-0.86-2.24-0.96
                        v-0.83h4.45l10.27,12.01h0.08v-5.25c0-2.31-0.13-3.54-0.18-4.29c-0.13-1.14-0.7-1.53-2.57-1.64v-0.83h6.27V103.8z M84.08,119.87
                        c-1.43-1.79-3.59-4.65-5.59-7.38c-0.57-0.75-0.91-0.88-1.33-0.83v4.79c0,2.23,0.23,2.42,2.29,2.6v0.83h-7.41v-0.83
                        c1.92-0.18,2.16-0.37,2.16-2.6V106.4c0-2.26-0.24-2.42-2.24-2.6v-0.83h7.33v0.83c-1.92,0.18-2.13,0.34-2.13,2.6v4.47
                        c0.55-0.16,1.14-0.55,1.92-1.3c1.64-1.61,2.94-3.09,3.9-4.37c0.68-0.83,0.63-1.17-0.57-1.33l-0.52-0.08v-0.83h6.58v0.83
                        c-1.74,0.18-2.65,0.47-4.16,1.87c-1.33,1.25-2.7,2.68-4.08,4.11c1.77,2.5,4.03,5.33,5.7,7.33c1.2,1.4,1.82,1.77,2.94,1.92v0.83
                        H84.08z M104.05,115.58c-0.21,1.01-0.73,3.56-0.96,4.29H90.76v-0.83c2.24-0.18,2.47-0.34,2.47-2.55v-10.14
                        c0-2.21-0.21-2.37-2.26-2.55v-0.83h7.52v0.83c-2,0.18-2.24,0.31-2.24,2.55v10.22c0,1.27,0.1,1.77,0.62,2
                        c0.47,0.21,1.22,0.26,2.13,0.26c1.25,0,2.16-0.16,2.76-0.86c0.49-0.52,0.96-1.35,1.4-2.63L104.05,115.58z M106.23,119.87v-0.83
                        c2-0.18,2.23-0.34,2.23-2.55v-10.14c0-2.21-0.23-2.37-2.23-2.55v-0.83h7.46v0.83c-2,0.18-2.21,0.34-2.21,2.55v10.14
                        c0,2.21,0.21,2.37,2.21,2.55v0.83H106.23z M134.51,103.8c-1.4,0.08-1.98,0.42-2.11,1.59c-0.1,0.8-0.21,2-0.21,4.34v10.4h-1.09
                        l-10.92-13.21h-0.05V113c0,2.34,0.1,3.51,0.18,4.29c0.13,1.22,0.65,1.64,2.5,1.74v0.83h-6.27v-0.83c1.46-0.1,2.08-0.49,2.18-1.66
                        c0.1-0.86,0.23-2.03,0.23-4.37v-5.51c0-1.8-0.05-2.13-0.52-2.73c-0.52-0.65-1.09-0.86-2.23-0.96v-0.83h4.45l10.27,12.01h0.08v-5.25
                        c0-2.31-0.13-3.54-0.18-4.29c-0.13-1.14-0.7-1.53-2.57-1.64v-0.83h6.27V103.8z M157.76,107.26c-0.31-1.3-0.62-2.11-1.04-2.55
                        c-0.44-0.52-1.01-0.7-2.71-0.7h-1.4v12.51c0,2.13,0.23,2.34,2.6,2.52v0.83h-8.11v-0.83c2.26-0.18,2.5-0.37,2.5-2.52v-12.51h-1.14
                        c-2.16,0-2.65,0.26-3.02,0.75c-0.39,0.44-0.68,1.28-0.99,2.52h-0.88c0.1-1.79,0.26-3.62,0.31-4.97h0.6
                        c0.39,0.6,0.73,0.65,1.46,0.65h10.4c0.68,0,0.99-0.16,1.43-0.65h0.6c0,1.12,0.13,3.28,0.26,4.89L157.76,107.26z M174.92,115.63
                        c-0.16,1.07-0.68,3.46-0.91,4.24h-13v-0.83c2.26-0.18,2.5-0.37,2.5-2.55v-10.11c0-2.29-0.23-2.42-2.16-2.57v-0.83h12.01
                        c0.03,0.52,0.16,2.31,0.26,3.85l-0.88,0.13c-0.23-0.99-0.55-1.74-0.96-2.23c-0.42-0.52-1.12-0.7-2.73-0.7h-1.53
                        c-0.91,0-0.99,0.05-0.99,0.88v5.69h2c2.29,0,2.55-0.16,2.89-1.98h0.86v5.15h-0.86c-0.34-1.85-0.63-1.97-2.86-1.97h-2.03v4.63
                        c0,1.25,0.13,1.87,0.63,2.13c0.49,0.26,1.4,0.29,2.5,0.29c1.59,0,2.42-0.18,3.02-0.86c0.49-0.55,0.96-1.4,1.4-2.5L174.92,115.63z
                        M191.33,119.87v-0.83c2-0.21,2.13-0.39,2.11-2.91l-0.05-10.22h-0.13l-5.95,13.78h-0.65l-5.49-13.5h-0.1l-0.34,7.02
                        c-0.11,2.16-0.11,3.33-0.03,4.24c0.08,1.2,0.63,1.4,2.37,1.56v0.86h-6.19v-0.86c1.48-0.13,1.98-0.54,2.16-1.51
                        c0.16-0.86,0.34-2.13,0.52-4.86l0.39-5.23c0.23-3.12,0.05-3.41-2.21-3.61v-0.83h4.96l5.33,11.96l5.44-11.96h4.94v0.83
                        c-2.16,0.21-2.26,0.36-2.21,2.7l0.23,9.62c0.08,2.52,0.18,2.7,2.29,2.91v0.83H191.33z M208.51,102.97c1.98,0,3.46,0.29,4.5,1.01
                        c1.14,0.83,1.85,2.08,1.85,3.79c0,3.43-2.57,5.04-5.25,5.36c-0.39,0.05-0.8,0.05-1.12,0.05l-1.82-0.47v3.77
                        c0,2.21,0.23,2.37,2.5,2.55v0.83h-7.72v-0.83c2-0.18,2.24-0.37,2.24-2.55v-10.14c0-2.24-0.23-2.37-2.08-2.55v-0.83H208.51z
                        M206.67,111.75c0.31,0.16,0.91,0.29,1.59,0.29c1.22,0,3.3-0.75,3.3-4.19c0-2.91-1.72-3.95-3.48-3.95c-0.6,0-0.99,0.13-1.14,0.29
                        c-0.18,0.16-0.26,0.44-0.26,0.96V111.75z M230.66,115.58c-0.21,1.01-0.73,3.56-0.96,4.29h-12.32v-0.83
                        c2.24-0.18,2.47-0.34,2.47-2.55v-10.14c0-2.21-0.21-2.37-2.26-2.55v-0.83h7.52v0.83c-2,0.18-2.24,0.31-2.24,2.55v10.22
                        c0,1.27,0.1,1.77,0.62,2c0.47,0.21,1.22,0.26,2.13,0.26c1.25,0,2.16-0.16,2.76-0.86c0.49-0.52,0.96-1.35,1.4-2.63L230.66,115.58z
                        M246.47,115.63c-0.16,1.07-0.68,3.46-0.91,4.24h-13v-0.83c2.26-0.18,2.5-0.37,2.5-2.55v-10.11c0-2.29-0.23-2.42-2.16-2.57v-0.83
                        h12.01c0.03,0.52,0.16,2.31,0.26,3.85l-0.88,0.13c-0.23-0.99-0.55-1.74-0.96-2.23c-0.42-0.52-1.12-0.7-2.73-0.7h-1.53
                        c-0.91,0-0.99,0.05-0.99,0.88v5.69h2c2.29,0,2.55-0.16,2.89-1.98h0.86v5.15h-0.86c-0.34-1.85-0.63-1.97-2.86-1.97h-2.03v4.63
                        c0,1.25,0.13,1.87,0.62,2.13c0.49,0.26,1.4,0.29,2.5,0.29c1.59,0,2.42-0.18,3.02-0.86c0.49-0.55,0.96-1.4,1.4-2.5L246.47,115.63z
                        M262.67,107.26c-0.31-1.3-0.63-2.11-1.04-2.55c-0.44-0.52-1.01-0.7-2.7-0.7h-1.4v12.51c0,2.13,0.23,2.34,2.6,2.52v0.83h-8.11
                        v-0.83c2.26-0.18,2.5-0.37,2.5-2.52v-12.51h-1.14c-2.16,0-2.65,0.26-3.02,0.75c-0.39,0.44-0.68,1.28-0.99,2.52h-0.88
                        c0.1-1.79,0.26-3.62,0.31-4.97h0.6c0.39,0.6,0.73,0.65,1.46,0.65h10.4c0.68,0,0.99-0.16,1.43-0.65h0.6c0,1.12,0.13,3.28,0.26,4.89
                        L262.67,107.26z M282.9,111.23c0,5.62-4,9.02-8.84,9.02c-5.02,0-8.68-3.74-8.68-8.74c0-4.55,3.22-8.92,9-8.92
                        C279,102.6,282.9,106.09,282.9,111.23z M268.88,110.92c0,4.6,2.21,8.29,5.67,8.29c2.63,0,4.84-2.42,4.84-7.25
                        c0-5.3-2.37-8.32-5.54-8.32C271.15,103.64,268.88,106.29,268.88,110.92z M303,103.8c-1.4,0.08-1.97,0.42-2.11,1.59
                        c-0.1,0.8-0.21,2-0.21,4.34v10.4h-1.09l-10.92-13.21h-0.05V113c0,2.34,0.1,3.51,0.18,4.29c0.13,1.22,0.65,1.64,2.5,1.74v0.83h-6.27
                        v-0.83c1.46-0.1,2.08-0.49,2.19-1.66c0.1-0.86,0.23-2.03,0.23-4.37v-5.51c0-1.8-0.05-2.13-0.52-2.73
                        c-0.52-0.65-1.09-0.86-2.24-0.96v-0.83h4.45l10.27,12.01h0.08v-5.25c0-2.31-0.13-3.54-0.18-4.29c-0.13-1.14-0.7-1.53-2.57-1.64
                        v-0.83H303V103.8z M59.47,145.13v-0.83c2-0.18,2.24-0.34,2.24-2.55v-10.14c0-2.21-0.23-2.37-2.24-2.55v-0.83h7.46v0.83
                        c-2,0.18-2.21,0.34-2.21,2.55v10.14c0,2.21,0.21,2.37,2.21,2.55v0.83H59.47z M87.73,129.06c-1.4,0.08-1.98,0.42-2.11,1.59
                        c-0.1,0.8-0.21,2-0.21,4.34v10.4h-1.09L73.4,132.18h-0.05v6.08c0,2.34,0.1,3.51,0.18,4.29c0.13,1.22,0.65,1.64,2.5,1.74v0.83h-6.27
                        v-0.83c1.46-0.1,2.08-0.49,2.18-1.66c0.1-0.86,0.23-2.03,0.23-4.37v-5.51c0-1.79-0.05-2.13-0.52-2.73
                        c-0.52-0.65-1.09-0.86-2.23-0.96v-0.83h4.45l10.27,12.01h0.08v-5.25c0-2.31-0.13-3.54-0.18-4.29c-0.13-1.14-0.7-1.53-2.57-1.64
                        v-0.83h6.27V129.06z M106.37,129.08c-1.71,0.18-2.13,0.47-3.17,2.91c-0.78,1.9-3.3,8.06-5.3,13.42h-1.12
                        c-1.77-4.76-4.08-10.79-5.33-13.88c-0.78-1.97-1.2-2.29-2.78-2.44v-0.86h7.26v0.86c-1.87,0.23-1.9,0.49-1.51,1.64
                        c0.73,2,2.71,7.18,3.95,10.35h0.08c1.38-3.59,2.81-7.33,3.56-9.72c0.54-1.69,0.49-2-1.64-2.26v-0.86h6.01V129.08z M121.53,140.89
                        c-0.16,1.07-0.68,3.46-0.91,4.24h-13v-0.83c2.26-0.18,2.5-0.37,2.5-2.55v-10.11c0-2.29-0.23-2.42-2.16-2.57v-0.83h12.01
                        c0.03,0.52,0.16,2.31,0.26,3.85l-0.88,0.13c-0.23-0.99-0.54-1.74-0.96-2.23c-0.42-0.52-1.12-0.7-2.73-0.7h-1.53
                        c-0.91,0-0.99,0.05-0.99,0.88v5.69h2c2.29,0,2.55-0.16,2.89-1.98h0.86v5.15h-0.86c-0.34-1.85-0.63-1.97-2.86-1.97h-2.03v4.63
                        c0,1.25,0.13,1.87,0.62,2.13c0.49,0.26,1.4,0.29,2.5,0.29c1.59,0,2.42-0.18,3.02-0.86c0.49-0.55,0.96-1.4,1.4-2.5L121.53,140.89z
                        M133.28,132.33c-0.49-1.64-1.38-3.51-3.54-3.51c-1.66,0-2.68,1.2-2.68,2.65c0,1.61,1.07,2.47,3.28,3.59
                        c2.47,1.22,4.55,2.6,4.55,5.3c0,2.88-2.45,5.15-6.14,5.15c-0.99,0-1.87-0.15-2.57-0.36c-0.7-0.23-1.17-0.42-1.48-0.57
                        c-0.23-0.62-0.57-2.81-0.75-4.26l0.88-0.26c0.47,1.64,1.87,4.45,4.42,4.45c1.74,0,2.81-1.14,2.81-2.88c0-1.66-1.25-2.63-3.2-3.67
                        c-2.31-1.17-4.45-2.55-4.45-5.2c0-2.73,2.16-4.91,5.75-4.91c1.48,0,2.83,0.42,3.48,0.65c0.1,0.94,0.26,2.03,0.49,3.67
                        L133.28,132.33z M151.49,132.52c-0.31-1.3-0.63-2.11-1.04-2.55c-0.44-0.52-1.01-0.7-2.7-0.7h-1.4v12.51c0,2.13,0.23,2.34,2.6,2.52
                        v0.83h-8.11v-0.83c2.26-0.18,2.5-0.37,2.5-2.52v-12.51h-1.14c-2.16,0-2.65,0.26-3.02,0.75c-0.39,0.44-0.68,1.28-0.99,2.52h-0.88
                        c0.1-1.79,0.26-3.62,0.31-4.97h0.6c0.39,0.6,0.73,0.65,1.46,0.65h10.4c0.68,0,0.99-0.16,1.43-0.65h0.6c0,1.12,0.13,3.28,0.26,4.89
                        L151.49,132.52z M168.83,145.13v-0.83c2-0.21,2.13-0.39,2.11-2.91l-0.05-10.22h-0.13l-5.95,13.78h-0.65l-5.49-13.5h-0.1l-0.34,7.02
                        c-0.1,2.16-0.1,3.33-0.03,4.24c0.08,1.2,0.62,1.4,2.37,1.56v0.86h-6.19v-0.86c1.48-0.13,1.97-0.54,2.16-1.51
                        c0.15-0.86,0.34-2.13,0.52-4.86l0.39-5.23c0.23-3.12,0.05-3.41-2.21-3.61v-0.83h4.97l5.33,11.96l5.43-11.96h4.94v0.83
                        c-2.16,0.21-2.26,0.36-2.21,2.7l0.23,9.62c0.08,2.52,0.18,2.7,2.29,2.91v0.83H168.83z M192.6,140.89
                        c-0.16,1.07-0.68,3.46-0.91,4.24h-13v-0.83c2.26-0.18,2.5-0.37,2.5-2.55v-10.11c0-2.29-0.23-2.42-2.16-2.57v-0.83h12.01
                        c0.03,0.52,0.16,2.31,0.26,3.85l-0.88,0.13c-0.23-0.99-0.55-1.74-0.96-2.23c-0.42-0.52-1.12-0.7-2.73-0.7h-1.53
                        c-0.91,0-0.99,0.05-0.99,0.88v5.69h2c2.29,0,2.55-0.16,2.89-1.98h0.86v5.15h-0.86c-0.34-1.85-0.63-1.97-2.86-1.97h-2.03v4.63
                        c0,1.25,0.13,1.87,0.62,2.13c0.49,0.26,1.4,0.29,2.5,0.29c1.59,0,2.42-0.18,3.02-0.86c0.49-0.55,0.96-1.4,1.4-2.5L192.6,140.89z
                        M212.75,129.06c-1.4,0.08-1.98,0.42-2.11,1.59c-0.11,0.8-0.21,2-0.21,4.34v10.4h-1.09l-10.92-13.21h-0.05v6.08
                        c0,2.34,0.1,3.51,0.18,4.29c0.13,1.22,0.65,1.64,2.5,1.74v0.83h-6.27v-0.83c1.46-0.1,2.08-0.49,2.18-1.66
                        c0.1-0.86,0.23-2.03,0.23-4.37v-5.51c0-1.79-0.05-2.13-0.52-2.73c-0.52-0.65-1.09-0.86-2.24-0.96v-0.83h4.45l10.27,12.01h0.08
                        v-5.25c0-2.31-0.13-3.54-0.18-4.29c-0.13-1.14-0.7-1.53-2.57-1.64v-0.83h6.27V129.06z M229.22,132.52
                        c-0.31-1.3-0.63-2.11-1.04-2.55c-0.44-0.52-1.01-0.7-2.7-0.7h-1.4v12.51c0,2.13,0.23,2.34,2.6,2.52v0.83h-8.11v-0.83
                        c2.26-0.18,2.5-0.37,2.5-2.52v-12.51h-1.14c-2.16,0-2.65,0.26-3.02,0.75c-0.39,0.44-0.68,1.28-0.99,2.52h-0.88
                        c0.1-1.79,0.26-3.62,0.31-4.97h0.6c0.39,0.6,0.73,0.65,1.46,0.65h10.4c0.68,0,0.99-0.16,1.43-0.65h0.6c0,1.12,0.13,3.28,0.26,4.89
                        L229.22,132.52z M241.31,132.33c-0.49-1.64-1.38-3.51-3.54-3.51c-1.66,0-2.68,1.2-2.68,2.65c0,1.61,1.07,2.47,3.28,3.59
                        c2.47,1.22,4.55,2.6,4.55,5.3c0,2.88-2.44,5.15-6.13,5.15c-0.99,0-1.87-0.15-2.57-0.36c-0.7-0.23-1.17-0.42-1.48-0.57
                        c-0.23-0.62-0.57-2.81-0.75-4.26l0.88-0.26c0.47,1.64,1.87,4.45,4.42,4.45c1.74,0,2.81-1.14,2.81-2.88c0-1.66-1.25-2.63-3.2-3.67
                        c-2.31-1.17-4.45-2.55-4.45-5.2c0-2.73,2.16-4.91,5.75-4.91c1.48,0,2.83,0.42,3.48,0.65c0.11,0.94,0.26,2.03,0.49,3.67
                        L241.31,132.33z" />
                        <g>
                            <path class="st0" d="M225.87,84.42c0-1.58,1.2-2.78,2.7-2.78c1.51,0,2.71,1.2,2.71,2.78c0,1.59-1.19,2.76-2.71,2.76
                            C227.06,87.18,225.87,86.01,225.87,84.42 M228.57,87.68c1.79,0,3.3-1.38,3.3-3.26c0-1.87-1.51-3.26-3.3-3.26
                            c-1.78,0-3.3,1.39-3.3,3.26C225.27,86.29,226.79,87.68,228.57,87.68 M227.94,84.65h0.61l0.92,1.51h0.59l-0.99-1.54
                            c0.52-0.06,0.9-0.33,0.9-0.96c0-0.69-0.4-0.99-1.23-0.99h-1.33v3.48h0.53V84.65z M227.94,84.2v-1.07h0.72
                            c0.37,0,0.75,0.08,0.75,0.52c0,0.53-0.4,0.55-0.84,0.55H227.94z" />
                            <g>
                                <defs>
                                    <path id="SVGID_1_" d="M58.49,94.19v-0.87c0,0,0.11-0.14,0.39-0.33c0.19-0.13,0.55-0.34,0.82-0.48
                                    c0.61-0.32,1.34-0.54,1.61-0.64c2.02-0.74,3.57-1.02,3.65-1.04c0.11-0.03,2.03-0.35,3.53-0.41h17.12c0,0-0.85-0.52-1.04-0.64
                                    c-0.11-0.06-0.93-0.59-1.85-1.44c-0.77-0.71-1.61-1.64-2.14-2.72c-0.56-1.01-0.87-2.26-0.87-2.26h2.49c0,0,2.29-0.15,4.63-0.75
                                    c2.33-0.61,4.22-0.91,4.57-0.98c0.35-0.07,1.29-0.11,1.33-0.11c0.02-0.01,0.31-0.23,0.55-0.48c0.27-0.27,0.49-0.62,0.49-0.62
                                    s-1.2-2.37-1.62-3.64c-0.42-1.27-1.11-3.85-1.21-5.32c-0.06-0.88-0.08-3.02,0.06-4.51c0.09-1.01,0.4-1.74,0.4-1.74
                                    s0.64,0.47,1.79,0.92c1.16,0.46,3.85,1.32,4.22,1.45c0.38,0.13,2.05,0.58,2.08,0.58c0.04-0.01,0.16-0.05,0.17-0.11
                                    c0.02-0.07,0.22-1.23,0.23-1.39c0.01-0.16,0.07-1.44,0.06-1.56c-0.01-0.12-0.12-1.01-0.17-1.16c-0.06-0.15-0.12-0.29-0.12-0.29
                                    s1.06,0.17,1.62,0.4c0.56,0.23,1.27,0.52,1.27,0.52s-0.15-1.81-0.17-2.02c-0.01-0.05-0.05-0.42-0.12-1.1
                                    c-0.02-0.22-0.04-0.47-0.06-0.75c-0.09-1.26-0.15-3.18-0.04-5.81c0.05-1.16,0.04-2.37,0.16-3.73c0.13-1.57,0.39-3.33,0.7-5.38
                                    c0.41-2.8,1.4-6.73,2.8-10.62c1.03-2.85,2.3-5.65,3.62-8.12c0.79-1.47,1.62-2.94,2.47-4.28c2.16-3.4,4.45-6.22,6.44-8.27
                                    c2.97-3.06,7.2-6.81,12.78-9.72c5.45-2.84,12-4.86,20.24-4.86c7.43,0,14.73,2.08,20.18,4.92c2.83,1.47,5.3,3.17,7.46,4.86
                                    c2.1,1.65,3.86,3.35,5.32,4.86c1.99,2.05,4.31,4.88,6.48,8.27c0.85,1.33,1.7,2.75,2.49,4.22c1.31,2.46,2.5,5.25,3.53,8.1
                                    c1.4,3.9,2.42,7.9,2.83,10.7c0.3,2.05,0.56,3.81,0.69,5.38c0.12,1.36,0.17,2.52,0.21,3.67c0.11,2.64-0.01,4.55-0.1,5.81
                                    c0-0.06-0.35,3.81-0.35,3.81s0.65-0.23,1.21-0.46c0.56-0.23,1.54-0.47,1.56-0.46c0.03,0.01,0.1-0.04,0,0.29
                                    c-0.1,0.33-0.15,0.78-0.17,0.98c-0.03,0.2-0.02,1.33,0,1.56c0.02,0.23,0.16,1.54,0.35,1.68c0.1,0.08,1.23-0.29,1.45-0.35
                                    c0.22-0.06,1.96-0.63,2.66-0.87c0.7-0.24,2.69-0.96,3.01-1.1c0.32-0.14,1.1-0.58,1.1-0.58s0.25,1.08,0.29,1.45
                                    c0.04,0.36,0.17,2.01,0.18,2.2c0,0.18-0.06,2.47-0.12,2.89c-0.06,0.42-0.46,2.74-0.58,3.18c-0.12,0.44-0.55,1.85-1.04,3.01
                                    c-0.49,1.16-1.21,2.49-1.21,2.49l0.92,1.04c0,0,0.84,0.05,0.93,0.06c0.09,0.01,2.77,0.49,3.35,0.64
                                    c0.59,0.15,2.89,0.7,3.53,0.81c0.63,0.11,1.84,0.3,2.43,0.35c0.59,0.05,2.95,0.06,2.95,0.06s-0.58,1.9-1.45,3.18
                                    c-0.74,1.09-1.35,1.62-1.91,2.08c-0.28,0.23-0.52,0.43-0.8,0.64c-0.53,0.37-1.18,0.76-1.5,0.98c-0.14,0.1-0.17,0.17-0.17,0.17
                                    h16.13c0,0,3.52,0.16,5.15,0.58c1.62,0.42,3.71,1.09,4.63,1.5c0.91,0.42,1.33,0.92,1.33,0.92v0.75H58.49z" />
                                </defs>
                                <clipPath id="SVGID_2_">
                                    <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                                </clipPath>
                                <g style="clip-path:url(#SVGID_2_);">
                                    <image style="overflow:visible;" width="1550" height="793" xlink:href="images/logo-head.png" transform="matrix(0.12 0 0 0.12 58.3672 -0.8369)">
                                    </image>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>`
});

// ========= 燈箱 ==============================================================================================================================
Vue.component("light-box", {
	data: function () {
		return {
			toggle: false,
			isFixedHeight: false
		};
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
	}
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
		bannerShow: 2,
	},
	mounted() {
		this.signature();
		this.addNoOpener();
		this.useJq();
		this.hideIeMask();
		this.showTarget();
		this.scrollMagic();


		$(window).resize(() => {
			this.windowWidth = $(window).innerWidth();
			this.windowHeight = $(window).innerHeight();
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
				"%cMade by Captain%c2019/11",
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

		//-------------------------------------scrollMagic
		scrollMagic() {
			// init controller
			var controller = new ScrollMagic.Controller();

			// 手機版頭 & topBtn --------------------------------------------------
			var mobileHeader = new TimelineMax();

			new ScrollMagic.Scene({
					triggerElement: "#trigger-fixedShare",
					triggerHook: 1, // show, when scrolled 10% into view
					// duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
					offset: this.windowHeight // move trigger to center of element
				})
				.setTween(mobileHeader)
				.addTo(controller);
			
			mobileHeader.add([
				TweenMax.from('.mobileHeader', 0.3, {
					y: -200,
					opacity: 0,
				}),
				TweenMax.from('.topBtn', 0.3, {
					scale: 0,
					opacity: 0,
				}),
			]);

			// banner --------------------------------------------------
			var bannerTimeLine = new TimelineMax();

			new ScrollMagic.Scene({triggerElement: ".banner", offset: 0})
				.setTween(bannerTimeLine)
				.addTo(controller);
			
			bannerTimeLine.add([
				TweenMax.from('.banner-flag', 0.5, {
					width: 0,
					paddingBottom: 0,
					opacity: 0,
				}),
				TweenMax.from('.banner-puzzleBg', 0.8, {
					y: 100,
					opacity: 0,
				}),
			]).add(
				TweenMax.from('.banner-puzzle-1', 0.5, {
					opacity: 0,
				})
			).add(
				TweenMax.from('.banner-puzzle-2', 0.5, {
					opacity: 0,
				})
			).add(
				TweenMax.from('.banner-tit', 0.5, {
					opacity: 0,
				}), 1
			).add(
				TweenMax.from('.banner-tit-1', 0.5, {
					y: -100,
					opacity: 0,
				}), 1
			).add(
				TweenMax.from('.banner-tit-2', 0.5, {
					y: 100,
					opacity: 0,
				}), 1.2
			).add(
				TweenMax.from('.banner-fundName-logo', 0.5, {
					y: 100,
					opacity: 0,
				}), 1.4
			).add(
				TweenMax.from('.banner-fundName-1', 0.5, {
					y: 100,
					opacity: 0,
				}), 1.6
			).add(
				TweenMax.from('.banner-fundName-2', 0.5, {
					y: 100,
					opacity: 0,
				}), 1.8
			).add(
				TweenMax.from('.banner-usDollar', 0.5, {
					opacity: 0,
				}), 1.8
			);

			var bannerParallaxTimeLine = new TimelineMax(),
				bannerParallax = new ScrollMagic.Scene({ triggerElement: ".banner", duration: 1000, offset: 400 })
										.setTween(bannerParallaxTimeLine)
										// .setPin(".banner2")
										// .addIndicators() // add indicators (requires plugin)
										.addTo(controller);
			bannerParallaxTimeLine.add([
				TweenMax.to(".banner-puzzle-1", 1, {
					y: "130%",
					x: '50%',
					ease: Linear.easeNone
				}),
				TweenMax.to(".banner-puzzle-2", 1, {
					y: "20%",
					x: '10%',
					ease: Linear.easeNone
				}),
				TweenMax.to(".banner-tit", 1, {
					y: "25%",
					ease: Linear.easeNone
				}),
				TweenMax.to(".banner-flag", 1, {
					x: "-40%",
					ease: Linear.easeNone
				}),
				TweenMax.to(".banner-usDollar", 1, {
					y: "-40%",
					ease: Linear.easeNone
				}),
			]);

			// 理由區 --------------------------------------------------
			var reasonTimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".reason", offset: -100})
				.setTween(reasonTimeLine)
				.addTo(controller);

			reasonTimeLine.add([
				TweenMax.from('.reason-tit', 0.3, {
					x: '200',
					opacity: 0,
					ease: Linear.easeNone
				}),
			]).add(
				TweenMax.from('.reason-content-1 .reason-item:eq(0)', 0.3, {
					y: '100',
					opacity: 0,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.reason-content-1 .reason-item:eq(1)', 0.3, {
					y: '100',
					opacity: 0,
					ease: Linear.easeNone
				}),
			);

			var reasonTimeLine2 = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".reason-content-2", offset: -100 })
				.setTween(reasonTimeLine2)
				.addTo(controller);

			reasonTimeLine2.add(
				TweenMax.from('.reason-content-2 .reason-item', 0.3, {
					y: '100',
					opacity: 0,
					ease: Linear.easeNone
				}),
			).add([
				TweenMax.from('.reason-content-2 .chart-item:eq(0)', 0.3, {
					x: '-200',
					opacity: 0,
					ease: Linear.easeNone
				}),
				TweenMax.from('.reason-content-2 .chart-item:eq(1)', 0.3, {
					x: '200',
					opacity: 0,
					ease: Linear.easeNone
				}),
			]);

			// 哪些人該 --------------------------------------------------
			var whoTimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".who", offset: -100 })
				.setTween(whoTimeLine)
				.addTo(controller);

			whoTimeLine.add(
				TweenMax.fromTo('.who-content-circle', 0.5, {
					scale: 0,
					opacity: 0,
					borderColor: '#000',
					borderWidth: '50px',
					ease: Linear.easeNone
				}, {
					scale: 1,
					opacity: 1,
					borderColor: '#e2e2e2',
					borderWidth: '2px',
				}),
			).add(
				TweenMax.from('.who-content .tit-type1', 0.3, {
					y: 100,
					opacity: 0,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.who-content-item:eq(0)', 0.3, {
					x: -100,
					opacity: 0,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.who-content-item:eq(1)', 0.3, {
					x: 100,
					opacity: 0,
					ease: Linear.easeNone
				}),
			).add([
				TweenMax.from('.who-puzzleTattoo', 0.5, {
					y: 100,
					opacity: 0,
					ease: Linear.easeNone
				}),
			]);

			var whoParallaxTimeLine = new TimelineMax(),
				whoParallax = new ScrollMagic.Scene({ triggerElement: ".who", duration: 1000, offset: 300 })
					.setTween(whoParallaxTimeLine)
					.addTo(controller);
			whoParallaxTimeLine.add([
				TweenMax.to(".who-puzzleTattoo-left img:eq(0), .who-puzzleTattoo-right img:eq(0)", 1, {
					y: '300%',
					opacity: 0,
					ease: Linear.easeNone
				}),
				TweenMax.to(".who-puzzleTattoo-left img:eq(1), .who-puzzleTattoo-right img:eq(1)", 1, {
					y: '500%',
					opacity: 0,
					ease: Linear.easeNone
				}),
				TweenMax.to(".who-puzzleTattoo-left img:eq(2), .who-puzzleTattoo-right img:eq(2)", 1, {
					y: '800%',
					opacity: 0,
					ease: Linear.easeNone
				}),
				TweenMax.to(".who-USDollar", 1, {
					y: '-50%',
					opacity: 0,
					ease: Linear.easeNone
				}),
			]);

			// 特色 --------------------------------------------------
			var features1TimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".fundFeatures-features", offset: -100 })
				.setTween(features1TimeLine)
				.addTo(controller);

			features1TimeLine.add(
				TweenMax.from('.fundFeatures-features-left .tit-type1', 0.5, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-left-content-fundName', 0.5, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-left-content-flag', 0.5, {
					opacity: 0,
					width: 0,
					ease: Linear.easeNone
				}), 0.8
			);;

			var features1RightTimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".fundFeatures-features-right", offset: -50 })
				.setTween(features1RightTimeLine)
				.addTo(controller);
			
			features1RightTimeLine.add(
				TweenMax.from('.fundFeatures-features-right .tit-type2', 0.5, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-list:eq(0)', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-list:eq(1)', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-list:eq(2)', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.fundFeatures-features-right .chart-remark', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			);

			// 特色2 --------------------------------------------------
			var features2Offset;
			if (this.windowWidth > 767) {
				features2Offset = 400
			}else {
				features2Offset = 300
			};

			var features2ParallaxTimeLine = new TimelineMax(),
				features2Parallax = new ScrollMagic.Scene({ triggerElement: ".fundFeatures-item2", duration: 2000, offset: features2Offset })
														.setTween(features2ParallaxTimeLine)
														.setPin(".fundFeatures-item2")
														// .addIndicators() // add indicators (requires plugin)
														.addTo(controller);

			var fundFeaturesTimeLineWidth = $('.fundFeatures-item2-timeLine-item').innerWidth(),
				fundFeaturesTimeLine_X = (fundFeaturesTimeLineWidth * (($('.fundFeatures-item2-timeLine-item').length)-1));

			features2ParallaxTimeLine.add([
				TweenMax.to(".fundFeatures-item2-timeLine-content", 1, {
					x: '-' + fundFeaturesTimeLine_X,
					ease: Linear.easeNone
				}),
			]);

			// 特色3 --------------------------------------------------
			var features3TimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".fundFeatures-item3", offset: -100 })
				.setTween(features3TimeLine)
				.addTo(controller);
			
			features3TimeLine.add([
				TweenMax.from('.fundFeatures-item3-left', 0.3, {
					opacity: 0,
					x: 100,
					ease: Linear.easeNone
				}),
				TweenMax.from('.fundFeatures-item3-right', 0.3, {
					opacity: 0,
					x: -100,
					ease: Linear.easeNone
				}),
			]);

			// 特色4 --------------------------------------------------
			var features4TimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".fundFeatures-item4", offset: 0 })
				.setTween(features4TimeLine)
				.addTo(controller);

			features4TimeLine.add([
				TweenMax.from('.fundFeatures-item4-left', 0.3, {
					opacity: 0,
					x: -100,
					ease: Linear.easeNone
				}),
				TweenMax.from('.fundFeatures-item4-right', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			]);

			// 特色5 --------------------------------------------------
			var features5TimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".fundFeatures-item5", offset: 0 })
				.setTween(features5TimeLine)
				.addTo(controller);

			features5TimeLine.add([
				TweenMax.from('.fundFeatures-item5-left', 0.3, {
					opacity: 0,
					x: 100,
					ease: Linear.easeNone
				}),
				TweenMax.from('.fundFeatures-item5-right', 0.3, {
					opacity: 0,
					x: -100,
					ease: Linear.easeNone
				}),
			]).add(
				TweenMax.from('.fundFeatures-item5-right-trophy', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			);

			var features5ParallaxTimeLine = new TimelineMax(),
				features5Parallax = new ScrollMagic.Scene({ triggerElement: ".fundFeatures-item5", duration: 2000, offset: 400 })
														.setTween(features5ParallaxTimeLine)
														// .addIndicators() // add indicators (requires plugin)
														.addTo(controller);
			features5ParallaxTimeLine.add([
				TweenMax.to(".fundFeatures-item5-right-trophy img", 1, {
					y: '50vh',
					ease: Linear.easeNone
				}),
			]);

			// youtube --------------------------------------------------
			var youtubeInfoTimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".youtubeInfo", offset: 0 })
				.setTween(youtubeInfoTimeLine)
				.addTo(controller);

			youtubeInfoTimeLine.add(
				TweenMax.from('.youtubeInfo-left-bg', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.youtubeInfo .tit-type1', 0.3, {
					opacity: 0,
					x: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.youtubeInfo .youtube', 0.3, {
					opacity: 0,
					x: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.youtubeInfo-right', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			);

			// moreInfo --------------------------------------------------
			var moreInfoTimeLine = new TimelineMax();

			new ScrollMagic.Scene({ triggerElement: ".moreInfo", offset: 0 })
				.setTween(moreInfoTimeLine)
				.addTo(controller);

			moreInfoTimeLine.add(
				TweenMax.from('.moreInfo-circle', 0.3, {
					opacity: 0,
					scale: 2,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.moreInfo-content .tit-type1', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.moreInfo-content .text', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.moreInfo-content .btn:eq(0)', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			).add(
				TweenMax.from('.moreInfo-content .btn:eq(1)', 0.3, {
					opacity: 0,
					y: 100,
					ease: Linear.easeNone
				}),
			);
		
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