import { headLine, bigGuySays, data } from './informate.class';

import { Common } from '@/utils/common';

import TabContent from '../components/tabcontent/tabcontent.vue';

export default {
  name: 'informate',
  components: { TabContent },
  data() {
    return {
      headLine,
      says: bigGuySays.slice(0, 4),
      data
    };
  },
  methods: {
    refresh() {
      this.says = Common.randomArray(bigGuySays, 4);
      console.log(this.says.map(item => item.id));
    }
  }
};
