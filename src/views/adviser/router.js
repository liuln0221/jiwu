import Adviser from './adviser.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

const routes = [
  {
    name: 'adviser',
    path: 'adviser',
    component: Adviser,
    meta: {
      label: '置业顾问'
    },
    redirect: { name: 'adviserList' },
    children: [
      {
        name: 'adviserList',
        path: '',
        component: List
      },
      {
        name: 'adviserDetail',
        path: ':id',
        component: Detail
      }
    ]
  }
];

export default routes;
