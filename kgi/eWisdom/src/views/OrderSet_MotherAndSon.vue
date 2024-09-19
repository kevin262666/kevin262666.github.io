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
          label: '成交價',
        },
      ],
      value2 = ref('1'),
      options2 = [
        {
          value: '1',
          label: '成交價',
        },
      ],
      value3 = ref('1'),
      options3 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value4 = ref('1'),
      options4 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value5 = ref('1'),
      options5 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value6 = ref('1'),
      options6 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value7 = ref('1'),
      options7 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value8 = ref('1'),
      options8 = [
        {
          value: '1',
          label: '限價',
        },
      ]

const radio1 = ref('大於等於'),
      radio2 = ref('大於等於'),
      radio3 = ref(''),
      radio4 = ref('')

const num1 = ref(),
      num2 = ref(1),
      num3 = ref(),
      num4 = ref(1),
      num5 = ref()

const date1 = ref('')

const switch1 = ref(true)

const confirmDialogVisible = ref(false),
      settingSuccessful = ref(false)

</script>

<template>
  <OrderSet_SelectId></OrderSet_SelectId>

  <section class="block">
    <h2 class="tit-type1" title="設定母單" :class="{'buyType': radio3=='買進', 'sellType': radio3=='賣出'}">
      設定母單
    </h2>
    <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
    <div class="setConditions" :class="{'buyType': radio3=='買進', 'sellType': radio3=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter" class="margin-top-5">
        <el-col :span="24" :class="{'text-center': store.state.windowWidth < 992}">
          當
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="5" :span="9">
                  <el-select v-model="value1" placeholder="請選擇">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio1">
                    <el-radio-button label="大於等於" />
                    <el-radio-button label="小於等於" />
                  </el-radio-group>
                </el-col>
                <el-col :md="8" :span="24">
                  <el-input-number v-model="num1" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                  <el-select v-model="value3" placeholder="請選擇">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio3" class="buyOrSell">
                    <el-radio-button label="買進" />
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
                  <el-select v-model="value4" placeholder="請選擇">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value" />
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
                  <el-select v-model="value5" placeholder="請選擇">
                    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
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
  <section class="block text-center">
    當母單觸發後進行委託，等到母單當日完全成交時，才再啟動子單
  </section>
  <section class="block" v-if="switch1">
    <h2 class="tit-type1" title="設定子單" :class="{'buyType': radio4=='買進', 'sellType': radio4=='賣出'}">
      設定子單
    </h2>
    <el-alert type="error" :closable="false" class="resetAlert margin-top-0 margin-bottom-0">
      <template #title>
        <div class="resetAlert-icon">
          <el-icon><InfoFilled /></el-icon>
        </div>
        <div class="resetAlert-content">
          子單僅限觸發當盤有效，若啟動後當日未觸發，隔日即不再執行。
        </div>
      </template>
    </el-alert>
    <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
    <div class="setConditions" :class="{'buyType': radio4=='買進', 'sellType': radio4=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter" class="margin-top-5">
        <el-col :span="24" :class="{'text-center': store.state.windowWidth < 992}">
          當
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="5" :span="9">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio2">
                    <el-radio-button label="大於等於" />
                    <el-radio-button label="小於等於" />
                  </el-radio-group>
                </el-col>
                <el-col :md="8" :span="24">
                  <el-input-number v-model="num1" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                  <el-select v-model="value6" placeholder="請選擇">
                    <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio4" class="buyOrSell">
                    <el-radio-button label="買進" />
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
                  <el-select v-model="value7" placeholder="請選擇">
                    <el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num4" :min="1" :step="1" placeholder="請輸入張數" />
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
                  <el-select v-model="value8" placeholder="請選擇">
                    <el-option v-for="item in options8" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num5" :min="1" placeholder="請輸入價格" />
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
    title="確認-母子單"
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
          <div class="confirmDialog-infoList-tit text-blue">
            <b>設定母單</b>
          </div>
          <div class="confirmDialog-infoList-content">
            &nbsp;
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            監控條件
          </div>
          <div class="confirmDialog-infoList-content">
            聯電2303 成交價 ≥ 30元
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
          <div class="confirmDialog-infoList-tit">
            監控截止日
          </div>
          <div class="confirmDialog-infoList-content">
            至2022/04/11止
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit text-blue">
            <b>設定子單</b>
          </div>
          <div class="confirmDialog-infoList-content text-orange">
            *當母單當日完全成交時，啟動子單
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            監控條件
          </div>
          <div class="confirmDialog-infoList-content">
            台積電2330 成交價 ≥ 530元
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>10張</span> / <span>限價535元</span>
          </div>
        </li>
      </ul>
      <el-alert type="info" :closable="false" class="resetAlert">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            在<b class="text-black">2022/04/11</b>前，當母單<b class="text-black">聯電2303成交價≥30</b>，以<b class="text-black">限價35元</b>買進<b class="text-black">5張</b>至<b class="text-black">當日完全成交時</b>，即啟動子單，當<b class="text-black">台積電2330成交價≥530</b>，以<b class="text-black">限價535元</b>買進<b class="text-black">10張</b>。
          </div>
        </template>
      </el-alert>
      <el-alert type="error" :closable="false" class="resetAlert margin-bottom-0">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            設定值超過當日漲跌幅
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