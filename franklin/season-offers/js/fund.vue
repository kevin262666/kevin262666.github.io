<template>
    <div class="featured-fund">
        <img :src="'images/fundImg-' + fundCode + '.jpg'" :alt="fundName + fundWarning" class="featured-fund-img">
        <div class="featured-fund-tag">
            {{ fundType }}
        </div>
        <h3 class="featured-fund-name" :title="fundName + fundWarning">
            {{ fundName }}
            <span class="text-blue">
                {{ fundWarning }}
            </span>
        </h3>
        <div class="featured-fund-name-remark">{{ fundNameRemark }}</div>
        <p v-html="fundText"></p>
        <div class="btnArea twoBtn">
            <div class="btn">
                <a href="javascript:void(0)" title="了解更多" @click="toggleModal('fund_' + fundCode)">
                    了解更多 <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
            <div class="btn type2">
                <sice-link title="立即申購" target="_blank"
                    :web-href="'https://etrade.franklin.com.tw/ec/trade/lumpSum/step?fundCode=' + fundCode"
                    :app-href="'twsice://fundDetail?' + fundCode"
                >
                    立即申購 <i class="fas fa-angle-right"></i>
                </sice-link>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ['fundType', 'fundName', 'fundWarning', 'fundNameRemark', 'fundText', 'fundCode', 'toggleModal'],
    data: function() {
        return {
            
        }
    }
}
</script>