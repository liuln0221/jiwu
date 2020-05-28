import { locals, images, tabs } from './list.class';

import RightLib from './components/rightlib/rightlib.vue';

export default {
  name: 'informationList',
  components: { RightLib },
  data() {
    return {
      locals,
      images,
      tabs,
      activeName: 'local'
    };
  },
  methods: {
    handleClick(tab) {
      this.$router.push(tab.name);
    }
  },
  mounted() {
    console.log(this.$route.matched);
    const arr = this.$route.matched[this.$route.matched.length - 1].path.split('/');
    this.activeName = arr[arr.length - 1];
  }
};
