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
          <li class="active">
            <RouterLink to="/Securities" title="證券" v-scroll-to="'#app'">
              證券
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/Futures" title="期權" v-scroll-to="'#app'">
              期權
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="secondNav">
      <div class="container">
        <ul>
          <li :class="{ 
                        'active': $route.path === '/Securities/OrderSet/ManyTriggersOrder' ||
                                  $route.path === '/Securities/OrderSet/ChooseOneOrTheOther' ||
                                  $route.path === '/Securities/OrderSet/LimitedEntryAndExit' ||
                                  $route.path === '/Securities/OrderSet/MoveOut' ||
                                  $route.path === '/Securities/OrderSet/TimingAndQuantitative'||
                                  $route.path === '/Securities/OrderSet/ChooseOneOfThree'||
                                  $route.path === '/Securities/OrderSet/MotherAndSon'||
                                  $route.path === '/Securities/OrderSet/MotherAndSonPro' }">
            <RouterLink to="/Securities" title="智慧單設定" v-scroll-to="'#main'">
              <img src="/images/navIcon1.svg" alt="智慧單設定">
              <span>
                智慧單設定
              </span>
            </RouterLink>
          </li>
          <li :class="{
                        'active': $route.path === '/Securities/Inquiry/Monitoring' ||
                                  $route.path === '/Securities/Inquiry/History' }">
            <RouterLink to="/Securities/Inquiry" title="智慧單設定" v-scroll-to="'#main'">
              <img src="/images/navIcon2.svg" alt="智慧單查詢">
              <span>
                智慧單查詢
              </span>
            </RouterLink>
          </li>
          <li :class="{ 'active': $route.path === '/Securities/SetNotifications' }">
            <RouterLink to="/Securities/SetNotifications" title="通知設定" v-scroll-to="'#main'">
              <img src="/images/navIcon3.svg" alt="通知設定">
              <span>
                通知設定
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <RouterView />

</template>
