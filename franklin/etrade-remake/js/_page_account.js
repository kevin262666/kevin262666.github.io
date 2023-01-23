// ========= 帳戶狀態 ==============================================================================================================================
const Status = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `帳戶狀態`,
            },

            itemTitWidth: "105px",
            accountInfo: [
                {
                    tit: "開戶進度",
                    content: `<b>開戶完成</b> <i class="fas fa-check-circle text-green"></i>`,
                    alone: this.$root.$data.windowWidth > 1599 ? true : false,
                },
                {
                    tit: "申請日期",
                    content: "2016/09/29",
                    alone: false,
                },
                {
                    tit: "開戶完成日期",
                    content: "2016/09/29",
                    alone: false,
                },
                {
                    tit: "收件狀況",
                    content: "已完成收件",
                    alone: false,
                },
                {
                    tit: "交易密碼狀態",
                    content: "正常",
                    alone: false,
                },
            ],
            verificationInfo: [
                {
                    tit: "帳號別",
                    content: `<b>台幣帳戶</b>`,
                    alone: false,
                },
                {
                    tit: "帳號",
                    content: "土地銀行 9600550010***",
                    alone: false,
                },
                {
                    tit: "進度",
                    content: "銀行核印完成",
                    alone: false,
                },
                {
                    tit: "結果",
                    content: "核印成功",
                    alone: false,
                },
            ],
            verificationInfo2: [
                {
                    tit: "帳號別",
                    content: `<b>綜合外幣帳戶</b>`,
                    alone: false,
                },
                {
                    tit: "帳號",
                    content: "永豐銀行 00065220000***",
                    alone: false,
                },
                {
                    tit: "進度",
                    content: "銀行核印完成",
                    alone: false,
                },
                {
                    tit: "結果",
                    content: "核印成功",
                    alone: false,
                },
            ],
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item"
                                     v-for="(item, index) in accountInfo"
                                     :key="index"
                                     :class="{'columnSpan': item.alone}"
                                >
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                        XXX
                                    </div>
                                    <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                        XXX
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <el-card class="tradingProcess-card margin-top-30">
                        <h2 class="tit-type2" title="核印狀態">
                            核印狀態
                        </h2>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item"
                                     v-for="(item, index) in verificationInfo"
                                     :key="index"
                                >
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                        XXX
                                    </div>
                                    <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                        XXX
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item"
                                     v-for="(item, index) in verificationInfo2"
                                     :key="index"
                                >
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                        XXX
                                    </div>
                                    <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                        XXX
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

