import { bigGuys } from './rightlib.class';

import { News } from '@/api';

export default {
  name: 'rightLib',
  data() {
    return {
      bigGuys,
      data: []
    };
  },
  methods: {
    getNewsLocalTop() {
      const param = {
        size: 5
      };
      News.getNewsLocalTop(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getNewsLocalTop();
  }
};
