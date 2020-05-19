import { regions, avgPrices, propertyTypes, propertyFeatures, salesStatus, openingTimes } from './building.class';

export default {
  name: 'building',
  data() {
    return {
      data: {
        region: undefined, // 区域
        avgPrice: undefined, // 均价
        specialCar: false, // 专车看房
        propertyType: '', // 物业类型
        propertyFeature: '', // 楼盘特色
        salesStatus: '', // 销售状态
        openingTime: '' // 开盘时间
      },
      regions,
      avgPrices,
      selectOptions: [
        { name: 'propertyType', label: '物业类型', options: propertyTypes },
        { name: 'propertyFeature', label: '楼盘特色', options: propertyFeatures },
        { name: 'salesStatus', label: '销售状态', options: salesStatus },
        { name: 'openingTime', label: '开盘时间', options: openingTimes }
      ]
    };
  },
  methods: {
    selectBtn(val, store, type, key = 'name') {
      val.active = true;
      this.data[type] = val.name ? val : undefined;
      store.forEach((item, index) => {
        if (item[key] !== val[key]) {
          store[index].active = false;
        }
      });
      this.getSelected();
    },
    resetBtn(val) {
      if (val.name === 'specialCar') {
        this.data[val.name] = false;
      } else {
        this.data[val.name] = undefined;
        const store = this[`${val.name}s`];
        if (store) {
          store[0].active = true;
          store.find(item => item.name === val.value.name).active = false;
        }
      }
      this.getSelected();
    },
    clearBtn() {
      // 区域
      this.regions[0].active = true;
      this.regions.find((item, index) => index !== 0).active = false;
      // 均价
      this.avgPrices[0].active = true;
      this.avgPrices.find((item, index) => index !== 0).active = false;
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
    }
  }
};
