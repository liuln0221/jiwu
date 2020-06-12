import { mapState } from 'vuex';
import { aboutcopys, links } from './footer.class';

export default {
  namee: 'footer',
  data() {
    return {
      aboutcopys, links
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
}