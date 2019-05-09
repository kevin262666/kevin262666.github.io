/*
    ====================================================================
	⚓ /───────╮  /────╮  /────────╮/────────╮/────────╮/───╮/──╮   /──╮⚓
	 │  ╭─────╯ / ╭──╮ \ │  ╭──╮  │╰──╮  ╭──╯│  ╭──╮  ││   ││    \ │  │
	 │  │      │  ╰──╯  ││  ╰──╯  │   │  │   │  ╰──╯  ││   ││  │\ \│  │
	 │  │      │  ╭──╮  ││  ╭─────/   │  │   │  ╭──╮  ││   ││  │ \ │  │
	 │  ╰─────╮│  │  │  ││  │         │  │   │  │  │  ││   ││  │  \   │
    ⚓╰────────/╰──╯  ╰──/╰──/         ╰──/   ╰──╯  ╰──/╰───/╰──/   ╰──/⚓
    Captain Wei 201811.
    ====================================================================
*/
// ========= footer ==============================================================================================================================
// footer
Vue.component('footer-logo', {
    data: function(){
        return {
            name: '富蘭克林證券投顧',
        }
    },
    template: `<div class="footer-logo">
                    <a href="http://www.franklin.com.tw/" target="_blank" :title="name">
                        <img src="images/footer-logo-1.png" :alt="name">
                        <strong>{{name}}</strong>
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
                        <strong>{{ phoneTit }}：</strong>
                        <a href="tel:0800-885-888" :title="phoneTit">
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
                    info: '<span class="footer-warning-focus">由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。</span>'
                },
                {
                    id: 3,
                    info: '由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。'
                },
                {
                    id: 4,
                    info: '<span class="footer-warning-focus">境外基金投資大陸地區證券市場之有價證券以掛牌上市有價證券為限，且投資前述有價證券總金額不得超過本基金淨資產價值之10%，另投資香港地區紅籌股及H股並無限制。本基金並非完全投資於大陸地區之有價證券，投資人仍須留意中國市場特定政治、經濟與市場之投資風險。</span>'
                },
                {
                    id: 5,
                    info: '基金的配息可能由基金的收益或本金中支付。部分基金進行配息前未先扣除應負擔之費用。任何涉及由本金支出的部份，可能導致原始投資金額減損。由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<a href="https://www.Franklin.com.tw" target="_blank">https://www.Franklin.com.tw</a>)查閱。'
                },
                {
                    id: 6,
                    info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="https://www.fundclear.com.tw/" target="_blank">https://www.fundclear.com.tw/</a>)下載，或逕向本公司網站(<a href="https://www.franklin.com.tw/" target="_blank">https://www.franklin.com.tw/</a>)查閱。
                            <div class="footer-warning-remark">【富蘭克林證券投顧獨立經營管理】</div>`
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

// ========= 火雞 ==============================================================================================================================
Vue.component('turkey-item', {
    props: ['turkeyset'],
    template: ` <div>
                    <div class="turkeyItem" :class="[turkeyset.direction, turkeyset.type, turkeyset.hit]" v-if="turkeyset.show" :style='turkeyset.style'>
                        <img :src="turkeyset.turkey" alt="" class="turkeyItem-turkey">
                        <img :src="turkeyset.basket" alt="" class="turkeyItem-basket">
                    </div>
                    <div class="notWon" :class="{show : turkeyset.notWon}">
                        <div class="notWon-tit">
                            <strong>空</strong>
                        </div>
                        <div class="notWon-text">
                            再瞄準下一隻！
                        </div>
                    </div>
                </div>`,
});

var content = new Vue({
    el: '#content',
    data: {
        name: '富蘭克林證券投顧',
        screenWidth: document.body.clientWidth,
        windowWidth: 0,
        windowHeight: 0,
        menuBtnActive: false,
        navbarShow: false,
        indexHide: false,
        gameShow: false,
        hittingTurkey: false,
        turkeyLength: '',
        turkeyNo: '',
        turkeySet: [
            {
                direction: 'goLeft',
                type: 'turkeyItem-1',
                hit: '',
                turkey: 'images/game-turkey-1.png',
                basket: 'images/basket-1.png',
                show: true,
                style: 'bottom: 25%;',
                notWon: false,
            },
            {
                direction: 'goRight',
                type: 'turkeyItem-1',
                hit: '',
                turkey: 'images/game-turkey-2.png',
                basket: 'images/basket-2.png',
                show: false,
                style: 'bottom: 50%;',
                notWon: false,
            },
            {
                direction: 'goLeft',
                type: 'turkeyItem-1',
                hit: '',
                turkey: 'images/game-turkey-1.png',
                basket: 'images/basket-1.png',
                show: false,
                style: 'bottom: 75%;',
                notWon: false,
            }, {
                direction: 'goRight',
                type: 'turkeyItem-1',
                hit: '',
                turkey: 'images/game-turkey-2.png',
                basket: 'images/basket-2.png',
                show: false,
                style: 'bottom: 100%;',
                notWon: false,
            },
            // {
            //     direction: 'goLeft',
            //     type: 'turkeyItem-2',
            //     turkey: 'images/game-turkey-3.png',
            //     basket: 'images/basket-1.png',
            //     show: false,
            // },
            // {
            //     direction: 'goRight',
            //     type: 'turkeyItem-2',
            //     turkey: 'images/game-turkey-4.png',
            //     basket: 'images/basket-2.png',
            //     show: false,
            // },
        ],
        toggleTurkeyTypeReciprocal: '2',
        turkeyText: [
            '來擊落火雞身上的禮籃吧!', '好可惜是空的！ 瞄準下一隻！', '選錯隻啦！', '打準一點！', '怎麼又沒有 選好一點！'
        ],
        turkeyTextNo: 0,
        formLightBoxShow: false,
        toggleFacebookBtn: false,
        toggleLineBtn: false,
        winningRate: '',        // 中獎率
        crazyModeOpen: false,   // 瘋狂模式開關
        killQuantity: '0',      // 擊殺數
    },
    mounted() {
        this.toggleCompleteInfoBtn();
        window.onresize = () => {
            window.screenWidth = document.body.clientWidth;
            this.screenWidth = window.screenWidth;
            this.toggleCompleteInfoBtn();
        };
        this.winningRateSet(6);
    },
    methods: {
        winningRateSet(x) {
            // 亂數決定要打到第幾隻才會中獎 2~7隻
            this.winningRate = Math.floor(Math.random()*x)+2;
        },
        showTurkey() {
            // 遊戲開始
            // var turkeyLength = this.turkeyLength;
            this.indexHide = true;
            this.gameShow = true;
            var turkeySet = this.turkeySet;
            setTimeout(()=>{
                turkeySet[1].show = true;
                setTimeout(()=>{
                    turkeySet[2].show = true;
                    setTimeout(()=>{
                        turkeySet[3].show = true;
                    }, 500);
                }, 500);
            },500);
            // setInterval(function(){
            //     turkeyLength = $('.turkeyItem').length;
            //     console.log(turkeyLength);
                
            // },500)
        },
        hitTurkey(n) {
            // 火雞被擊落後
            var _this = this;
            var turkeySet = this.turkeySet[n];
            var hittingTurkey = this.hittingTurkey;
            turkeySet.hit = 'hit';                          // 火雞加擊飛效果
            this.hittingTurkey = true;                      // 螢幕加震動效果

            // 未中獎
            if (this.winningRate > 1) {
                turkeySet.notWon = true;                    // 顯示未中獎
            };
            
            setTimeout(()=>{
                turkeySet.show = false;                     // 移除火雞
                _this.hittingTurkey = false;                // 螢幕震動效果移除
                turkeySet.notWon = false;                   // 隱藏(重置)未中獎
                setTimeout(()=>{
                    turkeySet.hit = '';                     // 火雞擊飛效果移除
                    turkeySet.show = true;                  // 添加火雞
                }, 500);
            },500);

            // 改火雞說的話
            var turkeyTextLength = (this.turkeyText.length)-1;
            if (this.turkeyTextNo < turkeyTextLength) {
                this.turkeyTextNo++;
            }else {
                this.turkeyTextNo = 0;
            };
            
            // 中獎
            if (this.winningRate>0) {
                this.winningRate--;
            }if (this.winningRate==0) {
                this.formLightBoxShow = true;
            };

            // 計算擊殺數
            this.killQuantity++;
        },
        toggleTurkeyType() {
            // 擊落Ｘ隻火雞之後 換另一種火雞
            this.toggleTurkeyTypeReciprocal--;
            if (this.toggleTurkeyTypeReciprocal == 0) {
                this.turkeySet[0].type = 'turkeyItem-2';
                this.turkeySet[1].type = 'turkeyItem-2';
                this.turkeySet[2].type = 'turkeyItem-2';
                this.turkeySet[3].type = 'turkeyItem-2';

                this.turkeySet[0].turkey = 'images/game-turkey-3.png';
                this.turkeySet[1].turkey = 'images/game-turkey-4.png';
                this.turkeySet[2].turkey = 'images/game-turkey-3.png';
                this.turkeySet[3].turkey = 'images/game-turkey-4.png';
            }
        },
        toggleCompleteInfoBtn() {
            // 依尺寸顯示不同社群分享按鍵
            if (this.screenWidth >= 992) {
                this.toggleFacebookBtn = true
                this.toggleLineBtn = false
            } else {
                this.toggleFacebookBtn = false
                this.toggleLineBtn = true
            };
        },
        crazyMode() {
            this.crazyModeOpen = true;
            this.winningRate = 10000;
            this.turkeyTextNo = 0;
            this.turkeyText = ['歡迎進入瘋狂模式', '這裡拿不到實質的獎品', '就是要給你放鬆的啦！', '瘋狂地打吧！'];
        },
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val
        },
    },
});