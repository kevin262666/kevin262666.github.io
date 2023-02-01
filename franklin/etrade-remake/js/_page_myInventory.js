// ========= 我的庫存 ==============================================================================================================================
const MyInventory = {
    mixins: [slickFunction],
    data() {
        return {
            page: {
                stit: `我的庫存`,
                tit: `庫存總覽`,
            },

            // 合計投資損益
            profitLossQueryOptions: {
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                adaptiveHeight: true,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
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
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit" :printBtn="true" 
                        printTarget="print-MyInventory.html">
                    </pageTit>
                    <div class="indexPromotions profitLossQueryType">
                        <el-card>
                            <h2 class="tit-type2" title="合計投資損益">
                                合計投資損益
                            </h2>
                            <slick
                                ref="indexPromotions"
                                :options="profitLossQueryOptions"
                                @afterChange="handleAfterChange"
                                @beforeChange="handleBeforeChange"
                                @breakpoint="handleBreakpoint"
                                @destroy="handleDestroy"
                                @edge="handleEdge"
                                @init="handleInit"
                                @reInit="handleReInit"
                                @setPosition="handleSetPosition"
                                @swipe="handleSwipe"
                                @lazyLoaded="handleLazyLoaded"
                                @lazyLoadError="handleLazeLoadError"
                            >
                                <div v-for="(item, index) in $root.$data.profitLossQuery" :key="index">
                                    <div class="indexPromotions-item">
                                        <el-card shadow="never">
                                            <div class="indexPromotions-item-tit">
                                                {{item.currency}}
                                            </div>
                                            <div class="indexPromotions-item-promotions">
                                                <span class="text-black">市值：</span><b class="focus">{{item.totalInvestmentMarketValue}}</b>
                                            </div>
                                            <div class="indexPromotions-item-promotions text-black">
                                                <small>成本：</small>{{item.totalInvestmentCost}}
                                            </div>
                                            <div class="indexPromotions-item-bottom">
                                                <el-row :gutter="14">
                                                    <el-col :span="24">
                                                        <div class="indexPromotions-item-deadline">
                                                            未實現損益<br/><b class="text-black">{{item.profitAndLoss}}</b>
                                                        </div>
                                                    </el-col>
                                                    <el-col :span="12">
                                                        <div class="indexPromotions-item-deadline">
                                                            含息報酬率
                                                            <br/>
                                                            <b class="text-black">
                                                                {{item.rateOfReturn}}
                                                            </b>
                                                            <el-tooltip effect="dark" placement="top-start">
                                                                <div slot="content">
                                                                    累積配現金額：{{item.accumulatedAmount}}
                                                                </div>
                                                                <div class="calculationFormula">
                                                                    <i class="fas fa-exclamation-circle"></i>
                                                                </div>
                                                            </el-tooltip>
                                                        </div>
                                                    </el-col>
                                                    <el-col :span="12">
                                                        <div class="indexPromotions-item-deadline">
                                                            不含息報酬率<br/><b class="text-black">{{item.notIncludeInterestRateOfReturn}}</b>
                                                        </div>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </el-card>
                                    </div>
                                </div>
                            </slick>
                        </el-card>
                    </div>
                    <fundQuickSearch class="margin-top-15 margin-bottom-15"></fundQuickSearch>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    上述投資組合損益，為資料期間內已完成交易程序者，資料若有不符，應以臺灣集中保管結算所電腦記錄為準，歡迎您至 <el-link type="primary" href="http://www.tdcc.com.tw/" title="臺灣集中保管結算所" target="_blank">臺灣集中保管結算所</el-link> 網站查詢。
                                </li>
                                <li>
                                    本頁所列投資損益顯示方式係依定期(不)定額、智能定期不定額、單筆申購等「不同投資方式」分開計算個別庫存；且投資損益數字係依查詢當日系統所載基金資訊計算後之預估，僅供參考，不代表投資人辦理「全部贖回(轉換) 」或「部分贖回(轉換) 」之實際損益，實際損益應以當次辦理之「贖回入帳金額」或「轉換後庫存資訊」為準。
                                </li>
                                <li>
                                    進行「全部贖回(轉換) 」或「部分贖回(轉換) 」交易時，系統將採定期(不)定額或智能定期不定額之個別契約庫存，或單筆或轉換之個別交易庫存「先進先出」扣除單位數，其中定期(不)定額或智能定期不定額一筆契約若有多次扣款，將扣除「扣款日期」順序較早期的單位數優先贖回或轉換。
                                </li>
                                <li>
                                    申購、贖回及配息資訊所涉之匯率轉換，交易匯率係由臺灣集中保管結算所之收付銀行(華南銀行)提供。不同幣別基金轉換所涉之匯率轉換，交易匯率係由基金保管銀行提供。
                                </li>
                                <li>
                                    未實現損益金額係以基準日之單位數、淨值及匯率計算，且不包含已發放之現金配息，投資人實際損益需待贖回分配後確定。單一基金部份贖回之投資成本，係以先進先出法計算。累積配現金額如該檔基金全數贖回，則累積配現金額將歸零。
                                </li>
                                <li>
                                    參考報酬率之計算包含已發放之現金分配金額，採((未實現損益+累積配現金額)/投資金額)╳100%方式簡單計算，暫不考慮時間價值。
                                </li>
                                <li>
                                    新台幣投資結餘係將所有新台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。
                                </li>
                                <li>
                                    在基金贖回/轉換參考市值欄位，及投資損益相關頁面檢視加總時，因庫存的參考市值(持有單位數*匯率*參考淨值)採用四捨五入，故各項參考市值與加總合計的總金額參考市值，可能會有尾數之誤差。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日 9：00～18：00 撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
        slick: slick,
    },
};

// 庫存總覽
const MyInventory_List = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    manyTags: ["人民幣", "累積型"],
                    fundCode: "4000",
                    fundName: "伊斯蘭債券基金—美元",
                    functionBtns: true,
                    info: [
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "平均申購成本淨值",
                            text: "29.9825",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "轉讓",
                            dealDate: "2021/05/28",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "4,919",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "419",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "4,500",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "一次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "轉申購",
                            dealDate: "2021/05/17",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "74,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "9,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "14.59%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "	65,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "13",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "14.57%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `若為暫停扣款且已全部贖回或全部轉換之定期(不)定額契約，仍會顯示該契約以及該契約之累積配現金額。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "暫停", // 通知頻率
                                pause: true, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "定期(不)定額",
                            errorTag: "交易處理中",
                            dealDateName: "契約生效日：",
                            dealDate: "2021/01/27",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "16,720",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "-280",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-1.49%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "17,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "26",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-1.64%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "契約書號",
                                    text: "254530",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: "2020/12/30",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "200.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "0.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "200.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "每次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                    ],
                    newPriceNotification: true,
                    priceNotification: {
                        // 到價通知設定樣式的資料
                        condition: "淨值>=25%,淨值<=30%", // 通知條件
                        frequency: "一次", // 通知頻率
                        pause: false,
                    },
                    // warning: ``,
                },
                {
                    transactionMethod: "合作帳戶",
                    transactionMethodType: "danger",
                    transactionMethodTooltip: true,
                    transactionMethodTooltipText: `
                                                    您的「Form W-8BEN」已過期，富蘭克林證券投顧將依FATCA規定，將您本人於富蘭克林證券投顧之帳戶列為不合作帳戶(Recalcitrant Account)，針對符合FATCA規定法定條件的存入款項(包含但不限於美國來源所得)由基金公司予以扣繳百分之三十的美國扣繳稅款予美國聯邦政府。
                                                    <br/>敬請您盡速 <a href="https://wt.franklin.com.tw/areas/etrade-remake/#/USFundApply" title="重新簽署文件" target="_blank" class="el-link el-link--primary is-underline" style="color: #fff">重新簽署文件</a>，以保障您的權益，如您已繳回「Form W-8BEN」，則無需理會此則提醒。
                                                  `,
                    manyTags: ["人民幣", "累積型"],
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    functionBtns: true,
                    info: [
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "平均申購成本淨值",
                            text: "29.9825",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "轉讓",
                            dealDate: "2021/05/28",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "4,919",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "419",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "4,500",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "一次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "轉申購",
                            dealDate: "2021/05/17",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "74,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "9,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "14.59%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "	65,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "13",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "14.57%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `若為暫停扣款且已全部贖回或全部轉換之定期(不)定額契約，仍會顯示該契約以及該契約之累積配現金額。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "暫停", // 通知頻率
                                pause: true, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "定期(不)定額",
                            errorTag: "交易處理中",
                            dealDateName: "契約生效日：",
                            dealDate: "2021/01/27",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "16,720",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "-280",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-1.49%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "17,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "26",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-1.64%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "契約書號",
                                    text: "254530",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: "2020/12/30",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "200.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "0.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "200.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "每次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                    ],
                    newPriceNotification: true,
                    priceNotification: {
                        // 到價通知設定樣式的資料
                        condition: "淨值>=25%,淨值<=30%", // 通知條件
                        frequency: "暫停", // 通知頻率
                        pause: true,
                    },
                    // warning: ``,
                },
                {
                    transactionMethod: "不合作帳戶",
                    transactionMethodType: "danger",
                    manyTags: ["人民幣", "累積型"],
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    functionBtns: true,
                    info: [
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "平均申購成本淨值",
                            text: "29.9825",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "轉讓",
                            dealDate: "2021/05/28",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "4,919",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "419",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "4,500",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "一次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "轉申購",
                            dealDate: "2021/05/17",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "74,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "9,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "14.59%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "	65,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "13",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "14.57%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `若為暫停扣款且已全部贖回或全部轉換之定期(不)定額契約，仍會顯示該契約以及該契約之累積配現金額。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "暫停", // 通知頻率
                                pause: true, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "定期(不)定額",
                            errorTag: "交易處理中",
                            dealDateName: "契約生效日：",
                            dealDate: "2021/01/27",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "16,720",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "-280",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-1.49%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "17,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "26",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-1.64%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "契約書號",
                                    text: "254530",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: "2020/12/30",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "200.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "0.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "200.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "每次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                    ],
                    newPriceNotification: true,
                    priceNotification: {
                        // 到價通知設定樣式的資料
                        condition: "淨值>=25%,淨值<=30%", // 通知條件
                        frequency: "暫停", // 通知頻率
                        pause: true,
                    },
                    warning: `您的「Form W-8BEN」已過期，富蘭克林證券投顧將依FATCA規定，將您本人於富蘭克林證券投顧之帳戶列為不合作帳戶(Recalcitrant Account)，針對符合FATCA規定法定條件的存入款項(包含但不限於美國來源所得)由基金公司予以扣繳百分之三十的美國扣繳稅款予美國聯邦政府。
                               敬請您盡速 <a href="https://wt.franklin.com.tw/areas/etrade-remake/#/USFundApply" title="重新簽署文件" target="_blank" class="el-link el-link--primary is-underline">重新簽署文件</a>，以保障您的權益，如您已繳回「Form W-8BEN」，則無需理會此則提醒。
                             `,
                },
                {
                    manyTags: ["人民幣", "累積型"],
                    fundCode: "1716",
                    fundName: "穩定月收益基金—澳幣避險月配息",
                    functionBtns: true,
                    info: [
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "平均申購成本淨值",
                            text: "29.9825",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "轉讓",
                            dealDate: "2021/05/28",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "4,919",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "419",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "4,500",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.38",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "9.31%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "一次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "轉申購",
                            dealDate: "2021/05/17",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "74,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "9,472",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "14.59%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "	65,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "263.12",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "13",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "14.57%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `若為暫停扣款且已全部贖回或全部轉換之定期(不)定額契約，仍會顯示該契約以及該契約之累積配現金額。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "暫停", // 通知頻率
                                pause: true, // 是否暫停
                            },
                        },
                        {
                            transactionMethod: "定期(不)定額",
                            errorTag: "交易處理中",
                            dealDateName: "契約生效日：",
                            dealDate: "2021/01/27",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "16,720",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "-280",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-1.49%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "17,000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "17.373",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "26",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-1.64%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "契約書號",
                                    text: "254530",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: "2020/12/30",
                            info: [
                                {
                                    tit: "參考市值",
                                    text: "200.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "未實現損益",
                                    text: "0.23",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "200.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "可動用單位數",
                                    text: "8.59",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "0.00",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "0.12%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "申購淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201217000039876",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25%,淨值<=30%", // 通知條件
                                frequency: "每次", // 通知頻率
                                pause: false, // 是否暫停
                            },
                        },
                    ],
                    // warning: ``,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "更多資訊",
                minWidth: "0",
                pcShowQty: {
                    base: "8",
                    xxl: "7",
                    xl: "6",
                    lg: "6",
                    md: "4",
                    sm: "3",
                    xs: "2",
                },
                toggleDetailText: {
                    before: "展開",
                    after: "收起",
                },
                detail: {
                    minWidth: "630px",
                    pcShowQty: {
                        base: "6",
                        xxl: "6",
                        xl: "6",
                        lg: "6",
                        md: "5",
                        sm: "5",
                        xs: "5",
                    },
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 3,
        };
    },
};

// ========= 轉換 / 贖回 ==============================================================================================================================
const RedemptionAndChange = {
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `轉換 / 贖回`,
            },
            // show: false,
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <fundQuickSearch class="margin-top-15 margin-bottom-15"></fundQuickSearch>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <redemptionAndChangeNotice :changeOnly="true" :redemptionOnly="true"></redemptionAndChangeNotice>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
        redemptionAndChangeNotice: redemptionAndChangeNotice,
    },
};

const RedemptionAndChange_list = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    transactionMethod: "單筆申購",
                    errorTag: "交易處理中",
                    dealDate: "2020/08/13",
                    fundCode: "0797",
                    fundName: "科技基金",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "703.239",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息方式",
                            text: "累積",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                },
                {
                    transactionMethod: "定期定額",
                    dealDate: "2020/08/13",
                    fundCode: "0426",
                    fundName: "精選收益基金—美元",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "419",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "9.31%",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "697.000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "4,919",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "4,500",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息方式",
                            text: "累積",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "0",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "9.31%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
                {
                    transactionMethod: "單筆申購",
                    dealDate: "2020/06/15",
                    fundCode: "0426",
                    fundName: "精選收益基金—美元",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "9,472",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "14.59%",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "可動用單位數",
                            text: "188.413",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "74,472",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "65,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "263.12",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "13",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考淨值",
                            text: "9.44",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "14.57%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "交易",
                minWidth: "0",
                pcShowQty: {
                    base: "8",
                    xxl: "7",
                    xl: "6",
                    lg: "6",
                    md: "4",
                    sm: "3",
                    xs: "2",
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 1,
        };
    },
};

// ========= 贖回流程 ==============================================================================================================================
const Redemption = {
    mixins: [delegationFailedPopUp],
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `贖回`,
            },
            stepInfo: [
                {
                    path: "/Redemption/Step1",
                    tit: "填寫贖回明細",
                },
                {
                    path: "/Redemption/Step2",
                    tit: "確認事項",
                },
                {
                    path: "/Redemption/Step3",
                    tit: "完成委託",
                },
            ],
            entrust: "success",
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <stepItem :data="stepInfo"></stepItem>
                    <el-card class="tradingProcess-card">
                        <div class="fundList-header">
                            <div class="fundList-header-content">
                                <div class="fundList-fundCode">
                                    0287
                                </div>
                                <div class="fundList-transactionMethod">
                                    單筆申購
                                </div>
                                <template v-if="$route.path === '/Redemption/Step3'">
                                    <div class="fundList-transactionMethod success" v-if="entrust == 'success'">
                                        <i class="fas fa-check-circle"></i> 委託成功
                                    </div>
                                    <div class="fundList-transactionMethod warning" v-if="entrust == 'warning'">
                                        <i class="fas fa-exclamation-circle"></i> 交易失敗
                                    </div>
                                    <div class="fundList-transactionMethod danger" v-if="entrust == 'danger'">
                                        <i class="fas fa-times-circle"></i> 嚴重錯誤
                                    </div>
                                </template>
                            </div>
                            <h3 class="fundList-fundName" title="全球債券總報酬基金—歐元(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)">
                                <openFundSmallFile></openFundSmallFile>
                                全球債券總報酬基金—歐元(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)
                            </h3>
                        </div>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                「富蘭克林坦伯頓全球投資系列－歐洲基金」將於2018/11/23合併入本基金，合併計畫內容敬請參考
                                <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.franklin.com.tw/Upload/BasicInformation/EC_201808_ReceivingShareholderLetter.pdf" target="_blank"> 股東通知信</el-link>
                                及其
                                <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.franklin.com.tw/Upload/BasicInformation/EC_201808_ReceivingShareholderLetter_CH.pdf" target="_blank"> 中譯本</el-link>
                                。
                            </slot>
                        </el-alert>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                            </slot>
                        </el-alert>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <router-view></router-view>
                        </transition>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/Redemption/Step3'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/TradeHistory/list'); $scrollTo('body')">
                            交易查詢與取消
                        </el-button>
                        <el-button
                            v-if="$route.path === '/Redemption/Step1' || $route.path === '/Redemption/Step2'"
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            {{
                                $route.path === '/Redemption/Step1' ? '重新選擇' : '上一步'
                            }}
                        </el-button>
                        <template>
                            <el-button
                                v-if="$route.path === '/Redemption/Step1'"
                                round
                                type="primary"
                                @click="$router.push('/Redemption/Step2'); $scrollTo('body')">
                                下一步
                            </el-button>
                            <el-button
                                v-else-if="$route.path === '/Redemption/Step2'"
                                round
                                type="primary"
                                @click="$router.push('/Redemption/Step3'); $scrollTo('body')">
                                確認送出
                            </el-button>
                            <el-button
                                v-else
                                round
                                type="primary"
                                @click="$router.push('/RedemptionAndChange'); $scrollTo('body')">
                                繼續下單
                            </el-button>
                        </template>
                        <el-button
                            v-if="$route.path === '/Redemption/Step2'"
                            type="text"
                            @click="$router.go(-2);">
                            取消委託
                        </el-button>
                    </div>

                    <!--示意用 可刪除 start-->
                    <div class="tradingProcess-btnArea" v-if="$route.path === '/Redemption/Step2'">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="failurePopUp">
                            示意委託失敗
                        </el-button>
                    </div>
                    <!--示意用 可刪除 end-->

                    <redemptionAndChangeNotice :changeOnly="false" :redemptionOnly="true"></redemptionAndChangeNotice>
                </div>`,
    components: {
        pageTit: pageTit,
        stepItem: stepItem,
        redemptionAndChangeNotice: redemptionAndChangeNotice,
    },
};

const Redemption_step1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "110px",
            fundInfo: [
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：29.9825(2020/07/22)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "總單位數",
                    content: "38.427",
                },
                {
                    tit: "基金參考淨值",
                    content: "10.25(2020/07/22)",
                },
                {
                    tit: "可贖回單位數",
                    content: "38.427",
                },
            ],

            form: {
                radio: '2',
                numberOfUnits: '',
                w8Expired: [],
            },

            totalNumber: 0,

            fund: [
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲贖回項目",
                    transactionMethod: "轉讓",
                    dealDate: "2021/05/28",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲贖回項目",
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲贖回項目",
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲贖回項目",
                    transactionMethod: "單筆申購",
                    dealDate: "2020/12/30",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    美元 參考匯率：29.9825(2020/07/22)
                                </div>
                            </div>
                            <!--div class="tradingProcess-card-content-item columnBreak specialVersion">
                                <div class="tradingProcess-card-content-item-content noBreak">
                                    <el-radio v-model="form.radio" label="1"><span class="focus">贖回部分單位數</span></el-radio>
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-form-item
                                        prop="numberOfUnits"
                                        :rules="[
                                            { required: true, message: '請輸入欲贖回單位數'}
                                        ]"
                                    >
                                        <el-input v-model="form.numberOfUnits"></el-input>
                                    </el-form-item>
                                </div>
                            </div-->
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="2"><span class="focus">贖回全部單位數：38.427</span></el-radio>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="3">
                                        <span class="focus">
                                            贖回指定單位數
                                            <template v-if="form.radio == 3">
                                                ：合計 <b class="price">{{totalNumber}}</b>
                                            </template>
                                        </span>
                                    </el-radio>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-button
                                        round
                                        class="sBtn"
                                        plain
                                        type="secondary"
                                        @click="$router.push('/profitLossQuery/byTransactionMethod')">
                                        選擇部分贖回請點此
                                    </el-button>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考贖回金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">99,999</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <template v-if="form.radio == 3">
                        <h2 title="請勾選欲贖回項目及輸入單位數" class="tit-type2 margin-top-30">
                            請勾選欲贖回項目及輸入單位數
                        </h2>
                        <div class="tradingProcess-card-content changeFundType">
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @checkboxMethods="checkboxMethods2(index, item)">
                                </fundList>
                            </div>
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-content text-right">
                                        <span class="focus">
                                            合計贖回指定單位數：<b class="price">{{totalNumber}}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    自動轉換/贖回
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="w8Expired"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.w8Expired">
                                            我已了解：若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                                        </el-checkbox>
                                    </el-form-item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false">
                        <template v-slot:title>
                            提醒您!
                        </template>
                        <slot name="description">
                            今日辦理之作業有可能涉及短期或過度交易(以下稱「擇時交易」)。當您的投資行為被認定為擇時交易後，有可能永久禁止您新申購本檔基金(包含：單筆申購、定期定額與轉入等委託)，建議您拉長投資週期。
                        </slot>
                    </el-alert>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    mounted() {
        this.notification();
    },
    methods: {
        checkboxMethods2(index, item) {
            // let result = this.fund.filter(x => x.checkbox == true);
            // result.length > 0 ? this.submitPassword = true : this.submitPassword = false;
            // console.log(result);
            // console.log(index, item)
            if (item.checkbox) {
                this.$set(item.info[1], 'inputInfo', 17.38);
                this.fund.forEach(
                    element => this.totalNumber += Number(element.info[1].inputInfo)
                );
            }else {
                this.$set(item.info[1], 'inputInfo', '');
            }
        },
        notification() {
            this.$notify({
                type: 'warning',
                title: '說明',
                message: '贖回指定單位數的合計為示意用',
                // position: 'bottom-right',
                duration: 0
            });
        },
    },
};

