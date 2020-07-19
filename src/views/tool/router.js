import Tool from './tool.vue';
import Property from './property/property.vue';

const routes = [
  {
    name: 'tool',
    path: 'tool',
    component: Tool,
    redirect: { name: 'toolProperty' },
    children: [
      {
        name: 'toolProperty',
        path: 'property',
        component: Property
      }
    ]
  }
];

export default routes;
