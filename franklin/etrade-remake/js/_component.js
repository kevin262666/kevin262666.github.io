// ========= vue版 slick ==============================================================================================================================
const slick = {
    props: {
        options: {
            type: Object,
            default: function () {
                return {};
            },
        },
    },
    mounted() {
        this.create();
    },
    destroyed: function () {
        $(this.$el).slick("unslick");
    },
    methods: {
        create: function () {
            const $slick = $(this.$el);
            $slick.on("after-change", this.onAfterChange);
            $slick.on("before-change", this.onBeforeChange);
            $slick.on("breakpoint", this.onBreakpoint);
            $slick.on("destroy", this.onDestroy);
            $slick.on("edge", this.onEdge);
            $slick.on("init", this.onInit);
            $slick.on("reInit", this.onReInit);
            $slick.on("set-position", this.onSetPosition);
            $slick.on("swipe", this.onSwipe);
            $slick.on("lazyLoaded", this.onLazyLoaded);
            $slick.on("lazyLoadError", this.onLazyLoadError);
            $slick.slick(this.options);
        },
        destroy: function () {
            const $slick = $(this.$el);
            $slick.off("after-change", this.onAfterChange);
            $slick.off("before-change", this.onBeforeChange);
            $slick.off("breakpoint", this.onBreakpoint);
            $slick.off("destroy", this.onDestroy);
            $slick.off("edge", this.onEdge);
            $slick.off("init", this.onInit);
            $slick.off("reInit", this.onReInit);
            $slick.off("set-position", this.onSetPosition);
            $slick.off("swipe", this.onSwipe);
            $slick.off("lazyLoaded", this.onLazyLoaded);
            $slick.off("lazyLoadError", this.onLazyLoadError);
            $(this.$el).slick("unslick");
        },
        reSlick: function () {
            this.destroy();
            this.create();
        },
        next: function () {
            $(this.$el).slick("slickNext");
        },
        prev: function () {
            $(this.$el).slick("slickPrev");
        },
        pause: function () {
            $(this.$el).slick("slickPause");
        },
        play: function () {
            $(this.$el).slick("slickPlay");
        },
        goTo: function (index, dontAnimate) {
            $(this.$el).slick("slickGoTo", index, dontAnimate);
        },
        currentSlide: function () {
            return $(this.$el).slick("slickCurrentSlide");
        },
        add: function (element, index, addBefore) {
            $(this.$el).slick("slickAdd", element, index, addBefore);
        },
        remove: function (index, removeBefore) {
            $(this.$el).slick("slickRemove", index, removeBefore);
        },
        filter: function (filterData) {
            $(this.$el).slick("slickFilter", filterData);
        },
        unfilter: function () {
            $(this.$el).slick("slickUnfilter");
        },
        getOption: function (option) {
            $(this.$el).slick("slickGetOption", option);
        },
        setOption: function (option, value, refresh) {
            $(this.$el).slick("slickSetOption", option, value, refresh);
        },
        setPosition: function () {
            $(this.$el).slick("set-position");
        },
        // Events
        onAfterChange: function (event, slick, currentSlide) {
            this.$emit("after-change", event, slick, currentSlide);
        },
        onBeforeChange: function (event, slick, currentSlide, nextSlide) {
            this.$emit("before-change", event, slick, currentSlide, nextSlide);
        },
        onBreakpoint: function (event, slick, breakpoint) {
            this.$emit("breakpoint", event, slick, breakpoint);
        },
        onDestroy: function (event, slick) {
            this.$emit("destroy", event, slick);
        },
        onEdge: function (event, slick, direction) {
            this.$emit("edge", event, slick, direction);
        },
        onInit: function (event, slick) {
            this.$emit("init", event, slick);
        },
        onReInit: function (event, slick) {
            this.$emit("reInit", event, slick);
        },
        onSetPosition: function (event, slick) {
            this.$emit("set-position", event, slick);
        },
        onSwipe: function (event, slick, direction) {
            this.$emit("swipe", event, slick, direction);
        },
        onLazyLoaded: function (event, slick, image, imageSource) {
            this.$emit("lazyLoaded", event, slick, image, imageSource);
        },
        onLazyLoadError: function (event, slick, image, imageSource) {
            this.$emit("lazyLoadError", event, slick, image, imageSource);
        },
    },
    template: ` <div>
                    <slot></slot>
                </div>`,
};
const slickFunction = {
    data() {
        return {
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
        };
    },
    methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },

        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            // console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            // console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            // console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            // console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            // console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            // console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            // console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            // console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            // console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            // console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            // console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    },
};

// ========= 首頁通知圖卡 ==============================================================================================================================
const indexAlertCard = {
    template: ` <div class="indexAlertCard">
                    <el-card>
                        <i class="fas fa-exclamation-circle indexAlertCard-icon"></i>
                        <div class="indexAlertCard-content">
                            <div class="indexAlertCard-sTit">
                                <b>提醒您</b>
                            </div>
                            <div class="indexAlertCard-tit">
                                <slot name="title">
                                    您的風險屬性評估已過期!
                                </slot>
                            </div>
                            <div class="indexAlertCard-text">
                                <slot name="text">
                                    <p>
                                        有效期限：2020/07/30，
                                        <br class="hidden-xl-only"/>未完成前將無法新申購與轉換基金，僅能贖回與部分變更您的定期定額契約。
                                    </p>
                                </slot>
                            </div>
                        </div>
                        <div class="indexAlertCard-btnArea">
                            <div class="indexAlertCard-btnArea-container">
                                <div class="indexAlertCard-btnArea-content">
                                    <slot name="btnArea">
                                        <el-button type="danger" class="sBtn" round>重新進行風險屬性評估</el-button>
                                        <el-button type="secondary" class="sBtn" round plain>暫不變更，半年後再提醒</el-button>
                                    </slot>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>`,
};

// ========= 頁面大標 ==============================================================================================================================
const pageTit = {
    props: ["stit", "tit", "printBtn", "printTarget"],
    template: ` <div class="page-tit" :class="{'hasPrintBtn': printBtn}">
                    {{stit}}
                    <h1 :title="tit">
                        {{tit}}
                    </h1>
                    <el-button round plain type="primary" class="sBtn" v-if="printBtn" @click="print(printTarget);">列印</el-button>
                </div>`,
    methods: {
        print(printTarget) {
            let url = printTarget;
            window.open(url, '_blank');
        },
    },
};

// ========= 計算公式 ==============================================================================================================================
const calculationFormula = {
    template: ` <el-popover
                    placement="top-start"
                    width="285"
                    trigger="hover">
                    <template v-slot="content">
                        <div>
                            <div class="popoverContent">
                                <p>
                                    <b>未實現損益：</b>
                                    <br/>投資金額-參考市值
                                </p>
                            </div>
                            <div class="popoverContent">
                                <p>
                                    <b>不含息報酬率：</b>
                                    <br/>未實現損益 <i class="fas fa-divide"></i> 投資金額
                                </p>
                            </div>
                            <div class="popoverContent">
                                <p>
                                    <b>含息報酬率：</b>
                                    <br/>(未實現損益+累積配息) <i class="fas fa-divide"></i> 投資金額
                                </p>
                            </div>
                        </div>
                    </template>
                    <div class="calculationFormula" slot="reference">
                        <i class="fas fa-exclamation-circle"></i> 計算公式
                    </div>
                </el-popover>`,
};

// ========= 資訊卡片 ==============================================================================================================================
const infoCord = {
    data: function () {
        return {
            show: false,
            flags: false,
            position: { y: 0 },
            ny: "",
        };
    },
    template: ` <transition
                    enter-active-class="animate__animated animate__fadeIn animate__faster"
                    leave-active-class="animate__animated animate__fadeOut">
                    <div class="infoCard" v-show="show" @click.stop @touchstart="down" @touchmove="move" @touchend="end">
                        <div class="infoCard-bg" @click="removeFixedBody()"></div>
                        <el-collapse-transition>
                            <el-card shadow="always" v-show="show">
                                <div class="infoCard-closeBtn" @click="removeFixedBody()">
                                    <i class="fas fa-times"></i>
                                    <div class="infoCard-closeBtn-mobileStyle"></div>
                                </div>
                                <slot name="content"></slot>
                                <slot name="btnArea">
                                    <div class="infoCard-btnArea">
                                        <el-button round>轉換</el-button>
                                        <el-button
                                            round
                                            @click="$router.push('/')">
                                            贖回
                                        </el-button>
                                        <el-button round>到價通知設定</el-button>
                                    </div>
                                </slot>
                            </el-card>
                        </el-collapse-transition>
                    </div>
                </transition>`,
    mounted() {
        // this.panCloseCard();
    },
    methods: {
        removeFixedBody() {
            this.show = false;
            // document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
        },

        down() {
            document.body.classList.add("fixedBody-sm"); // 添加手機版body固定

            if (document.body.clientWidth < 992) {
                this.flags = true;
                var touch;
                if (event.touches) {
                    touch = event.touches[0];
                } else {
                    touch = event;
                }
                this.position.y = touch.clientY;
            }
        },
        move() {
            if (document.body.clientWidth < 992) {
                if (this.flags) {
                    // 取消卡片本身的動畫css & 偏移
                    document.querySelector(".infoCard .el-card").style.transition = "0s";

                    var touch;
                    if (event.touches) {
                        touch = event.touches[0];
                    } else {
                        touch = event;
                    }
                    this.ny = touch.clientY - this.position.y;
                    document.querySelector(".infoCard .el-card").style.transform = "translateY(" + this.ny + "px)";

                    if (this.ny > 200) {
                        // 讓卡片移到畫面外後關閉&移除css
                        document.querySelector(".infoCard .el-card").style.transform = "translateY(500px)";
                        this.removeFixedBody();
                        setTimeout(() => {
                            document.querySelector(".infoCard .el-card").removeAttribute("style");
                        }, 1000);
                    }
                }
            }
        },
        //滑鼠釋放時候的函式
        end() {
            setTimeout(() => {
                document.body.classList.remove("fixedBody-sm"); // 移除手機版body固定
            }, 200);

            if (document.body.clientWidth < 992) {
                this.flags = false;

                // 如果距離小於X
                if (this.ny < 200) {
                    // 移除剛剛設定至卡片的css
                    document.querySelector(".infoCard .el-card").removeAttribute("style");
                }
            }
        },
    },
    created() {
        let body = document.querySelector("body");
        body.addEventListener("click", (e) => {
            this.removeFixedBody();
        });
    },
};

