import { mapGetters } from 'vuex';
import Login from './modal/login/login.vue';

import { Common } from '@/utils/common';
import { menus, searchOptions } from './header.class';

import { Region, Project } from '@/api/index';

export default {
  name: 'header',
  components: { Login },
  data() {
    return {
      activeIndex: 'home',
      menus, // 菜单
      search: {
        value: '',
        select: searchOptions[0],
        options: searchOptions
      },
      regions: []
    };
  },
  computed: {
    ...mapGetters([
      'location', // 当前城市
      'login' // 登录
    ])
  },
  methods: {
    querySearch(queryString, cb) {
      const param = {
        projectName: queryString
      };
      Project.search(param).then(res => {
        // 调用 callback 返回建议列表的数据
        cb(res.data);
      });
    },
    handleSelect(item) {
      this.$router.push({
        name: 'newHouseDetail',
        params: { id: item.id }
      });
    },
    routerChange() {
      this.activeIndex = this.$route.matched[1].name === 'calculator' || this.$route.matched[1].name === 'help'
        ? this.activeIndex
        : this.$route.matched[1].name;
      Common.setTitle(this);
    },
    getOpenedRegion() {
      Region.getOpenedRegion().then(res => {
        this.regions = res.data.allCities;
        this.$store.dispatch('app/setLocation', this.regions[0].values[0]);
        Common.setTitle(this);
      });
    },
    loginFun() {
      this.$refs.login.show();
    }
  },
  created() {
    this.getOpenedRegion();
  },
  mounted() {
    this.routerChange();
  },
  watch: {
    $route() {
      this.routerChange();
    },
    login() {
      this.$refs.login.show();
    }
  }
}