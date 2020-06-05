import { mapState } from 'vuex';
import { filters, store } from './list.class';

import List from './components/list/list.vue';
import Selected from './components/selected/selected.vue';
import PriceTrend from './components/pricetrend/pricetrend.vue';

export default {
  name: 'oldHouseList',
  components: { List, Selected, PriceTrend },
  data() {
    return {
      filters,
      filtersExpand: false,
      filter: {
        region: '',
        price: '',
        area: '',
        houseType: '',
        tag: '',
        renovation: '',
        orientation: ''
      },
      selected: [],
      sort: {
        release: '',
        price: '',
        area: ''
      },
      store
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  },
  methods: {
    selectBtn(val, store, type, key = 'name') {
      this.filter[type] = val.name ? val : undefined;
      store.forEach((item, index) => {
        if (item[key] === val[key]) {
          store[index].active = true;
        } else {
          store[index].active = false;
        }
      });
      this.selected = this.getSelected();
    },
    getSelected() {
      const result = [];
      for (const val in this.filter) {
        if (this.filter[val]) {
          result.push({ name: val, value: this.filter[val] });
        }
      }
      return result;
    },
    filterExpand() {
      this.filtersExpand = !this.filtersExpand;
      this.filters.forEach((item, index) => {
        if (index === 5 || index === 6) {
          this.filters[index].hide = !this.filtersExpand;
        }
      })
    },
    clear() {
      for(const key in this.filter) {
        this.filter[key] = undefined;
      }
      this.clearBtn();
      this.selected = this.getSelected();
    },
    clearBtn() {
      this.filters.forEach((item, index) => {
        item.options[0].active = true;
        this.filters[index].options.find((item, ind) => ind !== 0).active = false;
      });
      this.$router.push({ name: 'oldHouse' });
    },
    resetBtn(val) {
      this.filter[val.name] = undefined;
      const store = this.filters.find(item => item.name === val.name);
      if (store) {
        store.options[0].active = true;
        store.options.find(item => item.name === val.value.name).active = false;
      }
      this.selected = this.getSelected();
      this.$router.push({ name: 'oldHouse' });
    },
    defaultSort() {
      this.sort.release = '';
      this.sort.price = '';
      this.sort.area = '';
    },
    releaseSort() {
      this.sort.release = this.sort.release === 'desc' ? 'asc' : 'desc';
      this.sort.price = '';
      this.sort.area = '';
    },
    priceSort() {
      this.sort.price = this.sort.price === 'desc' ? 'asc' : 'desc';
      this.sort.release = '';
      this.sort.area = '';
    },
    areaSort() {
      this.sort.area = this.sort.area === 'desc' ? 'asc' : 'desc';
      this.sort.release = '';
      this.sort.price = '';
    }
  },
  mounted() {
    if (this.$route.query.region) {
      const store = this.filters.find(item => item.name === 'region' ).options;
      const val = store.find(item => item.name === this.$route.query.region);
      this.selectBtn(val, store, 'region');
    } else if (this.$route.query.price) {
      const store = this.filters.find(item => item.name === 'price' ).options;
      const val = store.find(item => item.name === this.$route.query.price);
      this.selectBtn(val, store, 'price');
    }
  }
};
