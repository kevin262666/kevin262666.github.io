<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('9203-1234567'),
      options = [
        {
          value: '9203-1234567',
          label: '9203-1234567',
        },
        {
          value: '9204-9876543',
          label: '9204-9876543',
        },
      ]
</script>

<template>
  <div class="orderSet-selectId">
    <div class="orderSet-selectId-select">
      <el-select v-model="value" placeholder="請選擇" :reserve-keyword="false">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div class="orderSet-selectId-description">
      <el-link href="#" target="_blank">
        <i class="fa-solid fa-circle-exclamation"></i>&nbsp;功能說明
      </el-link>
    </div>
  </div>
</template>