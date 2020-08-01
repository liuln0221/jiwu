import { News } from '@/api/index';

export default {
  name: 'news',
  data() {
    return {
      headlines: [],
      news: []
    };
  },
  methods: {
    getNewsMarkets() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      News.getNewsMarkets(param).then(res => {
        this.headlines = res.data;
      });
    },
    getNewsLocalTop() {
      const param = {
        size: 4
      };
      News.getNewsLocalTop(param).then(res => {
        this.news = res.data;
      });
    }
  },
  mounted() {
    this.getNewsMarkets();
    this.getNewsLocalTop();
  }
};
