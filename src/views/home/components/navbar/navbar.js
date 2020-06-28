import NavbarItem from './components/navbarItem/navbarItem.vue';
import CheckPrice from './components/checkPrice/checkPrice.vue';

// import { newHouseLinks, checkPrice } from './navbar.class';

import { Region, Price } from '@/api/index';

export default {
  name: 'navbar',
  components: {
    NavbarItem,
    CheckPrice
  },
  data() {
    return {
      childRegion: [],
      newHousePriceLevels: [],
      newHouseHistoryPrice: {}
    };
  },
  computed: {
    // 菜单
    menus() {
      return [
        { name: 'newHouse', label: '新房', icon: 'icon-floor', links: this.newHouseLinks },
        // { name: 'oldHouse', label: '二手房', icon: 'icon-house2', links: oldHouseLinks },
        { name: 'checkPrice', label: '查房价', icon: 'icon-price', links: this.checkPrice },
        { name: 'findHouse', label: '帮我找房', icon: 'icon-find-house' },
      ];
    },
    // 新房
    newHouseLinks() {
      return [
        { title: '区域', options: this.childRegion },
        { title: '单价', options: this.newHousePriceLevels },
        {
          title: '特色',
          options: [
            { name: 'zhuanchekanfang', label: '专车看房' }
          ]
        }
      ];
    },
    // 查房价
    checkPrice() {
      return [
        { title: '热门区域', options: this.childRegion}
        // {
        //   title: '热门板块',
        //   options: [
        //     { name: 'daxing', label: '大兴' }
        //   ]
        // }
      ];
    }
  },
  methods: {
    /**
     * 区域
     */
    getChildRegion() {
      Region.getChildRegion().then(res => {
        this.childRegion = res.data.map(item => {
          return {
            name: item.code,
            label: item.name
          };
        }); 
      });
    },
    /**
     * 价格区间
     */
    getPriceLevles() {
      // 新房
      Price.getLevels({ type: '1' }).then(res => {
        this.newHousePriceLevels = res.data.map(item => {
          return {
            name: item.id,
            label: item.name
          };
        }); 
      })
    }
  },
  mounted() {
    this.getChildRegion();
    this.getPriceLevles();
  }
};