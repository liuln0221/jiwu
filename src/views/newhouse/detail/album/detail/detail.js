import { mapGetters } from 'vuex';
import { locals } from './detail.class';

import Header from '@/layout/header/header.vue';

import { Project, UserNotify } from '@/api';

export default {
  name: 'houseTypeDetail',
  components: { eHeader: Header },
  provide (){
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      locals,
      filters: [],
      filter: {},
      data: {}
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ]),
    height() {
      return 600;
    },
    projectId() {
      return this.$route.query.projectId;
    },
    imgId() {
      return this.$route.params.id;
    }
  },
  methods: {
    /**
     * 获取楼盘详情
     */
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    /**
     * 获取相册
     */
    getProjectImgGroups() {
      const param = {
        sizeLimit: 10
      };
      Project.getProjectImgGroups(this.projectId, param).then(res => {
        this.store = res.data.concat();
        this.filters = this.computed(res.data);
        this.filters.forEach(item => {
          item.imgList.forEach((i, ind) => {
            if (i.imgId == this.imgId) {
              this.filter = item;
              this.filter.imgList[ind].active = true;
            }
          });
        });
      });
    },
    computed(store) {
      store.forEach((item, index) => {
        store[index].size = item.imgList.length;
      });
      return store;
    },
    clickImg(index, store) {
      store[index].active = true;
      store.forEach((item, i) => {
        if (item.imgId !== store[index].imgId) {
          store[i].active = false;
        }
      });
      this.$refs.carousel.setActiveItem(index);
      this.$forceUpdate();
    },
    getImgAvtive(val) {
      this.filter.imgList.forEach((item, index) => {
        if (index === val) {
          this.filter.imgList[index].active = true;
        } else {
          this.filter.imgList[index].active = false;
        }
      });
      this.$forceUpdate();
    },
    priceNotify(type) {
      const param = {
        projectId: this.projectId,
        type
      };
      UserNotify.userNotifyAdd(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
        }
      });
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    // this.getProjectLayouts();
    this.getProjectImgGroups();
  }
};