// ========= 個人基本資料 ==============================================================================================================================
const PersonalData = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `個人基本資料`,
            },

            itemTitWidth: "105px",
            accountInfo: [
                {
                    tit: "姓名",
                    content: `陳涵風`,
                    alone: false,
                },
                {
                    tit: "英文姓名",
                    content: "WU WUN-NAN",
                    alone: false,
                },
                {
                    tit: "開戶日期",
                    content: "2016/09/29",
                    alone: false,
                },
                {
                    tit: "身分證字號",
                    content: "D268024***",
                    alone: false,
                },
                {
                    tit: "出生日期",
                    content: "1991/08/**",
                    alone: false,
                },
            ],

            modifyType: false,
            form: {
                email: 'franklin.ectest@gmail.com',
                tel: '0928123221',
                OF_TEL_AREA: '02',
                OF_TEL: '27810088',
                OF_TEL_Ext: '777',

                HM_TEL_AREA: '02',
                HM_TEL: '27810088',
                HM_TEL_Ext: '',

                city: '0',
                district: '1',
                addr: '中正路1989號',

                MAIL_ADDR_CITY_E: 'Taipei City',
                MAIL_ADDR_AREA_E: 'Zhongshan Dist.',
                MAIL_ADDR_REST_E: 'No.1989, Zhongzheng Rd. Zhongshan Dist. Taipei City',
                transactionPassword: "",
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item"
                                     v-for="(item, index) in accountInfo"
                                     :key="index"
                                     :class="{'columnSpan': item.alone}"
                                >
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                        XXX
                                    </div>
                                    <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                        XXX
                                    </div>
                                </div>
                                
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        風險屬性
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        積極
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        投信基金
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-button
                                            round
                                            plain
                                            class="sBtn baseFontSize"
                                            type="primary"
                                            @click="$router.push('/Sign'); $scrollTo('body')">
                                            申請申購投信基金
                                        </el-button>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        美國註冊基金
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-button
                                            round
                                            plain
                                            class="sBtn baseFontSize"
                                            type="primary"
                                            @click="$router.push('/USFundApply'); $scrollTo('body')">
                                            申請申購美國註冊基金
                                        </el-button>
                                        <!--可申購-->
                                        <br/>
                                        <el-link
                                            type="primary"
                                        >
                                            預扣稅款資料1042-S <small>(無需申報)</small> <i class="fas fa-file-download"></i>
                                        </el-link>
                                        <br/>
                                        <small>(1042-S文件僅供參考，如需正本請來電客服0800-885-888索取)</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款帳號
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <span>
                                            <b>台幣帳戶：</b>
                                            <br class="hidden-sm-and-up"/>
                                            005 土地銀行 9600550010***
                                        </span>
                                        <el-divider direction="vertical" class="hidden-sm-and-down"></el-divider>
                                        <div class="hidden-md-and-up margin-top-5"></div>
                                        <span>
                                            <b>綜合外幣帳戶：</b>
                                            <br class="hidden-sm-and-up"/>
                                            807 永豐銀行 00065220000***
                                        </span>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        贖回帳號
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <span>
                                            <b>台幣帳戶：</b>
                                            <br class="hidden-sm-and-up"/>
                                            005 土地銀行 9600550010***
                                        </span>
                                        <el-divider direction="vertical" class="hidden-sm-and-down"></el-divider>
                                        <div class="hidden-md-and-up margin-top-5"></div>
                                        <span>
                                            <b>綜合外幣帳戶：</b>
                                            <br class="hidden-sm-and-up"/>
                                            807 永豐銀行 00065220000***
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    
                    <el-form :model="form" ref="form">
                        <el-card class="tradingProcess-card margin-top-30">
                            <h2 id="contactInfo" class="tit-type2" title="通訊資料">
                                通訊資料
                            </h2>
                            <div class="tradingProcess-card-content">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            通訊地址
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <template v-if="!modifyType">
                                                104 - 台北市中山區********
                                            </template>
                                            <template v-else>
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="city"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.city" placeholder="請選擇">
                                                                <el-option label="台北市" value="0"></el-option>
                                                                <el-option label="新北市" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="district"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.district" placeholder="請選擇">
                                                                <el-option label="中正區" value="0"></el-option>
                                                                <el-option label="中山區" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="addr"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.addr"
                                                                placeholder="街道、門牌號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            英文通訊地址
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <template v-if="!modifyType">
                                                ************ngzheng Rd. Zhongshan Dist. Taipei City, Zhongshan Dist., Taipei City
                                            </template>
                                            <template v-else>
                                                <el-button
                                                    round
                                                    plain
                                                    type="primary"
                                                    class="sBtn baseFontSize margin-top-0 margin-left-0 margin-bottom-10"
                                                >
                                                    中文通訊地址英譯 <i class="el-icon-refresh el-icon--right"></i>
                                                </el-button>
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_CITY_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入縣市'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_CITY_E"
                                                                placeholder="縣市">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入市區鎮'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_AREA_E"
                                                                placeholder="市區鎮">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_REST_E"
                                                                placeholder="街道、門牌號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-alert
                                                    class="borderStyle"
                                                    type="warning"
                                                    show-icon
                                                    :closable="false"
                                                >
                                                    <slot name="description">
                                                        如您未有留存英文地址，或更新通訊地址時欲同步更新英文通訊地址，建議您點選上方【地址英譯】取得程式翻譯，如翻譯有誤或不完全者，亦可使用
                                                        <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.post.gov.tw/post/internet/Postal/index.jsp?ID=207" target="_blank">中文地址英譯查詢</el-link>
                                                        確認後填入
                                                    </slot>
                                                </el-alert>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content">
                                <div class="tradingProcess-card-content-item-area"
                                     :class="{'columnCount-3 columnCount-xxl-2 columnCount-md-1': modifyType}"
                                >
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            電子郵件信箱
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <template v-if="!modifyType">
                                                ***nklin.ectest@gmail.com
                                            </template>
                                            <el-form-item
                                                v-else
                                                prop="email"
                                                :rules="[
                                                    { required: true, message: '請輸入電子郵件信箱'},
                                                ]"
                                            >
                                                <el-input
                                                    v-model="form.email"
                                                    placeholder="請輸入您的電子郵件信箱">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            行動電話
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <template v-if="!modifyType">
                                                0928***221
                                            </template>
                                            <el-form-item
                                                v-else
                                                prop="tel"
                                                :rules="[
                                                    { required: true, message: '請輸入行動電話'},
                                                ]"
                                            >
                                                <el-input
                                                    v-model="form.tel"
                                                    placeholder="請輸入您的行動電話">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            連絡電話
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <template v-if="!modifyType">
                                                日間：{{form.OF_TEL_AREA}} <template v-if="form.OF_TEL_AREA != ''">-</template> {{form.OF_TEL}} <template v-if="form.OF_TEL_Ext != ''">#</template>{{form.OF_TEL_Ext}}
                                                <br/>
                                                夜間：{{form.HM_TEL_AREA}} <template v-if="form.HM_TEL_AREA != ''">-</template> {{form.HM_TEL}} <template v-if="form.HM_TEL_Ext != ''">#</template>{{form.HM_TEL_Ext}}
                                            </template>
                                            <template v-else>
                                                日間：
                                                <el-row :gutter="10" class="margin-bottom-10">
                                                    <el-col :span="7">
                                                        <el-form-item
                                                            prop="OF_TEL_AREA"
                                                            :rules="[
                                                                { required: true, message: '請輸入區碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.OF_TEL_AREA"
                                                                placeholder="區碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="10">
                                                        <el-form-item
                                                            prop="OF_TEL"
                                                            :rules="[
                                                                { required: true, message: '請輸入電話號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.OF_TEL"
                                                                placeholder="電話號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="7">
                                                        <el-input
                                                            v-model="form.OF_TEL_Ext"
                                                            placeholder="分機">
                                                        </el-input>
                                                    </el-col>
                                                </el-row>
                                                夜間：
                                                <el-row :gutter="10">
                                                    <el-col :span="7">
                                                        <el-form-item
                                                            prop="HM_TEL_AREA"
                                                            :rules="[
                                                                { required: true, message: '請輸入區碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.HM_TEL_AREA"
                                                                placeholder="區碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="10">
                                                        <el-form-item
                                                            prop="HM_TEL"
                                                            :rules="[
                                                                { required: true, message: '請輸入電話號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.HM_TEL"
                                                                placeholder="電話號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="7">
                                                        <el-input
                                                            v-model="form.HM_TEL_Ext"
                                                            placeholder="分機">
                                                        </el-input>
                                                    </el-col>
                                                </el-row>
                                            </template>
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
                        </el-card>
                        <div class="tradingProcess-btnArea">
                            <el-button
                                round
                                type="primary"
                                @click="modifyType = !modifyType; $scrollTo('#contactInfo')"
                            >
                                <template v-if="!modifyType">
                                    修改通訊資料
                                </template>
                                <template v-else>
                                    確認修改
                                </template>
                            </el-button>
                            <el-button
                                v-if="modifyType"
                                type="text"
                                @click="modifyType = false"
                            >
                                取消修改
                            </el-button>
                        </div>
                        <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                    </el-form>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    線上供修改之電子郵件信箱、行動電話、連絡電話，以及中英文通訊地址，將於修改後立即生效。
                                </li>
                                <li>
                                    除上述通訊資料外，如需變更中英文姓名、身分證字號、中英文戶籍地址/居住地址、印鑑、扣款帳號、或贖回帳號等其他基本資料，須以書面辦理，表單下載與辦理方法請見
                                    <el-link type="primary" icon="fas fa-external-link-alt" @click="$router.push('/PersonalDataModify')">【受益人資料變更說明】</el-link>
                                    頁說明。紙本辦理受益人資料變更者，以客服收件時間為準，請特別留意。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過
                                    <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link>
                                    或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                                <li>
                                    美國註冊基金預扣稅款資料「Form1042-S(無需申報)」及「海外各類所得資料」每年4月~6月可登入「國民e帳戶」自行下載參考，如逾下載期間欲索取相關資料，請致電富蘭克林國民理財專線0800-885-888。
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

// ========= 受益人資料變更說明 ==============================================================================================================================
const PersonalDataModify = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `受益人資料變更說明`,
            },
            stepsDirection: this.$root.$data.windowWidth > 991 ? 'horizontal' : 'vertical',

            editableTabsValue: "0",
            tabPosition: "top",
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <h2 class="tit-type2" title="資料變更流程">
                            資料變更流程
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-steps
                                class="elStepsType2"
                                :direction="stepsDirection"
                            >
                                <el-step>
                                    <template v-slot:title>
                                        步驟1
                                    </template>
                                    <template v-slot:description>
                                        下載與列印申請表或來電客服索取
                                        <el-link type="primary" icon="fas fa-external-link-alt" href="https://wt.franklin.com.tw:8081/Content/doc/FT-A-6-1受益人基本資料變更申請書.pdf" target="_blank">受益人基本資料變更申請書</el-link>
                                    </template>
                                </el-step>
                                <el-step>
                                    <template v-slot:title>
                                        步驟2
                                    </template>
                                    <template v-slot:description>
                                        填妥基本資料與欲變更相關欄位
                                        <b>請加蓋原留印鑑</b>
                                    </template>
                                </el-step>
                                <el-step>
                                    <template v-slot:title>
                                        步驟3
                                    </template>
                                    <template v-slot:description>
                                        檢附所需文件，寄回<b>富蘭克林證券投顧 客戶服務部辦理</b>
                                    </template>
                                </el-step>
                            </el-steps>
                        </div>
                    </el-card>

                    <el-card class="tradingProcess-card margin-top-30">
                        <h2 title="變更項目說明" class="tit-type2">
                            變更項目說明
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-tabs
                                v-model="editableTabsValue"
                                :tab-position="tabPosition"
                            >
                                <el-tab-pane
                                    label="帳戶變更"
                                    name="0"
                                    lazy
                                >
                                    <section>
                                        <p>
                                            <b>扣款帳號變更或新增</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請根據您欲變更的扣款帳號銀行別下載表單
                                                <br/>
                                                <ol>
                                                    <li>
                                                        華南、兆豐、台新、永豐、中國信託、台北富邦、第一、國泰世華、彰化(只接受台北富邦、彰化、第一銀行為台外幣相同之帳號)
                                                        <br/>
                                                        <el-button
                                                            plain
                                                            class="sBtn baseFontSize margin-left-0"
                                                            type="primary"
                                                            @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/FT-A-6-1%e5%8f%97%e7%9b%8a%e4%ba%ba%e5%9f%ba%e6%9c%ac%e8%b3%87%e6%96%99%e8%ae%8a%e6%9b%b4%e7%94%b3%e8%ab%8b%e6%9b%b8.pdf')"
                                                        >
                                                            受益人基本資料變更申請書 <i class="fas fa-file-download"></i>
                                                        </el-button>
                                                        <el-button
                                                            plain
                                                            class="sBtn baseFontSize margin-left-0"
                                                            type="primary"
                                                            @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/%e6%ac%be%e9%a0%85%e6%94%b6%e4%bb%98%e9%8a%80%e8%a1%8c%e6%8e%88%e6%ac%8a%e8%bd%89%e5%b8%b3%e7%b9%b3%e6%ac%be%e7%94%b3%e8%ab%8b%e6%9b%b8.pdf')"
                                                        >
                                                            基金扣款轉帳授權書
                                                            (款項收付銀行授權轉帳繳款申請書) <i class="fas fa-file-download"></i>
                                                        </el-button>
                                                    </li>
                                                    <li>
                                                        郵局
                                                        <br/>
                                                        <el-button
                                                            plain
                                                            class="sBtn baseFontSize margin-left-0"
                                                            type="primary"
                                                            @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/FT-A-6-1%e5%8f%97%e7%9b%8a%e4%ba%ba%e5%9f%ba%e6%9c%ac%e8%b3%87%e6%96%99%e8%ae%8a%e6%9b%b4%e7%94%b3%e8%ab%8b%e6%9b%b8.pdf')"
                                                        >
                                                            受益人基本資料變更申請書 <i class="fas fa-file-download"></i>
                                                        </el-button>
                                                        <el-button
                                                            plain
                                                            class="sBtn baseFontSize margin-left-0"
                                                            type="primary"
                                                            @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/%e5%9f%ba%e9%87%91%e6%89%a3%e6%ac%be%e8%bd%89%e5%b8%b3%e6%8e%88%e6%ac%8a%e6%9b%b8(%e9%83%b5%e5%b1%80%e5%b0%88%e7%94%a8).pdf')"
                                                        >
                                                            基金扣款轉帳授權書
                                                            (郵局專用) <i class="fas fa-file-download"></i>
                                                        </el-button>
                                                    </li>
                                                    <li>
                                                        非屬上述十家銀行之全國性繳費(稅)業務扣款金融機構(
                                                        <el-link type="primary" icon="fas fa-external-link-alt" href="https://announce.fundclear.com.tw/MOPSFundWeb/R02.jsp" target="_blank">
                                                            適用金融機構查詢
                                                        </el-link>
                                                        )
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                適用金融機構依集保最新業務情形為準。
                                                <br/>
                                                <el-button
                                                    plain
                                                    class="sBtn baseFontSize margin-left-0"
                                                    type="primary"
                                                    @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/FT-A-6-1%e5%8f%97%e7%9b%8a%e4%ba%ba%e5%9f%ba%e6%9c%ac%e8%b3%87%e6%96%99%e8%ae%8a%e6%9b%b4%e7%94%b3%e8%ab%8b%e6%9b%b8.pdf')"
                                                >
                                                    受益人基本資料變更申請書 <i class="fas fa-file-download"></i>
                                                </el-button>
                                                <el-button
                                                    plain
                                                    class="sBtn baseFontSize margin-left-0"
                                                    type="primary"
                                                    @click="this.window.open('https://wt.franklin.com.tw:8081/Content/doc/%e5%85%a8%e5%9c%8b%e6%80%a7%e7%b9%b3%e8%b2%bb(%e7%a8%85)%e6%a5%ad%e5%8b%99%e6%8e%88%e6%ac%8a%e8%bd%89%e5%b8%b3%e7%b9%b3%e6%ac%be%e7%94%b3%e8%ab%8b%e6%9b%b8.pdf')"
                                                >
                                                    基金扣款轉帳授權書
                                                    (全國性繳費(稅)業務授權轉帳繳款申請書) <i class="fas fa-file-download"></i>
                                                </el-button>
                                            </li>
                                            <li>
                                                變更扣款帳號，請填妥受益人基本資料變更申請書第8項；新增扣款帳號，請填妥受益人基本資料申請書第9項
                                            </li>
                                            <li>
                                                請填妥基金扣款轉帳授權書一式兩頁<b>(請單面列印)</b>
                                            </li>
                                            <li>
                                                請檢附存摺印有帳號資料之封面或封底影本
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>贖回匯款帳戶/收益分配匯款帳戶變更</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第10項
                                            </li>
                                            <li>
                                                請附上存摺印有帳號資料之封面或封底影本
                                            </li>
                                        </ul>
                                    </section>
                                </el-tab-pane>
                                <el-tab-pane
                                    label="其他"
                                    name="1"
                                    lazy
                                >
                                    <section>
                                        <p>
                                            <b>受益人中文姓名</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第12-2項
                                            </li>
                                            <li>
                                                請檢附新身分證正反面影本（未滿十四歲且尚未申請國民身分證須檢附戶口名簿影本，未成年人請加附法定代理人身分證影本）、戶籍謄本一份（核發日期須為三個月內有效之正本）
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>受益人英文姓名</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第12-2項
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>交易確認書與對帳單寄發方式</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第6項
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>戶籍地址</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第5項
                                            </li>
                                            <li>
                                                請檢附身分證正反面影本（未滿十四歲且尚未申請國民身分證須檢附戶口名簿影本，未成年人請加附法定代理人身分證影本）
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>印鑑變更</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第14項
                                            </li>
                                            <li>
                                                申請書加蓋原留印鑑及新印鑑
                                            </li>
                                            <li>
                                                請檢附身分證正反面影本（未滿十四歲且尚未申請國民身分證須檢附戶口名簿影本，未成年人請加附法定代理人身分證影本）
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>印鑑掛失(須同時辦理印鑑變更)</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第15項
                                            </li>
                                            <li>
                                                請檢附戶政事務所核發之新印鑑證明正本（核發日期須為三個月內有效之正本）、身分證正反面影本（未滿十四歲且尚未申請國民身分證須檢附戶口名簿影本，未成年人請加附法定代理人身分證影本）
                                            </li>
                                        </ul>
                                    </section>
                                    <el-divider>
                                        <i class="el-icon-more"></i>
                                    </el-divider>
                                    <section>
                                        <p>
                                            <b>電子交易使用權限</b>
                                        </p>
                                        <ul>
                                            <li>
                                                請填妥受益人基本資料變更申請書第7項
                                            </li>
                                        </ul>
                                    </section>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-card>

                    <div class="tradingProcess-btnArea">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            回上一頁
                        </el-button>
                    </div>

                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    請郵寄至：106台北郵政第53-0665號信箱，富蘭克林證券投顧 客戶服務部。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過
                                    <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link>
                                    或於營業日9：00～18：00撥打免付費客服專線0800-885-888，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

// ========= 線上簽署專區 ==============================================================================================================================
const Sign = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `線上簽署專區`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/Sign/List'"
                            round
                            type="primary"
                            @click="$router.push('/Sign/Complete'); $scrollTo('body')">
                            下一步
                        </el-button>
                        <el-button
                            v-if="$route.path === '/Sign/Complete'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/')">
                            回國民e帳戶
                        </el-button>
                    </div>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

const Sign_List = {
    data() {
        return {
        };
    },
    template: ` <div>
                    <el-card class="tradingProcess-card">
                        <h2 title="選擇簽署項目" class="tit-type2">
                            選擇簽署項目
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="20">
                                <el-col :lg="8" :sm="12">
                                    <el-card shadow="hover" class="sign-optionItem">
                                        <label>
                                            <input type="radio" name="applyType">
                                            <div class="sign-optionItem-fakeCheckbox">
                                                <i class="fas fa-check"></i>
                                            </div>
                                            <div class="sign-optionItem-content">
                                                <div class="sign-optionItem-tit">
                                                    <b>新增境內基金交易權限</b>
                                                </div>
                                            </div>
                                        </label>
                                    </el-card>
                                </el-col>
                                <el-col :lg="8" :sm="12">
                                    <el-card shadow="never" class="sign-optionItem disabled">
                                        <label>
                                            <input type="radio" name="applyType" disabled>
                                            <div class="sign-optionItem-fakeCheckbox">
                                                <i class="fas fa-check"></i>
                                            </div>
                                            <div class="sign-optionItem-content">
                                                <div class="sign-optionItem-tit">
                                                    <b>申請外幣帳戶</b>
                                                </div>
                                                <div class="remark">
                                                    (敬請期待)
                                                </div>
                                            </div>
                                        </label>
                                    </el-card>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </div>`,
    components: {
    },
};

const Sign_Complete = {
    data() {
        return {
        };
    },
    template: ` <div>
                    <el-card class="tradingProcess-card">
                        <div class="tit-type2">
                            <b>
                                受益人基本資料變更申請書已送達本公司，將盡快審核您的申請。
                            </b>
                            <el-button
                                plain
                                class="sBtn baseFontSize margin-left-0"
                                type="primary"
                            >
                                電子簽署文件下載 <i class="fas fa-file-download"></i>
                            </el-button>
                        </div>
                        <el-alert
                            class="borderStyle margin-bottom-20"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                為保護您的個人資料，本文件的開啟密碼為您的身分證字號(英文字母為大寫)
                            </slot>
                        </el-alert>
                    </el-card>
                </div>`,
    components: {
    },
};

// ========= 申購美國註冊基金申請及同意書 ==============================================================================================================================
const USFundApply = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `申購美國註冊基金申請及同意書`,
            },

            itemTitWidth: "105px",

            step: 1,

            form: {
                transactionPassword: "",

                BF_NAME_E_Last: 'WU',
                BF_NAME_E_First: 'WUN-NAN',

                MAIL_ADDR_CITY_E: 'Taipei City',
                MAIL_ADDR_AREA_E: 'Zhongshan Dist.',
                MAIL_ADDR_REST_E: 'No.1989, Zhongzheng Rd. Zhongshan Dist. Taipei City',

                SendWhere: '',

                checked1: [],
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content" v-if="step == 1 || step == 2">
                            <p>
                                歡迎您經由國民e帳戶電子交易平台申購富蘭克林旗下美國註冊基金，在您開戶之際已聲明本人非美國公民、加拿大居民、綠卡持有人、美國稅務居民或美國納稅義務人，本公司為配合美國稅務機構要求：
                            </p>
                            <ul>
                                <li>
                                    若您尚未簽署「Form W-8BEN」：請您簽署「Form W-8BEN」郵寄回本公司辦理，完成後方能申購。<b class="text-red">該文件每三年需重新簽署。</b>
                                </li>
                                <li>
                                    若您已簽署「Form W-8BEN」：請確認或提供以下資料以利相關查核申報作業，完成後即可繼續申購
                                </li>
                            </ul>
                            <p>
                                請輸入交易密碼並確認以下資料。
                            </p>
                            <div id="confirmInfo"></div>
                            <el-alert
                                class="borderStyle"
                                type="warning"
                                show-icon
                                :closable="false"
                            >
                                <slot name="description">
                                    如欲變更個人基本資料，請參考
                                    <el-link type="primary" icon="fas fa-external-link-alt" @click="$router.push('/PersonalDataModify'); $scrollTo('body')" target="_blank">【個人基本資料】</el-link>
                                    頁。
                                </slot>
                            </el-alert>
                        </div>
                        <div class="tradingProcess-card-content" v-if="step == 1">
                            <div class="tradingProcess-card-content-item-area">
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
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <template v-if="step == 2">
                                <div class="tradingProcess-card-content">
                                    <div class="tradingProcess-card-content-item-area">
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                英文姓名
                                            </div>
                                            <div class="tradingProcess-card-content-item-input">
                                                <el-row :gutter="10">
                                                    <el-col :span="10">
                                                        <el-input
                                                            v-model="form.BF_NAME_E_Last"
                                                            placeholder="姓氏"
                                                            readonly>
                                                        </el-input>
                                                    </el-col>
                                                    <el-col :span="14">
                                                        <el-input
                                                            v-model="form.BF_NAME_E_First"
                                                            placeholder="名字"
                                                            readonly>
                                                        </el-input>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                英文通訊地址
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_CITY_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入縣市'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_CITY_E"
                                                                placeholder="縣市"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入市區鎮'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_AREA_E"
                                                                placeholder="市區鎮"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_REST_E"
                                                                placeholder="街道、門牌號碼"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                英文戶籍地址
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_CITY_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入縣市'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_CITY_E"
                                                                placeholder="縣市"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入市區鎮'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_AREA_E"
                                                                placeholder="市區鎮"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_REST_E"
                                                                placeholder="街道、門牌號碼"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-alert
                                                    class="borderStyle"
                                                    type="warning"
                                                    show-icon
                                                    :closable="false"
                                                >
                                                    <slot name="description">
                                                        以上為您原留之英文地址或是中文地址透過程式英譯的結果，請核對是否正確。英文通訊地址僅用於本文件之套印，相關實體文件將使用您留存與本公司的中文通訊地址寄送，請您特別留意。
                                                    </slot>
                                                </el-alert>
                                            </div>
                                        </div>
                                        <el-divider class="columnSpan margin-top-10 margin-bottom-10"></el-divider>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                文件取得方式
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-form-item
                                                    prop="SendWhere"
                                                    :rules="[
                                                        { required: true, message: '請選擇', trigger: 'change' }
                                                    ]"
                                                >
                                                    <el-radio-group v-model="form.SendWhere">
                                                        <el-radio :label="1">自行下載/列印文件</el-radio>
                                                        <el-radio :label="2">郵寄至通訊地址：354 - 苗栗縣獅潭鄉中*****</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-form-item
                                                    prop="checked1"
                                                    :rules="[
                                                        { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                                    ]"
                                                >
                                                    <el-checkbox v-model="form.checked1">
                                                    我已閱讀並同意以下內容:
                                                    <br/>茲為遵循國內外法令規定(包含美國海外帳戶稅收遵循法及美國相關稅務法令)、相關跨政府協議、基金註冊地政府之規定及基金公開說明書規定，有關申購美國註冊基金事項，同意 貴公司就本人國籍、稅籍稅務資料與財務細節(含交易行為等)及FATCA相關資訊，得於前揭範圍內供境外基金機構(包括所屬集團之關係企業及指定機構)，並依前揭規定同意配合辦理相關事宜。
                                                    </el-checkbox>
                                                </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </transition>
                        <el-collapse v-if="step == 2">
                            <el-collapse-item>
                                <template slot="title">
                                    <b>美國註冊基金有哪些？</b>
                                </template>
                                <div>
                                    <p>
                                        您在國民e帳戶可申購的美國註冊基金共12檔，包含：
                                    </p>
                                    <ul>
                                        <li>
                                            <b>全球股票型</b>
                                            <br/>
                                            坦伯頓成長基金 (本基金之配息來源可能為本金)、坦伯頓世界基金 (本基金之配息來源可能為本金)、坦伯頓全球基金 (本基金之配息來源可能為本金)、坦伯頓外國基金 (本基金之配息來源可能為本金)、坦伯頓中小型公司成長基金 (本基金之配息來源可能為本金)、富蘭克林坦伯頓法人機構專用基金-國際股票系列Primary股 (本基金之配息來源可能為本金)
                                        </li>
                                        <li>
                                            <b>美國股票型</b>
                                            <br/>
                                            成長基金 (本基金之配息來源可能為本金)、潛力組合基金 (本基金之配息來源可能為本金)、高成長基金 (本基金之配息來源可能為本金)
                                        </li>
                                        <li>
                                            <b>產業型</b>
                                            <br/>
                                            黃金基金 (本基金之配息來源可能為本金)、公用事業基金 (本基金之配息來源可能為本金)、高科技基金 (本基金之配息來源可能為本金)
                                        </li>
                                    </ul>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item>
                                <template slot="title">
                                    <b>如文件到期未更新會影響哪些些交易權益？</b>
                                </template>
                                <div>
                                    <p>
                                        若未於期限內更新「Form W-8BEN」，有下列兩項影響：
                                    </p>
                                    <ol>
                                        <li>
                                            <b>如您仍持有富蘭克林美國註冊基金</b>
                                            <br/>
                                            富蘭克林證券投顧將依FATCA規定，將您本人於富蘭克林證券投顧之帳戶列為不合作帳戶(Recalcitrant Account)，針對符合FATCA規定法定條件的存入款項(包含但不限於美國來源所得)由基金公司予以扣繳30%之美國扣繳稅款予美國聯邦政府；如該等應扣繳款項已支付予您，您同意無條件返還予富蘭克林證券投顧，富蘭克林證券投顧亦得自應給付予您之金額中扣除。
                                        </li>
                                        <li>
                                            <b>您的交易將受到限制</b>
                                            <br/>
                                            不得再申購美國註冊基金(包含轉申購、定期定額持續扣款、新增含美國註冊基金之ROBO投組、加碼含美國註冊基金之ROBO投組及再平衡含美國註冊基金之ROBO投組) ，僅得執行贖回及轉出至盧森堡註冊基金。
                                        </li>
                                    </ol>
                                </div>
                            </el-collapse-item>
                        </el-collapse accordion>

                        <template v-if="step == 3">
                            <div class="tit-type2">
                                <b>
                                    「FORM W-8BEN 於美國扣繳稅款及申報目的之最終受益人外國身分聲明(個人)」已為您準備好
                                    <template v-if="form.SendWhere == 2">
                                        ，我們會盡快以掛號郵寄文件至您指定的地址，提醒您留意收件
                                    </template>
                                    ！
                                </b>
                            </div>
                            <el-alert
                                v-if="form.SendWhere != 2"
                                class="borderStyle margin-bottom-20"
                                type="warning"
                                show-icon
                                :closable="false"
                            >
                                <template v-slot:title>
                                    <b>提醒您</b>
                                </template>
                                <slot name="description">
                                    文件已加密處理，請輸入您的身分證字號以開啟文件。<b class="text-red">(請勿雙面列印)</b>
                                </slot>
                            </el-alert>
                        </template>
                        <div class="tradingProcess-card-content" v-if="step == 3">
                            <h2 title="填寫/寄回方式說明" class="tit-type2">
                                填寫/寄回方式說明
                            </h2>
                            <ol class="margin-bottom-20">
                                <li>
                                    <b>填寫方式：</b>
                                    <br/>「<b>FORM W-8BEN</b> 於美國扣繳稅款及申報目的之最終受益人外國身分聲明(個人)」已置入您開戶留存的個人資料，您僅需於左下方”簽名欄”簽名即可 <b>(不須留存銀行印鑑)</b>
                                </li>
                                <li>
                                    <b>寄回方式：</b>可選擇
                                    <ol>
                                        <li>
                                            <b>郵局：</b>郵寄至10690台北郵政53-0665號信箱 富蘭克林證券投顧 收
                                        </li>
                                        <li>
                                            <b>7-11宅急便：</b>索取宅急便「到付託運單」，收件人請填10690 台北市大安區忠孝東路四段87號8樓 富蘭克林證券投顧 客服部 收
                                        </li>
                                        <li>
                                            <b>掃描或手機拍照：</b>掃描或手機拍照整份文件(需清楚完整可辨識)，將檔案e-mail至客服信箱「<el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">service@franklin.com.tw</el-link>」並留下您的姓名及聯絡電話，以利與您聯絡確認
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="step != 3"
                            round
                            type="primary"
                            @click="nextStep()"
                        >
                            <template v-if="step == 1">
                                進行確認
                            </template>
                            <template v-if="step == 2">
                                確認送出
                            </template>
                        </el-button>
                        <el-button
                            v-if="form.SendWhere != 2 && step == 3"
                            round
                            type="primary"
                            @click="nextStep()"
                        >
                            下載 / 列印文件
                        </el-button>
                        <el-button
                            v-if="step == 3"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/'); $scrollTo('body')">
                            回國民e帳戶
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        nextStep() {
            if (this.step == 1 || this.step == 2) {
                this.step == 1 ? this.$scrollTo('#confirmInfo') : this.$scrollTo('body');
                this.step++;
            }else {
                window.open('https://wt.franklin.com.tw:8081/docv2/Member/W8Ben/4604952c-3b4e-46f2-aa25-2c31e9e30d95?handler=Download');
            }
        },
    },
};

