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
      data: {},
      store: [],
      tabActive: {},
      houseTypeActive: {}
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
    layoutId() {
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
     * 获取户型详情
     */
    getProjectLayouts() {
      Project.getProjectLayouts(this.layoutId).then(res => {
        this.store = this.computed(res.data);
        this.tabActive = this.store.slice(1).find(item => {
          return item.store.find(i => i.layoutId == this.layoutId);
        }) || {};
        if (this.tabActive.store && this.tabActive.store.length > 0) {
          this.tabActive.store[0].active = true;
          this.houseTypeActive = this.tabActive.store[0];
        }
      });
    },
    computed(store) {
      const result = [];
      let allStore = [];

      for (const key in store) {
        result.push({
          houseType: key,
          num: store[key].length,
          store: store[key]
        });
        allStore = allStore.concat(store[key]);
      }
      result.unshift({
        houseType: '全部户型',
        num: allStore.length,
        store: allStore
      });

      return result;
    },
    clickImg(index, store) {
      store[index].active = true;
      store.forEach((item, i) => {
        if (item.layoutId !== store[index].layoutId) {
          store[i].active = false;
        }
      });
      this.$refs.carousel.setActiveItem(index);
      this.$forceUpdate();
    },
    getHouseTypeAvtive(val) {
      this.tabActive.store.forEach((item, index) => {
        if (index === val) {
          this.tabActive.store[index].active = true;
          this.houseTypeActive = item;
        } else {
          this.tabActive.store[index].active = false;
        }
      });
    },
    priceNotify() {
      const param = {
        projectId: this.projectId,
        type: 1
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
    this.getProjectLayouts();
  }
};
