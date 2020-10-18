import { Common } from '@/utils/common';

export default {
  name: 'oldHouse',
  data() {
    return {
      data: [
        {
          id: 10001,
          label: '上上城青年社区',
          door: '2室1厅',
          area: 80,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          id: 10002,
          label: '潮白星光公馆',
          door: '2室1厅',
          area: 99,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          id: 10003,
          name: 'hejing',
          label: '合景领汇长安',
          price: 46000,
          src: 'http://img-other.yanxuanhaofang.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          id: 10004,
          name: 'zhongtie',
          label: '中铁诺德逸府',
          price: 67702,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          id: 10005,
          name: 'xishan',
          label: '西山锦绣府',
          price: 58622,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          id: 10006,
          name: 'tianrui2',
          label: '天瑞宸章2',
          price: 51000,
          src: 'http://img-other.yanxuanhaofang.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          id: 10007,
          name: 'hejing2',
          label: '合景领汇长安2',
          price: 46000,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
        },
        {
          id: 10008,
          name: 'zhongtie2',
          label: '中铁诺德逸府2',
          price: 67702,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          id: 10009,
          name: 'xishan2',
          label: '西山锦绣府2',
          price: 58622,
          src: 'http://img-other.yanxuanhaofang.com/apic/2019/12/25/182916245378.jpg/pc1920x360'
        },
        {
          id: 10010,
          name: 'xishan3',
          label: '西山锦绣府3',
          price: 58622,
          src: 'http://img-other.yanxuanhaofang.com/apic/2020/03/24/12450504448.jpg/pc1920x360'
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
