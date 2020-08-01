import { Sales } from '@/api';

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
    }
  },
  mounted() {
    this.getSales();
  }
}
