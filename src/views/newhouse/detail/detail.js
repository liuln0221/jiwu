import { locals, data, menus } from './detail.class';

import Home from './components/home/home.vue'; // 主页
import Floor from './components/floor/floor.vue'; // 楼盘信息
import HouseType from './components/housetype/housetype.vue'; // 户型图

export default {
  name: 'newHouseDetail',
  components: { Home, Floor, HouseType },
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
