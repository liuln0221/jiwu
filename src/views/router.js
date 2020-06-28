import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';

import homeRoutes from './home/router'; // 首页
import newHouseRoutes from './newhouse/router'; // 新房
import oldHouseRoutes from './oldhouse/router'; // 二手房
import informationRoutes from './information/router'; // 资讯
import guideRoutes from './guide/router'; // 指南
import qaRoutes from './qa/router'; // 问答
import adviserRoutes from './adviser/router'; // 置业顾问
import aboutRoutes from './about/router'; // 关于

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'home' },
    children: [
      ...homeRoutes,
      ...newHouseRoutes,
      ...oldHouseRoutes,
      ...informationRoutes,
      ...guideRoutes,
      ...qaRoutes,
      ...adviserRoutes
    ]
  },
  ...aboutRoutes
];

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});