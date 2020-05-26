import { data } from '../detail.class';

import ProjectParams from './components/projectparams/projectparams.vue';
import ProjectIntroduction from './components/projectintroduction/projectintroduction.vue';
import PeripheralPark from './components/peripheralpark/peripheralpark.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

export default {
  name: 'floor',
  components: { ProjectParams, ProjectIntroduction, PeripheralPark, Disclaimer, Expand },
  data() {
    return {
      data
    };
  }
};