const Redemption_step2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "105px",
            fundInfo: [
                {
                    tit: "委託生效日",
                    content: "2020/07/24",
                },
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：29.9825(2020/07/22)",
                },
                {
                    tit: "基金參考淨值",
                    content: "10.25(2020/07/22)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "贖回單位數",
                    content: "17.38",
                },
            ],

            form: {
                transactionPassword: "",
            },

            fund: [
                {
                    noNext: true,
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "7.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "10",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    美元 參考匯率：29.9825(2020/07/22)
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考贖回金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">99,999</b>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    贖回帳號
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    土銀台北 960055001****
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易密碼
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-form-item
                                        prop="transactionPassword"
                                        :rules="[
                                            { required: true, message: '請輸入交易密碼'},
                                        ]"
                                    >
                                        <el-input
                                            v-model="form.transactionPassword"
                                            placeholder="請輸入您的交易密碼"
                                            show-password>
                                        </el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 title="本次贖回明細" class="tit-type2 margin-top-30">
                        本次贖回明細
                    </h2>
                    <div class="tradingProcess-card-content changeFundType">
                        <div class="fundList-area">
                            <fundList
                                v-for="(item, index) in fund"
                                :key="index"
                                :fundData="item"
                                :fundListSetting="fundListSetting">
                            </fundList>
                        </div>
                    </div>
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false"
                    >
                        <slot name="description">
                            若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                        </slot>
                    </el-alert>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
};

