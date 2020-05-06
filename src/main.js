import Vue from 'vue';
import App from './App.vue';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './views/router';
import store from './store';

import '@/styles/index.scss';

Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