// ========= 基金資訊 ==============================================================================================================================
// 資料結構說明
const baseFundData = {
    data() {
        return {
            fund: [
                {
                    noNext: true, // 沒有下一頁
                    listItemOtherClass: "", // 在[.fundList]添加其他className用  unimportant(不重要狀態)
                    hasCheckbox: false, // 是否有checkbox
                    checkbox: false,    // checkbox的v-model
                    checkboxContent: "勾選您欲取消之項目",
                    transactionMethod: "單筆申購",
                    transactionMethodType: "success", // 交易方式標籤狀態 success || warning || danger
                    transactionMethodTooltip: true, // 標籤的tooltip
                    transactionMethodTooltipText: `<b>提醒：</b>存款不足`,   // 標籤tooltip的文字
                    manyTags: [], // 放很多標籤用
                    errorTag: "已終止契約", // 錯誤訊息標籤
                    dealDateName: "贖回日期：", // 沒有資料時預設顯示交易日期
                    dealDate: "2020/08/13",
                    fundCode: "0797",
                    fundName: "科技基金 ",
                    functionBtns: true, // 顯示功能按鍵
                    isChange: true,
                    changeTypeUseData: {
                        transactionMethod: "單筆申購",
                        transactionMethodType: "success", // 交易方式標籤狀態 success || warning || danger
                        errorTag: "已終止契約", // 錯誤訊息標籤
                        dealDateName: "贖回日期：", // 沒有資料時預設顯示交易日期
                        dealDate: "2020/08/13",
                        fundCode: "0797",
                        fundName: "科技基金 ",
                    },
                    priceArrivalNoticeSettingInfo: true,  // 顯示到價通知設定欄位
                    info: [
                        {
                            tit: "未實現損益",
                            text: "-280",
                            focusText: true,
                            remark: "",
                            hasTooltip: true,   // 顯示tooltip
                            tooltipContent: `優惠費率0.6000%，紅利折抵180.00元`,    // tooltip內容
                            inputInfo: "",  // 有這個才會顯示input
                            inputPlaceholder: "",   // input的placeholder
                            inputWidth: "", // input寬度
                        },
                        
                    ],
                    hasPopover: false,
                    detail: [
                        // 有資料的時候才會顯示收闔的按鍵
                        {
                            transactionMethod: "定期定額",
                            errorTag: "交易處理中",
                            dealDateName: "贖回日期：", // 沒有資料時預設顯示交易日期
                            dealDate: "2020/08/13",
                            fundCode: "0810",
                            fundName: "全球債券基金—美元月配息",
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
                                    tit: "累積單位數",
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
                                    tit: "參考淨值",
                                    text: "9.44",
                                    focusText: false,
                                    remark: "2020/09/23",
                                },
                                {
                                    tit: "參考匯率",
                                    text: "29.9825",
                                    focusText: false,
                                    remark: "2020/09/23",
                                },
                                {
                                    tit: "不含息報酬率",
                                    text: "-0.97%",
                                    focusText: false,
                                    remark: "",
                                },
                            ],
                            hasPopover: true,
                            warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                            warningDisplayMethod: `tooltip`, // 警語顯示方式，沒值就會直接顯示
                            warningTooltipTit: `尚有在途交易`,  // tooltip方式警語的標題
                            newPriceNotification: true, // 顯示新版到價通知資訊
                            priceNotification: {
                                // 到價通知設定樣式的資料
                                condition: "淨值>=25,淨值<=30", // 通知條件
                                frequency: "一次", // 通知頻率
                                setUp: false, // 是否設定過
                                pause: false, // 是否暫停
                            },
                        },
                    ],
                    warning: `本基金尚有集保未回報之申購、贖回、轉換或配息資訊；若為新申購之基金，在資訊回報前將以NA列示。`,
                    warningDisplayMethod: `tooltip`, // 警語顯示方式，沒值就會直接顯示
                    warningTooltipTit: `尚有在途交易`,  // tooltip方式警語的標題
                    bottomContent: {
                        // 這裡有資料才會顯示[.fundList-bottom-content]
                        areaClass: "priceNotificationType pause", // 區塊class [.priceNotificationType]:到價通知用 [.pause]到價通知暫停時使用
                        type: "", // priceArrivalNotice 到價通知設定樣式  ||  text 純文字 || purchase 申購樣式 || dateOfDeduction 扣款日期
                    },
                    bottomContentText: ``,
                    newPriceNotification: true, // 顯示新版到價通知資訊
                    priceNotification: {
                        // 到價通知設定樣式的資料
                        condition: "淨值>=25,淨值<=30", // 通知條件
                        frequency: "一次", // 通知頻率
                        setUp: false, // 是否設定過
                        pause: false, // 是否暫停
                    },
                    purchaseInfo: {
                        // 申購樣式的資料
                        blockItem: false,   // 一個資料一行
                        currency: "美元", // 計價幣別
                        minimumPurchaseAmount: "美元 40 / 新台幣 1,000", // 最低投資金額
                    },
                    dateOfDeduction: [
                        // 扣款日期樣式
                        "06", "11",
                    ],
                },
            ],
            fundListSetting: {
                toggleCardBtnText: "更多資訊", // 切換資訊卡片按鍵的文字
                promptIcon: "", // M版列表右上角提示icon樣式  空 || arrow
                minWidth: "0", // [.fundList-infoItem]的最小寬度
                pcShowQty: {
                    // [.fundList-infoItem]要顯示的資料量 有寫undefined不顯示 每一階都要寫
                    base: "7", // 預設
                    xxl: "6", // 1599px~1400px
                    xl: "5", // 1399px~1200px
                    lg: "4", // 1199px~992px
                    md: "4", // 991px~768px
                    sm: "3", // 767px~360px
                    xs: "2", // 359px以下
                },
                toggleDetailText: {
                    before: "展開交易歷程",
                    after: "收起交易歷程",
                },
                detail: {
                    // detail區塊的設定
                    minWidth: "0", // [.fundList-infoItem]的最小寬度
                    pcShowQty: {
                        // [.fundList-infoItem]要顯示的資料量 有寫undefined不顯示 每一階都要寫
                        base: "7", // 預設
                        xxl: "6", // 1599px~1400px
                        xl: "5", // 1399px~1200px
                        lg: "4", // 1199px~992px
                        md: "4", // 991px~768px
                        sm: "3", // 767px~360px
                        xs: "2", // 359px以下
                    },
                },
            },
            infoCardBtnType: 1, // 資訊卡片按鍵的樣式
        };
    },
};
Vue.component("fundInfoItem", {
    props: ["fundData", "fundListSetting"],
    // mixins: [baseFundData],
    template: ` <div class="fundList-infoItem" 
                    :class="[
                        fundListSetting.pcShowQty.base != undefined ? 'baseShow-'+ fundListSetting.pcShowQty.base : '',
                        fundListSetting.pcShowQty.xxl != undefined ? 'xxlShow-'+ fundListSetting.pcShowQty.xxl : '',
                        fundListSetting.pcShowQty.xl != undefined ? 'xlShow-'+ fundListSetting.pcShowQty.xl : '',
                        fundListSetting.pcShowQty.lg != undefined ? 'lgShow-'+ fundListSetting.pcShowQty.lg : '',
                        fundListSetting.pcShowQty.md != undefined ? 'mdShow-'+ fundListSetting.pcShowQty.md : '',
                        fundListSetting.pcShowQty.sm != undefined ? 'smShow-'+ fundListSetting.pcShowQty.sm : '',
                        fundListSetting.pcShowQty.xs != undefined ? 'xsShow-'+ fundListSetting.pcShowQty.xs : '',
                    ]">
                    <table :style="{minWidth: fundListSetting.minWidth,}">
                        <tr class="head">
                            <td v-for="(item, index) in fundData.info" :key="index" v-html="item.tit"></td>
                            <td rowspan="2" width="115" style="display: table-cell;" v-if="fundData.hasPopover">
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
                                            <div class="popoverContent" v-for="(item, index) in fundData.info" :key="index">
                                                <p>
                                                    <b v-html="item.tit + '：'"></b>
                                                    <br/>
                                                    <el-tooltip
                                                        effect="dark"
                                                        placement="top"
                                                        :disabled="!item.hasTooltip"
                                                    >
                                                        <div slot="content" v-html="item.tooltipContent"></div>
                                                        <span :class="{'cursor-pointer': item.hasTooltip}">
                                                            <component
                                                                :is="item.focusText ? 'b' : 'span'"
                                                                :class="{'focus': item.focusText}"
                                                                v-html="item.text">
                                                            </component>
                                                            <i class="fas fa-exclamation-circle tooltipUseIcon" v-if="item.hasTooltip"></i>
                                                        </span>
                                                    </el-tooltip>
                                                    <br v-if="item.remark != ''"/>
                                                    <span class="remark" v-if="item.remark != ''">
                                                        {{item.remark}}
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
                            <td v-for="(item, index) in fundData.info" :key="index">
                                <el-tooltip
                                    effect="dark"
                                    placement="top"
                                    :disabled="!item.hasTooltip"
                                >
                                    <div slot="content" v-html="item.tooltipContent"></div>
                                    <span :class="{'cursor-pointer': item.hasTooltip}">
                                        <component
                                            :is="item.focusText ? 'b' : 'span'"
                                            :class="{'focus': item.focusText}"
                                            v-html="item.text">
                                        </component>
                                        <i class="fas fa-exclamation-circle tooltipUseIcon" v-if="item.hasTooltip"></i>
                                    </span>
                                </el-tooltip>
                                <el-input
                                    v-model="item.inputInfo"
                                    :placeholder="item.inputPlaceholder"
                                    v-if="item.inputInfo != undefined"
                                    size="medium"
                                    :style="{'width': item.inputWidth}">
                                </el-input>
                                <div class="remark" v-if="item.remark != ''">
                                    {{item.remark}}
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>`,
});

