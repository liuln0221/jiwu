// import { store } from './list.class';

import Building from './components/building/building.vue'; // 新盘
import Metro from './components/metro/metro.vue'; // 地铁
import List from './components/list/list.vue'; // 列表
import Explain from '@/views/components/explain/explain.vue'; // 说明
import { Project } from '@/api';

export default {
  name: 'newHouse',
  components: { Building, Metro, List, Explain },
  data() {
    return {
      activeName: 'building',
      selected: [],
      sort: {
        price: '',
        // attention: ''
      },
      // store,
      store: []
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
      // this.sort.attention = '';
    },
    priceSort() {
      this.sort.price = this.sort.price === '' || this.sort.price === 'desc' ? 'asc' : 'desc';
      // this.sort.attention = '';
      this.getListQuery4Page();
    },
    // attentionSort() {
    //   this.sort.attention = this.sort.attention === '' || this.sort.attention === 'desc' ? 'asc' : 'desc';
    //   this.sort.price = '';
    // },
    getListQuery4Page() {
      const param = {
        asc: this.sort.price === 'asc' ? 'price' : undefined, // 正序排序字段
        descColumns: this.sort.price === 'desc' ? 'price' : undefined, // 倒序排序字段
        pageIndex: 1,
        pageSize: 20
      };
      Project.getListQuery4Page(param).then(res => {
        this.store = res.data;
      });
    }
  },
  mounted() {
    this.getListQuery4Page();
  }
};
