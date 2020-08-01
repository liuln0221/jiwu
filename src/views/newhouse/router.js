import NewHouse from './newhouse.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';
// import HouseTypeDetail from './detail/housetype/detail/detail.vue'; // 户型图详情

import NewHouseDetailRoutes from './detail/router';

const routes = [
  {
    name: 'newHouse',
    path: 'loupan',
    component: NewHouse,
    meta: {
      label: '新房'
    },
    redirect: { name: 'newHouseList' },
    children: [
      {
        name: 'newHouseList',
        path: '',
        component: List,
        meta: {
          label: '新盘'
        }
      },
      {
        name: 'hotHouse',
        path: 'hot',
        component: List,
        meta: {
          label: '热销'
        }
      },
      {
        name: 'newHouseListFilter',
        path: 'filter/:filter',
        component: List,
        meta: {
          label: '新盘'
        }
      },
      {
        name: 'newHouseDetail',
        path: ':id',
        component: Detail,
        redirect: { name: 'newHouseDetailHome' },
        children: NewHouseDetailRoutes
      }
    ]
  },
  // {
  //   name: 'newHouseTypeDetail',
  //   path: 'houseType/:id',
  //   component: HouseTypeDetail
  // }
];

export default routes;
