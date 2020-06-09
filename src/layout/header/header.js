import { mapState } from 'vuex';
import { menus, searchOptions } from './header.class';

import { SysDict } from '@/api/index';

export default {
  namee: 'header',
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
    getOpenedCity() {
      SysDict.getOpenedCity().then(res => {
        this.regions = res.data.allCities;
        this.$store.dispatch('app/setLocation', this.regions[0].values[0]);
      });
    }
  },
  created() {
    this.getOpenedCity();
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