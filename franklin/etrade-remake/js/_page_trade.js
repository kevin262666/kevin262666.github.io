// ========= 單筆申購 ==============================================================================================================================
const LumpSum = {
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `單筆申購`,
            },

            notice: [
                {
                    content: `受益人不得具有美國聯邦所得稅(US federal income taxes)所指之美國人(U.S. persons)身份或加拿大居民或其它經主管機關及境外基金機構限制之身份，亦非為任何具有前述身份之人士利益申購本公司銷售之基金。`,
                },
                {
                    content: `本交易平台可申購本公司已核備之富蘭克林坦伯頓盧森堡及美國註冊之基金(以下簡稱境外基金)，及台灣核准之富蘭克林華美投信基金(以下簡稱境內基金)，單筆申購不包含貨幣基金。`,
                },
                {
                    content: `境內基金每營業日公告國內型(T-1)、海外型(T-2)營業日淨值，境外基金每營業日公告(T-1)營業日淨值；前述淨值計算日、入帳金額給付日期悉依相關系列基金之公開說明書、投資人須知、總代理或境外基金機構其他業務規定及相關金融業務慣例辦理。`,
                },
                {
                    content: `交易委託時間`,
                    innerList: [
                        {
                            content: `每營業日 13:30:00 以前委託輸入者，為當期營業日之交易。`,
                        },
                        {
                            content: `每營業日 13:30:01 以後委託輸入者，為次一營業日之交易。`,
                        },
                        {
                            content: `前一營業日 13:30:01 ~ 次一營業日 13:30:00 截止，為網路交易系統之一個交易日。`,
                        },
                    ],
                },
                {
                    content: `投資人可於委託日營業時間內（交易扣款當日營業日13:30:00前），點選【基金交易】»【交易查詢與取消】單元進行查詢以及交易取消作業，前述交易取消作業請在交易時間截止前完成，逾時恕不得取消。`,
                },
                {
                    content: `受益人同意授權臺灣集中保管結算所辦理境外基金申購、贖回或孳息分派等款項之結匯事項，並同意授權臺灣集中保管結算所得與銀行議定單一之買進或賣出匯率，辦理結匯作業。`,
                },
                {
                    content: `依臺灣集中保管結算所作業規定，受益人如僅約定台幣贖回帳戶，僅能以台幣申購基金；如僅約定外幣贖回帳戶，則申購時應以基金原幣為之。`,
                },
                {
                    content: `境外基金申購之受益權單位數計至小數點三位數時，將會以慣用的進位法計算到最接近的小數點以下三位數；境內基金申購之受益權單位數多於小數點一位數時，將會以慣用的進位法計算到最接近的小數點以下一位數；惟實際分配之單位數，受益人應以臺灣集中保管結算所計算分配為準。`,
                },
                {
                    content: `除法令變更外，每一客戶每日電子交易之申購(境內基金與境外基金加總計算、含手續費，不含轉換交易)之上限金額為新台幣3000萬元或等值外幣。如投資金額高於作業準則規定，系統會自動拒絕該筆交易，並請投資人重新輸入投資金額。因各家銀行作業機制不同，請依各銀行規定之額度限制進行交易，以避免超過額度而造成扣款失敗。`,
                    innerList: [
                        {
                            content: `【補充1】若選擇約定使用『全國性繳費業務指定扣款銀行』自動扣款方式繳付申購款項，每筆申購交易扣款金額(含手續費)不得超過新台幣500萬元，當日累計扣款金額以新台幣3000萬元(含手續費)為上限(實際扣款額上限仍應以客戶所屬扣款行規定為準，惟仍應符合法令規定之最高扣款上限)。若選擇約定使用『集保款項收付指定扣款銀行』自動扣款方式繳付申購款項，則依現行法規的規定限制，自然人客戶以新台幣3000萬元(含手續費)為上限。`,
                        },
                        {
                            content: `【補充2】若開戶時選擇約定網銀帳戶(華南銀行除外)之線上開戶客戶(意指開戶時即透過網銀核印成功)，於自動扣款繳付申購款項時，每筆單筆申購交易扣款金額(含手續費)以新台幣500萬元為限，不受【補充1】『全國性繳費業務指定扣款銀行』或『集保款項收付指定扣款銀行』每筆申購上限限制，唯當日累計扣款金額(含手續費)上限仍為新台幣3000萬元。`,
                        },
                    ],
                },
                {
                    content: `擇時交易/短線交易說明：`,
                    innerList: [
                        {
                            content: `境外基金：依公開說明書及投資人須知之規定，本公司不鼓勵短期或是過度交易（以下稱「擇時交易」），當基金公司或股務代理機構認定投資人的交易可能妨礙基金投資組合效率管理、可能實質增加基金交易成本、管理成本或稅捐，或是在其他方面不利於基金公司及其股東權益時，會試圖限制或拒絕此類交易。故當投資人的交易行為被認定為擇時交易時，有可能暫時或是永久禁止投資人後續之申購或轉申購委託。`,
                        },
                        {
                            content: `境內基金：基金經理公司不歡迎受益人對基金進行短線申購贖回之交易，故持有境內基金未屆滿14日者應支付買回價金之百分之零點二之買回費用。買回費用採四捨五入計算至新台幣「元」，如不足一元則不予收取；外幣計價者(日幣除外)，採四捨五入計算至該幣別「元」以下小數點第二位。申購交易日期計算方式：以「請求買回之書面或其他約定方式到達經理公司或其銷售機構營業日或次一營業日(各基金買回淨值日須依各基金公開說明書之規定)」之日期減去「申購日」之日期，小於14日(含，以日曆日計算)者。`,
                        },
                    ],
                },
                {
                    content: `因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。`,
                },
                {
                    content: `依照洗錢防制法相關配合條款，受益人須以本人名義匯款，若不相同，本公司將拒絕該筆交易，並將款項退還予匯款人，相關匯費由客戶自行負擔。`,
                },
            ],
            tdccStipulate: false,

            // 匯款資料dialog
            remittanceInfo: {
                dialog: false,
                group: [
                    {
                        groupName: "新台幣匯款 / 戶名：臺灣集中保管結算所股份有限公司",
                        data: [
                            {
                                bank: "華南商業銀行復興分行 (008)",
                                bankAccount: "931＋統一編號11碼",
                            },
                            {
                                bank: "兆豐國際商業銀行台北復興分行(017)",
                                bankAccount: "679＋統一編號11碼",
                            },
                            {
                                bank: "台新國際商業銀行建北分行(812)",
                                bankAccount: "915＋統一編號11碼",
                            },
                            {
                                bank: "永豐商業銀行世貿分行(807)",
                                bankAccount: "582＋統一編號11碼",
                            },
                            {
                                bank: "中國信託商業銀行營業部(822)",
                                bankAccount: "757＋統一編號11碼",
                            },
                            {
                                bank: "台北富邦銀行信義分行(012)",
                                bankAccount: "158＋統一編號11碼",
                            },
                            {
                                bank: "第一商業銀行民權分行(007)",
                                bankAccount: "963＋統一編號11碼",
                            },
                            {
                                bank: "國泰世華商業銀行民權分行(013)",
                                bankAccount: "897＋統一編號11碼",
                            },
                            {
                                bank: "彰化商業銀行民生分行(009)",
                                bankAccount: "918＋統一編號11碼",
                            },
                        ],
                    },
                    {
                        groupName: "外幣匯款 / 戶名：TAIWAN DEPOSITORY AND CLEARING CORPORATION",
                        data: [
                            {
                                bank: "HUANAN COMMERCIAL BANK LTD. FUHSING BRANCH, TAIPEI, TAIWAN (HNBKTWTP127)",
                                bankAccount: "931＋統一編號11碼",
                            },
                            {
                                bank: "MEGA INTERNATIONAL COMMERCIAL BANK CO.,LTD.TAIPEI FUSING BRANCH, TAIPEI,TAIWAN(ICBCTWTP008)",
                                bankAccount: "679＋統一編號11碼",
                            },
                            {
                                bank: "TAISHIN INTERNATIONAL BANK, TAIPEI, TAIWAN(TSIBTWTP)",
                                bankAccount: "915＋統一編號11碼",
                            },
                            {
                                bank: "BANK SINOPAC(SINOTWTP)",
                                bankAccount: "582＋統一編號11碼",
                            },
                            {
                                bank: "CTBC Bank Co.,Ltd.(CTCBTWTP)",
                                bankAccount: "757＋統一編號11碼",
                            },
                            {
                                bank: "TAIPEI FUBON COMMERCIAL BANK LTD, TAIPEI(TPBKTWTP460)",
                                bankAccount: "158＋統一編號11碼",
                            },
                            {
                                bank: "FIRST COMMERCIAL BANK,TAIPEI, TAIWAN(FCBKTWTP)",
                                bankAccount: "963＋統一編號11碼",
                            },
                            {
                                bank: "CATHAY UNITED BANK, MINCHUAN BRANCH, TAIPEI, TAIWAN(UWCBTWTP019)",
                                bankAccount: "897＋統一編號11碼",
                            },
                            {
                                bank: "CHANG HWA COMMERCIAL BANK Min-Sheng Branch, TAIPEI, TAIWAN(CCBCTWTP523)",
                                bankAccount: "918＋統一編號11碼",
                            },
                        ],
                    },
                ],
                remittanceInfoTd1Width: window.innerWidth > 767 ? '340' : '',
                remittanceInfoTd2Width: window.innerWidth > 767 ? '339' : '',
            },
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li v-for="(item, index) in notice" :key="index">
                                    <div v-html="item.content"></div>
                                    <ul v-if="item.innerList != undefined">
                                        <li v-for="(item2, index2) in item.innerList" :key="index2">
                                            <div v-html="item2.content"></div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日 9：00～18：00 撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                                <li>
                                    【資安宣導】提醒客戶防範網路釣魚: 本公司不會寄發電子郵件要求客戶輸入身分證號碼或帳號密碼等資訊，若您收到以本公司名義寄發的可疑郵件，難以辨識真偽時，請勿回覆、勿點擊郵件(通訊軟體、其他網站)之連結網址。<el-link type="primary" href="https://www.franklin.com.tw/Privacy/Index" target="_blank">請點此看更多「防範網路釣魚注意事項」</el-link>。
                                </li>
                                <li>
                                    <el-link type="primary" @click="tdccStipulate = !tdccStipulate">
                                        參考資訊：臺灣集中保管結算所作業規定
                                    </el-link>
                                    <el-collapse-transition>
                                        <div v-show="tdccStipulate">
                                            <ol class="chineseListStyle">
                                                <li>
                                                    依臺灣集中保管結算所作業規定，集保結算所受理銷售機構客戶單筆匯款申購款項作業，客戶於申購日下午三時前將包含申購手續費之申購款項匯達集保結算所款項收付專戶，且經集保結算所確認匯入款項與申購資料相符者，計入當日申購數額；申購款項於申購日下午三時後匯達款項收付專戶者，集保結算所將於次一營業日辦理相關申購作業。
                                                    <span class="text-red">實際單筆匯款申購交易申請截止時間請依銷售機構規定。</span>
                                                </li>
                                                <li>
                                                    單筆匯款申購款項係以虛擬帳號匯入集保結算所指定之金融機構帳戶，<el-link type="primary" @click="remittanceInfo.dialog = true;">匯款資料 <i class="fas fa-external-link-alt"></i></el-link>（最新指定之金融機構帳戶資料，可至集保結算所網站<el-link type="primary" href="https://www.tdcc.com.tw" target="_blank">www.tdcc.com.tw</el-link>查詢）
                                                </li>
                                                <li>
                                                    依臺灣集中保管結算所作業規定，客戶辦理單筆扣款或定期定額扣款申購作業，應於集保結算所指定之款項收付機構或於參加全國性繳費（稅）業務之金融機構（以下合稱扣款行）開設款項帳戶，填具基金扣款轉帳授權書，並於扣款授權書簽蓋原留印鑑，或以線上申請扣款轉帳授權事宜。授權扣款行於客戶申購境外基金時，依集保結算所通知辦理扣款事宜。集保結算所將於扣款行完成核印作業後，始辦理相關扣款通知事宜。（最新指定之扣款行資料，可至集保結算所網站<el-link type="primary" href="https://www.tdcc.com.tw" target="_blank">www.tdcc.com.tw</el-link>查詢） 前項扣款作業，除客戶開設款項帳戶之金融機構屬於集保結算所公告之款項收付機構外，應依「全國性繳費（稅）業務」之相關規定辦理；前述金融機構如與集保結算所簽約成為款項收付機構者，相關扣款作業，將改按款項收付機構自行扣款方式辦理；另依現行全國性繳費（稅）業務之轉帳規定，單筆最高轉帳金額為新臺幣伍佰萬元而每日最高轉帳扣繳限額為新臺幣參仟萬元。但前述金額經調整者，依調整後金額定之。各扣款行或有不同限額限制，扣款人申購前應自行與該扣款行確認有關全國性繳費(稅)業務之額度限制，並依照該額度限制申購基金，以避免額度限制造成扣款失敗。採線上扣款轉帳授權者，依扣款行之相關規定辦理
                                                </li>
                                                <li>
                                                    依臺灣集中保管結算所作業規定，客戶辦理單筆扣款申購作業時，須於申購日下午二時前辦妥申購手續，並將包含申購手續費之申購款項存入於扣款行開設之款項帳戶。<span class="text-red">實際單筆扣款申購交易申請截止時間請依銷售機構規定</span>。
                                                </li>
                                                <li>
                                                    依臺灣集中保管結算所作業規定，客戶除可經由銷售機構所交付之交易確認書或對帳單以確認其投資外，亦可先向往來銷售機構申請設定查詢密碼，並於週一至週五上午六時至晚上十二時（例假日除外）利用集保結算所語音查詢系統及網際網路查詢作業系統，查詢客戶投資基金相關資料，有關電話語音及網際網路查詢方式如下：
                                                    <ul>
                                                        <li>
                                                            電話語音：(查詢境外基金)
                                                            <ol>
                                                                <li>
                                                                    電話號碼七碼或八碼地區，請撥412-1111，電話號碼六碼地區，請撥41-1111；撥通後輸入服務代碼111＃，再按3。
                                                                </li>
                                                                <li>
                                                                    客戶初次登入語音查詢系統，須先辦理密碼變更，輸入開立於銷售機構之帳號、身分證字號或營利事業統一編號、預設密碼及新設密碼後，始得查詢。
                                                                </li>
                                                            </ol>
                                                        </li>
                                                        <li>
                                                            網際網路：(查詢境內及境外基金)
                                                            <ol>
                                                                <li>
                                                                    客戶進入<el-link type="primary" href="https://www.tdcc.com.tw" target="_blank">www.tdcc.com.tw</el-link>網址後，點選快速連結/集保帳戶及基金資料查詢系統。
                                                                </li>
                                                                <li>
                                                                    客戶初次登入網際網路查詢系統，須先辦理密碼變更，輸入客戶帳號、身分證字號或營利事業統一編號、預設密碼及新設密碼後，始得查詢。
                                                                </li>
                                                            </ol>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </el-collapse-transition>
                                </li>
                            </ol>
                        </div>
                    </section>
                    <el-dialog
                        title="匯款資料"
                        :visible.sync="remittanceInfo.dialog">
                        <div>
                            <div class="margin-top-25 margin-bottom-15" v-for="(item, index) in remittanceInfo.group" :key="index">
                                <b>
                                    {{item.groupName}}
                                </b>
                                <el-table
                                    :data="item.data"
                                    style="width: 100%; margin-top: 5px"
                                    size="mini"
                                    border>
                                    <el-table-column
                                        prop="bank"
                                        label="匯入銀行"
                                        :width="remittanceInfo.remittanceInfoTd1Width">
                                    </el-table-column>
                                    <el-table-column
                                        prop="bankAccount"
                                        label="匯款帳號"
                                        :width="remittanceInfo.remittanceInfoTd2Width">
                                    </el-table-column>
                                </el-table>
                            </div>
                            <div>
                                匯款帳號中統一編號11碼係依投資人身分證字號、統一證號或營利事業統一編號轉碼編製，編碼方式為：
                                <ul>
                                    <li>
                                        本國人：身分證字號英文字母轉為數字2碼(A為01，B為02依此類推)＋數字9碼
                                    </li>
                                    <li>
                                        華僑及外國人：統一證號英文字母第1 碼轉為數字2 碼(A為01，B為02依此類推) ＋英文字母第2碼轉為數字1 碼(A為3，B為4，C為5，D為6)＋數字8碼
                                    </li>
                                    <li>
                                        法人：000＋營利事業統一編號8碼
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span slot="footer" class="dialog-footer">
                            <el-button
                                round
                                @click="remittanceInfo.dialog = false;">
                                關閉
                            </el-button>
                        </span>
                    </el-dialog>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

