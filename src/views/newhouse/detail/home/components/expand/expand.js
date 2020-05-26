export default {
  name: 'expand',
  props: [ 'data' ],
  data() {
    return {
      activeName: 'nearbyProperty',
      option: {
        nearbyProperty: [
          { name: 'shouchuangtianxi', label: '首创天禧' },
          { name: 'zhonghaifengdangongguan', label: '中海枫丹公馆' }
        ],
        neighborhood: [
          { name: 'huipudasha', label: '惠普大厦' },
          { name: 'nanlangjiayuan', label: '南郎家园' }
        ],
        randomRecommendation: [
          { name: 'rongchuangyizhuangyihao', label: '融创亦庄壹号' },
          { name: 'dongfanglanhaizhongxin', label: '东方蓝海中心' }
        ]
      }
    };
  }
};
