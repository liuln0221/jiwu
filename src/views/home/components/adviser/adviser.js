import { Sales } from '@/api/index';

export default {
  name: 'adviser',
  data() {
    return {
      advisers: []
    };
  },
  methods: {
    getSales() {
      const param = {
        pageIndex: 1,
        pageSize: 8
      };
      Sales.getSales(param).then(res => {
        this.advisers = res.data;
      });
    }
  },
  mounted() {
    this.getSales();
  }
};
