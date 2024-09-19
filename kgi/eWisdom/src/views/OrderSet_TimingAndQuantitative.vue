<script lang="ts" setup>
import { ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import OrderSet_SelectId from '../components/OrderSet_SelectId.vue'
import OrderSet_SelectStock from '../components/OrderSet_SelectStock.vue'
import kgiTimePicker from '../components/kgiTimePicker.vue'
import { ElCollapseTransition } from 'element-plus'
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

const radio1 = ref('')

const num1 = ref(),
      num2 = ref(),
      num3 = ref(),
      num4 = ref('10'),
      num5 = ref('60')

const confirmDialogVisible = ref(false),
      confirmDialogVisible2 = ref(false),
      settingSuccessful = ref(false)

const calculateToggle = ref(true)

const tableData = [
  {
    date: '1',
    time: '12:00:00',
    qty: '60',
  },
  {
    date: '2',
    time: '12:00:00',
    qty: '60',
  },
  {
    date: '3',
    time: '12:00:00',
    qty: '60',
  },
  {
    date: '4',
    time: '12:00:00',
    qty: '60',
  },
]

const tableData2 = [
  {
    date: '1',
    time: '12:40:00',
    qty: '10',
  },
  {
    date: '2',
    time: '12:41:00',
    qty: '10',
  },
  {
    date: '3',
    time: '12:42:00',
    qty: '10',
  },
  {
    date: '4',
    time: '12:43:00',
    qty: '10',
  },
  {
    date: '5',
    time: '12:44:00',
    qty: '10',
  },
  {
    date: '6',
    time: '12:45:00',
    qty: '10',
  },
  {
    date: '7',
    time: '12:46:00',
    qty: '10',
  },
  {
    date: '8',
    time: '12:47:00',
    qty: '10',
  },
  {
    date: '9',
    time: '12:48:00',
    qty: '10',
  },
  {
    date: '10',
    time: '12:49:00',
    qty: '10',
  },
]

const timedOrQuantitative = ref('time');

const startTime = ref(''),
      endTime = ref('')
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
                  <el-input-number v-model="num2" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>總委託量</b><span class="remark">(張)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="15">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :md="14" :span="24">
                  <el-input-number v-model="num1" :min="1" :step="1" placeholder="請輸入張數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block">
    <h2 class="tit-type1" title="下單設定">
      出單設定
    </h2>
    <div class="securitiesOrFutures">
      <div class="container">
        <ul class="switchBtn">
          <li :class="{'active': timedOrQuantitative == 'time'}" @click="timedOrQuantitative = 'time'">
            <a href="javascript:void(0)" title="定時">
              定時
            </a>
          </li>
          <li :class="{'active': timedOrQuantitative == 'quantitative'}" @click="timedOrQuantitative = 'quantitative'">
            <a href="javascript:void(0)" title="定量">
              定量
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="setConditions" v-if="timedOrQuantitative == 'time'">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>開始時間</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <!-- <el-input v-model="startTime" placeholder="請選擇開始時間" type="time" step="1" /> -->
                  <kgiTimePicker></kgiTimePicker>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>結束時間</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <!-- <el-input v-model="endTime" placeholder="請選擇結束時間" type="time" step="1" /> -->
                  <kgiTimePicker></kgiTimePicker>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-tit">
              <b>出單間隔</b><span class="remark">(秒)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-input-number v-model="num3" :min="1" placeholder="請輸入秒數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="setConditions" v-else>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>開始時間</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <!-- <el-input v-model="startTime" placeholder="請選擇開始時間" type="time" step="1" /> -->
                  <kgiTimePicker></kgiTimePicker>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-tit">
              <b>每次委託</b><span class="remark">(張)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-input-number v-model="num4" :min="1" placeholder="請輸入張數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-tit">
              <b>出單間隔</b><span class="remark">(秒)</span>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-input-number v-model="num5" :min="1" placeholder="請輸入秒數" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
  <section class="block">
    <h2 class="tit-type1 hasToggleArrow" title="查看委託試算" :class="{'active': calculateToggle}" @click="calculateToggle = !calculateToggle">
      查看委託試算 <i class="fa-solid fa-angle-down"></i>
    </h2>
    <el-collapse-transition>
      <div class="calculationList" v-if="calculateToggle && timedOrQuantitative == 'time'">
        <el-alert type="error" :closable="false" class="resetAlert">
          <template #title>
            <div class="resetAlert-icon">
              <el-icon><InfoFilled /></el-icon>
            </div>
            <div class="resetAlert-content">
              平均分配張數超過499將自動拆單
            </div>
          </template>
        </el-alert>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="委託次數" align="center" />
          <el-table-column prop="time" label="委託時間" align="center" />
          <el-table-column prop="qty" label="委託張數" align="center" />
        </el-table>
      </div>
    </el-collapse-transition>
    <el-collapse-transition>
      <div class="calculationList" v-if="calculateToggle && timedOrQuantitative == 'quantitative'">
        <el-alert type="error" :closable="false" class="resetAlert">
          <template #title>
            <div class="resetAlert-icon">
              <el-icon><InfoFilled /></el-icon>
            </div>
            <div class="resetAlert-content">
              平均分配張數超過499將自動拆單
            </div>
          </template>
        </el-alert>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="date" label="委託次數" align="center" />
          <el-table-column prop="time" label="委託時間" align="center" />
          <el-table-column prop="qty" label="委託張數" align="center" />
        </el-table>
      </div>
    </el-collapse-transition>
  </section>
  <section class="block btnArea">
    <el-button type="warning" @click="confirmDialogVisible = true" v-if="timedOrQuantitative == 'time'">新增</el-button>
    <el-button type="warning" @click="confirmDialogVisible2 = true" v-else>新增</el-button>
  </section>

  <el-dialog
    v-model="confirmDialogVisible"
    title="確認-定時"
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
            監控時間
          </div>
          <div class="confirmDialog-infoList-content">
            長效監控至2022/04/11
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            <span>台積電 2330</span> / <span>買進</span> / <span>現股</span> / <span>ROD 100張</span> / <span>跌停價</span>
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            出單方式
          </div>
          <div class="confirmDialog-infoList-content">
            定時
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            下單起迄時間
          </div>
          <div class="confirmDialog-infoList-content">
            下午12:00:00~下午12:10:00
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            出單間隔
          </div>
          <div class="confirmDialog-infoList-content">
            120秒
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
            於<b class="text-black">下午12:00:00~下午12:10:10</b>之間，每隔<b class="text-black">120秒</b>，將<b class="text-black">台積電2330</b> 以<b class="text-black">限價600元</b>，平均時間出單至總委量<b class="text-black">100張賣出</b>為止
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
    v-model="confirmDialogVisible2"
    title="確認-定量"
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
            下單資料
          </div>
          <div class="confirmDialog-infoList-content">
            <span>台積電 2330</span> / <span>買進</span> / <span>現股</span> / <span>ROD 100張</span> / <span>跌停價</span>
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            出單方式
          </div>
          <div class="confirmDialog-infoList-content">
            定量
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            開始時間
          </div>
          <div class="confirmDialog-infoList-content">
            下午12:40:00
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            出單間隔
          </div>
          <div class="confirmDialog-infoList-content">
            60秒
          </div>
        </li>
        <li>
          <div class="confirmDialog-infoList-tit">
            每次出單
          </div>
          <div class="confirmDialog-infoList-content">
            10張
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
            於下午<b class="text-black">12:40:00</b>，每隔<b class="text-black">60秒</b>，每次委託<b class="text-black">10張</b>，將<b class="text-black">台積電2330</b> 以限價<b class="text-black">600元</b>，至總委量<b class="text-black">100張</b>賣出為止
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
        <el-button type="warning" @click="confirmDialogVisible2 = false; settingSuccessful = true">
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