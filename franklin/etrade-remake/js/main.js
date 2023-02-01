// @prepros-prepend _component.js

// 首頁
// @prepros-prepend _page_index.js

// 我的帳戶
// @prepros-prepend _page_account.js

// 我的庫存
// @prepros-prepend _page_myInventory.js

// 基金交易
// @prepros-prepend _page_trade.js

// 帳務管理
// @prepros-prepend _page_accounting.js

// errorPage
// @prepros-prepend _page_errorPage.js

// ========= const template範例 ==============================================================================================================================
const Foo = {
    data() {
        return {
            testtttt: "foo",
        };
    },
    template: '<div @click="testCLick">{{testtttt}}</div>',
    methods: {
        testCLick() {
            this.testtttt = "1231231";
        },
    },
};
const Bar = { template: "<div>bar</div>" };

// ========= router ==============================================================================================================================
const router = new VueRouter({
    // mode: 'history',
    routes: [
        // { path: '/foo', component: Foo },
        // { path: '/bar', component: Bar }
        {
            path: "/",
            component: Index,
            meta: {
                title: "富蘭克林‧國民ｅ帳戶",
            },
        },
        // 會員中心 --------------------------------------------
        {
            // 帳戶狀態
            path: "/Status",
            component: Status,
            meta: {
                title: "帳戶狀態",
            },
        },
        {
            // 個人基本資料
            path: "/PersonalData",
            component: PersonalData,
            meta: {
                title: "個人基本資料",
            },
        },
        {
            // 受益人資料變更說明
            path: "/PersonalDataModify",
            component: PersonalDataModify,
            meta: {
                title: "受益人資料變更說明",
            },
        },
        {
            // 線上簽署專區 (從【個人基本資料】-【投信基金】按鍵連過來)
            path: "/Sign",
            component: Sign,
            redirect: "/Sign/List",
            children: [
                {
                    path: "List",
                    component: Sign_List,
                    meta: {
                        title: "線上簽署專區",
                    },
                },
                {
                    path: "IdentityVerification",
                    component: Sign_IdentityVerification,
                    meta: {
                        title: "身分驗證",
                    },
                },
                {
                    path: "DomesticTransactionAuthority",
                    component: Sign_DomesticTransactionAuthority,
                    meta: {
                        title: "新增境內基金交易權限",
                    },
                },
                {
                    path: "Complete",
                    component: Sign_Complete,
                    meta: {
                        title: "新增境內基金交易權限",
                    },
                },
            ],
        },
        {
            // 申請申購投信基金-未成年版 (從【個人基本資料】-【投信基金】按鍵連過來)
            path: "/FtftPrintApply",
            component: FtftPrintApply,
            meta: {
                title: "申請申購投信基金",
            },
        },
        {
            // 申購美國註冊基金申請及同意書 (從【個人基本資料】-【美國註冊基金】按鍵連過來)
            path: "/USFundApply",
            component: USFundApply,
            meta: {
                title: "申購美國註冊基金申請及同意書",
            },
        },
        {
            // 申購美國註冊基金申請及同意書-已成年版結果頁
            path: "/USFundApply_Adult",
            component: USFundApply_Adult,
            meta: {
                title: "申購美國註冊基金申請及同意書",
            },
        },
        {
            // 變更登入密碼
            path: "/ChangeLoginPwd",
            component: ChangeLoginPwd,
            meta: {
                title: "變更登入密碼",
            },
        },
        {
            // 變更交易密碼
            path: "/ChangeTxnPwd",
            component: ChangeTxnPwd,
            meta: {
                title: "變更交易密碼",
            },
        },
        {
            // 忘記交易密碼
            path: "/ForgetPassword",
            component: ForgetPassword,
            redirect: "/ForgetPassword/GetTxnPwdHint",
            children: [
                {
                    path: "GetTxnPwdHint",
                    component: GetTxnPwdHint,
                    meta: {
                        title: "忘記交易密碼-查詢密碼提示",
                    },
                },
                {
                    path: "ResetTxnPwd",
                    component: ResetTxnPwd,
                    meta: {
                        title: "忘記交易密碼-補發交易密碼",
                    },
                },
            ],
        },
        {
            // 首次交易密碼變更暨開啟交易權限
            path: "/TxnActivate",
            component: TxnActivate,
            meta: {
                title: "首次交易密碼變更暨開啟交易權限",
            },
        },
        {
            // 風險屬性評估
            path: "/Kyc",
            component: Kyc,
            meta: {
                title: "風險屬性評估",
            },
        },
        {
            // KYC變更警示詢問
            path: "/KYCChangeWarning1",
            component: KYCChangeWarning1,
            meta: {
                title: "風險屬性測試結果",
            },
        },
        {
            // KYC變更警示詢問
            path: "/KYCChangeWarning2",
            component: KYCChangeWarning2,
            meta: {
                title: "風險屬性測試結果",
            },
        },
        {
            // 優惠券管理
            path: "/Coupon",
            component: Coupon,
            meta: {
                title: "優惠券管理",
            },
        },
        {
            // 紅利點數查詢
            path: "/Bonus",
            component: Bonus,
            meta: {
                title: "紅利點數查詢",
            },
        },
        {
            // 通知信寄發管理
            path: "/MailGroup",
            component: MailGroup,
            meta: {
                title: "通知信寄發管理",
            },
        },
        {
            // CRS申請流程
            path: "/CRS",
            component: CRS,
            meta: {
                title: "申購CRS自我證明表",
            },
        },

        // 沒有入口
        {
            // 查詢密碼提示
            path: "/GetLoginPwdHint",
            component: GetLoginPwdHint,
            meta: {
                title: "查詢密碼提示",
            },
        },
        {
            // 忘記登入密碼
            path: "/ResetLoginPwd",
            component: ResetLoginPwd,
            meta: {
                title: "補發登入密碼",
            },
        },
        {
            // 國民e帳戶開戶相關同意條款
            path: "/ECAgreement",
            component: ECAgreement,
            meta: {
                title: "國民e帳戶開戶相關同意條款",
            },
        },

        // 我的庫存 --------------------------------------------
        {
            // 我的庫存
            path: "/MyInventory",
            component: MyInventory,
            redirect: "/MyInventory/list",
            children: [
                {
                    path: "list",
                    component: MyInventory_List,
                    meta: {
                        title: "我的庫存",
                    },
                },
            ],
        },

        // 基金交易 --------------------------------------------
        {
            // 單筆申購
            path: "/LumpSum",
            component: LumpSum,
            redirect: "/LumpSum/List",
            children: [
                {
                    path: "List",
                    component: LumpSum_list,
                    meta: {
                        title: "單筆申購",
                    },
                },
                {
                    path: "Subscribe",
                    component: LumpSum_subscribe,
                    redirect: "/LumpSum/Subscribe/Step1",
                    meta: {
                        title: "單筆申購",
                    },
                    children: [
                        {
                            path: "Step1",
                            component: LumpSum_subscribe_step1,
                            meta: {
                                title: "單筆申購 - 填寫申購明細",
                            },
                        },
                        {
                            path: "Step2",
                            component: LumpSum_subscribe_step2,
                            meta: {
                                title: "單筆申購 - 確認事項",
                            },
                        },
                        {
                            path: "Step3",
                            component: LumpSum_subscribe_step3,
                            meta: {
                                title: "單筆申購 - 完成委託",
                            },
                        },
                    ],
                },
            ],
        },
        // {
        //     // 轉換 / 贖回
        //     path: "/RedemptionAndChange",
        //     component: RedemptionAndChange,
        //     redirect: "/RedemptionAndChange/list",
        //     children: [
        //         {
        //             path: "list",
        //             component: RedemptionAndChange_list,
        //             meta: {
        //                 title: "轉換 / 贖回",
        //             },
        //         },
        //     ],
        // },
        {
            // 贖回流程
            path: "/Redemption",
            component: Redemption,
            redirect: "/Redemption/Step1",
            children: [
                {
                    path: "Step1",
                    component: Redemption_step1,
                    meta: {
                        title: "贖回 - 填寫贖回明細",
                    },
                },
                {
                    path: "Step2",
                    component: Redemption_step2,
                    meta: {
                        title: "贖回 - 確認事項",
                    },
                },
                {
                    path: "Step3",
                    component: Redemption_step3,
                    meta: {
                        title: "贖回 - 完成委託",
                    },
                },
            ],
        },
        {
            // 轉換流程
            path: "/Change",
            component: Change,
            redirect: "/Change/Step1",
            children: [
                {
                    path: "Step1",
                    component: Change_step1,
                    meta: {
                        title: "轉換 - 填寫轉換明細",
                    },
                },
                {
                    path: "Step2",
                    component: Change_step2,
                    meta: {
                        title: "轉換 - 確認事項",
                    },
                },
                {
                    path: "Step3",
                    component: Change_step3,
                    meta: {
                        title: "轉換 - 完成委託",
                    },
                },
            ],
        },

        // 定期(不)定額 --------------------------------------------
        {
            // 定期(不)定額申購
            path: "/Sip",
            component: Sip,
            redirect: "/Sip/List",
            children: [
                {
                    path: "List",
                    component: Sip_list,
                    meta: {
                        title: "定期(不)定額申購",
                    },
                },
                {
                    path: "Subscribe",
                    component: Sip_subscribe,
                    redirect: "/Sip/Subscribe/Step1",
                    meta: {
                        title: "定期(不)定額申購",
                    },
                    children: [
                        {
                            path: "Step1",
                            component: Sip_subscribe_step1,
                            meta: {
                                title: "定期(不)定額申購 - 填寫申購明細",
                            },
                        },
                        {
                            path: "Step2",
                            component: Sip_subscribe_step2,
                            meta: {
                                title: "定期(不)定額申購 - 確認事項",
                            },
                        },
                        {
                            path: "Step3",
                            component: Sip_subscribe_step3,
                            meta: {
                                title: "定期(不)定額申購 - 完成委託",
                            },
                        },
                    ],
                },
            ],
        },
        {
            // 定期(不)定額變更
            path: "/SipChange",
            component: SipChange,
            redirect: "/SipChange/List",
            children: [
                {
                    path: "List",
                    component: SipChange_list,
                    meta: {
                        title: "定期(不)定額變更",
                    },
                },
                {
                    path: "Subscribe",
                    component: SipChange_subscribe,
                    redirect: "/SipChange/Subscribe/Step1",
                    meta: {
                        title: "定期(不)定額變更",
                    },
                    children: [
                        {
                            path: "Step1",
                            component: SipChange_subscribe_step1,
                            meta: {
                                title: "定期(不)定額變更 - 填寫變更項目",
                            },
                        },
                        {
                            path: "Step2",
                            component: SipChange_subscribe_step2,
                            meta: {
                                title: "定期(不)定額申購 - 確認變更項目",
                            },
                        },
                        {
                            path: "Step3",
                            component: SipChange_subscribe_step3,
                            meta: {
                                title: "定期(不)定額申購 - 完成變更委託",
                            },
                        },
                    ],
                },
            ],
        },
        
        // 交易查詢 --------------------------------------------
        {
            // 交易查詢與取消
            path: "/TradeHistory",
            component: TradeHistory,
            redirect: "/TradeHistory/list",
            children: [
                {
                    path: "list",
                    component: TradeHistory_list,
                    meta: {
                        title: "交易查詢與取消 - 委託查詢/取消",
                    },
                },
                {
                    path: "inTransitDealInquiry",
                    component: TradeHistory_InTransitDealInquiry,
                    meta: {
                        title: "交易查詢與取消 - 在途交易查詢",
                    },
                },
            ],
        },
        {
            // 受益分配查詢
            path: "/BenefitDistributionQuery",
            component: BenefitDistributionQuery,
            redirect: "/BenefitDistributionQuery/list",
            children: [
                {
                    path: "list",
                    component: BenefitDistributionQuery_list,
                    meta: {
                        title: "受益分配查詢",
                    },
                },
            ],
        },
        {
            // 交易確認書查詢
            path: "/TradeCFM",
            component: TradeCFM,
            redirect: "/TradeCFM/offshoreFund",
            children: [
                {
                    path: "offshoreFund",
                    component: TradeCFM_offshoreFund,
                    meta: {
                        title: "交易確認書查詢 - 境外基金交易確認單",
                    },
                },
                {
                    path: "SinoAm",
                    component: TradeCFM_SinoAm,
                    meta: {
                        title: "交易確認書查詢 - 投信基金交易確認單",
                    },
                },
            ],
        },
        {
            // 每月對帳單查詢
            path: "/MonthlyStatement",
            component: MonthlyStatement,
            redirect: "/MonthlyStatement/offshoreFund",
            children: [
                {
                    path: "offshoreFund",
                    component: MonthlyStatement_offshoreFund,
                    meta: {
                        title: "每月對帳單查詢 - 境外基金對帳單",
                    },
                },
                {
                    path: "SinoAm",
                    component: MonthlyStatement_SinoAm,
                    meta: {
                        title: "每月對帳單查詢 - 投信基金對帳單",
                    },
                },
            ],
        },
        {
            // 已實現損益查詢
            path: "/RealizedGainsAndLossesInquiry",
            component: RealizedGainsAndLossesInquiry,
            redirect: "/RealizedGainsAndLossesInquiry/byDate",
            children: [
                {
                    path: "byDate",
                    component: RealizedGainsAndLossesInquiry_byDate,
                    meta: {
                        title: "已實現損益查詢 - 依贖回紀錄顯示",
                    },
                },
                {
                    path: "byOriginalPrice",
                    component: RealizedGainsAndLossesInquiry_byOriginalPrice,
                    meta: {
                        title: "已實現損益查詢 - 依原始本金顯示",
                    },
                },
            ],
        },
        {
            // 扣款明細查詢
            path: "/DeductionDetails",
            component: DeductionDetails,
            redirect: "/DeductionDetails/list",
            children: [
                {
                    path: "list",
                    component: DeductionDetails_list,
                    meta: {
                        title: "扣款明細查詢",
                    },
                },
            ],
        },
        // {
        //     // 到價通知設定
        //     path: "/PriceArrivalNotice",
        //     component: PriceArrivalNotice,
        //     redirect: "/PriceArrivalNotice/list",
        //     children: [
        //         {
        //             path: "list",
        //             component: PriceArrivalNotice_list,
        //             meta: {
        //                 title: "到價通知設定",
        //             },
        //         },
        //     ],
        // },
        // {
        //     // 投資損益查詢
        //     path: "/ProfitLossQuery",
        //     component: ProfitLossQuery,
        //     redirect: "/ProfitLossQuery/byFundId",
        //     children: [
        //         {
        //             path: "byFundId",
        //             component: ProfitLossQuery_byFundId,
        //             meta: {
        //                 title: "投資損益查詢 - 依基金顯示",
        //             },
        //         },
        //         {
        //             path: "byTransactionMethod",
        //             component: ProfitLossQuery_byTransactionMethod,
        //             meta: {
        //                 title: "投資損益查詢 - 依交易方式顯示",
        //             },
        //         },
        //     ],
        // },

        // errorPage --------------------------------------------
        {
            // 系統停機公告
            path: "/inMaintenance",
            component: InMaintenance,
            meta: {
                title: "系統停機公告",
            },
        },
        {
            // 404 & 系統錯誤
            path: "*",
            component: Error404,
            meta: {
                title: "網頁連結不存在",
            },
        },
    ],
});

