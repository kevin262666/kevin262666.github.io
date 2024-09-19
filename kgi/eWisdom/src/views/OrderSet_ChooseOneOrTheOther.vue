<script lang="ts" setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import OrderSet_SelectId from '../components/OrderSet_SelectId.vue'
import OrderSet_SelectStock from '../components/OrderSet_SelectStock.vue'
import { useStore } from 'vuex';
const store = useStore();
import { useRouter } from 'vue-router';
const router = useRouter();

const value1 = ref('1'),
      options1 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value2 = ref('1'),
      options2 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value3 = ref('1'),
      options3 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value4 = ref('1')

const radio1 = ref('賣出')

const num1 = ref(),
      num2 = ref(),
      num3 = ref(),
      num4 = ref(),
      num5 = ref(),
      num6 = ref()

const date1 = ref('')

const confirmDialogVisible = ref(false),
      settingSuccessful = ref(false)

</script>

<template>
  <OrderSet_SelectId></OrderSet_SelectId>
  <OrderSet_SelectStock :aleradySelect="true" :selectAllStock="true"></OrderSet_SelectStock>

  <section class="block">
    <h2 class="tit-type1" title="設定停利觸發與下單條件" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      設定<b>停利</b>觸發與下單條件
    </h2>
    <div class="setConditions" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>當成交價<br v-if="store.state.windowWidth < 992"/><span class="text-red">大於等於</span></b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-input-number v-model="num1" :min="1" :step="1" placeholder="價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24" :class="{'text-center': store.state.windowWidth < 992}">
          則送出
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="14">
                  <el-select v-model="value1" placeholder="請選擇">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio1" class="buyOrSell">
                    <el-radio-button label="買進" disabled />
                    <el-radio-button label="賣出" />
                  </el-radio-group>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="10">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num2" :min="1" :step="1" placeholder="請輸入張數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="10">
                  <el-select v-model="value3" placeholder="請選擇">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num3" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block text-center">
    - 或 -
  </section>
  <section class="block">
    <h2 class="tit-type1" title="設定停損觸發與下單條件" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      設定<b>停損</b>觸發與下單條件
    </h2>
    <div class="setConditions" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>當成交價<br v-if="store.state.windowWidth < 992"/><span class="text-red">小於等於</span></b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-input-number v-model="num4" :min="1" :step="1" placeholder="價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24" :class="{'text-center': store.state.windowWidth < 992}">
          則送出
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="14">
                  <el-select v-model="value1" placeholder="請選擇">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio1" class="buyOrSell">
                    <el-radio-button label="買進" disabled />
                    <el-radio-button label="賣出" />
                  </el-radio-group>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="10">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num5" :min="1" :step="1" placeholder="請輸入張數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="10">
                  <el-select v-model="value4" placeholder="請選擇">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num6" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block">
    <div class="setConditions">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>監控截止日</b>
              <br v-if="store.state.windowWidth < 992"/>
              <span class="remark">(限近30日)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-date-picker
                    v-model="date1"
                    type="date"
                    placeholder="請選擇日期"
                    :editable="false"
                  />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block btnArea">
    <el-button type="warning" @click="confirmDialogVisible = true">新增</el-button>
  </section>

  <el-dialog
    v-model="confirmDialogVisible"
    title="確認-二擇一出場"
    :width="store.state.dialogWidth"
  >
    <div>
      <ul class="confirmDialog-infoList">
        <li>
          <div class="confirmDialog-infoList-tit">
            帳號
          </div>
          <div class="confirmDialog-infoList-content">
            <b>920F-1234567 王小明</b>
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            監控標的
          </div>
          <div class="confirmDialog-infoList-content">
            台積電 2330
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            監控時間
          </div>
          <div class="confirmDialog-infoList-content">
            長效監控至2022/04/11
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit text-orange">
            停利條件
          </div>
          <div class="confirmDialog-infoList-content text-orange">
            成交價 ≥ 30元
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>限價35元</span>
          </div>
        </li>
        <li>
          <div class="text-center">
            － 或 －
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit text-green">
            停損條件
          </div>
          <div class="confirmDialog-infoList-content text-green">
            成交價 ≤ 28元
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
          </div>
        </li>
        <li>
          <div class="text-center text-orange">
            停利、停損任一條件符合即委託，<br/>並停止監控另一個條件。
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            設定時間
          </div>
          <div class="confirmDialog-infoList-content">
            2022/04/01 下午01:02:30
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            序號
          </div>
          <div class="confirmDialog-infoList-content">
            00015
          </div>
        </li>
      </ul>
      <el-alert type="info" :closable="false" class="resetAlert">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            在<b class="text-black">2022/04/11</b>前，當<b class="text-black">中鋼2002成交價≥30</b>，即以<b class="text-black">限價35元</b>停利賣出<b class="text-black">5張</b>；<b class="text-black">或</b> 當<b class="text-black">成交價≤28元</b>，即以<b class="text-black">市價</b>停損賣出<b class="text-black">5張</b>。
          </div>
        </template>
      </el-alert>
      <el-alert type="error" :closable="false" class="resetAlert margin-bottom-0">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            本商品無漲跌幅限制股票，請留意交易投資之風險。
          </div>
        </template>
      </el-alert>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="warning" @click="confirmDialogVisible = false; settingSuccessful = true">
          確認
        </el-button>
        <el-button @click="confirmDialogVisible = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog
    v-model="settingSuccessful"
    :width="store.state.dialogWidth"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
  >
    <template #header>
      <div class="text-center text-green tit-sm">
        <i class="fa-solid fa-circle-check"></i> 監控設定成功
      </div>
    </template>
    <div>
      觸發下單不等於委託成功，建議您收到觸發通知後，於電子交易平台的「委託回報」或透過營業員確認委託與成交狀況。
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="settingSuccessful = false; router.push('/Securities/OrderSet/ManyTriggersOrder#main');">
          確認
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>