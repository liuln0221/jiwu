import { mapGetters } from 'vuex';

import { menus } from './detail.class';
import { Project } from '@/api';

import { Common } from '@/utils/common';

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
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    handleSelect(val) {
      this.activeIndex = val;
    },
    getProjectDetail() {
      Project.getProjectDetail(this.$route.params.id).then(res => {
        this.data = res.data;
        this.$route.matched.find(item => item.name === 'newHouseDetail').meta.label = this.data.name;
        Common.setTitle(this);
        console.log('2020-8-1: ', this.$route.matched);
      });
    }
  },
  mounted() {
    this.getProjectDetail();
  }
};