// ========= app ==============================================================================================================================
const content = new Vue({
    el: "#content",
    mixins: [slickFunction, delegationFailedPopUp],
    data: {
        name: "富蘭克林證券投顧",
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,

        footerWarningList: [
            {
                info: `本公司所提供之資訊，僅供接收人之參考用途。本公司當盡力提供正確之資訊，所載資料均來自或本諸我們相信可靠之來源，但對其完整性、即時性和正確性不做任何擔保，如有錯漏或疏忽，本公司或關係企業與其任何董事或受僱人，並不負任何法律責任。任何人因信賴此等資料而做出或改變投資決策，須自行承擔結果。本網頁所載資料或任何部份均不可以進行抄錄、翻印或另作派發。`,
            },
            {
                info: `本境外基金經金融監督管理委員會核准或申報生效在國內募集及銷售，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。`,
            },
            {
                info: `<b class="footer-warning-focus">由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故本基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。本基金不適合無法承擔相關風險之投資人。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。本基金較適合投資屬性中風險承受度較高之投資人，投資人投資高收益債券為訴求基金不宜占其投資組合過高之比重，投資人應審慎評估。</b>`,
            },
            {
                info: `由於新興市場基金之主要投資風險除包含一般股票型基金之投資組合跌價與匯率風險外，與成熟市場相比須承受較高之政治與金融管理風險，而因市值及制度性因素，流動性風險也相對較高，新興市場投資組合波動性普遍高於成熟市場。基金投資均涉及風險且不負任何抵抗投資虧損之擔保。投資風險之詳細資料請參閱基金公開說明書。`,
            },
            {
                info: `投資基金所應承擔之相關風險及應負擔之費用(含分銷費用)已揭露於基金公開說明書及投資人須知中，投資人可至境外基金資訊觀測站(<a href="http://www.fundclear.com.tw" target="_blank">http://www.fundclear.com.tw</a>)下載，或逕向本公司網站(<a href="https://www.Franklin.com.tw" target="_blank">https://www.Franklin.com.tw</a>)查閱。`,
            },
        ],

        menuShow: window.innerWidth > 991 ? true : false,
        menu: [
            {
                title: `會員中心`,
                toggle: false,
                link: "",
                content: [
                    {
                        title: `個人帳戶`,
                        link: '',
                        divided: false,
                    },
                    {
                        title: `帳戶狀態`,
                        link: "/Status",
                        divided: false,
                    },
                    {
                        title: `個人基本資料`,
                        link: "/PersonalData",
                        divided: false,
                    },
                    {
                        title: `風險屬性評估`,
                        link: "/Kyc",
                        divided: false,
                    },
                    {
                        title: `通知信寄發管理`,
                        link: "/MailGroup",
                        divided: false,
                    },
                    {
                        title: `優惠券管理`,
                        link: "/Coupon",
                        divided: false,
                    },
                    {
                        title: `紅利點數查詢`,
                        link: "/Bonus",
                        divided: false,
                    },
                    {
                        title: `密碼管理`,
                        link: '',
                        divided: true,
                    },
                    {
                        title: `變更登入密碼`,
                        link: "/ChangeLoginPwd",
                        divided: false,
                    },
                    {
                        title: `變更交易密碼`,
                        link: "/ChangeTxnPwd",
                        divided: false,
                    },
                    {
                        title: `忘記交易密碼`,
                        link: "/ForgetPassword",
                        divided: false,
                    },
                    {
                        title: `首次交易密碼變更暨開啟交易權限`,
                        link: "/TxnActivate",
                        divided: false,
                    },
                ],
            },
            {
                title: `我的庫存`,
                toggle: false,
                link: "",
                content: [
                    {
                        title: `轉換`,
                        link: "/MyInventory",
                        divided: false,
                    },
                    {
                        title: `贖回`,
                        link: "/MyInventory",
                        divided: false,
                    },
                    {
                        title: `到價通知設定`,
                        link: "/MyInventory",
                        divided: false,
                    },
                ]
            },
            {
                title: `單筆申購`,
                toggle: false,
                link: "/LumpSum",
                content: false,
            },
            {
                title: `定期(不)定額`,
                toggle: false,
                link: "",
                content: [
                    {
                        title: `定期(不)定額申購`,
                        link: "/Sip",
                        divided: false,
                    },
                    {
                        title: `定期(不)定額變更`,
                        link: "/SipChange",
                        divided: false,
                    },
                ]
            },
            {
                title: `交易查詢`,
                toggle: false,
                link: "",
                content: [
                    {
                        title: `今日委託查詢與取消`,
                        link: "/TradeHistory/list",
                        divided: false,
                    },
                    {
                        title: `在途交易查詢`,
                        link: "/TradeHistory/inTransitDealInquiry",
                        divided: false,
                    },
                    {
                        title: `受益分配查詢`,
                        link: "/BenefitDistributionQuery",
                        divided: false,
                    },
                    {
                        title: `交易確認書查詢`,
                        link: "/TradeCFM",
                        divided: false,
                    },
                    {
                        title: `每月對帳單查詢`,
                        link: "/MonthlyStatement",
                        divided: false,
                    },
                    {
                        title: `已實現損益查詢`,
                        link: "/RealizedGainsAndLossesInquiry",
                        divided: false,
                    },
                    {
                        title: `扣款明細查詢`,
                        link: "/DeductionDetails",
                        divided: false,
                    },
                ]
            },
            {
                title: `國民理財機器人`,
                toggle: false,
                link: "https://wt.franklin.com.tw/areas/20210701_roboV2/plan.html",
                content: false,
            },
            // {
            //     title: `基金交易`,
            //     toggle: false,
            //     link: "",
            //     content: [
            //         {
            //             title: `單筆申購`,
            //             link: "/LumpSum",
            //             divided: false,
            //         },
                    
            //         {
            //             title: `轉換 / 贖回`,
            //             link: "/RedemptionAndChange",
            //             divided: false,
            //         },
                    
            //     ],
            // },
            // {
            //     title: `帳務管理`,
            //     toggle: false,
            //     link: "",
            //     content: [
                    
            //         {
            //             title: `到價通知設定`,
            //             link: "/PriceArrivalNotice",
            //             divided: false,
            //         },
            //         {
            //             title: `投資損益查詢`,
            //             link: "/profitLossQuery",
            //             divided: false,
            //         },
                    
            //     ],
            // },
            // {
            //     title: `常見問題`,
            //     toggle: false,
            //     link: "/",
            //     content: false,
            // },
        ],
        adBannerOptions: {
            autoplay: true,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            arrows: false,
            infinite: true,
        },
        adBanner: [
            {
                title: `定期定額科技基金`,
                link: `#`,
                imgSrc: `images/adBanner.jpg`,
            },
            {
                title: `定期定額科技基金`,
                link: `#`,
                imgSrc: `images/adBanner.jpg`,
            },
            {
                title: `定期定額科技基金`,
                link: `#`,
                imgSrc: `images/adBanner.jpg`,
            },
            {
                title: `定期定額科技基金`,
                link: `#`,
                imgSrc: `images/adBanner.jpg`,
            },
        ],

        // 轉換手續費須知Dialog
        notesOnConversionFees: false,

        // 到價通知設定Dialog
        priceArrivalNoticeSetting: {
            show: false,
            form: {
                accordingTo: "1",
                val1: "",
                val2: "",
                val3: "",
                val4: "",
                frequency: "",
            },
            fund: [
                {
                    noNext: true,
                    transactionMethod: "轉申購",
                    dealDate: "2021/05/17",
                    priceArrivalNoticeSettingInfo: true,
                    info: [
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
                            tit: "可動用單位數",
                            text: "17.38",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "配息金額",
                            text: "26",
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
                    priceArrivalNoticeSettingInfo: true,
                    info: [
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
                            tit: "未實現損益",
                            text: "419",
                            focusText: false,
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
                    ],
                    hasPopover: true,
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "變更",
                promptIcon: "arrow",
                minWidth: "550px",
                pcShowQty: {
                    base: "4", // 預設
                    xxl: "4", // 1599px~1400px
                    xl: "4", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "4", // 767px~360px
                    xs: "4", // 359px以下
                },
            },
        },

        // W-8BEN表單過期dialog
        w8BenMaturity: false,

        // 加減碼設定資訊dialog
        plusAndMinusSetting1: false,
        plusAndMinusSetting2: false,

        // 基金小檔案
        fundSmallFile: {
            show: false,
            tabPosition: "top",
            editableTabsValue: "1",
            basicInfo: [
                {
                    tit: "基金註冊地",
                    info: "盧森堡",
                },
                {
                    tit: "計價幣別",
                    info: "美元",
                },
                {
                    tit: "基金成立日",
                    info: "2012/09/10",
                },
                {
                    tit: "基金風險等級",
                    info: "保守型",
                },
                {
                    tit: "基金規模",
                    info: "252,618,055.09",
                },
                {
                    tit: "基金規模日期",
                    info: "2020/10/30",
                },
                {
                    tit: "最低投資金額(新台幣)",
                    info: "單筆:10,000.00<br/>定期定額:1,000.00",
                },
                {
                    tit: "最低投資金額(原幣)",
                    info: "單筆:250.00<br/>定期定額:40.00",
                },
                {
                    tit: "受益分配方式",
                    info: "累積",
                },
                {
                    tit: "基金淨值",
                    info: "13.11(2020/12/04)",
                },
                {
                    tit: "基金經理人",
                    info: "Mohieddine(Dino) Kronfol/Sharif Eid",
                },
            ],
            basicInfoTd1Width: window.innerWidth > 767 ? "180" : "120",
            basicInfoTd2Width: window.innerWidth > 767 ? "499" : "",
            yearFilter: [
                {
                    value: "1",
                    label: "2020",
                },
                {
                    value: "2",
                    label: "2019",
                },
                {
                    value: "3",
                    label: "2018",
                },
                {
                    value: "4",
                    label: "2017",
                },
                {
                    value: "5",
                    label: "2016",
                },
            ],
            yearFilterValue: "1",
            dividend: [
                {
                    date: "2020/12/08",
                    netWorth: "10.76",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/11/09",
                    netWorth: "10.40",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/10/08",
                    netWorth: "10.13",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/09/08",
                    netWorth: "10.03",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/08/10",
                    netWorth: "10.20",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/07/08",
                    netWorth: "9.89",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/06/08",
                    netWorth: "10.42",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/05/08",
                    netWorth: "9.74",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/04/08",
                    netWorth: "9.63",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/03/09",
                    netWorth: "9.96",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/02/10",
                    netWorth: "11.21",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
                {
                    date: "2020/01/09",
                    netWorth: "	11.29",
                    preTaxDividend: "0.0550",
                    taxFreeDividend: "0.0550",
                },
            ],
        },

        // 投信系列基金淨值計算及付款日說明
        ftftFundDescription: {
            dialog: false,
            group: [
                {
                    groupName: "股票(組合)型",
                    data: [
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6801",
                            fundName: "第一富基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+3",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6803",
                            fundName: "坦伯頓全球股票組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6805",
                            fundName: "新世界股票基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6806",
                            fundName: "中華基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6807",
                            fundName: "新興趨勢傘型基金之天然資源組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6808",
                            fundName: "新興趨勢傘型基金之新興市場股票組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6811",
                            fundName: "中國消費基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6812",
                            fundName: "台股傘型基金之高科技基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+3",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6813",
                            fundName: "台股傘型基金之傳產基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+3",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6823",
                            fundName: "中國傘型基金之中國A股基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+7",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6827",
                            fundName: "全球成長基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6827",
                            fundName: "策略高股息基金",
                            fundWarning: "(本基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6871",
                            fundName: "退休傘型之目標2037組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6873",
                            fundName: "退休傘型之目標2047組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6875",
                            fundName: "全球醫療保健基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6877",
                            fundName: "特別股收益基金",
                            fundWarning: "(本基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T",
                            day3: "T+4",
                        },
                    ],
                },
                {
                    groupName: "債券(組合)型",
                    data: [
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6802",
                            fundName: "富蘭克林全球債券組合基金",
                            fundWarning: "(本基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+3",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6809",
                            fundName: "新興趨勢傘型基金之積極回報債券組合基金",
                            fundWarning:
                                "(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+3",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6817",
                            fundName: "全球投資級債券基金",
                            fundWarning: "(本基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6824",
                            fundName: "中國傘型基金之中國高收益債券基金",
                            fundWarning:
                                "(本基金主要係投資於非投資等級之高風險債券)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+7",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6814",
                            fundName: "全球高收益債券基金",
                            fundWarning:
                                "(本基金主要係投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+5",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6869",
                            fundName: "退休傘型之目標2027組合基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T",
                            day3: "T+4",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6887",
                            fundName: "新興國家固定收益基金",
                            fundWarning:
                                "(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T",
                            day3: "T+5",
                        },
                    ],
                },
                {
                    groupName: "平衡及多重資產型",
                    data: [
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6847",
                            fundName: "多重資產收益基金",
                            fundWarning:
                                "(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T",
                            day3: "T+6",
                        },
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6855",
                            fundName: "亞太平衡基金",
                            fundWarning:
                                "(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+4",
                        },
                    ],
                },
                {
                    groupName: "其他型",
                    data: [
                        {
                            link: "https://www.franklin.com.tw/Fund/BasicInformation/6816",
                            fundName: "貨幣市場基金",
                            fundWarning: "",
                            day1: "T",
                            day2: "T+1",
                            day3: "T+1",
                        },
                    ],
                },
            ],
        },

        // 通路報酬揭露頁
        channelReward: {
            tdWidth: [
                window.innerWidth > 767 ? "176" : "",
                window.innerWidth > 767 ? "731" : "",
                window.innerWidth > 767 ? "229" : "120",
                window.innerWidth > 767 ? "226" : "60",
                window.innerWidth > 767 ? "226" : "90",
                window.innerWidth > 767 ? "226" : "90",
            ],
            table1: [
                {
                    tit: `申購手續費分成(%)<br/>(依	台端申購金額)`,
                    info: [
                        `台端支付的基金申購手續費 <b class="text-red">3.0000%</b>，其中本公司收取不多於 <b class="text-red">3.0000%</b>。`,
                        `台端支付的基金轉換/轉申購手續費為 <b class="text-red">0%</b>，其中本公司收取不多於 <b class="text-red">0%</b>。`,
                    ],
                },
            ],
            table2: [
                {
                    // 美國註冊基金版本
                    tit: `經理費分成(%)<br/>(依	台端申購金額)`,
                    info: `本基金經理費(含經銷費(12b-1 Fee))收入為 <b class="text-red">0.7330%</b>，台端持有本基金期間，本公司每年收取不間，本公司(收入僅來自12b-1 Fee)收取不多於 <b class="text-red">0.25%</b>。`,
                },
                {
                    // 盧森堡註冊基金 & 454 法人機構基金 版本
                    tit: `經理費分成(%)<br/>(依	台端申購金額)`,
                    info: `本基金經理費收入為 <b class="text-red">2.05%</b>，台端持有本基金期間，本公司收取不多於 <b class="text-red">1.00%</b>。`,
                },
                {
                    tit: `贊助或提供產品說明會及員工教育訓練`,
                    info: `本公司無收取。`,
                },
            ],
            table3: [
                {
                    fund: `富蘭克林黃金基金美元A股`,
                    year: `2018`,
                    rateOfReturn: `-18.11`,
                    expenseRatio: `1.02`,
                },
                {
                    fund: `富蘭克林黃金基金美元A股`,
                    year: `2017`,
                    rateOfReturn: `-0.12`,
                    expenseRatio: `0.98`,
                },
                {
                    fund: `富蘭克林黃金基金美元A股`,
                    year: `2016`,
                    rateOfReturn: `55.61`,
                    expenseRatio: `1.11`,
                },
                {
                    fund: `富蘭克林黃金基金美元A股`,
                    year: `2015`,
                    rateOfReturn: `-22.41`,
                    expenseRatio: `1.09`,
                },
                {
                    fund: `富蘭克林黃金基金美元A股`,
                    year: `2014`,
                    rateOfReturn: `-10.16`,
                    expenseRatio: `1.07`,
                },
            ],
        },

        // 登入狀態
        loginStatus: [false],

        // 操作教學
        teaching: false,
        teachingOptions: {
            autoplay: false,
            autoplaySpeed: 5000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            adaptiveHeight: true,
            arrows: false,
            infinite: false,
            fade: true,
            swipe: false,
        },
        teachingNo: [1, 1, 1, 1],

        // 智能定期不定額執行同意書
        smartRSP_executionConsent: false,

        // 智能定期不定額-加減碼機制
        smartRSP_mechanism: false,
        smartRSP_mechanismInfo: {
            standardDeviation: [
                `高於均線1.96個標準差`,
                `高於均線1.645~1.960個標準差`,
                `高於均線1.282~1.645個標準差`,
                `高於均線1.05~1.282個標準差`,
                `高於均線1.05個標準差~低於均線1.05個標準差`,
                `低於均線1.05~1.282個標準差`,
                `低於均線1.282~1.645個標準差`,
                `低於均線1.645~1.960個標準差`,
                `低於均線1.96個標準差`,
            ],
            up: [
                `100%`, `110%`, `120%`, `130%`, `140%`, `150%`, `160%`, `170%`, `180%`,
            ],
            down: [
                `20%`, `25%`, `30%`, `40%`, `50%`, `60%`, `70%`, `75%`, `80%`,
            ],
            showUpInfo: false,
            showDownInfo: false,
        },

        // 合計投資損益
        profitLossQuery: [
            {
                noInfo: false,
                currency: "新台幣",
                totalInvestmentCost: "637,194,499",
                profitAndLoss: "27,860,107",
                accumulatedAmount: "100",
                rateOfReturn: "94.40%",
                totalInvestmentMarketValue: "665,054,606",
                notIncludeInterestRateOfReturn: "4.37%",
            },
            {
                noInfo: true,
                currency: "美元",
                totalInvestmentCost: "-",
                profitAndLoss: "-",
                accumulatedAmount: "-",
                rateOfReturn: "-%",
                totalInvestmentMarketValue: "-",
                notIncludeInterestRateOfReturn: "-",
            },
            {
                noInfo: true,
                currency: "歐元",
                totalInvestmentCost: "-",
                profitAndLoss: "-",
                accumulatedAmount: "-",
                rateOfReturn: "-%",
                totalInvestmentMarketValue: "-",
                notIncludeInterestRateOfReturn: "-",
            },
            {
                noInfo: true,
                currency: "日幣",
                totalInvestmentCost: "-",
                profitAndLoss: "-",
                accumulatedAmount: "-",
                rateOfReturn: "-%",
                totalInvestmentMarketValue: "-",
                notIncludeInterestRateOfReturn: "-",
            },
            {
                noInfo: true,
                currency: "人民幣",
                totalInvestmentCost: "-",
                profitAndLoss: "-",
                accumulatedAmount: "-",
                rateOfReturn: "-%",
                totalInvestmentMarketValue: "-",
                notIncludeInterestRateOfReturn: "-",
            },
        ],

        // 會員登入頁
        signIn: {
            Idno: '',
            Pwd: '',
        },
        signInToggleMask: 0,
        passwordDescription: false,
        safetyReminder: false,

        //-------------------------------------ie遮罩用
        // 取ie版本
        getIEVersion() {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
            var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
            var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
            if(isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if(fIEVersion == 7) {
                    return 7;
                } else if(fIEVersion == 8) {
                    return 8;
                } else if(fIEVersion == 9) {
                    return 9;
                } else if(fIEVersion == 10) {
                    return 10;
                } else {
                    return 6; //IE版本<=7
                }   
            } else if(isEdge) {
                return 'edge'; //edge
            } else if(isIE11) {
                return 11; //IE11  
            }else{
                return -1;//不是ie浏览器
            }
        },
        ieMask() {
            this.getIEVersion() != 'edge' && this.getIEVersion() != -1 ? document.body.classList.add('fixedBody') : '';
        },

        // 實驗用 切換深色模式
        darkMode: false,

        // DS 聯名戶
        dsListOptions: [
            {
                value: '0',
                label1: '綜合帳戶',
                label2: '陳涵風'
            },
            {
                value: '1',
                label1: '聯名戶',
                label2: '陳涵風 PD'
            },
            {
                value: '2',
                label1: '聯名戶',
                label2: '陳涵風-陳大風-陳小風 RD'
            },
            {
                value: '3',
                label1: '聯名戶',
                label2: '陳涵風-陳小風 PD'
            },
        ],
        dsListVal: '0',
    },
    components: {
        slick: slick,
        plusAndMinusSetting: plusAndMinusSetting,
    },
    mounted() {
        // this.signature();
        this.useJq();
        this.topBtn();
        // this.sameHeight('concept-item-text');

        $(window).resize(() => {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            // this.sameHeight('concept-item-text');
        });

        // W-8BEN表單過期dialog (網址後加?w8BenMaturity=true就會顯示)
        this.w8BenMaturity = this.$route.query.w8BenMaturity;

        // 實驗用 切換深色模式
        this.darkMode
            ? document.body.classList.add("darkMode")
            : document.body.classList.remove("darkMode");

        // this.highChartText_NavData();
    },
    methods: {
        signature() {
            console.log(
                "%cMade by Captain%c2020/11",
                "color: #fff; border-radius: 5px; background: #1a4f9c; padding: 2px 10px; font-weight: bold;",
                "color: #000; border-radius: 5px; background: #ffde00; padding: 2px 10px; margin: 0px 5px;"
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
            new WOW().init();
        },

        //-------------------------------------highchart走勢圖樣式示意
        // 官網寫法參考用 start
        highChartText_NavData() {
            function checkDecimal2(n) {
                try {
                    var t = n.split(".");
                    return t[1].length;
                } catch (i) {
                    return digit;
                }
            }
            function DrawChart(n) {
                $(document).ready(function () {
                    Highcharts.setOptions({
                        global: {
                            useUTC: !1,
                            spacingRight: 30,
                        },
                        lang: {
                            rangeSelectorZoom: "",
                            rangeSelectorFrom: "",
                            rangeSelectorTo: "~",
                        },
                        rangeSelector: {
                            inputDateFormat: "%Y/%m/%d",
                            inputEditDateFormat: "%Y/%m/%d",
                            selected: 3,
                            buttons: [
                                {
                                    type: "month",
                                    count: 1,
                                    text: "1月",
                                },
                                {
                                    type: "month",
                                    count: 3,
                                    text: "3月",
                                },
                                {
                                    type: "month",
                                    count: 6,
                                    text: "6月",
                                },
                                {
                                    type: "year",
                                    count: 1,
                                    text: "1年",
                                },
                                {
                                    type: "year",
                                    count: 3,
                                    text: "3年",
                                },
                                {
                                    type: "year",
                                    count: 5,
                                    text: "5年",
                                },
                                {
                                    type: "year",
                                    count: 10,
                                    text: "10年",
                                },
                            ],
                            inputPosition: _inputPosition,
                        },
                    });
                    $.getJSON(navDataUrl, function (t) {
                        var r = [],
                            f,
                            i;
                        for (
                            ChartDataDetail[0] = [], f = 1, i = 0;
                            i < t.length;
                            i++
                        ) {
                            if (i == 0)
                                try {
                                    t[0][3] > 2 && (digit = t[0][3]);
                                } catch (o) {}
                            var s = parseFloat(parseFloat(t[0][1]).toFixed(4)),
                                u = parseFloat(parseFloat(t[i][1]).toFixed(4)),
                                e = parseFloat(parseFloat(t[i][2]).toFixed(4));
                            ChartDataDetail[0].push({
                                p: $.datepicker.formatDate(
                                    "yy/mm/dd",
                                    new Date(t[i][0])
                                ),
                                a: 0,
                                q: u,
                                v: e,
                                d: t[i][0],
                            });
                            n ? r.push([t[i][0], u]) : r.push([t[i][0], u]);
                        }
                        ChartData[0] = r;
                        CreateChart(n, 0);
                    });
                });
            }
            function CreateChart(n, t) {
                var i, r, u;
                ChartDataIndex = t;
                i = ChartData[ChartDataIndex];
                places = ChartDataDetail[ChartDataIndex];
                UseNetValue = n;
                GetSTime(ChartData[ChartDataIndex]);
                GetETime(ChartData[ChartDataIndex]);
                r = n
                    ? {
                          dataGrouping: {
                              enabled: !0,
                              approximation: "open",
                          },
                          marker: {
                              fillColor: "red",
                          },
                      }
                    : {
                          compare: "percent",
                          dataGrouping: {
                              enabled: !0,
                              approximation: "open",
                          },
                          marker: {
                              fillColor: "red",
                          },
                      };
                window.chart2 = window.chart = new Highcharts.StockChart({
                    chart: {
                        renderTo: "chart",
                        spacingRight: 45,
                        events: {
                            redraw: function () {},
                            load: function () {
                                addHtml();
                            },
                        },
                    },
                    credits: {
                        href: "",
                        text: "",
                    },
                    title: {
                        text: "",
                    },
                    navigator: {
                        series: {
                            type: "areaspline",
                            color: "#ffffff",
                            fillOpacity: 0.4,
                            dataGrouping: {
                                smoothed: !1,
                            },
                            lineWidth: 1,
                            lineColor: "red",
                            marker: {
                                enabled: !1,
                            },
                            shadow: !1,
                        },
                    },
                    rangeSelector: {
                        inputDateFormat: "%Y/%m/%d",
                        inputEditDateFormat: "%Y/%m/%d",
                        selected: 0,
                    },
                    xAxis: {
                        startOnTick: !0,
                        endOnTick: !0,
                        type: "datetime",
                        dateTimeLabelFormats: {
                            second: "<br>",
                            minute: "<br>",
                            hour: "<br>",
                            day: "%m/%d",
                            week: "%Y/%m/%d",
                            month: "%Y/%m",
                            year: "%Y",
                        },
                        events: {
                            afterSetExtremes: function (n) {
                                TimeAreaTdjust(
                                    Highcharts.dateFormat("%Y/%m/%d", n.min),
                                    Highcharts.dateFormat("%Y/%m/%d", n.max)
                                );
                            },
                            setExtremes: function () {},
                        },
                    },
                    yAxis: {
                        offset: 15,
                        lineColor: "red",
                        labels: {
                            formatter: function () {
                                return n
                                    ? this.value.toFixed(digit)
                                    : (this.value > 0 ? "+" : "") +
                                          this.value +
                                          "%";
                            },
                        },
                    },
                    plotOptions: {
                        line: {
                            lineWidth: 1,
                            lineColor: "red",
                        },
                        series: r,
                    },
                    series: [
                        {
                            name: navName,
                            data: i,
                        },
                    ],
                    tooltip: {
                        shadow: !0,
                        formatter: function () {
                            LastPoint = $.datepicker.formatDate(
                                "yy/mm/dd",
                                new Date(
                                    this.points[0].series.processedXData[
                                        this.points[0].series.processedXData
                                            .length - 1
                                    ]
                                )
                            );
                            FirstPoint = $.datepicker.formatDate(
                                "yy/mm/dd",
                                new Date(
                                    this.points[0].series.processedXData[1]
                                )
                            );
                            30;
                            var n, t;
                            return (
                                this.point
                                    ? ((n = this.point.x), (t = this.point.y))
                                    : ((n = this.x), (t = this.y)),
                                getWeek(new Date(n)) +
                                    "," +
                                    $.datepicker.formatDate(
                                        "yy/mm/dd",
                                        new Date(n)
                                    ) +
                                    '<br><span style="color:#459cba">' +
                                    navName +
                                    ":</span><strong>" +
                                    t.toFixed(digit) +
                                    "</strong>"
                            );
                        },
                    },
                });
                u = {
                    type: "year",
                    count: 1,
                };
                chart.rangeSelector.clickButton(3, u, !0);
                $("#btn-send0").click(function () {
                    chart.rangeSelector.leftBox.onchange();
                    chart.rangeSelector.rightBox.onchange();
                });
                $("img[id^='btn-send']").mouseover(function () {
                    $(this).css("cursor", "pointer");
                });
            }
            function WriteCurrentInfo(n, t) {
                var r = "",
                    i;
                $("#FundID").find("option:selected").val() ==
                    request("fundID") &&
                    (r = $("#FundID").find("option:selected").text());
                i = r + "&nbsp;&nbsp;";
                i += "&nbsp;&nbsp;淨值日期" + n + "";
                i += "&nbsp;&nbsp;淨值:" + t.toFixed(digit);
                $("#currentinfo").css("display", "block");
                $("#currentinfo").html(i);
            }
            function GetSTime(n) {
                var t = $.Enumerable.From(n).MinBy("$.d");
                STime = t.p;
            }
            function GetETime(n) {
                var t = $.Enumerable.From(n).MaxBy("$.d");
                ETime = t.p;
            }
            function PointValue(n) {
                try {
                    n == LastPoint && (n = ETime);
                    n == FirstPoint && (n = STime);
                    var t = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                        .Where("$.p <= '" + n + "'")
                        .MaxBy("$.d");
                    WriteCurrentInfo(t.p, t.q);
                } catch (i) {}
            }
            function TimeAreaTdjust(n, t) {
                try {
                    var i = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                            .Where("$.p <= '" + n + "'")
                            .MaxBy("$.d"),
                        r = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                            .Where("$.p >= '" + t + "'")
                            .MinBy("$.d");
                    places = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                        .Where("$.p >= '" + i.p + "'")
                        .Where("$.p <= '" + r.p + "'")
                        .ToArray();
                    RangePoint();
                    GetSTime(places);
                    GetETime(places);
                } catch (u) {}
            }
            function AllPoint() {
                try {
                    AllStartPoint = $.Enumerable.From(
                        ChartDataDetail[ChartDataIndex]
                    ).MinBy("$.d");
                    AllEndPoint = $.Enumerable.From(
                        ChartDataDetail[ChartDataIndex]
                    ).MaxBy("$.d");
                    var n, t;
                    $("#allinfo").html(
                        "<p>最高:<a class='special'>" +
                            t.q +
                            "</a>(" +
                            t.p +
                            ")</p>"
                    );
                    $("#intervalinfo").html(
                        "<p>最低:<a class='special'>" +
                            n.q +
                            "</a>(" +
                            n.p +
                            ")</p>"
                    );
                } catch (i) {}
            }
            function RangePoint() {
                try {
                    RangeStartPoint = $.Enumerable.From(places).MinBy("$.d");
                    RangeEndPoint = $.Enumerable.From(places).MaxBy("$.d");
                    $("#RangeStartPointP").html(RangeStartPoint.p);
                    $("#RangeStartPointQ").html(RangeStartPoint.q);
                    $("#RangeEndPointP").html(RangeEndPoint.p);
                    $("#RangeEndPointQ").html(RangeEndPoint.q);
                    var n, t;
                    n = $.Enumerable.From(places).MinBy("$.q");
                    t = $.Enumerable.From(places).MaxBy("$.q");
                    $("#intervalinfo").html(
                        "<p>最高:<a class='special'>" +
                            t.q.toFixed(digit) +
                            "</a>(" +
                            t.p +
                            ")</p>"
                    );
                    $("#allinfo").html(
                        "<p>最低:<a class='special'>" +
                            n.q.toFixed(digit) +
                            "</a>(" +
                            n.p +
                            ")</p>"
                    );
                } catch (i) {}
            }
            function DoPoint(n) {
                var t, i;
                $("#currentinfo").css("display", "block");
                try {
                    n == LastPoint && (n = ETime);
                    SelectPoint = $.Enumerable.From(places)
                        .Where("$.p >= '" + n + "'")
                        .MinBy("$.p");
                    t = "";
                    $("#FundID").find("option:selected").val() ==
                        request("fundID") &&
                        (t = $("#FundID").find("option:selected").text());
                    $("#CurrentName").html(t);
                    $("#SelectPointP").html(SelectPoint.p);
                    $("#SelectPointQ").html(SelectPoint.q);
                    i = (SelectPoint.q / RangeStartPoint.q) * 100 - 100;
                    i >= 0
                        ? $("#SelectPointV").css("color", "red")
                        : $("#SelectPointV").css("color", "green");
                    $("#SelectPointV").html(i.toFixed(2) + "%");
                } catch (r) {}
            }
            function addHtml() {
                $("#currentinfo").empty();
                $("#currentinfo").html(
                    "<span id='CurrentName'></span>&nbsp;&nbsp;<span id='SelectPointP'></span>&nbsp;&nbsp;|&nbsp;&nbsp;淨值:&nbsp;<span id='SelectPointQ'></span>&nbsp;&nbsp;|&nbsp;&nbsp;績效:&nbsp;<span id='SelectPointV' style='color:red;font-weight: bold'></span>"
                );
                $("#currentinfo").css("display", "none");
                AllPoint();
                var n = $("input.highcharts-range-selector:eq(0)").val(),
                    t = $("input.highcharts-range-selector:eq(1)").val();
                TimeAreaTdjust(n, t);
            }
            function AllInfo() {
                var t = $.Enumerable.From(places).MinBy("$.q"),
                    i = $.Enumerable.From(places).MaxBy("$.q"),
                    n =
                        "<span style='color:#666666;'>最高:</span>" +
                        toDecimal(i.q) +
                        "<span style='color:#999999; text-align:right;'>(" +
                        i.p +
                        ")</span>";
                n +=
                    "<br /><span style='color:#666666;'>最低:</span>" +
                    toDecimal(t.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    t.p +
                    ")</span>";
                $("#allinfo").html(n);
                n =
                    "<spanstyle='color:#666666;'>最高:</span>" +
                    toDecimal(i.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    i.p +
                    ")</span>";
                n +=
                    "<br /><span style='color:#666666;'>最低:</span>" +
                    toDecimal(t.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    t.p +
                    ")</span>";
                $("#intervalinfo").html(n);
            }
            function toDecimal(n) {
                var t = parseFloat(n);
                return isNaN(t) ? null : Math.round(n * 100) / 100;
            }
            function QueryByDate(n, t, i) {
                return $.Enumerable.From(i)
                    .Where(function (t) {
                        return t.p >= n;
                    })
                    .Where(function (n) {
                        return n.p <= t;
                    })
                    .ToArray();
            }
            function GetStartTime(n, t) {
                return n == "" && (n = $.Enumerable.From(t).MinBy("$.p").p), n;
            }
            function GetEndTime(n, t) {
                return n == "" && (n = $.Enumerable.From(t).MaxBy("$.p").p), n;
            }
            function request(n) {
                for (
                    var r,
                        e,
                        u,
                        f = {},
                        o = location.search.substring(1),
                        i = o.split("&"),
                        t = 0;
                    t < i.length;
                    t++
                )
                    ((r = i[t].indexOf("=")), r != -1) &&
                        ((e = i[t].substring(0, r)),
                        (u = i[t].substring(r + 1)),
                        (u = decodeURIComponent(u)),
                        (f[e] = u));
                return f[n];
            }
            function getWeek(n) {
                var t = n.getDay();
                switch (t) {
                    case 0:
                        return "星期日";
                    case 1:
                        return "星期一";
                    case 2:
                        return "星期二";
                    case 3:
                        return "星期三";
                    case 4:
                        return "星期四";
                    case 5:
                        return "星期五";
                    case 6:
                        return "星期六";
                }
            }
            var MinDate = "",
                seriesOptions = [],
                places,
                ChartDataDetail = [],
                ChartData = [],
                ChartDataIndex = 0,
                UseNetValue,
                STime,
                ETime,
                LastPoint = "",
                FirstPoint = "",
                digit = 2,
                RangeStartPoint,
                RangeEndPoint,
                AllStartPoint,
                AllEndPoint,
                SelectPoint;
            DrawChart(!0);
        },
        highChartText_RewardData() {
            function checkDecimal2(n) {
                return ((re = /^[0-9]+(\.[0-9]{2})?$/), !re.test(n)) ? !1 : !0;
            }
            function DrawChart(n) {
                $(document).ready(function () {
                    Highcharts.setOptions({
                        global: {
                            useUTC: !1,
                        },
                    });
                    Highcharts.setOptions({
                        lang: {
                            rangeSelectorZoom: "",
                            rangeSelectorFrom: "",
                            rangeSelectorTo: "~",
                        },
                    });
                    $.getJSON(performanceDataUrl, function (t) {
                        var u = [],
                            f,
                            i,
                            r;
                        for (
                            ChartDataDetail[0] = [], f = 1, i = 0;
                            i < t.length;
                            i++
                        )
                            try {
                                t[i][1] > 0 &&
                                    t[0][2] > 0 &&
                                    ((r = parseFloat(
                                        (t[i][2] * t[i][1] -
                                            t[0][2] * t[0][1]) /
                                            (t[0][2] * t[0][1]) +
                                            1
                                    )),
                                    ChartDataDetail[0].push({
                                        p: $.datepicker.formatDate(
                                            "yy/mm/dd",
                                            new Date(t[i][0])
                                        ),
                                        a: t[i][2],
                                        q: t[i][1],
                                        v: r,
                                        d: t[i][0],
                                    }),
                                    u.push([t[i][0], parseFloat(r)]));
                            } catch (e) {}
                        ChartData[0] = u;
                        CreateChart(n, 0);
                    });
                });
            }
            function CreateChart(n, t) {
                var i, r, u;
                ChartDataIndex = t;
                i = ChartData[ChartDataIndex];
                places = ChartDataDetail[ChartDataIndex];
                UseNetValue = n;
                GetSTime(ChartData[ChartDataIndex]);
                GetETime(ChartData[ChartDataIndex]);
                r = n
                    ? {
                          dataGrouping: {
                              enabled: !0,
                              approximation: "open",
                          },
                          marker: {
                              fillColor: "red",
                          },
                      }
                    : {
                          compare: "percent",
                          dataGrouping: {
                              enabled: !0,
                              approximation: "open",
                          },
                          marker: {
                              fillColor: "red",
                          },
                      };
                window.chart2 = window.chart = new Highcharts.StockChart({
                    chart: {
                        renderTo: "chart",
                        spacingTop: 10,
                        spacingRight: 30,
                        rangeSelectorTop: 5,
                        events: {
                            redraw: function () {},
                            load: function () {
                                addHtml();
                            },
                        },
                        height: window.isMobileDevice ? 248 : 400,
                        width: window.isMobileDevice
                            ? $("#wrap").width() - 20
                            : 0,
                    },
                    credits: {
                        href: "",
                        text: "",
                    },
                    title: {
                        text: "",
                    },
                    navigation: {
                        buttonOptions: {
                            enabled: !1,
                        },
                    },
                    navigator: {
                        series: {
                            type: "areaspline",
                            color: "#ffffff",
                            fillOpacity: 0.4,
                            dataGrouping: {
                                smoothed: !1,
                            },
                            lineColor: "red",
                            lineWidth: 1,
                            marker: {
                                enabled: !1,
                            },
                            shadow: !1,
                        },
                    },
                    rangeSelector: {
                        inputDateParser: function (n) {
                            return (
                                (n = n.split("/")),
                                Date.UTC(
                                    parseInt(n[0]),
                                    parseInt(n[1]) - 1,
                                    parseInt(n[2])
                                )
                            );
                        },
                        inputDateFormat: "%Y/%m/%d",
                        inputEditDateFormat: "%Y/%m/%d",
                        selected: 1,
                        buttons: [
                            {
                                type: "month",
                                count: 1,
                                text: "1月",
                            },
                            {
                                type: "month",
                                count: 3,
                                text: "3月",
                            },
                            {
                                type: "month",
                                count: 6,
                                text: "6月",
                            },
                            {
                                type: "year",
                                count: 1,
                                text: "1年",
                            },
                            {
                                type: "year",
                                count: 3,
                                text: "3年",
                            },
                            {
                                type: "year",
                                count: 5,
                                text: "5年",
                            },
                            {
                                type: "year",
                                count: 10,
                                text: "10年",
                            },
                        ],
                        inputPosition: _inputPosition,
                    },
                    xAxis: {
                        startOnTick: !0,
                        endOnTick: !0,
                        ordinal: !1,
                        type: "datetime",
                        dateTimeLabelFormats: {
                            second: "<br>",
                            minute: "<br>",
                            hour: "<br>",
                            day: "%m/%d",
                            week: "%Y/%m/%d",
                            month: "%Y/%m",
                            year: "%Y",
                        },
                        events: {
                            afterSetExtremes: function (n) {
                                TimeAreaTdjust(
                                    Highcharts.dateFormat("%Y/%m/%d", n.min),
                                    Highcharts.dateFormat("%Y/%m/%d", n.max)
                                );
                            },
                            setExtremes: function () {},
                        },
                    },
                    yAxis: {
                        offset: 15,
                        lineColor: "red",
                        labels: {
                            formatter: function () {
                                return n
                                    ? this.value
                                    : (this.value > 0 ? "+" : "") +
                                          this.value +
                                          "%";
                            },
                        },
                    },
                    plotOptions: {
                        line: {
                            color: "#ff0000",
                            lineWidth: 1,
                        },
                        series: r,
                    },
                    series: [
                        {
                            data: i,
                            name: navName,
                        },
                    ],
                    tooltip: {
                        shadow: !0,
                        borderColor: "#2f7ed8",
                        borderWidth: 1,
                        formatter: function () {
                            LastPoint =
                                this.points[0].series.processedXData[
                                    this.points[0].series.processedXData
                                        .length - 1
                                ];
                            LastPoint = $.datepicker.formatDate(
                                "yy/mm/dd",
                                new Date(LastPoint)
                            );
                            FirstPoint = $.datepicker.formatDate(
                                "yy/mm/dd",
                                new Date(
                                    this.points[0].series.processedXData[1]
                                )
                            );
                            var t = "",
                                n;
                            return (
                                this.point
                                    ? ((n = new Date(this.point.x)),
                                      (t =
                                          getWeek(n) +
                                          "," +
                                          $.datepicker.formatDate(
                                              "yy/mm/dd",
                                              n
                                          ) +
                                          '<br><span style="color:#459cba">' +
                                          navName +
                                          ":</span><strong>" +
                                          this.point.y +
                                          "</strong>"))
                                    : ((n = new Date(this.x)),
                                      (t = DoPoint(
                                          Highcharts.dateFormat(
                                              "%Y/%m/%d",
                                              this.x
                                          )
                                      ))),
                                t
                            );
                        },
                    },
                });
                u = {
                    type: "year",
                    count: 1,
                };
                chart.rangeSelector.clickButton(3, u, !0);
                $("#btn-send0").click(function () {});
                $("img[id^='btn-send']").mouseover(function () {
                    $(this).css("cursor", "pointer");
                });
            }
            function WriteCurrentInfo(n, t) {
                var r = "",
                    i;
                $("#FundID").find("option:selected").val() ==
                    request("fundID") &&
                    (r = $("#FundID").find("option:selected").text());
                i = r + "&nbsp;&nbsp;";
                i += "&nbsp;&nbsp;淨值日期" + n + "";
                i += "&nbsp;&nbsp;淨值:" + t.toFixed("2");
                $("#currentinfo").css("display", "block");
                $("#currentinfo").html(i);
            }
            function GetSTime(n) {
                var t = $.Enumerable.From(n).MinBy("$.d");
                STime = t.p;
            }
            function GetETime(n) {
                var t = $.Enumerable.From(n).MaxBy("$.d");
                ETime = t.p;
            }
            function PointValue(n) {
                try {
                    n == LastPoint && (n = ETime);
                    n == FirstPoint && (n = STime);
                    var t = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                        .Where("$.p <= '" + n + "'")
                        .MaxBy("$.d");
                    WriteCurrentInfo(t.p, t.q);
                } catch (i) {}
            }
            function TimeAreaTdjust(n, t) {
                try {
                    var i = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                            .Where("$.p <= '" + n + "'")
                            .MaxBy("$.d"),
                        r = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                            .Where("$.p >= '" + t + "'")
                            .MinBy("$.d");
                    places = $.Enumerable.From(ChartDataDetail[ChartDataIndex])
                        .Where("$.p >= '" + i.p + "'")
                        .Where("$.p <= '" + r.p + "'")
                        .ToArray();
                    RangePoint();
                    GetSTime(places);
                    GetETime(places);
                } catch (u) {}
            }
            function AllPoint() {
                try {
                } catch (n) {}
            }
            function RangePoint() {
                var n, t, i, r;
                try {
                    RangeStartPoint = $.Enumerable.From(places).MinBy("$.d");
                    RangeEndPoint = $.Enumerable.From(places).MaxBy("$.d");
                    $("#RangeStartPointP").html(RangeStartPoint.p);
                    $("#RangeStartPointQ").html(RangeStartPoint.q);
                    $("#RangeEndPointP").html(RangeEndPoint.p);
                    $("#RangeEndPointQ").html(RangeEndPoint.q);
                    n = $.Enumerable.From(places).MinBy("$.v");
                    t = $.Enumerable.From(places).MaxBy("$.v");
                    i = i = (t.v / RangeStartPoint.v) * 100 - 100;
                    r = (n.v / RangeStartPoint.v) * 100 - 100;
                    $("#intervalinfo").html(
                        "<p>最高:<a class='special'>" +
                            i.toFixed(digit) +
                            "%</a>(" +
                            t.p +
                            ")</p>"
                    );
                    $("#allinfo").html(
                        "<p>最低:<a class='special'>" +
                            r.toFixed(digit) +
                            "%</a>(" +
                            n.p +
                            ")</p>"
                    );
                } catch (u) {}
            }
            function DoPoint(n) {
                var t, i;
                $("#currentinfo").css("display", "block");
                try {
                    return (
                        n == LastPoint,
                        n == FirstPoint,
                        (SelectPoint = $.Enumerable.From(places)
                            .Where("$.p >= '" + n + "'")
                            .MinBy("$.p")),
                        (t = ""),
                        $("#FundID").find("option:selected").val() ==
                            request("fundID") &&
                            (t = $("#FundID").find("option:selected").text()),
                        $("#CurrentName").html(t),
                        $("#SelectPointP").html(SelectPoint.p),
                        $("#SelectPointQ").html(SelectPoint.q),
                        (i = (SelectPoint.v / RangeStartPoint.v) * 100 - 100),
                        getWeek(new Date(SelectPoint.d)) +
                            "," +
                            $.datepicker.formatDate(
                                "yy/mm/dd",
                                new Date(SelectPoint.d)
                            ) +
                            '<br><span style="color:#459cba">' +
                            navName +
                            ":</span><strong>" +
                            i.toFixed(digit) +
                            "%</strong>"
                    );
                } catch (r) {}
            }
            function addHtml() {
                $("#currentinfo").empty();
                $("#currentinfo").html(
                    "<span id='CurrentName'></span>&nbsp;&nbsp;<span id='SelectPointP'></span>&nbsp;&nbsp;|&nbsp;&nbsp;淨值:&nbsp;<span id='SelectPointQ'></span>&nbsp;&nbsp;|&nbsp;&nbsp;績效:&nbsp;<span id='SelectPointV' style='color:red;font-weight: bold'></span>"
                );
                $("#currentinfo").css("display", "none");
                AllPoint();
                var n = $("input.highcharts-range-selector:eq(0)").val(),
                    t = $("input.highcharts-range-selector:eq(1)").val();
                TimeAreaTdjust(n, t);
            }
            function AllInfo() {
                var t = $.Enumerable.From(places).MinBy("$.q"),
                    i = $.Enumerable.From(places).MaxBy("$.q"),
                    n =
                        "<span style='color:#666666;'>最高:</span>" +
                        toDecimal(i.q) +
                        "<span style='color:#999999; text-align:right;'>(" +
                        i.p +
                        ")</span>";
                n +=
                    "<br /><span style='color:#666666;'>最低:</span>" +
                    toDecimal(t.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    t.p +
                    ")</span>";
                $("#allinfo").html(n);
                n =
                    "<spanstyle='color:#666666;'>最高:</span>" +
                    toDecimal(i.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    i.p +
                    ")</span>";
                n +=
                    "<br /><span style='color:#666666;'>最低:</span>" +
                    toDecimal(t.q) +
                    "<span style='color:#999999; text-align:right;'>(" +
                    t.p +
                    ")</span>";
                $("#intervalinfo").html(n);
            }
            function toDecimal(n) {
                var t = parseFloat(n);
                return isNaN(t) ? null : Math.round(n * 100) / 100;
            }
            function QueryByDate(n, t, i) {
                return $.Enumerable.From(i)
                    .Where(function (t) {
                        return t.p >= n;
                    })
                    .Where(function (n) {
                        return n.p <= t;
                    })
                    .ToArray();
            }
            function GetStartTime(n, t) {
                return n == "" && (n = $.Enumerable.From(t).MinBy("$.p").p), n;
            }
            function GetEndTime(n, t) {
                return n == "" && (n = $.Enumerable.From(t).MaxBy("$.p").p), n;
            }
            function request(n) {
                for (
                    var r,
                        e,
                        u,
                        f = {},
                        o = location.search.substring(1),
                        i = o.split("&"),
                        t = 0;
                    t < i.length;
                    t++
                )
                    ((r = i[t].indexOf("=")), r != -1) &&
                        ((e = i[t].substring(0, r)),
                        (u = i[t].substring(r + 1)),
                        (u = decodeURIComponent(u)),
                        (f[e] = u));
                return f[n];
            }
            function getWeek(n) {
                var t = n.getDay();
                switch (t) {
                    case 0:
                        return "星期日";
                    case 1:
                        return "星期一";
                    case 2:
                        return "星期二";
                    case 3:
                        return "星期三";
                    case 4:
                        return "星期四";
                    case 5:
                        return "星期五";
                    case 6:
                        return "星期六";
                }
            }
            var MinDate = "",
                seriesOptions = [],
                places,
                ChartDataDetail = [],
                ChartData = [],
                ChartDataIndex = 0,
                UseNetValue,
                STime,
                ETime,
                LastPoint = "",
                FirstPoint = "",
                digit = 2,
                RangeStartPoint,
                RangeEndPoint,
                AllStartPoint,
                AllEndPoint,
                SelectPoint,
                getHigh,
                getLow;
            DrawChart(!1);
            getHigh = function (n, t) {
                for (var i = null, r = 0; r < n.length; r++)
                    i = i !== null ? (n[r][t] > i ? n[r][t] : i) : n[r][t];
                return i;
            };
            getLow = function (n, t) {
                for (var i = null, r = 0; r < n.length; r++)
                    i = i !== null ? (n[r][t] < i ? n[r][t] : i) : n[r][t];
                return i;
            };
        },
        // 官網寫法參考用 end

        // 資料接口
        setPromise(methods, url, data) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    type: methods,
                    dataType: "json",
                    url: url,
                    data: data,
                    success: (res) => {
                        resolve(res);
                    },
                    error: (result) => {
                        reject(result);
                    },
                });
            });
        },
        setFundValue(fundID, data) {
            return this.setPromise("GET", `js/NavData_4000.json`, data);
        },
        async setLineChart(fundID) {
            try {
                const lineData = await this.setFundValue(fundID);

                let valueData;
                await new Promise((resolve) => {
                    valueData = lineData.map((x) => {
                        return [x[0], x[1]];
                    });
                    setTimeout(() => {
                        resolve();
                    }, 333);
                });

                this.$nextTick(() => {
                    this.trendChart(valueData);
                });
            } catch (err) {
                console.log("getFundValue-err:", err);
            }
        },

        // highchart樣式設定
        trendChart(data) {
            Highcharts.setOptions({
                lang: {
                    rangeSelectorZoom: "區間：",
                    rangeSelectorFrom: "",
                    rangeSelectorTo: "~",
                },
            });
            Highcharts.stockChart("trendChart", {
                chart: {
                    style: {
                        fontFamily: 'Arial, "Noto Sans TC", sans-serif',
                    },
                },
                credits: {
                    enabled: false,
                },
                navigation: {
                    buttonOptions: {
                        enabled: false,
                    },
                },
                navigator: {
                    series: {
                        type: "areaspline",
                        color: "#ffffff",
                        fillOpacity: 0.4,
                        dataGrouping: {
                            smoothed: false,
                        },
                        lineColor: "#005598",
                        lineWidth: 1,
                        marker: {
                            enabled: false,
                        },
                        shadow: false,
                    },
                    handles: {
                        backgroundColor: "#fff",
                        borderColor: "#666",
                        lineWidth: 1,
                        width: 20,
                        height: 17,
                    },
                },
                scrollbar: {
                    barBackgroundColor: "#fff",
                    barBorderRadius: 5,
                    barBorderWidth: 2,
                    barBorderColor: "#ccc",
                    rifleColor: "#3c3c3c",
                    minWidth: "1",

                    buttonBackgroundColor: "#fff",
                    buttonBorderWidth: 2,
                    buttonBorderColor: "#005598",
                    buttonArrowColor: "#005598",
                    buttonBorderRadius: 20,

                    trackBackgroundColor: "#f4f4f4",
                    trackBorderWidth: 3,
                    trackBorderColor: "#fff",
                    trackBorderRadius: 7,

                    size: 20,
                },
                rangeSelector: {
                    allButtonsEnabled: true,
                    buttonSpacing: 10,
                    selected: 3,
                    // inputEnabled: false,
                    buttons: [
                        {
                            type: "month",
                            count: 1,
                            text: "1月",
                        },
                        {
                            type: "month",
                            count: 3,
                            text: "3月",
                        },
                        {
                            type: "month",
                            count: 6,
                            text: "6月",
                        },
                        {
                            type: "year",
                            count: 1,
                            text: "1年",
                        },
                        {
                            type: "year",
                            count: 3,
                            text: "3年",
                        },
                        {
                            type: "year",
                            count: 5,
                            text: "5年",
                        },
                        {
                            type: "year",
                            count: 10,
                            text: "10年",
                        },
                    ],
                    buttonTheme: {
                        r: 5,
                        "stroke-width": 1,
                        fill: "none",
                        style: {
                            // color: '#f00',
                            // fontWeight: 'bold'
                        },
                        stroke: "#ccc",
                        states: {
                            hover: {},
                            select: {
                                fill: "#005598",
                                stroke: "#005598",
                                style: {
                                    color: "white",
                                },
                            },
                        },
                    },
                    labelStyle: {
                        color: "#797979",
                        // fontWeight: "bold",
                        fontSize: "16px",
                    },
                    buttonPosition: {
                        // x: window.innerWidth >= 992 ? 10 : -20,
                        x: -18,
                    },
                    // inputPosition : { x: -50, y: 0 },
                    inputDateFormat: "%Y/%m/%d",
                    inputEditDateFormat: "%Y/%m/%d",
                    inputBoxBorderColor: "#ccc",
                    inputBoxWidth: 100,
                    inputBoxHeight: 18,
                    inputStyle: {
                        color: "#222",
                        fontSize: "14px",
                    },
                },
                title: {
                    text: "",
                },
                xAxis: {
                    dateTimeLabelFormats: {
                        second: "%Y-%m-%d<br/>%H:%M:%S",
                        minute: "%Y-%m-%d<br/>%H:%M",
                        hour: "%Y-%m-%d<br/>%H:%M",
                        day: "%Y<br/>%m-%d",
                        week: "%Y<br/>%m-%d",
                        month: "%Y-%m",
                        year: "%Y",
                    },
                },

                yAxis: {
                    opposite: false,
                    lineColor: "red",
                    min: 11,
                    startOnTick: true,
                },
                plotOptions: {
                    area: {
                        // lineColor: "#3d6ed0",
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1,
                            },
                            stops: [
                                [0, "rgba(61, 110, 208, 0.3)"],
                                [1, "rgba(255, 255, 255, 0)"],
                            ],
                        },
                    },
                    series: {
                        dataGrouping: {
                            enabled: true,
                            approximation: "open",
                        },
                        marker: {
                            fillColor: "#005598",
                            lineWidth: 2,
                            lineColor: "rgba(255, 255, 255, 0.8)",
                            radius: 6,
                        },
                    },
                },
                tooltip: {
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderColor: "#222",
                    borderWidth: 1,
                    borderRadius: 10,
                    shadow: true,
                    style: {
                        color: "#fff",
                        fontSize: "16px",
                    },
                    valueDecimals: 2,
                    xDateFormat: "%Y / %m / %d",
                },
                series: [
                    {
                        type: "area",
                        name: "淨值",
                        data: data,
                        color: "#005598",
                    },
                ],
                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 500,
                            },
                            chartOptions: {
                                rangeSelector: {
                                    buttonSpacing: 8,
                                    buttonTheme: {
                                        height: 28,
                                    },
                                    inputPosition: { x: 0, y: 5 },
                                },
                                tooltip: {
                                    backgroundColor: "rgba(0,0,0,0.9)",
                                },
                            },
                        },
                    ],
                },
            });
        },
        fundSmallFileTab(tab, event) {
            if (tab.name == 2) {
                this.setLineChart(4000);
            }if(tab.name == 5) {
                window.open('https://www.franklin.com.tw/areas/month_report/bonds.html?FundId=4008', '_blank')
            };
        },

        //------------------------------------- 未登入版面
        notLoggedIn() {
            this.$set(this.loginStatus, 0, false);
            document.body.classList.add("notLoggedIn");
        },
        alreadyLoggedIn() {
            this.$set(this.loginStatus, 0, true);
            document.body.classList.remove("notLoggedIn");
        },

        //------------------------------------- 通路報酬揭露頁 合併儲存格
        channelRewardTable3SpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 5 === 0) {
                    return {
                        rowspan: 5,
                        colspan: 1,
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0,
                    };
                }
            }
        },

        //------------------------------------- 操作教學
        teachingShowBtn() {
            // return (
            //     this.$route.path === "/" ||
            //     this.$route.path === "/ProfitLossQuery/byFundId" ||
            //     this.$route.path === "/ProfitLossQuery/byTransactionMethod"
            // );
        },
        // teachingArea() {
        //     return this.teachingShowBtn() && this.teaching;
        // },
        showTeaching() {
            this.teaching = true;
            document.body.classList.add("fixedBody");

            this.$nextTick(() => {
                this.$refs.teaching0.reSlick();
                this.$refs.teaching1.reSlick();
                this.$refs.teaching2.reSlick();
                this.$refs.teaching3.reSlick();
            });

            this.teachingNo.forEach((item, i) => {
                this.$set(this.teachingNo, i, 1);
            });

            setTimeout(() => {
                $(window).resize();
            }, 300);
        },
        teachingNextBtn(no, qty) {
            if (this.teachingNo[no] < qty) {
                this.teachingNo[no]++;
                this.$refs.teaching0.next();
                this.$refs.teaching1.next();
                this.$refs.teaching2.next();
                this.$refs.teaching3.next();
            } else {
                this.teaching = false;
                document.body.classList.remove("fixedBody");
            }
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
            val > 991 ? (this.menuShow = true) : (this.menuShow = false);
        },
        windowHeight(val) {
            this.windowHeight = val;
        },
        // $route(to, from) {
        //     // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
        // },
        $route: {
            immediate: true,
            handler(to, from) {
                document.title =
                    to.meta.title + " | 富蘭克林 國民的基金" ||
                    "富蘭克林‧國民ｅ帳戶 | 富蘭克林 國民的基金"; // 修改<title>
                if (this.teachingShowBtn()) {
                    this.showTeaching();
                };

                // 示意用 轉跳robo的測試切版
                if (to.path.search('https://wt.franklin.com.tw/areas/20210701_roboV2/plan.html') != -1) {
                    location.href = 'https://wt.franklin.com.tw/areas/20210701_roboV2/plan.html'
                };
            },
        },

        // 實驗用 切換深色模式
        darkMode(val) {
            // val ? document.body.classList.add("darkMode") : document.body.classList.remove("darkMode");
            let themeColor = document.querySelector('meta[name="theme-color"]');
            if (val) {
                document.body.classList.add("darkMode");
                themeColor.setAttribute("content", "#000000");
            } else {
                document.body.classList.remove("darkMode");
                themeColor.setAttribute("content", "#003680");
            }
        },
    },
    router,
});
// }).$mount('#content');

// Element-ui中文化
ELEMENT.locale(ELEMENT.lang.zhTW);