// ========= 變更登入密碼 ==============================================================================================================================
const ChangeLoginPwd = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `變更登入密碼`,
            },

            itemTitWidth: "95px",

            form: {
                loginPassword: "",
                loginPassword2: "",
                loginPassword3: "",
                PwdHint: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入<br class="hidden-xs-only"/>原登入密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="loginPassword"
                                            :rules="[
                                                { required: true, message: '請輸入原登入密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.loginPassword"
                                                placeholder="請輸入您的原登入密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請設定<br class="hidden-xs-only"/>新登入密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="loginPassword2"
                                            :rules="[
                                                { required: true, message: '請輸入新登入密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.loginPassword2"
                                                placeholder="請輸入新登入密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請再輸入<br class="hidden-xs-only"/>新登入密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="loginPassword3"
                                            :rules="[
                                                { required: true, message: '請再輸入新登入密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.loginPassword3"
                                                placeholder="請再輸入新登入密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        登入密碼<br class="hidden-xs-only"/>提示語
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="PwdHint"
                                            :rules="[
                                                { required: true, message: '請輸入登入密碼提示語'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.PwdHint"
                                                placeholder="請輸入登入密碼提示語">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="failurePopUp()">
                            確定變更
                        </el-button>
                    </div>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    請設定6~12位的英文字母或數字，英文字母大小寫視為不同。
                                </li>
                                <li>
                                    設定新登入密碼不可與原登入密碼相同。
                                </li>
                                <li>
                                    不可連續重複單一文數字達5次以上，例如：a<span class="text-red">11111</span>、e<span class="text-red">fffff</span>wk2。
                                </li>
                                <li>
                                    不可連續遞增或遞減5個字元以上，例如：<span class="text-red">abcde</span>52、sd<span class="text-red">54321</span>
                                </li>
                                <li>
                                    若再次出現變更畫面，即表示變更密碼失敗，請注意系統回覆之錯誤訊息，再進行一次變更動作。
                                </li>
                                <li>
                                    為確保個人資料安全，敬請定時更新【登入密碼】及【交易密碼】。
                                </li>
                                <li>
                                    設定登入密碼提示語不可與登入密碼相同。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線0800-885-888，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        failurePopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `變更成功`,
                message: `<div class="text-center">請重新登入，謝謝您。</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/");
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= 變更交易密碼 ==============================================================================================================================
const ChangeTxnPwd = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `變更交易密碼`,
            },

            itemTitWidth: "95px",

            form: {
                transactionPassword: "",
                transactionPassword2: "",
                transactionPassword3: "",
                PwdHint: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入<br class="hidden-xs-only"/>原交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword"
                                            :rules="[
                                                { required: true, message: '請輸入原交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword"
                                                placeholder="請輸入您的原交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請設定<br class="hidden-xs-only"/>新交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword2"
                                            :rules="[
                                                { required: true, message: '請輸入新交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword2"
                                                placeholder="請輸入新交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請再輸入<br class="hidden-xs-only"/>新交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword3"
                                            :rules="[
                                                { required: true, message: '請再輸入新交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword3"
                                                placeholder="請再輸入新交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        交易密碼<br class="hidden-xs-only"/>提示語
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="PwdHint"
                                            :rules="[
                                                { required: true, message: '請輸入交易密碼提示語'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.PwdHint"
                                                placeholder="請輸入交易密碼提示語">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="failurePopUp()">
                            確定變更
                        </el-button>
                    </div>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    請設定6~12位的英文字母或數字，英文字母大小寫視為不同。
                                </li>
                                <li>
                                    設定新登入密碼不可與原登入密碼相同。
                                </li>
                                <li>
                                    不可連續重複單一文數字達5次以上，例如：a<span class="text-red">11111</span>、e<span class="text-red">fffff</span>wk2。
                                </li>
                                <li>
                                    不可連續遞增或遞減5個字元以上，例如：<span class="text-red">abcde</span>52、sd<span class="text-red">54321</span>
                                </li>
                                <li>
                                    若再次出現變更畫面，即表示變更密碼失敗，請注意系統回覆之錯誤訊息，再進行一次變更動作。
                                </li>
                                <li>
                                    為確保個人資料安全，敬請定時更新【登入密碼】及【交易密碼】。
                                </li>
                                <li>
                                    設定登入密碼提示語不可與登入密碼相同。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線0800-885-888，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        failurePopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `變更成功`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/Status");
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= 忘記交易密碼 ==============================================================================================================================
const ForgetPassword = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `忘記交易密碼`,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

const GetTxnPwdHint = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "135px",
            step: 1,

            form: {
                Idno: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <el-card class="tradingProcess-card">
                        <h2 title="查詢密碼提示" class="tit-type2">
                            查詢密碼提示
                        </h2>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                            v-if="step == 1"
                        >
                            <slot name="description">
                                請輸入您的身分證字號(或統一編號)來查詢您之前設定的密碼提示
                            </slot>
                        </el-alert>
                        <div class="tradingProcess-card-content">
                            <template v-if="step == 1">
                                <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xxl-2 columnCount-md-1">
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            請輸入身分證字號<br class="hidden-xs-only"/>(或統一編號)
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-form-item
                                                prop="Idno"
                                                :rules="[
                                                    { required: true, message: '請輸入身分證字號或統一編號'},
                                                ]"
                                            >
                                                <el-input
                                                    v-model="form.Idno"
                                                    placeholder="身分證字號或統一編號">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-if="step == 2">
                                <p>
                                    您的密碼提示語為：<b class="text-red">富蘭克林‧國民ｅ帳戶</b>
                                </p>
                                <p>
                                    如果您已經知道交易密碼，按取消繼續使用，如果您仍忘記交易密碼，請選擇補發交易密碼，依照提示重新設定。
                                </p>
                            </template>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="nextStep();$scrollTo('body')">
                            <template v-if="step == 1">
                                查詢
                            </template>
                            <template v-if="step == 2">
                                補發交易密碼
                            </template>
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
    },
    methods: {
        nextStep() {
            this.step == 1 ? this.step++ : this.$router.push('/ForgetPassword/ResetTxnPwd');
        },
    },
};

const ResetTxnPwd = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "135px",
            step: 1,

            form: {
                Idno: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <el-card class="tradingProcess-card">
                        <h2 title="補發交易密碼" class="tit-type2">
                            {{step == 1 ? '補發交易密碼' : '補發完成'}}
                        </h2>
                        <div class="tradingProcess-card-content">
                            <template v-if="step == 1">
                                <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xxl-2 columnCount-md-1"">
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            請輸入您留存的<br class="hidden-xs-only"/>電子郵件信箱
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-form-item
                                                prop="Idno"
                                                :rules="[
                                                    { required: true, message: '請輸入電子郵件信箱'},
                                                ]"
                                            >
                                                <el-input
                                                    v-model="form.Idno"
                                                    placeholder="電子郵件信箱"
                                                    type="email">
                                                </el-input>
                                            </el-form-item>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-if="step == 2">
                                <p>
                                    親愛的客戶您好，為避免您的帳戶遭到盜用，我們己經鎖住您的網路交易權限，您將無法進行申購、贖回、轉換等基金交易。稍後我們收到您的密碼補發訊息後，會立刻以E-mail通知您新的「境外基金交易使用密碼」。 當您收到「境外基金交易使用密碼」時，您可自行登入本系統進行交易密碼變更與身分認證，完成後重新登入網頁即可啟用網路交易功能。若您於變更時有任何疑問，可於營業日上午9點至下午6點撥打富蘭克林國民理財專線：0800-885-888，由專人為您服務。
                                </p>
                            </template>
                        </div>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                            v-if="step == 1"
                        >
                            <template v-slot:title>
                                注意事項
                            </template>
                            <slot name="description">
                                <ol>
                                    <li>
                                        為保障您的交易安全，當您補發交易密碼後，系統將會鎖住您的帳戶，您將無法進行申購、贖回、轉換等基金交易。
                                    </li>
                                    <li>
                                        如果您確定要重新設定交易密碼，我們會將新的基金交易使用密碼寄至您的電子郵件信箱，當您收到新的基金交易使用密碼時，您可自行於本系統登入會員密碼後進行身份驗證，或於營業日9：00～18：00致電富蘭克林證券投顧【國民理財專線】0800-885-888確認身份後，進行網路交易密碼變更，即可使用網路交易功能。
                                    </li>
                                </ol>
                            </slot>
                        </el-alert>
                    </el-card>

                    <div class="tradingProcess-btnArea" v-if="step == 1">
                        <el-button
                            round
                            type="primary"
                            @click="step++; $scrollTo('body')"
                            class="full-sm"
                        >
                            確定補發交易密碼
                        </el-button>
                        <el-button
                            type="text"
                            @click="$router.go(-1); $scrollTo('body')"
                        >
                            取消
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
    },
};

// ========= 首次交易密碼變更暨開啟交易權限 ==============================================================================================================================
const TxnActivate = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `首次交易密碼變更暨開啟交易權限`,
            },

            itemTitWidth: "105px",

            form: {
                transactionPassword: "",
                transactionPassword2: "",
                transactionPassword3: "",
                PwdHint: "",
                Birthday: '',
                email: '',
            },

            meaninglessNum: 1,
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <p>
                            親愛的 陳涵風 ，您好！敬請填寫下列問題進行身份驗證以變更交易密碼及開啟交易權限。
                        </p>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xl-2 columnCount-sm-1">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入<br class="hidden-xs-only"/>原交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword"
                                            :rules="[
                                                { required: true, message: '請輸入原交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword"
                                                placeholder="請輸入您的原交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請設定<br class="hidden-xs-only"/>新交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword2"
                                            :rules="[
                                                { required: true, message: '請輸入新交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword2"
                                                placeholder="請輸入新交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請再輸入<br class="hidden-xs-only"/>新交易密碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="transactionPassword3"
                                            :rules="[
                                                { required: true, message: '請再輸入新交易密碼'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.transactionPassword3"
                                                placeholder="請再輸入新交易密碼"
                                                show-password>
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        交易密碼<br class="hidden-xs-only"/>提示語
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="PwdHint"
                                            :rules="[
                                                { required: true, message: '請輸入交易密碼提示語'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.PwdHint"
                                                placeholder="請輸入交易密碼提示語">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        出生日期
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Birthday"
                                            :rules="[
                                                { required: true, message: '請選擇出生日期'},
                                            ]"
                                        >
                                            <el-date-picker
                                                v-model="form.Birthday"
                                                type="date"
                                                format="yyyy/MM/dd"
                                                placeholder="請選擇出生日期">
                                            </el-date-picker>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        電子郵件信箱
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="email"
                                            :rules="[
                                                { required: true, message: '請輸入電子郵件信箱'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.email"
                                                placeholder="請輸入您的電子郵件信箱"
                                                type="email">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="verification()">
                            進行身分驗證
                        </el-button>
                    </div>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    請設定6~12位的英文字母或數字，英文字母大小寫視為不同。
                                </li>
                                <li>
                                    設定新登入密碼不可與原登入密碼相同。
                                </li>
                                <li>
                                    不可連續重複單一文數字達5次以上，例如：a<span class="text-red">11111</span>、e<span class="text-red">fffff</span>wk2。
                                </li>
                                <li>
                                    不可連續遞增或遞減5個字元以上，例如：<span class="text-red">abcde</span>52、sd<span class="text-red">54321</span>
                                </li>
                                <li>
                                    若再次出現變更畫面，即表示變更密碼失敗，請注意系統回覆之錯誤訊息，再進行一次變更動作。
                                </li>
                                <li>
                                    為確保個人資料安全，敬請定時更新【登入密碼】及【交易密碼】。
                                </li>
                                <li>
                                    設定登入密碼提示語不可與登入密碼相同。
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線0800-885-888，將有客服專員竭誠為您服務！
                                </li>
                            </ol>
                        </div>
                    </section>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        verification() {
            if( this.meaninglessNum == 1 ) {
                this.failurePopUp();
                this.meaninglessNum++;
            }else {
                this.successPopUp();
            }
        },
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `您已完成身份驗證`,
                message: `<div class="text-center">已變更交易密碼及開啟交易權限</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/Status");
                    this.$scrollTo("body");
                });
        },
        failurePopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "warning",
                title: `原交易密碼輸入錯誤`,
                message: `請再次確認您所輸入資料。若您遺失您的初次使用交易密碼，請於營業日9:00~18:00撥打客服專線0800-885-888，由客服專員協助處理。`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    // this.$router.push("/Status");
                    // this.$scrollTo("body");
                });
        },
    },
};

