import { mapState } from 'vuex';

import ImageInfo from '@/components/imageInfo.vue'
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';
import { Project } from '@/api';

export default {
  name: 'album',
  components: { ImageInfo, Disclaimer, Expand },
  data() {
    return {
      data: {},
      filter: '',
      filters: [],
      store: []
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    }),
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    getProjectImgGroups() {
      const param = {
        sizeLimit: 10
      };
      Project.getProjectImgGroups(this.projectId, param).then(res => {
        this.store = res.data.concat();
        this.filters = this.computed(res.data);
        this.filter = this.filters[0];
      });
    },
    computed(store) {
      let result = [];
      store.forEach(item => {
        result = result.concat(item.imgList);
      });
      store.unshift({
        name: '全部',
        size: result.length
      });
      return store;
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectImgGroups();
  }
};
