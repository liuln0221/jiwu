import { mapState } from 'vuex';
import { Project } from '@/api';

export default {
  name: 'hotProject',
  data() {
    return {
      data: []
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  },
  methods: {
    getHot() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      Project.getHot(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getHot();
  }
};
