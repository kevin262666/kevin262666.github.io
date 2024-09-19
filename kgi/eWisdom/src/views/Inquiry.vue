<script lang="ts" setup>
// import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
// import { useStore } from 'vuex';
// const store = useStore();
</script>

<template>
  <div class="switchOrder inquiryType">
    <div class="container">
      <div class="switchOrder-tab">
        <ul>
          <li :class="{'active': $route.path === '/Securities/Inquiry/Monitoring'}">
            <RouterLink to="/Securities/Inquiry/Monitoring" title="監控中條件" v-scroll-to="'#main'">
              監控中條件
            </RouterLink>
          </li>
          <li :class="{'active': $route.path === '/Securities/Inquiry/History'}">
            <RouterLink to="/Securities/Inquiry/History" title="歷史監控" v-scroll-to="'#main'">
              歷史監控
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <RouterView />
  </div>

</template>
