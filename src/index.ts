/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue';
import App from './App.vue';

// eslint-disable-next-line no-new
Vue.config.productionTip = false;

new Vue({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render: h => h(App),
}).$mount('#app');

function test() {
  console.log('Boo');
}
