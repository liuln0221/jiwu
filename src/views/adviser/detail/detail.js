import { data } from './detail.class';

import Explain from '@/views/components/explain/explain.vue'; // 说明
import BaseInfo from './components/baseinfo/baseinfo.vue';
import ServiceDynamics from './components/servicedynamics/servicedynamics.vue';
import FamiliarProperties from './components/familiarproperties/familiarproperties.vue';

export default {
  name: 'adviserDetail',
  components: { Explain, BaseInfo, ServiceDynamics, FamiliarProperties },
  data() {
    return {
      data
    };
  }
};
