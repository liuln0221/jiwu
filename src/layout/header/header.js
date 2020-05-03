import { mapState } from 'vuex';
import { menus, searchOptions } from './header.class';

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
      }
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
}