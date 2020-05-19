import NewHouse from './newhouse.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

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
        path: ':id/detail',
        component: Detail
      }
    ]
  }
];

export default routes;
