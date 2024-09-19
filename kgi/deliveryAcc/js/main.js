// ========= app ==============================================================================================================================
const app = Vue.createApp({
    data(){
        return{
            name: "凱基證券",
            screenWidth: document.body.clientWidth,
            screenHeight: document.body.clientHeight,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            thisPath: location.protocol + "//" + location.host,
            balance: false,
            navigatorShare: navigator.share ? true : false, // 是否支援分享
            withdrawalAmount: 1000,
            rangeFilter: '1',
            accountUsageStatus1: true,
            accountUsageStatus2: false,
            accountUsageStatus3: true,
        };
    },
    components: {
        // fund: httpVueLoader(
        //     "js/fund.vue"
        // ),
    },
    mounted() {
        this.signature();
        this.topBtn();
        this.useJq();

        // this.sameHeight("notSureWhatItIs2-item-bg");
        // setTimeout(() => {
        //     this.sameHeight('notSureWhatItIs2-item-bg');
        // }, 1000);

        $(window).resize(() => {
            this.windowWidth = $(window).innerWidth();
            this.windowHeight = $(window).innerHeight();
        });
    },
    methods:{
        signature() {
            console.log(
                "%cMade by Captain%c2024/08%cVue3",
                "color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
                "color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;",
                "color: #fff; border-radius: 5px; background: #42b883; padding: 2px 10px; margin: 0px 5px;"
            );
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

        //-------------------------------------使用jq區塊
        useJq() {
            
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

// ========= 約定入金說明 ==============================================================================================================================
app.component("agreeOnDepositNotice", {
    template: ` <ol>
                    <li>
                        本功能提供您新增或變更約定<span class="text-red">出金(限一戶)、入金(五戶)銀行帳戶</span>，請約定本人銀行帳戶，若輸入銀行非eDDA身分確認參加行或eDDA身分確認失敗，須上傳銀行存摺封面。 eDDA身分確認參加銀行有：凱基銀行、中國信託、台新銀行、國泰世華銀行、臺灣銀行、土地銀行、合作金庫、第一銀行、華南銀行、彰化銀行、上海銀行、台北富邦銀行、兆豐國際商銀、王道商業銀行、臺灣企銀、臺灣新光商銀、永豐銀行、元大銀行、聯邦銀行、遠東銀行共20家。(以上若有異動以 <a href="https://www.twnch.org.tw/eDDA.html#ACH-5" target="_blank" class="linkText">票交所網站資料 <i class="fa-solid fa-arrow-up-right-from-square"></i></a> 為準)
                    </li>
                    <li>
                        上傳存摺圖檔格式須為JPG、Tiff、Gif、PNG，檔案限制大小7M內，影像須清晰完整可供辨識。
                    </li>
                    <li>
                        <span class="text-red">
                            上傳成功後須經本公司審核後方生效，變更後請於一個營業日後查詢。
                        </span>
                    </li>
                </ol>`,
});

app.mount('#app');