Vue.component("cardFundHeardr", {
    props: ["fundData", "index"],
    template: ` <div class="fundList-header">
                    <div class="fundList-header-content">
                        <div class="fundList-fundCode" v-if="fundData[index].fundCode!=undefined">
                            {{fundData[index].fundCode}}
                        </div>
                        <div
                            class="fundList-transactionMethod"
                            v-if="fundData[index].transactionMethod!=undefined"
                            :class="fundData[index].transactionMethodType"
                        >
                            {{fundData[index].transactionMethod}}
                        </div>
                        <div class="fundList-transactionMethod" v-if="fundData[index].manyTags!=undefined" v-for="(item, index2) in fundData[index].manyTags" :key="index2">
                            {{item}}
                        </div>
                        <div class="fundList-transactionMethod danger" v-if="fundData[index].errorTag!=undefined">
                            {{fundData[index].errorTag}}
                        </div>
                        <div class="fundList-dealDate" v-if="fundData[index].dealDate!=undefined">
                            <template v-if="fundData[index].dealDateName == undefined">
                                交易日期：
                            </template>
                            <template v-if="fundData[index].dealDateName != undefined">
                                {{fundData[index].dealDateName}}
                            </template>
                            {{fundData[index].dealDate}}
                        </div>
                    </div>
                    <h3 class="fundList-fundName" :title="fundData[index].fundName">
                        <openFundSmallFile></openFundSmallFile>
                        {{fundData[index].fundName}}
                    </h3>
                </div>`,
});
Vue.component("cardFundHeardr_changeTypeUse", {
    props: ["fundData", "index"],
    template: ` <div class="changeTypeUse">
                    <el-divider>
                        <i class="fas fa-angle-double-down changeFundArrow"></i>
                    </el-divider>
                    <div class="fundList-header">
                        <div class="fundList-header-content">
                            <div class="fundList-fundCode" v-if="fundData[index].changeTypeUseData.fundCode!=undefined">
                                {{fundData[index].changeTypeUseData.fundCode}}
                            </div>
                            <div class="fundList-transactionMethod">
                                轉入基金
                            </div>
                            <div class="fundList-transactionMethod" v-if="fundData[index].changeTypeUseData.transactionMethod!=undefined">
                                {{fundData[index].changeTypeUseData.transactionMethod}}
                            </div>
                            <div class="fundList-dealDate" v-if="fundData[index].changeTypeUseData.dealDate!=undefined">
                                <template v-if="fundData[index].changeTypeUseData.dealDateName == undefined">
                                    交易日期：
                                </template>
                                <template v-if="fundData[index].changeTypeUseData.dealDateName != undefined">
                                    {{fundData[index].changeTypeUseData.dealDateName}}
                                </template>
                                {{fundData[index].changeTypeUseData.dealDate}}
                            </div>
                        </div>
                        <div class="fundList-fundName" :title="fundData[index].changeTypeUseData.fundName">
                            <openFundSmallFile></openFundSmallFile>
                            {{fundData[index].changeTypeUseData.fundName}}
                        </div>
                    </div>
                </div>`,
});

Vue.component("cardFundInfoItem", {
    props: ["fundData", "index", "setting"],
    template: ` <div class="infoCard-fundInfo"
                    @touchstart.stop
                    :class="[
                        setting.pcShowQty.base != undefined ? 'baseShow-'+ setting.pcShowQty.base : '',
                        setting.pcShowQty.xxl != undefined ? 'xxlShow-'+ setting.pcShowQty.xxl : '',
                        setting.pcShowQty.xl != undefined ? 'xlShow-'+ setting.pcShowQty.xl : '',
                        setting.pcShowQty.lg != undefined ? 'lgShow-'+ setting.pcShowQty.lg : '',
                        setting.pcShowQty.md != undefined ? 'mdShow-'+ setting.pcShowQty.md : '',
                        setting.pcShowQty.sm != undefined ? 'smShow-'+ setting.pcShowQty.sm : '',
                        setting.pcShowQty.xs != undefined ? 'xsShow-'+ setting.pcShowQty.xs : '',
                    ]">
                    <div class="infoCard-fundInfo-item" v-for="(item, index) in fundData[index].info" :key="index">
                        <div class="infoCard-fundInfo-tit" v-html="item.tit"></div>
                        <div class="infoCard-fundInfo-content">
                            <el-tooltip
                                effect="dark"
                                placement="top-end"
                                :disabled="!item.hasTooltip"
                            >
                                <div slot="content" v-html="item.tooltipContent"></div>
                                <span :class="{'cursor-pointer': item.hasTooltip}">
                                    <component
                                        :is="item.focusText ? 'b' : 'span'"
                                        :class="{'focus': item.focusText}"
                                        v-html="item.text">
                                    </component>
                                    <i class="fas fa-exclamation-circle tooltipUseIcon" v-if="item.hasTooltip"></i>
                                </span>
                            </el-tooltip>
                            <div class="remark" v-if="item.remark != ''">
                                {{item.remark}}
                            </div>
                        </div>
                    </div>
                </div>`,
});

