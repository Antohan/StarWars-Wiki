import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';

import '@/plugins/fontawsome';
import '@/plugins/vuelidate';
import '@/plugins/base-components';

import '@/assets/scss/app.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
