import { Sales } from '@/api';

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
        pageSize: 2
      };
      Sales.getSales(param).then(res => {
        this.advisers = res.data;
      });
    }
  },
  mounted() {
    this.getSales();
  }
}