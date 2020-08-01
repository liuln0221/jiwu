import Expand from '@/views/newhouse/detail/components/expand/expand.vue';
import HotProject from '@/views/components/hotproject/hotproject.vue';

import { Faqs, Sales } from '@/api';

export default {
  name: 'qa',
  props: [ 'data' ],
  components: { Expand, HotProject },
  data() {
    return {
      qas: [
        {
          q: '梵悦108售楼处电话是多少？',
          a: '梵悦108咨询电话： 400-6690-048 转 734 。欢迎致电了解楼盘在售房源价格，现场优惠打折活动。'
        },
        {
          q: '梵悦108为什么便宜？',
          a: '梵悦108的位置在北京市朝阳区建国路乙108号，最新房价约为100000元/平米。属于高层,塔楼,板楼类型的建筑。规划面积3128.86平米、建筑面积65519.0平米、容积率2.1、绿化率30.0%。在同类型楼盘中，梵悦108属于性价比比较高的一类。'
        },
        {
          q: '梵悦108售楼处电话是多少？',
          a: '梵悦108咨询电话： 400-6690-048 转 734 。欢迎致电了解楼盘在售房源价格，现场优惠打折活动。'
        },
        {
          q: '梵悦108为什么便宜？',
          a: '梵悦108的位置在北京市朝阳区建国路乙108号，最新房价约为100000元/平米。属于高层,塔楼,板楼类型的建筑。规划面积3128.86平米、建筑面积65519.0平米、容积率2.1、绿化率30.0%。在同类型楼盘中，梵悦108属于性价比比较高的一类。'
        }
      ],
      sales: [],
      question: ''
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getFaqs() {
      const param = {
        projectId: this.projectId,
        pageIndex: 1,
        pageSize: 20
      };
      Faqs.getFaqs(param).then(res => {
        this.qas = res.data || [];
      });
    },
    /**
     * 获取顾问列表
     */
    getSales() {
      const param = {
        pageIndex: 1,
        pageSize: 2
      };
      Sales.getSales(param).then(res => {
        this.sales = res.data;
      });
    },
    askQuestion() {
      const param = {
        projectId: this.projectId,
        question: this.question
      };
      Faqs.askQuestion(param).then(res => {
        if (res.code === 10021) {
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  },
  mounted() {
    this.getFaqs();
    this.getSales();
  }
};