const LumpSum_list = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "精選基金",
                    name: "1",
                    fundType: "1",
                },
                {
                    title: "債券型",
                    name: "2",
                    fundType: "2",
                },
                {
                    title: "單一國家",
                    name: "3",
                    fundType: "1",
                },
                {
                    title: "全球股票",
                    name: "4",
                    fundType: "2",
                },
                {
                    title: "新興市場",
                    name: "5",
                    fundType: "1",
                },
                {
                    title: "美國股票",
                    name: "6",
                    fundType: "2",
                },
                {
                    title: "歐洲股票",
                    name: "7",
                    fundType: "1",
                },
                {
                    title: "平衡型",
                    name: "8",
                    fundType: "2",
                },
                {
                    title: "產業型",
                    name: "9",
                    fundType: "1",
                },
                {
                    title: "投信基金",
                    name: "10",
                    fundType: "2",
                },
            ],
            tabIndex: 10,

            fund: [
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "4000",
                    fundName: "伊斯蘭債券基金－美元",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "4008",
                    fundName: "伊斯蘭債券基金－美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1107",
                    fundName: "公用事業基金",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
            ],
            fund2: [
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "1174",
                    fundName: "美國政府基金",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "0813",
                    fundName: "新興國家固定收益基金—美元季配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1049",
                    fundName: "新興國家固定收益基金—美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
            ],
            fund3: [
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "0813",
                    fundName: "新興國家固定收益基金—美元季配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1049",
                    fundName: "新興國家固定收益基金—美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 250 / 新台幣 10,000", // 最低投資金額
                    },
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "申購",
                promptIcon: "arrow",
            },
        };
    },
    template: ` <div>
                    <fundQuickSearch @childMethod="addTab(editableTabsValue)"></fundQuickSearch>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <div class="fundList-area" v-if="item.fundType == '1'">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                            <div class="fundList-area" v-if="item.fundType == '2'">
                                <fundList
                                    v-for="(item, index) in fund2"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                            <div class="fundList-area" v-if="item.fundType == '3'">
                                <fundList
                                    v-for="(item, index) in fund3"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
    },
    methods: {
        // 快速搜尋示意
        querySearch(queryString, cb) {
            var restaurants = this.search.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
        },

        // 新增搜尋結果頁籤
        addTab(targetName) {
            if (this.tabIndex <= 10) {
                let newTabName = ++this.tabIndex + "";
                this.editableTabs.push({
                    title: "搜尋結果",
                    name: newTabName,
                    fundType: "3",
                });
                this.editableTabsValue = newTabName;
            } else {
                this.editableTabsValue = "11";
            }
        },

        // 前往申購流程
        nextPage() {
            this.$router.push("/LumpSum/Subscribe");
            this.$scrollTo("body");
        },
    },
};

const LumpSum_subscribe = {
    mixins: [delegationFailedPopUp],
    data() {
        return {
            stepInfo: [
                {
                    path: "/LumpSum/Subscribe/Step1",
                    tit: "填寫申購明細",
                },
                {
                    path: "/LumpSum/Subscribe/Step2",
                    tit: "確認事項",
                },
                {
                    path: "/LumpSum/Subscribe/Step3",
                    tit: "完成委託",
                },
            ],
            entrust: "success",
        };
    },
    template: ` <div>
                    <stepItem :data="stepInfo"></stepItem>
                    <el-card class="tradingProcess-card">
                        <div class="fundList-header">
                            <div class="fundList-header-content">
                                <div class="fundList-fundCode">
                                    4000
                                </div>
                                <template v-if="$route.path === '/LumpSum/Subscribe/Step3'">
                                    <div class="fundList-transactionMethod success" v-if="entrust == 'success'">
                                        <i class="fas fa-check-circle"></i> 委託成功
                                    </div>
                                    <div class="fundList-transactionMethod warning" v-if="entrust == 'warning'">
                                        <i class="fas fa-exclamation-circle"></i> 委託失敗
                                    </div>
                                    <div class="fundList-transactionMethod danger" v-if="entrust == 'danger'">
                                        <i class="fas fa-times-circle"></i> 嚴重錯誤
                                    </div>
                                </template>
                            </div>
                            <h3 class="fundList-fundName" title="伊斯蘭債券基金－美元(本基金之配息來源可能為本金)">
                                <openFundSmallFile></openFundSmallFile>
                                伊斯蘭債券基金－美元(本基金之配息來源可能為本金)
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
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <router-view></router-view>
                        </transition>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/LumpSum/Subscribe/Step3'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/TradeHistory/list'); $scrollTo('body')">
                            交易查詢與取消
                        </el-button>
                        <el-button
                            v-if="$route.path === '/LumpSum/Subscribe/Step1' || $route.path === '/LumpSum/Subscribe/Step2'"
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            {{
                                $route.path === '/LumpSum/Subscribe/Step1' ? '重新選擇基金' : '上一步'
                            }}
                        </el-button>
                        <template>
                            <el-button
                                v-if="$route.path === '/LumpSum/Subscribe/Step1'"
                                round
                                type="primary"
                                @click="$router.push('/LumpSum/Subscribe/Step2'); $scrollTo('body')">
                                下一步
                            </el-button>
                            <el-button
                                v-else-if="$route.path === '/LumpSum/Subscribe/Step2'"
                                round
                                type="primary"
                                @click="$router.push('/LumpSum/Subscribe/Step3'); $scrollTo('body')">
                                確認送出
                            </el-button>
                            <el-button
                                v-else
                                round
                                type="primary"
                                @click="$router.push('/LumpSum'); $scrollTo('body')">
                                繼續下單
                            </el-button>
                        </template>
                        <el-button
                            v-if="$route.path === '/LumpSum/Subscribe/Step2'"
                            type="text"
                            @click="$router.go(-2);">
                            取消委託
                        </el-button>
                    </div>
                    <!--示意用 可刪除 start-->
                    <div class="tradingProcess-btnArea" v-if="$route.path === '/LumpSum/Subscribe/Step2'">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="failurePopUp">
                            示意委託失敗
                        </el-button>
                    </div>
                    <!--示意用 可刪除 end-->
                </div>`,
    components: {
        stepItem: stepItem,
    },
};

const LumpSum_subscribe_step1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "105px",

            form: {
                DividendIdOption: '',
                currency: 1,
                subscriptionAmount: "",

                discountOptions: [
                    {
                        value: "0",
                        label: "【第四季精選優惠】0.15%, 下單期限:2021/01/07 23:59",
                    },
                    {
                        value: "1",
                        label: "【折扣測試】0.2699%, 下單期限:永久",
                    },
                    {
                        value: "2",
                        label: "【網路交易長期優惠】0.6%, 下單期限:永久",
                    },
                ],
                discountValue: "",

                already: [],
                IRS_form_W8Agree: [],
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    付款方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    自動扣款
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    計價幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    美元 參考匯率：30.5075 (2020/12/17)
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    配息方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="DividendIdOption"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-radio-group v-model="form.DividendIdOption">
                                            <el-radio :label="1">配現金 / 配現</el-radio>
                                            <el-radio :label="2">再投資 / 配權</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio-group v-model="form.currency">
                                        <el-radio :label="1">新台幣</el-radio>
                                        <el-radio :label="2">外幣</el-radio>
                                    </el-radio-group>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    投資金額
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-input-number 
                                        v-model="form.subscriptionAmount"
                                        :min="10000"
                                        :step="100"
                                    >
                                    </el-input-number>
                                    <br/>
                                    <small v-if="form.currency == 1">
                                        備註：新台幣最低扣款金額$10,000
                                    </small>
                                    <small v-if="form.currency == 2">
                                        備註：外幣最低扣款金額$250
                                    </small>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    優惠類別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="discountValue"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change' }
                                        ]"
                                    >
                                        <el-select v-model="form.discountValue" placeholder="請選擇優惠費率">
                                            <el-option
                                                v-for="item in form.discountOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-alert
                                        class="borderStyle"
                                        type="warning"
                                        show-icon
                                        :closable="false"
                                    >
                                        <template v-slot:title>
                                            【提醒】
                                        </template>
                                        <slot name="description">
                                            <ol>
                                                <li>
                                                    各優惠使用詳細規則需依各活動網頁說明以及最新優惠公告為準。
                                                </li>
                                                <li>
                                                    部分優惠將因契約變更為停止扣款而失效(例如：「轉機攻略」)。
                                                </li>
                                            </ol>
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考手續費
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    0
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
                                            { type: 'array', required: true, message: '請勾選', trigger: 'change' }
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
                                            { type: 'array', required: true, message: '請勾選', trigger: 'change' }
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
                        </div>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
};

const LumpSum_subscribe_step2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "120px",
            usePoints: false,
            form: {
                transactionPassword: "",
                checked1: [],
                checked2: [],
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    付款方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    自動扣款
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    計價幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    美元 參考匯率：30.5075 (2020/12/17)
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    配息方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    配現金 / 配現
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    新台幣
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    投資金額
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    10,000
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    優惠方案
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    【第四季精選優惠】優惠費率:0.15%, 到期日:2021-01-07
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    紅利點數
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-checkbox v-model="usePoints">
                                        使用紅利點數
                                    </el-checkbox>
                                    <br class="hidden-sm-and-up"/>
                                    <small>
                                        (您的紅利尚有 690,409 點)
                                    </small>
                                    <el-link
                                        icon="fas fa-external-link-alt"
                                        type="primary"
                                        href="https://www.franklin.com.tw/ReservationAccount/ECFAQ/DivPoint" target="_blank">
                                        &nbsp;紅利點數使用說明
                                    </el-link>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考手續費
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="usePoints">
                                        0 (原手續費15元，紅利點數折抵15元) 
                                    </template>
                                    <template v-else>
                                        15
                                    </template>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考申購總價金
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">
                                        <template v-if="usePoints">
                                            10,000
                                        </template>
                                        <template v-else>
                                            10,015
                                        </template>
                                    </b>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    投資人須知及<br class="hidden-sm-and-down"/>基金公開說明書取得方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    線上閱讀/下載
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
                                            本人已詳閱並瞭解(1)基金配息可能由其收益或本金中支付，而使原始投資金額減損，且配息前未先扣除相關費用。(2)高收益債券信用評等未達投資等級或未經信用評等、其對利率變動敏感度甚高，且會因利率、市場流動性、或債券發行機構等因素而虧損，投資人投資不宜占投資組合過高比重。
                                            <el-link
                                                icon="fas fa-external-link-alt"
                                                type="primary"
                                                href="https://wt.franklin.com.tw:8081/Home/RiskAnnouncement" target="_blank">
                                                &nbsp;請詳閱完整風險預告書
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
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
};

const LumpSum_subscribe_step3 = {
    data() {
        return {
            itemTitWidth: "120px",
            fundInfo: [
                {
                    tit: "委託時間",
                    content: "2020/12/18 14:20:00",
                },
                {
                    tit: "委託生效日",
                    content: "2020/12/21",
                },
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：30.5075 (2020/12/17)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "投資金額",
                    content: "10,000.00",
                },
                {
                    tit: "參考手續費",
                    content: "0",
                },
                {
                    tit: "參考申購總價金",
                    content: `<b class="price">10,000</b>`,
                },
                {
                    tit: "付款方式",
                    content: "自動扣款",
                },
            ],
        };
    },
    template: ` <div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    XXX
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    XXX
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
};

