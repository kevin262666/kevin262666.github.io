<script lang="ts" setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import OrderSet_SelectId from '../components/OrderSet_SelectId.vue'
import OrderSet_SelectStock from '../components/OrderSet_SelectStock.vue'
import kgiTimePicker from '../components/kgiTimePicker.vue'
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
      ]

const time = ref()

const radio1 = ref('')

const num2 = ref(),
      num3 = ref()

const date1 = ref('')

const confirmDialogVisible = ref(false),
      settingSuccessful = ref(false)

</script>

<template>
  <OrderSet_SelectId></OrderSet_SelectId>
  <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>

  <section class="block">
    <h2 class="tit-type1" title="下單設定" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      下單設定
    </h2>
    <div class="setConditions" :class="{'buyType': radio1=='買進', 'sellType': radio1=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>下單日期</b>
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
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>下單時間</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <!-- <el-input v-model="time" placeholder="請選擇時間" type="time" step="1" /> -->
                  <kgiTimePicker></kgiTimePicker>
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
                <el-col :md="10" :span="14">
                  <el-select v-model="value1" placeholder="請選擇">
                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio1" class="buyOrSell">
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
  <section class="block btnArea">
    <el-button type="warning" @click="confirmDialogVisible = true">新增</el-button>
  </section>

  <el-dialog
    v-model="confirmDialogVisible"
    title="確認-限時進出"
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
            下單日期時間
          </div>
          <div class="confirmDialog-infoList-content">
            2022/04/11 上午08:27
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            買進 / 現股 / ROD / 5張 / 市價
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
            將於<b class="text-black">2022/04/11 上午08:27</b>，送出<b class="text-black">台積電2330</b>以<b class="text-black">市價買進5張</b>
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