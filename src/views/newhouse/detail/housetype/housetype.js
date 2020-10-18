import { mapGetters } from 'vuex';

import { data } from '../detail.class';

import ImageInfo from '@/components/imageInfo.vue'
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

import { Project } from '@/api';

export default {
  name: 'houseType',
  components: { ImageInfo, Disclaimer, Expand },
  data() {
    return {
      data,
      filter: {},
      store: []
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    getProjectLayouts() {
      Project.getProjectLayouts(this.$route.params.id).then(res => {
        this.store = this.computed(res.data);
        this.filter = this.store[0];
      });
    },
    computed(store) {
      const result = [];
      let allStore = [];

      for (const key in store) {
        result.push({
          houseType: key,
          num: store[key].length,
          store: store[key].map(item => {
            item.routerTo = { name: 'newHouseTypeDetail', params: { id: item.layoutId }, query: { projectId: item.projectId } };
            return item;
          })
        });
        allStore = allStore.concat(store[key].map(item => {
          item.routerTo = { name: 'newHouseTypeDetail', params: { id: item.layoutId }, query: { projectId: item.projectId } };
          return item;
        }));
      }
      result.unshift({
        houseType: '全部户型',
        num: allStore.length,
        store: allStore
      });
      return result;
    }
  },
  mounted() {
    this.getProjectLayouts();
  }
};