Vue.component("fundList", {
    props: ["fundData", "fundListSetting"],
    // mixins: [baseFundData],
    data() {
        return {
            fundListDetail: false,
            priceNotificationDelPopover: false,
            detail_priceNotificationDelPopover: false,
        };
    },
    template: ` <div class="fundList"
                    :class="[
                        {
                            'noNext' : fundData.noNext,
                            'selected' : fundData.checkbox,
                            'isChangeType' : fundData.isChange,
                        },
                        fundData.listItemOtherClass
                    ]"
                >
                    <el-card shadow="hover">
                        <div
                            class="fundList-header"
                            :class="{'hasCheckbox': fundData.hasCheckbox != undefined && fundData.hasCheckbox}"
                        >
                            <el-tooltip
                                class="item"
                                effect="dark"
                                :content="fundData.checkboxContent"
                                placement="top-start"
                                v-if="fundData.hasCheckbox != undefined && fundData.hasCheckbox"
                            >
                                <el-checkbox
                                    v-model="fundData.checkbox"
                                    @change="handleChange"
                                ></el-checkbox>
                            </el-tooltip>
                            <el-row :gutter="10">
                                <el-col
                                    :md="!fundData.noNext ? 20 : 24"
                                    :sm="!fundData.noNext ? 23 : 24"
                                    :xs="!fundData.noNext ? 23 : 24"
                                >
                                    <div class="fundList-header-content" @click.stop="thisIndex">
                                        <div class="fundList-fundCode" v-if="fundData.fundCode!=undefined">
                                            {{fundData.fundCode}}
                                        </div>
                                        <el-tooltip
                                            effect="dark"
                                            placement="top-start"
                                            :disabled="!fundData.transactionMethodTooltip"
                                        >
                                            <div slot="content" v-html="fundData.transactionMethodTooltipText"></div>
                                            <div
                                                class="fundList-transactionMethod"
                                                v-if="fundData.transactionMethod!=undefined"
                                                :class="[
                                                    {
                                                        'cursor-pointer' : fundData.transactionMethodTooltip,
                                                    },
                                                    fundData.transactionMethodType
                                                ]"
                                            >
                                                <i class="fas fa-exclamation-circle" v-if="fundData.transactionMethodTooltip"></i>
                                                {{fundData.transactionMethod}}
                                            </div>
                                        </el-tooltip>
                                        <div class="fundList-transactionMethod" v-if="fundData.manyTags!=undefined" v-for="(item, index) in fundData.manyTags" :key="index">
                                            {{item}}
                                        </div>
                                        <div class="fundList-transactionMethod danger" v-if="fundData.errorTag!=undefined">
                                            {{fundData.errorTag}}
                                        </div>
                                        <div class="fundList-dealDate" v-if="fundData.dealDate!=undefined">
                                            <template v-if="fundData.dealDateName == undefined">
                                                交易日期：
                                            </template>
                                            <template v-if="fundData.dealDateName != undefined">
                                                {{fundData.dealDateName}}
                                            </template>
                                            {{fundData.dealDate}}
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :md="4" class="hidden-sm-and-down" v-if="!fundData.noNext">
                                    <div class="fundList-header-btnArea">
                                        <el-button round class="sBtn" @click.stop="thisIndex">
                                            {{fundListSetting.toggleCardBtnText}}
                                        </el-button>
                                    </div>
                                </el-col>
                                <el-col :span="1" class="hidden-md-and-up text-right" v-if="!fundData.noNext">
                                    <div class="fundList-promptIcon" @click.stop="thisIndex">
                                        <i class="fas fa-ellipsis-v" v-if="fundListSetting.promptIcon == '' || fundListSetting.promptIcon == undefined"></i>
                                        <i class="fas fa-angle-right" v-if="fundListSetting.promptIcon == 'arrow'"></i>
                                    </div>
                                </el-col>
                            </el-row>
                            <div class="clearfix">
                                <h2 class="fundList-fundName" :title="fundData.fundName" :class="{'floatType': fundData.functionBtns}" v-if="fundData.fundName != undefined">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div @click.stop="thisIndex">
                                        {{fundData.fundName}}
                                    </div>
                                </h2>
                                <div class="fundList-functionBtns" v-if="fundData.functionBtns">
                                    <el-button round class="xsBtn" plain @click="$root.$data.notesOnConversionFees = true;">
                                        <i class="el-icon-sort"></i> 轉換
                                    </el-button>
                                    <el-button round class="xsBtn" plain @click="$router.push('/Redemption/Step1'); $scrollTo('body')">
                                        <i class="el-icon-refresh-right"></i> 贖回
                                    </el-button>
                                    <el-button round class="xsBtn" plain @click="$root.$data.priceArrivalNoticeSetting.show = true;">
                                        <i class="el-icon-bell"></i> 到價設定
                                    </el-button>
                                    <template v-if="$root.$data.windowWidth > 991">
                                        <el-button round class="xsBtn" type="primary" plain @click="$router.push('/LumpSum/Subscribe/Step1'); $scrollTo('body')">
                                            單筆申購
                                        </el-button>
                                        <el-button round class="xsBtn" type="primary" plain @click="$router.push('/Sip/Subscribe/Step1'); $scrollTo('body')">
                                            定期(不)定額
                                        </el-button>
                                    </template>
                                </div>
                            </div>
                            <div class="changeTypeUse" v-if="fundData.isChange != undefined ? fundData.isChange : false">
                                <el-divider @click.stop="thisIndex">
                                    <i class="fas fa-angle-double-down changeFundArrow"></i>
                                </el-divider>
                                <el-row :gutter="10">
                                    <el-col :span="24">
                                        <div class="fundList-header-content" @click.stop="thisIndex">
                                            <div class="fundList-fundCode" v-if="fundData.changeTypeUseData.fundCode!=undefined">
                                                {{fundData.changeTypeUseData.fundCode}}
                                            </div>
                                            <div class="fundList-transactionMethod">
                                                轉入基金
                                            </div>
                                            <div
                                                class="fundList-transactionMethod"
                                                v-if="fundData.changeTypeUseData.transactionMethod!=undefined"
                                                :class="fundData.changeTypeUseData.transactionMethodType"
                                            >
                                                {{fundData.changeTypeUseData.transactionMethod}}
                                            </div>
                                            <div class="fundList-transactionMethod danger" v-if="fundData.changeTypeUseData.errorTag!=undefined">
                                                {{fundData.changeTypeUseData.errorTag}}
                                            </div>
                                            <div class="fundList-dealDate" v-if="fundData.changeTypeUseData.dealDate!=undefined">
                                                <template v-if="fundData.changeTypeUseData.dealDateName == undefined">
                                                    交易日期：
                                                </template>
                                                <template v-if="fundData.changeTypeUseData.dealDateName != undefined">
                                                    {{fundData.changeTypeUseData.dealDateName}}
                                                </template>
                                                {{fundData.changeTypeUseData.dealDate}}
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                                <div class="fundList-fundName" :title="fundData.changeTypeUseData.fundName">
                                    <openFundSmallFile></openFundSmallFile>
                                    <div @click.stop="thisIndex">
                                        <b>{{fundData.changeTypeUseData.fundName}}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <el-row :gutter="10" v-if="fundData.priceArrivalNoticeSettingInfo != undefined && fundData.priceArrivalNoticeSettingInfo">
                            <el-col :sm="8" :xs="12">
                                <el-input placeholder="請輸入" size="medium" v-model="$root.$data.priceArrivalNoticeSetting.form.val1" class="priceArrivalNoticeSetting-input">
                                    <template slot="prepend">≧</template>
                                    <template slot="append">%</template>
                                </el-input>
                            </el-col>
                            <el-col :sm="8" :xs="12">
                                <el-input placeholder="請輸入" size="medium" v-model="$root.$data.priceArrivalNoticeSetting.form.val2" class="priceArrivalNoticeSetting-input">
                                    <template slot="prepend">≦</template>
                                    <template slot="append">%</template>
                                </el-input>
                            </el-col>
                            <el-col :sm="8" class="margin-top-sm-10">
                                <el-select size="medium" v-model="$root.$data.priceArrivalNoticeSetting.form.frequency" placeholder="請選擇通知頻率">
                                    <el-option label="暫停" value="pause"></el-option>
                                    <el-option label="一次" value="once"></el-option>
                                    <el-option label="每次" value="each"></el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <fundInfoItem :fundData="fundData" :fundListSetting="fundListSetting" v-if="fundData.info != undefined"></fundInfoItem>
                        <div class="priceNotification-info type2" v-if="fundData.newPriceNotification" :class="{'pause': fundData.priceNotification.pause}">
                            <span><b>通知條件：</b>{{fundData.priceNotification.condition}}</span>
                            <el-divider direction="vertical"></el-divider>
                            <span><b>通知頻率：</b>{{fundData.priceNotification.frequency}}</span>
                            <el-popover
                                placement="top-start"
                                width="200"
                                v-model="priceNotificationDelPopover">
                                <template v-slot="content">
                                    <p class="text-center">確定要取消通知嗎?</p>
                                    <div class="text-center margin-bottom-10">
                                        <el-button round class="sBtn" type="primary" @click="priceNotificationDelPopover = false">是</el-button>
                                        <el-button round class="sBtn" type="text" @click="priceNotificationDelPopover = false">否</el-button>
                                    </div>
                                </template>
                                <el-button round class="xsBtn" plain slot="reference">取消通知</el-button>
                            </el-popover>
                        </div>
                        <el-collapse-transition>
                            <div class="fundList-detail" v-show="fundListDetail">
                                <div class="fundList-detail-item"
                                    v-if="fundData.detail != undefined"
                                    v-for="(detailItem, detailIndex) in fundData.detail"
                                    :key="detailIndex">
                                    <div class="fundList-header">
                                        <div class="fundList-header-content">
                                            <div class="fundList-fundCode" v-if="detailItem.fundCode!=undefined">
                                                {{detailItem.fundCode}}
                                            </div>
                                            <div class="fundList-transactionMethod" v-if="detailItem.transactionMethod!=undefined">
                                                {{detailItem.transactionMethod}}
                                            </div>
                                            <div class="fundList-transactionMethod danger" v-if="detailItem.errorTag!=undefined">
                                                {{detailItem.errorTag}}
                                            </div>
                                            <div class="fundList-dealDate" v-if="detailItem.dealDate!=undefined">
                                                <template v-if="detailItem.dealDateName == undefined">
                                                    交易日期：
                                                </template>
                                                <template v-if="detailItem.dealDateName != undefined">
                                                    {{detailItem.dealDateName}}
                                                </template>
                                                {{detailItem.dealDate}}
                                            </div>
                                        </div>
                                        <h3 class="fundList-fundName" :title="detailItem.fundName" v-if="detailItem.fundName!=undefined">
                                            <openFundSmallFile></openFundSmallFile>
                                            {{detailItem.fundName}}
                                        </h3>
                                    </div>
                                    <fundInfoItem :fundData="detailItem" :fundListSetting="fundListSetting.detail"></fundInfoItem>
                                    <div class="priceNotification-info type2" v-if="detailItem.newPriceNotification" :class="{'pause': detailItem.priceNotification.pause}">
                                        <span><b>通知條件：</b>{{detailItem.priceNotification.condition}}</span>
                                        <el-divider direction="vertical"></el-divider>
                                        <span><b>通知頻率：</b>{{detailItem.priceNotification.frequency}}</span>
                                        <el-popover
                                            placement="top-start"
                                            width="200"
                                            v-model="detail_priceNotificationDelPopover">
                                            <template v-slot="content">
                                                <p class="text-center">確定要取消通知嗎?</p>
                                                <div class="text-center margin-bottom-10">
                                                    <el-button round class="sBtn" type="primary" @click="detail_priceNotificationDelPopover = false">是</el-button>
                                                    <el-button round class="sBtn" type="text" @click="detail_priceNotificationDelPopover = false">否</el-button>
                                                </div>
                                            </template>
                                            <el-button round class="xsBtn" plain slot="reference">取消通知</el-button>
                                        </el-popover>
                                    </div>
                                    <div class="fundList-warning" v-if="detailItem.warning != undefined">
                                        <template v-if="detailItem.warningDisplayMethod=='tooltip'">
                                            <el-tooltip placement="bottom-start" effect="dark">
                                                <template v-slot:content>
                                                    <div v-html="detailItem.warning"></div>
                                                </template>
                                                <span>
                                                    <i class="fas fa-exclamation-circle"></i>
                                                    {{detailItem.warningTooltipTit}}
                                                </span>
                                            </el-tooltip>
                                        </template>
                                        <template v-else>
                                            <i class="fas fa-exclamation-circle"></i> {{detailItem.warning}}
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </el-collapse-transition>
                    </el-card>
                    <div class="fundList-bottom">
                        <div class="fundList-bottom-content" v-if="fundData.bottomContent != undefined" :class="fundData.bottomContent.areaClass">
                            <slot name="listBottom">
                                <el-row :gutter="10" v-if="fundData.bottomContent.type == 'priceArrivalNotice'">
                                    <el-col :md="18" :sm="16">
                                        <div class="priceNotification-info">
                                            <span>通知條件：{{fundData.priceNotification.condition}}</span>
                                            <el-divider direction="vertical"></el-divider>
                                            <span>通知頻率：{{fundData.priceNotification.frequency}}</span>
                                        </div>
                                    </el-col>
                                    <el-col :md="6" :sm="8">
                                        <div class="priceNotification-settingBtnArea" v-if="fundData.priceNotification.setUp || fundData.priceNotification.setUp != undefined">
                                            <el-button round class="sBtn" type="primary" plain @click="showPriceArrivalNoticeSetting">
                                                設定通知條件
                                            </el-button>
                                        </div>
                                        <div class="priceNotification-settingBtnArea" v-else>
                                            <el-button round class="sBtn" @click="showPriceArrivalNoticeSetting">
                                                更改設定
                                            </el-button>
                                            <el-popover
                                                placement="top-start"
                                                width="200"
                                                v-model="priceNotificationDelPopover">
                                                <template v-slot="content">
                                                    <p class="text-center">確定要取消通知嗎?</p>
                                                    <div class="text-center margin-bottom-10">
                                                        <el-button round class="sBtn" type="primary" @click="priceNotificationDelPopover = false">確定</el-button>
                                                        <el-button round class="sBtn" type="text" @click="priceNotificationDelPopover = false">取消</el-button>
                                                    </div>
                                                </template>
                                                <el-button round class="sBtn" type="white" slot="reference">取消</el-button>
                                            </el-popover>
                                        </div>
                                    </el-col>
                                </el-row>
                                <template
                                    v-if="fundData.bottomContent.type == 'purchase'">
                                    <div class="priceNotification-info">
                                        <span>計價幣別：<span v-html="fundData.purchaseInfo.currency"></span></span>
                                        <el-divider direction="vertical" v-if="!fundData.purchaseInfo.blockItem"></el-divider>
                                        <div v-if="fundData.purchaseInfo.blockItem"></div>
                                        <span>最低投資金額：<span v-html="fundData.purchaseInfo.minimumPurchaseAmount"></span></span>
                                    </div>
                                </template>
                                <template
                                    v-if="fundData.bottomContent.type == 'text'">
                                    <div v-html="fundData.bottomContentText"></div>
                                </template>
                                <template
                                    v-if="fundData.bottomContent.type == 'dateOfDeduction'">
                                    <div class="dateOfDeduction">
                                        扣款日期：
                                        <template v-for="(item, index) in fundData.dateOfDeduction">
                                            <span>{{item}}<template v-if="item != '-'">日</template></span><el-divider direction="vertical" v-if="index != (fundData.dateOfDeduction.length-1)"></el-divider>
                                        </template>
                                    </div>
                                </template>
                            </slot>
                        </div>
                        <div class="clearfix">
                            <div class="fundList-toggleDetailBtn" @click="fundListDetail = !fundListDetail" v-if="fundData.detail != undefined">
                                <template v-if="!fundListDetail">
                                    {{fundListSetting.toggleDetailText.before}} <i class="fas fa-bars"></i>
                                </template>
                                <template v-else>
                                    {{fundListSetting.toggleDetailText.after}} <i class="fas fa-times"></i>
                                </template>
                            </div>
                            <div class="fundList-warning" v-if="fundData.warning != undefined">
                                <template v-if="fundData.warningDisplayMethod=='tooltip'">
                                    <el-tooltip placement="bottom-start" effect="dark">
                                        <template v-slot:content>
                                            <div v-html="fundData.warning"></div>
                                        </template>
                                        <span>
                                            <i class="fas fa-exclamation-circle"></i>
                                            {{fundData.warningTooltipTit}}
                                        </span>
                                    </el-tooltip>
                                </template>
                                <template v-else>
                                    <i class="fas fa-exclamation-circle"></i> <span v-html="fundData.warning"></span>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>`,
    methods: {
        thisIndex() {
            this.$emit("thisIndex2");
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },

        handleChange() {
            this.$emit('checkboxMethods');
        },
    },
});

