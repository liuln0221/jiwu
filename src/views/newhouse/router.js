import NewHouse from './newhouse.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

import NewHouseDetailRoutes from './detail/router';

const routes = [
  {
    name: 'newHouse',
    path: 'newHouse',
    component: NewHouse,
    redirect: { name: 'newHouseList' },
    children: [
      {
        name: 'newHouseList',
        path: '',
        component: List
      },
      {
        name: 'newHouseDetail',
        path: ':id',
        component: Detail,
        redirect: { name: 'newHouseDetailHome' },
        children: NewHouseDetailRoutes
      }
    ]
  }
];

export default routes;
