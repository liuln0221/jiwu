import { menus } from './header.class';

export default {
  name: 'header',
  data() {
    return {
      menus,
      activeIndex: menus[0].name
    };
  },
  methods: {
    routerChange() {
      this.activeIndex = this.$route.matched[1].name;
    }
  },
  mounted() {
    this.routerChange();
  },
  watch: {
    $route() {
      this.routerChange();
    }
  }
};