const fundListGroup = {
    data() {
        return {
            // 各頁各自設定
        };
    },
    template: ` <div>
                    <div class="fundList-area">
                        <fundList
                            v-for="(item, index) in fund"
                            :key="index"
                            :fundData="item"
                            :fundListSetting="fundListSetting"
                            @thisIndex2="postFundListIndex(index)">
                        </fundList>
                    </div>
                    <infoCord
                        ref="fundCard">
                        <template v-slot:content>
                            <cardFundHeardr
                                :fundData="fund"
                                :index="fundListIndex">
                            </cardFundHeardr>
                            <cardFundHeardr_changeTypeUse
                                v-if="fund[fundListIndex].isChange != undefined && fund[fundListIndex].isChange"
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
                            <div class="infoCard-btnArea" v-if="infoCardBtnType == 1">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1')"
                                    @click.prevent="$scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價通知設定</el-button>
                            </div>
                            <div class="infoCard-btnArea" v-if="infoCardBtnType == 2">
                                <el-button round @click="showNotesOnConversionFees">全數轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1#test')"
                                    @click.prevent="$scrollTo('body')">
                                    全數贖回
                                </el-button>
                            </div>
                            <div class="infoCard-btnArea" v-if="infoCardBtnType == 3">
                                <el-button round @click="showNotesOnConversionFees">轉換</el-button>
                                <el-button
                                    round
                                    @click="$router.push('/Redemption/Step1'); $scrollTo('body')">
                                    贖回
                                </el-button>
                                <el-button round @click="showPriceArrivalNoticeSetting">到價設定</el-button>
                                <el-button round type="primary" plain @click="$router.push('/LumpSum/Subscribe/Step1'); $scrollTo('body')">
                                    單筆申購
                                </el-button>
                                <el-button round type="primary" plain @click="$router.push('/Sip/Subscribe/Step1'); $scrollTo('body')">
                                    定期(不)定額
                                </el-button>
                            </div>
                        </template>
                    </infoCord>
                </div>`,
    components: {
        infoCord: infoCord,
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
        showNotesOnConversionFees() {
            content.notesOnConversionFees = true;
        },
        showPriceArrivalNoticeSetting() {
            content.priceArrivalNoticeSetting.show = true;
        },
    },
};

// ========= step ==============================================================================================================================
const stepItem = {
    props: ["data"],
    template: ` <div class="step">
                    <div class="step-item complete" 
                        v-for="(item, index) in data"
                        :key="index"
                        :class="{
                            'now': $route.path === item.path
                        }">
                        <div class="step-item-icon">
                            <i class="fas fa-check-circle completeIcon"></i>
                            <i class="far fa-circle nowIcon"></i>
                            <i class="fas fa-circle-notch undoneIcon"></i>
                        </div>
                        <div class="step-item-no">
                            STEP{{index + 1}}
                        </div>
                        <h2 class="step-item-tit" :title="item.tit">
                            {{item.tit}}
                        </h2>
                    </div>
                </div>`,
};

