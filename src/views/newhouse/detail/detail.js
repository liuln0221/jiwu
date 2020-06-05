import { locals, data, menus } from './detail.class';
import { Project } from '@/api';

export default {
  name: 'newHouseDetail',
  data() {
    return {
      activeIndex: menus[0].name,
      locals,
      data,
      menus
    };
  },
  methods: {
    handleSelect(val) {
      this.activeIndex = val;
    },
    getProjectDetail() {
      Project.getProjectDetail(this.$route.params.id).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    // this.getProjectDetail();
  }
};
