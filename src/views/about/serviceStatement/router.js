import ServiceStatement from './serviceStatement.vue';
import Agreement from './agreement/agreement.vue';
import Disclaimer from './disclaimer/disclaimer.vue';

const routes = [
  {
    path: '',
    name: 'serviceStatement',
    component: ServiceStatement,
    redirect: { name: 'agreement' },
    children: [
      {
        path: 'agreement',
        name: 'agreement',
        component: Agreement
      },
      {
        path: 'disclaimer',
        name: 'disclaimer',
        component: Disclaimer
      }
    ]
  }
];

export default routes;
