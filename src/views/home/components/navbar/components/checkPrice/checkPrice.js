import { mapGetters } from 'vuex';

import { Price } from '@/api/index';

export default {
  name: 'checkPrice',
  data() {
    return {
      newHousePrice: {
        value: 48882,
        trend: -30
      },
      oldHousePrice: {
        value: 68340,
        trend: -130
      }
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    /**
     * 均价
     */
    getHistoryCurrentRegion() {
      // 新房
      Price.getHistoryCurrentRegion('1', { limit: 1 }).then(res => {
        this.newHousePrice = res.data[0] ? res.data[0] : {};
      });
    }
  },
  mounted() {
    this.getHistoryCurrentRegion();
  }
};
