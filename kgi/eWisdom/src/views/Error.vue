<script lang="ts" setup>
// import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import { useStore } from 'vuex';
// const store = useStore();

</script>

<template>

  <div class="container">
    <div class="block text-center">
      <img src="/images/errorRobot.png" alt="" class="error-img">
      <div class="error-tit">
        糟糕！
      </div>
      <div class="error-text">
        這個頁面發生錯誤
      </div>
      <div class="btnArea margin-top-20">
        <el-button type="primary" @click="$router.go(-1)"><i class="fa-solid fa-angle-left"></i>&nbsp;返回前一頁</el-button>
      </div>
    </div>
  </div>

</template>
