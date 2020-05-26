import { Common } from '@/utils/common';

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
              label: '雅居乐京华雅郡',
              local: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
              price: 51000,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
            },
            {
              name: 'tianrui',
              label: '天瑞宸章',
              price: 51000,
              src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
            },
            {
              name: 'hejing',
              label: '合景领汇长安',
              price: 46000,
              src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
            },
            {
              name: 'zhongtie',
              label: '中铁诺德逸府',
              price: 67702,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
            },
            {
              name: 'xishan',
              label: '西山锦绣府',
              price: 58622,
              src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
            },
            {
              name: 'tianrui2',
              label: '天瑞宸章2',
              price: 51000,
              src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
            },
            {
              name: 'hejing2',
              label: '合景领汇长安2',
              price: 46000,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
            },
            {
              name: 'zhongtie2',
              label: '中铁诺德逸府2',
              price: 67702,
              src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
            },
            {
              name: 'xishan2',
              label: '西山锦绣府2',
              price: 58622,
              src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
            },
            {
              name: 'xishan3',
              label: '西山锦绣府3',
              price: 58622,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
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
              label: '雅居乐京华雅郡1',
              local: '大兴区荣华南路荣华鑫泰大厦4号楼南侧1-2层',
              price: 51000,
              src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
            },
            {
              name: 'tianrui',
              label: '天瑞宸章',
              price: 51000,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
            },
            {
              name: 'hejing',
              label: '合景领汇长安',
              price: 46000,
              src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
            },
            {
              name: 'zhongtie',
              label: '中铁诺德逸府',
              price: 67702,
              src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
            },
            {
              name: 'xishan',
              label: '西山锦绣府',
              price: 58622,
              src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
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
      return Common.arrTwoDimensional(this.activeRegion.houses, 9);
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
