import { menus } from './navbar.class';

export default {
  name: 'navbar',
  data() {
    return {
      activeIndex: menus[0].name,
      menus
    };
  }
};
