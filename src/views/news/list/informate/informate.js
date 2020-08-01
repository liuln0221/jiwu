import { headLine, bigGuySays } from './informate.class';

import { Common } from '@/utils/common';

import TabContent from '../components/tabcontent.vue';
import { News } from '@/api';

export default {
  name: 'informate',
  components: { TabContent },
  data() {
    return {
      headLine,
      says: bigGuySays.slice(0, 4),
      data: [],
      page: {
        current: 1,
        size: 20,
        total: 0
      }
    };
  },
  methods: {
    refresh() {
      this.says = Common.randomArray(bigGuySays, 4);
    },
    getNewsMarkets() {
      const param = {
        pageIndex: this.page.current,
        pageSize: this.page.size,
        searchCount: true
      };
      News.getNewsMarkets(param).then(res => {
        this.data = res.data;
        this.page.total = res.totalRow;
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getNewsMarkets();
    }
  },
  mounted() {
    this.getNewsMarkets();
  }
};
