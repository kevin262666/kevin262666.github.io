<script lang="ts" setup>
import { reactive } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useStore } from 'vuex';
const store = useStore();

const form = reactive({
  input: '',
  input2: '',
  input3: '',
})
</script>

<template>

  
  <div class="login">
    <div class="login-bg"></div>
    <div class="container">
      <div class="login-content">
        <el-form :model="form">
          <div class="login-content-logo">
            <img src="/images/logo.svg" alt="" v-if="!store.state.darkMode">
            <img src="/images/logo_white.svg" alt="" v-else>
          </div>
          <div class="login-content-tit">
            歡迎登入凱基e智慧
          </div>
          <div class="login-content-item">
            <el-input v-model="form.input" placeholder="請輸入您的身分證字號" />
          </div>
          <div class="login-content-item">
            <el-input
              v-model="form.input2"
              type="password"
              placeholder="請輸入您的密碼"
              show-password
            />
            <div class="text-right">
              <el-link type="primary">忘記密碼？</el-link>
            </div>
          </div>
          <div class="login-content-item">
            <div class="login-content-item-tit">
              圖形驗證碼
            </div>
            <div class="captcha">
              <el-input v-model="form.input3" placeholder="請輸入驗證碼" autocomplete="off" />
              <img src="/images/captcha.png" alt="">
              <i class="fa-solid fa-rotate"></i>
            </div>
          </div>
          <div class="login-content-item">
            <el-button type="primary" plain @click="store.state.passwordNotUpdatedLongTime = true">登入&nbsp;<i class="fa-solid fa-arrow-right-long"></i></el-button>
          </div>
          <div class="login-content-item">
            我記得密碼，我要<el-link type="primary">密碼解鎖</el-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>

  <el-dialog
    v-model="store.state.passwordNotUpdatedLongTime"
    title="訊息提示"
    :width="store.state.dialogWidth"
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
  >
    <div>
      提醒您，您的電子登入密碼超過一年未變更，建議您儘快更新密碼，以提升交易帳戶安全性。
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$router.push('/Index'); store.state.passwordNotUpdatedLongTime = false">暫不變更</el-button>
        <el-button type="primary">更新密碼</el-button>
      </span>
    </template>
  </el-dialog>

</template>
