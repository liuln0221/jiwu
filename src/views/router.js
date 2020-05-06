import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';

import homeRouters from './home/router';


const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      ...homeRouters
    ]
  }
];

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});