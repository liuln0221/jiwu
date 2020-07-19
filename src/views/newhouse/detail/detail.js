import { mapState } from 'vuex';

import { menus } from './detail.class';
import { Project } from '@/api';

export default {
  name: 'newHouseDetail',
  data() {
    return {
      activeIndex: menus[0].name,
      data: [],
      menus
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
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
    this.getProjectDetail();
  }
};
