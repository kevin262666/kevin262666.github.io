<script lang="ts" setup>
import { ref } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
// import { useStore } from 'vuex';
// const store = useStore();

const switch1 = ref(true),
      switch2 = ref(true),
      switch3 = ref(false),
      switch4 = ref(false)
</script>

<template>

  <div class="container">
    <div class="setNotifications-item-area">
      <div class="setNotifications-item">
        <div class="setNotifications-content">
          <div class="setNotifications-tit">
            <b>手機App / 電腦AP 條件觸發推播</b>
          </div>
          <ul class="setNotifications-info">
            <li>
              <el-switch v-model="switch1" id="switch1" />
              <label for="switch1">
                隨身e策略
              </label>
            </li>
            <li>
              <el-switch v-model="switch2" id="switch2" />
              <label for="switch2">
                隨身營業員
              </label>
            </li>
            <li>
              <el-switch v-model="switch3" id="switch3" />
              <label for="switch3">
                超級大三元
              </label>
            </li>
            <li>
              <el-switch v-model="switch4" id="switch4" />
              <label for="switch4">
                全球理財王
              </label>
            </li>
          </ul>
          <div class="remark">
            小提醒：如想收到委託與成交回報，請開啟各平台的委託、成交回報通知。
          </div>
        </div>
      </div>
      <div class="setNotifications-item">
        <div class="setNotifications-content">
          <div class="setNotifications-tit">
            <b>Email委託及成交回報</b>
          </div>
          <ul class="setNotifications-info">
            <li>
              請前往 <el-link type="primary">訂閱中心 <i class="fa-solid fa-up-right-from-square"></i></el-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
