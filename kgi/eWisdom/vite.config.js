import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/news/event/eWisdom/', // 為了公司server設定基礎路徑
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // 設定全域共用
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/_variables.scss";
        `
      }
    },
    devSourcemap: true,
  },
})
