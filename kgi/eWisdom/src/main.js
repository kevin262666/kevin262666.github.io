import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VueScrollTo from 'vue-scrollto';

import './assets/main.scss'

import App from './App.vue'
import router from './router'
import store from './stores';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(store);
app.use(ElementPlus, {
    locale: zhTw,
})
app.use(VueScrollTo);

app.mount('#app')