import { Sales } from '@/api';

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
    }
  },
  mounted() {
    this.getSales();
  }
};
