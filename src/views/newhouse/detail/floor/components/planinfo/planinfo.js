import { Common } from '@/utils/common';

import CustomTable from '@/components/customTable.vue';

import { Project } from '@/api';

const info = [
  { label: '单价', value: 'price' },
  { label: '开盘时间', value: 'openDate' },
  { label: '交房时间', value: 'deliveryDate' },

  { label: '咨询电话', value: 'sellPhone' },
  { label: '楼盘地址', value: 'site' },
  { label: '装修状况', value: 'decoration' },

  { label: '建筑形式', value: 'constructType' },
  { label: '规划面积', value: 'plannedArea' },
  { label: '建筑面积', value: 'floorArea' },

  {
    label: '主力户型',
    getValue: (val) => {
      return val.mainRoomLayout
        ? val.mainRoomLayout.join('，')
          ? val.mainRoomLayout.join('，')
          : '暂无数据'
        : '暂无数据';
    }
  },
  { label: '容 积 率', value: 'plotRatio' },
  { label: '绿 化 率', value: 'greeningRate' },

  { label: '房屋产权', value: 'propertyRightType' },
  { label: '规划户数', value: 'plannedHouseholds' },
  { label: '车 位 数', value: 'undergroundParkSpaceNum' },

  { label: '最大栋距', value: 'maxSpace' },
  { label: '最小栋距', value: 'minSpace' },
  { label: '楼盘朝向', value: 'orientations' },

  { label: '物业公司', value: 'propertyCompany' },
  {
    label: '物业类型', 
    getValue: (val) => {
      return val.propertyType
        ? val.propertyType.join('，')
          ? val.propertyType.join('，')
          : '暂无数据'
        : '暂无数据';
    }
  },
  { label: '物 业 费', value: 'propertyFeePrice' },

  { label: '开 发 商', value: 'developerName' },
  { label: '销售代理', value: 'saleProxy' },
  { label: '工程进度', value: 'projectProgress' },

  { label: '预售许可证', value: 'advanceSalePermit' },
  { label: '售楼处地址', value: 'salesOfficeSite' },
  { label: '建筑设计单位', value: 'designCompany' },

  { label: '栋数', value: 'buildingNum' },
  { label: '施工单位', value: 'constructionCompany' }
];

export default {
  name: 'projectPlanInfo',
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
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.store = Common.merge(res.data, this.store);
      });
    },
    getProjectPlanInfo() {
      Project.getProjectPlanInfo(this.projectId).then(res => {
        this.store = Common.merge(res.data, this.store);
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectPlanInfo();
  }
};
