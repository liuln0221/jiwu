import { mapGetters } from 'vuex';
import Login from './modal/login/login.vue';

import { Common } from '@/utils/common';
import { menus, searchOptions } from './header.class';

import { Region, Project } from '@/api/index';

export default {
  name: 'header',
  components: { Login },
  inject: [ 'reload' ],
  data() {
    return {
      activeIndex: 'home',
      menus, // 菜单
      search: {
        value: '',
        select: searchOptions[0],
        options: searchOptions
      },
      regions: [],
      locationNow: {}
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
      this.activeIndex = this.$route.matched[1]
        ? this.$route.matched[1].name === 'calculator' || this.$route.matched[1].name === 'help'
          ? this.activeIndex
          : this.$route.matched[1].name
        : this.activeIndex;
      Common.setTitle(this);
    },
    getOpenedRegion() {
      Region.getOpenedRegion().then(res => {
        this.regions = res.data.allCities;

        let city;
        let cities = [];
        if (window.location.hostname.indexOf('nthpower.net') !== -1) {
          const cityDomain = window.location.hostname.split('.')[0];
          this.regions.forEach(item => {
            cities = cities.concat(item.values);
          });
          city = cities.find(item => item.domain === cityDomain);
        }
        this.locationNow = city ? city : this.regions[0].values[0];
        this.$store.dispatch('app/setLocation', this.locationNow);
        if (process.env.NODE_ENV === 'production') {
          window.location.hostname = `${this.location.domain}.nthpower.net`;
        }
        Common.setTitle(this);
      });
    },
    changeLocation() {
      this.$store.dispatch('app/setLocation', this.locationNow);
      if (process.env.NODE_ENV === 'production') {
        window.location.hostname = `${this.location.domain}.nthpower.net`;
      }
      this.reload();
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
      if (this.login) {
        this.$refs.login.show();
      }
    }
  }
}