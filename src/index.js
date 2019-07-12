import Vue from 'vue';
import App from './index.vue';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  render: h => h(App),
}).$mount('#app');
