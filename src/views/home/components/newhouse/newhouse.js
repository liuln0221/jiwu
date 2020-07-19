import { Common } from '@/utils/common';

import { Region, Project } from '@/api/index';

export default {
  name: 'newHouse',
  data() {
    return {
      regions: [],
      activeRegion: {},
      carouselHeight: ''
    };
  },
  computed: {
    houses() {
      return Common.arrTwoDimensional(this.activeRegion.tradingAreaList, 9);
    }
  },
  methods: {
    mouseover(region) {
      this.regions.forEach((item, index) => {
        this.regions[index].active = region.name === item.name;
      });
      this.activeRegion = region ? region : {};
      this.$nextTick(() => {
        this.getCarouselHeight(0);
      });
    },
    getCarouselHeight(index) {
      this.carouselHeight = `${this.$refs.newhouse__content[index] ? this.$refs.newhouse__content[index].offsetHeight : 0}px`;
    },
    /**
     * 区域
     */
    getChildRegion() {
      Region.getChildRegion().then(res => {
        this.regions = res.data.slice(0, 5);
        this.regions[0].active = true;
      });
    },
    getIndexCarousel() {
      Project.getIndexCarousel().then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.activeRegion = this.regions[0] ? this.regions[0] : {};
    this.$nextTick(() => {
      this.getCarouselHeight(0);
    });
    this.getChildRegion();
    this.getIndexCarousel();
  }
};
