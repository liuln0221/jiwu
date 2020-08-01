import { mapGetters } from 'vuex';
import { aboutcopys, links } from './footer.class';

export default {
  namee: 'footer',
  data() {
    return {
      aboutcopys, links
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  }
}