export default {
  name: 'serviceStatement',
  data() {
    return {
      menus: [
        { name: 'agreement', label: '用户协议' },
        { name: 'disclaimer', label: '免责声明' }
      ],
      activeIndex: 'agreement',
    };
  },
  methods: {
    routerChange() {
      this.activeIndex = this.$route.matched[2].name;
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