// ========= 定期(不)定額申購 ==============================================================================================================================
const Sip = {
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `定期(不)定額申購`,
            },

            notice: [
                {
                    content: `受益人不得具有美國聯邦所得稅(US federal income taxes)所指之美國人(U.S. persons)身份或加拿大居民或其它經主管機關及境外基金機構限制之身份，亦非為任何具有前述身份之人士利益申購本公司銷售之基金。`,
                },
                {
                    content: `本交易平台可申購本公司已核備之富蘭克林坦伯頓盧森堡及美國註冊之基金(以下簡稱境外基金)，及台灣核准之富蘭克林華美投信基金(以下簡稱境內基金)。`,
                },
                {
                    content: `境內基金每營業日公告國內型(T-1)、海外型(T-2)營業日淨值，境外基金每營業日公告(T-1)營業日淨值；前述淨值計算日、入帳金額給付日期悉依相關系列基金之公開說明書、投資人須知、總代理或境外基金機構其他業務規定及相關金融業務慣例辦理。`,
                },
                {
                    content: `交易委託時間`,
                    innerList: [
                        {
                            content: `每營業日 13:30:00 以前委託輸入者，為當期營業日之交易。`,
                        },
                        {
                            content: `每營業日 13:30:01 以後委託輸入者，為次一營業日之交易。`,
                        },
                        {
                            content: `前一營業日 13:30:01 ~ 次一營業日 13:30:00 截止，為網路交易系統之一個交易日。`,
                        },
                    ],
                },
                {
                    content: `契約申購`,
                    innerList: [
                        {
                            content: `定期定額可申購基金不包含貨幣型基金及富蘭克林華美投信之外幣分配型基金。`,
                        },
                        {
                            content: `定期定額申購委託需於扣款日前一個營業日 13:30:00 前生效，如逾期則順延至次月生效。`,
                        },
                        {
                            content: `定期定額申購投資人可任選每月1個或多個扣款日，惟選擇每月29日、30日或31日須注意，如遇當月有該日但非營業日時，則扣款日順延至次一營業日；如遇當月無該日時，則不辦理扣款。例如：選擇每月31日扣款，則僅每年一月、三月、五月、七月、八月、十月，及十二月正常扣款，其餘月份沒有31日不辦理扣款，以此類推。`,
                        },
                        {
                            content: `定期定額申購作業，應於指定扣款日前一個營業日 13:30:00 前辦妥申請手續，並請於指定扣款日營業日將包含申購手續費之申購款項存入扣款銀行帳戶；若扣款日為國定例假日或金融機構之電腦轉帳系統故障或其他不可抗力之事由，未能於約定日期進行扣款作業時，則順延至次一營業日扣款。此外，若於同一指定帳戶內同時授權二個以上境外基金申購款項扣款轉帳付款作業，或扣款當日存款不足以支付全部申購款項時，將依集保結算所指定之扣款順序逐筆扣款，申購人不得異議。`,
                        },
                    ],
                },
                {
                    content: `契約變更`,
                    innerList: [
                        {
                            content: `定期定額可申購基金不包含貨幣型基金及富蘭克林華美投信之外幣分配型基金。`,
                        },
                        {
                            content: `定期定額申購委託需於扣款日前一個營業日 13:30:00 前生效，如逾期則順延至次月生效。`,
                        },
                        {
                            content: `定期定額申購投資人可任選每月1個或多個扣款日，惟選擇每月29日、30日或31日須注意，如遇當月有該日但非營業日時，則扣款日順延至次一營業日；如遇當月無該日時，則不辦理扣款。例如：選擇每月31日扣款，則僅每年一月、三月、五月、七月、八月、十月，及十二月正常扣款，其餘月份沒有31日不辦理扣款，以此類推。`,
                        },
                        {
                            content: `透過「國民e帳戶」網路交易平台可進行指定扣款日期、交易幣別、金額、配息方式的變更，如您的契約為定期定額，請於指定扣款日前一個營業日 13:30:00 前於「國民e帳戶」網路交易平台完成變更程序。`,
                        },
                    ],
                },
                {
                    content: `如需取消定期定額申購或變更委託，請於交易截止時間前(交易扣款當日營業日13:30:00前)至「國民e帳戶」網路交易平台【基金交易】»【交易查詢與取消】取消該筆委託，交易時間截止後(交易扣款當日營業日13:30:00後)欲取消，需待該契約成立後(約需1~2工作天)，再至【基金交易】»【定期定額變更】清除該筆委託之所有扣款日期，則該筆委託即於停止扣款；若欲變更銀行代扣款帳號或贖回帳號，則需以書面申請，填妥申請書並蓋上原留印鑑後寄回本公司辦理。`,
                },
                {
                    content: `受益人同意授權臺灣集中保管結算所辦理境外基金申購、贖回或孳息分派等款項之結匯事項，並同意授權臺灣集中保管結算所得與銀行議定單一之買進或賣出匯率，辦理結匯作業。`,
                },
                {
                    content: `依臺灣集中保管結算所作業規定，受益人如僅約定台幣贖回帳戶，僅能以台幣申購基金；如僅約定外幣贖回帳戶，則申購時應以基金原幣為之。`,
                },
                {
                    content: `境外基金申購之受益權單位數計至小數點三位數時，將會以慣用的進位法計算到最接近的小數點以下三位數；境內基金申購之受益權單位數多於小數點一位數時，將會以慣用的進位法計算到最接近的小數點以下一位數；惟實際分配之單位數，受益人應以臺灣集中保管結算所計算分配為準。`,
                },
                {
                    content: `除法令變更外，每一客戶每日電子交易之申購(境內基金與境外基金加總計算、含手續費，不含轉換交易)之上限金額為新台幣3000萬元或等值外幣。如投資金額高於作業準則規定，系統會自動拒絕該筆交易，並請投資人重新輸入投資金額。因各家銀行作業機制不同，請依各銀行規定之額度限制進行交易，以避免超過額度而造成扣款失敗。`,
                    innerList: [
                        {
                            content: `【補充1】若選擇約定使用『全國性繳費業務指定扣款銀行』自動扣款方式繳付申購款項，每筆申購交易扣款金額(含手續費)不得超過新台幣500萬元，當日累計扣款金額以新台幣3000萬元(含手續費)為上限(實際扣款額上限仍應以客戶所屬扣款行規定為準，惟仍應符合法令規定之最高扣款上限)。若選擇約定使用『集保款項收付指定扣款銀行』自動扣款方式繳付申購款項，則依現行法規的規定限制，自然人客戶以新台幣3000萬元(含手續費)為上限。`,
                        },
                        {
                            content: `【補充2】若開戶時選擇約定網銀帳戶(華南銀行除外)之線上開戶客戶(意指開戶時即透過網銀核印成功)，於自動扣款繳付申購款項時，每筆單筆申購交易扣款金額(含手續費)以新台幣500萬元為限，不受【補充1】『全國性繳費業務指定扣款銀行』或『集保款項收付指定扣款銀行』每筆申購上限限制，唯當日累計扣款金額(含手續費)上限仍為新台幣3000萬元。`,
                        },
                    ],
                },
                {
                    content: `擇時交易/短線交易說明：`,
                    innerList: [
                        {
                            content: `境外基金：依公開說明書及投資人須知之規定，本公司不鼓勵短期或是過度交易（以下稱「擇時交易」），當基金公司或股務代理機構認定投資人的交易可能妨礙基金投資組合效率管理、可能實質增加基金交易成本、管理成本或稅捐，或是在其他方面不利於基金公司及其股東權益時，會試圖限制或拒絕此類交易。故當投資人的交易行為被認定為擇時交易時，有可能暫時或是永久禁止投資人後續之申購或轉申購委託。`,
                        },
                        {
                            content: `境內基金：基金經理公司不歡迎受益人對基金進行短線申購贖回之交易，故持有境內基金未屆滿14日者應支付買回價金之百分之零點二之買回費用。買回費用採四捨五入計算至新台幣「元」，如不足一元則不予收取；外幣計價者(日幣除外)，採四捨五入計算至該幣別「元」以下小數點第二位。申購交易日期計算方式：以「請求買回之書面或其他約定方式到達經理公司或其銷售機構營業日或次一營業日(各基金買回淨值日須依各基金公開說明書之規定)」之日期減去「申購日」之日期，小於14日(含，以日曆日計算)者。`,
                        },
                    ],
                },
                {
                    content: `因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。`,
                },
                {
                    content: `依照洗錢防制法相關配合條款，受益人須以本人名義匯款，若不相同，本公司將拒絕該筆交易，並將款項退還予匯款人，相關匯費由客戶自行負擔。`,
                },
            ],
            tdccStipulate: false,
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li v-for="(item, index) in notice" :key="index">
                                    <div v-html="item.content"></div>
                                    <ul v-if="item.innerList != undefined">
                                        <li v-for="(item2, index2) in item.innerList" :key="index2">
                                            <div v-html="item2.content"></div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日 9：00～18：00 撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                                <li>
                                    【資安宣導】提醒客戶防範網路釣魚: 本公司不會寄發電子郵件要求客戶輸入身分證號碼或帳號密碼等資訊，若您收到以本公司名義寄發的可疑郵件，難以辨識真偽時，請勿回覆、勿點擊郵件(通訊軟體、其他網站)之連結網址。<el-link type="primary" href="https://www.franklin.com.tw/Privacy/Index" target="_blank">請點此看更多「防範網路釣魚注意事項」</el-link>。
                                </li>
                                <li>
                                    <el-link type="primary" @click="tdccStipulate = !tdccStipulate">
                                        參考資訊：臺灣集中保管結算所作業規定
                                    </el-link>
                                    <el-collapse-transition>
                                        <div v-show="tdccStipulate">
                                            <ol class="chineseListStyle">
                                                <li>
                                                    依臺灣集中保管結算所作業規定，客戶辦理單筆扣款或定期定額扣款申購作業，應於集保結算所指定之款項收付機構或於參加全國性繳費（稅）業務之金融機構（以下合稱扣款行）開設款項帳戶，填具基金扣款轉帳授權書，並於扣款授權書簽蓋原留印鑑，或以線上申請扣款轉帳授權事宜。授權扣款行於客戶申購境外基金時，依集保結算所通知辦理扣款事宜。集保結算所將於扣款行完成核印作業後，始辦理相關扣款通知事宜。（最新指定之扣款行資料，可至集保結算所網站www.tdcc.com.tw查詢）
                                                </li>
                                                <li>
                                                    前項扣款作業，除客戶開設款項帳戶之金融機構屬於集保結算所公告之款項收付機構外，應依「全國性繳費（稅）業務」之相關規定辦理；前述金融機構如與集保結算所簽約成為款項收付機構者，相關扣款作業，將改按款項收付機構自行扣款方式辦理；另依現行全國性繳費（稅）業務之轉帳規定，單筆最高轉帳金額為新臺幣伍佰萬元而每日最高轉帳扣繳限額為新臺幣參仟萬元。但前述金額經調整者，依調整後金額定之。各扣款行或有不同限額限制，扣款人申購前應自行與該扣款行確認有關全國性繳費(稅)業務之額度限制，並依照該額度限制申購基金，以避免額度限制造成扣款失敗。採線上扣款轉帳授權者，依扣款行之相關規定辦理。
                                                </li>
                                            </ol>
                                        </div>
                                    </el-collapse-transition>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

const Sip_list = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "精選基金",
                    name: "1",
                    fundType: "1",
                },
                {
                    title: "債券型",
                    name: "2",
                    fundType: "2",
                },
                {
                    title: "單一國家",
                    name: "3",
                    fundType: "1",
                },
                {
                    title: "全球股票",
                    name: "4",
                    fundType: "2",
                },
                {
                    title: "新興市場",
                    name: "5",
                    fundType: "1",
                },
                {
                    title: "美國股票",
                    name: "6",
                    fundType: "2",
                },
                {
                    title: "歐洲股票",
                    name: "7",
                    fundType: "1",
                },
                {
                    title: "平衡型",
                    name: "8",
                    fundType: "2",
                },
                {
                    title: "產業型",
                    name: "9",
                    fundType: "1",
                },
                {
                    title: "投信基金",
                    name: "10",
                    fundType: "2",
                },
            ],
            tabIndex: 10,

            fund: [
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "4000",
                    fundName: "伊斯蘭債券基金－美元",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "4008",
                    fundName: "伊斯蘭債券基金－美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1107",
                    fundName: "公用事業基金",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
            ],
            fund2: [
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "保守型(RR2)",
                    fundCode: "1174",
                    fundName: "美國政府基金",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "0813",
                    fundName: "新興國家固定收益基金—美元季配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1049",
                    fundName: "新興國家固定收益基金—美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
            ],
            fund3: [
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "0813",
                    fundName: "新興國家固定收益基金—美元季配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
                {
                    transactionMethod: "穩健型(RR3)",
                    fundCode: "1049",
                    fundName: "新興國家固定收益基金—美元月配息",
                    bottomContent: {
                        type: "purchase",
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: true,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "【定期定額】美元 40 / 新台幣 1,000；【定期不定額】美元100/新台幣3,000", // 最低投資金額
                    },
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "申購",
                promptIcon: "arrow",
            },
        };
    },
    template: ` <div>
                    <fundQuickSearch @childMethod="addTab(editableTabsValue)"></fundQuickSearch>
                    <el-tabs
                        v-model="editableTabsValue"
                        :tab-position="tabPosition"
                    >
                        <el-tab-pane
                            v-for="(item, index) in editableTabs"
                            :key="index"
                            :label="item.title"
                            :name="item.name"
                            lazy
                        >
                            <div class="fundList-area" v-if="item.fundType == '1'">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                            <div class="fundList-area" v-if="item.fundType == '2'">
                                <fundList
                                    v-for="(item, index) in fund2"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                            <div class="fundList-area" v-if="item.fundType == '3'">
                                <fundList
                                    v-for="(item, index) in fund3"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="nextPage()">
                                </fundList>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>`,
    components: {
        pageTit: pageTit,
        fundQuickSearch: fundQuickSearch,
    },
    methods: {
        // 快速搜尋示意
        querySearch(queryString, cb) {
            var restaurants = this.search.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
        },

        // 新增搜尋結果頁籤
        addTab(targetName) {
            if (this.tabIndex <= 10) {
                let newTabName = ++this.tabIndex + "";
                this.editableTabs.push({
                    title: "搜尋結果",
                    name: newTabName,
                    fundType: "3",
                });
                this.editableTabsValue = newTabName;
            } else {
                this.editableTabsValue = "11";
            }
        },

        // 前往申購流程
        nextPage() {
            this.$router.push("/Sip/Subscribe");
            this.$scrollTo("body");
        },
    },
};

const Sip_subscribe = {
    mixins: [delegationFailedPopUp],
    data() {
        return {
            stepInfo: [
                {
                    path: "/Sip/Subscribe/Step1",
                    tit: "填寫申購明細",
                },
                {
                    path: "/Sip/Subscribe/Step2",
                    tit: "確認事項",
                },
                {
                    path: "/Sip/Subscribe/Step3",
                    tit: "完成委託",
                },
            ],
            entrust: "success",
        };
    },
    template: ` <div>
                    <stepItem :data="stepInfo"></stepItem>
                    <el-card class="tradingProcess-card">
                        <div class="fundList-header">
                            <div class="fundList-header-content">
                                <div class="fundList-fundCode">
                                    4000
                                </div>
                                <template v-if="$route.path === '/Sip/Subscribe/Step3'">
                                    <div class="fundList-transactionMethod success" v-if="entrust == 'success'">
                                        <i class="fas fa-check-circle"></i> 委託成功
                                    </div>
                                    <div class="fundList-transactionMethod warning" v-if="entrust == 'warning'">
                                        <i class="fas fa-exclamation-circle"></i> 委託失敗
                                    </div>
                                    <div class="fundList-transactionMethod danger" v-if="entrust == 'danger'">
                                        <i class="fas fa-times-circle"></i> 嚴重錯誤
                                    </div>
                                </template>
                            </div>
                            <h3 class="fundList-fundName" title="伊斯蘭債券基金－美元(本基金之配息來源可能為本金)">
                                <openFundSmallFile></openFundSmallFile>
                                伊斯蘭債券基金－美元(本基金之配息來源可能為本金)
                            </h3>
                        </div>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <router-view></router-view>
                        </transition>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/Sip/Subscribe/Step3'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/TradeHistory/list'); $scrollTo('body')">
                            交易查詢與取消
                        </el-button>
                        <el-button
                            v-if="$route.path === '/Sip/Subscribe/Step1' || $route.path === '/Sip/Subscribe/Step2'"
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            {{
                                $route.path === '/Sip/Subscribe/Step1' ? '重新選擇基金' : '上一步'
                            }}
                        </el-button>
                        <template>
                            <el-button
                                v-if="$route.path === '/Sip/Subscribe/Step1'"
                                round
                                type="primary"
                                @click="$router.push('/Sip/Subscribe/Step2#smartRSP'); $scrollTo('body')">
                                下一步
                            </el-button>
                            <el-button
                                v-else-if="$route.path === '/Sip/Subscribe/Step2'"
                                round
                                type="primary"
                                @click="$router.push('/Sip/Subscribe/Step3#smartRSP'); $scrollTo('body')">
                                確認送出
                            </el-button>
                            <el-button
                                v-else
                                round
                                type="primary"
                                @click="$router.push('/Sip'); $scrollTo('body')">
                                繼續下單
                            </el-button>
                        </template>
                        <el-button
                            v-if="$route.path === '/Sip/Subscribe/Step2'"
                            type="text"
                            @click="$router.go(-2);">
                            取消委託
                        </el-button>
                    </div>
                    <!--示意用 可刪除 start-->
                    <div class="tradingProcess-btnArea" v-if="$route.path === '/Sip/Subscribe/Step2'">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="failurePopUp">
                            示意委託失敗
                        </el-button>
                    </div>
                    <!--示意用 可刪除 end-->
                </div>`,
    components: {
        stepItem: stepItem,
    },
};

