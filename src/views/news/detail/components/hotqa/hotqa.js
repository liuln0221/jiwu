import { Faqs } from '@/api';

export default {
  name: 'hotQA',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getFaqs() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      Faqs.getFaqs(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getFaqs();
  }
};
