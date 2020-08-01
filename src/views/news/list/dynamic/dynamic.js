import TabContent from '../components/tabcontent.vue';
import { ProjectInformation } from '@/api';

export default {
  name: 'dynamic',
  components: { TabContent },
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
  methods: {
    getProjectInformation() {
      const param = {
        pageIndex: this.page.current,
        pageSize: this.page.size,
        searchCount: true
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        this.data = res.data;
        this.page.total = res.totalRow;
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getProjectInformation();
    }
  },
  mounted() {
    this.getProjectInformation();
  }
};