const Redemption_step3 = {
    data() {
        return {
            itemTitWidth: "105px",
            fundInfo: [
                {
                    tit: "委託時間",
                    content: "2020/07/23 14:13:37",
                },
                {
                    tit: "委託生效日",
                    content: "2020/07/24",
                },
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：29.9825(2020/07/22)",
                },
                {
                    tit: "基金參考淨值",
                    content: "10.25(2020/07/22)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "贖回單位數",
                    content: "17.38",
                },
            ],
            input: "",

            fund: [
                {
                    noNext: true,
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "7.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "10",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    XXXX
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    XXXX
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考贖回金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">99,999</b>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    贖回帳號
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    土銀台北 960055001****
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 title="本次贖回明細" class="tit-type2 margin-top-30">
                        本次贖回明細
                    </h2>
                    <div class="tradingProcess-card-content changeFundType">
                        <div class="fundList-area">
                            <fundList
                                v-for="(item, index) in fund"
                                :key="index"
                                :fundData="item"
                                :fundListSetting="fundListSetting">
                            </fundList>
                        </div>
                    </div>
                </div>`,
};

// ========= 轉換流程 ==============================================================================================================================
const Change = {
    mixins: [delegationFailedPopUp],
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `轉換`,
            },
            stepInfo: [
                {
                    path: "/Change/Step1",
                    tit: "填寫轉換明細",
                },
                {
                    path: "/Change/Step2",
                    tit: "確認事項",
                },
                {
                    path: "/Change/Step3",
                    tit: "完成委託",
                },
            ],
            entrust: "success",
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <stepItem :data="stepInfo"></stepItem>
                    <el-card class="tradingProcess-card">
                        <div class="fundList-header">
                            <div class="fundList-header-content">
                                <div class="fundList-fundCode">
                                    0349
                                </div>
                                <div class="fundList-transactionMethod">
                                    轉出基金 <i class="fas fa-sign-out-alt"></i>
                                </div>
                                <template v-if="$route.path === '/Change/Step3'">
                                    <div class="fundList-transactionMethod success" v-if="entrust == 'success'">
                                        <i class="fas fa-check-circle"></i> 委託成功
                                    </div>
                                    <div class="fundList-transactionMethod warning" v-if="entrust == 'warning'">
                                        <i class="fas fa-exclamation-circle"></i> 交易失敗
                                    </div>
                                    <div class="fundList-transactionMethod danger" v-if="entrust == 'danger'">
                                        <i class="fas fa-times-circle"></i> 嚴重錯誤
                                    </div>
                                </template>
                            </div>
                            <h3 class="fundList-fundName" title="全球債券總報酬基金—歐元月配息(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)">
                                <openFundSmallFile></openFundSmallFile>
                                全球債券總報酬基金—歐元月配息(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)
                            </h3>
                        </div>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                「富蘭克林坦伯頓全球投資系列－歐洲基金」將於2018/11/23合併入本基金，合併計畫內容敬請參考
                                <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.franklin.com.tw/Upload/BasicInformation/EC_201808_ReceivingShareholderLetter.pdf" target="_blank"> 股東通知信</el-link>
                                及其
                                <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.franklin.com.tw/Upload/BasicInformation/EC_201808_ReceivingShareholderLetter_CH.pdf" target="_blank"> 中譯本</el-link>
                                。
                            </slot>
                        </el-alert>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                            </slot>
                        </el-alert>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <router-view></router-view>
                        </transition>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/Change/Step3'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/TradeHistory/list'); $scrollTo('body')">
                            交易查詢與取消
                        </el-button>
                        <el-button
                            v-if="$route.path === '/Change/Step1' || $route.path === '/Change/Step2'"
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            {{
                                $route.path === '/Change/Step1' ? '重新選擇' : '上一步'
                            }}
                        </el-button>
                        <template>
                            <el-button
                                v-if="$route.path === '/Change/Step1'"
                                round
                                type="primary"
                                @click="$router.push('/Change/Step2'); $scrollTo('body')">
                                下一步
                            </el-button>
                            <el-button
                                v-else-if="$route.path === '/Change/Step2'"
                                round
                                type="primary"
                                @click="$router.push('/Change/Step3'); $scrollTo('body')">
                                確認送出
                            </el-button>
                            <el-button
                                v-else
                                round
                                type="primary"
                                @click="$router.push('/RedemptionAndChange'); $scrollTo('body')">
                                繼續下單
                            </el-button>
                        </template>
                        <el-button
                            v-if="$route.path === '/Change/Step2'"
                            type="text"
                            @click="$router.go(-2);">
                            取消委託
                        </el-button>
                    </div>

                    <!--示意用 可刪除 start-->
                    <div class="tradingProcess-btnArea" v-if="$route.path === '/Change/Step2'">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="failurePopUp">
                            示意委託失敗
                        </el-button>
                    </div>
                    <!--示意用 可刪除 end-->
                    
                    <redemptionAndChangeNotice :changeOnly="true" :redemptionOnly="false"></redemptionAndChangeNotice>
                </div>`,
    components: {
        pageTit: pageTit,
        stepItem: stepItem,
        redemptionAndChangeNotice: redemptionAndChangeNotice,
    },
};

const Change_step1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "計價幣別",
                    content: "歐元",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "總單位數",
                    content: "287.378",
                },
                {
                    tit: "可轉出單位數",
                    content: "287.378",
                },
            ],

            form: {
                radio: "2",
                input: "",

                options: [
                    {
                        label: "債券型",
                        options: [
                            {
                                value: "0287",
                                label: "0287 全球債券總報酬基金—歐元 ﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚ 穩健型(RR3)",
                            },
                            {
                                value: "0349",
                                label: "0349 全球債券總報酬基金—歐元月配息 ﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚ 穩健型(RR3)",
                            },
                        ],
                    },
                    {
                        label: "單一國家",
                        options: [
                            {
                                value: "0352",
                                label: "0352 日本基金—美元  穩健型(RR4)",
                            },
                            {
                                value: "0361",
                                label: "0361 印度基金  積極型(RR5)",
                            },
                            {
                                value: "0791",
                                label: "0791 日本基金—日幣  穩健型(RR4)",
                            },
                            {
                                value: "1805",
                                label: "1805 日本基金－美元避險  穩健型(RR4)",
                            },
                        ],
                    },
                ],
                optionsValue: "",

                distributionMethod: "",
                already: [],
                IRS_form_W8Agree: [],
                w8Expired: [],
                fundSize: [],
            },

            totalNumber: 0,

            fund: [
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲轉出項目",
                    transactionMethod: "轉讓",
                    dealDate: "2021/05/28",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲轉出項目",
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲轉出項目",
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    hasCheckbox: true, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "請勾選欲轉出項目",
                    transactionMethod: "單筆申購",
                    dealDate: "2020/12/30",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "",
                            focusText: true,
                            remark: "自行輸入或修改單位數",
                            inputInfo: "",
                            inputPlaceholder: "",
                            inputWidth: '100px'
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    美元 參考匯率：29.9825(2020/11/19)
                                </div>
                            </div>
                            <!--div class="tradingProcess-card-content-item columnBreak specialVersion">
                                <div class="tradingProcess-card-content-item-content noBreak">
                                    <el-radio v-model="form.radio" label="1"><span class="focus">轉出部分單位數</span></el-radio>
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-form-item
                                        prop="input"
                                        :rules="[
                                            { required: true, message: '請輸入欲轉換單位數', trigger: 'blur' },
                                        ]"
                                    >
                                        <el-input v-model="form.input"></el-input>
                                    </el-form-item>
                                </div>
                            </div-->
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="2"><span class="focus">轉出全部單位數：287.378</span></el-radio>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="3">
                                        <span class="focus">
                                            轉出指定單位數
                                            <template v-if="form.radio == 3">
                                                ：合計 <b class="price">{{totalNumber}}</b>
                                            </template>
                                        </span>
                                    </el-radio>
                                </div>
                            </div>
                            <!--div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-button
                                        round
                                        class="sBtn"
                                        plain
                                        type="secondary"
                                        @click="$router.push('/profitLossQuery/byTransactionMethod')">
                                        選擇部分轉出請點此
                                    </el-button>
                                </div>
                            </div-->
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    轉出基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    9.51 (2020/11/19)
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    轉出基金配息方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    配現金 / 配現
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <template v-if="form.radio == 3">
                        <h2 title="請勾選欲轉出項目及輸入單位數" class="tit-type2 margin-top-30">
                            請勾選欲轉出項目及輸入單位數
                        </h2>
                        <div class="tradingProcess-card-content changeFundType">
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @checkboxMethods="checkboxMethods2(index, item)">
                                </fundList>
                            </div>
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-content text-right">
                                        <span class="focus">
                                            合計轉出指定單位數：<b class="price">{{totalNumber}}</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 轉入基金
                            </div>
                        </div>
                        <el-form-item
                            prop="optionsValue"
                            :rules="[
                                { required: true, message: '請選擇要轉入的基金', trigger: 'change' },
                            ]"
                        >
                            <el-select v-model="form.optionsValue" filterable placeholder="請選擇要轉入的基金">
                                <el-option-group
                                    v-for="group in form.options"
                                    :key="group.label"
                                    :label="group.label">
                                    <el-option
                                        v-for="item in group.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-option-group>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    轉入基金計價幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="form.optionsValue == ''">
                                        -
                                    </template>
                                    <template v-else>
                                        歐元
                                    </template>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    轉入基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="form.optionsValue == ''">
                                        -
                                    </template>
                                    <template v-else>
                                        23.46 (2020/11/19)
                                    </template>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    轉入基金配息方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="form.optionsValue == ''">
                                        -
                                    </template>
                                    <template v-else>
                                        <el-form-item
                                            prop="distributionMethod"
                                            :rules="[
                                                { required: true, message: '請選擇', trigger: 'change' },
                                            ]"
                                        >
                                            <el-radio-group v-model="form.distributionMethod">
                                                <el-radio :label="1">
                                                    <span class="focus">配現金 / 配現</span>
                                                </el-radio>
                                                <el-radio :label="2">
                                                    <span class="focus">再投資 / 配權</span>
                                                </el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                    </template>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考轉換手續費
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="form.optionsValue == ''">
                                        -
                                    </template>
                                    <template v-else>
                                        新台幣 0 元
                                    </template>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    投資人須知及<br class="hidden-sm-and-down"/>基金公開說明書取得方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="already"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.already">我已線上閱讀/下載</el-checkbox>
                                    </el-form-item>
                                    <div class="margin-top-5">
                                        <el-link
                                            icon="fas fa-external-link-alt"
                                            type="primary"
                                            href="https://www.franklin.com.tw/Upload/BasicInformation/FTIF.pdf" target="_blank">
                                            &nbsp;投資人須知(一般資訊)
                                        </el-link>
                                        <el-divider direction="vertical" class="hidden-sm-and-down"></el-divider>
                                        <el-link
                                            icon="fas fa-external-link-alt"
                                            type="primary"
                                            href="https://www.franklin.com.tw/Upload/BasicInformation/IN_FundIF_0652.pdf" target="_blank">
                                            &nbsp;投資人須知(基金專屬資訊) 
                                        </el-link>
                                        <el-divider direction="vertical" class="hidden-sm-and-down"></el-divider>
                                        <el-link
                                            icon="fas fa-external-link-alt"
                                            type="primary"
                                            href="https://www.franklin.com.tw/Upload/BasicInformation/SICAV_122005.pdf" target="_blank">
                                            &nbsp; 基金公開說明書中譯本 
                                        </el-link>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    美國註冊基金
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="IRS_form_W8Agree"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.IRS_form_W8Agree">
                                            我瞭解並同意IRS form W-8規範，知悉需每三年更新W-8並提交予富蘭克林證券投顧，以及如W-8三年到期後如未更新繳交之後續處理方式
                                        </el-checkbox>
                                    </el-form-item>
                                    <div class="margin-top-5">
                                        <el-link
                                            icon="fas fa-external-link-alt"
                                            type="primary"
                                            href="https://wt.franklin.com.tw:8081/Content/doc/%e4%ba%a4%e6%98%93%e7%be%8e%e5%9c%8b%e8%a8%bb%e5%86%8a%e5%9f%ba%e9%87%91%e7%b0%bd%e7%bd%b2IRS_form_W8.pdf" target="_blank">
                                            &nbsp;IRS form W-8說明
                                        </el-link>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    自動轉換/贖回
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="w8Expired"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.w8Expired">
                                            我已了解：若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                                        </el-checkbox>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    基金規模
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="fundSize"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.fundSize">
                                            我已閱讀並瞭解以下說明，將繼續申購本基金
                                        </el-checkbox>
                                    </el-form-item>
                                    <div class="margin-top-5">
                                        依據「富蘭克林華美退休傘型之目標2047組合證券投資信託基金」信託契約之規定，特此通知您，本基金截至2020年12月01日止之淨資產價值為新臺幣 100,000,000 元，受益人人數為999人。
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false">
                        <template v-slot:title>
                            提醒您!
                        </template>
                        <slot name="description">
                            今日辦理之作業有可能涉及短期或過度交易(以下稱「擇時交易」)。當您的投資行為被認定為擇時交易後，有可能永久禁止您新申購本檔基金(包含：單筆申購、定期定額與轉入等委託)，建議您拉長投資週期。
                        </slot>
                    </el-alert>

                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    mounted() {
        this.notification();
    },
    methods: {
        checkboxMethods2(index, item) {
            // let result = this.fund.filter(x => x.checkbox == true);
            // result.length > 0 ? this.submitPassword = true : this.submitPassword = false;
            // console.log(result);
            // console.log(index, item)
            if (item.checkbox) {
                this.$set(item.info[1], 'inputInfo', 17.38);
                this.fund.forEach(
                    element => this.totalNumber += Number(element.info[1].inputInfo)
                );
            }else {
                this.$set(item.info[1], 'inputInfo', '');
            }
        },
        notification() {
            this.$notify({
                type: 'warning',
                title: '說明',
                message: '轉出指定單位數的合計為示意用',
                // position: 'bottom-right',
                duration: 0
            });
        },
    },
};

