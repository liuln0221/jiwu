import { Common } from '@/utils/common';

export default {
  name: 'oldHouse',
  data() {
    return {
      data: [
        {
          id: 10001,
          title: '上上城青年社区',
          door: '2室1厅',
          area: 80,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          id: 10002,
          title: '潮白星光公馆',
          door: '2室1厅',
          area: 99,
          src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: 'hejing',
          title: '合景领汇长安',
          price: 46000,
          src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          name: 'zhongtie',
          title: '中铁诺德逸府',
          price: 67702,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          name: 'xishan',
          title: '西山锦绣府',
          price: 58622,
          src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: 'tianrui2',
          title: '天瑞宸章2',
          price: 51000,
          src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          name: 'hejing2',
          title: '合景领汇长安2',
          price: 46000,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          name: 'zhongtie2',
          title: '中铁诺德逸府2',
          price: 67702,
          src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: 'xishan2',
          title: '西山锦绣府2',
          price: 58622,
          src: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          name: 'xishan3',
          title: '西山锦绣府3',
          price: 58622,
          src: 'http://img-other.jiwu.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        }
      ]
    };
  },
  computed: {
    houses() {
      return Common.arrTwoDimensional(this.data, 4);
    }
  }
};