// ========= 轉換 / 贖回 注意事項 ==============================================================================================================================
const redemptionAndChangeNotice = {
    props: ["changeOnly", "redemptionOnly"],
    data() {
        return {
            minimumRemainingAmount: [
                {
                    currency: "新台幣",
                    price: "1,000",
                },
                {
                    currency: "美元/歐元/澳幣",
                    price: "40",
                },
                {
                    currency: "南非幣",
                    price: "600",
                },
                {
                    currency: "日圓",
                    price: "4,000",
                },
                {
                    currency: "人民幣",
                    price: "200",
                },
            ],
        };
    },
    template: ` <section class="notice">
                    <h4 class="tit-type2" title="注意事項">
                        注意事項
                    </h4>
                    <div class="notice-content">
                        <ol>
                            <li>
                                受益人不得具有美國聯邦所得稅(US federal income taxes)所指之美國人(U.S. persons)身份或加拿大居民或其它經主管機關及境外基金機構限制之身份，亦非為任何具有前述身份之人士利益申購本公司銷售之基金。
                            </li>
                            <li>
                                本交易平台可申購本公司已核備之富蘭克林坦伯頓盧森堡及美國註冊之基金(以下簡稱境外基金)，及台灣核准之富蘭克林華美投信基金(以下簡稱境內基金)。
                            </li>
                            <li>
                                相同基金品牌的全系列基金方可進行轉換交易
                                <p>【富蘭克林國民e帳戶】網路交易平台有富蘭克林境外基金、美盛境外基金及富蘭克林華美投信境內基金，三大基金品牌旗下基金不得互相轉換，請參考下方對照表。</p>
                                <div class="chart">
                                    <div class="chart-table">
                                        <table style="min-width: 640px">
                                            <thead>
                                                <tr>
                                                    <td align="left" colspan="2">是否可互相轉換</td>
                                                    <td>富蘭克林<br />全系列基金</td>
                                                    <td>美盛<br />全系列基金</td>
                                                    <td>富蘭克林華美投信<br />全系列基金</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td rowspan="4" align="left">
                                                        <b> 富蘭克林<br />境外基金 </b>
                                                    </td>
                                                    <td align="left">富蘭克林系列</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td align="left">富蘭克林坦伯頓系列</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td align="left">富蘭克林坦伯頓全球投資系列</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td align="left">富蘭克林坦伯頓伊斯蘭系列</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td rowspan="2" align="left">
                                                        <b> 美盛<br />境外基金 </b>
                                                    </td>
                                                    <td align="left">美盛全球系列</td>
                                                    <td>X</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td align="left">美盛凱利系列</td>
                                                    <td>X</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td align="left"><b> 境內基金 </b></td>
                                                    <td align="left">富蘭克林華美投信基金</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td><b class="text-red">可轉換</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </li>
                            <li>
                                境內基金每營業日公告國內型(T-1)、海外型(T-2)營業日淨值，境外基金每營業日公告(T-1)營業日淨值；前述淨值計算日、入帳金額給付日期悉依相關系列基金之公開說明書、投資人須知、總代理或境外基金機構其他業務規定及相關金融業務慣例辦理。
                            </li>
                            <li>
                                交易委託時間
                                <ul>
                                    <li>
                                        每營業日13:30:00以前委託輸入者，為當期營業日之交易。
                                    </li>
                                    <li>
                                        每營業日13:30:01以後委託輸入者，為次一營業日之交易。
                                    </li>
                                    <li>
                                        前一營業日13:30:01 ~ 次一營業日 13:30:00 截止，為網路交易系統之一個交易日。
                                    </li>
                                </ul>
                            </li>
                            <li>
                                投資人可於委託日營業時間內（交易扣款當日營業日13:30:00前），點選【基金交易】»【交易查詢與取消】單元進行查詢以及交易取消作業，前述交易取消作業請在當日營業日截止前完成，逾時恕不得取消。
                            </li>
                            <li>
                                全數贖回或轉換不代表定期定額契約停止扣款，如須調整定期定額原契約扣款狀態，請登入國民e帳戶點選【基金交易】» 選擇【定期定額變更】並依說明進行變更。
                            </li>
                            <li v-if="changeOnly">
                                當基金轉換(含配息方式轉換)時，境外基金將以交易當日(T)轉入基金之市值做為投資本金，而境內基金需依各轉出(買回)基金之公開說明書個別訂定的買回淨值日(T或T+1)計算轉入基金市值，投資人可點選 <el-link type="primary" @click="$root.$data.ftftFundDescription.dialog = true;">【富蘭克林華美投信系列基金淨值計算及付款日說明】<i class="fas fa-external-link-alt"></i></el-link> 參閱各檔境內基金買回淨值日資訊。
                            </li>
                            <li v-if="changeOnly">
                                基金互相轉換（轉入貨幣型基金除外）、以及貨幣型基金轉出至股票型、債券型、平衡型基金，本公司每筆交易將外加收取新台幣200元轉換手續費；如有優惠或調整收費標準將以總代理人或境內、外基金機構公告為主。
                            </li>
                            <li v-if="changeOnly">
                                若進行境外基金A股的不同計價幣別基金轉換時，轉出轉入之基金淨值同為T日；若遇國外無報價時，則遞延至次一報價營業日之淨值。境內基金除不提供不同計價幣別方式轉換外，其他轉換申請買回基金之買回付款日即為轉申購基金之申購淨值日，而轉同檔基金及國內股票型基金互轉(第一富、高科技、傳產基金)則以買回日(T+1)之淨值為申購淨值日，投資人可點選 <el-link type="primary" @click="$root.$data.ftftFundDescription.dialog = true;">【富蘭克林華美投信系列基金淨值計算及付款日說明】<i class="fas fa-external-link-alt"></i></el-link> 參閱各檔境內基金買回淨值日與買回付款日資訊。
                            </li>
                            <li>
                                實際贖回/轉換單位數依客戶基金帳上餘額為限，並按先進先出原則自結存庫存單位數中扣除，剩餘單位數仍留存於庫存(本金)中，惟各基金不同交易幣別於部分贖回/轉換時有最低庫存金額限制，若低於最低庫存金額需全數贖回或轉出。各交易幣別部分贖回/轉換最低剩餘金額如下：
                                <el-table
                                    :data="minimumRemainingAmount"
                                    stripe
                                    size="mini"
                                    style="width: 410px"
                                    border>
                                    <el-table-column
                                        prop="currency"
                                        label="交易幣別"
                                        width="180">
                                    </el-table-column>
                                    <el-table-column
                                        prop="price"
                                        label="部分贖回/轉換最低剩餘金額(原幣)"
                                        width="229">
                                    </el-table-column>
                                </el-table>
                            </li>
                            <li v-if="changeOnly">
                                境內基金之<b>外幣分配型基金</b>之轉入最低金額限制為美金1,000 / 澳幣 1,000 / 南非幣 15,000 / 人民幣 6,000，淨值係以輸入交易前二個營業日之基金淨值為準，境外基金無此限制。
                            </li>
                            <li>
                                受益人申請轉換或贖回之單位數等資料以本公司之電腦紀錄為準。本投資如尚有未分配確認之受益權單位數，該受益權單位數不得要求轉換或贖回作業，於基金轉換後，受益權單位數未分配確認前，不得要求再轉換或贖回作業。
                            </li>
                            <li v-if="changeOnly">
                                若受益人轉出境外基金的原始投入投資金額基金計價幣別：美金，當受益人申請轉換入歐元計價幣別境外基金，爾後贖回轉換入單位數時，集保會以贖回基金幣別給付給客戶，亦即受益人會拿到歐元。境內基金因不同計價幣別、或與境外基金無法互轉，故受益人贖回與轉換前後均為初始申購基金計價幣別。
                            </li>
                            <li v-if="redemptionOnly">
                                各基金贖回款項入帳日分別依富蘭克林盧森堡及美國註冊基金之公開說明書及投資人須知規定，或富蘭克林華美投信之基金公開說明書規定辦理；境外基金約7~10個工作日入帳於集保結算所留存之約定買回帳戶，境內基金則依各基金略有差異，投資人可點選 <el-link type="primary" @click="$root.$data.ftftFundDescription.dialog = true;">【富蘭克林華美投信系列基金淨值計算及付款日說明】<i class="fas fa-external-link-alt"></i></el-link> 參閱各檔境內基金買回付款日資訊。買回價金匯款相關費用，由受益人負擔，集保結算所並得逕行於款項中扣除。如應付受益人款項不足支付匯款相關費用者，則依集保規定暫不予匯款，併受益人未來其他應付款項處理。
                            </li>
                            <li>
                                受益人同意授權臺灣集中保管結算所辦理境外基金申購、贖回或孳息分派等款項之結匯事宜，並同意授權臺灣集中保管結算所得與銀行議定單一之買進或賣出匯率辦理結匯作業。
                            </li>
                            <li v-if="changeOnly">
                                境外基金申購之受益權單位數計至小數點三位數時，將會以慣用的進位法計算到最接近的小數點以下三位數；境內基金申購之受益權單位數多於小數點一位數時，將會以慣用的進位法計算到最接近的小數點以下一位數；惟實際分配之單位數，受益人應以臺灣集中保管結算所計算分配為準。
                            </li>
                            <li v-if="redemptionOnly">
                                依臺灣集中保管結算所作業規定，申請贖回之原申購款項以何種幣別支付，其贖回、孳息分派等款項均以該幣別支付。
                            </li>
                            <li v-if="redemptionOnly">
                                除法令變更外，每一客戶每日電子交易之申購(境內基金與境外基金加總計算、含手續費，不含轉換交易)之上限金額為新台幣3000萬元或等值外幣。如投資金額高於作業準則規定，系統會自動拒絕該筆交易，並請投資人重新輸入投資金額。因各家銀行作業機制不同，請依各銀行規定之額度限制進行交易，以避免超過額度而造成扣款失敗。
                            </li>
                            <li>
                                擇時交易/短線交易說明：
                                <ul>
                                    <li>
                                        境外基金：依公開說明書及投資人須知之規定，本公司不鼓勵短期或是過度交易（以下稱「擇時交易」），當基金公司或股務代理機構認定投資人的交易可能妨礙基金投資組合效率管理、可能實質增加基金交易成本、管理成本或稅捐，或是在其他方面不利於基金公司及其股東權益時，會試圖限制或拒絕此類交易。故當投資人的交易行為被認定為擇時交易時，有可能暫時或是永久禁止投資人後續之申購或轉申購委託。
                                    </li>
                                    <li>
                                        境內基金：基金經理公司不歡迎受益人對基金進行短線申購贖回之交易，故持有境內基金未屆滿14日者應支付買回價金之百分之零點二之買回費用。買回費用採四捨五入計算至新台幣「元」，如不足一元則不予收取；外幣計價者(日幣除外)，採四捨五入計算至該幣別「元」以下小數點第二位。申購交易日期計算方式：以「請求買回之書面或其他約定方式到達經理公司或其銷售機構營業日或次一營業日(各基金買回淨值日須依各基金公開說明書之規定)」之日期減去「申購日」之日期，小於14日(含，以日曆日計算)者。
                                    </li>
                                </ul>
                            </li>
                            <li>
                                因網路壅塞、通訊斷線、斷電或發生天然災害或中華民國境內或境外相關主管機關限制、交易停止等不可抗力事由，或因非可歸責於富蘭克林證券投顧之因素所致之系統遲延或委託執行遲延，富蘭克林證券投顧及其主管、職員、受僱人或銷售機構，皆不負相關責任。
                            </li>
                            <li>
                                如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                            </li>
                            <li>
                                【資安宣導】提醒客戶防範網路釣魚: 本公司不會寄發電子郵件要求客戶輸入身分證號碼或帳號密碼等資訊，若您收到以本公司名義寄發的可疑郵件，難以辨識真偽時，請勿回覆、勿點擊郵件(通訊軟體、其他網站)之連結網址。<el-link type="primary" href="https://www.franklin.com.tw/Privacy/Index" target="_blank">請點此看更多「防範網路釣魚注意事項」<i class="fas fa-external-link-alt"></i></el-link>。
                            </li>
                            <li>
                                參考資訊：臺灣集中保管結算所作業規定
                                <br/>依臺灣集中保管結算所作業規定，客戶同意以扣款方式給付銷售機構買回或轉換費用時，應先完成扣款授權作業，於申請當日下午二時前辦妥買回或轉換手續，並將該筆費用款項存入於扣款行開設之款項帳戶。<span class="text-red">實際交易申請截止時間請依銷售機構規定。</span>
                            </li>
                        </ol>
                    </div>
                </section>`,
};

// ========= 基金快速搜尋 ==============================================================================================================================
const fundQuickSearch = {
    data() {
        return {
            search: {
                val: "",
                restaurants: [
                    {
                        id: "0349",
                        value: "科技基金",
                    },
                    {
                        id: "0426",
                        value: "精選收益基金—美元",
                    },
                    {
                        id: "4000",
                        value: "伊斯蘭債券基金－美元",
                    },
                    {
                        id: "4008",
                        value: "伊斯蘭債券基金－美元月配息",
                    },
                    {
                        id: "1107",
                        value: "公用事業基金",
                    },
                    {
                        id: "0812",
                        value: "美國政府基金—月配息",
                    },
                    {
                        id: "1174",
                        value: "美國政府基金",
                    },
                    {
                        id: "0813",
                        value: "新興國家固定收益基金—美元季配息",
                    },
                    {
                        id: "1049",
                        value: "新興國家固定收益基金—美元月配息",
                    },
                ],
            },
        };
    },
    template: ` <div>
                    <el-autocomplete
                        class="searchFund"
                        v-model="search.val"
                        :fetch-suggestions="querySearch"
                        placeholder="快速搜尋"
                        clearable>
                        <div slot-scope="slotProps">
                            <div class="searchFund-item">
                                <span class="searchFund-id">{{ slotProps.item.id }}</span>
                                <div class="searchFund-name">{{ slotProps.item.value }}</div>
                            </div>
                        </div>
                        <el-button slot="append" icon="fas fa-search" @click="handleClick"></el-button>
                    </el-autocomplete>
                </div>`,
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

        // 搜尋鍵對外接口
        handleClick() {
            this.$emit("childMethod");
        },
    },
};

// ========= 委託失敗訊息 ==============================================================================================================================
const delegationFailedPopUp = {
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
                type: "warning",
                title: `委託失敗`,
                message: `若您有任何問題，請於營業時間內撥打客服專線或填寫客戶意見箱與我們聯繫，造成您的不便敬請見諒。`,
                // cancelButtonClass: "el-button--secondary is-plain",
                // confirmButtonClass: "sBtn",
                confirmButtonText: "重新交易",
                cancelButtonText: "重新交易",
            })
                .then(() => {
                    // this.$router.push("/RedemptionAndChange");
                    this.$router.go(-2);
                    this.$scrollTo("body");
                })
                .catch(() => {
                    // this.$router.push("/RedemptionAndChange");
                    this.$router.go(-2);
                    this.$scrollTo("body");
                });
        },
    },
};

