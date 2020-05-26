import { Common } from '@/utils/common';

export default {
  name: 'album',
  props: [ 'data' ],
  data() {
    return {
      filters:[
        { name: '', label: '全部图片', num: 44 },
        { name: '', label: '实景图', num: 5 },
        { name: '', label: '位置交通图', num: 3 },
        { name: '', label: '效果图', num: 3 },
        { name: '', label: '配套图', num: 31 },
        { name: '', label: '楼盘证照', num: 2 }
      ],
      store: [
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
        'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
      ]
    };
  },
  computed: {
    images() {
      return Common.arrTwoDimensional(this.store, 5);
    }
  }
};
