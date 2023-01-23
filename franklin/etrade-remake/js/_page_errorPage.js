// ========= 404 & 系統錯誤 ==============================================================================================================================
const Error404 = {
    data() {
        return {
            
        };
    },
    template: ` <div class="errorPage">
                    <img src="images/errorPageImg-1.png" alt="" class="errorPage-img">
                    <div class="page-tit errorPage-tit">
                        <b>親愛的投資朋友</b>
                        <h1 title="很抱歉，您所點選的網頁連結已不存在">
                            很抱歉，<br class="hidden-sm-and-up"/>您所點選的網頁連結已不存在
                            <!--很抱歉，系統連線發生異常，<br class="hidden-sm-and-up"/>請您稍後再試-->
                        </h1>
                    </div>
                    <div class="page-changeDisplayMethod">
                        <el-button
                            round
                            class="sBtn"
                            type="primary"
                            @click="$router.push('/')">
                            返回首頁
                        </el-button>
                        <el-button
                            round
                            class="sBtn"
                            plain
                            type="primary">
                            常見問題
                        </el-button>
                    </div>
                    <div class="errorPage-text">
                        <p>
                            感謝您對富蘭克林 國民e帳戶的支持。若您在使用上有任何問題，<br class="hidden-sm-and-down"/>可透過 <el-link type="primary" icon="far fa-envelope" href="mailto:service@franklin.com.tw" title="客服信箱">客服信箱</el-link>、或於週一至週五9：00～18：00撥打免付費客服專線，將有客服專員竭誠為您服務，謝謝!
                        </p>
                    </div>
                </div>`,
};

// ========= 維護中 ==============================================================================================================================
const InMaintenance = {
    data() {
        return {
            
        };
    },
    template: ` <div class="errorPage">
                    <img src="images/errorPageImg-2.png" alt="" class="errorPage-img">
                    <div class="page-tit errorPage-tit">
                        <h1 title="系統停機公告">
                            系統停機公告
                        </h1>
                    </div>
                    <div class="errorPage-text">
                        <p class="text-center">
                            本系統於 <span>2021/02/04 02：04</span> ~ <span>2022/02/04 02：04</span> 進行系統維護
                            <br/>不便之處敬請見諒
                        </p>
                    </div>
                    <div class="page-changeDisplayMethod">
                        <el-button
                            round
                            plain
                            class="sBtn"
                            type="primary">
                            常見問題
                        </el-button>
                    </div>
                </div>`,
    created() {
        this.$root.notLoggedIn();
    },
    beforeDestroy() {
        this.$root.alreadyLoggedIn();
    },
};