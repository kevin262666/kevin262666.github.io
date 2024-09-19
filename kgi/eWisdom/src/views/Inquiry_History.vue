<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
// import { useRouter } from 'vue-router';
// const router = useRouter();

import SettingResultCard from '../components/SettingResultCard.vue'

const value = ref('1'),
      options = [
        {
          value: '1',
          label: '全部',
        },
        {
          value: '2',
          label: '9204-9876543',
        },
        {
          value: '3',
          label: '僅通知不帶下單',
        },
      ],
      value2 = ref('1'),
      options2 = [
        {
          value: '1',
          label: '依觸發時間近排序',
        },
        {
          value: '2',
          label: '依觸發時間遠排序',
        },
        {
          value: '3',
          label: '依設定時間近排序',
        },
        {
          value: '4',
          label: '依設定時間遠排序',
        },
        {
          value: '5',
          label: '依商品代碼排序',
        },
        {
          value: '6',
          label: '依智慧單順序排序',
        },
      ]

const switchValue = ref(false)

const infolistToggle = ref([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

watchEffect(() => {
  if(switchValue.value) {
    infolistToggle.value = infolistToggle.value.map(() => true);
  }else {
    infolistToggle.value = infolistToggle.value.map(() => false);
  }
})

// 區間日期選擇器
const datePicker = ref('')
const shortcuts = [
  {
    text: '今日',
    value: () => {
      const end = new Date()
      return [end, end]
    },
  },
  {
    text: '昨日',
    value: () => {
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24)
      return [start, start]
    },
  },
  {
    text: '近一週',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '近一個月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '近三個月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const radio1 = ref('1')

const showFilter = ref(false);

// 單一商品搜尋
const stockSelect = ref([]),
      stockSelectOptions = [
        {
          value: 0,
          label: '台積電 2330'
        },
        {
          value: 1,
          label: '鴻海 2317'
        }
      ]

</script>

<template>
  <div class="inquiry-topInputArea">
    <div class="inquiry-topInputArea-toggleOpenClose">
      <el-switch v-model="switchValue" active-text="全部展開" inactive-text="全部收合" />
    </div>
    <div class="inquiry-topInputArea-selectId">
      <el-row :gutter="10">
        <el-col :lg="5" :md="7" :span="11">
          <el-select v-model="value" placeholder="請選擇" :reserve-keyword="false" class="width100Percentage">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :lg="7" :md="9" :span="13">
          <el-select v-model="value2" placeholder="請選擇" :reserve-keyword="false" class="width100Percentage">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-col>
        <el-col :lg="12" :span="24" class="margin-top-lg-10">
          <el-button @click="showFilter = !showFilter">篩選&nbsp;<i class="fa-solid" :class="{'fa-angle-down': !showFilter, 'fa-angle-up': showFilter}"></i></el-button>
        </el-col>
      </el-row>
    </div>
    <div class="inquiry-filter" v-if="showFilter">
      <el-row :gutter="16">
        <el-col :md="12" :span="24">
          <div class="inquiry-filter-item">
            <div class="inquiry-filter-item-tit">
              查詢期間<span class="remark">(限近一年)</span>
            </div>
            <div class="inquiry-filter-item-input">
              <el-date-picker
                v-model="datePicker"
                type="daterange"
                range-separator="至"
                start-placeholder="開始日期"
                end-placeholder="結束日期"
                :shortcuts="shortcuts"
                :editable="false"
              />
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="inquiry-filter-item">
            <div class="inquiry-filter-item-tit">
              監控狀態
            </div>
            <div class="inquiry-filter-item-input">
              <el-radio-group v-model="radio1">
                <el-radio label="1" border>全部</el-radio>
                <el-radio label="2" border>已觸發</el-radio>
                <el-radio label="3" border>已刪除</el-radio>
                <el-radio label="4" border>已停止</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-col>
        <el-col :md="12" :span="24">
          <div class="inquiry-filter-item">
            <div class="inquiry-filter-item-tit">
              單一商品搜尋
            </div>
            <div class="inquiry-filter-item-input">
              <el-select-v2
                v-model="stockSelect"
                filterable
                :options="stockSelectOptions"
                placeholder="請輸入商品名稱或代碼"
                class="width100Percentage"
              />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
  <div class="block">
    <div class="inquiry-accountId">
      <b>9203-1234560</b>
      <div class="settingResultCard-area">
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[0]">
          <template #ordername>
            多條件觸價
          </template>
          <template #stockname>
            台積電 2330 <i class="fa-solid fa-angles-right"></i> 鴻海 2317
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/03/30 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  觸發條件
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>成交價 ≥ 525.00</span>  |  <span>總量 ≥ 14,000</span>
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
          </template>
        </SettingResultCard>
        <!-- <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[1]">
          <template #ordername>
            二擇一出場
          </template>
          <template #stockname>
            中鋼 2002
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/03/30 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  停利條件
                </div>
                <div class="confirmDialog-infoList-content">
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
                － 或 －
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停損條件
                </div>
                <div class="confirmDialog-infoList-content">
                  成交價 ≤ 28元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
                </div>
              </li>
              <li>
                <div class="text-orange text-center">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[2]">
          <template #ordername>
            限時進出
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/04/11 上午08:27 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[3]">
          <template #ordername>
            移動出場
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/03/30 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  啟動價格
                </div>
                <div class="confirmDialog-infoList-content">
                  530元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  區間高檔回檔
                </div>
                <div class="confirmDialog-infoList-content">
                  超過 5 Tick
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[4]">
          <template #ordername>
            定時
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/06/01 12:00:00 至 12:10:00 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="true" :hasStopped="false" :infolistToggle="infolistToggle[5]">
          <template #ordername>
            定時
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 下單時段2022/06/01 12:00:00 至 12:10:00
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[6]">
          <template #ordername>
            定量
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 2022/05/01 下午12:40:00起 已下單
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="true" :orderInProgress="true" :hasStopped="false" :infolistToggle="infolistToggle[7]">
          <template #ordername>
            定量
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            <i class="fa-solid fa-circle-check text-green"></i> 下單時段2022/05/01 下午12:40:00起
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard> -->

        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[8]">
          <template #ordername>
            多條件觸價
          </template>
          <template #stockname>
            台積電 2330 <i class="fa-solid fa-angles-right"></i> 鴻海 2317
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  觸發條件
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>成交價 ≥ 525.00</span>  |  <span>總量 ≥ 14,000</span>
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
          </template>
        </SettingResultCard>
        <!-- <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[9]">
          <template #ordername>
            二擇一出場
          </template>
          <template #stockname>
            中鋼 2002
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  停利條件
                </div>
                <div class="confirmDialog-infoList-content">
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
                － 或 －
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停損條件
                </div>
                <div class="confirmDialog-infoList-content">
                  成交價 ≤ 28元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
                </div>
              </li>
              <li>
                <div class="text-orange text-center">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[10]">
          <template #ordername>
            限時進出
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            監控與下單日 2022/04/11 上午08:27
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[11]">
          <template #ordername>
            移動出場
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  啟動價格
                </div>
                <div class="confirmDialog-infoList-content">
                  530元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  區間高檔回檔
                </div>
                <div class="confirmDialog-infoList-content">
                  超過 5 Tick
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[12]">
          <template #ordername>
            定時
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            下單時段2022/06/01 12:00:00 至 12:10:00
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="true" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[13]">
          <template #ordername>
            定量
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            下單時段2022/05/01 下午12:40:00起
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard> -->

        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[14]">
          <template #ordername>
            多條件觸價
          </template>
          <template #stockname>
            台積電 2330 <i class="fa-solid fa-angles-right"></i> 鴻海 2317
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  觸發條件
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>成交價 ≥ 525.00</span>  |  <span>總量 ≥ 14,000</span>
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
          </template>
        </SettingResultCard>
        <!-- <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[15]">
          <template #ordername>
            二擇一出場
          </template>
          <template #stockname>
            中鋼 2002
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  停利條件
                </div>
                <div class="confirmDialog-infoList-content">
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
                － 或 －
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停損條件
                </div>
                <div class="confirmDialog-infoList-content">
                  成交價 ≤ 28元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
                </div>
              </li>
              <li>
                <div class="text-orange text-center">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[16]">
          <template #ordername>
            限時進出
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            監控與下單日 2022/04/11 上午08:27
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[17]">
          <template #ordername>
            移動出場
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
              <li>
                <div class="confirmDialog-infoList-tit">
                  啟動價格
                </div>
                <div class="confirmDialog-infoList-content">
                  530元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  區間高檔回檔
                </div>
                <div class="confirmDialog-infoList-content">
                  超過 5 Tick
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[18]">
          <template #ordername>
            定時
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            下單時段2022/06/01 12:00:00 至 12:10:00
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="false" :monitoring="false" :willPlaceOrder="false" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="true" :infolistToggle="infolistToggle[19]">
          <template #ordername>
            定量
          </template>
          <template #stockname>
            台積電 2330
          </template>
          <template #sinfo>
            下單時段2022/05/01 下午12:40:00起
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
          </template>
        </SettingResultCard> -->
      </div>
    </div>
  </div>
  <div class="block">
    <div class="settingResultCard-area-noInfo">
      查無歷史監控條件
    </div>
  </div>
  
</template>