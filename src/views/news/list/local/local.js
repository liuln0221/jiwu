import TabContent from '../components/tabcontent.vue';
import { News } from '@/api';

export default {
  name: 'local',
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
    getLocals() {
      const param = {
        pageIndex: this.page.current,
        pageSize: this.page.size,
        searchCount: true
      };
      News.getLocals(param).then(res => {
        this.data = res.data;
        this.page.total = res.totalRow;
      });
    },
    handleCurrentChange(val) {
      this.page.current = val;
      this.getLocals();
    }
  },
  mounted() {
    this.getLocals();
  }
}
