import CustomTable from '@/components/customTable.vue';

import { Project } from '@/api';

const info = [
  { label: '建筑形式', value: 'constructType' },
  { label: '装修状况', value: 'decoration' },
  {
    label: '物业类型',
    getValue: (val) => {
      return val.propertyType ? val.propertyType.join('，') : '暂无数据';
    }
  },

  { label: '规划面积', value: 'plannedArea' },
  { label: '建筑面积', value: 'floorArea' },
  { label: '物 业 费', value: 'propertyFeePrice' },

  { label: '容 积 率', value: 'plotRatio' },
  { label: '绿 化 率', value: 'greeningRate' },
  { label: '规划户数', value: 'plannedHouseholds' },

  { label: '最大栋距', value: 'maxSpace' },
  { label: '最小栋距', value: 'minSpace' },
  { label: '楼盘朝向', value: 'orientations' },

  { label: '物业公司', value: 'propertyCompany' },
  { label: '房屋产权', value: 'propertyRightType' },
  { label: '预售许可证', value: 'advanceSalePermit' },

  { label: '开 发 商', value: 'developerName' },
  { label: '销售代理', value: 'saleProxy' },
  { label: '售楼处地址', value: 'salesOfficeSite' }
];

export default {
  name: 'propertyInfo',
  props: [ 'data' ],
  components: { CustomTable },
  data() {
    return {
      info: info,
      store: {}
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectPlanInfo() {
      Project.getProjectPlanInfo(this.projectId).then(res => {
        this.store = res.data;
      });
    }
  },
  mounted() {
    this.getProjectPlanInfo();
  }
};
