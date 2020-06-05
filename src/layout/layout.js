import { mapState } from 'vuex';

import Aside from './aside/aside.vue';
import Header from './header/header.vue';
import Footer from './footer/footer.vue';

export default {
  name: 'layout',
  components: {
    eAside: Aside,
    eHeader: Header,
    eFooter: Footer
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  },
};
