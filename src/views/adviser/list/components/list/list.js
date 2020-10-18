import { Sales, Consult } from '@/api';

export default {
  name: 'list',
  data() {
    return {
      data: [],
      page: {
        current: 1,
        size: 10,
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
        this.data = res.data;
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getNewsMarkets();
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
}
