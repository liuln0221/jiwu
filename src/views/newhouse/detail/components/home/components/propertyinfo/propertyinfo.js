import { Common } from '@/utils/common';

import CustomTable from '@/components/customTable.vue';

const info = [
  { label: '建筑形式', value: 'architecturalForm', href: '' },
  { label: '装修状况', value: '', href: '' },
  { label: '物业类型', value: '', href: '' },

  { label: '规划面积', value: 'plannedArea' },
  { label: '建筑面积', value: '', href: '' },
  { label: '物 业 费', value: '', href: '' },

  { label: '容 积 率', value: '' },
  { label: '绿 化 率', value: '', href: '' },
  { label: '规划户数', value: '', href: '' },

  { label: '最大栋距', value: '' },
  { label: '最小栋距', value: '' },
  { label: '楼盘朝向', value: '' },

  { label: '物业公司', value: '', href: '1' },
  { label: '房屋产权', value: '', href: '' },
  { label: '预售许可证', value: '', href: '' },

  { label: '开 发 商', value: '', href: '' },
  { label: '销售代理', value: '', href: '' },
  // { label: '售楼处地址', value: '', href: '' }
];

export default {
  name: 'propertyInfo',
  props: [ 'data' ],
  components: { CustomTable },
  data() {
    return {
      store: {
        architecturalForm: '高层,塔楼,板楼',
        plannedArea: 3128.86
      }
    };
  },
  computed: {
    infos() {
      return Common.arrTwoDimensional(info, 3);
    }
  }
};