// ========= 風險屬性評估 ==============================================================================================================================
const Kyc = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `風險屬性評估`,
            },

            itemTitWidth: "105px",

            form: {
                nationality: '',
                nationalityOption: ['中華民國', '美國', '加拿大，檢附加國境外居留證明', '其他'],
                nationalityOption_value: '',
                otherNationality: '',

                educationLevel: ['博士', '碩士', '大學', '專科', '高中(職)', '國中', '國小(含以下)'],
                educationLevel_value: "",

                industry: ['金融業/保險業', '電子/科技/資訊業', '零售/物流', '服飾/餐飲/觀光/傳播媒體', '服務業', '專業服務(如：會計、法律、地政、不動產經紀 、公證)', '醫療業',
                            '軍公教', '農林漁牧業', '營建業', '傳產/製造業(如：化工/電子/食品/紡織)', '武器設備業(如：軍火、砲彈、槍枝零件)', '政治', '非營利組織/社服/宗教',
                            '典當/珠寶銀樓/博奕事業或民間匯兌等密集性現金交易之業務類型(包含柏青哥、網咖、夜店、酒吧、舞廳等娛樂行業)', '虛擬貨幣業',
                            '學生', '家管', '退休', '待業', '自由業/其他'
                            ],
                industry_value: "",
                industry_other: '',

                company: '',

                jobTitle: ['會計師', '律師', '地政士', '不動產經紀人', '公證人', '其他專業人員(除會計師、律師、地政士、不動產經紀人、公證人外)', '負責人', '高階主管', '中階主管', '一般職員', '助理'],
                jobTitle_value: "",

                importantPoliticalPosts: '',

                annualIncome: ["0~50萬", "51~100萬", "101~300萬", "301~500萬", "501萬以上"],
                annualIncome_value: "",

                annualExpenditure: ["0~50萬", "51~100萬", "101~300萬", "301~500萬", "501萬以上"],
                annualExpenditure_value: "",

                investmentPurpose: [],
                investmentPurpose_other: "",

                sourcesOfFunds: [],
                sourcesOfFundsOption: ['薪資收入', '投資收入', '房租收入', '經營事業收入', '兼職/兼營收入', '投資/買賣不動產', '存款', '退休金', '贈與', '遺產繼承', '因信託行為取得他人財產(指因一般民事財產信託而取得他人或機關團體的財產，不包含透過銀行特定金錢信託購買基金)', '其他(需填來源)'],
                sourcesOfFunds_other: "",

                fundTypeOfPreference: [],

                fundInvestmentAreaPreference: [],
                fundInvestmentAreaPreference_other: "",

                investmentMethod: ['單筆投資', '定期定額', '兩者皆可'],
                investmentMethod_value: "",

                profitAndLossImpact: ['高', '中高', '中', '中低', '低'],
                profitAndLossImpact_value: "",

                fundOperationStatus: ['未投資或虧損嚴重', '小額虧損', '獲利有限', '獲利優於定期存款利率', '績效優於整體指數或基金'],
                fundOperationStatus_value: "",

                investableAmount: ['50萬以下', '51~100萬', '101~300萬', '301~500萬', '501萬以上'],
                investableAmount_value: "",

                investmentTools: ['一般綜合存款或定存', '不動產', '儲蓄型或投資型保單', '共同基金', '股票或衍生性金融商品'],
                investmentTools_value: "",

                investmentExperience: ['一年以下', '一年~三年(含)', '三年以上~五年(含)', '五年以上~十年(含)', '十年以上'],
                investmentExperience_value: "",

                assetsFall: ['賣出(一部分或全部)', '不賣出(停止定期扣款)', '先觀望(不賣出、不停扣)', '買進(小額加碼)', '買進(大額加碼)'],
                assetsFall_value: "",

                priceFluctuation: ['-5%~5%', '-10%~10%', '-20%~20%', '-30%~30%', '-40%~40%'],
                priceFluctuation_value: "",

                investmentTime: ['一年以下', '一年~三年(含)', '三年以上~五年(含)', '五年以上~十年(含)', '十年以上'],
                investmentTime_value: "",

                haveTheFollowingStatus: [],

                RiskAgreement: '',

                transactionPassword: "",
            },

            american: false,
            canadian: false,
        };
    },
    template: ` <el-form :model="form" ref="form" label-position="top">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="30" class="formItem">
                                <el-col :xl="form.nationalityOption_value != 3 ? 8 : 16" :sm="form.nationalityOption_value != 3 ? 12 : 24">
                                    <el-form-item
                                        label="受益人國籍"
                                        prop="nationalityOption_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-row :gutter="30">
                                            <el-col :sm="form.nationalityOption_value != 3 ? 24 : 12">
                                                <el-select v-model="form.nationalityOption_value" placeholder="請選擇受益人國籍">
                                                    <el-option
                                                        v-for="(item, index) in form.nationalityOption"
                                                        :key="index"
                                                        :label="item"
                                                        :value="index"
                                                    >
                                                    </el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :sm="12" v-if="form.nationalityOption_value == 3" class="margin-top-sm-10">
                                                <el-input
                                                    v-model="form.otherNationality"
                                                    placeholder="請輸入您的國籍">
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <el-card class="tradingProcess-card">
                        <h2 title="個人(家庭)及財務概況" class="tit-type2">
                            【第一項】個人(家庭)及財務概況
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="30" class="formItem">
                                <el-col :sm="12">
                                    <el-form-item
                                        label="教育程度"
                                        prop="educationLevel_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.educationLevel_value" placeholder="請選擇教育程度">
                                            <el-option
                                                v-for="(item, index) in form.educationLevel"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="職業別 (如未就業者，請選擇目前身份)"
                                        prop="industry_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-row :gutter="10">
                                            <el-col :sm="form.industry_value != 20 ? 24 : 12">
                                                <el-select v-model="form.industry_value" placeholder="請選擇職業別" filterable>
                                                    <el-option
                                                        v-for="(item, index) in form.industry"
                                                        :key="index"
                                                        :label="item"
                                                        :value="index"
                                                    >
                                                    </el-option>
                                                </el-select>
                                            </el-col>
                                            <el-col :sm="12" v-if="form.industry_value == 20" class="margin-top-sm-10">
                                                <el-input
                                                    v-model="form.industry_other"
                                                    placeholder="請輸入類別">
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                </el-col>
                                <template v-if="form.industry_value != 16"><template v-if="form.industry_value != 17"><template v-if="form.industry_value != 18">
                                    <el-col :sm="12">
                                        <el-form-item
                                            label="服務機構 (待業者請填前次公司)"
                                            prop="company"
                                            :rules="[
                                                { required: true, message: '請輸入公司(店舖)全名'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.company"
                                                placeholder="請輸入公司(店舖)全名">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :sm="12">
                                        <el-form-item
                                            label="職稱(職位)"
                                            prop="jobTitle_value"
                                            :rules="[
                                                { required: true, message: '請選擇', trigger: 'change' }
                                            ]"
                                        >
                                            <el-select v-model="form.jobTitle_value" placeholder="請選擇職稱(職位)">
                                                <el-option
                                                    v-for="(item, index) in form.jobTitle"
                                                    :key="index"
                                                    :label="item"
                                                    :value="index"
                                                >
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </el-col>
                                </template></template></template>
                                <el-col :xl="12">
                                    <el-form-item
                                        label="現任國內外政治人物(為現任國內外政府組織或國際組織之重要政治性職務人士或家庭成員及密切關係之人)"
                                        prop="importantPoliticalPosts"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-radio-group v-model="form.importantPoliticalPosts">
                                            <el-radio label="是"></el-radio>
                                            <el-radio label="否"></el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </el-col>
                                <div></div>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="個人年收入"
                                        prop="annualIncome_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.annualIncome_value" placeholder="請選擇個人年收入">
                                            <el-option v-for="(item, index) in form.annualIncome" :key="index" :label="item" :value="index"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="個人年支出"
                                        prop="annualExpenditure_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.annualExpenditure_value" placeholder="請選擇個人年支出">
                                            <el-option v-for="(item, index) in form.annualExpenditure" :key="index" :label="item" :value="index"> </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <div></div>
                                <el-col :sm="24">
                                    <el-form-item
                                        label="投資理財的目的(可複選)"
                                        prop="investmentPurpose"
                                        :rules="[
                                            { type: 'array', required: true, message: '請至少選擇一個', trigger: 'change' }
                                        ]"
                                    >
                                        <el-row :gutter="30">
                                            <el-col
                                                :xl="form.investmentPurpose.indexOf('4') == '-1' ? 24 : 10"
                                                :lg="form.investmentPurpose.indexOf('4') == '-1' ? 24 : 18"
                                                :md="form.investmentPurpose.indexOf('4') == '-1' ? 24 : 17"
                                            >
                                                <el-checkbox-group v-model="form.investmentPurpose">
                                                    <el-checkbox label="0">購屋準備</el-checkbox>
                                                    <el-checkbox label="1">創業基金</el-checkbox>
                                                    <el-checkbox label="2">子女教育</el-checkbox>
                                                    <el-checkbox label="3">退休準備</el-checkbox>
                                                    <el-checkbox label="4">其他(需填目的)</el-checkbox>
                                                </el-checkbox-group>
                                            </el-col>
                                            <el-col
                                                :xl="4"
                                                :lg="6"
                                                :md="7"
                                                v-if="form.investmentPurpose.indexOf('4') == '-1' ? false : true"
                                            >
                                                <el-input
                                                    v-model="form.investmentPurpose_other"
                                                    placeholder="請輸入投資理財目的">
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="24">
                                    <el-form-item
                                        label="投資理財的資金來源(可複選)"
                                        prop="sourcesOfFunds"
                                        :rules="[
                                            { type: 'array', required: true, message: '請至少選擇一個', trigger: 'change' }
                                        ]"
                                    >
                                        <el-row :gutter="30">
                                            <el-col
                                                :xl="form.sourcesOfFunds.indexOf('11') == '-1' ? 24 : 20"
                                            >
                                                <el-checkbox-group v-model="form.sourcesOfFunds">
                                                    <el-checkbox label="0">薪資收入</el-checkbox>
                                                    <el-checkbox label="1">投資收入</el-checkbox>
                                                    <el-checkbox label="2">房租收入</el-checkbox>
                                                    <el-checkbox label="3">經營事業收入</el-checkbox>
                                                    <el-checkbox label="4">兼職/兼營收入</el-checkbox>
                                                    <el-checkbox label="5">投資/買賣不動產</el-checkbox>
                                                    <el-checkbox label="6">存款</el-checkbox>
                                                    <el-checkbox label="7">退休金</el-checkbox>
                                                    <el-checkbox label="8">贈與</el-checkbox>
                                                    <el-checkbox label="9">遺產繼承</el-checkbox>
                                                    <el-checkbox label="10">因信託行為取得他人財產(指因一般民事財產信託而取得他人或機關團體的財產，不包含透過銀行特定金錢信託購買基金)</el-checkbox>
                                                    <el-checkbox label="11">其他(需填來源)</el-checkbox>
                                                </el-checkbox-group>
                                            </el-col>
                                            <el-col
                                                :xl="4"
                                                :md="10"
                                                v-if="form.sourcesOfFunds.indexOf('11') == '-1' ? false : true"
                                            >
                                                <el-input
                                                    v-model="form.sourcesOfFunds_other"
                                                    placeholder="請輸入資金來源">
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <el-card class="tradingProcess-card">
                        <h2 title="【第二項】基金偏好" class="tit-type2">
                            【第二項】基金偏好
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="30" class="formItem">
                                <el-col :sm="24">
                                    <el-form-item
                                        label="喜好之基金類型(可複選)"
                                        prop="fundTypeOfPreference"
                                        :rules="[
                                            { type: 'array', required: true, message: '請至少選擇一個', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox-group v-model="form.fundTypeOfPreference">
                                            <el-checkbox label="0">債券型</el-checkbox>
                                            <el-checkbox label="1">平衡型</el-checkbox>
                                            <el-checkbox label="2">股票型</el-checkbox>
                                            <el-checkbox label="3">區域型</el-checkbox>
                                            <el-checkbox label="4">組合型</el-checkbox>
                                            <el-checkbox label="5">單一國家或單一產業型</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="24">
                                    <el-form-item
                                        label="基金投資地區喜好(可複選)"
                                        prop="fundInvestmentAreaPreference"
                                        :rules="[
                                            { type: 'array', required: true, message: '請至少選擇一個', trigger: 'change' }
                                        ]"
                                    >
                                        <el-row :gutter="30">
                                            <el-col
                                                :xl="form.fundInvestmentAreaPreference.indexOf('8') == '-1' ? 24 : 13"
                                            >
                                                <el-checkbox-group v-model="form.fundInvestmentAreaPreference">
                                                    <el-checkbox label="0">台灣</el-checkbox>
                                                    <el-checkbox label="1">中國大陸</el-checkbox>
                                                    <el-checkbox label="2">日本</el-checkbox>
                                                    <el-checkbox label="3">亞洲</el-checkbox>
                                                    <el-checkbox label="4">美國</el-checkbox>
                                                    <el-checkbox label="5">歐洲</el-checkbox>
                                                    <el-checkbox label="6">新興國家</el-checkbox>
                                                    <el-checkbox label="7">全球</el-checkbox>
                                                    <el-checkbox label="8">其他</el-checkbox>
                                                </el-checkbox-group>
                                            </el-col>
                                            <el-col
                                                :xl="4"
                                                :lg="6"
                                                :md="7"
                                                v-if="form.fundInvestmentAreaPreference.indexOf('8') == '-1' ? false : true"
                                            >
                                                <el-input
                                                    v-model="form.fundInvestmentAreaPreference_other"
                                                    placeholder="請輸入地區">
                                                </el-input>
                                            </el-col>
                                        </el-row>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="選擇之投資方式"
                                        prop="investmentMethod_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.investmentMethod_value" placeholder="請選擇投資方式">
                                            <el-option
                                                v-for="(item, index) in form.investmentMethod"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <el-card class="tradingProcess-card">
                        <h2 title="【第三項】投資屬性及風險承受度" class="tit-type2">
                            【第三項】投資屬性及風險承受度
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="30" class="formItem">
                                <el-col :sm="12">
                                    <el-form-item label="您的年齡為">
                                        <div class="text">
                                            35歲以下
                                        </div>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="投資盈虧對於您基本生活需求之影響"
                                        prop="profitAndLossImpact_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.profitAndLossImpact_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.profitAndLossImpact"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="您目前所投資的資金操作狀況為"
                                        prop="fundOperationStatus_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.fundOperationStatus_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.fundOperationStatus"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="您預計可投資金額"
                                        prop="investableAmount_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.investableAmount_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.investableAmount"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="請問您最常使用的投資工具"
                                        prop="investmentTools_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.investmentTools_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.investmentTools"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="您已有多長的投資經驗"
                                        prop="investmentExperience_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.investmentExperience_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.investmentExperience"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="資產下跌20%時的選擇"
                                        prop="assetsFall_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.assetsFall_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.assetsFall"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="在一般的情況下，您可接受的價格波動程度介於下列哪個範圍？"
                                        prop="priceFluctuation_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.priceFluctuation_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.priceFluctuation"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :sm="12">
                                    <el-form-item
                                        label="您預計的基金投資期間為"
                                        prop="investmentTime_value"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.investmentTime_value" placeholder="請選擇">
                                            <el-option
                                                v-for="(item, index) in form.investmentTime"
                                                :key="index"
                                                :label="item"
                                                :value="index"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                    <el-card class="tradingProcess-card">
                        <h2 title="【第四項】其它評估項目" class="tit-type2">
                            【第四項】其它評估項目
                        </h2>
                        <div class="tradingProcess-card-content">
                            <el-row :gutter="30" class="formItem">
                                <el-col :sm="24">
                                    <el-form-item
                                        label="您是否具有以下身分?"
                                    >
                                        <el-checkbox-group v-model="form.haveTheFollowingStatus">
                                            <el-checkbox label="0" disabled>年齡70歲(含)以上</el-checkbox>
                                            <el-checkbox label="1" disabled>教育程度國中畢業(含)以下</el-checkbox>
                                            <el-checkbox label="2">領有全民健康保險重大傷病證明</el-checkbox>
                                        </el-checkbox-group>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </div>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <template v-slot:title>
                                <span class="text-red">
                                    請審慎評估後勾選以下選項
                                </span>
                            </template>
                            <slot name="description">
                                <p class="text">
                                    依法令規定若您具有【年齡70歲(含)以上】、【教育程度國中畢業(含)以下】及【領有全民健保重大傷病證明】，本公司於辦理基金銷售業務時，將不主動介紹高風險之基金產品(RR5)，故請審慎評估後勾選以下選項(未勾選者視為同意)：
                                </p>
                                <el-form-item
                                    prop="RiskAgreement"
                                    :rules="[
                                        { required: true, message: '請選擇', trigger: 'change' }
                                    ]"
                                    style="margin-bottom: 5px !important;"
                                >
                                    <el-radio-group v-model="form.RiskAgreement">
                                        <el-radio :label="0">
                                            <b>同意</b>，以適合低風險承受度投資人之基金類型(RR1~RR2)做為投資選擇
                                        </el-radio>
                                        <el-radio :label="1">
                                            <b>不同意</b>，願意依本次最新檢視投資屬性及風險承受度評做之結果選擇適配之基金
                                        </el-radio>
                                    </el-radio-group>
                                </el-form-item>
                            </slot>
                        </el-alert>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
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
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="completePopUp();">
                            確認送出
                        </el-button>
                    </div>
                    <section class="notice">
                        <h4 class="tit-type2" title="風險屬性評估說明">
                            風險屬性評估說明
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    您前次之投資風險屬性為：<b class="text-blue">積極</b>
                                    <br/>本次依【第三項】投資屬性及風險承受度之問卷總分結果，對應的投資風險屬性類型即可選擇之適配基金如下:
                                    <ul>
                                        <li>
                                            35分以下：投資人屬於保守型(可投資風險等級RR1~RR2基金)
                                        </li>
                                        <li>
                                            36～44分：投資人屬於穩健型(可投資風險等級RR1~RR4基金)
                                        </li>
                                        <li>
                                            45～75分：投資人屬於積極型(可投資風險等級RR1~RR5基金)
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    提醒您，若本次檢視之投資風險屬性有變更時，將依本次最新投資風險屬性適配新申購基金，包括您原定期定額扣款之基金，如欲新增扣款額度或增加扣款日期，亦將依最新檢視結果辦理。
                                </li>
                                <li>
                                    本定期檢視評估表有效期限為一年，如未如期完成重新檢視者，您於新辦基金申購時，僅能申購或轉換最低風險承受度投資人之基金。但您以定期定額方式按原訂契約繼續申購基金者，非屬新辦基金申購，得不重新檢視適合度。
                                </li>
                                <li>
                                    填寫客戶投資適性分析留存之各項資料（包括基本資料、財務概況、投資屬性及風險承受度等），如有變更或修正其內容之必要時，同意由富蘭克林證券投顧指定之人員以傳真、電話或書面方式，向本人進行資料確認。
                                </li>
                            </ol>
                        </div>
                    </section>
                    <el-dialog
                        :visible.sync="american"
                        :show-close="false"
                        :close-on-click-modal="false"
                        :close-on-press-escape="false"
                    >
                        <template v-slot:title>
                            <span class="el-dialog__title">
                                <i class="el-icon-warning text-red"></i> 提交成功
                            </span>
                        </template>
                        <p>
                            依照富蘭克林坦伯頓全球投資系列(下稱本系列基金)公開說明書之規定，本系列基金<b class="text-red">不可銷售予美國國民或居民之個人</b>(包含辦理開戶或申購/轉換交易業務)。
                            若您具有或新增<b class="text-red">美國公民、綠卡持有人、美國稅務居民之身分其中之一</b>，後續作業請來電客服專線0800-885-888，由專人為您服務，謝謝！
                        </p>
                        <span slot="footer" class="dialog-footer">
                            <el-button round type="primary" @click="this.american = false; $router.push('/PersonalData'); $scrollTo('body');">確定</el-button>
                        </span>
                    </el-dialog>
                    <el-dialog
                        :visible.sync="canadian"
                        :show-close="false"
                        :close-on-click-modal="false"
                        :close-on-press-escape="false"
                    >
                        <template v-slot:title>
                            <span class="el-dialog__title">
                                <i class="el-icon-warning text-red"></i> 提交成功
                            </span>
                        </template>
                        <p>
                            <b>您可利用以下方式，提供受益人最新版居留證影本：</b>
                        </p>
                        <ol>
                            <li>
                                email至客服信箱：service@franklin.com.tw
                            </li>
                            <li>
                                傳真至：(02)2772-9393
                            </li>
                            <li>
                                郵寄回：
                                <br/>10690台北郵政53-0665號信箱
                                <br/>富蘭克林證券投顧　收
                            </li>
                        </ol>
                        <p>
                            <span class="text-underLine">待收到完整文件後，本次檢視之「投資適性分析及風險預告書」才視同生效</span>，如有任何疑問，您可撥打富蘭克林國民理財專線：0800-885-888，與我們的理財顧問聯絡。
                        </p>
                        <span slot="footer" class="dialog-footer">
                            <el-button round type="primary" @click="this.canadian = false; $router.push('/PersonalData'); $scrollTo('body');">確定</el-button>
                        </span>
                    </el-dialog>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    mounted() {
        this.notification();
        setTimeout(()=>{
            this.notification2();
        }, 100);
    },
    methods: {
        completePopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: true,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "warning",
                title: `KYC分析結果：積極`,
                // message: `<div class="text-center">親愛的客戶您好：若有需要，您可隨時變更設定。</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "el-button--secondary is-plain",
                confirmButtonText: "確認送出",
                cancelButtonText: "重新填寫",
            })
                .then(() => {
                    if( this.form.nationalityOption_value == 1 ) {
                        this.american = true;
                    }else if( this.form.nationalityOption_value == 2 ) {
                        this.canadian = true;
                    }else {
                        this.successPopUp();
                    };
                })
                .catch(() => {
                    this.$scrollTo("body");
                    this.$router.go();
                });
        },
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `更新成功`,
                message: `<div class="text-center">本次風險屬性評估已生效</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/PersonalData");
                    this.$scrollTo("body");
                });
        },
        notification() {
            this.$notify.info({
                // type: 'warning',
                title: '其他風險屬性測試結果',
                dangerouslyUseHTMLString: true,
                message: '<a href="#/KYCChangeWarning1#top">風險比上次高 <i class="fas fa-angle-right"></i></a><br/><a href="#/KYCChangeWarning2#top">與現有投資組合風險不相符 <i class="fas fa-angle-right"></i></a>',
                // position: 'bottom-right',
                // duration: 0,
            });
        },
        notification2() {
            this.$notify.info({
                title: '提交結果有3種',
                dangerouslyUseHTMLString: true,
                message: `受益人國籍選【美國】||【加拿大】，提交成功後訊息不同`,
            });
        },
    },
};

// ========= KYC變更警示詢問 ==============================================================================================================================
const KYCChangeWarning1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `您的風險屬性為 積極`,
            },

            itemTitWidth: "105px",

            form: {
                reason: '',
                checked: [],
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tit-type2">
                            <b>
                                您本次的測試結果所能承受的風險較前一次高，原因為：
                            </b>
                        </div>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area columnCount-md-1">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="reason"
                                            :rules="[
                                                { required: true, message: '請選擇', trigger: 'change' }
                                            ]"
                                        >
                                            <el-select v-model="form.reason" placeholder="請選擇">
                                                <el-option label="現在能承受更高的投資風險" value="0"></el-option>
                                                <el-option label="前次風險評估題目填選錯誤，予以更正" value="1"></el-option>
                                                <el-option label="其他原因，須專人跟我聯絡" value="2"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </div>
                                </div>
                                <el-divider class="columnSpan margin-top-10 margin-bottom-10"></el-divider>
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="checked"
                                            :rules="[
                                                { type: 'array', required: true, message: '請確認', trigger: 'change' }
                                            ]"
                                        >
                                            <el-checkbox v-model="form.checked">
                                                本人聲明以上資料均詳實填寫並確認無誤，本人之投資決定將依填具資料所評估投資屬性及風險承受度結果為之，同意僅選擇適配基金進行投資，於投資前已充分了解所選擇基金之投資風險。
                                            </el-checkbox>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="successPopUp()"
                        >
                            確認送出
                        </el-button>
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/Kyc'); $scrollTo('body')">
                            重新填寫
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `更新成功`,
                message: `<div class="text-center">本次風險屬性評估已生效</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/PersonalData");
                    this.$scrollTo("body");
                });
        },
    },
};

