import { News } from '@/api';

export default {
  name: 'hotList',
  data() {
    return {
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
