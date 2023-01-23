// ========= 契約扣款明細查詢 ==============================================================================================================================
const DeductionDetails = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `契約扣款明細查詢`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <div class="clearfix fontSizeZero">
                        <rangeDate></rangeDate>
                    </div>
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
                                    上述交易明細，資料若有不符，應以臺灣集中保管結算所電腦記錄為準。若於同一指定帳戶內同時授權二個以上基金申購款項扣款轉帳付款作業，將依集保結算所指定之扣款順序逐筆扣款，申購人不得異議。
                                </li>
                                <li>
                                    因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        rangeDate: rangeDate,
    },
};

const DeductionDetails_list = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    transactionMethod: "交易成功",
                    transactionMethodType: "",
                    dealDateName: "扣款日期：",
                    dealDate: "2020/12/01",
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    info: [
                        {
                            tit: "交易總額",
                            text: "30,000.00",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "申購單位數",
                            text: "3,325.942",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "扣款幣別",
                            text: "美元",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款帳號",
                            text: "華南銀行 11111111***",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易序號",
                            text: "20201127D00391548",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "30,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "外幣投資金額",
                            text: "30,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費",
                            text: "0.00",
                            focusText: false,
                            remark: "",
                            hasTooltip: true,
                            tooltipContent: `優惠費率0.6000%，紅利折抵180.00元`,
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "淨值",
                            text: "9.02",
                            focusText: false,
                            remark: "(2020/12/01)",
                        },
                        {
                            tit: "匯率",
                            text: "1",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託來源",
                            text: "網路",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                },
                {
                    transactionMethod: "交易失敗",
                    transactionMethodType: "danger",
                    transactionMethodTooltip: true,
                    transactionMethodTooltipText: `存款不足`,
                    dealDateName: "扣款日期：",
                    dealDate: "2020/12/01",
                    fundCode: "1022",
                    fundName: "邊境市場基金—歐元",
                    info: [
                        {
                            tit: "交易總額",
                            text: "5,000.00",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "申購單位數",
                            text: "261.233",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "扣款幣別",
                            text: "歐元",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款帳號",
                            text: "華南銀行 11111111***",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易序號",
                            text: "20201127D00391549",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "5,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "外幣投資金額",
                            text: "5,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費",
                            text: "0.00",
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
                            tit: "淨值",
                            text: "19.14",
                            focusText: false,
                            remark: "(2020/12/01)",
                        },
                        {
                            tit: "匯率",
                            text: "1",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託來源",
                            text: "網路",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                },
                {
                    transactionMethod: "交易成功",
                    transactionMethodType: "",
                    dealDateName: "扣款日期：",
                    dealDate: "2020/12/01",
                    fundCode: "1716",
                    fundName: "穩定月收益基金—澳幣避險月配息",
                    info: [
                        {
                            tit: "交易總額",
                            text: "20,000.00",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "申購單位數",
                            text: "2,412.545",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "扣款幣別",
                            text: "澳幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款帳號",
                            text: "華南銀行 11111111***",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易序號",
                            text: "20201127D00391550",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "20,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "外幣投資金額",
                            text: "20,000.00",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費",
                            text: "0.00",
                            focusText: false,
                            remark: "",
                            hasTooltip: true,
                            tooltipContent: `優惠費率0.3000%，紅利折抵60.00元`,
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "淨值",
                            text: "8.29",
                            focusText: false,
                            remark: "(2020/12/01)",
                        },
                        {
                            tit: "匯率",
                            text: "1",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託來源",
                            text: "網路",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "更多資訊",
                minWidth: "0",
                pcShowQty: {
                    base: "8",
                    xxl: "6",
                    xl: "5",
                    lg: "5",
                    md: "4",
                    sm: "3",
                    xs: "2",
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 0, // PM：因為零散所以不給交易
        };
    },
};

// ========= 到價通知設定 ==============================================================================================================================
const PriceArrivalNotice = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `到價通知設定`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
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
                                    上述投資組合損益，為資料期間內已完成交易程序者，資料若有不符，應以臺灣集中保管結算所電腦記錄為準，歡迎您至 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.tdcc.com.tw/" target="_blank" title="臺灣集中保管結算所">臺灣集中保管結算所</el-link> 網站查詢。
                                </li>
                                <li>
                                    申購、贖回及配息資訊所涉之匯率轉換，交易匯率係由臺灣集中保管結算所之收付銀行(華南銀行)提供。不同幣別基金轉換所涉之匯率轉換，交易匯率係由基金保管銀行提供。
                                </li>
                                <li>
                                    未實現損益金額係以基準日之單位數、淨值及匯率計算，且不包含已發放之現金配息，投資人實際損益需待贖回分配後確定。單一基金部份贖回之投資成本，係以先進先出法計算。累積配現金額如該檔基金全數贖回，則累積配現金額將歸零。
                                </li>
                                <li>
                                    到價通知參考報酬率之計算採不含息報酬率，(未實現損益/投資金額)╳100%方式簡單計算，暫不考慮時間價值。
                                </li>
                                <li>
                                    台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。
                                </li>
                                <li>
                                    「到價通知」設定說明：
                                    <ol>
                                        <li>
                                            獲利達正報酬30%欲贖回，虧損至負10%要調整，則「到價通知」設定方式為：報酬率≧：＋30%，報酬率≦：－10%
                                        </li>
                                        <li>
                                            獲利高於正報酬20%欲減碼，低於正5%開始加碼，則「到價通知」設定方式：報酬率≧：＋20%，報酬率≦：＋5%
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
    },
};

const PriceArrivalNotice_list = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    transactionMethod: "單筆申購",
                    dealDate: "2020/08/13",
                    fundCode: "0349",
                    fundName: "科技基金 ",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-1.64%",
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
                            tit: "投資金額",
                            text: "17,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "總單位數",
                            text: "17.373",
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
                            tit: "含息報酬率",
                            text: "-1.49%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    bottomContent: {
                        areaClass: "priceNotificationType",
                        type: "priceArrivalNotice",
                    },
                    priceNotification: {
                        condition: "淨值>=25,淨值<=30",
                        frequency: "一次",
                    },
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
                            tit: "不含息報酬率",
                            text: "9.31%",
                            focusText: true,
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
                            tit: "總單位數",
                            text: "17.38",
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
                            tit: "含息報酬率",
                            text: "9.31%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    bottomContent: {
                        areaClass: "priceNotificationType pause",
                        type: "priceArrivalNotice",
                    },
                    priceNotification: {
                        condition: "報酬率>=10%,報酬率<=-5%",
                        frequency: "暫停",
                    },
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
                            tit: "不含息報酬率",
                            text: "14.57%",
                            focusText: true,
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
                            tit: "總單位數",
                            text: "263.12",
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
                            tit: "含息報酬率",
                            text: "14.59%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    bottomContent: {
                        // areaClass: "",
                        type: "priceArrivalNotice",
                    },
                    priceNotification: {
                        condition: "-",
                        frequency: "-",
                        setUp: false,
                    },
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
            },
            fundListIndex: 0,

            infoCardBtnType: 0,
        };
    },
};

// ========= 受益分配查詢 ==============================================================================================================================
const BenefitDistributionQuery = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `受益分配查詢`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <div class="clearfix fontSizeZero datePickerForTabItem">
                        <rangeDate class="type2"></rangeDate>
                    </div>
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
                                    上述交易明細，資料若有不符，應以臺灣集中保管結算所電腦記錄為準。
                                </li>
                                <li>
                                    因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        rangeDate: rangeDate,
    },
};

