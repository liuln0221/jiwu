import { Project } from '@/api';

export default {
  name: 'familiarProject',
  data() {
    return {
      data: [],
      page: {
        current: 1,
        size: 20,
        total: 0
      }
    };
  },
  computed: {
    salesId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getSalesChargeProjectList() {
      const param = {
        salesId: this.salesId,
        pageIndex: this.page.current,
        pageSize: this.page.size,
        searchCount: true
      };
      Project.getSalesChargeProjectList(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getSalesChargeProjectList();
  }
};
