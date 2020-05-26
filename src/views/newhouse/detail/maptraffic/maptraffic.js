import { data } from '../detail.class';

import Record from './components/record/record.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

export default {
  name: 'mapTraffic',
  components: { Record, Disclaimer, Expand },
  data() {
    return {
      data,
      activeName: 'business'
    };
  }
};
