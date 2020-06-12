import Index from './index.vue';
import Profile from './profile/profile.vue';
import Culture from './culture/culture.vue';
// import Memorabilia from './memorabilia/memorabilia.vue';

const routes = [
  {
    path: 'index',
    name: 'index',
    component: Index,
    redirect: { name: 'profile' },
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'culture',
        name: 'culture',
        component: Culture
      }
    ]
  }
];

export default routes;
