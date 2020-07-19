// import { data } from './list.class';

import { Sales } from '@/api';

export default {
  name: 'list',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getSales() {
      const param = {
        pageIndex: 1,
        pageSize: 8
      };
      Sales.getSales(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getSales();
  }
}
