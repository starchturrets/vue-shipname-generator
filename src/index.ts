/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line no-new
Vue.config.productionTip = false;
// Initialize vue
new Vue({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => h(App),
}).$mount('#app');

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(reg => {
      // registration worked
      console.log(`Registration succeeded. Scope is ${reg.scope}`);
    })
    .catch(error => {
      // registration failed
      console.log(`Registration failed with ${error}`);
    });
}
