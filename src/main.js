import Vue from 'vue';
import App from './App.vue';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './views/router';
import store from './store';

// global filters
import * as filters from './filters';

import '@/styles/index.scss';

Vue.use(Element, {
  size: 'medium' // set element-ui default size
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
