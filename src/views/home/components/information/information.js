import { News } from '@/api/index';

export default {
  name: 'information',
  data() {
    return {
      headlines: [],
      informations: []
    };
  },
  methods: {
    getNewsMarketsTop() {
      const param = {
        size: 5
      };
      News.getNewsMarketsTop(param).then(res => {
        this.headlines = res.data;
      });
    },
    getNewsLocalTop() {
      const param = {
        size: 4
      };
      News.getNewsLocalTop(param).then(res => {
        this.informations = res.data;
      });
    }
  },
  mounted() {
    this.getNewsMarketsTop();
    this.getNewsLocalTop();
  }
};
