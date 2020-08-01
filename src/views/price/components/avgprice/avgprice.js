import { mapGetters } from 'vuex';

import { Price } from '@/api';

export default {
  name: 'avgPrice',
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ]),
    region() {
      return this.$route.query.region;
    }
  },
  methods: {
    /**
     * 当前城市历史价格
     */
    getHistoryCurrentRegion() {
      // 新房
      Price.getHistoryCurrentRegion('1', { limit: 1 }).then(res => {
        this.data = res.data ? res.data.length > 0 ? res.data[0] : {} : {};
      });
    },
    /**
     * 指定区域历史价格
     */
    getHistoryRegion() {
      const param = {
        limit: 1
      };
      Price.getHistoryRegion(this.region, 1, param).then(res => {
        this.data = res.data ? res.data.length > 0 ? res.data[0] : {} : {};
      });
    },
    /**
     * 获取数据
     */
    getData() {
      if (this.region) {
        this.getHistoryRegion();
      } else {
        this.getHistoryCurrentRegion();
      }
    }
  },
  watch: {
    region() {
      this.getData();
    }
  },
  mounted() {
    this.getData();
  }
};