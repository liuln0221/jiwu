export default {
  name: 'newHouse',
  data() {
    return {
      regions: [
        {
          id: 100001,
          name: '大兴',
          active: true,
          houses: [
            {
              name: 'yaju',
              title: '雅居乐京华雅郡',
              detail: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
              price: 51000,
              src: 'http://img5-build.jiwu.com/album/manual/2020/04/10/114221026394.jpg/pc590x400'
            },
            {
              name: 'tianrui',
              title: '天瑞宸章',
              price: 51000,
              src: 'http://img6-build.jiwu.com/album/manual/2020/04/08/145553318407.jpg/pc285x190'
            },
            {
              name: 'hejing',
              title: '合景领汇长安',
              price: 46000,
              src: 'http://img5-build.jiwu.com/album/manual/2020/04/07/165823862254.jpg/pc285x190'
            },
            {
              name: 'zhongtie',
              title: '中铁诺德逸府',
              price: 67702,
              src: 'http://img3-build.jiwu.com/album/manual/2020/04/07/164924465757.jpg/pc285x190'
            },
            {
              name: 'xishan',
              title: '西山锦绣府',
              price: 58622,
              src: 'http://img7-build.jiwu.com/album/manual/2020/04/10/115718969659.jpg/pc285x190'
            },
            {
              name: 'tianrui2',
              title: '天瑞宸章2',
              price: 51000,
              src: 'http://img6-build.jiwu.com/album/manual/2020/04/08/145553318407.jpg/pc285x190'
            },
            {
              name: 'hejing2',
              title: '合景领汇长安2',
              price: 46000,
              src: 'http://img5-build.jiwu.com/album/manual/2020/04/07/165823862254.jpg/pc285x190'
            },
            {
              name: 'zhongtie2',
              title: '中铁诺德逸府2',
              price: 67702,
              src: 'http://img3-build.jiwu.com/album/manual/2020/04/07/164924465757.jpg/pc285x190'
            },
            {
              name: 'xishan2',
              title: '西山锦绣府2',
              price: 58622,
              src: 'http://img7-build.jiwu.com/album/manual/2020/04/10/115718969659.jpg/pc285x190'
            },
            {
              name: 'xishan3',
              title: '西山锦绣府3',
              price: 58622,
              src: 'http://img7-build.jiwu.com/album/manual/2020/04/10/115718969659.jpg/pc285x190'
            }
          ]
        },
        {
          id: 100002,
          name: '丰台',
          active: false,
          houses: [
            {
              name: 'yaju',
              title: '雅居乐京华雅郡1',
              detail: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
              price: 51000,
              src: 'http://img5-build.jiwu.com/album/manual/2020/04/10/114221026394.jpg/pc590x400'
            },
            {
              name: 'tianrui',
              title: '天瑞宸章',
              price: 51000,
              src: 'http://img6-build.jiwu.com/album/manual/2020/04/08/145553318407.jpg/pc285x190'
            },
            {
              name: 'hejing',
              title: '合景领汇长安',
              price: 46000,
              src: 'http://img5-build.jiwu.com/album/manual/2020/04/07/165823862254.jpg/pc285x190'
            },
            {
              name: 'zhongtie',
              title: '中铁诺德逸府',
              price: 67702,
              src: 'http://img3-build.jiwu.com/album/manual/2020/04/07/164924465757.jpg/pc285x190'
            },
            {
              name: 'xishan',
              title: '西山锦绣府',
              price: 58622,
              src: 'http://img7-build.jiwu.com/album/manual/2020/04/10/115718969659.jpg/pc285x190'
            }
          ]
        }
      ],
      activeRegion: {},
      carouselHeight: ''
    };
  },
  computed: {
    houses() {
      return this.getHouses(this.activeRegion.houses);
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
    getHouses(store = []) {
      let arr = [];
      const result = [];
      store.forEach((item, index) => {
        if ((index % 8 !== 0 || index === 0) && index !== store.length - 1) {
          arr.push(item);
        } else {
          arr.push(item);
          result.push(arr);
          arr = [];
        }
      });
      console.log(result);
      return result;
    },
    getCarouselHeight(index) {
      this.carouselHeight = `${this.$refs.newhouse__content[index].offsetHeight}px`;
    }
  },
  mounted() {
    this.activeRegion = this.regions[0] ? this.regions[0] : {};
    this.$nextTick(() => {
      this.getCarouselHeight(0);
    });
  }
};
