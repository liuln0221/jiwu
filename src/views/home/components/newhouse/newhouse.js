import { Common } from '@/utils/common';

import { Project } from '@/api/index';

export default {
  name: 'newHouse',
  data() {
    return {
      data: [],
      houses: [],
      carouselHeight: ''
    };
  },
  methods: {
    mouseover(val) {
      this.data.forEach((item, index) => {
        this.data[index].active = val.name === item.name;
      });
      this.houses = Common.arrTwoDimensional(val.list, 9);
      this.$nextTick(() => {
        this.getCarouselHeight(0);
      });
    },
    getCarouselHeight(index) {
      this.carouselHeight = `${this.$refs.newhouse__content
        ? this.$refs.newhouse__content[index] ? this.$refs.newhouse__content[index].offsetHeight : 0
        : 0}px`;
    },
    getIndexCarousel() {
      Project.getIndexCarousel().then(res => {
        if (res.data) {
          if (res.data.groupList && res.data.groupList.length > 0) {
            this.data = res.data.groupList;
            this.data[0].active = true;
            this.houses = Common.arrTwoDimensional(this.data[0].list, 9);
          } else {
            this.houses = [res.data.noGroupList];
            console.log(this.houses);
          }
          this.$nextTick(() => {
            this.getCarouselHeight(0);
          });
          this.$forceUpdate();
        }
      });
    }
  },
  mounted() {
    this.getIndexCarousel();
  }
};
