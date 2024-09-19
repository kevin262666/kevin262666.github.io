import { createStore } from 'vuex';
import { useWindowSize } from '@vueuse/core' // Vue 組合實用程式集合

export default createStore({
  state: {
    test: '123', // $store.state.test
    darkMode: false,
    windowWidth: useWindowSize().width,
    windowHeight: useWindowSize().height,
    dialogWidth: '',
    setConditionsGutter: 40,
    setConditionsItemInputGutter: 16,
    hideSecuritiesOrFutures: false,
    passwordNotUpdatedLongTime: false,
  },
  mutations: {
    updateTest(state, newValue) {
      state.test = newValue;
    },
    updateDarkMode(state) {
      state.darkMode ? document.getElementsByTagName('html')[0].classList.add("dark") : document.getElementsByTagName('html')[0].classList.remove("dark");
    },
    updateDialogWidth(state) {
      // 在这里动态更新 dialogWidth
      state.dialogWidth = state.windowWidth >= 768 ? '480px' : '362px';
      // console.log(state.dialogWidth);
    },
    updateSetConditionsGutter(state) {
      // 在这里动态更新 dialogWidth
      state.setConditionsGutter = state.windowWidth >= 768 ? 40 : 10;
      // console.log(state.setConditionsGutter);
    },
    hideSecuritiesOrFutures(state) {
      state.hideSecuritiesOrFutures ? document.getElementsByTagName('html')[0].classList.add("hideSecuritiesOrFutures") : document.getElementsByTagName('html')[0].classList.remove("hideSecuritiesOrFutures");
    },
  },
  plugins: [
    (store) => {
      // 初始化时调用一次更新
      store.commit('updateDialogWidth');
      store.commit('updateSetConditionsGutter');
      store.commit('updateDarkMode');
      store.commit('hideSecuritiesOrFutures');

      // 在这里使用 store.watch 监听状态的变化

      // 在窗口大小变化时动态更新
      store.watch(
        (state) => state.windowWidth, () => {
          store.commit('updateDialogWidth');
        }
      );

      store.watch(
        (state) => state.setConditionsGutter, () => {
          store.commit('updateSetConditionsGutter');
        },
      );

      // 暗黑模式開關
      store.watch(
        (state) => state.darkMode, () => {
          store.commit('updateDarkMode');
        },
      );

      // 是否顯示證券/期權鍵
      store.watch(
        (state) => state.hideSecuritiesOrFutures, () => {
          store.commit('hideSecuritiesOrFutures');
        },
      );
    },
  ],
});