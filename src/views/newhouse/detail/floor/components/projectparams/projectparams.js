import { Common } from '@/utils/common';

import CustomTable from '@/components/customTable.vue';

const info = [
  { label: '单价', value: 'unitPrice' },
  { label: '开盘时间', value: 'openingTime' },
  { label: '交房时间', value: '' },

  { label: '咨询电话', value: '' },
  { label: '楼盘地址', value: '', href: '1' },
  { label: '装修状况', value: '', href: '' },

  { label: '建筑形式', value: '', href: '' },
  { label: '规划面积', value: '', href: '' },
  { label: '建筑面积', value: '', href: '' },

  { label: '主力户型', value: '' },
  { label: '容 积 率', value: '', href: '' },
  { label: '绿 化 率', value: '', href: '' },

  { label: '房屋产权', value: '', href: '' },
  { label: '规划户数', value: '', href: '' },
  { label: '车 位 数', value: '', href: '' },

  { label: '最大栋距', value: '' },
  { label: '最小栋距', value: '', href: '' },
  { label: '楼盘朝向', value: '', href: '' },

  { label: '物业公司', value: '' },
  { label: '物业类型', value: '', href: '' },
  { label: '物 业 费', value: '', href: '' },

  { label: '开 发 商', value: '' },
  { label: '销售代理', value: '', href: '' },
  { label: '工程进度', value: '', href: '' },

  { label: '预售许可证', value: '' },
  { label: '售楼处地址', value: '', href: '' },
  { label: '建筑设计单位', value: '', href: '' },

  { label: '栋数', value: '', href: '' },
  { label: '施工单位', value: '', href: '' }
];

export default {
  name: 'projectParams',
  props: [ 'data' ],
  components: { CustomTable },
  data() {
    return {
      store: {
        unitPrice: 100000,
        openingTime: 1589796469530
      }
    };
  },
  computed: {
    infos() {
      return Common.arrTwoDimensional(info, 3);
    }
  }
};
