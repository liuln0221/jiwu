import Local from './local/local.vue';
import Dynamic from './dynamic/dynamic.vue';
import BigGuy from './bigguy/bigguy.vue';
import Informate from './informate/informate.vue';

const routes = [
  {
    name: 'newsLocal',
    path: 'local',
    component: Local,
    meta: {
      label: '本地咨讯'
    }
  },
  {
    name: 'newsDynamic',
    path: 'dynamic',
    component: Dynamic,
    meta: {
      label: '动态'
    }
  },
  {
    name: 'newsBigGuy',
    path: 'bigGuy',
    component: BigGuy,
  },
  {
    name: 'newsInformate',
    path: 'new',
    component: Informate,
    meta: {
      label: '咨讯'
    }
  }
];

export default routes;
