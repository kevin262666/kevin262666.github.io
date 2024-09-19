<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();
</script>

<template>

  <template v-if="!store.state.darkMode">
    <header class="header">
      <div class="container">
        <div class="header-logo">
          <img src="/images/logo.svg" alt="凱基證券">
        </div>
        <div class="header-loginOut">
          <RouterLink to="/" title="登出" v-scroll-to="'#app'">
            登出
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </RouterLink>
        </div>
      </div>
    </header>
    <div class="kv">
      <img src="/images/headBg.jpg" alt="" class="kv-bg">
      <div class="container">
        <h1 class="kv-tit" title="凱基e智慧">
          凱基e智慧
        </h1>
        <div class="kv-text">
          為您掌握 交易機會
        </div>
      </div>
    </div>
  </template>

  <article class="main" id="main">
    <RouterView />
  </article>

  <footer class="footer" v-if="!store.state.darkMode">
    <div class="container">
      凱基證券股份有限公司 | <span>客服專線： (02)2389-0088</span> | <span>0800-085-005</span>
      <br /><span>地址：台北市明水路700號</span> | <span>112年金管證總字第0025號</span>
    </div>
  </footer>

  <el-backtop :bottom="100">
    <div>
      <i class="fa-solid fa-arrow-up"></i>
    </div>
  </el-backtop>
</template>

<style lang="scss"></style>
