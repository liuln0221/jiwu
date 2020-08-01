import { mapGetters } from 'vuex';

import RightLib from './components/rightlib/rightlib.vue';
import { Banner } from '@/api';

export default {
  name: 'newsList',
  components: { RightLib },
  data() {
    return {
      data: [],
      activeName: 'local'
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  },
  methods: {
    handleClick(tab) {
      this.$router.push({ name: tab.name });
    },
    getNews() {
      Banner.getNews().then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    console.log(this.$route.matched);
    this.activeName = this.$route.matched[this.$route.matched.length - 1].name;
    this.getNews();
  }
};
