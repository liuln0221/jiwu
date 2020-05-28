import Local from './local/local.vue';
import Dynamic from './dynamic/dynamic.vue';
import BigGuy from './bigguy/bigguy.vue';
import Informate from './informate/informate.vue';

const routes = [
  {
    name: 'informationLocal',
    path: 'local',
    component: Local,
  },
  {
    name: 'informationDynamic',
    path: 'dynamic',
    component: Dynamic,
  },
  {
    name: 'informationBigGuy',
    path: 'bigGuy',
    component: BigGuy,
  },
  {
    name: 'informationInformate',
    path: 'informate',
    component: Informate,
  }
];

export default routes;