const Sip_subscribe_step1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "105px",
            transactionType: 1,
            currency: 1,
            subscriptionAmount: "",

            form: {
                discountOptions: [
                    {
                        value: "0",
                        label: "【第四季精選優惠】0.15%, 下單期限:2021/01/07 23:59",
                    },
                    {
                        value: "1",
                        label: "【折扣測試】0.2699%, 下單期限:永久",
                    },
                    {
                        value: "2",
                        label: "【網路交易長期優惠】0.6%, 下單期限:永久",
                    },
                ],
                discountValue: "",

                already: [],
                already2: [],
            },

            maximumDeduction: ``,
            minimumDeduction: ``,
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio-group v-model="transactionType" class="margin-right-10">
                                        <el-radio :label="1">定期定額</el-radio>
                                        <el-radio :label="2">定期不定額</el-radio>
                                        <el-radio :label="3">智能定期不定額</el-radio>
                                    </el-radio-group>
                                    <whatIsSmartRSP></whatIsSmartRSP>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    付款方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    自動扣款
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    計價幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    美元 參考匯率：30.0425 (2020/10/16)
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款幣別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio-group v-model="currency">
                                        <el-radio :label="1">新台幣</el-radio>
                                        <el-radio :label="2">外幣</el-radio>
                                    </el-radio-group>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    <b class="text-black">
                                        (基準)扣款金額設定
                                    </b>
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-input-number 
                                        v-model="subscriptionAmount"
                                        :min="3000"
                                        :step="100"
                                    >
                                    </el-input-number>
                                    <br/>
                                    <small v-if="currency == 1">
                                        備註：新台幣最低扣款金額$3,000
                                    </small>
                                    <small v-if="currency == 2">
                                        備註：美元最低扣款金額$100
                                    </small>
                                </div>
                            </div>
                            <transition enter-active-class="animate__animated animate__fadeIn">
                                <template v-if="transactionType == 3">
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款金額上限
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-input-number 
                                                v-model="maximumDeduction"
                                                :min="3000"
                                                :step="100"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                </template>
                            </transition>
                            <transition enter-active-class="animate__animated animate__fadeIn">
                                <template v-if="transactionType == 3">
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款金額下限
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-input-number 
                                                v-model="minimumDeduction"
                                                :min="3000"
                                                :step="100"
                                            >
                                            </el-input-number>
                                        </div>
                                    </div>
                                </template>
                            </transition>
                        </div>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <div class="tradingProcess-card-content" v-show="transactionType == 2">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額加/減碼設定
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-row :gutter="20">
                                            <el-col :span="24">
                                                <el-button
                                                    round
                                                    class="sBtn"
                                                    plain>
                                                    清除重填
                                                </el-button>
                                                <el-button type="primary" round plain class="sBtn" @click="$root.showTeaching()">
                                                    <i class="far fa-lightbulb"></i> 操作教學
                                                </el-button>
                                            </el-col>
                                            <el-col :md="12">
                                                <plusAndMinusSetting plusOrMinus="+"></plusAndMinusSetting>
                                            </el-col>
                                            <el-col :md="12">
                                                <plusAndMinusSetting plusOrMinus="-"></plusAndMinusSetting>
                                            </el-col>
                                        </el-row>
                                        <el-alert
                                            class="borderStyle"
                                            type="info"
                                            show-icon
                                            :closable="false"
                                        >
                                            <slot name="description">
                                                *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                            </slot>
                                        </el-alert>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <div v-show="transactionType == 3">
                            <smartRSP_recommendedFund :titWidth="itemTitWidth"></smartRSP_recommendedFund>
                        </div>
                    </transition>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    請選擇欲扣款的日期
                                    <selectDate></selectDate>
                                    <el-alert
                                        class="borderStyle"
                                        type="warning"
                                        show-icon
                                        :closable="false"
                                    >
                                        <slot name="description">
                                            選擇每月29日、30日，或31日扣款者，如遇當月有該日但非營業日時，則扣款日順延至次一營業日；如遇當月無該日時，則不辦理扣款，詳見注意事項說明
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    優惠類別
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-form-item
                                        prop="discountValue"
                                        :rules="[
                                            { required: true, message: '請選擇', trigger: 'change'}
                                        ]"
                                    >
                                        <el-select v-model="form.discountValue" placeholder="請選擇優惠費率">
                                            <el-option
                                                v-for="item in form.discountOptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value"
                                            >
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-alert
                                        class="borderStyle"
                                        type="warning"
                                        show-icon
                                        :closable="false"
                                    >
                                        <template v-slot:title>
                                            【提醒】
                                        </template>
                                        <slot name="description">
                                            <ol>
                                                <li>
                                                    各優惠使用詳細規則需依各活動網頁說明以及最新優惠公告為準。
                                                </li>
                                                <li>
                                                    部分優惠將因契約變更為停止扣款而失效(例如：「轉機攻略」)。
                                                </li>
                                            </ol>
                                        </slot>
                                    </el-alert>
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
                                            { type: 'array', required: true, message: '請勾選', trigger: 'change' }
                                        ]"
                                    >
                                        <el-checkbox v-model="form.already">我已線上閱讀/下載</el-checkbox>
                                    </el-form-item>
                                    <div class="margin-top-5 margin-left-25">
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

                                    <template v-if="transactionType == 3">
                                        <div class="margin-top-10 margin-top-sm-25"></div>
                                        <el-form-item
                                            prop="already2"
                                            :rules="[
                                                { type: 'array', required: true, message: '請勾選', trigger: 'change' }
                                            ]"
                                        >
                                            <el-checkbox v-model="form.already2">
                                                我已線上閱讀/下載並同意
                                                <el-link
                                                    icon="fas fa-external-link-alt"
                                                    type="primary"
                                                    @click="$root.$data.smartRSP_executionConsent = true"
                                                >
                                                    &nbsp;智能定期不定額執行同意書 
                                                </el-link>
                                            </el-checkbox>
                                        </el-form-item>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                </el-form>`,
    components: {
        selectDate: selectDate,
        plusAndMinusSetting: plusAndMinusSetting,
    },
};

const Sip_subscribe_step2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "105px",
            fundInfo: [
                // {
                //     tit: "交易類型",
                //     content: this.$route.path === '/Sip/Subscribe/Step2#test' ? "測試" : '定期不定額',
                // },
                {
                    tit: "付款方式",
                    content: "自動扣款",
                },
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：30.0425 (2020/10/19)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "<b class='text-black'>(基準)<br class='hidden-xs-only'/>扣款金額</b>",
                    content: "<b class='price'>3,000</b>",
                },
            ],
            usePoints: true,

            form: {
                transactionPassword: "",
                checked1: [],
                checked2: [],
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    XXX
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    XXX
                                </div>
                            </div>
                            <template v-if="$route.hash === '#smartRSP'">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額上限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $10,000
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額下限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $3,000
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content" v-show="$route.hash === ''">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    加減碼後扣款金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-row :gutter="20">
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                        </el-col>
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                        </el-col>
                                    </el-row>
                                    <el-alert
                                        class="borderStyle"
                                        type="info"
                                        show-icon
                                        :closable="false"
                                    >
                                        <slot name="description">
                                            *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <span>01日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>10日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>15日</span>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    優惠方案
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    【第四季精選優惠】0.15%, 下單期限:2021/01/07 23:59
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    紅利點數
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-checkbox v-model="usePoints" disabled>
                                        使用 預計每次應扣除 30 點
                                    </el-checkbox>
                                    <br class="hidden-sm-and-up"/>
                                    <small>
                                        (您的紅利尚有 690,409 點)
                                    </small>
                                    <el-alert
                                        class="borderStyle"
                                        type="info"
                                        show-icon
                                        :closable="false"
                                    >
                                        <slot name="description">
                                            <ol>
                                                <li>
                                                    紅利點數1點可折抵手續費1元，最低可使用紅利點數折抵手續費至 0 %。
                                                </li>
                                                <li>
                                                    每次應扣除點數將隨投資金額異動而改變，扣款日自動依當日紅利點數庫存折抵，點數不足抵扣之手續費將連同申購價金一併扣款。
                                                </li>
                                            </ol>
                                        </slot>
                                    </el-alert>
                                    <el-link
                                        icon="fas fa-external-link-alt"
                                        type="primary"
                                        href="https://www.franklin.com.tw/ReservationAccount/ECFAQ/DivPoint" target="_blank">
                                        &nbsp;紅利點數使用說明
                                    </el-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考手續費
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    0
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    投資人須知及基金公開說明書取得方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    線上閱讀/下載
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
                                            本人已詳閱並瞭解(1)基金配息可能由其收益或本金中支付，而使原始投資金額減損，且配息前未先扣除相關費用。(2)高收益債券信用評等未達投資等級或未經信用評等、其對利率變動敏感度甚高，且會因利率、市場流動性、或債券發行機構等因素而虧損，投資人投資不宜占投資組合過高比重。
                                            <el-link
                                                icon="fas fa-external-link-alt"
                                                type="primary"
                                                href="https://wt.franklin.com.tw:8081/Home/RiskAnnouncement" target="_blank">
                                                &nbsp;請詳閱完整風險預告書
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
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                    <div @click="$route.hash === '#smartRSP' ? $router.push('/Sip/Subscribe/Step2') : $router.push('/Sip/Subscribe/Step2#smartRSP')"
                        style="position: fixed; bottom: 0px; right: 120px; background: #000; border-radius: 5px; color: #fff; font-size: 12px; padding: 0px 5px; cursor: pointer;">
                        切換為{{$route.hash === '#smartRSP' ? "定期不定額" : '智能定期不定額'}}
                    </div>
                </el-form>`,
    components: {
        plusAndMinusSetting: plusAndMinusSetting,
    },
};

const Sip_subscribe_step3 = {
    data() {
        return {
            itemTitWidth: "105px",
            fundInfo: [
                {
                    tit: "委託時間",
                    content: "2020/10/19 17:14:09",
                },
                {
                    tit: "計價幣別",
                    content: "美元 參考匯率：30.0425 (2020/10/19)",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "<b class='text-black'>(基準)<br class='hidden-xs-only'/>扣款金額</b>",
                    content: "<b class='price'>3,000</b>",
                },
            ],
            usePoints: true,
            transactionPassword: "",

            checked1: "",
            checked2: "",
        };
    },
    template: ` <div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                    XXX
                                </div>
                                <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                    XXX
                                </div>
                            </div>
                            <template v-if="$route.hash === '#smartRSP'">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額上限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $10,000
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額下限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $3,000
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <div class="tradingProcess-card-content" v-show="$route.hash === ''">
                            <div class="tradingProcess-card-content-item-area">
                                <div class="tradingProcess-card-content-item columnSpan">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        加減碼後扣款金額
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-row :gutter="20">
                                            <el-col :md="12">
                                                <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                            </el-col>
                                            <el-col :md="12">
                                                <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                            </el-col>
                                        </el-row>
                                        <el-alert
                                            class="borderStyle"
                                            type="info"
                                            show-icon
                                            :closable="false"
                                        >
                                            <slot name="description">
                                                *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                            </slot>
                                        </el-alert>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <span>01日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>10日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>15日</span>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    優惠方案
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    【第四季精選優惠】0.15%, 下單期限:2021/01/07 23:59
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    參考<br class='hidden-xs-only'/>申購總價金
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    3,000
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    付款方式
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    自動扣款
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="$route.hash === '#smartRSP' ? $router.push('/Sip/Subscribe/Step3') : $router.push('/Sip/Subscribe/Step3#smartRSP')"
                        style="position: fixed; bottom: 0px; right: 0px; background: #000; border-radius: 5px; color: #fff; font-size: 12px; padding: 0px 5px; cursor: pointer;">
                        切換為{{$route.hash === '#smartRSP' ? "定期不定額" : '智能定期不定額'}}
                    </div>
                </div>`,
    components: {
        plusAndMinusSetting: plusAndMinusSetting,
    },
};

