import { locals, data, menus } from './detail.class';

export default {
  name: 'newHouseDetail',
  data() {
    return {
      activeIndex: menus[0].name,
      locals,
      data,
      menus
    };
  },
  methods: {
    handleSelect(val) {
      this.activeIndex = val;
    }
  }
};
