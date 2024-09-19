<script lang="ts" setup>
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import { useStore } from 'vuex';
// const store = useStore();

</script>

<template>

  <div class="headerNav">
    <div class="securitiesOrFutures">
      <div class="container">
        <ul class="switchBtn">
          <li>
            <RouterLink to="/Securities" title="證券" v-scroll-to="'#app'">
              證券
            </RouterLink>
          </li>
          <li class="active">
            <RouterLink to="/Futures" title="期權" v-scroll-to="'#app'">
              期權
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="block text-center">
      <img src="/images/construction.png" alt="" class="error-img margin-top-20">
      <div class="error-tit">
        建置中
      </div>
      <div class="error-text">
        敬請期待
      </div>
      <div class="btnArea margin-top-20">
        <el-button type="primary" @click="$router.go(-1)"><i class="fa-solid fa-angle-left"></i>&nbsp;返回前一頁</el-button>
      </div>
    </div>
  </div>
  <!-- <RouterView /> -->

</template>