// ========= 選擇扣款日期 ==============================================================================================================================
const selectDate = {
    // <selectDate>上有[hasOriginal="true"]才會顯示[.original]
    // [.original] = 原本選擇過的日期
    // 要顯示錯誤訊息時[.calendar]加上[.is-error]
    props: ["hasOriginal", "disabled"],
    data() {
        return {
            active: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
            ],
            active2: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                true,
            ],
            original: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                true,
                false,
                false,
                false,
                false,
                true,
            ],
        };
    },
    template: ` <div class="calendar" :class="{'disabled' : disabled}">
                    <div class="calendar-date"
                        v-for="(item, index) in 31"
                        :key="index"
                        :class="{
                            'active': hasOriginal ? active2[index] : active[index],
                            'original' : (original[index] && hasOriginal)}
                        "
                        @click="selectDate(index)">
                        <span class="calendar-date-num">
                            {{item}}
                        </span>
                    </div>
                    <div class="calendar-errorText">
                        請選擇
                    </div>
                </div>`,
    methods: {
        selectDate(index) {
            if (!this.disabled) {
                this.$set(this.active, index, !this.active[index]);
                this.$set(this.active2, index, !this.active2[index]);
                // console.log(this.active[index]);
            }
        },
    },
};

// ========= 扣款金額加/減碼設定 ==============================================================================================================================
const plusAndMinusSetting = {
    // 要顯示錯誤訊息時[.plusAndMinusSetting]加上[.is-error]
    props: ["plusOrMinus", "read"],
    data() {
        return {
            input: ["", "", "", "", ""],
            placeholder: [0, 1000, 2000, 3000, 4000],
            tit: ["<5%(含)", "5.01%~10%(含)", "10.01%~15%(含)", "15.01%~20%(含)", ">20%"],
        };
    },
    template: ` <div class="plusAndMinusSetting">
                    <div class="plusAndMinusSetting-tit">
                        <template v-if="plusOrMinus == '+'">
                            <b>逢低加碼 <i class="el-icon-circle-plus"></i></b>
                        </template>
                        <template v-if="plusOrMinus == '-'">
                            <b>逢高減碼 <i class="el-icon-remove"></i></b>
                        </template>
                    </div>
                    <div class="plusAndMinusSetting-table">
                        <table>
                            <thead>
                                <tr>
                                    <td class="plusAndMinusSetting-table-titTd">
                                        <template v-if="plusOrMinus == '+'">
                                            基準跌幅(-)
                                        </template>
                                        <template v-if="plusOrMinus == '-'">
                                            基準漲幅(+)
                                        </template>
                                    </td>
                                    <td class="plusAndMinusSetting-table-inputTd">
                                        <template v-if="plusOrMinus == '+'">
                                            扣款金額加碼
                                        </template>
                                        <template v-if="plusOrMinus == '-'">
                                            扣款金額減碼
                                        </template>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in tit">
                                    <td>
                                        {{item}}
                                    </td>
                                    <td>
                                        <template v-if="read">
                                            <template v-if="plusOrMinus == '+'">
                                                <i class="el-icon-circle-plus-outline"></i>
                                                <b>
                                                    {{placeholder[index]}}
                                                </b>
                                                <div class="remark">
                                                    加碼後扣款金額：{{toThousands(3000 + placeholder[index])}}
                                                </div>
                                            </template>
                                            <template v-else>
                                                <i class="el-icon-remove-outline"></i>
                                                <b>
                                                    {{placeholder[index]}}
                                                </b>
                                                <div class="remark">
                                                    減碼後扣款金額：3,000
                                                </div>
                                            </template>
                                        </template>
                                        <template v-else>
                                            <div class="el-form-item is-error">
                                                <div class="el-form-item__content">
                                                    <el-input
                                                        :placeholder="placeholder[index]"
                                                        v-model="input[index]"
                                                        size="medium"
                                                        type="number"
                                                    >
                                                        <template v-slot:prepend>
                                                            <template v-if="plusOrMinus == '+'">
                                                                <i class="el-icon-circle-plus-outline"></i>
                                                            </template>
                                                            <template v-else>
                                                                <i class="el-icon-remove-outline"></i>
                                                            </template>
                                                        </template>
                                                        <template slot="append">元</template>
                                                    </el-input>
                                                    <div class="el-form-item__error">
                                                        必須為數字
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="remark">
                                                {{plusOrMinus == '+' ? '加碼' : '減碼'}}後扣款金額：{{input[index] == '' ? '3,000' : toThousands(3000 + parseInt(input[index]))}}
                                            </div>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="plusAndMinusSetting-errorText">
                        請輸入金額
                    </div>
                </div>`,
    methods: {
        toThousands(num) {
            // 錢加逗號
            return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, `$1,`);
        },
    },
};

// ========= 小型篩選 ==============================================================================================================================
const littleFilter = {
    props: ["tit"],
    template: ` <div class="littleFilter">
                    <div class="littleFilter-tit">
                        <slot name="tit">
                            {{tit}}
                        </slot>
                    </div>
                    <div class="littleFilter-input">
                        <slot name="input">
                        </slot>
                    </div>
                </div>`,
};

// ========= 明細切換鍵 ==============================================================================================================================
const toggleDetailBtn = {
    props: ["target", "beforeText", "afterText"],
    template: ` <div class="toggleDetailBtn">
                    <div class="toggleDetailBtn-btn" @click="handleClick">
                        {{target ? beforeText : afterText}}原契約明細 <i :class="target ? 'fas fa-angle-up' : 'fas fa-bars'"></i>
                    </div>
                </div>`,
    methods: {
        handleClick() {
            this.$emit("childMethod");
        },
    },
};

// ========= 起訖日選擇 ==============================================================================================================================
const rangeDate = {
    data() {
        return {
            datePicker: "",
            pickerOptions: {
                shortcuts: [
                    {
                        text: "最近一週",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近一個月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近三個月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    {
                        text: "最近六個月",
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setMonth(start.getMonth() - 6);
                            picker.$emit("pick", [start, end]);
                        },
                    },
                    // {
                    //     text: "今年至今",
                    //     onClick(picker) {
                    //         const end = new Date();
                    //         const start = new Date(new Date().getFullYear(), 0);
                    //         picker.$emit("pick", [start, end]);
                    //     },
                    // },
                ],
            },
        }
    },
    template: ` <div class="page-datePicker">
                    <el-date-picker
                        v-model="datePicker"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="查詢起日"
                        end-placeholder="查詢訖日"
                        :picker-options="pickerOptions"
                        format="yyyy/MM/dd">
                    </el-date-picker>
                </div>`,
};

// ========= 查看基金小檔案 ==============================================================================================================================
Vue.component('openFundSmallFile', {
    data() {
        return {
            openFundSmallFileTooltip: window.innerWidth > 991 ? false : true,
        };
    },
    template: ` <div class="openFundSmallFile" @click.stop="openFundSmallFile">
                    <el-tooltip
                        effect="dark"
                        placement="top-start"
                        :disabled="openFundSmallFileTooltip"
                    >
                        <div slot="content">
                            查看基金小檔案
                        </div>
                        <i class="el-icon-view"></i>
                    </el-tooltip>
                </div>`,
    methods: {
        openFundSmallFile() {
            content.fundSmallFile.show = true;
        },
    },
});

// ========= 每月對帳單查詢 注意事項 ==============================================================================================================================
const monthlyStatementNotice = {
    template: ` <section class="notice">
                    <h4 class="tit-type2" title="注意事項">
                        注意事項
                    </h4>
                    <div class="notice-content">
                        <ol>
                            <slot name="otherNotice"></slot>
                            <li>
                                本功能僅提供近六個月之境外基金交易對帳單查詢，最新月份的電子對帳單將於台灣集中保管結算所回報當月交易明細資料，完成結算後開始寄發。
                            </li>
                            <li>
                                當月配息資訊：包含所有交易，如單筆、定期定額與智能理財專區。
                            </li>
                            <li>
                                本表之參考市值、報酬率及損益計算僅供參考。所有基金交易異動之投資成本計算，皆以本公司公告之淨值、結存單位數為依據，且在資料期間內已完成交易程序者，所列之交易明細若有誤載或疏漏，應以本公司帳載或臺灣集中保管結算所電腦紀錄為準，歡迎您至 <el-link type="primary" icon="fas fa-external-link-alt" href="http://www.tdcc.com.tw/" target="_blank" title="臺灣集中保管結算所">臺灣集中保管結算所</el-link> 網站查詢。
                            </li>
                            <li>
                                境內基金短線費用：依據富蘭克林華美投信全系列基金短線交易規定，持有境內基金未屆滿14日(含)者，應支付買回價金之百分之零點二(0.2%)之買回費用；買回費用計算至新台幣「元」，不足壹元者不予收取，滿壹元以上者四捨五入。外幣 計價者 (日幣除外 ) ，採四捨五入計算至該幣別「元」以下小數點第二位。
                            </li>
                            <li>
                                交易明細之轉換項目，「轉出」欄位資訊係以計價幣別資料提供之。
                            </li>
                            <li>
                                上述基金結餘參考淨值為每月最後一個營業日公佈之淨值資訊。
                            </li>
                            <li>
                                如有任何疑問或建議，可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link> 或於營業日9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務！
                            </li>
                            <li>
                                不合作帳戶規則: 基金代碼後方加上#01(eg. 101#01)
                                <ul>
                                    <li>
                                        轉入基金為基金代碼後方加上#01(例如:101#01) ，此為於三年到期期限內未繳回美國稅務Form W-8，富蘭克林證券投顧依FATCA規定將投資人本人於富蘭克林證券投顧之美國註冊基金轉列為不合作帳戶(Recalcitrant Account)。
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
                </section>`,
};

