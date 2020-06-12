import { mapState } from 'vuex';
import { aboutcopys } from './footer.class';

export default {
  namee: 'footer',
  data() {
    return {
      aboutcopys
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
}