const benefitDistributionQueryFund = [
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "2026",
            fundName: "穩定月收益基金—南非幣避險月配息",
            info: [
                {
                    tit: "分配單位數",
                    text: "1.935",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "南非幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "378.680",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.537000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "105.09",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "2027",
            fundName: "新興國家固定收益基金－南非幣避險月配息",
            info: [
                {
                    tit: "分配單位數",
                    text: "4.431",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "南非幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "676.773",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.480000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "73.31",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "150",
            fundName: "潛力組合基金",
            info: [
                {
                    tit: "分配單位數",
                    text: "204.004",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/14",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "7,751.938",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.830550",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "31.56",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "1107",
            fundName: "公用事業基金",
            info: [
                {
                    tit: "配現金額",
                    text: "7,007.99",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "4,589.261",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "1.527040",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "6822",
            fundName: "全球高收益債券B分配型澳幣",
            info: [
                {
                    tit: "配現金額",
                    text: "41.14",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "澳幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "1,327.0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.031000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "6883",
            fundName: "富蘭克林華美特別股收益基金B分配型人民幣",
            info: [
                {
                    tit: "配現金額",
                    text: "66.67",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "人民幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "1,025.6",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.065000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
];

const benefitDistributionQueryFundListSetting = [
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
];

const BenefitDistributionQuery_list = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "再投資 / 配權分配明細",
                    name: "1",
                },
                {
                    title: "配現金 / 配現分配明細",
                    name: "2",
                },
            ],
            tabIndex: 2,

            fund: benefitDistributionQueryFund[0],
            fundListSetting: benefitDistributionQueryFundListSetting[0],
            fundListIndex: 0,
        };
    },
    template: ` <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)">
                                </fundList>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <infoCord
                        ref="fundCard"
                        :class="{
                            'isChangeType' : fund[fundListIndex].isChange,
                        }"
                    >
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundInfoItem
                                :fundData="fund"
                                :index="fundListIndex"
                                :setting="fundListSetting">
                            </cardFundInfoItem>
                        </template>
                        <template v-slot:btnArea>
                            <div class="infoCard-btnArea" v-show="false">
                                <!-- PM：因為零散所以不給交易 -->
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                        </template>
                    </infoCord>
                </div>`,
    components: {
        infoCord: infoCord,
    },
    methods: {
        postFundListIndex(val) {
            if (window.innerWidth < 1600) {
                if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                    this.$refs["fundCard"].show = false;
                    // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
                } else {
                    this.fundListIndex = val;
                    this.$refs["fundCard"].show = true;
                    // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
                }
            }
        },
        handleClick(tab, event) {
            this.fundListIndex = 0;
            this.fund = benefitDistributionQueryFund[this.editableTabsValue - 1];
            this.fundListSetting = benefitDistributionQueryFundListSetting[this.editableTabsValue - 1];
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// ========= 投資損益查詢 ==============================================================================================================================
const ProfitLossQuery = {
    mixins: [slickFunction],
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `投資損益查詢`,
            },
            show: false,

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
                             :printTarget="$route.path === '/ProfitLossQuery/byFundId' ? 'print-ProfitLossQuery_byFundId.html' : 'print-ProfitLossQuery_byTransactionMethod.html'">
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
                    <div class="clearfix fontSizeZero">
                        <div class="page-changeDisplayMethod">
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/ProfitLossQuery/byFundId'"
                                :type="$route.path === '/ProfitLossQuery/byFundId' ? 'primary' : 'secondary'"
                                @click="$router.push('/ProfitLossQuery/byFundId')">
                                依基金顯示
                            </el-button>
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/ProfitLossQuery/byTransactionMethod'"
                                :type="$route.path === '/ProfitLossQuery/byTransactionMethod' ? 'primary' : 'secondary'"
                                @click="$router.push('/ProfitLossQuery/byTransactionMethod')">
                                依交易方式顯示
                            </el-button>
                        </div>
                        <calculationFormula></calculationFormula>
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
                                    上述投資組合損益，為資料期間內已完成交易程序者，資料若有不符，應以臺灣集中保管結算所電腦記錄為準，歡迎您至 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.tdcc.com.tw/" target="_blank" title="臺灣集中保管結算所">臺灣集中保管結算所</el-link> 網站查詢。
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
                                    台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        calculationFormula: calculationFormula,
        fundQuickSearch: fundQuickSearch,
        slick: slick,
    },
};

// 依基金顯示
const ProfitLossQuery_byFundId = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
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
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
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
                            tit: "配息金額",
                            text: "26",
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
                    detail: [
                        {
                            transactionMethod: "單筆申購",
                            errorTag: "交易處理中",
                            dealDate: "2020/08/13",
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
                                    tit: "累積單位數",
                                    text: "17.373",
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
                                    tit: "交易書號",
                                    text: "20201216E00022709",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                    ],
                    warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                    warningDisplayMethod: `tooltip`,
                    warningTooltipTit: `尚有在途交易`,
                },
                {
                    fundCode: "0426",
                    fundName: "精選收益基金—美元",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "9,094",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "6.03%",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "160,594",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "151,500",
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
                            tit: "配息金額",
                            text: "36",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積單位數",
                            text: "567",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "6.00%",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "定期(不)定額",
                            errorTag: "交易處理中",
                            dealDate: "2020/08/13",
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
                                    tit: "參考淨值",
                                    text: "9.44",
                                    focusText: false,
                                    remark: "(2020/09/23)",
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
                                    tit: "配息金額",
                                    text: "0",
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
                                {
                                    tit: "契約書號",
                                    text: "20201216E00022709",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `若為暫停扣款且已全部贖回或全部轉換之定期(不)定額契約，仍會顯示該契約以及該契約之累積配現金額。`,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: "2020/06/15",
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
                                    tit: "參考淨值",
                                    text: "9.44",
                                    focusText: false,
                                    remark: "(2020/09/23)",
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
                                    tit: "配息金額",
                                    text: "13",
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
                                {
                                    tit: "交易書號",
                                    text: "20201216E00022709",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "單筆申購",
                            dealDate: " 2020/05/10",
                            info: [
                                {
                                    tit: "未實現損益",
                                    text: "-797",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-0.94%",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "參考市值",
                                    text: "81,203",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "82,000",
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
                                    tit: "配息金額",
                                    text: "23",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積單位數",
                                    text: "286.9",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "參考匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "(2020/09/23)",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-0.97%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "20201216E00022709",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                    ],
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
                toggleDetailText: {
                    before: "展開",
                    after: "收起",
                },
                detail: {
                    minWidth: "680px",
                    pcShowQty: {
                        base: "6",
                        xxl: "6",
                        xl: "5",
                        lg: "6",
                        md: "5",
                        sm: "5",
                        xs: "5",
                    },
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 2,
        };
    },
};

// 依交易方式顯示
const ProfitLossQuery_byTransactionMethod = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    transactionMethod: "單筆申購",
                    errorTag: "交易處理中",
                    dealDate: "2020/08/13",
                    fundCode: "0797",
                    fundName: "科技基金 ",
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
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
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
                            tit: "累積配息",
                            text: "26",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "總單位數",
                            text: "17.373",
                            focusText: false,
                            remark: "",
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
                        {
                            tit: "交易書號",
                            text: "20201216E00022709",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                    warningDisplayMethod: `tooltip`,
                    warningTooltipTit: `尚有在途交易`,
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
                            tit: "參考淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
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
                            tit: "累積配息",
                            text: "0",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "總單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
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
                        {
                            tit: "契約書號",
                            text: "20201216E00022709",
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
                            tit: "參考淨值",
                            text: "9.44",
                            focusText: false,
                            remark: "(2020/09/23)",
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
                            tit: "累積配息",
                            text: "13",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "總單位數",
                            text: "263.12",
                            focusText: false,
                            remark: "",
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
                        {
                            tit: "交易書號",
                            text: "20201216E00022709",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
                {
                    transactionMethod: "單筆申購",
                    dealDate: "2020/05/10",
                    fundCode: "0426",
                    fundName: "精選收益基金—美元",
                    info: [
                        {
                            tit: "未實現損益",
                            text: "-797",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-0.94%",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "參考市值",
                            text: "81,203",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "82,000",
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
                            tit: "累積配息",
                            text: "23",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "總單位數",
                            text: "286.9",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "參考匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-0.97%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "20201216E00022709",
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

// ========= 交易確認書查詢 ==============================================================================================================================
const TradeCFM = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `交易確認書查詢`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <div class="clearfix fontSizeZero">
                        <div class="page-changeDisplayMethod">
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/TradeCFM/offshoreFund'"
                                :type="$route.path === '/TradeCFM/offshoreFund' ? 'primary' : 'secondary'"
                                @click="$router.push('/TradeCFM/offshoreFund')">
                                境外基金
                            </el-button>
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/TradeCFM/SinoAm'"
                                :type="$route.path === '/TradeCFM/SinoAm' ? 'primary' : 'secondary'"
                                @click="$router.push('/TradeCFM/SinoAm')">
                                投信基金
                            </el-button>
                        </div>
                        <rangeDate></rangeDate>
                    </div>
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
                                    上述交易明細，為資料期間內已完成交易程序者，資料若有不符，應以臺灣集中保管結算所電腦記錄為準，歡迎您至 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.tdcc.com.tw/" target="_blank" title="臺灣集中保管結算所">臺灣集中保管結算所</el-link> 網站查詢。
                                </li>
                                <li>
                                    申購、贖回及配息資訊所涉之匯率轉換，交易匯率係由臺灣集中保管結算所之收付銀行(華南銀行)提供。不同幣別基金轉換所涉之匯率轉換，交易匯率係由基金保管銀行提供。
                                </li>
                                <li>
                                    基金轉換：(1)境外基金若進行A股不同計價幣別基金轉換時，轉出/轉入之基金淨值同為T日；若遇國外無報價時，則遞延至次一報價營業日之淨值。(2)境內基金除不提供不同計價幣別方式轉換外，其他轉換申請買回基金之買回付款日即為轉申購基金之申購淨值日，而轉同檔基金及國內股票型基金互轉(第一富、高科技、傳產基金)則以買回日(T+1)之淨值為申購淨值日，投資人可點選<el-link type="primary" @click="$root.$data.ftftFundDescription.dialog = true;">【富蘭克林華美投信系列基金淨值計算及付款日說明】<i class="fas fa-external-link-alt"></i></el-link>參閱各檔境內基金買回淨值日與買回付款日資訊。
                                </li>
                                <li>
                                    基金互相轉換（轉入貨幣型基金除外）、以及貨幣型基金轉出至股票型、債券型、平衡型基金，本公司每筆交易將外加收取新台幣$200轉換手續費，如有優惠或調整收費標準將以總代理人或境內、外基金機構公告為主。
                                </li>
                                <li>
                                    境內基金短線費用：依據富蘭克林華美投信全系列基金短線交易規定，持有境內基金未屆滿14日(含)者，應支付買回價金之百分之零點二(0.2%)之買回費用；買回費用計算至新台幣「元」，不足壹元者不予收取，滿壹元以上者四捨五入。外幣計價者 (日幣除外 ) ，採四捨五入計算至該幣別「元」以下小數點第二位。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                                <li>
                                    不合作帳戶規則: 基金代碼後方加上#01(例如:101#01)
                                    <ul>
                                        <li>
                                            轉入基金為基金代碼後方加上#01(例如:101#01) ，此為於三年到期期限內未繳回美國稅務Form W-8，富蘭克林證券投顧依FATCA規定將投資人本人於富蘭克林證券投顧之美國註冊基金轉列為不合作帳戶(Recalcitrant Account)
                                        </li>
                                        <li>
                                            轉出基金為基金代碼後方加上#01(例如:101#01) ，此為於三年到期期限後繳回美國稅務Form W-8，富蘭克林證券投顧依FATCA規定將投資人本人於富蘭克林證券投顧之美國註冊基金由不合作帳戶(Recalcitrant Account)轉列為合作帳戶。
                                        </li>
                                        <li>
                                            自不合作帳戶贖回或轉至盧森堡註冊基金，則贖回交易或轉出基金將呈現基金代碼後方加上#01(例如:101#01) 。 針對符合FATCA規定法定條件的存入款項(包含但不限於美國來源所得)由基金公司予以扣繳百分之三十的美國扣繳稅款予美國聯邦政府。
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        rangeDate: rangeDate,
    },
};

// 境外基金
const TradeCFM_offshoreFundFund = [
    [
        {
            transactionMethod: "單筆申購",
            fundCode: "0280",
            fundName: "美國機會基金—歐元",
            info: [
                {
                    tit: "投資金額",
                    text: "4,000.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "外幣投資金額",
                    text: "4,000.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "180.100",
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
                    tit: "淨值",
                    text: "22.21",
                    focusText: false,
                    remark: "(2020/11/25)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            transactionMethod: "定期(不)定額",
            fundCode: "0812",
            fundName: "美國政府基金—月配息",
            info: [
                {
                    tit: "投資金額",
                    text: "30,000.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "外幣投資金額",
                    text: "30,000.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "3,333.333",
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
                    tit: "淨值",
                    text: "9.00",
                    focusText: false,
                    remark: "(2020/11/27)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            transactionMethod: "單筆申購",
            fundCode: "4000",
            fundName: "伊斯蘭債券基金－美元",
            info: [
                {
                    tit: "投資金額",
                    text: "10,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0",
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
                    tit: "外幣投資金額",
                    text: "327.79",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "30.5075",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "24.927",
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
                    tit: "淨值",
                    text: "13.15",
                    focusText: false,
                    remark: "(2020/12/21)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "1107",
            fundName: "公用事業基金",
            info: [
                {
                    tit: "贖回價款",
                    text: "19,490.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "贖回單位數",
                    text: "1,000.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "19.49",
                    focusText: false,
                    remark: "(2020/12/10)",
                },
                {
                    tit: "付款幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "贖回匯款指定帳號",
                    text: "華南商業銀行",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            transactionMethod: "轉出基金",
            fundCode: "1107",
            fundName: "公用事業基金",
            isChange: true,
            changeTypeUseData: {
                fundCode: "0349",
                fundName: "全球債券總報酬基金—歐元月配息",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "1,000.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入單位數",
                    text: "1,926.670",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉出金額",
                    text: "19,760.00",
                    focusText: false,
                    remark: "(美元)",
                },
                {
                    tit: "轉入金額",
                    text: "17,918.03",
                    focusText: false,
                    remark: "(歐元)",
                },
                {
                    tit: "兌換匯率",
                    text: "1.1028",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉出基金淨值",
                    text: "19.76",
                    focusText: false,
                    remark: "(2020/12/01)",
                },
                {
                    tit: "轉入基金淨值",
                    text: "9.30",
                    focusText: false,
                    remark: "(2020/12/01)",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            transactionMethod: "轉出基金",
            fundCode: "1107",
            fundName: "公用事業基金",
            isChange: true,
            changeTypeUseData: {
                fundCode: "1171",
                fundName: "全球債券基金—澳幣避險月配息",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "1,000.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入單位數",
                    text: "3,386.851",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉出金額",
                    text: "19,760.00",
                    focusText: false,
                    remark: "(美元)",
                },
                {
                    tit: "轉入金額",
                    text: "29,093.05",
                    focusText: false,
                    remark: "(歐元)",
                },
                {
                    tit: "兌換匯率",
                    text: "0.6792",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉出基金淨值",
                    text: "19.76",
                    focusText: false,
                    remark: "(2020/12/01)",
                },
                {
                    tit: "轉入基金淨值",
                    text: "8.59",
                    focusText: false,
                    remark: "(2020/12/01)",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            transactionMethod: "轉出基金",
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            isChange: true,
            changeTypeUseData: {
                fundCode: "1172",
                fundName: "全球債券總報酬基金—澳幣避險月配息",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "200.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入單位數",
                    text: "397.232",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉出金額",
                    text: "1,852.00",
                    focusText: false,
                    remark: "(歐元)",
                },
                {
                    tit: "轉入金額",
                    text: "3,007.05",
                    focusText: false,
                    remark: "(澳幣)",
                },
                {
                    tit: "兌換匯率",
                    text: "1.623675",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉出基金淨值",
                    text: "9.26",
                    focusText: false,
                    remark: "(2020/12/14)",
                },
                {
                    tit: "轉入基金淨值",
                    text: "7.57",
                    focusText: false,
                    remark: "(2020/12/14)",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "2026",
            fundName: "穩定月收益基金—南非幣避險月配息",
            info: [
                {
                    tit: "分配單位數",
                    text: "1.935",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "南非幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "378.680",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.537000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "105.09",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "2027",
            fundName: "新興國家固定收益基金－南非幣避險月配息",
            info: [
                {
                    tit: "分配單位數",
                    text: "4.431",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "南非幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "676.773",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.480000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "73.31",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "150",
            fundName: "潛力組合基金",
            info: [
                {
                    tit: "分配單位數",
                    text: "204.004",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/14",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "7,751.938",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.830550",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "31.56",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "1107",
            fundName: "公用事業基金",
            info: [
                {
                    tit: "配現金額",
                    text: "7,007.99",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "4,589.261",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "1.527040",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            info: [
                {
                    tit: "配現金額",
                    text: "86.70",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "1,926.670",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.045000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "0812",
            fundName: "美國政府基金—月配息",
            info: [
                {
                    tit: "配現金額",
                    text: "146.50",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "6,659.275",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.022000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
];

const TradeCFM_offshoreFundFundListSetting = [
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "2", // 767px~360px
            xs: "2", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
];

const TradeCFM_offshoreFund = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "申購",
                    name: "1",
                },
                {
                    title: "贖回",
                    name: "2",
                },
                {
                    title: "轉換",
                    name: "3",
                },
                {
                    title: "再投資 / 配權分配明細",
                    name: "4",
                },
                {
                    title: "配現金 / 配現分配明細",
                    name: "5",
                },
            ],
            tabIndex: 5,

            fund: TradeCFM_offshoreFundFund[0],
            fundListSetting: TradeCFM_offshoreFundFundListSetting[0],
            fundListIndex: 0,
        };
    },
    template: ` <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)">
                                </fundList>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <infoCord
                        ref="fundCard"
                        :class="{
                            'isChangeType' : fund[fundListIndex].isChange,
                        }"
                    >
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundHeardr_changeTypeUse
                                v-if="fund[fundListIndex].isChange != undefined ? fund[fundListIndex].isChange : false"
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr_changeTypeUse>
                            <cardFundInfoItem
                                :fundData="fund"
                                :index="fundListIndex"
                                :setting="fundListSetting">
                            </cardFundInfoItem>
                        </template>
                        <template v-slot:btnArea>
                            <div class="infoCard-btnArea" v-show="false">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                        </template>
                    </infoCord>
                </div>`,
    components: {
        infoCord: infoCord,
    },
    methods: {
        postFundListIndex(val) {
            if (window.innerWidth > 1599 && (this.editableTabsValue == "2" || this.editableTabsValue == "4" || this.editableTabsValue == "5")) {
                return;
            } else {
                if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                    this.$refs["fundCard"].show = false;
                    // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
                } else {
                    this.fundListIndex = val;
                    this.$refs["fundCard"].show = true;
                    // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
                }
            }
        },
        handleClick(tab, event) {
            this.fundListIndex = 0;
            this.fund = TradeCFM_offshoreFundFund[this.editableTabsValue - 1];
            this.fundListSetting = TradeCFM_offshoreFundFundListSetting[this.editableTabsValue - 1];
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// 投信基金
const TradeCFM_SinoAmFund = [
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            dealDate: "2020/11/25",
            transactionMethod: "單筆申購",
            fundCode: "6822",
            fundName: "全球高收益債券B分配型澳幣",
            info: [
                {
                    tit: "投資金額",
                    text: "10,000.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "澳幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "澳幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "1,327.0",
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
                    tit: "淨值",
                    text: "7.5359",
                    focusText: false,
                    remark: "(2020/11/25)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            dealDate: "2020/11/25",
            transactionMethod: "單筆申購",
            fundCode: "6883",
            fundName: "富蘭克林華美特別股收益基金B分配型人民幣",
            info: [
                {
                    tit: "投資金額",
                    text: "10,000.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "人民幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "人民幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "1,025.6",
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
                    tit: "淨值",
                    text: "9.75",
                    focusText: false,
                    remark: "(2020/11/25)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            dealDate: "2020/12/03",
            transactionMethod: "單筆申購",
            fundCode: "6801",
            fundName: "富蘭克林華美第一富基金",
            info: [
                {
                    tit: "投資金額",
                    text: "30,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "申購手續費",
                    text: "0",
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
                    tit: "計價幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "申購單位數",
                    text: "538.6",
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
                    tit: "淨值",
                    text: "55.70",
                    focusText: false,
                    remark: "(2020/12/03)",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            dealDate: "2020/12/10",
            fundCode: "6801",
            fundName: "富蘭克林華美第一富基金",
            info: [
                {
                    tit: "贖回價款",
                    text: "11,168",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "贖回單位數",
                    text: "200.0",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "55.95",
                    focusText: false,
                    remark: "(2020/12/11)",
                },
                {
                    tit: "付款日期",
                    text: "2020/12/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "短線費用",
                    text: "22",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "贖回匯款指定帳號",
                    text: "台北富邦商業銀行",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            transactionMethod: "轉出基金",
            dealDate: "2020/12/10",
            fundCode: "6801",
            fundName: "富蘭克林華美第一富基金",
            isChange: true,
            changeTypeUseData: {
                dealDate: "2020/12/15",
                fundCode: "6802",
                fundName: "富蘭克林全球債券組合基金累積型",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "200.0",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入單位數",
                    text: "857.4",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉出金額",
                    text: "11,190",
                    focusText: false,
                    remark: "(新台幣)",
                },
                {
                    tit: "轉入金額",
                    text: "11,190",
                    focusText: false,
                    remark: "(新台幣)",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉出基金淨值",
                    text: "55.95",
                    focusText: false,
                    remark: "(2020/12/11)",
                },
                {
                    tit: "轉入基金淨值",
                    text: "13.0261",
                    focusText: false,
                    remark: "(2020/12/15)",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            transactionMethod: "轉出基金",
            dealDate: "2020/12/10",
            fundCode: "6885",
            fundName: "富蘭克林華美特別股收益基金B分配型南非幣",
            isChange: true,
            changeTypeUseData: {
                dealDate: "2020/12/16",
                fundCode: "6834",
                fundName: "全球高收益債券B分配型南非幣",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "1,486.6",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入單位數",
                    text: "1,369.8",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉出金額",
                    text: "14,984.93",
                    focusText: false,
                    remark: "(南非幣)",
                },
                {
                    tit: "轉入金額",
                    text: "14,984.93",
                    focusText: false,
                    remark: "(南非幣)",
                },
                {
                    tit: "兌換匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉出基金淨值",
                    text: "10.08",
                    focusText: false,
                    remark: "(2020/12/10)",
                },
                {
                    tit: "轉入基金淨值",
                    text: "10.9175",
                    focusText: false,
                    remark: "(2020/12/16)",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託來源",
                    text: "網路",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "6822",
            fundName: "全球高收益債券B分配型澳幣",
            info: [
                {
                    tit: "配現金額",
                    text: "41.14",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "澳幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "1,327.0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.031000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "發放日",
                    text: "2020/12/09",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "6883",
            fundName: "富蘭克林華美特別股收益基金B分配型人民幣",
            info: [
                {
                    tit: "配現金額",
                    text: "66.67",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/11/30",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/12/01",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "人民幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "基準日庫存單位數",
                    text: "1,025.6",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配息金額",
                    text: "0.065000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "發放日",
                    text: "2020/12/09",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
];

const TradeCFM_SinoAmFundListSetting = [
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "2", // 767px~360px
            xs: "2", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "5", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
];

const TradeCFM_SinoAm = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "申購",
                    name: "1",
                },
                {
                    title: "贖回",
                    name: "2",
                },
                {
                    title: "轉換",
                    name: "3",
                },
                {
                    title: "配現金 / 配現分配明細",
                    name: "4",
                },
            ],
            tabIndex: 4,

            fund: TradeCFM_SinoAmFund[0],
            fundListSetting: TradeCFM_SinoAmFundListSetting[0],
            fundListIndex: 0,
        };
    },
    template: ` <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)">
                                </fundList>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                    <infoCord
                        ref="fundCard"
                        :class="{
                            'isChangeType' : fund[fundListIndex].isChange,
                        }"
                    >
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundHeardr_changeTypeUse
                                v-if="fund[fundListIndex].isChange != undefined ? fund[fundListIndex].isChange : false"
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr_changeTypeUse>
                            <cardFundInfoItem
                                :fundData="fund"
                                :index="fundListIndex"
                                :setting="fundListSetting">
                            </cardFundInfoItem>
                        </template>
                        <template v-slot:btnArea>
                            <div class="infoCard-btnArea" v-show="false">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                        </template>
                    </infoCord>
                </div>`,
    components: {
        infoCord: infoCord,
    },
    methods: {
        postFundListIndex(val) {
            if (window.innerWidth > 1599 && (this.editableTabsValue == "1" || this.editableTabsValue == "2" || this.editableTabsValue == "4")) {
                return;
            } else {
                if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                    this.$refs["fundCard"].show = false;
                    // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
                } else {
                    this.fundListIndex = val;
                    this.$refs["fundCard"].show = true;
                    // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
                }
            }
        },
        handleClick(tab, event) {
            this.fundListIndex = 0;
            this.fund = TradeCFM_SinoAmFund[this.editableTabsValue - 1];
            this.fundListSetting = TradeCFM_SinoAmFundListSetting[this.editableTabsValue - 1];
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// ========= 每月對帳單查詢 ==============================================================================================================================
const MonthlyStatement = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `每月對帳單查詢`,
            },
            monthFilter: [
                {
                    value: '1',
                    label: '2020年10月'
                },
                {
                    value: '2',
                    label: '2020年09月'
                },
                {
                    value: '3',
                    label: '2020年08月'
                },
                {
                    value: '4',
                    label: '2020年07月'
                },
                {
                    value: '5',
                    label: '2020年06月'
                },
                {
                    value: '6',
                    label: '2020年05月'
                },
            ],
            monthFilterValue: '1',
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit" :printBtn="true" printTarget="print-MonthlyStatement.html"></pageTit>
                    <div class="clearfix fontSizeZero">
                        <div class="page-changeDisplayMethod">
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/MonthlyStatement/offshoreFund'"
                                :type="$route.path === '/MonthlyStatement/offshoreFund' ? 'primary' : 'secondary'"
                                @click="$router.push('/MonthlyStatement/offshoreFund')">
                                境外基金
                            </el-button>
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/MonthlyStatement/SinoAm'"
                                :type="$route.path === '/MonthlyStatement/SinoAm' ? 'primary' : 'secondary'"
                                @click="$router.push('/MonthlyStatement/SinoAm')">
                                投信基金
                            </el-button>
                        </div>
                        <div class="page-selectItem monthType">
                            <el-select v-model="monthFilterValue" placeholder="請選擇">
                                <el-option
                                    v-for="item in monthFilter"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                </div>`,
    components: {
        pageTit: pageTit,
    },
    mounted() {
        
    },
    methods: {
        
    },
};

// 境外基金
const MonthlyStatement_offshoreFundFund = [
    [
        {
            fundCode: "0796",
            fundName: "生技領航基金",
            info: [
                {
                    tit: "含息報酬率",
                    text: "1.14%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "259,938",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "257,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "2,938",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "1.14%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
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
                    tit: "結餘單位數",
                    text: "282.361",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "29.95",
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
                    tit: "匯率",
                    text: "30.7375",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "1049",
            fundName: "新興國家固定收益基金－美元月配息",
            info: [
                {
                    tit: "含息報酬率",
                    text: "1.93%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "406,429",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "500,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-93,571",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-18.71%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "103,226",
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
                    tit: "結餘單位數",
                    text: "1,744.405",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "7.58",
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
                    tit: "匯率",
                    text: "30.7375",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "0479",
            fundName: "全球高收益基金－美元月配息",
            info: [
                {
                    tit: "含息報酬率",
                    text: "-3.19%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "159,741",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "165,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-5,259",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-3.19%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "結餘單位數",
                    text: "685,611",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "7.58",
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
                    tit: "匯率",
                    text: "30.7375",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "0813",
            fundName: "新興國家固定收益基金—美元季配息",
            info: [
                {
                    tit: "含息報酬率",
                    text: "-4.70%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "47,650",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "50,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-2,350",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-4.70%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "結餘單位數",
                    text: "118.518",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "13.08",
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
                    tit: "匯率",
                    text: "30.7375",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "0575",
            fundName: "金磚四國基金",
            info: [
                {
                    tit: "含息報酬率",
                    text: "-19.36%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "2,015.53",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "2,500.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-484",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-19.36%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
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
                    tit: "結餘單位數",
                    text: "117.592",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "17.14",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "2027",
            fundName: "新興國家固定收益基金－南非幣避險月配息",
            info: [
                {
                    tit: "含息報酬率",
                    text: "3.88%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "15,582.12",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "15,000.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "582",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "3.88%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "結餘單位數",
                    text: "176.969",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "88.05",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "南非幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "匯率",
                    text: "1",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false, // to前端：請協助改抓你們寫的window.innerWidth 感恩感恩
            transactionMethod: "單筆",
            fundCode: "1049",
            fundName: "新興國家固定收益基金－美元月配息",
            info: [
                {
                    tit: "交易金額",
                    text: "30,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "127.565",
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
                    tit: "淨值",
                    text: "7.63",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "30.822500",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "定期定額",
            fundCode: "1172",
            fundName: "全球債券總報酬基金—澳幣避險月配息",
            info: [
                {
                    tit: "交易金額",
                    text: "3,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "13.849",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "9.64",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/20",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "13.849",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "轉出",
            fundCode: "1019",
            fundName: "邊境市場基金",
            info: [
                {
                    tit: "交易金額",
                    text: "16,696.19",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "975.815",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "-",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "17.11",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/20",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1.000000",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "轉入",
            fundCode: "0796",
            fundName: "生技領航基金",
            info: [
                {
                    tit: "交易金額",
                    text: "16,696.19",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "588.516",
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
                    tit: "淨值",
                    text: "28.37",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/20",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1.000000",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "贖回",
            fundCode: "0796",
            fundName: "生技領航基金",
            info: [
                {
                    tit: "交易金額",
                    text: "612.80",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "20.000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "-",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "30.64",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/25",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1.000000",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "定期不定額",
            fundCode: "132",
            fundName: "黃金基金",
            info: [
                {
                    tit: "交易金額",
                    text: "100.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "8.496",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "11.77",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/28",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1.000000",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false, // to前端：請協助改抓你們寫的window.innerWidth 感恩感恩
            fundCode: "0810",
            fundName: "全球債券基金—美元月配息",
            info: [
                {
                    tit: "本次分配單位數",
                    text: "1.002",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "庫存單位數",
                    text: "186.985",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/08/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/08/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日淨值",
                    text: "17.54",
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
                    tit: "每單位配現金額",
                    text: "0.094000",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false, // to前端：請協助改抓你們寫的window.innerWidth 感恩感恩
            fundCode: "1049",
            fundName: "新興國家固定收益基金－美元月配息",
            info: [
                {
                    tit: "本次配現金額",
                    text: "207",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "560",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "庫存單位數",
                    text: "100.220",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/08/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/08/08",
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
                    tit: "兌換匯率",
                    text: "30.882500",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配現金額",
                    text: "0.067",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            fundCode: "1049",
            fundName: "新興國家固定收益基金－美元月配息",
            info: [
                {
                    tit: "本次配現金額",
                    text: "868.59",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "868.59",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "庫存單位數",
                    text: "12,964.103",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/08/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/08/08",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "兌換匯率",
                    text: "1.000000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "每單位配現金額",
                    text: "0.067",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
];

const MonthlyStatement_offshoreFundFundListSetting = [
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
];

const MonthlyStatement_offshoreFund = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "當月帳戶結餘",
                    name: "1",
                },
                {
                    title: "當月交易明細",
                    name: "2",
                },
                {
                    title: "當月再投資 / 配權分配明細",
                    name: "3",
                },
                {
                    title: "當月配現金 / 配現分配明細",
                    name: "4",
                },
                {
                    title: "其他事項",
                    name: "5",
                },
            ],
            tabIndex: 5,

            fund: MonthlyStatement_offshoreFundFund[0],
            fundListSetting: MonthlyStatement_offshoreFundFundListSetting[0],
            fundListIndex: 0,

            totalTransactionCurrency: [
                {
                    currency: "美元",
                    investmentAmount: "1,109,120.00",
                    marketValue: "1,108,910.39",
                    cumulativeCashAllocation: "0.00",
                    unrealizedGainsAndLosses: "-209.61",
                    referenceRateOfReturn: "-0.02%",
                },
                {
                    currency: "新台幣",
                    investmentAmount: "28,965,000",
                    marketValue: "28,770,095",
                    cumulativeCashAllocation: "0",
                    unrealizedGainsAndLosses: "-194,905",
                    referenceRateOfReturn: "-0.67%",
                },
                {
                    currency: "	日幣",
                    investmentAmount: "60,000",
                    marketValue: "59,088",
                    cumulativeCashAllocation: "0",
                    unrealizedGainsAndLosses: "-912",
                    referenceRateOfReturn: "-1.52%",
                },
                {
                    currency: "歐元",
                    investmentAmount: "60,000.00",
                    marketValue: "58,266.97",
                    cumulativeCashAllocation: "0.00",
                    unrealizedGainsAndLosses: "-1,733.03",
                    referenceRateOfReturn: "-2.89%",
                },
            ],

            table2: [
                {
                    marketValue: ["新台幣", "873,758"],
                    accumulatedAmount: ["新台幣", "103,226"],
                    exchangeRate: "1",
                    originalPrincipal: ["新台幣", "972,000"],
                    rateOfReturn: "0.51%",
                },
                {
                    marketValue: ["美元", "2,015.53"],
                    accumulatedAmount: ["美元", "0"],
                    exchangeRate: "0.8541",
                    originalPrincipal: ["歐元", "2,135.25"],
                    rateOfReturn: "-19.37%",
                },
                {
                    marketValue: ["南非幣", "15,582.12"],
                    accumulatedAmount: ["南非幣", "0"],
                    exchangeRate: "1",
                    originalPrincipal: ["南非幣", "15,000.00"],
                    rateOfReturn: "3.88%",
                },
            ],

            cost: [
                {
                    fundCode: '0280',
                    fundName: ['美國機會基金—歐元', ''],
                    cost1: '1.0000%',
                    cost2: '不多於1.0000%',
                },
                {
                    fundCode: '0287',
                    fundName: ['全球債券總報酬基金—歐元', '本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金'],
                    cost1: '0.7500%	',
                    cost2: '不多於0.7500%',
                },
                {
                    fundCode: '0349',
                    fundName: ['全球債券總報酬基金—歐元月配息', '本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金'],
                    cost1: '0.7500%	',
                    cost2: '不多於0.7500%',
                },
                {
                    fundCode: '0778',
                    fundName: ['全球氣候變遷基金—歐元', ''],
                    cost1: '1.0000%',
                    cost2: '不多於1.0000%',
                },
            ],

            costChange: [
                {
                    fundName: ['高成長基金', '本基金之配息來源可能為本金'],
                    cost1: ['0.7470%', '0.7460%',],
                    cost2: ['不多於0.2500%', '不多於0.2500%']
                },
                {
                    fundName: ['成長基金', '本基金之配息來源可能為本金'],
                    cost1: ['0.6910%', '0.6890%',],
                    cost2: ['不多於0.2500%', '不多於0.2500%']
                },
                {
                    fundName: ['公用事業基金', '本基金之配息來源可能為本金'],
                    cost1: ['0.7070%', '0.7020%',],
                    cost2: ['不多於0.2500%', '不多於0.2500%']
                },
            ],
        };
    },
    template: ` <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <el-alert
                                class="borderStyle margin-top-0"
                                type="info"
                                show-icon
                                :closable="false"
                                v-if="editableTabsValue == '1'"
                            >
                                <template v-slot:title>
                                    以當月最後營業日淨值與參考匯率進行計算
                                </template>
                            </el-alert>
                            <el-alert
                                class="borderStyle margin-top-0"
                                type="info"
                                show-icon
                                :closable="false"
                                v-if="editableTabsValue == '3' || editableTabsValue == '4'"
                            >
                                <template v-slot:title>
                                    除息日前一營業日為基準日，依基準日所持有之單位數參與配息
                                </template>
                            </el-alert>
                            <div class="text-right" v-if="editableTabsValue == '3' || editableTabsValue == '4'">
                                <el-popover
                                    placement="top-start"
                                    width="285"
                                    trigger="hover">
                                    <template v-slot="content">
                                        <div v-if="editableTabsValue == '3'">
                                            <div class="popoverContent">
                                                <p>
                                                    <b>本次分配單位數：</b>
                                                    <br/>庫存單位數 <small><i class="fas fa-times"></i></small> 每單位配息金額 <small><i class="fas fa-divide"></i></small> 除息日淨值
                                                </p>
                                            </div>
                                        </div>
                                        <div v-if="editableTabsValue == '4'">
                                            <div class="popoverContent">
                                                <p>
                                                    <b>本次配現金額：</b>
                                                    <br/>兌換匯率 <small><i class="fas fa-times"></i></small> 庫存單位數 <small><i class="fas fa-times"></i></small> 每單位配息金額
                                                </p>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="calculationFormula" slot="reference">
                                        <i class="fas fa-exclamation-circle"></i> 計算公式
                                    </div>
                                </el-popover>
                            </div>

                            <template v-if="editableTabsValue == '1'">
                                <h2 title="現行庫存損益總覽參考" class="tit-type2 margin-top-30">
                                    現行庫存損益總覽參考
                                    <el-popover
                                        placement="top-start"
                                        width="285"
                                        trigger="hover">
                                        <template v-slot="content">
                                            <div v-if="editableTabsValue == '1'">
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>市值：</b>
                                                        <br/>淨值 <small><i class="fas fa-times"></i></small> 結餘單位數 <small><i class="fas fa-times"></i></small> 匯率
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>未實現損益：</b>
                                                        <br/>市值 <small><i class="fas fa-minus"></i></small> 投資金額
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>含息報酬率：</b>
                                                        <br/>(未實現損益 <small><i class="fas fa-plus"></i></small> 累積配現金額) <small><i class="fas fa-divide"></i></small> 投資金額
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>不含息報酬率：</b>
                                                        <br/>未實現損益 <small><i class="fas fa-divide"></i></small> 投資金額
                                                    </p>
                                                </div>
                                            </div>
                                        </template>
                                        <div class="calculationFormula" slot="reference">
                                            <i class="fas fa-exclamation-circle"></i> 計算公式
                                        </div>
                                    </el-popover>
                                </h2>
                            </template>

                            <el-alert
                                class="text-center"
                                type="info"
                                :closable="false"
                                v-if="editableTabsValue == '2'"
                            >
                                <template v-slot:title>
                                    您查詢的月份無交易資料
                                </template>
                            </el-alert>

                            <div class="fundList-area" v-if="editableTabsValue != '5'">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)">
                                </fundList>
                            </div>

                            <template v-if="editableTabsValue == '1'">
                                <el-divider class="type2 margin-top-40 margin-bottom-40">
                                    <i class="el-icon-more"></i>
                                </el-divider>

                                <el-card>
                                    <h2 title="交易幣別總計" class="tit-type2">
                                        交易幣別總計
                                    </h2>
                                    <el-table
                                        :data="totalTransactionCurrency"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            prop="currency"
                                            fixed
                                            label="交易幣別"
                                            min-width="90"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="investmentAmount"
                                            label="投資金額"
                                            min-width="130"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="marketValue"
                                            label="參考投資市值"
                                            min-width="130"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="cumulativeCashAllocation"
                                            label="累積配現金額"
                                            min-width="120"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="referenceRateOfReturn"
                                            label="參考報酬率"
                                            min-width="110"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>

                                <el-card class="margin-top-30">
                                    <h2 title="原始投資本金報酬參考" class="tit-type2">
                                        原始投資本金報酬參考
                                        <el-popover
                                            placement="top-start"
                                            width="285"
                                            trigger="hover">
                                            <template v-slot="content">
                                                <div>
                                                    <div class="popoverContent">
                                                        <p>
                                                            <b>原始本金含息報酬率：</b>
                                                            <br/>[ (交易幣別市值 <small><i class="fas fa-times"></i></small> 匯率 <small><i class="fas fa-minus"></i></small> 原始本金) <small><i class="fas fa-plus"></i></small> (累積配現金額 <small><i class="fas fa-times"></i></small> 匯率) ] <br/><small><i class="fas fa-divide"></i></small> 原始本金
                                                        </p>
                                                    </div>
                                                </div>
                                            </template>
                                            <div class="calculationFormula" slot="reference">
                                                <i class="fas fa-exclamation-circle"></i> 計算公式
                                            </div>
                                        </el-popover>
                                    </h2>
                                    <el-table
                                        :data="table2"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            label="交易幣別市值"
                                            min-width="120"
                                            fixed
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.marketValue[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.marketValue[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            label="累積配現金額"
                                            min-width="120"
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.accumulatedAmount[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.accumulatedAmount[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="exchangeRate"
                                            label="匯率"
                                            min-width="90"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            label="原始本金"
                                            min-width="115"
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.originalPrincipal[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.originalPrincipal[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="rateOfReturn"
                                            label="原始本金含息報酬率"
                                            min-width="170"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>
                            </template>

                            <template v-if="editableTabsValue == '5'">
                                <el-alert
                                    class="borderStyle margin-top-0"
                                    type="info"
                                    show-icon
                                    :closable="false"
                                >
                                    <template v-slot:title>
                                        <b>台端所持有基金期間，本公司持續收受基金公司之經理費分成，有關基金經理費率<sup>(註)</sup>及其分成費率等資訊或其之變動情形如下表</b>
                                    </template>
                                    <slot name="description">
                                        台端亦可洽富蘭克林國民理財專線：0800 885 888，我們將竭誠為您服務。
                                    </slot>
                                </el-alert>

                                <el-card>
                                    <h2 title="基金經理費率(註)及其分成費率" class="tit-type2">
                                        基金經理費率<sup>(註)</sup>及其分成費率
                                    </h2>
                                    <el-table
                                        :data="cost"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            prop="fundCode"
                                            label="基金代碼"
                                            min-width="90"
                                            fixed
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            label="基金名稱"
                                            min-width="200"
                                        >
                                            <template slot-scope="scope">
                                                {{ scope.row.fundName[0] }}
                                                <b v-if="scope.row.fundName[1] != ''">({{ scope.row.fundName[1] }})</b>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="cost1"
                                            label="基金經理費(年率)"
                                            min-width="150"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="cost2"
                                            label="基金經理費分成(年率)"
                                            min-width="180"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>

                                <el-card class="margin-top-30">
                                    <h2 title="本次經理費用年率暨本公司分成年率有變動者" class="tit-type2">
                                        本次經理費用年率暨本公司分成年率有變動者
                                    </h2>
                                    <el-table
                                        :data="costChange"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            prop="fundCode"
                                            label="基金名稱"
                                            min-width="150"
                                            fixed
                                        >
                                            <template slot-scope="scope">
                                                {{ scope.row.fundName[0] }}
                                                <b v-if="scope.row.fundName[1] != ''">({{ scope.row.fundName[1] }})</b>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            label="基金經理費(年率)"
                                            min-width="200"
                                        >
                                            <template slot-scope="scope">
                                                原{{ scope.row.cost1[0] }}
                                                <br class="hidden-md-and-up"/>
                                                <b>
                                                    變動為 <i class="el-icon-d-arrow-right"></i>
                                                    {{ scope.row.cost1[1] }}
                                                </b>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            label="基金經理費分成(年率)"
                                            min-width="230"
                                        >
                                            <template slot-scope="scope">
                                                原{{ scope.row.cost2[0] }}
                                                <br class="hidden-md-and-up"/>
                                                <b>
                                                    變動為 <i class="el-icon-d-arrow-right"></i>
                                                    {{ scope.row.cost2[1] }}
                                                </b>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-card>
                            </template>

                        </el-tab-pane>
                    </el-tabs>
                    <infoCord
                        ref="fundCard"
                        :class="{
                            'isChangeType' : fund[fundListIndex].isChange,
                        }"
                    >
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundHeardr_changeTypeUse
                                v-if="fund[fundListIndex].isChange != undefined ? fund[fundListIndex].isChange : false"
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr_changeTypeUse>
                            <cardFundInfoItem
                                :fundData="fund"
                                :index="fundListIndex"
                                :setting="fundListSetting">
                            </cardFundInfoItem>
                        </template>
                        <template v-slot:btnArea>
                            <div class="infoCard-btnArea" v-show="false">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                        </template>
                    </infoCord>
                    <monthlyStatementNotice>
                        <template v-slot:otherNotice>
                            <template v-if="editableTabsValue == '1'">
                                <li>
                                    <b>投資金額：</b>若該基金曾轉換，以原基金之買回價格作為新基金之投資金額。部分贖回以先進先出法計算投資金額。
                                </li>
                                <li>
                                    <b>市值：</b>僅供參考，不代表實際贖回時可得金額。
                                </li>
                                <li>
                                    <b>累積配現金額：</b>投資以來已配發之現金利息，如該檔基金全數贖回或轉出，則累積配現金額將歸零。
                                </li>
                                <li>
                                    <b>未實現損益：</b>係以本月份對帳單最後營業日之單位數、淨值及匯率計算，且不包含已發放之現金配息，投資人實際損益需待贖回分配後確定。
                                </li>
                                <li>
                                    <b>報酬率：</b>包含採定期定額投資與單筆投資之結餘單位數，不考慮投資成本之時間價值。
                                </li>
                                <li>
                                    <b>交易幣別市值：</b>台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別且相同原始成本幣別的外幣投資部位加總計算。
                                </li>
                                <li>
                                    <b>原始本金：</b>若該基金曾幣別轉換，此為追溯至第一筆投資之交易幣別本金。
                                </li>
                                <li>
                                    台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '2'">
                                <li>
                                    <b>「交易金額」</b>不包含相關申購費用(如申購手續費、轉換手續費等)。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '3' || editableTabsValue == '4'">
                                <li>
                                    <b>配現金額：</b>未扣除匯款費用。
                                </li>
                                <li>
                                    <b>累積配現金額：</b>投資以來已配發之現金利息，如該檔基金全數贖回、則累積配現金額將歸零。
                                </li>
                                <li>
                                    當月配息資訊包含單筆、定期(不)定額交易，不包含智能理財專區之交易。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '5'">
                                <li>
                                    <b>註：</b>美國註冊基金之基金經理費率含經銷費(12b-1 Fee)，本公司經理費分成僅來自12b-1 Fee，惟454富蘭克林坦伯頓法人機構專用基金不收取經銷費(12b-1Fee)。
                                </li>
                                <li>
                                    投資人若欲詳知富蘭克林證券投顧總代理之所有境外基金經理費率，可至 <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.Franklin.com.tw" target="_blank" title="富蘭克林基金理財網">富蘭克林基金理財網</el-link> 或 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.fundclear.com.tw" target="_blank" title="境外基金資訊觀測站">境外基金資訊觀測站</el-link> 下載基金公開說明書及投資人須知查詢。
                                </li>
                            </template>
                        </template>
                    </monthlyStatementNotice>
                </div>`,
    components: {
        infoCord: infoCord,
        monthlyStatementNotice: monthlyStatementNotice,
    },
    methods: {
        postFundListIndex(val) {
            if (window.innerWidth > 1599 && (this.editableTabsValue == "2" || this.editableTabsValue == "3" || this.editableTabsValue == "4")) {
                return;
            } else {
                if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                    this.$refs["fundCard"].show = false;
                    // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
                } else {
                    this.fundListIndex = val;
                    this.$refs["fundCard"].show = true;
                    // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
                }
            }
        },
        handleClick(tab, event) {
            if (this.editableTabsValue == "5") {
                return;
            }else {
                this.fundListIndex = 0;
                this.fund = MonthlyStatement_offshoreFundFund[this.editableTabsValue - 1];
                this.fundListSetting = MonthlyStatement_offshoreFundFundListSetting[this.editableTabsValue - 1];
            }
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// 投信基金
const MonthlyStatement_SinoAmFund = [
    [
        {
            fundCode: "6805",
            fundName: "富蘭克林華美新世界股票基金",
            info: [
                {
                    tit: "含息報酬率",
                    text: "9.26%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "2,522,632",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "2,308,794",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "213,838",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "9.26%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
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
                    tit: "結餘單位數",
                    text: "84,228.1",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "29.95",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "6807",
            fundName: "新興趨勢傘型基金之天然資源組合基金",
            info: [
                {
                    tit: "含息報酬率",
                    text: "-2.73%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "1,034,041",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "1,063,087",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-29,046",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-2.73%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
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
                    tit: "結餘單位數",
                    text: "137,604.4",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "7.58",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "6802",
            fundName: "富蘭克林全球債券組合基金累積型",
            info: [
                {
                    tit: "含息報酬率",
                    text: "-11.51%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "567,312",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "641,087",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "-73,775",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "-11.51%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "結餘單位數",
                    text: "74,843.3",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "7.58",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            fundCode: "6830",
            fundName: "中國傘型之中國A股基金人民幣",
            info: [
                {
                    tit: "含息報酬率",
                    text: "0.18%",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "市值",
                    text: "50091.87",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "投資金額",
                    text: "50,000.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "未實現損益",
                    text: "91.87",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "不含息報酬率",
                    text: "0.18%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "結餘單位數",
                    text: "4,574.6",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值",
                    text: "10.95",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "人民幣",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false, // to前端：請協助改抓你們寫的window.innerWidth 感恩感恩
            transactionMethod: "單筆",
            dealDate: "2020/08/15",
            fundCode: "6807",
            fundName: "新興趨勢傘型基金之天然資源組合基金",
            info: [
                {
                    tit: "交易金額",
                    text: "1,000,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "129,750.5",
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
                    tit: "淨值",
                    text: "7.7071",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "短線費用",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "定期定額",
            dealDate: "2020/08/15",
            fundCode: "6802",
            fundName: "富蘭克林全球債券組合基金累積型",
            info: [
                {
                    tit: "交易金額",
                    text: "5,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "397.6",
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
                    tit: "淨值",
                    text: "12.5739",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "短線費用",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "定期不定額",
            dealDate: "2020/08/15",
            fundCode: "6875",
            fundName: "全球醫療保健基金",
            info: [
                {
                    tit: "交易金額",
                    text: "3,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "294.4",
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
                    tit: "淨值",
                    text: "10.19",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "短線費用",
                    text: "-",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
        {
            noNext: window.innerWidth > 1599 ? true : false,
            transactionMethod: "贖回",
            dealDate: "2020/08/22",
            fundCode: "6805",
            fundName: "富蘭克林華美新世界股票基金",
            info: [
                {
                    tit: "交易金額",
                    text: "1,000,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "單位數",
                    text: "1,436.2",
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
                    tit: "淨值",
                    text: "22.53",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "淨值日期",
                    text: "2020/08/22",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "短線費用",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
    [
        {
            noNext: window.innerWidth > 1599 ? true : false, // to前端：請協助改抓你們寫的window.innerWidth 感恩感恩
            dealDateName: "發放日：", // 沒有資料時預設顯示交易日期
            dealDate: "2020/08/14",
            fundCode: "6804",
            fundName: "富蘭克林全球債券組合基金分配型",
            info: [
                {
                    tit: "本次配現金額",
                    text: "1,096",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "累積配現金額",
                    text: "1,096",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "庫存單位數",
                    text: "43,840.0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息基準日",
                    text: "2020/07/31",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "除息日",
                    text: "2020/08/01",
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
                    tit: "每單位配現金額",
                    text: "0.025",
                    focusText: false,
                    remark: "",
                },
            ],
            hasPopover: false,
        },
    ],
];

const MonthlyStatement_SinoAmFundListSetting = [
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "8", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "7", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
    },
];

const MonthlyStatement_SinoAm = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "當月帳戶結餘",
                    name: "1",
                },
                {
                    title: "當月交易明細",
                    name: "2",
                },
                {
                    title: "當月配現金 / 配現分配明細",
                    name: "3",
                },
                {
                    title: "其他事項",
                    name: "4",
                },
            ],
            tabIndex: 4,

            fund: MonthlyStatement_SinoAmFund[0],
            fundListSetting: MonthlyStatement_SinoAmFundListSetting[0],
            fundListIndex: 0,

            totalTransactionCurrency: [
                {
                    currency: "美元",
                    investmentAmount: "1,109,120.00",
                    marketValue: "1,108,910.39",
                    cumulativeCashAllocation: "0.00",
                    unrealizedGainsAndLosses: "-209.61",
                    referenceRateOfReturn: "-0.02%",
                },
                {
                    currency: "新台幣",
                    investmentAmount: "28,965,000",
                    marketValue: "28,770,095",
                    cumulativeCashAllocation: "0",
                    unrealizedGainsAndLosses: "-194,905",
                    referenceRateOfReturn: "-0.67%",
                },
                {
                    currency: "	日幣",
                    investmentAmount: "60,000",
                    marketValue: "59,088",
                    cumulativeCashAllocation: "0",
                    unrealizedGainsAndLosses: "-912",
                    referenceRateOfReturn: "-1.52%",
                },
                {
                    currency: "歐元",
                    investmentAmount: "60,000.00",
                    marketValue: "58,266.97",
                    cumulativeCashAllocation: "0.00",
                    unrealizedGainsAndLosses: "-1,733.03",
                    referenceRateOfReturn: "-2.89%",
                },
            ],

            table2: [
                {
                    marketValue: ["新台幣", "4,012,968"],
                    accumulatedAmount: ["新台幣", "103,226"],
                    originalPrincipal: ["新台幣", "972,000"],
                    rateOfReturn: "0.51%",
                },
                {
                    marketValue: ["人民幣", "50,000.00"],
                    accumulatedAmount: ["人民幣", "0"],
                    originalPrincipal: ["歐元", "2,135.25"],
                    rateOfReturn: "-19.37%",
                },
            ],

            cost: [
                {
                    fundCode: '6801',
                    fundName: ['富蘭克林華美第一富基金', ''],
                    cost1: '1.6000%',
                    cost2: '不多於1.0000%',
                },
                {
                    fundCode: '6802',
                    fundName: ['富蘭克林全球債券組合基金累積型', '本基金之配息來源可能為本金'],
                    cost1: '1.0000%',
                    cost2: '不多於1.0000%',
                },
            ],
        };
    },
    template: ` <div>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                        @tab-click="handleClick"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <el-alert
                                class="borderStyle margin-top-0"
                                type="info"
                                show-icon
                                :closable="false"
                                v-if="editableTabsValue == '1'"
                            >
                                <template v-slot:title>
                                    以當月最後營業日淨值與參考匯率進行計算
                                </template>
                            </el-alert>
                            <el-alert
                                class="borderStyle margin-top-0"
                                type="info"
                                show-icon
                                :closable="false"
                                v-if="editableTabsValue == '3'"
                            >
                                <template v-slot:title>
                                    除息日前一營業日為基準日，依基準日所持有之單位數參與配息
                                </template>
                            </el-alert>
                            <div class="text-right" v-if="editableTabsValue == '3'">
                                <el-popover
                                    placement="top-start"
                                    width="285"
                                    trigger="hover">
                                    <template v-slot="content">
                                        <div>
                                            <div class="popoverContent">
                                                <p>
                                                    <b>本次配現金額：</b>
                                                    <br/>庫存單位數 <small><i class="fas fa-times"></i></small> 每單位配息金額
                                                </p>
                                            </div>
                                        </div>
                                    </template>
                                    <div class="calculationFormula" slot="reference">
                                        <i class="fas fa-exclamation-circle"></i> 計算公式
                                    </div>
                                </el-popover>
                            </div>

                            <template v-if="editableTabsValue == '1'">
                                <h2 title="現行庫存損益總覽參考" class="tit-type2 margin-top-30">
                                    現行庫存損益總覽參考
                                    <el-popover
                                        placement="top-start"
                                        width="285"
                                        trigger="hover">
                                        <template v-slot="content">
                                            <div v-if="editableTabsValue == '1'">
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>市值：</b>
                                                        <br/>淨值 <small><i class="fas fa-times"></i></small> 結餘單位數 <small><i class="fas fa-times"></i></small> 匯率
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>未實現損益：</b>
                                                        <br/>市值 <small><i class="fas fa-minus"></i></small> 投資金額
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>含息報酬率：</b>
                                                        <br/>(未實現損益 <small><i class="fas fa-plus"></i></small> 累積配現金額) <small><i class="fas fa-divide"></i></small> 投資金額
                                                    </p>
                                                </div>
                                                <div class="popoverContent">
                                                    <p>
                                                        <b>不含息報酬率：</b>
                                                        <br/>未實現損益 <small><i class="fas fa-divide"></i></small> 投資金額
                                                    </p>
                                                </div>
                                            </div>
                                        </template>
                                        <div class="calculationFormula" slot="reference">
                                            <i class="fas fa-exclamation-circle"></i> 計算公式
                                        </div>
                                    </el-popover>
                                </h2>
                            </template>

                            <el-alert
                                class="text-center"
                                type="info"
                                :closable="false"
                                v-if="editableTabsValue == '2'"
                            >
                                <template v-slot:title>
                                    您查詢的月份無交易資料
                                </template>
                            </el-alert>

                            <div class="fundList-area" v-if="editableTabsValue != '4'">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)">
                                </fundList>
                            </div>

                            <template v-if="editableTabsValue == '1'">
                                <el-divider class="type2 margin-top-40 margin-bottom-40">
                                    <i class="el-icon-more"></i>
                                </el-divider>

                                <el-card>
                                    <h2 title="交易幣別總計" class="tit-type2">
                                        交易幣別總計
                                    </h2>
                                    <el-table
                                        :data="totalTransactionCurrency"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            prop="currency"
                                            fixed
                                            label="交易幣別"
                                            min-width="90"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="investmentAmount"
                                            label="投資金額"
                                            min-width="130"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="marketValue"
                                            label="參考投資市值"
                                            min-width="130"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="cumulativeCashAllocation"
                                            label="累積配現金額"
                                            min-width="120"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="referenceRateOfReturn"
                                            label="參考報酬率"
                                            min-width="110"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>

                                <el-card class="margin-top-30">
                                    <h2 title="原始投資本金報酬參考" class="tit-type2">
                                        原始投資本金報酬參考
                                        <el-popover
                                            placement="top-start"
                                            width="285"
                                            trigger="hover">
                                            <template v-slot="content">
                                                <div>
                                                    <div class="popoverContent">
                                                        <p>
                                                            <b>原始本金含息報酬率：</b>
                                                            <br/>[ (交易幣別市值 <small><i class="fas fa-minus"></i></small> 原始本金) <br/><small><i class="fas fa-plus"></i></small> 累積配現金額 ] <br/><small><i class="fas fa-divide"></i></small> 原始本金
                                                        </p>
                                                    </div>
                                                </div>
                                            </template>
                                            <div class="calculationFormula" slot="reference">
                                                <i class="fas fa-exclamation-circle"></i> 計算公式
                                            </div>
                                        </el-popover>
                                    </h2>
                                    <el-table
                                        :data="table2"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            label="交易幣別市值"
                                            min-width="120"
                                            fixed
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.marketValue[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.marketValue[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            label="累積配現金額"
                                            min-width="120"
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.accumulatedAmount[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.accumulatedAmount[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            label="原始本金"
                                            min-width="115"
                                        >
                                            <template slot-scope="scope">
                                                <el-row :gutter="10">
                                                    <el-col :md="12">
                                                        {{ scope.row.originalPrincipal[0] }}
                                                    </el-col>
                                                    <el-col :md="12" class="text-right text-left-md">
                                                        {{ scope.row.originalPrincipal[1] }}
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="rateOfReturn"
                                            label="原始本金含息報酬率"
                                            min-width="170"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>
                            </template>

                            <template v-if="editableTabsValue == '4'">
                                <el-alert
                                    class="borderStyle margin-top-0"
                                    type="info"
                                    show-icon
                                    :closable="false"
                                >
                                    <template v-slot:title>
                                        <b>台端所持有基金期間，本公司持續收受基金公司之經理費分成，有關基金經理費率<sup>(註)</sup>及其分成費率等資訊或其之變動情形如下表</b>
                                    </template>
                                    <slot name="description">
                                        台端亦可洽富蘭克林國民理財專線：0800 885 888，我們將竭誠為您服務。
                                    </slot>
                                </el-alert>

                                <el-card>
                                    <h2 title="基金經理費率(註)及其分成費率" class="tit-type2">
                                        基金經理費率<sup>(註)</sup>及其分成費率
                                    </h2>
                                    <el-table
                                        :data="cost"
                                        border
                                        stripe
                                        style="width: 100%"
                                        size="small"
                                        class="margin-top-15"
                                    >
                                        <el-table-column
                                            prop="fundCode"
                                            label="基金代碼"
                                            min-width="90"
                                            fixed
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            label="基金名稱"
                                            min-width="200"
                                        >
                                            <template slot-scope="scope">
                                                {{ scope.row.fundName[0] }}
                                                <b v-if="scope.row.fundName[1] != ''">({{ scope.row.fundName[1] }})</b>
                                            </template>
                                        </el-table-column>
                                        <el-table-column
                                            prop="cost1"
                                            label="基金經理費(年率)"
                                            min-width="150"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="cost2"
                                            label="基金經理費分成(年率)"
                                            min-width="180"
                                        >
                                        </el-table-column>
                                    </el-table>
                                </el-card>
                            </template>

                        </el-tab-pane>
                    </el-tabs>
                    <infoCord
                        ref="fundCard"
                        :class="{
                            'isChangeType' : fund[fundListIndex].isChange,
                        }"
                    >
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundHeardr_changeTypeUse
                                v-if="fund[fundListIndex].isChange != undefined ? fund[fundListIndex].isChange : false"
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr_changeTypeUse>
                            <cardFundInfoItem
                                :fundData="fund"
                                :index="fundListIndex"
                                :setting="fundListSetting">
                            </cardFundInfoItem>
                        </template>
                        <template v-slot:btnArea>
                            <div class="infoCard-btnArea" v-show="false">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                        </template>
                    </infoCord>
                    <monthlyStatementNotice>
                        <template v-slot:otherNotice>
                            <template v-if="editableTabsValue == '1'">
                                <li>
                                    <b>投資金額：</b>若該基金曾轉換，以原基金之買回價格作為新基金之投資金額。部分贖回以先進先出法計算投資金額。
                                </li>
                                <li>
                                    <b>市值：</b>僅供參考，不代表實際贖回時可得金額。
                                </li>
                                <li>
                                    <b>累積配現金額：</b>投資以來已配發之現金利息，如該檔基金全數贖回或轉出，則累積配現金額將歸零。
                                </li>
                                <li>
                                    <b>未實現損益：</b>係以本月份對帳單最後營業日之單位數、淨值及匯率計算，且不包含已發放之現金配息，投資人實際損益需待贖回分配後確定。
                                </li>
                                <li>
                                    <b>報酬率：</b>包含採定期定額投資與單筆投資之結餘單位數，不考慮投資成本之時間價值。
                                </li>
                                <li>
                                    <b>交易幣別市值：</b>台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別且相同原始成本幣別的外幣投資部位加總計算。
                                </li>
                                <li>
                                    <b>原始本金：</b>若該基金曾幣別轉換，此為追溯至第一筆投資之交易幣別本金。
                                </li>
                                <li>
                                    台幣投資結餘係將所有台幣投資部位加總計算，外幣投資結餘則是將相同投資幣別的外幣投資部位加總計算。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '2'">
                                <li>
                                    <b>「交易金額」</b>不包含相關申購費用(如申購手續費、轉換手續費等)。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '3'">
                                <li>
                                    <b>配現金額：</b>未扣除匯款費用。
                                </li>
                                <li>
                                    <b>累積配現金額：</b>投資以來已配發之現金利息，如該檔基金全數贖回、則累積配現金額將歸零。
                                </li>
                                <li>
                                    當月配息資訊包含單筆、定期(不)定額交易，不包含智能理財專區之交易。
                                </li>
                            </template>
                            <template v-if="editableTabsValue == '4'">
                                <li>
                                    <b>註：</b>美國註冊基金之基金經理費率含經銷費(12b-1 Fee)，本公司經理費分成僅來自12b-1 Fee，惟454富蘭克林坦伯頓法人機構專用基金不收取經銷費(12b-1Fee)。
                                </li>
                                <li>
                                    投資人若欲詳知富蘭克林證券投顧總代理之所有境外基金經理費率，可至 <el-link type="primary" icon="fas fa-external-link-alt" href="https://www.Franklin.com.tw" target="_blank" title="富蘭克林基金理財網">富蘭克林基金理財網</el-link> 或 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.fundclear.com.tw" target="_blank" title="境外基金資訊觀測站">境外基金資訊觀測站</el-link> 下載基金公開說明書及投資人須知查詢。
                                </li>
                            </template>
                        </template>
                    </monthlyStatementNotice>
                </div>`,
    components: {
        infoCord: infoCord,
        monthlyStatementNotice: monthlyStatementNotice,
    },
    methods: {
        postFundListIndex(val) {
            if (window.innerWidth > 1599 && (this.editableTabsValue == "2" || this.editableTabsValue == "3")) {
                return;
            } else {
                if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                    this.$refs["fundCard"].show = false;
                    // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
                } else {
                    this.fundListIndex = val;
                    this.$refs["fundCard"].show = true;
                    // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
                }
            }
        },
        handleClick(tab, event) {
            if (this.editableTabsValue == "4") {
                return;
            }else {
                this.fundListIndex = 0;
                this.fund = MonthlyStatement_SinoAmFund[this.editableTabsValue - 1];
                this.fundListSetting = MonthlyStatement_SinoAmFundListSetting[this.editableTabsValue - 1];
            }
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// ========= 已實現損益查詢 ==============================================================================================================================
const RealizedGainsAndLossesInquiry = {
    data() {
        return {
            page: {
                stit: `帳務管理`,
                tit: `已實現損益查詢`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <div class="clearfix fontSizeZero">
                        <div class="page-changeDisplayMethod">
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/RealizedGainsAndLossesInquiry/byDate'"
                                :type="$route.path === '/RealizedGainsAndLossesInquiry/byDate' ? 'primary' : 'secondary'"
                                @click="$router.push('/RealizedGainsAndLossesInquiry/byDate')">
                                依贖回紀錄顯示
                            </el-button>
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/RealizedGainsAndLossesInquiry/byOriginalPrice'"
                                :type="$route.path === '/RealizedGainsAndLossesInquiry/byOriginalPrice' ? 'primary' : 'secondary'"
                                @click="$router.push('/RealizedGainsAndLossesInquiry/byOriginalPrice')">
                                依原始本金顯示
                            </el-button>
                        </div>
                        <rangeDate></rangeDate>
                    </div>
                    <fundQuickSearch class="margin-top-15 margin-bottom-15"></fundQuickSearch>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
        rangeDate: rangeDate,
    },
};

// 依贖回紀錄顯示
const RealizedGainsAndLossesInquiry_byDate = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    // dealDateName: "贖回日期：",
                    dealDate: "2020/03/22",
                    fundCode: "4000",
                    fundName: "伊斯蘭債券基金—美元",
                    info: [
                        {
                            tit: "入帳金額",
                            text: "234,952",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "234,751",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "201",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "0.09%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "598,196",
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
                            tit: "不含息報酬率",
                            text: "3.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "34",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/02/23)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "配息方式",
                            text: "再現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "短線費用",
                            text: "100,000,000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "原申購方式：定期定額",
                            dealDate: "2020/08/20",
                            info: [
                                {
                                    tit: "入帳金額",
                                    text: "149,398",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "150,000",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "已實現損益",
                                    text: "-602",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-0.4%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "380,372",
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
                                    tit: "不含息報酬率",
                                    text: "17.75%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回單位數",
                                    text: "12.235",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "贖回匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "配息方式",
                                    text: "再投資 / 配權",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "0000000000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "短線費用",
                                    text: "100,000,000",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "原申購方式：單筆申購",
                            dealDate: "2020/02/16",
                            info: [
                                {
                                    tit: "入帳金額",
                                    text: "9,972",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "10,000",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "已實現損益",
                                    text: "-28",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-0.28%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "25.39",
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
                                    tit: "不含息報酬率",
                                    text: "17.75%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回單位數",
                                    text: "12.235",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "贖回匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "配息方式",
                                    text: "再投資 / 配權",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "0000000000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "短線費用",
                                    text: "100,000,000",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "原申購方式：轉申購",
                            dealDate: "2020/02/16",
                            info: [
                                {
                                    tit: "入帳金額",
                                    text: "11,775",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "投資金額",
                                    text: "10,000",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "已實現損益",
                                    text: "1,775",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "17.87%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "配息金額",
                                    text: "12",
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
                                    tit: "不含息報酬率",
                                    text: "17.75%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回單位數",
                                    text: "12.235",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "贖回淨值",
                                    text: "32.10",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "贖回匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "(2020/03/22)",
                                },
                                {
                                    tit: "配息方式",
                                    text: "再投資 / 配權",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "0000000000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "短線費用",
                                    text: "100,000,000",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                    ],
                    // warning: ``,
                },
                {
                    // dealDateName: "贖回日期：",
                    dealDate: "2020/09/23",
                    fundCode: "0810",
                    fundName: "全球債券基金—美元月配息",
                    info: [
                        {
                            tit: "入帳金額",
                            text: "32,723",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "31,620",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "1,103",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "3.80%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "100",
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
                            tit: "不含息報酬率",
                            text: "3.49%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "34",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "短線費用",
                            text: "100,000,000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                },
                {
                    // dealDateName: "贖回日期：",
                    dealDate: "2020/06/25",
                    fundCode: "0358",
                    fundName: "東歐基金-美元",
                    info: [
                        {
                            tit: "入帳金額",
                            text: "32,215",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "35,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "-2,785",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "-7.96%",
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
                            tit: "交易幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "不含息報酬率",
                            text: "-7.96%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "65",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "16.53",
                            focusText: false,
                            remark: "(2020/06/23)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/06/23)",
                        },
                        {
                            tit: "配息方式",
                            text: "再投資 / 配權",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
                {
                    // dealDateName: "贖回日期：",
                    dealDate: "2020/03/22",
                    fundCode: "0810",
                    fundName: "全球債券基金—美元月配息",
                    info: [
                        {
                            tit: "入帳金額",
                            text: "11,775",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "10,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "1,775",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "含息報酬率",
                            text: "17.87%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "12",
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
                            tit: "不含息報酬率",
                            text: "17.75%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "12.235",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "配息方式",
                            text: "再投資 / 配權",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
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
                    minWidth: this.$root.$data.windowWidth < 768 ? "1190px" : "860px",
                    pcShowQty: {
                        base: "8",
                        xxl: "7",
                        xl: "7",
                        lg: "7",
                        md: "5",
                        sm: "10",
                        xs: "10",
                    },
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 0,
        };
    },
};

// 依原始本金顯示
const RealizedGainsAndLossesInquiry_byOriginalPrice = {
    mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    transactionMethod: "單筆申購",
                    dealDateName: "贖回日期：",
                    dealDate: "2020/09/23",
                    fundCode: "0810",
                    fundName: "全球債券基金—美元月配息",
                    info: [
                        {
                            tit: "原始本金",
                            text: "30,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "2,723",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原始本金參考報酬率(含息)",
                            text: "9.41%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "入帳金額",
                            text: "32,723",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "31,620",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積配息",
                            text: "100",
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
                            tit: "不含息報酬率",
                            text: "9.08%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "34",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/09/23)",
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "短線費用",
                            text: "100,000,000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    detail: [
                        {
                            transactionMethod: "轉入",
                            dealDate: "2020/08/20",
                            fundCode: "0810",
                            fundName: "全球債券基金—美元月配息",
                            info: [
                                {
                                    tit: "原投資金額",
                                    text: "-",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "已實現損益",
                                    text: "-",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "-",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易金額",
                                    text: "31,620",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易單位數",
                                    text: "35",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易淨值",
                                    text: "30.22",
                                    focusText: false,
                                    remark: "(2020/08/20)",
                                },
                                {
                                    tit: "交易幣別",
                                    text: "新台幣",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "2020/09/23",
                                },
                                {
                                    tit: "配息方式",
                                    text: "配現金 / 配現",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積配息",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "0000000000",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "短線費用",
                                    text: "100,000,000",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                        {
                            transactionMethod: "轉出",
                            dealDate: "2020/02/16",
                            fundCode: "0419",
                            fundName: "天然資源基金-美元",
                            info: [
                                {
                                    tit: "原投資金額",
                                    text: "30,000",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "已實現損益",
                                    text: "1,620",
                                    focusText: true,
                                    remark: "",
                                },
                                {
                                    tit: "含息報酬率",
                                    text: "5.40%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易金額",
                                    text: "31,620",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易單位數",
                                    text: "70",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易淨值",
                                    text: "15.26",
                                    focusText: false,
                                    remark: "(2020/02/16)",
                                },
                                {
                                    tit: "交易幣別",
                                    text: "新台幣",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "5.40%",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "2020/09/23",
                                },
                                {
                                    tit: "配息方式",
                                    text: "再投資 / 配權",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "累積配息",
                                    text: "0",
                                    focusText: false,
                                    remark: "",
                                },
                                {
                                    tit: "交易書號",
                                    text: "0000000000",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                        },
                    ],
                    // warning: ``,
                },
                {
                    transactionMethod: "定期定額",
                    dealDateName: "贖回日期：",
                    dealDate: "2020/6/25",
                    fundCode: "0358",
                    fundName: "東歐基金-美元",
                    info: [
                        {
                            tit: "原始本金",
                            text: "35,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "-2,785",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原始本金參考報酬率(含息)",
                            text: "-7.96%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "入帳金額",
                            text: "32,215",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "35,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積配息",
                            text: "0",
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
                            tit: "不含息報酬率",
                            text: "-7.96%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "65",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "16.53",
                            focusText: false,
                            remark: "(2020/06/23)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/06/23)",
                        },
                        {
                            tit: "配息方式",
                            text: "再投資 / 配權",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
                {
                    transactionMethod: "單筆申購",
                    dealDateName: "贖回日期：",
                    dealDate: "2020/09/20",
                    fundCode: "0810",
                    fundName: "全球債券基金—美元月配息",
                    info: [
                        {
                            tit: "原始本金",
                            text: "10,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "已實現損益",
                            text: "1,775",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原始本金參考報酬率(含息)",
                            text: "17.87%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "入帳金額",
                            text: "11,775",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "投資金額",
                            text: "10,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "累積配息",
                            text: "12",
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
                            tit: "不含息報酬率",
                            text: "17.75%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回單位數",
                            text: "12.235",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "贖回淨值",
                            text: "32.10",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "贖回匯率",
                            text: "29.9825",
                            focusText: false,
                            remark: "(2020/03/22)",
                        },
                        {
                            tit: "配息方式",
                            text: "再投資 / 配權",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易書號",
                            text: "0000000000",
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: false,
                    // warning: ``,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "更多資訊",
                minWidth: window.innerWidth < 360 ? "0" : "420px",
                pcShowQty: {
                    base: "10",
                    xxl: "8",
                    xl: "7",
                    lg: "7",
                    md: "5",
                    sm: "3",
                    xs: "2",
                },
                toggleDetailText: {
                    before: "展開交易歷程",
                    after: "收起交易歷程",
                },
                detail: {
                    minWidth: "860px",
                    pcShowQty: {
                        base: "8",
                        xxl: "7",
                        xl: "7",
                        lg: "7",
                        md: "5",
                        sm: "7",
                        xs: "7",
                    },
                },
            },
            fundListIndex: 0,

            infoCardBtnType: 0,
        };
    },
};