// ========= 顯示表單錯誤訊息 ==============================================================================================================================
Vue.component('showErrorMessage_1', {
    // props: ['formName'],
    template: ` <div style="position: fixed;
                        bottom: 0px;
                        right: 0px;
                        background: #000;
                        border-radius: 5px;
                        color: #fff;
                        font-size: 12px;
                        padding: 0px 5px;
                        cursor: pointer;">
                    顯示表單錯誤訊息
                </div>`,
});
const showErrorMessage_2 = {
    methods: {
        submitForm(formName) {
            // console.log(this.$route.path)
            if ( this.$route.path == '/Sip/Subscribe/Step1' ) {
                document.querySelector('.calendar').classList.add('is-error'); // "選擇扣款日期"添加顯示錯誤訊息樣式
                document.querySelectorAll('.plusAndMinusSetting').forEach((element) => element.classList.add('is-error')); // "扣款金額加/減碼設定"添加顯示錯誤訊息樣式
            };
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
/* <showErrorMessage @click.native="submitForm('form')"></showErrorMessage> */

// ========= 智能定期不定額-加減碼機制 ==============================================================================================================================
Vue.component('smartRSP_mechanism', {
    template: ` <div class="tradingProcess-card-content">
                    <h2 title="智能定期不定額-加減碼機制" class="tit-type2">
                        智能定期不定額-加減碼機制
                        <el-button type="primary" round plain class="sBtn">點我看更多</el-button>
                    </h2>
                    <ul>
                        <li>
                            <b>富蘭克林獨家【智能定期不定額】</b>是運用演算法，智能幫您算出一組最適的加減碼金額，並在<b>您所設定的扣款金額上下限區間</b>內，於約定扣款日幫您進行扣款。
                        </li>
                        <li>
                            當基金淨值為<b>上行</b>趨勢：淨值高於均線時將少量加碼扣款金額、淨值低於均線時將大量加碼扣款金額。
                        </li>
                        <li>
                            當基金淨值為<b>下行</b>趨勢：淨值高於均線時將大量減碼扣款金額、淨值低於均線時將少量減碼扣款金額。
                        </li>
                    </ul>
                </div>`,
});

// ========= 智能定期不定額-推薦基金 ==============================================================================================================================
Vue.component('smartRSP_recommendedFund', {
    props: ['titWidth'],
    template: ` <div class="tradingProcess-card-content">
                    <el-alert
                        class="borderStyle"
                        type="warning"
                        show-icon
                        :closable="false"
                    >
                        <template v-slot:title>
                            溫馨提醒
                        </template>
                        <slot name="description">
                            建議您可申購另外一檔走勢上行的B基金來優化您的投資體質喔！
                        </slot>
                    </el-alert>

                    <div class="tradingProcess-card-content-item-area">
                        <div class="tradingProcess-card-content-item columnSpan">
                            <div class="tradingProcess-card-content-item-tit" :style="{width: titWidth,}">
                                推薦基金
                            </div>
                            <div class="tradingProcess-card-content-item-content">
                                <el-row :gutter="20">
                                    <el-col :md="12" class="margin-bottom-md-15">
                                        <el-card shadow="never" class="recommendedFund-item">
                                            <div class="fundList-header" id="fundListHeader">
                                                <div class="fundList-header-content">
                                                    <div class="fundList-fundCode">
                                                        4000
                                                    </div>
                                                    <div class="fundList-transactionMethod">
                                                        目前所選基金
                                                    </div>
                                                </div>
                                                <h4 class="fundList-fundName" title="伊斯蘭債券基金－美元(本基金之配息來源可能為本金)">
                                                    <openFundSmallFile></openFundSmallFile>
                                                    伊斯蘭債券基金－美元(本基金之配息來源可能為本金)
                                                </h4>
                                            </div>
                                            <div class="fundSmallFile-chart" id="originalFund"></div>
                                        </el-card>
                                    </el-col>
                                    <el-col :md="12">
                                        <el-card shadow="always" class="recommendedFund-item recommendedType">
                                            <div class="fundList-header" id="fundListHeader">
                                                <div class="fundList-header-content">
                                                    <div class="fundList-fundCode">
                                                        101
                                                    </div>
                                                    <div class="fundList-transactionMethod info">
                                                        推薦基金
                                                    </div>
                                                </div>
                                                <h4 class="fundList-fundName" title="富蘭克林坦伯頓成長基金(本基金之配息來源可能為本金)">
                                                    <openFundSmallFile></openFundSmallFile>
                                                    富蘭克林坦伯頓成長基金(本基金之配息來源可能為本金)
                                                </h4>
                                            </div>
                                            <div class="fundSmallFile-chart" id="recommendedFund"></div>
                                        </el-card>
                                    </el-col>
                                </el-row>
                                <div class="margin-top-20 text-center">
                                    <el-button round type="primary" @click="$router.push('/Sip/Subscribe/Step1'); $scrollTo('body')">
                                        我要申購推薦基金
                                    </el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`,
    mounted() {
        this.fundSmallFileTab('originalFund', 761);
        this.fundSmallFileTab('recommendedFund', 4000);
    },
    methods: {
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
            return this.setPromise("GET", 'js/NavData_' + fundID + '.json', data);
        },
        async setLineChart(tagId, fundID) {
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
                    this.trendChart(tagId, valueData);
                });
            } catch (err) {
                console.log("getFundValue-err:", err);
            }
        },

        // highchart樣式設定
        trendChart(tagId, data) {
            Highcharts.setOptions({
                lang: {
                    rangeSelectorZoom: "",
                    // rangeSelectorFrom: "",
                    // rangeSelectorTo: "~",
                },
            });
            Highcharts.stockChart(tagId, {
                chart: {
                    panning: false,
                    height: this.$root.$data.windowWidth > 767 ? 250 : 150,
                    style: {
                        fontFamily: 'Arial, "Noto Sans TC", sans-serif',
                    },
                },
                credits: {
                    enabled: false,
                },
                navigator: {
                    enabled: false,
                },
                scrollbar: {
                    enabled: false,
                },
                rangeSelector: {
                    allButtonsEnabled: true,
                    buttonSpacing: 10,
                    selected: 0,
                    inputEnabled: false, // 不顯示日期輸入框
                    buttons: [
                        {
                            type: "day",
                            count: 60,
                            text: "60天",
                        },
                    ],
                    buttonTheme: {
                        display: 'none' // 不顯示按鈕
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
                    // min: 11,
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
                        type: "line",
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
        fundSmallFileTab(tagId, fundID, tab, event) {
            this.setLineChart(tagId, fundID);
        },
    },
});

// ========= 智能定期不定額-說明 ==============================================================================================================================
Vue.component("whatIsSmartRSP", {
    template: ` <el-popover
                    placement="top-start"
                    width="300"
                    :trigger="$root.$data.windowWidth > 991 ? 'hover' : 'click'">
                    <template v-slot="content">
                        <h2 title="智能定期不定額-加減碼機制" class="tit-type2">
                            智能定期不定額-加減碼機制
                        </h2>
                        <ul>
                            <li>
                                <b>富蘭克林獨家【智能定期不定額】</b>是運用演算法，智能幫您算出一組最適的加減碼金額。
                            </li>
                            <li>
                                並在<b>您所設定的扣款金額上下限區間</b>內，於約定扣款日幫您進行扣款。
                            </li>
                            <li>
                                當基金淨值為<b class="text-blue">上行</b>趨勢：淨值高於均線時將少量<b>加碼</b>扣款金額、淨值低於均線時將大量<b>加碼</b>扣款金額(最多加碼至：基準扣款金額*180%)。
                            </li>
                            <li>
                                當基金淨值為<b class="text-blue">下行</b>趨勢：淨值高於均線時將大量<b>減碼</b>扣款金額、淨值低於均線時將少量<b>減碼</b>扣款金額。(最多減碼至：基準扣款金額<span style="display: inline-block;">*20%</span>)。
                            </li>
                        </ul>
                        <el-link type="primary" class="margin-bottom-20" @click="$root.$data.smartRSP_mechanism = true">點我看更多 <i class="fas fa-external-link-alt"></i></el-link>
                    </template>
                    <div class="calculationFormula" slot="reference">
                        <i class="fas fa-exclamation-circle"></i> 什麼是【智能定期不定額】
                    </div>
                </el-popover>`,
});

// ========= ie遮罩 ==============================================================================================================================
Vue.component('ieMask', {
    template: ` <div class="ieMask" v-if="$root.getIEVersion() != 'edge' && $root.getIEVersion() != -1">
                    <div class="ieMask-bg"></div>
                    <div class="ieMask-content">
                        <div class="container">
                            <p>
                                親愛的客戶 您好 因微軟已停止IE版本瀏覽器維護，建議您升級您的IE瀏覽器，或使用下列其他瀏覽器軟體，以獲得最佳 瀏覽體驗。
                            </p>
                            <el-divider></el-divider>
                            <el-row :gutter="20">
                                <el-col :sm="8">
                                    <div class="ieMask-downloadItem">
                                        <i class="fab fa-edge"></i>
                                        <div class="ieMask-downloadItem-tit">
                                            微軟Edge瀏覽器
                                        </div>
                                        <el-button type="white" round class="sBtn" @click="this.window.open('https://www.microsoft.com/zh-tw/edge', '_blank')">立即下載</el-button>
                                    </div>
                                </el-col>
                                <el-col :sm="8">
                                    <div class="ieMask-downloadItem">
                                        <i class="fab fa-chrome"></i>
                                        <div class="ieMask-downloadItem-tit">
                                            Google Chrome瀏覽器
                                        </div>
                                        <el-button type="white" round class="sBtn" @click="this.window.open('https://www.google.com/intl/zh-TW/chrome/', '_blank')">立即下載</el-button>
                                    </div>
                                </el-col>
                                <el-col :sm="8">
                                    <div class="ieMask-downloadItem">
                                        <i class="fab fa-firefox"></i>
                                        <div class="ieMask-downloadItem-tit">
                                            Mozilla Firefox瀏覽器
                                        </div>
                                        <el-button type="white" round class="sBtn" @click="this.window.open('https://www.mozilla.org/zh-TW/firefox/new/', '_blank')">立即下載</el-button>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>`,
});