const Change_step2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "委託生效日",
                    content: "2020/11/23",
                },
                {
                    tit: "計價幣別",
                    content: "歐元",
                },
                {
                    tit: "可轉出單位數",
                    content: "287.378",
                },
                {
                    tit: "轉出單位數",
                    content: "17.38",
                },
                {
                    tit: "剩餘單位數",
                    content: "269.998",
                },
                {
                    tit: "轉出基金參考淨值",
                    content: "9.51 (2020/11/19)",
                },
            ],

            fundInfo2: [
                {
                    tit: "轉入基金計價幣別",
                    content: "歐元",
                },
                {
                    tit: "轉入基金參考淨值",
                    content: "23.46 (2020/11/19)",
                },
                {
                    tit: "轉入基金配息方式",
                    content: "累積",
                },
                {
                    tit: "外加轉換手續費",
                    content: "新台幣 0 元",
                },
            ],

            options: [
                {
                    label: "債券型",
                    options: [
                        {
                            value: "0287",
                            label: "0287 全球債券總報酬基金—歐元 ﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚ 穩健型(RR3)",
                        },
                        {
                            value: "0349",
                            label: "0349 全球債券總報酬基金—歐元月配息 ﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚ 穩健型(RR3)",
                        },
                    ],
                },
                {
                    label: "單一國家",
                    options: [
                        {
                            value: "0352",
                            label: "0352 日本基金—美元  穩健型(RR4)",
                        },
                        {
                            value: "0361",
                            label: "0361 印度基金  積極型(RR5)",
                        },
                        {
                            value: "0791",
                            label: "0791 日本基金—日幣  穩健型(RR4)",
                        },
                        {
                            value: "1805",
                            label: "1805 日本基金－美元避險  穩健型(RR4)",
                        },
                    ],
                },
            ],
            value: "",

            form: {
                checked1: [],
                checked2: [],
                transactionPassword: "",
            },

            fund: [
                {
                    noNext: true,
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "7.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "10",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    美元 參考匯率：29.9825(2020/11/19)
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 title="本次轉出明細" class="tit-type2 margin-top-30">
                        本次轉出明細
                    </h2>
                    <div class="tradingProcess-card-content changeFundType">
                        <div class="fundList-area">
                            <fundList
                                v-for="(item, index) in fund"
                                :key="index"
                                :fundData="item"
                                :fundListSetting="fundListSetting">
                            </fundList>
                        </div>
                    </div>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-fundCode">
                                0287
                            </div>
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 轉入基金
                            </div>
                        </div>
                        <h3 class="fundList-fundName" title="富蘭克林坦伯頓全球投資系列-全球債券總報酬基金歐元A(acc)股﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚">
                            <openFundSmallFile></openFundSmallFile>
                            富蘭克林坦伯頓全球投資系列-全球債券總報酬基金歐元A(acc)股﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚
                        </h3>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo2" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    -------
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    -------
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易密碼
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-form-item
                                        prop="transactionPassword"
                                        :rules="[
                                            { required: true, message: '請輸入交易密碼'},
                                        ]"
                                    >
                                        <el-input
                                            v-model="form.transactionPassword"
                                            placeholder="請輸入您的交易密碼"
                                            show-password>
                                        </el-input>
                                    </el-form-item>
                                </div>
                            </div>
                            <el-divider class="columnSpan margin-top-10 margin-bottom-10"></el-divider>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="checked1"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.checked1">
                                            本人於申購/轉換前，已收到並詳閱此基金之公開說明書及投資人需知，並充分了解上列所述相關風險預告內容
                                            <el-link
                                                icon="fas fa-external-link-alt"
                                                type="primary"
                                                href="https://wt.franklin.com.tw:8081/Home/RiskAnnouncement" target="_blank">
                                                &nbsp;風險預告書
                                            </el-link>
                                        </el-checkbox>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="checked2"
                                        :rules="[
                                            { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.checked2">
                                            本人已充份評估並詳閱通路報酬之內容(包含基金各級別近五年度之費用率及報酬率資訊)，且確認本次申購之基金符合本人投資需求，並同意 貴公司留存此評估結果。有關通路報酬等資訊如有變動時，本人同意 貴公司得以公開網頁、電子郵件、或對帳單等文件或本人同意之方式通知。
                                            <el-link
                                                icon="fas fa-external-link-alt"
                                                type="primary"
                                                href="channelReward.html" target="_blank">
                                                &nbsp;通路報酬
                                            </el-link>
                                            <el-divider direction="vertical" class="hidden-sm-and-down"></el-divider>
                                            <el-link
                                                icon="fas fa-external-link-alt"
                                                type="primary"
                                                href="https://wt.franklin.com.tw:8081/Content/doc/ChannelReward.pdf" target="_blank">
                                                &nbsp;通路報酬介紹
                                            </el-link>
                                        </el-checkbox>
                                    </el-form-item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false">
                        <template v-slot:title>
                            提醒您!
                        </template>
                        <slot name="description">
                            今日辦理之作業有可能涉及短期或過度交易(以下稱「擇時交易」)。當您的投資行為被認定為擇時交易後，有可能永久禁止您新申購本檔基金(包含：單筆申購、定期定額與轉入等委託)，建議您拉長投資週期。
                        </slot>
                    </el-alert>
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false"
                    >
                        <slot name="description">
                            若您的W8-BEN即將到期但尚未重新簽署完成時，當申請美國註冊基金「全部贖回」或「全部轉換」交易生效日在12/1~12/31期間，如原申購(含定期定額等契約)有在途單位數於前述交易後方入帳並可贖回時(例如：配權單位數或最後一次扣款單位數)，本公司將進行自動贖回或自動轉換；惟考量W8-BEN於該年年底過期後進行贖回或轉換交易將產生<b class="text-red">30%賦稅</b>，故在途單位數入帳時間、或自動贖回/自動轉換交易日期落於跨年度後將停止自動贖回/自動轉換機制。
                        </slot>
                    </el-alert>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
};

const Change_step3 = {
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "委託時間",
                    content: "2020/11/20 14:07:35",
                },
                {
                    tit: "委託生效日",
                    content: "2020/11/23",
                },
                {
                    tit: "計價幣別",
                    content: "歐元",
                },
                {
                    tit: "可轉出單位數",
                    content: "287.378",
                },
                {
                    tit: "轉出單位數",
                    content: "17.38",
                },
                {
                    tit: "剩餘單位數",
                    content: "269.998",
                },
                {
                    tit: "轉出基金參考淨值",
                    content: "9.51 (2020/11/19)",
                },
            ],

            fundInfo2: [
                {
                    tit: "轉入基金計價幣別",
                    content: "歐元",
                },
                {
                    tit: "轉入基金參考淨值",
                    content: "23.46 (2020/11/19)",
                },
                {
                    tit: "外加轉換手續費",
                    content: "新台幣 0 元",
                },
            ],

            fund: [
                {
                    noNext: true,
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "7.38",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
                {
                    noNext: true,
                    transactionMethod: "定期(不)定額",
                    dealDate: "2021/01/27",
                    info: [
                        {
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "轉換單位數",
                            text: "10",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "16,720",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "	17.373",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "600px",
                pcShowQty: {
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        };
    },
    template: ` <div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    基金參考淨值
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    美元 參考匯率：29.9825(2020/11/19)
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 title="本次轉出明細" class="tit-type2 margin-top-30">
                        本次轉出明細
                    </h2>
                    <div class="tradingProcess-card-content changeFundType">
                        <div class="fundList-area">
                            <fundList
                                v-for="(item, index) in fund"
                                :key="index"
                                :fundData="item"
                                :fundListSetting="fundListSetting">
                            </fundList>
                        </div>
                    </div>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-fundCode">
                                0287
                            </div>
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 轉入基金
                            </div>
                        </div>
                        <h3 class="fundList-fundName" title="富蘭克林坦伯頓全球投資系列-全球債券總報酬基金歐元A(acc)股﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚">
                            <openFundSmallFile></openFundSmallFile>
                            富蘭克林坦伯頓全球投資系列-全球債券總報酬基金歐元A(acc)股﹙本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金﹚
                        </h3>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo2" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    -------
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    -------
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
};