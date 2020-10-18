import { Sales, Consult } from '@/api';

export default {
  name: 'adviser',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getSales() {
      const param = {
        pageIndex: 1,
        pageSize: 2
      };
      Sales.getSales(param).then(res => {
        this.data = res.data;
      });
    },
    /**
     * 咨询服务
     * 
     * @param {string} id 顾问id
     */
    consultRegister(id) {
      const param = {
        saleManId: id
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
