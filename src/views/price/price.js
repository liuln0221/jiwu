import { mapGetters } from 'vuex';

import AvgPrice from './components/avgprice/avgprice.vue'; // 均价
import Trend from './components/trend/trend.vue'; // 房价走势
import Adviser from './components/adviser/adviser.vue'; // 置业管家
import RegionPriceRank from './components/regionpricerank/regionpricerank.vue'; // 区域房价排行
import Distribution from './components/distribution/distribution.vue'; // 价格分布

import { Region } from '@/api';

export default {
  name: 'price',
  components: { AvgPrice, Trend, Adviser, RegionPriceRank, Distribution },
  data() {
    return {
      data: []
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    getCurrentRegion() {
      const region = this.$route.query.region ? this.$route.query.region : 'all';
      this.data.forEach((item, index) => {
        if (item.code == region) {
          this.data[index].active = true;
        } else {
          this.data[index].active = false;
        }
      });
      this.$forceUpdate();
    },
    getChildRegion() {
      Region.getChildRegion().then(res => {
        this.data = res.data;
        this.data.unshift({
          code: 'all',
          name: '全部'
        });
        this.getCurrentRegion();
      });
    }
  },
  watch: {
    $route() {
      this.getCurrentRegion();
    }
  },
  mounted() {
    this.getChildRegion();
  }
};
