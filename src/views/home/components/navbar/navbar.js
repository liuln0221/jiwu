import NavbarItem from './components/navbarItem/navbarItem.vue';
import CheckPrice from './components/checkPrice/checkPrice.vue';

import { newHouseLinks, oldHouseLinks, checkPrice } from './navbar.class';

export default {
  name: 'navbar',
  components: {
    NavbarItem,
    CheckPrice
  },
  data() {
    return {
      menus: [
        { name: 'newHouse', label: '新房', icon: '', links: newHouseLinks },
        { name: 'oldHouse', label: '二手房', icon: '', links: oldHouseLinks },
        { name: 'checkPrice', label: '查房价', icon: '', links: checkPrice },
        { name: 'findHouse', label: '帮我找房', icon: '' },
      ]
    };
  }
};