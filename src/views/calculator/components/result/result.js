import { principalInterest, principal } from './result.class';

import CustomTable from '@/components/customTable.vue';

export default {
  name: 'result',
  props: [ 'custom' ],
  components: { CustomTable },
  data() {
    return {
      principalInterest,
      principal,
      principalInterestStore: {},
      principalStore: {}
    };
  },
  methods: {
    reset() {
      this.$emit('reset');
    }
  }
}
