import News from './news.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

import ListRoutes from './list/router';

const routes = [
  {
    name: 'information',
    path: 'news',
    component: News,
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
