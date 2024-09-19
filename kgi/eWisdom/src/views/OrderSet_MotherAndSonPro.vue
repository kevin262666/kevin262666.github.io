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
          label: '整股ROD',
        },
      ],
      value3 = ref('1'),
      options3 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value4 = ref('1'),
      options4 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value5 = ref('1'),
      options5 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value6 = ref('1'),
      options6 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value7 = ref('1'),
      options7 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value8 = ref('1'),
      options8 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value9 = ref('1'),
      options9 = [
        {
          value: '1',
          label: '成交價',
        },
      ],
      value10 = ref('1'),
      options10 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value11 = ref('1'),
      options11 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value12 = ref('1'),
      options12 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value13 = ref('1'),
      options13 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value14 = ref('1'),
      options14 = [
        {
          value: '1',
          label: '現股',
        },
      ],
      value15 = ref('1'),
      options15 = [
        {
          value: '1',
          label: '限價',
        },
      ],
      value16 = ref('1'),
      options16 = [
        {
          value: '1',
          label: '整股ROD',
        },
      ],
      value17 = ref('1'),
      options17 = [
        {
          value: '1',
          label: '現股',
        },
      ]

const radio1 = ref('大於等於'),
      radio2 = ref('大於等於'),
      radio3 = ref(''),
      radio4 = ref(''),
      radio5 = ref('大於等於'),
      radio6 = ref('大於等於'),
      radio7 = ref(''),
      radio8 = ref(''),
      radio9 = ref('大於等於'),
      radio10 = ref(''),
      radio11 = ref(''),
      radio12 = ref('大於等於'),
      radio13 = ref(''),
      radio14 = ref('大於等於'),
      radio15 = ref('')

const num1 = ref(),
      num2 = ref(),
      num3 = ref(1),
      num4 = ref(),
      num5 = ref(),
      num6 = ref(1),
      num7 = ref(),
      num8 = ref(),
      num9 = ref(1),
      num10 = ref(),
      num11 = ref(),
      num12 = ref(1),
      num13 = ref(),
      num14 = ref(),
      num15 = ref(1),
      num16 = ref(),
      num17 = ref(),
      num18 = ref(1)

const switch1 = ref(false),
      switch2 = ref(false),
      switch3 = ref(false)

const checked1 = ref(true),
      checked2 = ref(true),
      checked3 = ref(false),
      checked4 = ref(true)

const date1 = ref(''),
      date2 = ref('')

const confirmDialogVisible = ref(false),
      settingSuccessful = ref(false)

</script>

