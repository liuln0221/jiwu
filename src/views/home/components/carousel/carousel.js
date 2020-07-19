import { Banner } from '@/api/index';

export default {
  name: 'carousel',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getIndexBannerList() {
      Banner.getIndex().then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getIndexBannerList();
  }
};
