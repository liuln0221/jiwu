import About from './about.vue';
import Index from './index/index.vue';
import Contact from './contact/contact.vue';

import serviceStatementRoutes from './serviceStatement/router';

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
    redirect: { name: 'index' },
    children: [
      {
        path: 'index',
        name: 'index',
        component: Index,
      },
      {
        path: 'contact',
        name: 'contact',
        component: Contact
      },
      ...serviceStatementRoutes
    ]
  }
];

export default routes;