const KYCChangeWarning2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `您的風險屬性為 積極`,
            },

            itemTitWidth: "105px",

            form: {
                rebalanceNotice: '',
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tit-type2">
                            <b>
                                您完成之「風險屬性」與「國民理財機器人之現有投資組合風險屬性」不相符
                            </b>
                        </div>
                        <p>
                            本次結果將影響國民理財機器人部分功能之使用，請您詳閱並確認以下資訊：
                        </p>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        新申購<br class="hidden-xs-only"/>投資組合
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        無法申購投資組合
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        既有投資組合<br class="hidden-xs-only"/>單筆加碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        無法單筆加碼已持有之投資組合
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        部分贖回/終止計畫
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        部分與全部贖回交易不受影響
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        再平衡通知
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        請您確認是否繼續由國民理財機器人依原投資組合建議提供管理服務，並願意承擔所有投資風險(包括但不限於原始投資金額之損失、價格波動及匯率變動等)
                                        <el-form-item
                                            prop="rebalanceNotice"
                                            :rules="[
                                                { required: true, message: '請選擇', trigger: 'change' }
                                            ]"
                                        >
                                            <el-radio-group v-model="form.rebalanceNotice">
                                                <el-radio label="同意，依原建議進行再平衡調整"></el-radio>
                                                <el-radio label="不同意，停止再平衡調整"></el-radio>
                                            </el-radio-group>
                                        </el-form-item>
                                        <el-alert
                                            class="borderStyle margin-bottom-0"
                                            type="warning"
                                            show-icon
                                            :closable="false"
                                        >
                                            <template v-slot:title>
                                                【注意】
                                            </template>
                                            <slot name="description">
                                                請審慎評估本身之財務狀況與風險承受能力是否適合此投資組合，國民理財機器人服務並不保證投資組合之獲利或負擔損失。
                                            </slot>
                                        </el-alert>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="successPopUp()"
                        >
                            確認送出
                        </el-button>
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/Kyc'); $scrollTo('body')">
                            重新填寫
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `更新成功`,
                message: `<div class="text-center">本次風險屬性評估已生效</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/PersonalData");
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= 優惠券管理 ==============================================================================================================================
// A253917304有一張優惠券
const Coupon = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `優惠券管理`,
            },

            itemTitWidth: "120px",

            form: {
                CouponCode: '',
            },

            step: 1,
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <h2 class="tit-type2" title="優惠券兌換">
                            優惠券兌換
                        </h2>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xxl-2 columnCount-md-1">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        您的優惠券代碼
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-input placeholder="請輸入優惠券代碼" v-model="form.CouponCode">
                                            <el-button slot="append" @click="exchange">兌換</el-button>
                                        </el-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <slot name="description">
                                英文字母大小寫視為不同，為避免英數辦識問題，建議複製通知信內容後貼上使用
                            </slot>
                        </el-alert>
                    </el-card>
                    <el-card class="tradingProcess-card">
                        <h2 class="tit-type2" title="優惠券列表">
                            優惠券列表
                        </h2>
                        <p>
                            下表為優惠券領取記錄，如欲了解紅利點數使用明細，請至
                            <el-button
                                round
                                plain
                                class="sBtn baseFontSize"
                                type="primary"
                                @click="$router.push('/Bonus'); $scrollTo('body')">
                                紅利點數查詢
                            </el-button>；手續費優惠請參閱基金下單單元的優惠類別手續費率選單
                        </p>
                        <div class="tradingProcess-card-content">
                        </div>
                    </el-card>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    優惠券需兌換方可使用優惠，完成兌換後限受益人本人於國民e帳戶網路交易平台使用，不得轉讓他人或合併計算。優惠券號或通關代碼請於兌換到期日前兌換，優惠內容請於有效期限內使用，逾期不得要求以其他形式重新兌領，請注意兌換與使用期限，以免損及使用權益。
                                </li>
                                <li>
                                    優惠券中手續費優惠僅限折抵網路交易之單筆申購與定期定額申購手續費，紅利點數僅限折抵網路交易之單筆申購與定期定額手續費，書面及傳真申購手續費不適用，亦無法轉換成實際現金提領。
                                </li>
                                <li>
                                    投資人可自行選擇欲使用之手續費優惠費率，系統將自動計算該筆交易可扣抵之紅利點數，手續費差額投資人仍需自行負擔。若該筆交易因銀行存款不足，或未於指定時間內轉帳付款，導致該筆交易失敗，手續費優惠或紅利點數將返還；如經申購交易成功後，手續費優惠與紅利點數已折抵使用，則不得要求返還；透過活動下單專頁之申購若遇交易失敗，則無法返還該筆手續費優惠或紅利點數。
                                </li>
                                <li>
                                    優惠內容包含紅利點數者，紅利點數之使用規則、使用期限、使用狀況等相關資訊，請至【我的帳戶】<i class="fas fa-angle-double-right"></i>
                                    <el-link type="primary" @click="$router.push('/Bonus'); $scrollTo('body')">【紅利點數查詢】</el-link>
                                    中確認。
                                </li>
                                <li>
                                    優惠券之取得及使用期限、方式、限制等相關規定，依各活動之規定辦理，本公司保留活動變更之權利，優惠內容請參閱官網優惠活動說明。
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
    },
    mounted() {
        this.notification();
    },
    methods: {
        exchange() {
            if( this.step == 1) {
                this.errorPopUp();
                this.step++;
            }else {
                this.errorPopUp2();
            }
        },
        errorPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "warning",
                title: `請輸入優惠券代碼`,
                cancelButtonText: "確定",
            })
                .catch(() => {
                    // this.$router.push("/Status");
                    // this.$scrollTo("body");
                });
        },
        errorPopUp2() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "warning",
                title: `無此優惠券`,
                cancelButtonText: "確定",
            })
                .catch(() => {
                    // this.$router.push("/Status");
                    // this.$scrollTo("body");
                });
        },
        notification() {
            this.$notify({
                type: 'warning',
                title: '擱置中...',
                message: '優惠券管理暫時擱置不處理',
                // position: 'bottom-right',
                duration: 0
            });
        },
    },
};

// ========= 紅利點數查詢 ==============================================================================================================================
const Bonus = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `紅利點數查詢`,
            },

            cumulativeRule: [
                {
                    title: "投資金額(元)",
                    data1: "1,000",
                    data2: "25",
                    data3: "40",
                    data4: "2,500",
                    data5: "250",
                    data6: "200",
                },
                {
                    title: "紅利點數",
                    data1: "1",
                    data2: "1",
                    data3: "1",
                    data4: "1",
                    data5: "1",
                    data6: "1",
                },
            ],

            discountRule: [
                {
                    title: "紅利點數",
                    data1: "1",
                    data2: "40",
                    data3: "25",
                    data4: "1",
                    data5: "4",
                    data6: "5",
                },
                {
                    title: "可折抵申購手續費",
                    data1: "1",
                    data2: "1",
                    data3: "1",
                    data4: "2.5",
                    data5: "1",
                    data6: "1",
                },
            ],

            contractStatusOptions: [
                {
                    value: "1",
                    label: "全部",
                },
                {
                    value: "2",
                    label: "紅利給點活動",
                },
                {
                    value: "3",
                    label: "買千送點活動",
                },
                {
                    value: "4",
                    label: "交易取消還點",
                },
                {
                    value: "5",
                    label: "紅利扣點活動",
                },
                {
                    value: "6",
                    label: "交易扣點",
                },
                {
                    value: "7",
                    label: "到期扣點",
                },
            ],
            contractStatusValue: "1",

            bonusData: [
                {
                    addOrSubtract: 'subtract',
                    points: '-200',
                    expiryDate: '',
                    tit: `定期定額(交易書號:20210125D00405347/手續費EUR5.000000元/兌換比例40.00)`,
                    date2: '2021/01/25 14:25',
                },
                {
                    addOrSubtract: 'subtract',
                    points: '-7,200',
                    expiryDate: '',
                    tit: `定期定額(交易書號:20210125D00405346/手續費USD180.000000元/兌換比例40.00)`,
                    date2: '2021/01/25 14:25',
                },
                {
                    addOrSubtract: 'add',
                    points: '+3',
                    expiryDate: '2120/12/28',
                    tit: `紅利活動 (買千累點)`,
                    date2: '2021/01/21 02:30',
                },
                {
                    addOrSubtract: 'add',
                    points: '+1,000',
                    expiryDate: '2022/01/02',
                    tit: `生日紅利 (鑽石會員生日禮)`,
                    date2: '2021/01/02 04:00',
                },
                {
                    addOrSubtract: 'add',
                    points: '+1,500',
                    expiryDate: '2021/01/06',
                    tit: `交易金額紅利 (單筆申購滿額禮)`,
                    date2: '2021/01/01 03:10',
                },
                {
                    addOrSubtract: 'subtract',
                    points: '-1,080',
                    expiryDate: '',
                    tit: `智能理財(交易書號:RB11809/手續費TWD1080.000000元/兌換比例1.00)`,
                    date2: '2020/12/29 15:54',
                },
                {
                    addOrSubtract: 'add',
                    points: '+2,400',
                    expiryDate: '2021/01/10',
                    tit: `單筆申購(交易書號:20201223E00023474/手續費EUR60.000000元/兌換比例40.00) 交易取消`,
                    date2: '2020/12/23 11:23',
                },
                {
                    addOrSubtract: 'subtract',
                    points: '-2,400',
                    expiryDate: '',
                    tit: `單筆申購(交易書號:20201223E00023474/手續費EUR60.000000元/兌換比例40.00)`,
                    date2: '2020/12/23 11:23',
                },
                {
                    addOrSubtract: 'add',
                    points: '+1,225',
                    expiryDate: '2021/12/10',
                    tit: `紅利活動 (「投資體質改造計畫」簽到見面禮)`,
                    date2: '2020/12/10 18:56',
                },
                {
                    addOrSubtract: 'add',
                    points: '+1,225',
                    expiryDate: '2021/12/10',
                    tit: `紅利活動 (「投資體質改造計畫」簽到見面禮)`,
                    date2: '2020/12/10 18:56',
                },
            ],

            pagination: {
                currentPage: 1,
                pageSize: 10,
                total: 160,
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-row :gutter="10">
                        <el-col :xl="5" :md="7" :sm="12">
                            <littleFilter tit="查詢項目">
                                <template v-slot:input>
                                    <el-select v-model="contractStatusValue" placeholder="請選擇">
                                        <el-option
                                            v-for="item in contractStatusOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </template>
                            </littleFilter>
                        </el-col>
                        <el-col :xl="6" :lg="10" :md="6" :sm="12" class="margin-top-sm-10">
                            <rangeDate class="type2 baseHeight float-none margin-bottom-sm-0"></rangeDate>
                        </el-col>
                        <el-col :xl="13" :lg="24">
                            <div class="tit-type2 margin-top-10 margin-top-sm-10 margin-bottom-0"
                                :class="{'text-right' : this.$root.$data.windowWidth > 1919}"
                            >
                                <span>可使用紅利點數：<b class="text-blue">22,112</b></span>
                                <el-divider
                                    direction="vertical"
                                    class="hidden-xs-only"
                                ></el-divider>
                                <br class="hidden-sm-and-up"/>
                                <span>30日內到期點數：<b class="text-blue">0</b></span>
                            </div>
                        </el-col>
                    </el-row>
                    <div class="fundList-area">
                        <div
                            class="fundList noNext"
                            v-for="(item, index) in bonusData"
                            :key="index"
                        >
                            <el-card shadow="never">
                                <div class="fundList-header">
                                    <el-row :gutter="10">
                                        <el-col :span="24">
                                            <div class="fundList-header-content">
                                                <el-tag
                                                    :effect="item.addOrSubtract == 'add' ? 'dark' : 'dark'"
                                                    :type="item.addOrSubtract == 'add' ? '' : 'danger'"
                                                    size="small"
                                                    class="margin-right-10 margin-top-10 margin-bottom-10"
                                                >
                                                    <b>{{item.points}}</b> 點
                                                </el-tag>
                                                <div class="fundList-dealDate" v-if="item.expiryDate != ''">
                                                    點數到期日：{{item.expiryDate}}
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <h2 class="fundList-fundName noFundSmallFile small" :title="item.tit">
                                        {{item.tit}}
                                    </h2>
                                </div>
                            </el-card>
                            <div class="fundList-bottom">
                                <div class="fundList-bottom-content">
                                    <div class="priceNotification-info">
                                        <span>給點/扣點時間：{{item.date2}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <el-pagination
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.currentPage"
                        :page-size="pagination.pageSize"
                        :pager-count="5"
                        :layout="
                            this.$root.$data.windowWidth > 767 ? 'total, prev, pager, next, jumper' : 'prev, slot, next'
                        "
                        :total="pagination.total"
                        :hide-on-single-page="true"
                        :class="{
                            'text-right': this.$root.$data.windowWidth > 991,
                            'text-center': this.$root.$data.windowWidth < 992,
                        }"
                    >
                        <div class="mobilePage">
                            {{pagination.currentPage}} / {{totalPage}}
                        </div>
                    </el-pagination>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li>
                                    紅利點數使用期限至點數有效期限當日23:59。
                                </li>
                                <li>
                                    紅利點數僅限折抵網路交易之單筆、定期定額與智能理財專區交易手續費，其他交易例如書面及傳真交易申購手續費不適用，亦無法轉換成實際現金提領。
                                </li>
                                <li>
                                    投資金額可累積紅利點數（轉換交易除外），給點規則如下：
                                    <el-table
                                        :data="cumulativeRule"
                                        stripe
                                        size="mini"
                                        border
                                        style="width: 622px; margin-top: 5px;"
                                    >
                                        <el-table-column
                                            prop="title"
                                            width="160"
                                            label="幣別"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data1"
                                            width="70"
                                            label="新台幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data2"
                                            width="90"
                                            label="美元/歐元"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data3"
                                            width="70"
                                            label="澳幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data4"
                                            width="70"
                                            label="日幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data5"
                                            width="80"
                                            label="南非幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data6"
                                            label="人民幣"
                                        ></el-table-column>
                                    </el-table>
                                </li>
                                <li>
                                    紅利點數可折抵申購手續費，折抵規則如下：
                                    <el-table
                                        :data="discountRule"
                                        stripe
                                        size="mini"
                                        border
                                        style="width: 622px; margin-top: 5px;"
                                    >
                                        <el-table-column
                                            prop="title"
                                            width="160"
                                            label="幣別"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data1"
                                            width="70"
                                            label="新台幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data2"
                                            width="90"
                                            label="美元/歐元"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data3"
                                            width="70"
                                            label="澳幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data4"
                                            width="70"
                                            label="日幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data5"
                                            width="80"
                                            label="南非幣"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="data6"
                                            label="人民幣"
                                        ></el-table-column>
                                    </el-table>
                                </li>
                                <li>
                                    紅利點數1點可折抵手續費1元，最低可使用紅利點數折抵手續費至0%。網路交易單筆與智能理財專區申購時，投資人可自行選擇是否使用紅利點數折抵手續費，而「定期定額」手續費則將一律以紅利點數優先折抵至紅利點數用盡為止，無法選擇暫不折抵，若可使用之紅利點數不足以折抵全部手續費，差額部分將由指定扣款帳戶內與申購價金一併扣除。
                                </li>
                                <li>
                                    選擇使用紅利點數時，投資人可自行選擇欲使用之手續費優惠費率，系統將自動計算該筆交易可扣抵之紅利點數，手續費差額投資人仍需自行負擔。
                                </li>
                                <li>
                                    使用紅利點數折抵手續費，若該筆交易因銀行存款不足，或未於指定時間內轉帳付款，導致該筆交易失敗，紅利點數將返還；如經申購交易成功後，紅利點數已折抵使用，則不得要求返還；若透過活動下單專頁之交易，即使交易失敗仍無法返還該筆紅利點數。
                                </li>
                                <li>
                                    紅利點數依點數到期日的先後順序折抵，再以先進先出法扣除，無法指定折抵或部分折抵。
                                </li>
                                <li>
                                    紅利點數僅限受益人本人於國民e帳戶網路交易平台使用，不得轉讓他人或合併計算，請注意使用期限，以免損及使用權益。
                                </li>
                                <li>
                                    紅利點數之取得及使用期限、方式、限制等相關規定，依各活動之規定辦理，本公司保留活動變更之權利，優惠內容請參閱官網優惠活動說明。
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
        littleFilter: littleFilter,
        rangeDate: rangeDate,
    },
    computed: {
        totalPage: function() {
            return Math.ceil(this.pagination.total / this.pagination.pageSize);
        }
    },
    methods: {
        handleSizeChange(val) {
            // console.log(`每頁 ${val} 條`);
        },
        handleCurrentChange(val) {
            // console.log(`當前頁: ${val}`);
            this.pagination.currentPage = val;
            this.$scrollTo('body');
        }
    },
};

// ========= 通知信寄發管理 ==============================================================================================================================
const MailGroup = {
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `通知信寄發管理`,
            },

            itemTitWidth: "135px",

            form: {
                S05: [],
                checkedMailType: ['單筆申購委託通知', '取消單筆申購委託通知', '單筆申購扣款失敗通知', '定期定額申購委託通知', '取消定期定額申購委託通知', '定期定額變更委託通知', '取消定期定額變更委託通知', 
                                    '贖回交易委託通知', '定期定額扣款失敗通知', '取消贖回交易委託通知', '轉換交易委託通知', '取消轉換交易委託通知', '轉換交易委託失敗通知', '定期定額扣款成功通知'],
                mailType: ['單筆申購委託通知', '取消單筆申購委託通知', '單筆申購扣款失敗通知', '定期定額申購委託通知', '取消定期定額申購委託通知', '定期定額變更委託通知', '取消定期定額變更委託通知', 
                            '贖回交易委託通知', '定期定額扣款失敗通知', '取消贖回交易委託通知', '轉換交易委託通知', '取消轉換交易委託通知', '轉換交易委託失敗通知', '定期定額扣款成功通知'],
                transactionPassword: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <h2 title="請勾選或取消欲寄發的郵件" class="tit-type2">
                            請勾選或取消欲寄發的郵件
                        </h2>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        系統通知類型
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-checkbox v-model="form.S05">
                                            個人通訊資料變更通知信
                                        </el-checkbox>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        基金交易委託通知類型
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-checkbox-group v-model="form.checkedMailType">
                                            <el-row :gutter="10">
                                                <el-col
                                                    :xl="6"
                                                    :md="8"
                                                    :sm="12"
                                                    v-for="(item, index) in form.mailType"
                                                    :key="index"
                                                >
                                                    <el-checkbox :label="item">{{item}}</el-checkbox>
                                                </el-col>
                                            </el-row>
                                        </el-checkbox-group>
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
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            @click="successPopUp();">
                            確認設定
                        </el-button>
                    </div>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `設定完成`,
                message: `<div class="text-center">親愛的客戶您好：若有需要，您可隨時變更設定。</div>`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "確定",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/");
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= 查詢密碼提示 ==============================================================================================================================
const GetLoginPwdHint = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `查詢/補發會員登入密碼`,
            },

            itemTitWidth: "120px",

            form: {
                Idno: "",
                Birthday: "",
            },

            step: 1,
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <h2 title="查詢密碼提示" class="tit-type2">
                            查詢密碼提示
                        </h2>
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                            v-if="step == 1"
                        >
                            <slot name="description">
                                請輸入您的登入帳號及生日(或公司成立日)來查詢您之前設定的密碼提示
                            </slot>
                        </el-alert>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xxl-2 columnCount-md-1" v-if="step == 1">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入<br class="hidden-xs-only"/>登入帳號
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Idno"
                                            :rules="[
                                                { required: true, message: '請輸入登入帳號'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.Idno"
                                                placeholder="請輸入您的登入帳號">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入您的<br class="hidden-xs-only"/>生日8位數字
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Birthday"
                                            :rules="[
                                                { required: true, message: '請輸入您的生日'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.Birthday"
                                                placeholder="範例:19110801"
                                                type="number"
                                            >
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                            <template v-if="step == 2">
                                <p>
                                    您的密碼提示語為：<b class="text-red">富蘭克林‧國民ｅ帳戶</b>
                                </p>
                                <p>
                                    如果您已經知道登入密碼，請回登入頁繼續使用，如果您仍忘記登入密碼，請選擇補發登入密碼，依照提示重新設定。
                                </p>
                            </template>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            class="full-sm"
                            @click="nextStep(); $scrollTo('body')"
                        >
                        
                            <template v-if="step == 1">
                                查詢密碼提示
                            </template>
                            <template v-if="step == 2">
                                補發登入密碼
                            </template>
                        </el-button>
                        <el-button
                            type="text"
                            @click="$router.push('/'); $scrollTo('body')"
                        >
                            回登入頁
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        nextStep() {
            this.step == 1 ? this.step++ : this.$router.push('/ResetLoginPwd');
        },
    },
};

// ========= 忘記登入密碼 ==============================================================================================================================
const ResetLoginPwd = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `補發登入密碼`,
            },

            itemTitWidth: "120px",

            form: {
                Idno: "",
                Birthday: "",
                Email: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <el-alert
                            class="borderStyle"
                            type="warning"
                            show-icon
                            :closable="false"
                        >
                            <template v-slot:title>
                                如果您確定要補發登入密碼
                            </template>
                            <slot name="description">
                                我們會將新的「登入密碼」寄至您的電子郵件信箱，當您收到「登入密碼」後，您可自行於本系統登入並重設登入密碼。
                            </slot>
                        </el-alert>
                        <div class="tradingProcess-card-content">
                            <div class="tradingProcess-card-content-item-area columnCount-3 columnCount-xxl-2 columnCount-md-1">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入<br class="hidden-xs-only"/>登入帳號
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Idno"
                                            :rules="[
                                                { required: true, message: '請輸入登入帳號'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.Idno"
                                                placeholder="請輸入您的登入帳號">
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入您的<br class="hidden-xs-only"/>生日8位數字
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Birthday"
                                            :rules="[
                                                { required: true, message: '請輸入您的生日'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.Birthday"
                                                placeholder="範例:19110801"
                                                type="number"
                                            >
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        請輸入您留存的<br class="hidden-xs-only"/>電子郵件信箱
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-form-item
                                            prop="Email"
                                            :rules="[
                                                { required: true, message: '請輸入電子郵件信箱'},
                                            ]"
                                        >
                                            <el-input
                                                v-model="form.Email"
                                                placeholder="電子郵件信箱"
                                                type="email"
                                            >
                                            </el-input>
                                        </el-form-item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            round
                            type="primary"
                            class="full-sm"
                            @click="successPopUp()"
                        >
                            確定補發登入密碼
                        </el-button>
                        <el-button
                            type="text"
                            @click="$router.push('/'); $scrollTo('body')"
                        >
                            回登入頁
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        successPopUp() {
            this.$confirm("", {
                dangerouslyUseHTMLString: true,
                roundButton: true,
                // showCancelButton: false,
                closeOnClickModal: false,
                closeOnPressEscape: false,
                // closeOnHashChange: false,
                showConfirmButton: false,
                center: true,
                customClass: "popUpStyle",
                showClose: false,
                type: "success",
                title: `補發完成`,
                message: `感謝您對富蘭克林證券投顧的支持與愛護，我們已補發您所新申請的會員登入密碼至您留存的電子郵件信箱，您可於登入後自行修改為方便好記的密碼。若您有任何問題，請致電至富蘭克林證券投顧客服中心：0800-885-888，線上將有專員為您服務。`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                // confirmButtonText: "確定",
                cancelButtonText: "回登入頁",
            })
                // .then(() => {
                //     this.$router.push("/");
                //     this.$scrollTo("body");
                // })
                .catch(() => {
                    this.$router.push("/");
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= CRS申請流程 ==============================================================================================================================
const CRS = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            page: {
                stit: `我的帳戶`,
                tit: `申購CRS自我證明表`,
            },

            itemTitWidth: "105px",

            step: 1,

            form: {
                transactionPassword: "",

                BF_NAME_E_Last: 'WU',
                BF_NAME_E_First: 'WUN-NAN',

                city: '0',
                district: '1',
                addr: '中正路1989號',

                city2: '1',
                district2: '0',
                addr2: '瑪鋉路123號',

                MAIL_ADDR_CITY_E: 'Taipei City',
                MAIL_ADDR_AREA_E: 'Zhongshan Dist.',
                MAIL_ADDR_REST_E: 'No.1989, Zhongzheng Rd. Zhongshan Dist. Taipei City',

                SendWhere: '',
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <el-card class="tradingProcess-card">
                        <div class="tradingProcess-card-content" v-if="step == 1 || step == 2">
                            <p>
                                歡迎您經由國民e帳戶電子交易平台申請CRS自我證明表，為執行共同申報及盡職審查作業辦法(下稱本辦法)規定，⾦融機構應蒐集及申報有關帳⼾持有⼈稅務居住者⾝分之特定資訊。本辦法係依稅捐稽徵法第5條之1第6項訂定，其內容參考經濟合作暨發展組織發布之共同申報及盡職審查準則(下稱共同申報準則)。本公司為配合⾦融機構依本辦法規定取得帳⼾持有⼈之⾃我證明文件，以辨識帳⼾持有⼈為稅務居住者之國家/地區。
                            </p>
                            <p>
                                請輸入交易密碼並確認以下資料。
                            </p>
                            <div id="confirmInfo"></div>
                            <el-alert
                                class="borderStyle"
                                type="warning"
                                show-icon
                                :closable="false"
                            >
                                <slot name="description">
                                    如欲變更個人基本資料，請參考
                                    <el-link type="primary" icon="fas fa-external-link-alt" @click="$router.push('/PersonalDataModify'); $scrollTo('body')" target="_blank">【個人基本資料】</el-link>
                                    頁。
                                </slot>
                            </el-alert>
                        </div>
                        <div class="tradingProcess-card-content" v-if="step == 1">
                            <div class="tradingProcess-card-content-item-area">
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
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <template v-if="step == 2">
                                <div class="tradingProcess-card-content">
                                    <div class="tradingProcess-card-content-item-area">
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                英文姓名
                                            </div>
                                            <div class="tradingProcess-card-content-item-input">
                                                <el-row :gutter="10">
                                                    <el-col :span="10">
                                                        <el-input
                                                            v-model="form.BF_NAME_E_Last"
                                                            placeholder="姓氏"
                                                            readonly>
                                                        </el-input>
                                                    </el-col>
                                                    <el-col :span="14">
                                                        <el-input
                                                            v-model="form.BF_NAME_E_First"
                                                            placeholder="名字"
                                                            readonly>
                                                        </el-input>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                通訊地址
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="city"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.city" placeholder="請選擇">
                                                                <el-option label="台北市" value="0"></el-option>
                                                                <el-option label="新北市" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="district"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.district" placeholder="請選擇">
                                                                <el-option label="中正區" value="0"></el-option>
                                                                <el-option label="中山區" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="addr"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.addr"
                                                                placeholder="街道、門牌號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                居住地址
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="city2"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.city2" placeholder="請選擇">
                                                                <el-option label="台北市" value="0"></el-option>
                                                                <el-option label="新北市" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="district2"
                                                            :rules="[
                                                                { required: true, message: '請選擇', trigger: 'change' }
                                                            ]"
                                                        >
                                                            <el-select v-model="form.district2" placeholder="請選擇">
                                                                <el-option label="萬里區" value="0"></el-option>
                                                                <el-option label="金山區" value="1"></el-option>
                                                            </el-select>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="addr2"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.addr2"
                                                                placeholder="街道、門牌號碼">
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                英文居住地址
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-row :gutter="10">
                                                    <el-col :md="6" :sm="12">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_CITY_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入縣市'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_CITY_E"
                                                                placeholder="縣市"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="6" :sm="12" class="margin-top-sm-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入市區鎮'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_AREA_E"
                                                                placeholder="市區鎮"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :md="12" :sm="24" class="margin-top-md-10">
                                                        <el-form-item
                                                            prop="MAIL_ADDR_AREA_E"
                                                            :rules="[
                                                                { required: true, message: '請輸入街道、門牌號碼'},
                                                            ]"
                                                        >
                                                            <el-input
                                                                v-model="form.MAIL_ADDR_REST_E"
                                                                placeholder="街道、門牌號碼"
                                                                readonly>
                                                            </el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>
                                                <el-alert
                                                    class="borderStyle"
                                                    type="warning"
                                                    show-icon
                                                    :closable="false"
                                                >
                                                    <slot name="description">
                                                        以上為您原留之英文地址或是中文地址透過程式英譯的結果，請核對是否正確。英文通訊地址僅用於本文件之套印，相關實體文件將使用您留存與本公司的中文通訊地址寄送，請您特別留意。
                                                    </slot>
                                                </el-alert>
                                            </div>
                                        </div>
                                        <el-divider class="columnSpan margin-top-10 margin-bottom-10"></el-divider>
                                        <div class="tradingProcess-card-content-item columnSpan">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                文件取得方式
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                <el-form-item
                                                    prop="SendWhere"
                                                    :rules="[
                                                        { required: true, message: '請選擇', trigger: 'change' }
                                                    ]"
                                                >
                                                    <el-radio-group v-model="form.SendWhere">
                                                        <el-radio :label="1">自行下載/列印文件</el-radio>
                                                        <el-radio :label="2">郵寄至通訊地址：354 - 苗栗縣獅潭鄉中*****</el-radio>
                                                    </el-radio-group>
                                                </el-form-item>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </transition>

                        <template v-if="step == 3">
                            <div class="tit-type2">
                                <b>
                                    「CRS自我證明表」已為您準備好
                                    <template v-if="form.SendWhere == 2">
                                        ，我們會盡快以掛號郵寄文件至您指定的地址，提醒您留意收件
                                    </template>
                                    ！
                                </b>
                            </div>
                            <el-alert
                                v-if="form.SendWhere != 2"
                                class="borderStyle margin-bottom-20"
                                type="warning"
                                show-icon
                                :closable="false"
                            >
                                <template v-slot:title>
                                    <b>提醒您</b>
                                </template>
                                <slot name="description">
                                    文件已加密處理，請輸入您的身分證字號以開啟文件。<b class="text-red">(請勿雙面列印)</b>
                                </slot>
                            </el-alert>
                        </template>
                        <div class="tradingProcess-card-content" v-if="step == 3">
                            <h2 title="填寫/寄回方式說明" class="tit-type2">
                                填寫/寄回方式說明
                            </h2>
                            <ol class="margin-bottom-20">
                                <li>
                                    <b>填寫方式：</b>
                                    <br/>「CRS自我證明表」已置入您開戶留存的個人資料，您僅需於左下方”簽名欄”簽名即可 <b>(不須留存銀行印鑑)</b>
                                </li>
                                <li>
                                    <b>寄回方式：</b>可選擇
                                    <ol>
                                        <li>
                                            <b>郵局：</b>郵寄至10690台北郵政53-0665號信箱 富蘭克林證券投顧 收
                                        </li>
                                        <li>
                                            <b>7-11宅急便：</b>索取宅急便「到付託運單」，收件人請填10690 台北市大安區忠孝東路四段87號8樓 富蘭克林證券投顧 客服部 收
                                        </li>
                                        <li>
                                            <b>掃描或手機拍照：</b>掃描或手機拍照整份文件(需清楚完整可辨識)，將檔案e-mail至客服信箱「<el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">service@franklin.com.tw</el-link>」並留下您的姓名及聯絡電話，以利與您聯絡確認
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="step != 3"
                            round
                            type="primary"
                            @click="nextStep()"
                        >
                            <template v-if="step == 1">
                                進行確認
                            </template>
                            <template v-if="step == 2">
                                確認送出
                            </template>
                        </el-button>
                        <el-button
                            v-if="form.SendWhere != 2 && step == 3"
                            round
                            type="primary"
                            @click="nextStep()"
                        >
                            下載 / 列印文件
                        </el-button>
                        <el-button
                            v-if="step == 3"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/'); $scrollTo('body')">
                            回國民e帳戶
                        </el-button>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        pageTit: pageTit,
    },
    methods: {
        nextStep() {
            if (this.step == 1 || this.step == 2) {
                this.step == 1 ? this.$scrollTo('#confirmInfo') : this.$scrollTo('body');
                this.step++;
            }else {
                return;
            }
        },
    },
};

// ========= 國民e帳戶開戶相關同意條款 ==============================================================================================================================
// 開戶約定書及基金傳真暨約定事項條款
Vue.component('agreementInfo1', {
    template: ` <div>
                    <p>
                        立書人(下稱本人)向富蘭克林證券投資顧問股份有限公司(下稱富蘭克林證券投顧)申請開立基金交易帳戶，本人同意遵守並依據下列條款及約定：
                    </p>
                    <p class="text-center">
                        <b>【同意書】</b>
                    </p>
                    <ul class="chineseListStyle">
                        <li>
                            本人同意，凡以本人留存之同式印鑑辦理之基金委託買賣、交割及契約有關事項之變更(如變更地址、電話等)均視同本人之行為；該印鑑若生遺失或變更等情事時，本人願立即向富蘭克林證券投顧辦理變更手續，於未完成變更前就上開事項所生之問題，本人願自行負責。本人同意於本約定書之約定範圍內，富蘭克林證券投顧及本人已有往來之金融機構得蒐集、處理及利用本人之個人資料，處理及利用之期限，為自本約定書生效之日起，至本約定書權利義務消滅之日後五年。但其他法令另有規定者，從其規定。
                        </li>
                        <li>
                            款項收付事宜
                            <ol>
                                <li>
                                    本人同意本款項收付作業，除本約定外，應遵守主管機關訂定或發布之境外基金及境內基金等相關法規及函釋、臺灣集中保管結算所股份有限公司（以下簡稱集保結算所）訂定之業務操作辦法及相關規定，修正時亦同。
                                </li>
                                <li>
                                    本人同意以富蘭克林證券投顧名義為本人向投信事業及境外基金機構(以下稱基金公司)申購證券投資信託基金(境內基金)及境外基金(以下稱基金)，應將申購款項匯予集保結算所指定之款項收付專戶，或於集保結算所之款項收付機構或參加全國性繳費（稅）業務之金融機構（以下合稱扣款行）開戶辦理扣款事宜；其買回、孳息分派及清算等款項，並同意由集保結算所指定之款項收付專戶匯至本人指定之金融機構款項帳戶。
                                </li>
                            </ol>
                        </li>
                        <li>
                            繳款方式：
                            <ol class="figuresInBracketsStyle">
                                <li>
                                    匯款方式
                                    <ol>
                                        <li>
                                            本人同意應於單筆匯款申購當日將包含申購手續費之申購款項，以本人名義於集保結算所規定時間前匯達集保結算所指定之款項收付專戶。
                                        </li>
                                        <li>
                                            本人同意應於每次單筆匯款申購基金時提交有關匯款收據予富蘭克林證券投顧核對，並瞭解本項申購須經集保結算所比對匯入款項及申購資料相符後，始能提供予投信事業辦理申購作業或提供予總代理人向境外基金機構辦理申購作業；對於單筆匯款申購款項未能於申購日依集保結算所規定時間前匯達者，集保結算所將於次一營業日辦理相關申購作業。
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    扣款方式
                                    <ol>
                                        <li>
                                            本人同意辦理單筆扣款申購或定期定額扣款申購作業，應於扣款行開設款項帳戶，填具基金扣款轉帳授權書（以下簡稱扣款授權書），並於扣款授權書簽蓋原留印鑑後自行或交予富蘭克林證券投顧轉送扣款行或透過線上申請扣款轉帳授權事宜。授權扣款行於本人申購基金時，依集保結算所通知辦理扣款事宜；本人申請之扣款授權，倘授權失敗時，本人經富蘭克林證券投顧通知後，須重新申請。
                                        </li>
                                        <li>
                                            單筆扣款申購之扣款日為申購日；定期定額扣款作業之指定扣款日，倘遇例假日或台北市政府宣佈停止上班時，得順延至次一營業日辦理扣款作業。
                                        </li>
                                        <li>
                                            本人同意變更扣款帳戶時，新扣款帳戶之扣款授權未經扣款行完成授權作業前，仍以原扣款帳戶辦理扣款作業。
                                        </li>
                                        <li>
                                            本人同意以扣款方式給付富蘭克林證券投顧買回或轉換費用時，應先完成扣款授權作業，並同意如扣款行無法於客戶申請當日完成扣款作業，即取消該筆買回或轉換交易。
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    採買回款項支付方式
                                    <ol>
                                        <li>
                                            本人同意以其買回款項支付申購同一銷售機構銷售之其他基金申購款項時，該筆轉申購金額即為買回款項扣除申購手續費後之金額，集保結算所並將於完成買回款項比對後，辦理相關申購款項付款作業。
                                        </li>
                                        <li>
                                            本人同意前述轉申購之申請，如其金額低於基金公司規定最低申購金額或該轉申購基金係暫停交易或因不符轉申購基金公司之規定者，該筆轉申購不成功，集保結算所得逕行將買回款項扣除匯費後，匯至客戶指定之金融機構款項帳戶。
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            扣款失敗之處理：
                            <ol>
                                <li>
                                    單筆扣款申購：本人同意如扣款行無法於本人申購當日完成扣款作業，即取消該筆申購資料。
                                </li>
                                <li>
                                    定期定額扣款申購：本人同意如同一基金依集保結算所規定扣款失敗達一定次數者，即停止辦理該筆基金之扣款。
                                </li>
                                <li>
                                    本人申購款項倘因約定帳戶餘額不足、資訊系統服務中斷、電信中斷、其他不可抗力及不可歸責富蘭克林證券投顧或集保結算所之因素，致申購扣款或匯款款項未於交易截止時間前入帳，客戶同意取消該筆交易。因前揭事由所致之遲延或損失，客戶不得向富蘭克林證券投顧及集保結算所請求損害賠償。
                                </li>
                            </ol>
                        </li>
                        <li>
                            淨值（NAV）之計算：有關本人申購之基金淨值（NAV）之計算，本人同意依基金公司規定辦理。
                        </li>
                        <li>
                            約定留存帳戶及匯費負擔：本人同意於辦理申購前，約定留存本人之金融機構款項帳戶，俾供集保結算所辦理買回、孳息分派、清算、募集不成立及本人申購不足或溢繳款項之退款等款項收付作業，上述匯款相關費用，本人同意負擔，集保結算所並得逕行於款項中扣除。如應付本人款項不足支付匯款相關費用者，本人同意暫不予匯款，併本人未來其他應付款項處理。
                        </li>
                        <li>
                            貨幣種類：
                            <ol class="figuresInBracketsStyle">
                                <li>
                                    本人該次申購所支付款項之貨幣種類為新台幣者，爾後其買回、孳息分派、清算、募集不成立退款等款項，集保結算所均以新台幣支付；基金經轉換他種基金後，仍以新台幣支付。
                                </li>
                                <li>
                                    本人該次申購所支付款項之貨幣種類為外幣者，爾後其買回、孳息分派、清算、募集不成立退款等款項，集保結算所均以基金計價之外幣支付；如本人將基金轉換為他種外幣計價之境外基金時，集保結算所則以轉換後基金之計價外幣支付。
                                </li>
                            </ol>
                        </li>
                        <li>
                            結匯授權：本人同意授權集保結算所辦理基金申購、買回、孳息分派、清算、募集不成立等款項之結匯事宜，並同意授權集保結算所得與銀行議定單一之買進或賣出匯率，辦理結匯作業。
                        </li>
                        <li>
                            個資法同意及告知聲明：本人同意富蘭克林證券投顧及集保結算所得依個人資料保護法及相關法令規定，於富蘭克林證券投顧及集保結算所之特定目的範圍內或為客戶之利益於特定目的範圍外，對本人之個人資料為蒐集、處理、國際傳遞及利用。
                        </li>
                    </ul>

                    <el-divider></el-divider>
                    <p class="text-center">
                        <b>【傳真交易約定條款】</b>
                    </p>
                    <p>
                        本人茲就向富蘭克林證券投顧申購、買回﹙含轉申購﹚現有及將來經主管機關核准代理之基金﹙以下簡稱富蘭克林證券投顧系列基金﹚事宜，同意遵守以下約定：
                    </p>
                    <ul class="chineseListStyle">
                        <li>
                            本人以傳真方式向富蘭克林證券投顧辦理富蘭克林證券投顧系列基金之申購、買回﹙含轉申購﹚作業時，應先填妥申購書、買回﹙含轉申購﹚申請書，於申請當日將所填之表格加蓋原留印鑑後，傳真至富蘭克林證券投顧之傳真專線：02-2772-9393，且以確認專線：0800-885-888與富蘭克林證券投顧確認該項申請。
                        </li>
                        <li>
                            如以傳真方式申請買回者，本人同意富蘭克林證券投顧於辨識傳真所附簽章與開戶原留印鑑簽章樣式相符，並核對身分證字號與出生日期等相關基本資料，確為本人無誤後，即視為本人所為之交易指示，本人對使用本人印鑑而為之交易指示均應負責。但富蘭克林證券投顧仍有權﹙但非義務﹚要求以其他方式再行確認身份或交易內容﹙包括但不限於當面確認或要求寄回買回申請書正本﹚。
                        </li>
                        <li>
                            如傳真之文件因電話線路、機器故障或其他任何因素致所顯示之文件內容無法辨認，或富蘭克林證券投顧認為有確認之需要，本人同意於另行傳真清楚足以辨識其內容以及簽章樣式之文件，予富蘭克林證券投顧並完成確認前，富蘭克林證券投顧得拒絕接受本人以傳真方式所為之相關交易。
                        </li>
                    </ul>

                    <el-divider></el-divider>
                    <p class="text-center">
                        <b>【約定事項】</b>
                    </p>
                    <p>
                        就本人經由書面／傳真交易服務委託申購、買回基金等相關事宜，本人同意簽署並遵守下列條款及條件：
                    </p>
                    <ol>
                        <li>
                            本人於申請書中所提供之各項資料均已詳實填寫並確認無誤，將成為本人日後所有交易之依據， 富蘭克林證券投顧得依據資料傳真並寄發交易記錄。
                        </li>
                        <li>
                            本人願遵守法令之規定，不將印鑑、存摺交由富蘭克林證券投顧員工保管或與其有借貸金錢之情事及媒介，否則因此所生之糾紛或損害，願自行負責，概與 富蘭克林證券投顧無涉，特立此聲明為憑。
                        </li>
                        <li>
                            因通訊斷線、斷電、天然災害或非可歸責於「富蘭克林證券投顧」之不可抗力事由，所致傳輸或委託申購、委託買回接收、執行之延遲，「富蘭克林證券投顧」無須負任何責任。
                        </li>
                        <li>
                            本人同意基金交易限由本人使用，不得將本約定書所定權利義務轉讓予他人。本人瞭解並同意，為保障雙方權益，「富蘭克林證券投顧」得自動監測或紀錄本人與「富蘭克林證券投顧」間電話溝通內容，本人也同意「富蘭克林證券投顧」得紀錄本人一切電話語音委託之內容。
                        </li>
                        <li>
                            「富蘭克林證券投顧」將依善良管理人注意義務，完成與基金交易帳戶有關之委託申購及委託買回，但「富蘭克林證券投顧」有拒絕執行任何委託申購及委託買回之絕對裁量權，並無說明原因之義務。
                        </li>
                        <li>
                            「富蘭克林證券投顧」對本人所提供之資料負有保密義務。非因政府法令規定、主管機關要求或經本人同意，富蘭克林證券投顧不得洩露本人所提供之資料，包括因業務上所得知之資訊或具有機密價值之任何書面或非書面資料與任何第三人知悉。又本約定書終止後亦同。
                        </li>
                        <li>
                            任一方可隨時書面通知他方終止本約定書，該終止通知，對於接獲該終止通知前任何已進行交易，皆不受影響，已生權利人義務，亦不受任何影響。
                        </li>
                        <li>
                            本約定書之任一條文如經法院或主管機關認定為無效或無拘束力，僅止於該條文無效或無執行力，其他條文效力不受影響，並於履行本約定書時，該無效或無約束力條文視為不存在。
                        </li>
                        <li>
                            本人為基金交易委託時，應依照相關法令、基金管理辦法、公開說明書、投資人須知及本約定書之規定辦理。本約定事項如有未盡事宜，悉依主管機關相關規定規定及相關金融業務慣例辦理。
                        </li>
                        <li>
                            本人同意本約定書將規範雙方及本約定書所涉一切事宜。為免滋生疑議，如本約定書與雙方就基金交易帳戶所為約定不一致或有所抵觸時，本約定書效力優先。<b>本約定書之準據法為中華民國法律並依其解釋，關於本約定書之一切訴訟，應以中華民國台灣臺北地方法院為第一審管轄法院，但不得排除消費者保護法第47條或民事訴訟法第436條之9規定小額訴訟管轄法院之適用。</b>
                        </li>
                    </ol>

                    <p class="text-right">
                        2021.5
                    </p>
                </div>`,
});

// 電子交易約定書
Vue.component('agreementInfo2', {
    template: ` <div>
                    <p>
                        富蘭克林證券投資顧問股份有限公司「基金電子交易約定書」之約定事項： 
                        <br/>受益人（以下簡稱「甲方」）向富蘭克林證券投資顧問股份有限公司(以下簡稱「乙方」)申購/買回/轉換基金電子交易服務約定事項：
                    </p>
                    <ul class="figuresInBracketsStyle">
                        <li>
                            本開戶交易約定書所使用名詞之定義如下：
                            <p>
                                「電子交易服務」：指乙方依本開戶交易約定書所定之方式，經乙方電子交易系統所提供甲方交易委託、相關資訊及相關應用程式之服務。
                            </p>
                            <p>
                                「電子交易委託」：指透過電子交易型態進行申購（包含單筆及定期定額自由選）、轉換、買回基金或相關交易之任何委託。
                            </p>
                            <p>
                                「登入帳號及密碼」：指為執行交易及查詢交易及個人相關資訊，使用於乙方電子交易服務系統之使用者識別方式。
                            </p>
                            <p>
                                「電子交易流程」：指乙方隨時公告或修正之電子交易相關作業流程。
                            </p>
                            <p>
                                「交易帳戶」：甲方以其本人名義開立並維持之銀行帳戶以作為進行電子交易委託之往來銀行帳戶。
                            </p>
                            <p>
                                「營業日」：指乙方配合主管機關所訂定之交易有效工作日。
                            </p>
                        </li>
                        <li>
                            受理開戶程序
                            <ol>
                                <li>
                                    甲方於開戶時應填相關資料，並提供國民身份證、居留證、護照或其他身分證明文件或法人登記證明文件，及簽署本約定書(或以電子憑證簽章)。
                                </li>
                                <li>
                                    甲方於辦理開戶時，須事先以書面或電子方式指定以其本人名義開立之銀行帳戶以作為進行電子交易委託之往來銀行帳戶，將來請求買回時亦僅得就所指定之帳戶中作選擇。
                                </li>
                                <li>
                                    如甲方指定之交易帳戶有變更時，甲方應事前以書面加蓋原留印鑑後通知乙方(或於相關法令許可之情況下，以其他足以確認身分之方式於國民基金e帳戶平台上辦理)，乙方於接獲交易帳戶變更申請之通知前，就已執行交易之扣款或付款仍以原指定帳戶為準。
                                </li>
                            </ol>
                        </li>
                        <li>
                            交易指示及計價基準
                            <ol>
                                <li>
                                    甲方申請電子交易服務，於取得使用權限後，須本人親自使用專屬密碼，通過身分驗證後始得進行交易指示。甲方有義務妥善保管該密碼。
                                </li>
                                <li>
                                    甲方進行電子交易委託前應詳閱並遵守乙方最新之有關電子交易流程、最新通知、公告及系統狀況。乙方應隨時公佈最新之電子交易相關流程於其電子交易服務系統。
                                </li>
                                <li>
                                    甲方同意使用電子交易方式之交易受理時間應依乙方所訂之電子交易委託時間為準，如逾交易時間或適逢例假日，則視為次一營業日之交易指示。
                                </li>
                                <li>
                                    計價基準
                                    <ol class="lowercaseStyle">
                                        <li>
                                            申購：甲方須依乙方所訂之電子交易委託時間前或集保結算所規定之時間前，或定期定額扣款指定扣款日前，將包含申購手續費之申購款項存入於扣款行開設之款項帳戶或匯至集保結算所指定之款項收付專戶。乙方確認其申購款項已匯至集保結算所確認其申購價金、手續費已匯至指定帳戶及取得其他申購所需文件之當日視為申購日，並以申購日之基金淨值為計算基準，計算甲方之基金受益權單位數。
                                        </li>
                                        <li>
                                            買回：
                                            <ol>
                                                <li>
                                                    境外：甲方請求買回基金受益權單位數時，除公開說明書另有規定外，以甲方買回交易指示到達乙方之營業日之基金淨值計算買回價格。乙方應依境外基金公開說明書或投資人須知之買回給付時間內將買回價金扣除應計之費用、郵費或買回費用等將買回價金匯入甲方之交易帳戶。甲方申請基金轉換時，則以上述買回價金扣除相關費用後之金額計算其轉換基金之股份或單位數。
                                                </li>
                                                <li>
                                                    境內：甲方請求買回基金受益權單位數時，除公開說明書另有規定外，以甲方買回交易指示到達乙方之營業日或次一營業日之基金淨值計算買回價格。乙方應依境內基金證券投資信託契約或公開說明書規定之買回給付時間內將買回價金扣除應計之費用、郵費或買回費用等將買回價金匯入甲方之交易帳戶。甲方申請基金轉換時，則以上述買回價金扣除相關費用後之金額計算其轉換基金之股份或單位數。
                                                </li>
                                            </ol>
                                        </li>
                                        <li>
                                            甲方進行基金交易，但未依約定繳足申購款項及費用或繳回受益憑證者，乙方有權認定該筆交易不成立。
                                        </li>
                                        <li>
                                            基金買回時若符合短線交易之認定時，將依個別基金之規定扣除買回費用，買回費用併入該基金資產。
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                        <li>
                            交易指示之執行與確認：甲方使用乙方電子交易服務系統時，如有下述情形，應立即通知乙方，並配合辦理相關措施：
                            <ol>
                                <li>
                                    於乙方營業日二十四小時內，甲方未收到該電子交易委託回報通知。
                                </li>
                                <li>
                                    甲方已收到該電子交易委託回報之確認通知，但非甲方所作之指示或彼此歧異。
                                </li>
                                <li>
                                    電子交易經確認後，在該營業日有效交易時間內，甲方得取消或修改交易；電子交易經乙方人員將資料完成處理後，甲方無法再做任何取消或修改交易。
                                </li>
                                <li>
                                    甲方得知其使用者密碼被他人盜用等情形。
                                </li>
                                <li>
                                    其他有關電子交易委託所生之問題。
                                </li>
                            </ol>
                        </li>
                        <li>
                            交易限制：除法令變更外，甲方每日電子交易之申購或買回金額均各以相當於新台幣三千萬元或等值外幣為上限，其中買回限額之計算，係以甲方為境外基金電子交易委託前最近公告之基金淨值及匯率為準；境內基金以電子輸入交易前二個營業日之基金淨值為準。如甲方違反前述金額限制，乙方將不予受理。
                        </li>
                        <li>
                            密碼：甲方應妥善保管及使用密碼，並對於使用交易密碼經由乙方電子交易系統所作之一切交易及資料變更等行為負責，但乙方有故意或重大過失致甲方之密碼外洩為第三人所冒用者，不在此限。
                        </li>
                        <li>
                            資料之通知與送達
                            <ol>
                                <li>
                                    所有通知事項，依甲方留存於乙方之本人住所、營業處所或通訊地址，經由郵寄、專人送達、電報、電話、傳真或電子郵件方式為之。
                                </li>
                                <li>
                                    前項通知之送達日如下：
                                    <ol class="lowercaseStyle">
                                        <li>
                                            經由郵寄方式者，以郵寄日之次一營業日為送達日。
                                        </li>
                                        <li>
                                            經由專人送達、電報、電話、傳真或電子郵件方式者，以通知日為送達日。
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    乙方原則上應於通知文件上簽署，但經由乙方網站寄送之通知（包括但不限於網路委託回報或已執行之確認通知）將視為已經乙方簽署。
                                </li>
                                <li>
                                    乙方所寄送之通知資料若有出入，甲方同意應以乙方之正確帳載為準。
                                </li>
                            </ol>
                        </li>
                        <li>
                            甲方資料之處理與保護
                            <br/>
                            甲方同意乙方得依個人資料保護法、相關法令及各基金證券投資信託契約及境外基金公開說明書之規定，依其營業目的及為甲方提供服務之目的範圍內對甲方之資料為蒐集、電腦處理、國際傳遞及利用本人之個人資料。並同意乙方得基於風險控管、稽核、客戶服務、管理、資訊提供、或為甲方之利益或依法令、各基金證券投資信託契約之規定、或因主管機關、法院之要求將之提供與受乙方委託處理基金相關事務之人。
                        </li>
                        <li>
                            電子交易系統資料保全
                            <ol>
                                <li>
                                    甲方不得竄改、修改或以任何方式變更乙方電子交易系統之任何部分，或進入乙方電子交易系統未經許可之部分。
                                </li>
                                <li>
                                    乙方應盡力維護電子交易系統傳輸訊息之安全，防止他人非法進入系統、竊取、竄改或毀損交易紀錄及資料。
                                </li>
                            </ol>
                        </li>
                        <li>
                            電子交易風險歸責
                            <ol>
                                <li>
                                    乙方對於其處理甲方從事電子式交易之相關設備軟硬體，應盡善良管理人之注意義務。
                                </li>
                                <li>
                                    甲方同意電子式交易型態在資料傳輸上有不穩定之風險，甲方同意如電子交易系統傳輸，因通訊斷線、斷電、網路壅塞或發生天然災害等不可抗力事由，致電子交易之時間遲延、執行時之價格與指示當時之價格不同或乙方無法接收或傳送，而影響交易之結果時，如該事由非可歸責於乙方，甲方須自負因此所生之風險。 甲方如於乙方執行電子交易前欲更改原交易之內容，惟因通訊斷線、斷電、網路壅塞或發生天然災害等不可抗力事由，致乙方無法接收、傳送或即時更改者，如該事由非可歸責於乙方，乙方無須負責，且原電子交易之內容，對甲方仍發生效力。
                                </li>
                                <li>
                                    非可歸責於乙方之事由，包括但不限於因法令或主管機關之限制、交易市場規則、停止交易、戰爭、天災等，所致執行遲延或無法執行而造成甲方之損害，乙方及其代理人 、代表人、受僱人無須負責。
                                </li>
                                <li>
                                    甲方同意於使用電子交易系統時，如有任何連線上之問題，應主動嘗試以其他方式與乙方聯繫並將所面臨之問題立即通知乙方。
                                </li>
                                <li>
                                    甲方於網際網路無法正常交易時，可另行透過書面或傳真方式進行交易，惟以前述方式申購時，因無法透過網際網路約定扣款帳戶扣款，需另匯款至基金帳戶。
                                </li>
                            </ol>
                        </li>
                        <li>
                            交易紀錄 
                            <br/>甲方了解並同意，為保障雙方權益，乙方得自動監測或紀錄甲方與乙方間電子交易聯繫之內容，並得紀錄所有電子交易委託之內容。
                        </li>
                        <li>
                            權利義務之轉讓 
                            <br/>甲方不得將本約定書之權利義務轉讓於任何他人。
                        </li>
                        <li>
                            未盡事宜
                            <br/>
                            本約定書如有未盡事宜悉依以證券投資信託及顧問法、境外基金管理辦法、證券投資信託基金管理辦法、乙方銷售之相關系列基金之最近公開說明書、各基金證券投資信託契約、受益憑證事務處理準則、中華民國證券投資信託暨顧問商業同業公會國內證券投資信託基金及境外基金電子交易作業準則及中華民國相關法令、函釋之規定辦理，前述有修訂者，依修訂後之規定辦理，就修訂部分本約定書視為亦已修訂，不須重新簽署。
                        </li>
                        <li>
                            證券投資信託基金電子交易服務合約之終止
                            <br/>任一方得隨時以書面通知他方終止本開戶交易約定書，該終止通知，對於接獲該通知前已執行之電子交易委託及雙方之權利義務，均不受影響。
                        </li>
                    </ul>
                    <ul>
                        <li>
                            準據法與管轄法院
                            <br/>
                            <b>
                                本約定書以中華民國法律為準據法，並以中華民國台灣台北地方法院為第一審管轄法院，但不得排除消費者保護法第47條或民事訴訟法第436條之9規定小額訴訟管轄法院之適用。
                            </b>
                        </li>
                    </ul>
                    <p class="text-right">
                        2021.5
                    </p>
                </div>`,
});

// 風險預告書
Vue.component('agreementInfo3', {
    template: ` <div>
                    <p>
                        基金之交易特性與存款、股票及其他投資工具不同，本人於開戶及決定交易前，應審慎評估本身之財務狀況與風險承受能力是否適合此種交易，並充分瞭解下列事項：
                    </p>
                    <ul class="chineseListStyle">
                        <li>
                            基金買賣係以自己之判斷為之，本人應瞭解並承擔交易可能產生之損益，且最大可能損失達原始投資金額。
                        </li>
                        <li>
                            基金經金管會核准，惟不表示絕無風險，以往之經理績效不保證基金之最低投資收益，富蘭克林證券投顧除盡善良管理人之注意義務外，不負責基金之盈虧，亦不保證最低之收益，本人申購前應詳閱基金公開說明書。
                        </li>
                        <li>
                            基金交易應考量之風險因素：
                            <ol>
                                <li>
                                    投資標的及投資地區可能產生之風險：市場（政治、經濟、社會變動、匯率、利率、股價、指數或其他標的資產之價格波動）風險、流動性風險、信用風險、產業景氣循環變動、證券相關商品交易、法令、貨幣、流動性不足等風險。
                                </li>
                                <li>
                                    因前述風險、受益人大量買回或基金暫停計算買回價格等因素，或有延遲給付買回價金之可能。
                                </li>
                            </ol>
                        </li>
                        <li>
                            基金交易係以長期投資為目的，不宜期待於短期內獲取高收益。任何基金單位之價格及其收益均可能漲或跌，故不一定能取回全部之投資金額。
                        </li>
                        <li>
                            基金不受存款保險、保險安定基金或其他相關保障機制。
                        </li>
                        <li>
                            <b>如因基金交易所生紛爭，本人可向中華民國證券投資信託暨顧問商業同業公會或財團法人金融消費評議中心提出申訴。</b>
                        </li>
                        <li>
                            本人於決定投資以高收益債券為訴求之境外基金金前，應充分了解下列以投資高收益債券基金為訴求之基金之特有風險：
                            <ol>
                                <li>
                                    信用風險：由於高收益債券之信用評等未達投資等級或未經信用評等，可能面臨債券發行機構違約不支付本金、利息或破產而蒙受虧損。
                                </li>
                                <li>
                                    利率風險：由於債券易受利率之變動而影響其價格，故可能因利率上升導致債券價格下跌，而蒙受虧損之風險，高收益債亦然。
                                </li>
                                <li>
                                    流動性風險：高收益債券可能因市場交易不活絡而造成流動性下降，而有無法在短期內依合理價格出售之風險。
                                </li>
                                <li>
                                    投資高收益債基金尚可能面對交易對手風險、違約債券證券風險、市場風險、重整公司風險等相關投資風險，進而影響基金淨值之波動。
                                </li>
                                <li>
                                    高收益債券基金不適合無法承受相關風險之投資人，較適合投資屬性中風險承受度較高之投資人，投資人投資以高收益債券為訴求之基金不宜占其投資組合過高之比重，投資人應審慎評估本身之財務狀況與風險承受能力是否適合此種交易。
                                </li>
                                <li>
                                    高收益債券基金可能投資美國144A債券（境內基金投資比例最高可達基金總資產30%；境外基金不限），該債券屬私募性質，易發生流動性不足，財務訊息揭露不完整或價格不透明導致高波動性之風險。
                                </li>
                            </ol>
                        </li>
                        <li>
                            本人於決定投資前，應充分了解所申購之基金為配息型，該基金可能涉及本金之風險及事項：
                            <ol>
                                <li>
                                    基金得分配未扣減費用之收益(以基金公開說明書定義為準)。
                                </li>
                                <li>
                                    基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。基金進行配息前未先扣除應負擔之相關費用。
                                </li>
                                <li>
                                    由本金支付配息之相關資料已揭露於本公司網站，投資人可至本公司網站(<el-link type="primary" href="https://www.Franklin.com.tw" target="_blank">https://www.Franklin.com.tw</el-link>)查閱。
                                    <br/>
                                    本風險預告之預告事項僅列舉大端，對於所有基金投資之風險及影響市場行情之因素無法一一詳述，本人於投資前除須對本風險預告書詳加研讀外，尚應審慎詳讀各基金公開說明書或投資人須知，對其他可能之影響因素亦有所警覺，並確實作好財務規劃與風險評估，以免因貿然投資而遭到難以承受之損失。本人瞭解基金投資之風險並做適當之風險評估，基於個人財務規劃及理財目標仍依自己的判斷決定申購本基金並自行承擔風險。
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <p class="text-right">
                        2021.5
                    </p>
                </div>`
});

// 後續變更同意事項暨個人資料保護法告知事項
Vue.component('agreementInfo4', {
    template: ` <div>
                    <p>表單留存之各項資料（包括基本資料、財務概況、投資屬性及風險承受度等），如有變更或修正其內容之必要時，同意由富蘭克林證券投顧指定之人員以傳真、電話或書面方式，向本人進行資料確認。富蘭克林證券投顧為恪守個人資料保護法相關規範進行個人資料之蒐集、處理或利用，依據個人資料保護法第8條第1項之規定，向本人告知下列事項：</p>
                    <ol class="chineseListStyle2">
                        <li>
                            蒐集之目的：
                            <ol>
                                <li>
                                    境外基金、證券投資顧問及其他等經主管機關核淮項目之相關業務及與經營業務相關之行銷(包括但不限於透過網路或社群媒體行銷以及網路廣告投放或用以比對相似之廣告目標族群) 目的範圍內使用；以及前揭範圍之資(通)訊服務、資(通)訊業務與資料庫管理、資通安全與管理使用；
                                </li>
                                <li>
                                    其他依法令規定及金融監督管理所需，進行個人資料之蒐集處理及利用。
                                </li>
                                <li>
                                    遵循國內外法令規定（包含美國海外帳戶稅收遵循法（簡稱「FATCA」）、金融機構執行共同申報及盡職審查作業辦法(CRS)、相關跨政府協議、基金註冊地政府之規定及基金公開說明書規定而辦理之行為（包含但不限於盡職調查及申報個人資料及財務細節予國內外稅務機關及境外基金機構的行為）
                                </li>
                            </ol>
                        </li>
                        <li>
                            蒐集之個人資料類別（同法務部公告之個人資料類別）：
                            <ol>
                                <li>
                                    識別：足以辨識個人、財務、政府資料中之辨識者；
                                </li>
                                <li>
                                    特徵：個人描述如：出生年月日、年齡、國籍、聲音性別等；
                                </li>
                                <li>
                                    家庭情形、婚姻狀況、家庭其他成員之細節等；
                                </li>
                                <li>
                                    社會情況: 財產、移民情形、職業；
                                </li>
                                <li>
                                    財務細節：財產、收入、所得、資產與投資；
                                </li>
                                <li>
                                    FATCA相關資訊：包括但不限於姓名、出生年月日、國籍、身分證統一編號、護照號碼、美國稅籍身分及編號、聯絡方式、財務情況、社會活動等。
                                </li>
                            </ol>
                        </li>
                        <li>
                            利用之期間、地區、對象、地區及方式：
                            <ol>
                                <li>
                                    期間：自富蘭克林證券投顧開始蒐集個人資料時起，至蒐集之特定目的消失或因執行業務所必要之保存期間或依相關國內外法令所定（等）或因執行業務所必須之保存期間或依個別相關契約就資料之保存所定之保存年限。（以期限最長者為準）
                                </li>
                                <li>
                                    地區： 富蘭克林證券投顧、境外基金銷售機構、申購及贖回款項收付銀行、台灣集中保管結算所、境外基金機構、依法有調查權機關或金融監理機關、國內外政府機關、受富蘭克林證券投顧或境外基金機構委託處理資訊或業務之公司、其他與富蘭克林證券投顧因業務需要訂有契約關係或業務往來之機構、依法定義務所必要提供之第三方或經本人書面同意之對象之所在國家或地區等（包含跨國（境）之處理或利用）。
                                </li>
                                <li>
                                    對象：富蘭克林證券投顧、境外基金銷售機構、申購及贖回款項收付銀行、台灣集中保管結算所、境外基金機構(包括所屬集團之關係企業及指定機構)、依法有調查權機關或金融監理機關、國內外政府機關、受富蘭克林證券投顧或境外基金機構委託處理資訊或業務之公司、受託進行網路行銷或網路廣告、比對相似廣告目標族群之網路或社群媒體、其他與富蘭克林證券投顧因業務需要訂有契約關係或業務往來之機構、依法定義務所必要提供之第三方或經本人書面同意之對象。
                                </li>
                                <li>
                                    方式：以書面、電話、傳真、電子文件、網際網路、簡訊或其他適當方式為蒐集、處理、利用與國際傳輸。
                                </li>
                            </ol>
                        </li>
                        <li>
                            依據個資法第三條規定，本人就富蘭克林投顧保有之本人個人資料得行使下列權利：
                            <ol>
                                <li>
                                    查詢、請求閱覽或請求製給複製本，而依法富蘭克林投顧得向本人酌收必要成本費用。
                                </li>
                                <li>
                                    請求補充或更正，惟依法本人應為適當之釋明。
                                </li>
                                <li>
                                    請求停止蒐集、處理或利用及刪除。
                                </li>
                                <li>
                                    惟富蘭克林投顧因執行業務所必須者，得不依本人請求或請求方式為之。
                                </li>
                            </ol>
                        </li>
                        <li>
                            不提供個人資料所致權益之影響：<br />
                            本人知悉並瞭解可自由選擇是否提供相關個人資料，惟若拒絕提供相關個人資料，富蘭克林投顧將無法進行必要之審核及處理作業，致無法提供相關服務。如本人未完整提供富蘭克林證券投顧遵循美國海外帳戶稅收遵循法及相關跨政府協議執行美國帳戶調查所需個人資料或不同意富蘭克林證券投顧申報美國帳戶資料予美國聯邦政府或中華民國政府機關者，富蘭克林證券投顧依FATCA規定須將本人於富蘭克林證券投顧之帳戶列為不合作帳戶(Recalcitrant Account)，針對符合FATCA規定法定條件的存入款項(包含但不限於美國來源所得)予以扣繳百分之三十的美國扣繳稅款予美國聯邦政府；如經合理期間本人仍不完整提供所需資訊或同意富蘭克林證券投顧申報美國帳戶資料者，富蘭克林證券投顧依FATCA規定法可能須關閉本人之帳戶。
                        </li>
                    </ol>
                    <p class="text-right">
                        2021.5
                    </p>
                </div>`
});

// 美國海外帳戶稅收遵循法條款
Vue.component('agreementInfo5', {
    template: ` <div>
                    <ul class="chineseListStyle">
                        <li>
                            本人茲受告知並同意配合遵循國內外稅務法令（包含但不限於美國海外帳戶稅收遵循法及中華民國相關法令）、條約或國際協議的必要措施，包含調查本人及本人之利益所有人之國籍與稅籍稅務資料，將稅籍資料及帳戶資訊揭露予國內外政府機關（包含中華民國政府及美國聯邦政府），並於調查結果顯示立聲明書與富蘭克林證券投顧間的關係符合國內外稅務法令、條約或國際協議的特定條件（包含但不限於本人及本人之利益所有人未能協助提供前揭調查所需的資料、未能據實出具本約定書各項附表，或本人及本人之利益所有人不同意富蘭克林證券投顧向中華民國政府及美國聯邦政府為前揭揭露等情形）時，為本人辦理稅款扣繳之結算或終止本約定書。
                        </li>
                        <li>
                            前述第一項之相關名詞參考美國海外帳戶稅收遵循法說明如下，本說明僅供參考，相關定義以美國海外帳戶稅收遵循法之有權解釋為準：
                            <ol>
                                <li>
                                    美國海外帳戶稅收遵循法：指美國Foreign Account Tax Compliance Act即26 USC §1471~ §1474，或稱美國內地稅法第四章(Internal Revenue Code Chapter 4)，並包含美國聯邦政府內地稅收局(Internal Revenue Service)發布的相關行政命令（包含但不限於26 CFR Parts 1及301）、指引及申辦表單等。
                                </li>
                                <li>
                                    條約或國際協議：包含但不限於中華民國政府與美國政府或雙方政府之代表人或代表機構間簽訂關於美國海外帳戶稅收遵循法執行的跨政府協議(Intergovernmental Agreement)。
                                </li>
                                <li>
                                    投資人之利益所有人：包含但不限於投資人指定自動或定期轉帳轉入帳戶持有人；投資人如為非自然人之法律實體時，對投資人直接或間接擁有股權性利益、合夥利益、投資利益、信託利益之人，以及其他依美國海外帳戶稅收遵循法可認定雖非直接持有帳戶，但實質享有帳戶利益之人。
                                </li>
                                <li>
                                    國籍與稅籍稅務資料：包含但不限於國籍、雙重國籍或永久居留權身分；納稅義務人稅籍編號(Taxpayer Identification Number)、全球中介機構識別碼(Global Intermediary Identification Number)；美國稅務Form W-8、Form W-9或其他替代性文件，以及其他依美國海外帳戶稅收遵循法指定金融機構必須調查或取得的帳戶相關資料。
                                </li>
                                <li>
                                    其他相關名詞：
                                    <ol class="figuresInBracketsStyle">
                                        <li>
                                            美國內地稅法第四章身分(Internal Revenue Code Chapter 4 Status)：包含美國人(U.S. Person)、特定美國人(Specified U.S. Person)、除外之非金融機構非美國法人(excepted NFFE)、或非實質營運之非金融機構非美國法人(Passive NFFE)等自然人或非自然人之法律實體之身分類別，及其他同於美國內地稅法第四章所規定之身分類別。
                                        </li>
                                        <li>
                                            美國人(U.S. Person)及特定美國人(Specified U.S. Person)：美國人係指26 USC §7701(a)30所規定之美國人，包含美國公民、具美國永久居留權之人、美國境內的合夥組織、公司或遺產財團、或美國法院對之有管轄權或美國人對之有控制權的信託財產。特定美國人係指26 USC §1473
                                        </li>
                                        <li>
                                            (3)	所規定任何不具下列性質之美國人：①任何股票於證券交易市場經常性交易之公司②任何同屬於前述1.公司集團之公司③任何屬26 USC §501(a)所指之免稅組織或自然人退休計畫④美國（政府）或政府所有之機構或投資工具⑤任何美國聯邦州、哥倫比亞特區、美國（政府）財產、其分支、其所有之機構或投資工具⑥任何銀行⑦任何不動產投資信託⑧任何受監督的投資公司⑨任何共同信託基金⑩任何適用26 USC §664(c)之免稅規定或符合26 USC §4947(a)(1)的信託。
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    本人聲明及保證在任何時候皆非加拿大居民、美國公民、綠卡持有人、美國稅務居民之個人；或美國註冊之公司、美國企業在台之分公司或辦事處、美國稅法上認定之無形企業體、或任何其他公開說明書、FATCA 法案或相關稅法規定下之美國納稅義務。(詳請閱讀【美國外國帳戶稅收遵循法條款暨非屬美國納稅義務人聲明】之說明，富蘭克林證券投顧並未且不擬提供任何稅務建議，建議本人應與財務或稅務顧問進一步諮詢)。
                                </li>
                            </ol>
                        </li>
                    </ul>

                    <p class="text-right">
                        2021.5
                    </p>
                </div>`,
});

// 防制洗錢及打擊資恐承諾及同意事項
Vue.component('agreementInfo6', {
    template: ` <div>
                    <ul class="chineseListStyle">
                        <li>
                            本人聲明每次向富蘭克林證券投顧提出下單交易指示或支付付款項時，均被視為重複作出下列承諾：
                            <ol>
                                <li>
                                    本人承諾不會從事擇時交易或短線交易活動，並同意所有一切交易應符合所適用之法律及法規(包括但不限於洗錢防制法、資恐防制法及其相關法令)以及富蘭克林坦伯頓基金集團及富蘭克林證券投顧依法令規定制定之內部程序/規章（以下合稱法令規章），如申購、贖回及/或贖回指示或程序(包括款項的支付/收取或)有違反法令規章之虞，本人同意配合富蘭克林坦伯頓基金集團及富蘭克林證券投顧為適當或下一步之行動，包括可能的延遲執行交易指示或款項取得，於此情形下，富蘭克林坦伯頓基金集團及富蘭克林證券投顧將無須對本人負任何損害賠償或損失的責任。
                                </li>
                                <li>
                                    本人向富蘭克林證券投顧聲明並保證：(一)用以支付之申購款項並非也不可能是來自於犯罪活動或行為(包括但不限於違反刑法、證券交易法、稅捐稽徵法等之犯罪)的所得款項；且該款項也不可能是來自於洗錢或資恐高風險國家或地區、國際防制洗錢組織所公告防制洗錢與打擊資恐有嚴重缺失之國家或地區、及其他未遵循或未充分遵循國際防制洗錢組織建議之國家或地區。及(二)本人未曾在台灣或其他地方有犯罪行為，亦未曾因此被調查或被定罪。
                                </li>
                                <li>
                                    本人同意應於富蘭克林證券投顧依法令規章及認識你的客戶(KYC)的目的及要求，提供所需的資訊及/或文件證明，包含配合審視、提供實質受益人或行使控制權之人等資訊、以及對交易之性質與目的或資金來源等配合說明，以共同配合並協助有關洗錢防制法、資恐防制法的法令遵循事項。如本人並非帳戶之實質受益人，本人向富蘭克林證券投顧聲明並保證獲得授權及代表各實質受益人做出上述聲明及保證。
                                </li>
                            </ol>
                        </li>
                        <li>
                            暫時停止交易、暫時停止或終止業務關係：
                            <br/>
                            本人如違反上述承諾，或本人或實質受益人為資恐防制法指定制裁之個人、法人或團體，或外國政府或國際組織認定或追查之恐怖分子或團體，富蘭克林證券投顧得暫時停止交易，或暫時停止或終止與本人的業務關係(帳戶無法使用)。
                        </li>
                    </ul>

                    <p class="text-right">
                        2021.05
                    </p>
                </div>`
});

const ECAgreement = {
    data() {
        return {
            page: {
                stit: `國民e帳戶`,
                tit: `開戶相關同意條款`,
            },
        }
    },
    template: ` <el-row class="text-center">
                    <el-col :lg="14" :md="20" class="text-left">
                        <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                        <el-card class="tradingProcess-card">
                            <h2 id="contactInfo" class="tit-type2" title="開戶約定書及基金傳真暨約定事項條款">
                                開戶約定書及基金傳真暨約定事項條款
                            </h2>
                            <div class="agreement">
                                <agreementInfo1></agreementInfo1>
                            </div>

                            <el-divider><i class="el-icon-more"></i></el-divider>

                            <h2 id="contactInfo" class="tit-type2" title="電子交易約定書">
                                電子交易約定書
                            </h2>
                            <div class="agreement">
                                <agreementInfo2></agreementInfo2>
                            </div>

                            <el-divider><i class="el-icon-more"></i></el-divider>

                            <h2 id="contactInfo" class="tit-type2" title="風險預告書">
                                風險預告書
                            </h2>
                            <div class="agreement">
                                <agreementInfo3></agreementInfo3>
                            </div>

                            <el-divider><i class="el-icon-more"></i></el-divider>

                            <h2 id="contactInfo" class="tit-type2" title="後續變更同意事項暨個人資料保護法告知事項">
                                後續變更同意事項暨個人資料保護法告知事項
                            </h2>
                            <div class="agreement">
                                <agreementInfo4></agreementInfo4>
                            </div>

                            <el-divider><i class="el-icon-more"></i></el-divider>

                            <h2 id="contactInfo" class="tit-type2" title="美國海外帳戶稅收遵循法條款">
                                美國海外帳戶稅收遵循法條款
                            </h2>
                            <div class="agreement">
                                <agreementInfo5></agreementInfo5>
                            </div>

                            <el-divider><i class="el-icon-more"></i></el-divider>

                            <h2 id="contactInfo" class="tit-type2" title="防制洗錢及打擊資恐承諾及同意事項">
                                防制洗錢及打擊資恐承諾及同意事項
                            </h2>
                            <div class="agreement">
                                <agreementInfo6></agreementInfo6>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>`,
    components: {
        pageTit: pageTit,
    },
    created() {
        this.$root.notLoggedIn();
    },
};