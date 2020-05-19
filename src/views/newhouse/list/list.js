import { store } from './list.class';

import Building from './components/building/building.vue'; // 新盘
import Metro from './components/metro/metro.vue'; // 地铁
import List from './components/list/list.vue'; // 列表
import Explain from './components/explain/explain.vue'; // 说明

export default {
  name: 'newHouse',
  components: { Building, Metro, List, Explain },
  data() {
    return {
      activeName: 'building',
      selected: [],
      sort: {
        price: '',
        attention: ''
      },
      store
    };
  },
  methods: {
    getSelected(val) {
      this.selected = val;
    },
    selectClick(val) {
      this.$refs.filter.resetBtn(val);
    },
    clear() {
      this.$refs.filter.clear();
    },
    defaultSort() {
      this.sort.price = '';
      this.sort.attention = '';
    },
    priceSort() {
      this.sort.price = this.sort.price === 'desc' ? 'asc' : 'desc';
    },
    attentionSort() {
      this.sort.attention = this.sort.attention === 'desc' ? 'asc' : 'desc';
    }
  }
};