<template>
  <OrderSet_SelectId></OrderSet_SelectId>

  <section class="block">
    <h2 class="tit-sm text-blue text-center" title="設定母單">
      【設定母單】
    </h2>
    <h3 class="tit-type1" title="設定觸發條件">
      設定觸發條件 <small>(最多可設定10項)</small>
    </h3>
    <div class="setConditions monitorConditions">
      <div class="monitorConditions-tit">
        監控條件(一)
      </div>
      <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
      <div class="monitorConditions-setInfo">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item">
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col :md="6" :span="9">
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
                  <el-col :md="8" :span="17">
                    <el-input-number v-model="num1" :min="1" :step="100" :max="10000000" placeholder="價格" />
                  </el-col>
                  <el-col class="autoCol">
                    <el-button type="primary"><i class="fa-solid fa-trash-can"></i> 刪除</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="setConditions monitorConditions">
      <div class="monitorConditions-tit">
        監控條件(二)
      </div>
      <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
      <div class="monitorConditions-setInfo">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item">
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col :md="6" :span="9">
                    <el-select v-model="value1" placeholder="請選擇">
                      <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio2">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="17">
                    <el-input-number v-model="num2" :min="1" :step="100" :max="10000000" placeholder="價格" />
                  </el-col>
                  <el-col class="autoCol">
                    <el-button type="primary"><i class="fa-solid fa-trash-can"></i> 刪除</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text-center">
      <el-button type="primary"><i class="fa-solid fa-plus"></i> 新增商品</el-button>
    </div>
    <div class="setConditions" :class="{'buyType': radio4=='買進', 'sellType': radio4=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>當以上條件</b>
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
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24" :class="{'text-center': store.state.windowWidth < 992}">
          則送出
        </el-col>
      </el-row>
      <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="14">
                  <el-select v-model="value2" placeholder="請選擇">
                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value" />
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
                  <el-select v-model="value3" placeholder="請選擇">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num3" :min="1" :step="1" placeholder="請輸入張數" />
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
                    <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num4" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="setConditions">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <div class="stitchBtnAndText">
                    <el-switch v-model="switch1" id="switch1"/>
                    <label for="switch1">
                      啟動停利停損(母單全部成交才啟動)
                    </label>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter" align="middle" v-if="switch1">
        <el-col :md="3" :span="24">
          <el-checkbox v-model="checked1" label="當日啟動" />
        </el-col>
        <el-col :md="20" :span="24">
          <el-row :gutter="10" align="middle">
            <el-col class="autoCol">
              <el-checkbox v-model="checked2" label="隔日啟動至" />
            </el-col>
            <el-col class="autoCol">
              <el-date-picker
                v-model="date1"
                type="date"
                placeholder="請選擇日期"
                :editable="false"
                class="fitDatePicker"
              />
            </el-col>
            <el-col class="autoCol">
              結束
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <template v-if="switch1">
      <h2 class="tit-type1 margin-top-20 margin-top-md-10" title="設定停利觸發與下單條件" :class="{'buyType': radio7=='買進', 'sellType': radio7=='賣出'}">
        設定<b>停利</b>觸發與下單條件
      </h2>
      <div class="setConditions" :class="{'buyType': radio7=='買進', 'sellType': radio7=='賣出'}">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item alignTop">
              <div class="setConditions-item-tit">
                <b>當成交價</b>
              </div>
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio5">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="24">
                    <el-input-number v-model="num5" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                    <el-select v-model="value7" placeholder="請選擇">
                      <el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio7" class="buyOrSell">
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
                    <el-select v-model="value5" placeholder="請選擇">
                      <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num6" :min="1" :step="1" placeholder="請輸入張數" />
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
                    <el-select v-model="value6" placeholder="請選擇">
                      <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num7" :min="1" placeholder="請輸入價格" />
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <h2 class="tit-type1 margin-top-20 margin-top-md-10" title="設定停損觸發與下單條件" :class="{'buyType': radio8=='買進', 'sellType': radio8=='賣出'}">
        設定<b>停損</b>觸發與下單條件
      </h2>
      <div class="setConditions" :class="{'buyType': radio8=='買進', 'sellType': radio8=='賣出'}">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item alignTop">
              <div class="setConditions-item-tit">
                <b>當成交價</b>
              </div>
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio6">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="24">
                    <el-input-number v-model="num8" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                    <el-select v-model="value8" placeholder="請選擇">
                      <el-option v-for="item in options8" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio8" class="buyOrSell">
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
                    <el-select v-model="value5" placeholder="請選擇">
                      <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num9" :min="1" :step="1" placeholder="請輸入張數" />
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
                    <el-select v-model="value6" placeholder="請選擇">
                      <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num10" :min="1" placeholder="請輸入價格" />
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </section>
  <section class="block text-center">
    當母單觸發後進行委託，等到母單當日完全成交時，才再啟動子單
    <div class="stitchBtnAndText">
      <el-switch v-model="switch2" id="switch2"/>
      <label for="switch2">
        啟動子單
      </label>
    </div>
  </section>
  <section class="block" v-if="switch2">
    <h2 class="tit-sm text-blue text-center" title="設定子單">
      【設定子單】
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
    <h3 class="tit-type1" title="設定觸發條件">
      設定觸發條件 <small>(最多可設定10項)</small>
    </h3>
    <div class="setConditions monitorConditions">
      <div class="monitorConditions-tit">
        監控條件(一)
      </div>
      <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
      <div class="monitorConditions-setInfo">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item">
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col :md="6" :span="9">
                    <el-select v-model="value9" placeholder="請選擇">
                      <el-option v-for="item in options9" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio9">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="17">
                    <el-input-number v-model="num11" :min="1" :step="100" :max="10000000" placeholder="價格" />
                  </el-col>
                  <el-col class="autoCol">
                    <el-button type="primary"><i class="fa-solid fa-trash-can"></i> 刪除</el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text-center">
      <el-button type="primary"><i class="fa-solid fa-plus"></i> 新增商品</el-button>
    </div>
    <div class="setConditions" :class="{'buyType': radio11=='買進', 'sellType': radio11=='賣出'}">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="8" :span="24">
          <div class="setConditions-item">
            <div class="setConditions-item-tit">
              <b>當以上條件</b>
            </div>
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <el-radio-group v-model="radio10">
                    <el-radio-button label="同時符合" />
                    <el-radio-button label="擇一符合" />
                  </el-radio-group>
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
      <OrderSet_SelectStock :aleradySelect="false" :selectAllStock="false"></OrderSet_SelectStock>
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :md="12" :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :md="10" :span="14">
                  <el-select v-model="value10" placeholder="請選擇">
                    <el-option v-for="item in options10" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col class="autoCol">
                  <el-radio-group v-model="radio11" class="buyOrSell">
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
                  <el-select v-model="value11" placeholder="請選擇">
                    <el-option v-for="item in options11" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num12" :min="1" :step="1" placeholder="請輸入張數" />
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
                  <el-select v-model="value12" placeholder="請選擇">
                    <el-option v-for="item in options12" :key="item.value" :label="item.label" :value="item.value" />
                  </el-select>
                </el-col>
                <el-col :span="14">
                  <el-input-number v-model="num13" :min="1" placeholder="請輸入價格" />
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="setConditions">
      <el-row :gutter="store.state.setConditionsGutter">
        <el-col :span="24">
          <div class="setConditions-item alignTop">
            <div class="setConditions-item-input">
              <el-row :gutter="store.state.setConditionsItemInputGutter">
                <el-col :span="24">
                  <div class="stitchBtnAndText">
                    <el-switch v-model="switch3" id="switch3"/>
                    <label for="switch3">
                      啟動停利停損(子單全部成交才啟動)
                    </label>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="store.state.setConditionsGutter" align="middle" v-if="switch3">
        <el-col :md="3" :span="24">
          <el-checkbox v-model="checked3" label="當日啟動" />
        </el-col>
        <el-col :md="20" :span="24">
          <el-row :gutter="10" align="middle">
            <el-col class="autoCol">
              <el-checkbox v-model="checked4" label="隔日啟動至" />
            </el-col>
            <el-col class="autoCol">
              <el-date-picker
                v-model="date2"
                type="date"
                placeholder="請選擇日期"
                :editable="false"
                class="fitDatePicker"
              />
            </el-col>
            <el-col class="autoCol">
              結束
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <template v-if="switch3">
      <h2 class="tit-type1 margin-top-20 margin-top-md-10" title="設定停利觸發與下單條件" :class="{'buyType': radio13=='買進', 'sellType': radio13=='賣出'}">
        設定<b>停利</b>觸發與下單條件
      </h2>
      <div class="setConditions" :class="{'buyType': radio13=='買進', 'sellType': radio13=='賣出'}">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item alignTop">
              <div class="setConditions-item-tit">
                <b>當成交價</b>
              </div>
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio12">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="24">
                    <el-input-number v-model="num14" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                    <el-select v-model="value13" placeholder="請選擇">
                      <el-option v-for="item in options13" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio13" class="buyOrSell">
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
                    <el-select v-model="value14" placeholder="請選擇">
                      <el-option v-for="item in options14" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num15" :min="1" :step="1" placeholder="請輸入張數" />
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
                    <el-select v-model="value15" placeholder="請選擇">
                      <el-option v-for="item in options15" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num16" :min="1" placeholder="請輸入價格" />
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <h2 class="tit-type1 margin-top-20 margin-top-md-10" title="設定停損觸發與下單條件" :class="{'buyType': radio15=='買進', 'sellType': radio15=='賣出'}">
        設定<b>停損</b>觸發與下單條件
      </h2>
      <div class="setConditions" :class="{'buyType': radio15=='買進', 'sellType': radio15=='賣出'}">
        <el-row :gutter="store.state.setConditionsGutter">
          <el-col :span="24">
            <div class="setConditions-item alignTop">
              <div class="setConditions-item-tit">
                <b>當成交價</b>
              </div>
              <div class="setConditions-item-input">
                <el-row :gutter="store.state.setConditionsItemInputGutter">
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio14">
                      <el-radio-button label="大於等於" />
                      <el-radio-button label="小於等於" />
                    </el-radio-group>
                  </el-col>
                  <el-col :md="8" :span="24">
                    <el-input-number v-model="num17" :min="1" :step="100" :max="10000000" placeholder="價格" />
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
                    <el-select v-model="value16" placeholder="請選擇">
                      <el-option v-for="item in options16" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col class="autoCol">
                    <el-radio-group v-model="radio15" class="buyOrSell">
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
                    <el-select v-model="value17" placeholder="請選擇">
                      <el-option v-for="item in options17" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num18" :min="1" :step="1" placeholder="請輸入張數" />
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
                    <el-select v-model="value6" placeholder="請選擇">
                      <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                  </el-col>
                  <el-col :span="14">
                    <el-input-number v-model="num10" :min="1" placeholder="請輸入價格" />
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </section>
  <section class="block btnArea">
    <el-button type="warning" @click="confirmDialogVisible = true">新增</el-button>
  </section>

  <el-dialog
    v-model="confirmDialogVisible"
    title="確認-母子Pro"
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
          <div class="confirmDialog-infoList-tit text-orange">
            停利停損
          </div>
          <div class="confirmDialog-infoList-content text-orange">
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
      </ul>
      <el-alert type="info" :closable="false" class="resetAlert">
        <template #title>
          <div class="resetAlert-icon">
            <el-icon><InfoFilled /></el-icon>
          </div>
          <div class="resetAlert-content">
            當母單監控<b class="text-black">聯電2303成交價≥60 │ 台積電 2330 成交價 ≥ 560元 │ 光寶科 2301 成交價 ≥ 35.15元，同時符合</b>，則送出<b class="text-black">富邦金 2881以限價41.5元買進 5張</b>；於完全成交時，<b class="text-black">啟動當日</b>及<b class="text-black">至2022/04/11止</b>之停利停損，<b class="text-black">當成交價≥30元</b>以<b class="text-black">限價35元</b>停利委託<b class="text-black">賣出5張</b>；<b class="text-black">或 當成交價≤28元</b>，即以<b class="text-black">市價</b>停損委託<b class="text-black">賣出5張</b>。<b class="text-black">並啟動子單</b>監控<b class="text-black">華南金 2880 成交價≥20.95│ 國泰金 2882 成交價 ≥ 45.75元，擇一符合</b>，則送出<b class="text-black">開發金 2883以限價11.50元買進 5張</b>。   
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