// ========= 定期(不)定額變更 ==============================================================================================================================
const SipChange = {
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `定期(不)定額變更`,
            },

            notice: [
                {
                    content: `受益人不得具有美國聯邦所得稅(US federal income taxes)所指之美國人(U.S. persons)身份或加拿大居民或其它經主管機關及境外基金機構限制之身份，亦非為任何具有前述身份之人士利益申購本公司銷售之基金。`,
                },
                {
                    content: `本交易平台可申購本公司已核備之富蘭克林坦伯頓盧森堡及美國註冊之基金(以下簡稱境外基金)，及台灣核准之富蘭克林華美投信基金(以下簡稱境內基金)。`,
                },
                {
                    content: `交易委託時間`,
                    innerList: [
                        {
                            content: `每營業日 13:30:00 以前委託輸入者，為當期營業日之交易。`,
                        },
                        {
                            content: `每營業日 13:30:01 以後委託輸入者，為次一營業日之交易。`,
                        },
                        {
                            content: `前一營業日 13:30:01 ~ 次一營業日 13:30:00 截止，為網路交易系統之一個交易日。`,
                        },
                    ],
                },
                {
                    content: `契約申購`,
                    innerList: [
                        {
                            content: `定期定額可申購基金不包含貨幣型基金及富蘭克林華美投信之外幣分配型基金。`,
                        },
                        {
                            content: `定期定額申購委託需於扣款日前一個營業日 13:30:00 前生效，如逾期則順延至次月生效。`,
                        },
                        {
                            content: `定期定額申購投資人可任選每月1個或多個扣款日，惟選擇每月29日、30日或31日須注意，如遇當月有該日但非營業日時，則扣款日順延至次一營業日；如遇當月無該日時，則不辦理扣款。例如：選擇每月31日扣款，則僅每年一月、三月、五月、七月、八月、十月，及十二月正常扣款，其餘月份沒有31日不辦理扣款，以此類推。`,
                        },
                        {
                            content: `定期定額申購作業，應於指定扣款日前一個營業日 13:30:00 前辦妥申請手續，並請於指定扣款日營業日將包含申購手續費之申購款項存入扣款銀行帳戶；若扣款日為國定例假日或金融機構之電腦轉帳系統故障或其他不可抗力之事由，未能於約定日期進行扣款作業時，則順延至次一營業日扣款。此外，若於同一指定帳戶內同時授權二個以上境外基金申購款項扣款轉帳付款作業，或扣款當日存款不足以支付全部申購款項時，將依集保結算所指定之扣款順序逐筆扣款，申購人不得異議。`,
                        },
                    ],
                },
                {
                    content: `透過「國民e帳戶」網路交易平台可進行契約變更，例如:指定扣款日期、交易幣別、金額、配息方式的變更，如您的契約為定期定額，請於指定扣款日前一個營業日 13:30:00 前於「國民e帳戶」網路交易平台完成變更程序。`,
                },
                {
                    content: `如需取消定期定額申購或變更委託，請於交易截止時間前(交易扣款當日營業日13:30:00前)至「國民e帳戶」網路交易平台【基金交易】»【交易查詢與取消】取消該筆委託，交易時間截止後(交易扣款當日營業日13:30:00後)欲取消，需待該契約成立後(約需1~2工作天)，再至【基金交易】»【定期定額變更】清除該筆委託之所有扣款日期，則該筆委託即於停止扣款；若欲變更銀行代扣款帳號或贖回帳號，則需以書面申請，填妥申請書並蓋上原留印鑑後寄回本公司辦理。`,
                },
                {
                    content: `受益人同意授權臺灣集中保管結算所辦理境外基金申購、贖回或孳息分派等款項之結匯事項，並同意授權臺灣集中保管結算所得與銀行議定單一之買進或賣出匯率，辦理結匯作業。`,
                },
                {
                    content: `依臺灣集中保管結算所作業規定，受益人如僅約定台幣贖回帳戶，僅能以台幣申購基金；如僅約定外幣贖回帳戶，則申購時應以基金原幣為之。`,
                },
                {
                    content: `境外基金申購之受益權單位數計至小數點三位數時，將會以慣用的進位法計算到最接近的小數點以下三位數；境內基金申購之受益權單位數多於小數點一位數時，將會以慣用的進位法計算到最接近的小數點以下一位數；惟實際分配之單位數，受益人應以臺灣集中保管結算所計算分配為準。`,
                },
                {
                    content: `除法令變更外，每一客戶每日電子交易之申購(境內基金與境外基金加總計算、含手續費，不含轉換交易)之上限金額為新台幣3000萬元或等值外幣。如投資金額高於作業準則規定，系統會自動拒絕該筆交易，並請投資人重新輸入投資金額。因各家銀行作業機制不同，請依各銀行規定之額度限制進行交易，以避免超過額度而造成扣款失敗。`,
                    innerList: [
                        {
                            content: `【補充1】若選擇約定使用『全國性繳費業務指定扣款銀行』自動扣款方式繳付申購款項，每筆申購交易扣款金額(含手續費)不得超過新台幣500萬元，當日累計扣款金額以新台幣3000萬元(含手續費)為上限(實際扣款額上限仍應以客戶所屬扣款行規定為準，惟仍應符合法令規定之最高扣款上限)。若選擇約定使用『集保款項收付指定扣款銀行』自動扣款方式繳付申購款項，則依現行法規的規定限制，自然人客戶以新台幣3000萬元(含手續費)為上限。`,
                        },
                        {
                            content: `【補充2】若開戶時選擇約定網銀帳戶(華南銀行除外)之線上開戶客戶(意指開戶時即透過網銀核印成功)，於自動扣款繳付申購款項時，每筆單筆申購交易扣款金額(含手續費)以新台幣500萬元為限，不受【補充1】『全國性繳費業務指定扣款銀行』或『集保款項收付指定扣款銀行』每筆申購上限限制，唯當日累計扣款金額(含手續費)上限仍為新台幣3000萬元。`,
                        },
                    ],
                },
                {
                    content: `擇時交易/短線交易說明：`,
                    innerList: [
                        {
                            content: `境外基金：依公開說明書及投資人須知之規定，本公司不鼓勵短期或是過度交易（以下稱「擇時交易」），當基金公司或股務代理機構認定投資人的交易可能妨礙基金投資組合效率管理、可能實質增加基金交易成本、管理成本或稅捐，或是在其他方面不利於基金公司及其股東權益時，會試圖限制或拒絕此類交易。故當投資人的交易行為被認定為擇時交易時，有可能暫時或是永久禁止投資人後續之申購或轉申購委託。`,
                        },
                        {
                            content: `境內基金：基金經理公司不歡迎受益人對基金進行短線申購贖回之交易，故持有境內基金未屆滿14日者應支付買回價金之百分之零點二之買回費用。買回費用採四捨五入計算至新台幣「元」，如不足一元則不予收取；外幣計價者(日幣除外)，採四捨五入計算至該幣別「元」以下小數點第二位。申購交易日期計算方式：以「請求買回之書面或其他約定方式到達經理公司或其銷售機構營業日或次一營業日(各基金買回淨值日須依各基金公開說明書之規定)」之日期減去「申購日」之日期，小於14日(含，以日曆日計算)者。`,
                        },
                    ],
                },
                {
                    content: `因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。`,
                },
            ],
            tdccStipulate: false,
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <transition enter-active-class="animate__animated animate__fadeIn">
                        <router-view></router-view>
                    </transition>
                    <section class="notice">
                        <h4 class="tit-type2" title="注意事項">
                            注意事項
                        </h4>
                        <div class="notice-content">
                            <ol>
                                <li v-for="(item, index) in notice" :key="index">
                                    <div v-html="item.content"></div>
                                    <ul v-if="item.innerList != undefined">
                                        <li v-for="(item2, index2) in item.innerList" :key="index2">
                                            <div v-html="item2.content"></div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日 9：00～18：00 撥打免付費客服專線，將有客服專員竭誠為您服務！
                                </li>
                                <li>
                                    【資安宣導】提醒客戶防範網路釣魚: 本公司不會寄發電子郵件要求客戶輸入身分證號碼或帳號密碼等資訊，若您收到以本公司名義寄發的可疑郵件，難以辨識真偽時，請勿回覆、勿點擊郵件(通訊軟體、其他網站)之連結網址。<el-link type="primary" href="https://www.franklin.com.tw/Privacy/Index" target="_blank">請點此看更多「防範網路釣魚注意事項」</el-link>。
                                </li>
                                <li>
                                    <el-link type="primary" @click="tdccStipulate = !tdccStipulate">
                                        參考資訊：臺灣集中保管結算所作業規定
                                    </el-link>
                                    <el-collapse-transition>
                                        <div v-show="tdccStipulate">
                                            <ol class="chineseListStyle">
                                                <li>
                                                    依臺灣集中保管結算所作業規定，客戶欲變更定期定額申購之扣款日期、扣款金額、基金種類，或終止契約、暫停扣款及恢復扣款者，應於指定扣款日前一營業日下午三時前辦妥變更申請手續。實際可變更之定期定額內容及申請截止時間請依銷售機構(富蘭克林)規定。
                                                </li>
                                            </ol>
                                        </div>
                                    </el-collapse-transition>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>`,
    components: {
        pageTit: pageTit,
    },
};

const SipChange_list = {
    // mixins: [fundListGroup],
    data() {
        return {
            fund: [
                {
                    noNext: true,
                    transactionMethod: "正常扣款",
                    errorTag: "申購處理中",
                    dealDateName: "申請日期：", // 沒有資料時預設顯示交易日期
                    dealDate: "2020/11/19",
                    fundCode: "6847",
                    fundName: "多重資產收益基金累積型",
                    info: [
                        {
                            tit: "扣款金額",
                            text: "3,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "交易類型",
                            text: "定期不定額",
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
                            tit: "扣款幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費率",
                            text: "0.5397%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託書號",
                            text: "254617",
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
                            tit: "扣款帳號",
                            text: "土地銀行 9600550010***",
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
                    hasPopover: true,
                    warning: `本基金為避免國內投資人投資金額占個別境外基金淨資產價值之比率超過百分之七十之法定上限，自107年9月21日(生效日)起停止受理投資人之新增申購，定期(不)定額投資人，仍得按原訂契約繼續扣款，惟不得變更原契約投資交易條件或投資金額。且本基金於9月11日至9月20日期間，將無法透過國民e帳戶進行上述契約條件或金額變更，若投資人有上述需求，請洽客服專線0800-885-888。`,
                    bottomContent: {
                        type: "dateOfDeduction",
                    },
                    dateOfDeduction: ["02", "03", "05", "06", "07", "08", "09", "10", "11", "12", "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "29", "31"],
                },
                {
                    transactionMethod: "正常扣款",
                    dealDateName: "申請日期：", // 沒有資料時預設顯示交易日期
                    dealDate: "2020/11/02",
                    fundCode: "0479",
                    fundName: "全球高收益基金－美元月配息",
                    info: [
                        {
                            tit: "扣款金額",
                            text: "1,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "扣款金額上限",
                            text: "5,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款金額下限",
                            text: "1,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易類型",
                            text: "智能定期不定額",
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
                            tit: "扣款幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費率",
                            text: "1.0000%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託書號",
                            text: "254530",
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
                            tit: "扣款帳號",
                            text: "土地銀行 9600550010***",
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
                    hasPopover: true,
                    // warning: ``,
                    bottomContent: {
                        type: "dateOfDeduction",
                    },
                    dateOfDeduction: ["13", "16"],
                },
                {
                    transactionMethod: "暫停扣款",
                    transactionMethodType: "warning",
                    dealDateName: "申請日期：", // 沒有資料時預設顯示交易日期
                    dealDate: "2020/11/02",
                    fundCode: "0479",
                    fundName: "全球高收益基金－美元月配息",
                    info: [
                        {
                            tit: "扣款金額",
                            text: "1,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易類型",
                            text: "定期定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費率",
                            text: "1.0000%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託書號",
                            text: "254529",
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
                            tit: "扣款帳號",
                            text: "土地銀行 9600550010***",
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
                    hasPopover: true,
                    // warning: ``,
                    bottomContent: {
                        type: "dateOfDeduction",
                    },
                    dateOfDeduction: ["06", "11"],
                },
                {
                    noNext: true,
                    listItemOtherClass: "unimportant",
                    transactionMethod: "已終止契約",
                    transactionMethodType: "danger",
                    dealDateName: "申請日期：", // 沒有資料時預設顯示交易日期
                    dealDate: "2020/06/10",
                    fundCode: "0812",
                    fundName: "美國政府基金—月配息",
                    info: [
                        {
                            tit: "扣款金額",
                            text: "10,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "配息方式",
                            text: "配現金 / 配現",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "交易類型",
                            text: "定期定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "扣款幣別",
                            text: "新台幣",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "手續費率",
                            text: "0.4500%",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "委託書號",
                            text: "232653",
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
                            tit: "扣款帳號",
                            text: "土地銀行 9600550010***",
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
                    hasPopover: true,
                    warning: `連續扣款三次失敗`,
                    // bottomContent: {
                    //     type: "dateOfDeduction",
                    // },
                    // dateOfDeduction: [
                    //     "-",
                    // ],
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

            contractStatusOptions: [
                {
                    value: "1",
                    label: "全部契約",
                },
                {
                    value: "2",
                    label: "正常扣款",
                },
                {
                    value: "3",
                    label: "暫停扣款",
                },
                {
                    value: "4",
                    label: "終止契約",
                },
            ],
            contractStatusValue: "2",

            transactionTypeOptions: [
                {
                    value: "1",
                    label: "全部",
                },
                {
                    value: "2",
                    label: "定期定額",
                },
                {
                    value: "3",
                    label: "定期不定額",
                },
                {
                    value: "4",
                    label: "智能定期不定額",
                },
            ],
            transactionTypeValue: "1",
        };
    },
    template: ` <div>
                    <indexAlertCard class="insidePageType">
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
                    <el-row :gutter="10">
                        <el-col :xl="4" :lg="7" :md="6" :sm="12">
                            <littleFilter tit="契約狀態">
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
                        <el-col :xl="4" :lg="7" :md="7" :sm="12">
                            <littleFilter tit="交易類型" class="margin-top-sm-10">
                                <template v-slot:input>
                                    <el-select v-model="transactionTypeValue" placeholder="請選擇">
                                        <el-option
                                            v-for="item in transactionTypeOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </template>
                            </littleFilter>
                        </el-col>
                        <el-col :xl="16" :lg="10" :md="11">
                            <fundQuickSearch class="margin-top-md-10"></fundQuickSearch>
                        </el-col>
                    </el-row>
                    <div class="fundList-area">
                        <transition-group name="list" enter-active-class="animate__animated animate__fadeIn">
                            <fundList
                                v-for="(item, index) in fund"
                                :key="'1' + index"
                                :fundData="item"
                                :fundListSetting="fundListSetting"
                                @thisIndex2="!item.noNext ? nextPage() : ''"
                                v-if="filertTest(item)">
                            </fundList>
                        </transition-group>
                    </div>
                </div>`,
    components: {
        indexAlertCard: indexAlertCard,
        fundQuickSearch: fundQuickSearch,
        littleFilter: littleFilter,
    },
    methods: {
        // 快速搜尋示意
        querySearch(queryString, cb) {
            var restaurants = this.search.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
            };
        },

        // 前往申購流程
        nextPage() {
            this.$router.push("/SipChange/Subscribe/Step1#smartRSP");
            this.$scrollTo("body");
        },

        // 配合filter顯示基金
        filertTest(item) {
            if (this.contractStatusValue == "1") {
                return true;
            }
            if (this.contractStatusValue == "2" && item.transactionMethod == "正常扣款") {
                return true;
            }
            if (this.contractStatusValue == "3" && item.transactionMethod == "暫停扣款") {
                return true;
            }
            if (this.contractStatusValue == "4" && item.transactionMethod == "已終止契約") {
                return true;
            }
        },
    },
};

const SipChange_subscribe = {
    mixins: [delegationFailedPopUp],
    data() {
        return {
            stepInfo: [
                {
                    path: "/SipChange/Subscribe/Step1",
                    tit: "填寫變更項目",
                },
                {
                    path: "/SipChange/Subscribe/Step2",
                    tit: "確認變更項目",
                },
                {
                    path: "/SipChange/Subscribe/Step3",
                    tit: "完成變更委託",
                },
            ],
            entrust: "success",
        };
    },
    template: ` <div>
                    <stepItem :data="stepInfo"></stepItem>
                    <el-card class="tradingProcess-card">
                        <div class="fundList-header" id="fundListHeader">
                            <div class="fundList-header-content">
                                <div class="fundList-fundCode">
                                    4000
                                </div>
                                <div class="fundList-transactionMethod">
                                    原契約
                                </div>
                                <template v-if="$route.path === '/SipChange/Subscribe/Step3'">
                                    <div class="fundList-transactionMethod success" v-if="entrust == 'success'">
                                        <i class="fas fa-check-circle"></i> 委託成功
                                    </div>
                                    <div class="fundList-transactionMethod warning" v-if="entrust == 'warning'">
                                        <i class="fas fa-exclamation-circle"></i> 委託失敗
                                    </div>
                                    <div class="fundList-transactionMethod danger" v-if="entrust == 'danger'">
                                        <i class="fas fa-times-circle"></i> 嚴重錯誤
                                    </div>
                                </template>
                                <div class="fundList-dealDate" v-if="$route.path === '/SipChange/Subscribe/Step3'">
                                    委託時間：2020/10/21 11:15:55
                                </div>
                            </div>
                            <h3 class="fundList-fundName" title="伊斯蘭債券基金－美元(本基金之配息來源可能為本金)">
                                <openFundSmallFile></openFundSmallFile>
                                伊斯蘭債券基金－美元(本基金之配息來源可能為本金)
                            </h3>
                        </div>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <router-view></router-view>
                        </transition>
                    </el-card>
                    <div class="tradingProcess-btnArea">
                        <el-button
                            v-if="$route.path === '/SipChange/Subscribe/Step3'"
                            plain
                            round
                            type="secondary"
                            @click="$router.push('/TradeHistory/list'); $scrollTo('body')">
                            交易查詢與取消
                        </el-button>
                        <el-button
                            v-if="$route.path === '/SipChange/Subscribe/Step1' || $route.path === '/SipChange/Subscribe/Step2'"
                            plain
                            round
                            type="secondary"
                            @click="$router.go(-1); $scrollTo('body')">
                            {{
                                $route.path === '/SipChange/Subscribe/Step1' ? '重新選擇基金' : '上一步'
                            }}
                        </el-button>
                        <template>
                            <el-button
                                v-if="$route.path === '/SipChange/Subscribe/Step1'"
                                round
                                type="primary"
                                @click="$router.push('/SipChange/Subscribe/Step2#smartRSP'); $scrollTo('body')">
                                下一步
                            </el-button>
                            <el-button
                                v-else-if="$route.path === '/SipChange/Subscribe/Step2'"
                                round
                                type="primary"
                                @click="$router.push('/SipChange/Subscribe/Step3#smartRSP'); $scrollTo('body')">
                                確認送出
                            </el-button>
                            <el-button
                                v-else
                                round
                                type="primary"
                                @click="$router.push('/SipChange'); $scrollTo('body')">
                                繼續下單
                            </el-button>
                        </template>
                        <el-button
                            v-if="$route.path === '/SipChange/Subscribe/Step2'"
                            type="text"
                            @click="$router.go(-2);">
                            取消委託
                        </el-button>
                    </div>
                    <!--示意用 可刪除 start-->
                    <div class="tradingProcess-btnArea" v-if="$route.path === '/SipChange/Subscribe/Step2'">
                        <el-button
                            plain
                            round
                            type="secondary"
                            @click="failurePopUp">
                            示意委託失敗
                        </el-button>
                    </div>
                    <!--示意用 可刪除 end-->
                </div>`,
    components: {
        stepItem: stepItem,
    },
};

const SipChange_subscribe_step1 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "計價幣別",
                    content: "美元",
                },
                {
                    tit: "配息方式",
                    content: "累積",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "<b class='text-black'>(基準)扣款金額</b>",
                    content: "<b class='price'>3,000</b>",
                },
            ],
            transactionType: this.$route.hash === "#smartRSP" ? 2 : 1,
            subscriptionAmount: "",
            contractStatusOptions: [
                {
                    value: "1",
                    label: "正常扣款",
                },
                {
                    value: "2",
                    label: "暫停扣款",
                },
                {
                    value: "3",
                    label: "終止契約",
                },
            ],
            contractStatusValue: "1",

            originalDetail: this.$root.$data.windowWidth > 767 ? true : false,

            form: {
                already: [],
                already2: [],
            },

            maximumDeduction: ``,
            minimumDeduction: ``,
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <el-collapse-transition>
                        <div v-show="originalDetail">
                            <div class="tradingProcess-card-content">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            交易類型
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                            XXXXXX
                                        </div>
                                        <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                            XXXXXX
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item" v-if="$route.hash === '#smartRSP'">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款金額上限
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            $10,000
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item" v-if="$route.hash === '#smartRSP'">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款金額下限
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            $3,000
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            契約狀態
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            正常扣款
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款日期
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            09日 / 26日 / 31日
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content" v-if="$route.hash === ''">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            加減碼後扣款金額
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-row :gutter="20">
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                                </el-col>
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-transition>
                    <toggleDetailBtn
                        :target="originalDetail"
                        beforeText="收起"
                        afterText="展開"
                        @childMethod="
                            originalDetail = !originalDetail;
                            $scrollTo('#fundListHeader')
                        "
                    >
                    </toggleDetailBtn>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 變更項目
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <template v-if="$route.hash === '#smartRSP'">
                                        智能定期不定額&nbsp;&nbsp;
                                        <whatIsSmartRSP></whatIsSmartRSP>
                                    </template>
                                    <el-radio-group v-model="transactionType" v-else>
                                        <el-radio :label="1">定期定額</el-radio>
                                        <el-radio :label="2">定期不定額</el-radio>
                                    </el-radio-group>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    <b class="text-black">
                                        (基準)<br class='hidden-xs-only'/>扣款金額設定
                                    </b>
                                    <br/><small>(新台幣)</small>
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    <el-input-number 
                                        v-model="subscriptionAmount"
                                        :min="3000"
                                        :step="100"
                                    >
                                    </el-input-number>
                                    <br/>
                                    <small>
                                        備註：新台幣最低扣款金額$3,000
                                    </small>
                                </div>
                            </div>
                            <template v-if="$route.hash === '#smartRSP'">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額上限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-input-number 
                                            v-model="maximumDeduction"
                                            :min="3000"
                                            :step="100"
                                        >
                                        </el-input-number>
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額下限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        <el-input-number 
                                            v-model="minimumDeduction"
                                            :min="3000"
                                            :step="100"
                                        >
                                        </el-input-number>
                                    </div>
                                </div>
                            </template>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    契約狀態
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-select v-model="contractStatusValue" placeholder="請選擇">
                                        <el-option
                                            v-for="item in contractStatusOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        >
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <template v-else>
                        <transition enter-active-class="animate__animated animate__fadeIn">
                            <div class="tradingProcess-card-content" v-show="transactionType == 2">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款金額<br class='hidden-xs-only'/>加/減碼設定
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-row :gutter="20">
                                                <el-col :span="24">
                                                    <el-button
                                                        round
                                                        class="sBtn"
                                                        plain>
                                                        清除重填
                                                    </el-button>
                                                    <el-button type="primary" round plain class="sBtn" @click="$root.showTeaching()">
                                                        <i class="far fa-lightbulb"></i> 操作教學
                                                    </el-button>
                                                </el-col>
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="+"></plusAndMinusSetting>
                                                </el-col>
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="-"></plusAndMinusSetting>
                                                </el-col>
                                            </el-row>
                                            <el-alert
                                                class="borderStyle"
                                                type="info"
                                                show-icon
                                                :closable="false"
                                            >
                                                <slot name="description">
                                                    *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                                </slot>
                                            </el-alert>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </template>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    請選擇欲扣款的日期
                                    <selectDate hasOriginal="true" :disabled="contractStatusValue != 1"></selectDate>
                                    <el-alert
                                        class="borderStyle"
                                        type="warning"
                                        show-icon
                                        :closable="false"
                                    >
                                        <template v-slot:title>
                                            【提醒】
                                        </template>
                                        <slot name="description">
                                            <ol>
                                                <li>
                                                    若取消所有扣款日該契約將視同停止扣款，部分優惠將因契約變更為停止扣款而失效(例如：「轉機攻略」)，各優惠使用詳細規則需依各活動網頁說明以及最新優惠公告為準。
                                                </li>
                                                <li>
                                                    選擇每月29日、30日，或31日扣款者，如遇當月有該日但非營業日時，則扣款日順延至次一營業日；如遇當月無該日時，則不辦理扣款，詳見注意事項說明
                                                </li>
                                            </ol>
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
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
                                    <div class="margin-top-5 margin-left-25">
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
                                    <template v-if="$route.hash === '#smartRSP'">
                                        <div class="margin-top-10 margin-top-sm-25"></div>
                                        <el-form-item
                                            prop="already2"
                                            :rules="[
                                                { type: 'array', required: true, message: '請勾選', trigger: 'change' }
                                            ]"
                                        >
                                            <el-checkbox v-model="form.already2">
                                                我已線上閱讀/下載並同意
                                                <el-link
                                                    icon="fas fa-external-link-alt"
                                                    type="primary"
                                                    @click="$root.$data.smartRSP_executionConsent = true"
                                                >
                                                    &nbsp;智能定期不定額執行同意書 
                                                </el-link>
                                            </el-checkbox>
                                        </el-form-item>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                    <div @click="changeType()"
                        style="position: fixed; bottom: 0px; right: 120px; background: #000; border-radius: 5px; color: #fff; font-size: 12px; padding: 0px 5px; cursor: pointer;">
                        切換為{{$route.hash === '#smartRSP' ? "定期不定額" : '智能定期不定額'}}
                    </div>
                </el-form>`,
    components: {
        selectDate: selectDate,
        plusAndMinusSetting: plusAndMinusSetting,
        toggleDetailBtn: toggleDetailBtn,
    },
    mounted() {
        // console.log(this.$root.$data.windowWidth)
    },
    methods: {
        changeType() {
            if (this.$route.hash === "#smartRSP") {
                // this.transactionType == 1;
                this.$router.push("/SipChange/Subscribe/Step1");
                // this.$router.go();
            } else {
                // this.transactionType == 2;
                this.$router.push("/SipChange/Subscribe/Step1#smartRSP");
                // this.$router.go();
            }
        },
    },
};

