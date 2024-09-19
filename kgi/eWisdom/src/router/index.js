import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/Index',
      component: () => import('../views/Index.vue'),
      redirect: "/Securities/OrderSet/ManyTriggersOrder",
      children: [
        {
          // 證券
          path: '/Securities',
          component: () => import('../views/Securities.vue'),
          redirect: "/Securities/OrderSet/ManyTriggersOrder",
          children: [
            {
              // 智慧單設定
              path: 'OrderSet',
              component: () => import('../views/OrderSet.vue'),
              redirect: "/Securities/OrderSet/ManyTriggersOrder",
              children: [
                {
                  // 多條件觸價單
                  path: "ManyTriggersOrder",
                  component: () => import('../views/OrderSet_ManyTriggersOrder.vue')
                },
                {
                  // 二擇一出場單
                  path: "ChooseOneOrTheOther",
                  component: () => import('../views/OrderSet_ChooseOneOrTheOther.vue')
                },
                {
                  // 限時進出單
                  path: "LimitedEntryAndExit",
                  component: () => import('../views/OrderSet_LimitedEntryAndExit.vue')
                },
                {
                  // 移動出場單
                  path: "MoveOut",
                  component: () => import('../views/OrderSet_MoveOut.vue')
                },
                {
                  // 定時定量單
                  path: "TimingAndQuantitative",
                  component: () => import('../views/OrderSet_TimingAndQuantitative.vue')
                },
                {
                  // 三擇一出場單
                  path: "ChooseOneOfThree",
                  component: () => import('../views/OrderSet_ChooseOneOfThree.vue')
                },
                {
                  // 母子單
                  path: "MotherAndSon",
                  component: () => import('../views/OrderSet_MotherAndSon.vue')
                },
                {
                  // 母子Pro
                  path: "MotherAndSonPro",
                  component: () => import('../views/OrderSet_MotherAndSonPro.vue')
                },
              ],
            },
            {
              // 智慧單查詢
              path: 'Inquiry',
              component: () => import('../views/Inquiry.vue'),
              redirect: "/Securities/Inquiry/Monitoring",
              children: [
                {
                  // 監控中條件
                  path: "Monitoring",
                  component: () => import('../views/Inquiry_Monitoring.vue')
                },
                {
                  // 歷史監控
                  path: "History",
                  component: () => import('../views/Inquiry_History.vue')
                },
              ]
            },
            {
              // 通知設定
              path: 'SetNotifications',
              component: () => import('../views/SetNotifications.vue'),
            },
          ]
        },
        {
          // 期貨
          path: '/Futures',
          component: () => import('../views/Futures.vue'),
        },
        {
          // 錯誤頁面
          path: '/:pathMatch(.*)',
          component: () => import('../views/Error.vue'),
        },
      ]
    },
  ],
  // 換頁時如果有hash 就滾動
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
  },
})

export default router
