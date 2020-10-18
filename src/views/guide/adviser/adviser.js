// import { data } from './adviser.class';
import { Sales, Consult } from '@/api';

export default {
  name: 'adviser',
  data() {
    return {
      data: [],
      page: {
        current: 1,
        size: 1,
        total: 0
      }
    };
  },
  methods: {
    getSales() {
      const param = {
        pageIndex: this.page.current,
        pageSize: this.page.size
      };
      Sales.getSales(param).then(res => {
        this.data = res.data && res.data.length > 0 ? res.data[0] : {};
      });
    },
    /**
     * 咨询服务
     */
    consultRegister() {
      const param = {
        saleManId: this.data.id
      };
      Consult.consultRegister(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  },
  mounted() {
    this.getSales();
  }
};
