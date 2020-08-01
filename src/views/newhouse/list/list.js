import { mapGetters } from 'vuex';
import { store } from './list.class';

import Houses from './components/houses/houses.vue'; // 新盘
import Metro from './components/metro/metro.vue'; // 地铁
import List from './components/list/list.vue'; // 列表
import Explain from '@/views/components/explain/explain.vue'; // 说明
import { Project, Region, Price, ProjectLabel } from '@/api';

export default {
  name: 'newHouse',
  components: { Houses, Metro, List, Explain },
  data() {
    return {
      activeName: 'houses',
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
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    tabClick(tab) {
      switch(tab.name) {
        case 'houses':
          this.$router.push({ name: 'newHouseList' });
          break;
        case 'hot':
          this.$router.push({ name: 'hotHouse' });
          break;
        case 'help':
          this.$router.push({ name: 'help' });
          break;
      }
    },
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
    getHot() {
      const param = {
        searchCount: true, // 是否查询总页数
        pageIndex: this.page.current,
        pageSize: this.page.size
      };
      Project.getHot(param).then(res => {
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

        this.$refs.filter.getFilter();
      });
    },
    init() {
      switch(this.$route.name) {
        case 'newHouseList':
        case 'newHouseListFilter':
          this.activeName = 'houses';
          this.getProject();
          this.getChildRegion();
          break;
        case 'hotHouse':
          this.activeName = 'hot';
          this.getHot();
          break;
      }
    }
  },
  mounted() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    }
  }
};
