import Information from './information.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

import ListRoutes from './list/router';

const routes = [
  {
    name: 'information',
    path: '/information',
    component: Information,
    redirect: { name: 'informationList' },
    children: [
      {
        name: 'informationList',
        path: '',
        component: List,
        redirect: { name: 'informationLocal' },
        children: ListRoutes
      },
      {
        name: 'informationDetail',
        path: ':id',
        component: Detail
      }
    ]
  }
];

export default routes;