const SipChange_subscribe_step2 = {
    mixins: [showErrorMessage_2],
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "計價幣別",
                    content: "美元",
                },
                {
                    tit: "配息方式",
                    content: "累積",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "<b class='text-black'>(基準)扣款金額</b>",
                    content: "<b class='price'>3,000</b>",
                },
            ],

            originalDetail: this.$root.$data.windowWidth > 767 ? true : false,

            form: {
                transactionPassword: "",
            },
        };
    },
    template: ` <el-form :model="form" ref="form">
                    <el-collapse-transition>
                        <div v-show="originalDetail">
                            <div class="tradingProcess-card-content">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            交易類型
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                            XXXXXX
                                        </div>
                                        <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                            XXXXXX
                                        </div>
                                    </div>
                                    <template v-if="$route.hash === '#smartRSP'">
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                扣款金額上限
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                $10,000
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                扣款金額下限
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                $3,000
                                            </div>
                                        </div>
                                    </template>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            契約狀態
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            正常扣款
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款日期
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            09日 / 26日 / 31日
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content" v-if="$route.hash === ''">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            加減碼後扣款金額
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-row :gutter="20">
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                                </el-col>
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-transition>
                    <toggleDetailBtn
                        :target="originalDetail"
                        beforeText="收起"
                        afterText="展開"
                        @childMethod="
                            originalDetail = !originalDetail;
                            $scrollTo('#fundListHeader')
                        "
                    >
                    </toggleDetailBtn>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 變更項目
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    <b class="text-black">
                                        (基準)扣款金額
                                    </b>
                                    <br/><small>(新台幣)</small>
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">
                                        4,000
                                    </b>
                                </div>
                            </div>
                            <template v-if="$route.hash === '#smartRSP'">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額上限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $10,000
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額下限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $3,000
                                    </div>
                                </div>
                            </template>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    契約狀態
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    暫停扣款
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content" v-show="$route.hash === ''">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    加減碼後扣款金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-row :gutter="20">
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                        </el-col>
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                        </el-col>
                                    </el-row>
                                    <el-alert
                                        class="borderStyle"
                                        type="info"
                                        show-icon
                                        :closable="false"
                                    >
                                        <slot name="description">
                                            *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <span>01日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>10日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>15日</span>
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
                    <showErrorMessage_1 @click.native="submitForm('form')"></showErrorMessage_1>
                    <div @click="$route.hash === '#smartRSP' ? $router.push('/SipChange/Subscribe/Step2') : $router.push('/SipChange/Subscribe/Step2#smartRSP')"
                        style="position: fixed; bottom: 0px; right: 120px; background: #000; border-radius: 5px; color: #fff; font-size: 12px; padding: 0px 5px; cursor: pointer;">
                        切換為{{$route.hash === '#smartRSP' ? "定期不定額" : '智能定期不定額'}}
                    </div>
                </el-form>`,
    components: {
        selectDate: selectDate,
        plusAndMinusSetting: plusAndMinusSetting,
        toggleDetailBtn: toggleDetailBtn,
    },
};

