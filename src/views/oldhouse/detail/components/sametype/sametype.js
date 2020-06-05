import { data } from './sametype.class';
import { Common } from '@/utils/common';

import HouseResources from '../houseresources.vue';

export default {
  name: 'sameType',
  components: { HouseResources },
  data() {
    return {
      data: Common.arrTwoDimensional(data, 4)
    };
  }
};
