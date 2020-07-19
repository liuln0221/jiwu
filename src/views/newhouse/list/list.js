import { store } from './list.class';

import Building from './components/building/building.vue'; // 新盘
import Metro from './components/metro/metro.vue'; // 地铁
import List from './components/list/list.vue'; // 列表
import Explain from '@/views/components/explain/explain.vue'; // 说明
import { Project, Region, Price, ProjectLabel } from '@/api';

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
      store: [],
      page: {
        current: 1,
        size: 20,
        total: 0
      },
      regions: [],
      priceIntervals: [],
      labels: []
    };
  },
  methods: {
    getSelected(val) {
      this.selected = val;
      this.getProject();
      if (val.length > 0) {
        let filter = [];
        val.forEach(item => {
         filter.push(`${item.name}${item.value.id}`);
        });
        this.$router.push({ name: 'newHouseListFilter', params: { filter: filter.join('-') } });
      } else {
        this.$router.push({ name: 'newHouseList'});
      }
      
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
      this.getProject();
    },
    // attentionSort() {
    //   this.sort.attention = this.sort.attention === '' || this.sort.attention === 'desc' ? 'asc' : 'desc';
    //   this.sort.price = '';
    // },
    getFilter() {
      if (this.$route.params.filter) {
        const params = this.$route.params.filter.split('-');
        const filter = {};
        params.forEach(item => {
          filter[item.replace(/[^a-zA-Z]/g, '')] = item.replace(/[^\d]/g, '');
        });

        for (const key in filter) {
          const store = this[`${key}s`];
          const val = store.find(item => item.id == filter[key]);
          this.$refs.filter.selectBtn(val, store, key);
        }
      } else {
        this.getProject();
      }
    },
    getProject() {
      const label = this.selected.find(item => item.name === 'label');
      const openStatus = this.selected.find(item => item.name === 'openStatus');
      const priceInterval = this.selected.find(item => item.name === 'priceInterval');
      const propertyType = this.selected.find(item => item.name === 'propertyType');
      const region = this.selected.find(item => item.name === 'region');
      const saleStatus = this.selected.find(item => item.name === 'saleStatus');

      const param = {
        ascColumns: this.sort.price === 'asc' ? 'price' : undefined, // 正序排序字段
        descColumns: this.sort.price === 'desc' ? 'price' : undefined, // 倒序排序字段
        labelId: label ? label.value.id : undefined, // 特色
        openStatus: openStatus ? openStatus.value.id : undefined, // 开盘状态
        priceIntervalId: priceInterval ? priceInterval.value.id : undefined, // 单价区间
        propertyType: propertyType ? propertyType.value.id : undefined, // 物业类型
        regionCode: region ? region.value.id : undefined, // 区域
        saleStatus: saleStatus ? saleStatus.value.id : undefined, // 销售状态
        searchCount: true, // 是否查询总页数
        pageIndex: this.page.current,
        pageSize: this.page.size
      };

      Project.getProject(param).then(res => {
        this.page.total = res.totalRow;
        this.store = res.data ? res.data : store;
      });
    },
    /**
     * 获取区域列表
     */
    getChildRegion() {
      Region.getChildRegion().then(res => {
        this.regions = res.data.map(item => {
          return {
            id: item.code,
            name: item.name,
            active: false
          };
        });
        this.regions.unshift({
          id: '',
          name: '全部',
          active: true
        });
        
        this.getPriceLevles();
      });
    },
    /**
     * 获取价格区间
     */
    getPriceLevles() {
      // 新房
      Price.getLevels({ type: '1' }).then(res => {
        this.priceIntervals = res.data.map(item => {
          item.active = false;
          return item;
        });
        this.priceIntervals.unshift({
          id: '',
          name: '全部',
          active: true
        }); 
        
        this.getProjectLabel();
      });
    },
    /**
     * 获取楼盘特色
     */
    getProjectLabel() {
      ProjectLabel.getProjectLabel().then(res => {
        this.labels = res.data;

        this.getFilter();
      });
    }
  },
  mounted() {
    // this.getProject();
    this.getChildRegion();
  }
};