const SipChange_subscribe_step3 = {
    data() {
        return {
            itemTitWidth: "140px",
            fundInfo: [
                {
                    tit: "計價幣別",
                    content: "美元",
                },
                {
                    tit: "配息方式",
                    content: "累積",
                },
                {
                    tit: "交易幣別",
                    content: "新台幣",
                },
                {
                    tit: "<b class='text-black'>(基準)扣款金額</b>",
                    content: "<b class='price'>3,000</b>",
                },
            ],

            originalDetail: this.$root.$data.windowWidth > 767 ? true : false,
        };
    },
    template: ` <div>
                    <el-collapse-transition>
                        <div v-show="originalDetail">
                            <div class="tradingProcess-card-content">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            交易類型
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item" v-for="(item, index) in fundInfo" :key="index">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}" v-html="item.tit">
                                            XXXXXX
                                        </div>
                                        <div class="tradingProcess-card-content-item-content" v-html="item.content">
                                            XXXXXX
                                        </div>
                                    </div>
                                    <template v-if="$route.hash === '#smartRSP'">
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                扣款金額上限
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                $10,000
                                            </div>
                                        </div>
                                        <div class="tradingProcess-card-content-item">
                                            <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                                扣款金額下限
                                            </div>
                                            <div class="tradingProcess-card-content-item-content">
                                                $3,000
                                            </div>
                                        </div>
                                    </template>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            契約狀態
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            正常扣款
                                        </div>
                                    </div>
                                    <div class="tradingProcess-card-content-item">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            扣款日期
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            09日 / 26日 / 31日
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content" v-if="$route.hash === ''">
                                <div class="tradingProcess-card-content-item-area">
                                    <div class="tradingProcess-card-content-item columnSpan">
                                        <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                            加減碼後扣款金額
                                        </div>
                                        <div class="tradingProcess-card-content-item-content">
                                            <el-row :gutter="20">
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                                </el-col>
                                                <el-col :md="12">
                                                    <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                                </el-col>
                                            </el-row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-collapse-transition>
                    <toggleDetailBtn
                        :target="originalDetail"
                        beforeText="收起"
                        afterText="展開"
                        @childMethod="
                            originalDetail = !originalDetail;
                            $scrollTo('#fundListHeader')
                        "
                    >
                    </toggleDetailBtn>

                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>

                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-transactionMethod">
                                <i class="fas fa-sign-in-alt"></i> 變更為
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易類型
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    {{$route.hash === '#smartRSP' ? "智能定期不定額" : '定期不定額'}}
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    <b class="text-black">
                                        (基準)扣款金額
                                    </b>
                                    <br/><small>(新台幣)</small>
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <b class="price">
                                        4,000
                                    </b>
                                </div>
                            </div>
                            <template v-if="$route.hash === '#smartRSP'">
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額上限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $10,000
                                    </div>
                                </div>
                                <div class="tradingProcess-card-content-item">
                                    <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                        扣款金額下限
                                    </div>
                                    <div class="tradingProcess-card-content-item-content">
                                        $3,000
                                    </div>
                                </div>
                            </template>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    契約狀態
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    暫停扣款
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tradingProcess-card-content" v-show="$route.hash === ''">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item columnSpan">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    加減碼後扣款金額
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <el-row :gutter="20">
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="+" read="true"></plusAndMinusSetting>
                                        </el-col>
                                        <el-col :md="12">
                                            <plusAndMinusSetting plusOrMinus="-" read="true"></plusAndMinusSetting>
                                        </el-col>
                                    </el-row>
                                    <el-alert
                                        class="borderStyle"
                                        type="info"
                                        show-icon
                                        :closable="false"
                                    >
                                        <slot name="description">
                                            *說明：基準漲跌幅=[(最新淨值-平均單位成本)/平均單位成本]，當觸發以上定期不定額加減碼設定之規則時，將以基準扣款金額加碼或減碼後之金額進行扣款。舉例：假設原設定基準扣款金額為新台幣 3,000元且跌(漲)幅達10％~15％時加(減)碼新台幣 2,000元，則扣款日將扣款新台幣 5,000 (1,000)元。
                                        </slot>
                                    </el-alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tradingProcess-card-content">
                        <div class="tradingProcess-card-content-item-area">
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    扣款日期
                                </div>
                                <div class="tradingProcess-card-content-item-content">
                                    <span>01日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>10日</span>
                                    <el-divider direction="vertical"></el-divider>
                                    <span>15日</span>
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    交易生效日
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    2020/10/22
                                </div>
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-tit" :style="{width: itemTitWidth,}">
                                    下次扣款日
                                    <el-tooltip effect="dark" content="資訊僅供參考，若於該扣款日期前再度申請變更本契約扣款日，將以實際扣款成功日為準。" placement="top-start">
                                        <i class="fas fa-exclamation-circle tooltipUseIcon"></i>
                                    </el-tooltip>
                                </div>
                                <div class="tradingProcess-card-content-item-input">
                                    2020/11/02
                                </div>
                            </div>
                        </div>
                    </div>
                    <div @click="$route.hash === '#smartRSP' ? $router.push('/SipChange/Subscribe/Step3') : $router.push('/SipChange/Subscribe/Step3#smartRSP')"
                        style="position: fixed; bottom: 0px; right: 0px; background: #000; border-radius: 5px; color: #fff; font-size: 12px; padding: 0px 5px; cursor: pointer;">
                        切換為{{$route.hash === '#smartRSP' ? "定期不定額" : '智能定期不定額'}}
                    </div>
                </div>`,
    components: {
        selectDate: selectDate,
        plusAndMinusSetting: plusAndMinusSetting,
        toggleDetailBtn: toggleDetailBtn,
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
            itemTitWidth: "105px",
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
                            <div class="tradingProcess-card-content-item columnBreak specialVersion">
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
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="2"><span class="focus">贖回全部單位數：38.427</span></el-radio>
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
                    content: "1.000",
                },
            ],

            form: {
                transactionPassword: "",
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
                    content: "1.000",
                },
            ],
            input: "",
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
                fundSize: [],
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
                            <div class="tradingProcess-card-content-item columnBreak specialVersion">
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
                            </div>
                            <div class="tradingProcess-card-content-item">
                                <div class="tradingProcess-card-content-item-content">
                                    <el-radio v-model="form.radio" label="2"><span class="focus">轉出全部單位數：287.378</span></el-radio>
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
                    content: "287.378",
                },
                {
                    tit: "剩餘單位數",
                    content: "0.000",
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
                    content: "287.378000",
                },
                {
                    tit: "剩餘單位數",
                    content: "0.000",
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

// ========= 交易查詢與取消 ==============================================================================================================================
const TradeHistory = {
    data() {
        return {
            page: {
                stit: `基金交易`,
                tit: `交易查詢與取消`,
            },

            notice: [
                {
                    content: `本交易平台可申購本公司已核備之富蘭克林坦伯頓盧森堡及美國註冊之基金(以下簡稱境外基金)，及台灣核准之富蘭克林華美投信基金(以下簡稱境內基金)。`,
                },
                {
                    content: `每營業日13:30:01 ~ 次一營業日 13:30:00 截止，為網路交易系統之同一個交易日。當日申請的委託交易，請於同一個交易日13:30:00前執行取消動作，若逾時則無法取消。`,
                },
                {
                    content: `除法令變更外，每一客戶每日電子交易之買回(不含轉換交易)之上限金額為新台幣3000萬元或等值外幣，其中買回限額之計算，境外基金係以投資人為網路(電子)交易委託前最近公告之基金淨值及匯率為準，境內基金係以輸入交易前二個營業日之基金淨值為準，但屬轉換交易者，得不受上述交易金額規定之限制。如買回金額高於作業準則規定，系統會自動拒絕該筆交易，並請投資人重新輸入買回單位數。因各家銀行作業機制不同，請依各銀行規定之額度限制進行交易，以避免超過額度而造成扣款失敗。※若選擇約定使用『全國性繳費業務指定扣款銀行』自動扣款方式繳付申購款項，每筆申購交易扣款金額(含手續費)不得超過新台幣500萬元，當日累計扣款金額以新台幣3000萬元(含手續費)為上限(實際扣款額上限仍應以客戶所屬扣款行規定為準，惟仍應符合法令規定之最高扣款上限)。若選擇約定使用『集保款項收付指定扣款銀行』自動扣款方式繳付申購款項，則依現行法規的規定限制，自然人客戶以新台幣3000萬元(含手續費)為上限。`,
                },
                {
                    content: `依臺灣集中保管結算所作業規定，受益人如僅約定台幣贖回帳戶，僅能以台幣申購基金；如僅約定外幣贖回帳戶，則申購時應以基金原幣為之。`,
                },
                {
                    content: `境外基金申購之受益權單位數計至小數點三位數時，將會以慣用的進位法計算到最接近的小數點以下三位數；境內基金申購之受益權單位數多於小數點一位數時，將會以慣用的進位法計算到最接近的小數點以下一位數；惟實際分配之單位數，受益人應以臺灣集中保管結算所計算分配為準。`,
                },
                {
                    content: `受益人同意授權臺灣集中保管結算所辦理境外基金申購、贖回或孳息分派等款項之結匯事項，並同意授權臺灣集中保管結算所得與銀行議定單一之買進或賣出匯率，辦理結匯作業。`,
                },
                {
                    content: `擇時交易/短線交易說明：`,
                    innerList: [
                        {
                            content: `境外基金：依公開說明書及投資人須知之規定，本公司不鼓勵短期或是過度交易(以下稱「擇時交易」)，當基金公司或股務代理機構認定投資人的交易可能妨礙基金投資組合效率管理、可能實質增加基金交易成本、管理成本或稅捐，或是在其他方面不利於基金公司及其股東權益時，會試圖限制或拒絕此類交易。故當投資人的交易行為被認定為擇時交易時，有可能暫時或是永久禁止投資人後續之申購或轉申購委託。`,
                        },
                        {
                            content: `境內基金：基金經理公司不歡迎受益人對基金進行短線申購贖回之交易，故持有境內基金未屆滿14日者應支付買回價金之百分之零點二之買回費用。買回費用採四捨五入計算至新台幣「元」，如不足一元則不予收取；外幣計價者(日幣除外)，採四捨五入計算至該幣別「元」以下小數點第二位。申購交易日期計算方式：以「請求買回之書面或其他約定方式到達經理公司或其銷售機構營業日或次一營業日(各基金買回淨值日須依各基金公開說明書之規定)」之日期減去「申購日」之日期，小於14日(含，以日曆日計算)者。`,
                        },
                    ],
                },
                {
                    content: `取消成功後將以電子郵件寄發取消委託通知信至約定電子郵件信箱。`,
                },
                {
                    content: `因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。`,
                },
            ],
            tdccStipulate: false,
        };
    },
    template: ` <div>
                    <pageTit :stit="page.stit" :tit="page.tit"></pageTit>
                    <div class="clearfix fontSizeZero margin-bottom-15">
                        <div class="page-changeDisplayMethod">
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/TradeHistory/list'"
                                :type="$route.path === '/TradeHistory/list' ? 'primary' : 'secondary'"
                                @click="$router.push('/TradeHistory/list')">
                                委託查詢 / 取消
                            </el-button>
                            <el-button
                                round
                                class="sBtn"
                                :plain="$route.path !== '/TradeHistory/inTransitDealInquiry'"
                                :type="$route.path === '/TradeHistory/inTransitDealInquiry' ? 'primary' : 'secondary'"
                                @click="$router.push('/TradeHistory/inTransitDealInquiry')">
                                在途交易查詢
                            </el-button>
                        </div>
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
                                <li v-for="(item, index) in notice" :key="index">
                                    <div v-html="item.content"></div>
                                    <ul v-if="item.innerList != undefined">
                                        <li v-for="(item2, index2) in item.innerList" :key="index2">
                                            <div v-html="item2.content"></div>
                                        </li>
                                    </ul>
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
    },
};

const tradeHistoryFund = [
    [
        {
            hasCheckbox: true,
            checkbox: false,
            transactionMethod: "委託成功",
            fundCode: "6885",
            fundName: "富蘭克林華美特別股收益基金B分配型南非幣",
            info: [
                {
                    tit: "申購價金",
                    text: "15,000.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "配現金 / 配現",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "計價幣別",
                    text: "南非幣",
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
                    tit: "參考手續費",
                    text: "180.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/17",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201216E00022709",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/16</span> <span>15:26:05</span>",
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
            listItemOtherClass: "unimportant",
            transactionMethod: "交易取消",
            fundCode: "6805",
            fundName: "富蘭克林華美新世界股票基金",
            info: [
                {
                    tit: "申購價金",
                    text: "10,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "累積",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "參考手續費",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/17",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201216E00022708",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/16</span> <span>15:06:15</span>",
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
            transactionMethod: "已受理",
            fundCode: "0287",
            fundName: "全球債券總報酬基金—歐元",
            info: [
                {
                    tit: "申購價金",
                    text: "50,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "累積",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "參考手續費",
                    text: "0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/16",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201215E00022702",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/15</span> <span>18:10:38</span>",
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
            transactionType: "定期不定額",
            hasCheckbox: true,
            checkbox: false,
            transactionMethod: "委託成功",
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            info: [
                {
                    tit: "(基準)扣款金額",
                    text: "5,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易類型",
                    text: "定期不定額",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "手續費率",
                    text: "0.3598%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/15",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "254726",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/14</span> <span>16:58:00</span>",
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
            bottomContent: {
                type: "dateOfDeduction",
            },
            dateOfDeduction: ["02", "03", "05", "06", "07", "08", "09", "10", "11", "12", "13", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "29", "31"],
        },
        {
            transactionType: "定期不定額",
            transactionMethod: "已受理",
            fundCode: "0287",
            fundName: "全球債券總報酬基金—歐元",
            info: [
                {
                    tit: "(基準)扣款金額",
                    text: "100,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "累積",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易類型",
                    text: "定期不定額",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "手續費率",
                    text: "0.3598%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/09",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "254721",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/09</span> <span>13:22:36</span>",
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
            bottomContent: {
                type: "dateOfDeduction",
            },
            dateOfDeduction: ["16", "20"],
        },
        {
            transactionMethod: "已受理",
            fundCode: "0561",
            fundName: "潛力歐洲基金—歐元年配息",
            info: [
                {
                    tit: "(基準)扣款金額",
                    text: "40.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "配現金 / 配現",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易類型",
                    text: "定期定額",
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
                    tit: "交易幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "手續費率",
                    text: "0.5397%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "254714",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/04</span> <span>18:14:11</span>",
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
            bottomContent: {
                type: "dateOfDeduction",
            },
            dateOfDeduction: ["18", "26"],
        },
        {
            transactionMethod: "已受理",
            fundCode: "0561",
            fundName: "潛力歐洲基金—歐元年配息",
            info: [
                {
                    tit: "(基準)扣款金額",
                    text: "40.00",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "扣款金額上限",
                    text: "100.00",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "扣款金額下限",
                    text: "40.00",
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
                    tit: "交易類型",
                    text: "智能定期不定額",
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
                    tit: "交易幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "手續費率",
                    text: "0.5397%",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/07",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "254714",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/04</span> <span>18:14:11</span>",
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
            bottomContent: {
                type: "dateOfDeduction",
            },
            dateOfDeduction: ["18", "26"],
        },
    ],
    [
        {
            transactionType: "定期不定額",
            hasCheckbox: true,
            checkbox: false,
            transactionMethod: "已受理",
            fundCode: "0797",
            fundName: "科技基金",
            info: [
                {
                    tit: "變更後(基準)扣款金額",
                    text: "8,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "變更後扣款狀態",
                    text: "正常扣款",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後交易類型",
                    text: "定期不定額",
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
                    tit: "配息方式",
                    text: "累積",
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
                    tit: "變更後扣款日期",
                    text: `<span>05日</span> / <span>10日</span> / <span>15日</span> / <span>20日</span> / <span>25日</span> / <span>30日</span>`,
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/18",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "394",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/17</span> <span>14:34:27</span>",
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
            detail: [
                {
                    transactionMethod: "原契約",
                    info: [
                        {
                            tit: "原(基準)扣款金額",
                            text: "2,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原扣款狀態",
                            text: "正常扣款",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原交易類型",
                            text: "定期不定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款日期",
                            text: `<span>06日</span> / <span>16日</span> / <span>26日</span>`,
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
        },
        {
            transactionType: "定期不定額",
            transactionMethod: "已受理",
            fundCode: "0287",
            fundName: "全球債券總報酬基金—歐元",
            info: [
                {
                    tit: "變更後(基準)扣款金額",
                    text: "100,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "變更後扣款狀態",
                    text: "正常扣款",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後交易類型",
                    text: "定期不定額",
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
                    tit: "配息方式",
                    text: "累積",
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
                    tit: "變更後扣款日期",
                    text: `<span>12日</span> / <span>16日</span> / <span>19日</span> / <span>20日</span>`,
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/16",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "388",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/15</span> <span>18:07:05</span>",
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
            detail: [
                {
                    transactionMethod: "原契約",
                    info: [
                        {
                            tit: "原(基準)扣款金額",
                            text: "100,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原扣款狀態",
                            text: "正常扣款",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原交易類型",
                            text: "定期定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款日期",
                            text: ` <span>16日</span> / <span>20日</span>`,
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
        },
        {
            transactionMethod: "已受理",
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            info: [
                {
                    tit: "變更後(基準)扣款金額",
                    text: "5,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "變更後扣款狀態",
                    text: "正常扣款",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後交易類型",
                    text: "定期定額",
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
                    tit: "配息方式",
                    text: "再投資 / 配權",
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
                    tit: "變更後扣款日期",
                    text: ` <span>02日</span> / <span>03日</span> / <span>05日</span> / <span>06日</span> / <span>07日</span> / <span>08日</span> / <span>09日</span> / <span>10日</span> / <span>13日</span> / <span>15日</span> / <span>16日</span> / <span>20日</span> / <span>21日</span> / <span>22日</span> / <span>23日</span> / <span>24日</span> / <span>25日</span> / <span>26日</span> / <span>27日</span> / <span>28日</span> / <span>29日</span> / <span>31日</span>`,
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/16",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "387",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/15</span> <span>16:21:01</span>",
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
            detail: [
                {
                    transactionMethod: "原契約",
                    info: [
                        {
                            tit: "原(基準)扣款金額",
                            text: "5,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原扣款狀態",
                            text: "正常扣款",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原交易類型",
                            text: "定期不定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款日期",
                            text: ` <span>02日</span> / <span>03日</span> / <span>05日</span> / <span>06日</span> / <span>07日</span> / <span>08日</span> / <span>09日</span> / <span>10日</span> / <span>11日</span> / <span>12日</span> / <span>13日</span> / <span>15日</span> / <span>16日</span> / <span>17日</span> / <span>18日</span> / <span>19日</span> / <span>20日</span> / <span>21日</span> / <span>22日</span> / <span>23日</span> /<span>24日</span> /<span>25日</span> /<span>26日</span> /<span>27日</span> /<span>28日</span> /<span>29日</span> / <span>31日</span>`,
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
        },
        {
            transactionMethod: "已受理",
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            info: [
                {
                    tit: "變更後(基準)扣款金額",
                    text: "3,000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "變更後扣款金額上限",
                    text: "5,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後扣款金額下限",
                    text: "1,000",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後扣款狀態",
                    text: "正常扣款",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "變更後交易類型",
                    text: "智能定期不定額",
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
                    tit: "配息方式",
                    text: "再投資 / 配權",
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
                    tit: "變更後扣款日期",
                    text: ` <span>02日</span> / <span>03日</span> / <span>05日</span> / <span>06日</span> / <span>07日</span> / <span>08日</span> / <span>09日</span> / <span>10日</span> / <span>13日</span> / <span>15日</span> / <span>16日</span> / <span>20日</span> / <span>21日</span> / <span>22日</span> / <span>23日</span> / <span>24日</span> / <span>25日</span> / <span>26日</span> / <span>27日</span> / <span>28日</span> / <span>29日</span> / <span>31日</span>`,
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/16",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "387",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/15</span> <span>16:21:01</span>",
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
            detail: [
                {
                    transactionMethod: "原契約",
                    info: [
                        {
                            tit: "原(基準)扣款金額",
                            text: "5,000",
                            focusText: true,
                            remark: "",
                        },
                        {
                            tit: "原扣款金額上限",
                            text: "5,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款金額下限",
                            text: "1,000",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款狀態",
                            text: "正常扣款",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原交易類型",
                            text: "智能定期不定額",
                            focusText: false,
                            remark: "",
                        },
                        {
                            tit: "原扣款日期",
                            text: ` <span>02日</span> / <span>03日</span>`,
                            focusText: false,
                            remark: "",
                        },
                    ],
                    hasPopover: true,
                },
            ],
        },
    ],
    [
        {
            hasCheckbox: true,
            checkbox: false,
            transactionMethod: "委託成功",
            fundCode: "0427",
            fundName: "精選收益基金—美元月配息",
            info: [
                {
                    tit: "贖回單位數",
                    text: "1,000.742",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "配息",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/17",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201217000039875",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/17</span> <span>11:49:47</span>",
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
            listItemOtherClass: "unimportant",
            transactionMethod: "交易取消",
            fundCode: "0804",
            fundName: "拉丁美洲基金—年配息",
            info: [
                {
                    tit: "贖回單位數",
                    text: "20.487",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "再投資 / 配權",
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
                    tit: "交易幣別",
                    text: "外幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/11",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201210000039414",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/10</span> <span>13:53:01</span>",
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
            transactionMethod: "已受理",
            fundCode: "0384",
            fundName: "亞洲債券基金—美元",
            info: [
                {
                    tit: "贖回單位數",
                    text: "12.081",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "不指定",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/10",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201210000039403",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/10</span> <span>11:14:27</span>",
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
            fundCode: "0349",
            fundName: "全球債券總報酬基金—歐元月配息",
            info: [
                {
                    tit: "贖回單位數",
                    text: "6.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "配息",
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
                    tit: "交易幣別",
                    text: "新台幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/02",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201202000038840",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/02</span> <span>10:30:37</span>",
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
            hasCheckbox: true,
            checkbox: false,
            transactionMethod: "轉出基金",
            fundCode: "6885",
            fundName: "富蘭克林華美特別股收益基金B分配型南非幣",
            isChange: true,
            changeTypeUseData: {
                transactionMethod: "委託成功",
                fundCode: "0797",
                fundName: "科技基金",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "90.000",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入計價幣別",
                    text: "歐元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉入配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "不指定",
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
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/18",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201217000039876",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/17</span> <span>14:04:59</span>",
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
            listItemOtherClass: "unimportant",
            transactionMethod: "轉出基金",
            fundCode: "1172",
            fundName: "全球債券總報酬基金—澳幣避險月配息",
            isChange: true,
            changeTypeUseData: {
                transactionMethod: "交易取消",
                fundCode: " 454",
                fundName: "富蘭克林坦伯頓法人機構專用基金-國際股票系列Primary股",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "300.003",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入計價幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉入配息方式",
                    text: "再投資 / 配權",
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
                    tit: "交易幣別",
                    text: "外幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/18",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201218000039986",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/17</span> <span>14:04:59</span>",
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
            fundCode: "2026",
            fundName: "穩定月收益基金—南非幣避險月配息",
            isChange: true,
            changeTypeUseData: {
                transactionMethod: "交易成功",
                fundCode: "0810",
                fundName: "全球債券基金—美元月配息",
            },
            info: [
                {
                    tit: "轉出單位數",
                    text: "87.549",
                    focusText: true,
                    remark: "",
                },
                {
                    tit: "轉入計價幣別",
                    text: "美元",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉入配息方式",
                    text: "再投資 / 配權",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "配息方式",
                    text: "配息",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "交易幣別",
                    text: "外幣",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "轉換手續費",
                    text: "新台幣 $0",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託生效日",
                    text: "2020/12/14",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託單號",
                    text: "20201214000039612",
                    focusText: false,
                    remark: "",
                },
                {
                    tit: "委託時間",
                    text: "<span>2020/12/14</span> <span>11:38:52</span>",
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
];

const tradeHistoryFundListSetting = [
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
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "430px",
        pcShowQty: {
            base: "6", // 預設
            xxl: "6", // 1599px~1400px
            xl: "5", // 1399px~1200px
            lg: "5", // 1199px~992px
            md: "4", // 991px~768px
            sm: "3", // 767px~360px
            xs: "3", // 359px以下
        },
        toggleDetailText: {
            before: "展開原契約內容",
            after: "收起原契約內容",
        },
        detail: {
            minWidth: "540px",
            pcShowQty: {
                base: "3", // 預設
                xxl: "3", // 1599px~1400px
                xl: "3", // 1399px~1200px
                lg: "3", // 1199px~992px
                md: "3", // 991px~768px
                sm: "3", // 767px~360px
                xs: "3", // 359px以下
            },
        },
    },
    {
        toggleCardBtnText: "更多資訊",
        promptIcon: "",
        minWidth: "350px",
        pcShowQty: {
            base: "6", // 預設
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

const TradeHistory_list = {
    // mixins: [fundListGroup],
    data() {
        return {
            tabPosition: "top",
            editableTabsValue: "1",
            editableTabs: [
                {
                    title: "單筆申購",
                    name: "1",
                    fundType: "1",
                },
                {
                    title: "定期(不)定額申購",
                    name: "2",
                    fundType: "2",
                },
                {
                    title: "定期(不)定額變更",
                    name: "3",
                    fundType: "3",
                },
                {
                    title: "贖回",
                    name: "4",
                    fundType: "1",
                },
                {
                    title: "轉換",
                    name: "5",
                    fundType: "2",
                },
            ],
            tabIndex: 5,

            fund: tradeHistoryFund[0],
            fundListSetting: tradeHistoryFundListSetting[0],
            fundListIndex: 0,

            submitPassword: false,
            transactionPassword: "",
        };
    },
    template: ` <div>
                    <el-row :gutter="10">
                        <el-col :xl="18" :md="14" :sm="12">
                            <el-alert
                                class="borderStyle margin-top-0 margin-bottom-0"
                                type="info"
                                show-icon
                                :closable="false"
                            >
                                <template v-slot:title>
                                    勾選您欲取消之項目後，輸入交易密碼並按下確認送出鍵即可取消委託
                                </template>
                            </el-alert>
                        </el-col>
                        <el-col :xl="6" :md="10" :sm="12">
                            <div class="clearfix fontSizeZero margin-top-sm-15">
                                <rangeDate class="type2"></rangeDate>
                            </div>
                        </el-col>
                    </el-row>
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
                                class="text-center"
                                type="info"
                                :closable="false"
                                v-if="editableTabsValue == '1'"
                            >
                                <template v-slot:title>
                                    尚無交易資料
                                </template>
                            </el-alert>
                            <div class="fundList-area">
                                <fundList
                                    v-for="(item, index) in fund"
                                    :key="index"
                                    :fundData="item"
                                    :fundListSetting="fundListSetting"
                                    @thisIndex2="postFundListIndex(index)"
                                    @checkboxMethods="checkboxMethods2(index, item)">
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
                            <div class="infoCard-btnArea" v-show="!fund[fundListIndex].hasCheckbox && fund[fundListIndex].listItemOtherClass != 'unimportant' && (editableTabsValue != '4')">
                                <template v-if="fund[fundListIndex].transactionType == '定期不定額'">
                                    <el-button round @click="plusAndMinusSetting">
                                        加減碼後扣款金額
                                    </el-button>
                                    <el-divider direction="vertical"></el-divider>
                                </template>
                                <el-button
                                    round
                                    @click="$router.push('/SipChange/Subscribe/Step1'); $scrollTo('body')"
                                    v-if="editableTabsValue == 2"
                                >
                                    變更
                                </el-button>
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                            <div class="infoCard-btnArea" v-if="fund[fundListIndex].transactionType == '定期不定額' && fund[fundListIndex].hasCheckbox">
                                <el-button round
                                    @click="plusAndMinusSetting"
                                >
                                    加減碼後扣款金額
                                </el-button>
                            </div>
                        </template>
                    </infoCord>
                    <el-collapse-transition>
                        <el-card
                            class="submitPassword"
                            shadow="hover"
                            v-show="submitPassword"
                        >
                            <el-row>
                                <el-col :sm="14">
                                    <el-input
                                        v-model="transactionPassword"
                                        placeholder="請輸入您的交易密碼"
                                        show-password
                                        class="margin-top-5 margin-bottom-5">
                                    </el-input>
                                </el-col>
                                <el-col :sm="10" class="text-center">
                                    <el-button
                                        type="primary"
                                        round
                                        @click="
                                            $message.success('取消委託完成');
                                            resetCheckbox();
                                        "
                                    >
                                        確認送出
                                    </el-button>
                                </el-col>
                                <el-col :span="24">
                                    <div class="text-center remark margin-bottom-5">輸入交易密碼並按下確認送出鍵即可取消委託</div>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-collapse-transition>
                </div>`,
    components: {
        infoCord: infoCord,
        rangeDate: rangeDate,
    },
    methods: {
        postFundListIndex(val) {
            if (val == this.fundListIndex && this.$refs["fundCard"].show) {
                this.$refs["fundCard"].show = false;
                // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
            } else {
                this.fundListIndex = val;
                this.$refs["fundCard"].show = true;
                // document.body.classList.add("fixedBody-sm"); // 添加手機版body固定
            }
        },
        handleClick(tab, event) {
            this.fundListIndex = 0;
            this.fund = tradeHistoryFund[this.editableTabsValue - 1];
            this.fundListSetting = tradeHistoryFundListSetting[this.editableTabsValue - 1];
            this.resetCheckbox();
        },
        checkboxMethods2(index, item) {
            let result = this.fund.filter(x => x.checkbox == true);
            result.length > 0 ? this.submitPassword = true : this.submitPassword = false;
            // console.log(result);
        },
        resetCheckbox() {
            this.fund.forEach(function(item, index, array){
                item.checkbox = false;
            });
            this.submitPassword = false;
        },
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
        plusAndMinusSetting() {
            this.editableTabsValue == "2" ? content.plusAndMinusSetting1 = true : content.plusAndMinusSetting2 = true;
        },
    },
};

const TradeHistory_InTransitDealInquiry = {
    data() {
        return {
        }
    },
    template: ` <div class="fundList-area">
                    <div class="fundList noNext">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                0426
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                定期定額
                                            </div>
                                            <div class="fundList-dealDate">
                                                交易日期： 2020/08/13
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="精選收益基金—美元">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        精選收益基金—美元
                                    </div>
                                </h2>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 530px;">
                                    <tr class="head">
                                        <td>申購價金</td>
                                        <td>交易幣別</td>
                                        <td>申購手續費</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b class="focus">
                                                15,000.00
                                            </b>
                                        </td>
                                        <td>
                                            新台幣
                                        </td>
                                        <td>
                                            <el-tooltip
                                                effect="dark"
                                                placement="top"
                                            >
                                                <div slot="content">
                                                    優惠費率0.6000%，紅利折抵180.00元
                                                </div>
                                                <span class="cursor-pointer">
                                                    <span>
                                                        0.00
                                                    </span>
                                                    <i class="fas fa-exclamation-circle tooltipUseIcon"></i>
                                                </span>
                                            </el-tooltip>
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>

                    <div class="fundList noNext" v-for="(item, index) in 2">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                0361
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                定期不定額
                                            </div>
                                            <div class="fundList-dealDate">
                                                交易日期： 2020/09/24
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="印度基金">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        印度基金
                                    </div>
                                </h2>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 530px;">
                                    <tr class="head">
                                        <td>申購價金</td>
                                        <td>交易幣別</td>
                                        <td>申購手續費</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <el-tooltip
                                                effect="dark"
                                                placement="top"
                                            >
                                                <div slot="content">
                                                    <template v-if="index == 0">
                                                        逢低加碼
                                                    </template>
                                                    <template v-else>
                                                        逢高減碼
                                                    </template>
                                                </div>
                                                <span class="cursor-pointer">
                                                    <b class="focus">
                                                        30,000
                                                    </b>
                                                    <span>
                                                        <template v-if="index == 0">
                                                            <i class="el-icon-circle-plus text-green"></i>
                                                        </template>
                                                        <template v-else>
                                                            <i class="el-icon-remove text-red"></i>
                                                        </template>
                                                    </span>
                                                </span>
                                            </el-tooltip>
                                        </td>
                                        <td>
                                            新台幣
                                        </td>
                                        <td>
                                            180
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>

                    <div class="fundList noNext" v-for="(item, index) in 2">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                0361
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                智能定期不定額
                                            </div>
                                            <div class="fundList-dealDate">
                                                交易日期： 2020/09/24
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="印度基金">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        印度基金
                                    </div>
                                </h2>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 530px;">
                                    <tr class="head">
                                        <td>申購價金</td>
                                        <td>交易幣別</td>
                                        <td>申購手續費</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <el-tooltip
                                                effect="dark"
                                                placement="top"
                                            >
                                                <div slot="content">
                                                    <template v-if="index == 0">
                                                        逢低加碼
                                                    </template>
                                                    <template v-else>
                                                        逢高減碼
                                                    </template>
                                                </div>
                                                <span class="cursor-pointer">
                                                    <b class="focus">
                                                        3,000
                                                    </b>
                                                    <span>
                                                        <template v-if="index == 0">
                                                            <i class="el-icon-circle-plus text-green"></i>
                                                        </template>
                                                        <template v-else>
                                                            <i class="el-icon-remove text-red"></i>
                                                        </template>
                                                    </span>
                                                </span>
                                            </el-tooltip>
                                        </td>
                                        <td>
                                            新台幣
                                        </td>
                                        <td>
                                            180
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>

                    <div class="fundList noNext">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                0361
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                單筆申購
                                            </div>
                                            <div class="fundList-dealDate">
                                                交易日期： 2020/09/24
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="印度基金">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        印度基金
                                    </div>
                                </h2>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 530px;">
                                    <tr class="head">
                                        <td>申購價金</td>
                                        <td>交易幣別</td>
                                        <td>申購手續費</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b class="focus">
                                                30,000
                                            </b>
                                        </td>
                                        <td>
                                            新台幣
                                        </td>
                                        <td>
                                            180
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>

                    <div class="fundList noNext">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                0361
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                贖回
                                            </div>
                                            <div class="fundList-dealDate">
                                                交易日期： 2020/09/24
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="印度基金">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        印度基金
                                    </div>
                                </h2>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 450px;">
                                    <tr class="head">
                                        <td>贖回單位數</td>
                                        <td>交易幣別</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b class="focus">
                                                10
                                            </b>
                                        </td>
                                        <td>
                                            新台幣
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>

                    <div class="fundList noNext">
                        <el-card shadow="hover">
                            <div class="fundList-header">
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode">
                                                6885
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                轉出基金
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <h2 class="fundList-fundName" title="印度基金">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div>
                                        富蘭克林華美特別股收益基金B分配型南非幣
                                    </div>
                                </h2>
                                <div class="changeTypeUse">
                                    <el-divider>
                                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                                    </el-divider>
                                    <el-row :gutter="10">
                                        <el-col :span="24">
                                            <div class="fundList-header-content">
                                                <div class="fundList-fundCode">
                                                    0797
                                                </div>
                                                <div class="fundList-transactionMethod">
                                                    轉入基金
                                                </div>
                                                <div class="fundList-dealDate">
                                                    交易日期： 2020/09/24
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                    <h2 class="fundList-fundName" title="印度基金">
                                        <openFundSmallFile></openFundSmallFile>
                                        <div>
                                            富蘭克林華美特別股收益基金B分配型南非幣
                                        </div>
                                    </h2>
                                </div>
                            </div>
                            <div class="fundList-infoItem">
                                <table style="min-width: 530px;">
                                    <tr class="head">
                                        <td>轉出單位數</td>
                                        <td>轉入計價幣別</td>
                                        <td>轉換手續費</td>
                                        <td>交易書號</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <b class="focus">
                                                90.000
                                            </b>
                                        </td>
                                        <td>
                                            歐元
                                        </td>
                                        <td>
                                            168
                                        </td>
                                        <td>
                                            20201217000039876
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </el-card>
                    </div>
                </div>`,
};