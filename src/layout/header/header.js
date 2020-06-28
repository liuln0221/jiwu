import { mapState } from 'vuex';
import Login from './modal/login/login.vue';

import { menus, searchOptions } from './header.class';

import { Region } from '@/api/index';

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
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  },
  methods: {
    routerChange() {
      this.activeIndex = this.$route.matched[1].name;
    },
    getOpenedRegion() {
      Region.getOpenedRegion().then(res => {
        this.regions = res.data.allCities;
        this.$store.dispatch('app/setLocation', this.regions[0].values[0]);
      });
    },
    login() {
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
    }
  }
}