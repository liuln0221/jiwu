import { data } from './cellinfo.class';

export default {
  name: 'cellInfo',
  data() {
    return {
      data
    };
  },
  computed: {
    store() {
      return [
        { label: '小区名', value: this.data.name },
        { label: '容积率', value: this.data.plotRatio ? `${this.data.plotRatio}%` : '' },
        { label: '物业类型', value: this.data.propertType },
        { label: '绿化率', value: this.data.greeninRate ? `${this.data.greeninRate}%` : '' },
        { label: '所属区域', value: this.data.region },
        { label: '建筑类型', value: this.data.buildingType },
        { label: '周边购物', value: this.data.shopping },
        { label: '周边医院', value: this.data.hospital },
        { label: '周边学校', value: this.data.school }
      ];
    }
  }
};
