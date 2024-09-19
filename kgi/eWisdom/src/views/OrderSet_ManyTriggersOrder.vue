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
      value2 = ref('1'),
      options1 = [
        {
          value: '1',
          label: '成交價',
        },
      ],
      value3 = ref('1'),
      options3 = [
        {
          value: '1',
          label: '長效監控',
        },
      ],
      value4 = ref('1'),
      options4 = [
        {
          value: '1',
          label: '每日觸發一次直到監控結束',
        },
      ],
      value5 = ref('1'),
      options5 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value6 = ref('1'),
      options6 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value7 = ref('1'),
      options7 = [
        {
          value: '1',
          label: '限價',
        },
      ]

const radio1 = ref('大於等於'),
      radio2 = ref('大於等於'),
      radio3 = ref('同時符合'),
      radio4 = ref('')

const num1 = ref(),
      num2 = ref(),
      num3 = ref(),
      num4 = ref()

const date1 = ref('')

const switch1 = ref(true)

const checkboxGroup1 = ref(['是，自動拆單'])

const confirmDialogVisible = ref(false),
      settingSuccessful = ref(false)

</script>

<template>
  <OrderSet_SelectId></OrderSet_SelectId>
  <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>

  <section class="block">
    <h2 class="tit-type1" title="觸發設定">
      觸發設定
    </h2>
    <div class="setConditions">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-tit">
              <b>判斷條件</b>
              <br v-if="store.state.windowWidth < 992"/>
              <span class="remark">(最多9項)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="5" :span="24">
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
                <el-col :md="10" :span="24">
                  <div class="priceAndAddStyle">
                    <el-input-number v-model="num1" :min="1" :step="100" :max="10000000" placeholder="價格" />
                    <el-button round>
                      <i class="fa-solid fa-minus"></i>
                    </el-button>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="5" :span="24">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio2">
                    <el-radio-button label="大於等於" />
                    <el-radio-button label="小於等於" />
                  </el-radio-group>
                </el-col>
                <el-col :md="10" :span="24">
                  <div class="priceAndAddStyle">
                    <el-input-number v-model="num2" :min="1" :step="100" :max="10000000" placeholder="價格" />
                    <el-button round type="primary">
                      <i class="fa-solid fa-plus"></i>
                    </el-button>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>以上條件</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-radio-group v-model="radio3">
                    <el-radio-button label="同時符合" />
                    <el-radio-button label="擇一符合" />
                  </el-radio-group>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>監控時段</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-select v-model="value3" placeholder="請選擇">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
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
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>停止監控條件</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-select v-model="value4" placeholder="請選擇">
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="16" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-tit">
              <b>是否帶下單</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <div class="stitchBtnAndText">
                    <el-switch v-model="switch1" id="switch1"/>
                    <label for="switch1">
                      當監控商品符合觸發條件時，自動送出以下委託單。
                    </label>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>

  <section class="block" v-if="switch1">
    <h2 class="tit-type1" title="下單設定" :class="{'buyType': radio4=='買進', 'sellType': radio4=='賣出'}">
      下單設定
    </h2>
    <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
    <div class="setConditions" :class="{'buyType': radio4=='買進', 'sellType': radio4=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="14">
                  <el-select v-model="value5" placeholder="請選擇">
                    <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
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
                  <el-select v-model="value6" placeholder="請選擇">
                    <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num3" :min="1" :step="1" placeholder="請輸入張數" />
                </el-col>
              </el-row>
            </div>
          </div>
          <el-alert type="error" :closable="false" class="resetAlert">
            <template #title>
              <div class="resetAlert-icon">
                <el-icon><InfoFilled /></el-icon>
              </div>
              <div class="resetAlert-content">
                張數大於499張
                <el-checkbox-group v-model="checkboxGroup1" size="small">
                  <el-checkbox label="是，自動拆單" border />
                </el-checkbox-group>
              </div>
            </template>
          </el-alert>
        </el-col>
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
                  <el-input-number v-model="num4" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
          <el-alert type="error" :closable="false" class="resetAlert">
            <template #title>
              <div class="resetAlert-icon">
                <el-icon><InfoFilled /></el-icon>
              </div>
              <div class="resetAlert-content">
                此價格不在升降單位範圍
              </div>
            </template>
          </el-alert>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block btnArea">
    <el-button type="warning" @click="confirmDialogVisible = true">新增</el-button>
  </section>

  <el-dialog
    v-model="confirmDialogVisible"
    title="確認-多條件觸價"
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
          <div class="confirmDialog-infoList-tit">
            觸發條件
          </div>
          <div class="confirmDialog-infoList-content">
            <span>成交價 ≥ 525.00</span> | <span>總量 ≥ 14,000</span>
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            以上條件
          </div>
          <div class="confirmDialog-infoList-content">
            同時符合時觸發
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            停止監控條件
          </div>
          <div class="confirmDialog-infoList-content">
            每日觸發一次直到監控結束
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            是否帶下單
          </div>
          <div class="confirmDialog-infoList-content">
            進行委託下單
          </div>
        </li>
        <li>
          <i class="fa-solid fa-angles-down"></i>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            委託下單商品
          </div>
          <div class="confirmDialog-infoList-content">
            鴻海 2317
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單方式
          </div>
          <div class="confirmDialog-infoList-content">
            <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>10張</span> / <span>限價110元</span>
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
            當監控<b class="text-black">台積電2330成交價>=525 l 總量>=14000</b>，同時符合，則送出<b class="text-black">鴻海2317</b>以<b class="text-black">限價110元賣出10張</b>
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