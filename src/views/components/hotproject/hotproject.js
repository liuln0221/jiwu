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
    getHotProject() {
      Project.getHotProject().then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getHotProject();
  }
};
