import { times, rates } from './property.class';

import { Sales } from '@/api';

export default {
  name: 'property',
  data() {
    return {
      data: {
        type: 'quota',
        money: '',
        time: 360,
        rate: 1
      },
      times,
      rates,
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
