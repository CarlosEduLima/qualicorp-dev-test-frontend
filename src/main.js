import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import {router} from './routes'
import store from './store';
Vue.config.productionTip = false
Vue.use(VueToast);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
