import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/layout.vue';

import calculatorRoutes from './calculator/router'; // 工具（房贷计算器）
import homeRoutes from './home/router'; // 首页
import newHouseRoutes from './newhouse/router'; // 新房
import oldHouseRoutes from './oldhouse/router'; // 二手房
import newsRoutes from './news/router'; // 资讯
import guideRoutes from './guide/router'; // 指南
import qaRoutes from './qa/router'; // 问答
import priceRoutes from './price/router'; // 房价走势
import adviserRoutes from './adviser/router'; // 置业顾问
import helpRoutes from './help/router'; // 帮我找房
import aboutRoutes from './about/router'; // 关于

import HouseTypeDetail from './newhouse/detail/housetype/detail/detail.vue'; // 户型图详情
import AlbumDetail from './newhouse/detail/album/detail/detail.vue'; // 相册详情

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'home' },
    children: [
      ...calculatorRoutes,
      ...homeRoutes,
      ...newHouseRoutes,
      ...oldHouseRoutes,
      ...newsRoutes,
      ...guideRoutes,
      ...qaRoutes,
      ...priceRoutes,
      ...adviserRoutes,
      ...helpRoutes
    ]
  },
  ...aboutRoutes,
  {
    name: 'newHouseTypeDetail',
    path: '/houseType/:id',
    component: HouseTypeDetail
  },
  {
    name: 'newHouseAlbumDetail',
    path: '/album/:id',
    component: AlbumDetail
  }
];

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});