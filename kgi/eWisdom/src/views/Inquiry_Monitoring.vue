<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import { useStore } from 'vuex';
const store = useStore();
// import { useRouter } from 'vue-router';
// const router = useRouter();

import SettingResultCard from '../components/SettingResultCard.vue'
import { faL } from '@fortawesome/free-solid-svg-icons';

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
          label: '依設定時間近排序',
        },
        {
          value: '2',
          label: '依設定時間遠排序',
        },
        {
          value: '3',
          label: '依商品代碼(小-大)排序',
        },
        {
          value: '4',
          label: '依智慧單順序排序',
        },
      ]

const switchValue = ref(false)

const infolistToggle = ref([false, false, false, false, false, false, false, false, false, false]);

watchEffect(() => {
  if(switchValue.value) {
    infolistToggle.value = infolistToggle.value.map(() => true);
  }else {
    infolistToggle.value = infolistToggle.value.map(() => false);
  }
})

const showFilter = ref(false);

const radio1 = ref('1');

// 批次刪除用
const delAllItem = ref(false);
const confirmDeletion = ref(false)

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
        },
        {
          value: 2,
          label: '中鋼 2002'
        },
        {
          value: 3,
          label: '聯電 2303'
        },
        {
          value: 4,
          label: '富邦金 2881'
        },
        {
          value: 5,
          label: '開發金 2883'
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
          <el-button class="margin-left-10" @click="delAllItem = true" v-if="!delAllItem">選取&nbsp;<i class="fa-solid fa-trash-can"></i></el-button>
          <template v-else>
            <el-button type="primary" class="margin-left-10" @click="confirmDeletion = true">確認刪除</el-button>
            <el-button type="primary" plain class="margin-left-10" @click="delAllItem = false">取消刪除</el-button>
          </template>
        </el-col>
        <!-- <el-col :lg="4" :md="4" :span="4">
          
        </el-col> -->
      </el-row>
    </div>
    <div class="inquiry-filter" v-if="showFilter">
      <el-row :gutter="16">
        <el-col :md="15" :span="24">
          <div class="inquiry-filter-item">
            <div class="inquiry-filter-item-tit">
              智慧單
            </div>
            <div class="inquiry-filter-item-input">
              <el-radio-group v-model="radio1">
                <el-radio label="1" border>全部</el-radio>
                <el-radio label="2" border>多條件觸價</el-radio>
                <el-radio label="3" border>二擇一出場</el-radio>
                <el-radio label="4" border>限時進出</el-radio>
                <el-radio label="7" border>三擇一出場</el-radio>
                <el-radio label="5" border>移動出場</el-radio>
                <el-radio label="8" border>母子單</el-radio>
                <el-radio label="6" border>定時/定量</el-radio>
                <el-radio label="9" border>母子Pro</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-col>
        <el-col :md="9" :span="24">
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="false" :cantPlaceOrder="true" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[0]" :showCheckbox="delAllItem">
          <template #ordername>
            多條件觸價
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[1]" :showCheckbox="delAllItem">
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[2]" :showCheckbox="delAllItem">
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[3]" :showCheckbox="delAllItem">
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[4]" :showCheckbox="delAllItem">
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
                － 或 －
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停損條件
                </div>
                <div class="confirmDialog-infoList-content">
                  成交價 ≤ 515元
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
                <div class="text-center text-orange">
                  移動出場、停損任一條件符合即委託，並停止監控另一個條件。
                </div>
              </li>
            </ul>
          </template>
        </SettingResultCard>
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[5]" :showCheckbox="delAllItem">
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[6]" :showCheckbox="delAllItem">
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
        </SettingResultCard>
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[7]" :showCheckbox="delAllItem">
          <template #ordername>
            三擇一出場
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
                － 或 －
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  出場日期時間
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
                  <span>賣出</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>市價</span>
                </div>
              </li>
              <li>
                <div class="text-orange text-center">
                  當停利、停損皆未觸發，則以設定時間出場。
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[8]" :showCheckbox="delAllItem">
          <template #ordername>
            母子單
          </template>
          <template #stockname>
            母-聯電 2303
            <br/>
            子-台積電 2330
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>限價35元</span>
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
        <SettingResultCard :canDel="true" :monitoring="true" :willPlaceOrder="true" :cantPlaceOrder="false" :deleted="false" :triggered="false" :orderInProgress="false" :hasStopped="false" :infolistToggle="infolistToggle[9]" :showCheckbox="delAllItem">
          <template #ordername>
            母子Pro
          </template>
          <template #stockname>
            母-富邦金 2881
            <br/>
            子-開發金 2883
          </template>
          <template #sinfo>
            長效監控至 2022/04/11
          </template>
          <template #infolist>
            <ul class="confirmDialog-infoList">
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
                  監控條件(一)
                </div>
                <div class="confirmDialog-infoList-content">
                  聯電2303 成交價 ≥ 60元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  監控條件(二)
                </div>
                <div class="confirmDialog-infoList-content">
                  台積電2330 成交價 ≥ 560元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  以上條件
                </div>
                <div class="confirmDialog-infoList-content">
                  同時符合 則送出
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單標的
                </div>
                <div class="confirmDialog-infoList-content">
                  富邦金 2881
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>限價41.50元</span>
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停利停損
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>當日啟動</span>/<span>隔日啟動至2022/04/11止</span>
                </div>
              </li>
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
                <div class="confirmDialog-infoList-tit text-blue">
                  <b>設定子單</b>
                </div>
                <div class="confirmDialog-infoList-content text-orange">
                  *當母單當日完全成交時，啟動子單
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  監控條件(一)
                </div>
                <div class="confirmDialog-infoList-content">
                  華南金2880 成交價 ≥ 20.95元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  監控條件(二)
                </div>
                <div class="confirmDialog-infoList-content">
                  國泰金2882 成交價 ≥ 45.75元
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  以上條件
                </div>
                <div class="confirmDialog-infoList-content">
                  擇一符合 則送出
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單標的
                </div>
                <div class="confirmDialog-infoList-content">
                  開發金 2883
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  下單資料
                </div>
                <div class="confirmDialog-infoList-content">
                  <span>買進</span> / <span>現股</span> / <span>ROD</span> / <span>5張</span> / <span>限價11.50元</span>
                </div>
              </li>
              <li>
                <div class="confirmDialog-infoList-tit">
                  停利停損
                </div>
                <div class="confirmDialog-infoList-content">
                  否
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
      </div>
    </div>
  </div>
  <div class="block">
    <div class="settingResultCard-area-noInfo">
      無監控中條件
    </div>
  </div>
  <el-dialog
    v-model="confirmDeletion"
    title="確認刪除"
    :width="store.state.dialogWidth"
  >
    <div>
      確定要刪除所選擇的條件單?
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="confirmDeletion = false, delAllItem = false">
          確認
        </el-button>
        <el-button @click="confirmDeletion = false">
          取消
        </el-button>
      </span>
    </template>
  </el-dialog>

  <div class="fixedBottomFunctionBar" v-if="delAllItem">
    <div class="container">
      <div class="fixedBottomFunctionBar-content">
        <el-row :gutter="10" align="middle">
          <el-col :md="20" :sm="10" :span="12" :class="{'text-right': store.state.windowWidth>991}">
            請勾選要刪除的項目
          </el-col>
          <el-col :md="4" :sm="14" :span="12" class="text-right">
            <el-button type="primary" @click="confirmDeletion = true">刪除</el-button>
            <el-button type="primary" class="margin-left-10" @click="delAllItem = false" plain>取消</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  
</template>