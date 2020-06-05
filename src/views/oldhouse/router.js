import OldHouse from './oldhouse.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

const routes = [
  {
    name: 'oldHouse',
    path: 'oldHouse',
    component: OldHouse,
    redirect: { name: 'oldHouseList' },
    children: [
      {
        name: 'oldHouseList',
        path: '',
        component: List
      },
      {
        name: 'oldHouseDetail',
        path: ':id',
        component: Detail
      }
    ]
  }
];

export default routes;
