<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex';
const store = useStore();

defineProps({
  // 可刪除
  canDel: {
    type: Boolean,
    required: true
  },
  // 顯示checkbox
  showCheckbox: {
    type: Boolean,
    required: true
  },
  // 監控中
  monitoring: {
    type: Boolean,
    required: true
  },
  // 帶下單
  willPlaceOrder: {
    type: Boolean,
    required: true
  },
  // 不帶下單
  cantPlaceOrder: {
    type: Boolean,
    required: true
  },
  // 已刪除
  deleted: {
    type: Boolean,
    required: true
  },
  // 已觸發
  triggered: {
    type: Boolean,
    required: true
  },
  // 資訊區塊收合
  infolistToggle: {
    type: Boolean,
    required: true
  },
  // 下單中
  orderInProgress: {
    type: Boolean,
    required: true
  },
  // 已停止
  hasStopped: {
    type: Boolean,
    required: true
  },
})

const checked1 = ref(false)

const confirmDeletion = ref(false)

const tag1 = ref('div');
const tag2 = ref('label');

</script>

<template>
  <div class="settingResultCard" :class="{'deleted': deleted || hasStopped, 'checked': checked1, 'checkboxType': showCheckbox}">
    <component :is="showCheckbox ? tag2 : tag1">
      <div class="settingResultCard-head">
        <div class="settingResultCard-head-top">
          <div class="settingResultCard-orderName">
            <slot name="ordername"></slot>
          </div>
          <div class="settingResultCard-del" v-if="canDel">
            <el-tooltip
              effect="light"
              content="刪除"
              placement="top"
              v-if="!showCheckbox"
            >
              <i class="fa-solid fa-trash-can" @click="confirmDeletion = true"></i>
            </el-tooltip>
            <el-checkbox v-model="checked1" size="large" v-else/>
          </div>
        </div>
        <div class="settingResultCard-stockName">
          <slot name="stockname"></slot>
        </div>
        <div class="settingResultCard-tag-area">
          <div class="settingResultCard-tag" v-if="monitoring">
            <i class="fa-solid fa-eye"></i> 監控中
          </div>
          <div class="settingResultCard-tag" v-if="willPlaceOrder">
            帶下單
          </div>
          <div class="settingResultCard-tag" v-if="cantPlaceOrder">
            不帶下單
          </div>
          <div class="settingResultCard-tag" v-if="deleted">
            已刪除
          </div>
          <div class="settingResultCard-tag" v-if="triggered">
            <i class="fa-solid fa-circle-check text-green"></i> 已觸發
          </div>
          <div class="settingResultCard-tag" v-if="orderInProgress">
            下單中
          </div>
          <div class="settingResultCard-tag" v-if="hasStopped">
            已停止
          </div>
        </div>
      </div>
    </component>
    <div class="settingResultCard-main">
      <div class="settingResultCard-sInfo">
        <slot name="sinfo"></slot>
      </div>
      <el-collapse-transition>
        <template v-if="infolistToggle">
          <slot name="infolist"></slot>
        </template>
      </el-collapse-transition>
    </div>
    <div class="settingResultCard-toggleBtn" @click="infolistToggle = !infolistToggle" :class="{'active': infolistToggle}">
      {{ infolistToggle ? '收合' : '展開' }}<i class="fa-solid fa-angle-down"></i>
    </div>
    <el-dialog
      v-model="confirmDeletion"
      title="確認刪除"
      :width="store.state.dialogWidth"
    >
      <div>
        確定要刪除「台積電2330定時單」?
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="confirmDeletion = false">
            確認
          </el-button>
          <el-button @click="confirmDeletion = false">
            取消
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>