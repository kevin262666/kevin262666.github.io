<script setup>
import { RouterView } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();
</script>

<template>
  <!-- 控制lightMode || darkMode -->
  <el-tooltip effect="dark" content="切換黑白" placement="top-start">
    <input type="checkbox" id="IsOpenInAPP" v-model="store.state.darkMode" />
  </el-tooltip>
  <!-- <input type="hidden" id="IsOpenInAPP" v-model="store.state.darkMode" /> -->

  <!-- 是否顯示證券/期權鍵 -->
  <input type="hidden" id="hideSecuritiesOrFutures" v-model="store.state.hideSecuritiesOrFutures" />

  <RouterView />
</template>

<!-- <style lang="scss"></style> -->
