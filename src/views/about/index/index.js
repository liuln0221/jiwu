import { menus } from './index.class';

export default {
  name: 'index',
  data() {
    return {
      menus,
      activeIndex: menus[0].name,
      data: [
        '深圳市吉屋网络技术有限公司，是中国领先的房产交易服务平台。吉屋以科技创新为本，着力于互联网核心技术突破，在云计算、大数据、智能营销、智能硬件等技术领域处于房产行业领先水平。自2011年成立起，运用先进的技术，成功创新线上客源、线下渠道以及金融资源的连接模式，重构房产交易生态圈，实现了开发商、销售机构和购房者多方共赢的崭新跨越。',
        '腾讯背景的管理团队，加上经验丰富的房产营销精英，成就了吉屋在业内的领先地位。超过3000万的月度访客和案场到访形成的购房者偏好大数据，能够让购房需求和房源精准匹配，无论是线上蓄客，还是线下看房、渠道拓展、客户界定、案场成交直至佣金结算，吉屋都实现了全流程的系统化和移动化，帮助房产销售从简单粗暴到智能高效的迭代更替。'
      ]
    };
  },
  methods: {
    routerChange() {
      this.activeIndex = this.$route.matched[2].name;
    }
  },
  mounted() {
    this.routerChange();
  },
  watch: {
    $route() {
      this.routerChange();
    }
  }
};