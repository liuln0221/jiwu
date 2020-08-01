import News from './news.vue';
import List from './list/list.vue';
import Detail from './detail/detail.vue';

import ListRoutes from './list/router';

const routes = [
  {
    name: 'news',
    path: 'news',
    component: News,
    meta: {
      label: '咨讯'
    },
    redirect: { name: 'newsList' },
    children: [
      {
        name: 'newsList',
        path: '',
        component: List,
        redirect: { name: 'newsLocal' },
        children: ListRoutes
      },
      {
        name: 'newsDetail',
        path: ':id',
        component: Detail
      }
    ]
  }
];

export default routes;
