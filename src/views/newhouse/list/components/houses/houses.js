import { propertyTypes, saleStatus, openStatus } from './houses.class';

export default {
  name: 'houses',
  props: [ 'regions', 'priceIntervals', 'labels' ],
  data() {
    return {
      data: {
        region: undefined, // 区域
        priceInterval: undefined, // 均价
        specialCar: false, // 专车看房
        propertyType: '', // 物业类型
        label: '', // 楼盘特色
        saleStatus: '', // 销售状态
        openStatus: '' // 开盘时间
      },
      propertyTypes,
      saleStatus,
      openStatus
    };
  },
  computed: {
    selectOptions() {
      return [
        { name: 'propertyType', label: '物业类型', options: propertyTypes },
        { name: 'label', label: '楼盘特色', options: this.labels },
        { name: 'saleStatus', label: '销售状态', options: saleStatus },
        { name: 'openStatus', label: '开盘状态', options: openStatus }
      ];
    }
  },
  methods: {
    selectBtn(val, store, type, key = 'id') {
      this.data[type] = val && val[key] ? val : undefined;
      store.forEach((item, index) => {
        if (item[key] === val[key]) {
          store[index].active = true;
        } else {
          store[index].active = false;
        }
      });
      this.getSelected();
    },
    resetBtn(val, key = 'id') {
      if (val.name === 'specialCar') {
        this.data[val.name] = false;
      } else {
        this.data[val.name] = undefined;
        const store = this[`${val.name}s`];
        if (store) {
          store[0].active = true;
          store.find(item => item[key] === val.value[key]).active = false;
        }
      }
      // this.$router.push({ name: 'newHouse' });
      this.getSelected();
    },
    clearBtn() {
      // 区域
      this.regions[0].active = true;
      this.regions.find((item, index) => index !== 0).active = false;
      // 均价
      this.priceIntervals[0].active = true;
      this.priceIntervals.find((item, index) => index !== 0).active = false;

      // this.$router.push({ name: 'newHouse' });
    },
    clear() {
      for(const key in this.data) {
        if (key === 'specialCar') {
          this.data.specialCar = false;
        } else {
          this.data[key] = undefined;
        }
      }
      this.clearBtn();
      this.getSelected();
    },
    getSelected() {
      const result = [];
      for (const val in this.data) {
        if (this.data[val]) {
          if (val === 'specialCar' ) {
            result.push({ name: 'specialCar', value: { name: 'specialCar', label: '专车看房' } });
          } else {
            result.push({ name: val, value: this.data[val] });
          }
        }
      }
      this.$emit('getSelected', result);
    },
    getFilter() {
      if (this.$route.params.filter) {
        const params = this.$route.params.filter.split('-');
        const filter = {};
        params.forEach(item => {
          filter[item.replace(/[^a-zA-Z]/g, '')] = item.replace(/[^\d]/g, '');
        });

        for (const key in filter) {
          const store = this[`${key}s`] ? this[`${key}s`] : this[key];
          const val = store.find(item => item.id == filter[key]);
          this.selectBtn(val, store, key);
        }
      } else {
        this.$emit('getList');
      }
    }
  },
  mounted() {
    console.log(this.$route);
    if (this.$route.query.region) {
      const val = this.regions.find(item => item.id === this.$route.query.region);
      this.selectBtn(val, this.regions, 'region');
    } else if (this.$route.query.priceInterval) {
      const val = this.priceIntervals.find(item => item.id === this.$route.query.priceInterval);
      this.selectBtn(val, this.priceIntervals, 'priceInterval');
    }
  }
};
