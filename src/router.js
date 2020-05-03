import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard',
    children: [
      // {
      //   path: 'dashboard',
      //   component: () => import('@/views/dashboard/index'),
      //   name: 'Dashboard',
      //   meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      // }
    ]
  }
];

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});