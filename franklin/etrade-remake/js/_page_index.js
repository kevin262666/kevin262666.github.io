// ========= 首頁 ==============================================================================================================================
const Index = {
    mixins: [slickFunction],
    data() {
        return {
            // 近期優惠
            indexPromotionsOptions: {
                autoplay: true,
                autoplaySpeed: 5000,
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                adaptiveHeight: true,
                // arrows: false,
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
            indexPromotions: [
                {
                    title: `鑽石會員年度回饋`,
                    promotions: `0.1`,
                    deadline: `2021/01/07 23:59`,
                },
                {
                    title: `契約成功扣滿900次回饋(90次)`,
                    promotions: `0.1`,
                    deadline: `2021/01/07 23:59`,
                },
                {
                    title: `第四季精選優惠`,
                    promotions: `0.15`,
                    deadline: `2021/01/07 23:59`,
                },
            ],

            // ----- 最新公告
            indexNewsOptions: {
                autoplay: false,
                autoplaySpeed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                adaptiveHeight: true,
                arrows: true,
                infinite: true,
            },
            indexNews: [
                {
                    tag: `最新活動`,
                    title: `「富蘭克林華美AI新科技基金」預購好康活動開跑！`,
                    content: `  <div>
                                    <p>&lt;活動1&gt;網頁簽到紅利點數大方送</p>
                                    <ul>
                                        <li>簽到期間：即日起~2020/11/30</li>
                                        <li>於活動網站完整輸入資料並完成簽到即取得紅利點數3000點。</li>
                                        <li><a href="https://event.franklin.com.tw/ai-tech-equity-fund/index.html" target="_blank" style="box-shadow: 0 1px">看詳細規則</a></li>
                                    </ul>
                                    <p>&lt;活動2&gt;申購滿額紅利點數加碼送</p>
                                    <ul>
                                        <li>申購滿額累點期間：2020/11/2~2020/11/30</li>
                                        <li>
                                            於專屬下單頁單筆新申購達以下金額級距(含等值外幣)，可得對應紅利點數，每人每級距點數限領乙次。
                                            <table class="table table-sm table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>單筆申購達以下金額</th>
                                                        <th>送紅利點數</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style="vertical-align: middle">NTD 20萬元</td>
                                                        <td>2,000點</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align: middle">NTD 50萬元</td>
                                                        <td>4,000點</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align: middle">NTD 100萬元</td>
                                                        <td>6,000點</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p>
                                                【註】<br />
                                                (1) 本表依台幣金額列示，其他幣別兌換比例分別為：美元*40、人民幣*5、南非幣*4<br />
                                                (2) 紅利點數可全額折抵手續費，使用規則請參考<a href="https://event.franklin.com.tw/latest-offers/bonus.html" target="_blank">紅利點數折抵攻略</a>
                                            </p>
                                        </li>
                                        <li>
                                            <a href="/C2020_11_IPO/Home" style="box-shadow: 0 1px">下單拿紅利</a>
                                        </li>
                                    </ul>
                                </div>`,
                },
                {
                    tag: `會員好康`,
                    title: `見面禮：開戶即得定期定額限時0元優惠！`,
                    content: `  <div>
                                    <ul>
                                        <li>2020/10/1~2021/1/7完成國民e帳戶開戶，即得1筆定期定額手續費0元限時*優惠！優惠使用期限從優惠入帳隔日起算60天(含假日)**。</li>
                                    </ul>
                                    <p style="padding-left: 30px;">
                                        *見面禮1筆定期定額優惠，手續費第1-24次扣款享0元優惠，第25次起享0.1%優惠，不限基金。<br>
                                        **開戶並核印完成隔日凌晨匯入優惠，匯入優惠隔日起算60天內(含假日)。<br>
                                        【註】本方案取得之優惠國民理財機器人交易專區不適用
                                    </p>
                                </div>`,
                },
                {
                    tag: `訊息公告`,
                    title: `什麼！？最低可以折抵至０元！更優的紅利點數機制上線囉 `,
                    content: `  <div>
                                    <p>
                                        好消息！即日起於【國民e帳戶】一般交易專區使用紅利點數，1點折1元申購手續費，最低可折抵到<span style="color:#ff0000;"><strong>0</strong><strong>元</strong></span><span style="color:#000000;">，</span>欲了解更多紅利點數累積與使用方式，請至 <a href="https://event.franklin.com.tw/latest-offers/bonus.html">紅利點數折抵攻略</a>詳閱相關規定。<br>
                                    </p>
                                </div>`,
                },
            ],

            // pieChart
            pieChartData: [
                {
                    name: "債券型",
                    y: 29.9,
                    // sliced: true,
                    // selected: true
                },
                {
                    name: "新興市場",
                    y: 14.0,
                },
                {
                    name: "單一國家",
                    y: 10.0,
                },
                {
                    name: "全球股票",
                    y: 2.1,
                },
                {
                    name: "產業型",
                    y: 2.6,
                },
                {
                    name: "美國股票",
                    y: 5.2,
                },
                {
                    name: "平衡型",
                    y: 6.2,
                },
                {
                    name: "歐洲股票",
                    y: 10.0,
                },
                {
                    name: "投信基金",
                    y: 10.0,
                },
                {
                    name: "美盛基金",
                    y: 10.0,
                },
            ],
            pieChartColors: ["#005598", "#007cbb", "#00A0DC", "#5FC0EB", "#A5D7F5", "#7abb93", "#4E9D2D", "#82BC00", "#AAC671", "#578f84"],

            // 投資人須知
            informationForInvestors: false,

            // 合計投資損益
            fundListSetting: {
                minWidth: "600px",
                pcShowQty: {
                    base: "4", // 預設
                    xxl: "4", // 1599px~1400px
                    xl: "4", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "3", // 767px~360px
                    xs: "3", // 359px以下
                },
            },
        };
    },
    template: ` <div>
                    <el-row :gutter="24" class="margin-top-15 margin-top-md-25">
                        <el-col :xl="12" class="margin-bottom-xxl-25">
                            <div class="indexProfitLossQuery">
                                <el-card>
                                    <h2 class="tit-type2" title="合計投資損益">
                                        合計投資損益
                                        <span class="remark">
                                            (參考淨值日 2021/05/28)
                                        </span>
                                    </h2>
                                    <div class="fundList-infoItem" 
                                        v-for="(item, index) in $root.$data.profitLossQuery"
                                        :key="index"
                                        :class="[
                                            fundListSetting.pcShowQty.base != undefined ? 'baseShow-'+ fundListSetting.pcShowQty.base : '',
                                            fundListSetting.pcShowQty.xxl != undefined ? 'xxlShow-'+ fundListSetting.pcShowQty.xxl : '',
                                            fundListSetting.pcShowQty.xl != undefined ? 'xlShow-'+ fundListSetting.pcShowQty.xl : '',
                                            fundListSetting.pcShowQty.lg != undefined ? 'lgShow-'+ fundListSetting.pcShowQty.lg : '',
                                            fundListSetting.pcShowQty.md != undefined ? 'mdShow-'+ fundListSetting.pcShowQty.md : '',
                                            fundListSetting.pcShowQty.sm != undefined ? 'smShow-'+ fundListSetting.pcShowQty.sm : '',
                                            fundListSetting.pcShowQty.xs != undefined ? 'xsShow-'+ fundListSetting.pcShowQty.xs : '',
                                            item.noInfo ? 'noInfo' : '',
                                        ]">
                                        <table>
                                            <tr class="head">
                                                <td>交易幣別</td>
                                                <td>總投資成本</td>
                                                <td>未實現損益</td>
                                                <td>累積配現金額</td>
                                                <td>含息報酬率</td>
                                                <td>總投資市值</td>
                                                <td>不含息報酬率</td>
                                                <td rowspan="2" width="115" style="display: table-cell;">
                                                    <el-popover
                                                        placement="top-start"
                                                        width="155"
                                                        trigger="hover">
                                                        <template v-slot="content">
                                                            <div class="fundList-popover"
                                                                :class="[
                                                                    fundListSetting.pcShowQty.base != undefined ? 'baseShow-'+ fundListSetting.pcShowQty.base : '',
                                                                    fundListSetting.pcShowQty.xxl != undefined ? 'xxlShow-'+ fundListSetting.pcShowQty.xxl : '',
                                                                    fundListSetting.pcShowQty.xl != undefined ? 'xlShow-'+ fundListSetting.pcShowQty.xl : '',
                                                                    fundListSetting.pcShowQty.lg != undefined ? 'lgShow-'+ fundListSetting.pcShowQty.lg : '',
                                                                    fundListSetting.pcShowQty.md != undefined ? 'mdShow-'+ fundListSetting.pcShowQty.md : '',
                                                                    fundListSetting.pcShowQty.sm != undefined ? 'smShow-'+ fundListSetting.pcShowQty.sm : '',
                                                                    fundListSetting.pcShowQty.xs != undefined ? 'xsShow-'+ fundListSetting.pcShowQty.xs : '',
                                                                ]">
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>交易幣別：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.currency}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>總投資成本：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.totalInvestmentCost}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>未實現損益：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.profitAndLoss}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>累積配現金額：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.accumulatedAmount}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>含息報酬率：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.rateOfReturn}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>總投資市值：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.totalInvestmentMarketValue}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div class="popoverContent">
                                                                    <p>
                                                                        <b>不含息報酬率：</b>
                                                                        <br/>
                                                                        <span>
                                                                            {{item.notIncludeInterestRateOfReturn}}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <div slot="reference">
                                                            <el-button round class="sBtn">更多資訊</el-button>
                                                        </div>
                                                    </el-popover>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <b>{{item.currency}}</b>
                                                </td>
                                                <td>
                                                    {{item.totalInvestmentCost}}
                                                </td>
                                                <td>
                                                    {{item.profitAndLoss}}
                                                </td>
                                                <td>
                                                    {{item.accumulatedAmount}}
                                                </td>
                                                <td>
                                                    {{item.rateOfReturn}}
                                                </td>
                                                <td>
                                                    <b>{{item.totalInvestmentMarketValue}}</b>
                                                </td>
                                                <td>
                                                    {{item.notIncludeInterestRateOfReturn}}
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </el-card>
                                <div class="fundList-bottom">
                                    <div class="clearfix">
                                        <el-button
                                            round
                                            class="sBtn indexProfitLossQuery-moreBtn"
                                            plain
                                            type="secondary"
                                            @click="$router.push('/profitLossQuery/byFundId')"
                                            @click.prevent="$scrollTo('body')">
                                            詳細資訊
                                        </el-button>
                                        <div class="fundList-warning">
                                            <i class="fas fa-exclamation-circle"></i> 參考報酬率之計算包含已發放之現金分配【配現】金額。
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                        <el-col :xl="12">
                            <!--div class="indexPieChart"-->
                                <el-card class="indexPieChart">
                                    <div id="indexPieChart-chart" class="indexPieChart-chart"></div>
                                    <picture>
                                        <source media="(max-width: 767px)" srcset="images/indexPieChart-m.svg" />
                                        <img src="images/indexPieChart.svg" alt="投資比重" class="indexPieChart-chart" v-show="false"/>
                                    </picture>
                                    <div class="indexPieChart-table">
                                        <el-row :gutter="20" v-for="(item, index) in pieChartData" :key="index">
                                            <el-col :span="12">
                                                <div class="indexPieChart-table-category">
                                                    {{item.name}}
                                                </div>
                                            </el-col>
                                            <el-col :span="12">
                                                <div class="indexPieChart-table-color"
                                                    :style="{
                                                        'background': pieChartColors[index],
                                                        'width': item.y + '%'
                                                    }">
                                                </div>
                                                <div class="indexPieChart-table-percentage">
                                                    {{item.y}}%
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-card>
                            <!--/div-->
                        </el-col>
                    </el-row>
                    <div class="indexPromotions" v-if="$root.$data.dsListVal == '0'">
                        <el-card>
                            <h2 class="tit-type2" title="近期優惠">
                                近期優惠
                            </h2>
                            <slick
                                ref="indexPromotions"
                                :options="indexPromotionsOptions"
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
                                <div v-for="(item, index) in indexPromotions" :key="index">
                                    <div class="indexPromotions-item">
                                        <el-card shadow="never">
                                            <div class="indexPromotions-item-tit">
                                                {{item.title}}
                                            </div>
                                            <div class="indexPromotions-item-promotions">
                                                <b class="focus">{{item.promotions}}</b>%
                                            </div>
                                            <div class="indexPromotions-item-bottom">
                                                <div class="indexPromotions-item-deadline">
                                                    下單期限<br/>{{item.deadline}}
                                                </div>
                                            </div>
                                        </el-card>
                                    </div>
                                </div>
                                <div v-if="indexPromotions.length < 4" v-for="item in (4- indexPromotions.length)">
                                    <div class="indexPromotions-item stayTuned">
                                        <el-card shadow="never">
                                            <div class="indexPromotions-item-tit">
                                                敬請期待...
                                            </div>
                                        </el-card>
                                    </div>
                                </div>
                            </slick>
                        </el-card>
                    </div>
                    <indexAlertCard v-if="$root.$data.dsListVal == '0'">
                        <template v-slot:title>
                            您的風險屬性評估<br class="hidden-sm-and-up"/>已過期!
                        </template>
                        <template v-slot:text>
                            <p>
                                有效期限：2020/07/30，
                                <br class="hidden-xl-only"/>未完成前將無法新申購與轉換基金，僅能贖回與部分變更您的定期定額契約。
                            </p>
                        </template>
                        <template v-slot:btnArea>
                            <el-button type="danger" class="sBtn" round>重新進行風險屬性評估</el-button>
                        </template>
                    </indexAlertCard>
                    <indexAlertCard v-if="$root.$data.dsListVal == '0'">
                        <template v-slot:title>
                            您所簽署的W-8BEN<br class="hidden-sm-and-up"/>三年期限已到期!
                        </template>
                        <template v-slot:text>
                            <p>
                                建議您立即更新此份文件，以保障您的交易權益!
                            </p>
                        </template>
                        <template v-slot:btnArea>
                            <el-button type="danger" class="sBtn" round @click="$router.push('/USFundApply'); $scrollTo('body')">
                                更新W-8BEN，重新簽署文件
                            </el-button>
                            <el-tooltip effect="dark" placement="top-start">
                                <template v-slot:content>
                                    本公司為配合美國稅務機構要求，每三年需請您重新簽署「Form W-8BEN」，<br class="hidden-xs-only"/>如您希望繼續申購/持有美國註冊基金，或使用智能理財專區服務，<br class="hidden-xs-only"/>請您盡快重新簽署此文件並郵寄回本公司辦理，以保障您的交易權益。
                                </template>
                                <el-button type="text" class="sBtn">
                                    未重新簽署會有哪些影響?
                                </el-button>
                            </el-tooltip>
                        </template>
                    </indexAlertCard>
                    <indexAlertCard>
                        <template v-slot:title>
                            您的密碼<br class="hidden-sm-and-up"/>已經超過半年未更新!
                        </template>
                        <template v-slot:text>
                            <p>
                                建議您立即變更，以保障使用安全!
                            </p>
                        </template>
                        <template v-slot:btnArea>
                            <el-button type="danger" class="sBtn" round @click="$router.push('/ChangeLoginPwd'); $scrollTo('body')">變更登入密碼</el-button>
                            <el-button type="secondary" class="sBtn" round plain>暫不變更，半年後再提醒</el-button>
                        </template>
                    </indexAlertCard>
                    <indexAlertCard v-if="$root.$data.dsListVal == '0'">
                        <template v-slot:title>
                            您尚未進行CRS文件填寫
                        </template>
                        <template v-slot:text>
                            <p>
                                為配合主管機關規定，需請您協助填寫CRS文件。
                            </p>
                        </template>
                        <template v-slot:btnArea>
                            <el-button type="danger" class="sBtn" round @click="$router.push('/CRS'); $scrollTo('body')">立即填寫CRS文件</el-button>
                        </template>
                    </indexAlertCard>
                    <div class="indexNews" v-for="(item, index) in indexNews" :key="index">
                        <el-card>
                            <slick
                                ref="indexNews1"
                                :options="indexNewsOptions"
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
                                <div v-for="(item2, index) in 5">
                                    <div class="indexNews-head">
                                        <div class="indexNews-sortName">{{item.tag}}</div>
                                        <h3 class="indexNews-tit" :title="item.title">
                                            {{item.title}}
                                        </h3>
                                    </div>
                                    <div class="indexNews-content" v-html="item.content">
                                        
                                    </div>
                                </div>
                            </slick>
                        </el-card>
                    </div>
                    <div class="indexNews type2">
                        <el-card>
                            <div class="indexNews-head">
                                <div class="indexNews-sortName">
                                    <i class="fas fa-bell"></i>
                                </div>
                                <h3 class="indexNews-tit" title="重要交易提醒">
                                    重要交易提醒
                                </h3>
                            </div>
                            <div class="indexNews-content">
                                <p>
                                    本公司不接受現金申購，若您申請國民e帳戶，本公司僅接受以本人名義匯款至集保結算所指定之款項收付專戶，或依您授權於集保結算所之款項收付機構或參加全國性繳費（稅）業務之金融機構辦理本人之帳戶扣款。若您透過本公司以本人名義向境外基金公司申請開立帳戶，亦僅接受以本人名義匯出至境外基金機構指定之保管銀行帳號。
                                </p>
                                <p>
                                    為保護您權益，交易及款項請勿委由理財顧問或他人代為處理。申購流程及匯款指示詳見「<el-link type="primary" @click="informationForInvestors = !informationForInvestors">投資人須知</el-link>」
                                </p>
                                <el-collapse-transition>
                                    <div class="margin-bottom-15" v-show="informationForInvestors">
                                        <el-button round type="primary" plain class="sBtn" @click="this.window.open('https://www.franklin.com.tw/Upload/BasicInformation/FTIF.pdf', '_blank')">
                                            盧森堡註冊基金投資人須知<i class="el-icon-arrow-right el-icon--right" v-if="$root.$data.windowWidth > 359"></i>
                                        </el-button>
                                        <el-button round type="primary" plain class="sBtn" @click="this.window.open('https://www.franklin.com.tw/Upload/BasicInformation/us.pdf', '_blank')">
                                            美國註冊基金投資人須知<i class="el-icon-arrow-right el-icon--right" v-if="$root.$data.windowWidth > 359"></i>
                                        </el-button>
                                        <el-button round type="primary" plain class="sBtn" @click="this.window.open('https://www.franklin.com.tw/Upload/BasicInformation/LMGF.pdf', '_blank')">
                                            愛爾蘭註冊基金投資人須知<i class="el-icon-arrow-right el-icon--right" v-if="$root.$data.windowWidth > 359"></i>
                                        </el-button>
                                    </div>
                                </el-collapse-transition>
                            </div>
                        </el-card>
                    </div>
                </div>`,
    components: {
        slick: slick,
        indexAlertCard: indexAlertCard,
    },
    mounted() {
        Highcharts.chart("indexPieChart-chart", {
            chart: {
                plotBackgroundColor: null,
                // plotBorderWidth: null,
                // plotShadow: false,
                type: "pie",
                height: 400,
            },
            credits: {
                enabled: false,
            },
            title: {
                text: "<b>投資比重</b>",
                style: {
                    fontFamily: "Arial, 'Noto Sans TC', sans-serif",
                    fontSize: "20px",
                },
                verticalAlign: "middle",
            },
            tooltip: {
                // pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
                pointFormat: "<b>{point.percentage:.1f}%</b>",
                style: {
                    fontFamily: "Arial, 'Noto Sans TC', sans-serif",
                    fontSize: "16px",
                },
            },
            accessibility: {
                point: {
                    valueSuffix: "%",
                },
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: true,
                        // format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                        format: "{point.name}<br/><b>{point.percentage:.1f} %</b>",
                        connectorShape: "crookedLine",
                        crookDistance: "70%",
                        // distance: -30,
                        style: {
                            fontFamily: "Arial, 'Noto Sans TC', sans-serif",
                            fontSize: "18px",
                            fontWeight: "normal",
                        },
                    },
                    innerSize: "50%",
                    center: ["50%", "50%"],
                    size: "90%",
                },
            },
            series: [
                {
                    name: "投資比重",
                    colorByPoint: true,
                    data: this.pieChartData,
                },
            ],
            // colors: ["#005598", "#5fc0eb", "#00a0dc", "#a5d7f5", "#aac671", "#4e9d2d", "#82bc00",],
            colors: this.pieChartColors,
            responsive: {
                rules: [
                    // {
                    //     condition: {
                    //         maxWidth: 500,
                    //     },
                    //     chartOptions: {
                    //         plotOptions: {
                    //             pie: {
                    //                 dataLabels: {
                    //                     distance: 10,
                    //                     style: {
                    //                         fontSize: "16px",
                    //                     },
                    //                 },
                    //                 size: "60%",
                    //                 innerSize: "60%",
                    //             },
                    //         },
                    //     },
                    // },
                    {
                        condition: {
                            maxWidth: 428,
                        },
                        chartOptions: {
                            chart: {
                                height: 240,
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        distance: 5,
                                        format: "{point.name}",
                                        style: {
                                            fontSize: "13px",
                                        },
                                    },
                                    size: "85%",
                                    innerSize: "65%",
                                },
                            },
                        },
                    },
                ],
            },
        });
    },
};
