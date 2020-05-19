import { mapState } from 'vuex';

import ImageInfo from '@/components/imageInfo.vue'
import Disclaimer from '@/views/newhouse/detail/common/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/common/expand/expand.vue';

export default {
  name: 'houseType',
  props: [ 'data' ],
  components: { ImageInfo, Disclaimer, Expand },
  data() {
    return {
      filter: '',
      houseType: [
        { name: '', label: '全部', num: 5, active: true },
        { name: 'one', label: '1室', num: 2, active: false },
        { name: 'two', label: '2室', num: 3, active: false }
      ],
      store: [
        {
          houseType: '2房2厅1卫',
          area: 188,
          downPayments: 725,
          monthlySupply: 65286,
          // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
          img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          houseType: '2房2厅2卫',
          area: 213,
          downPayments: 851,
          monthlySupply: 73902,
          desc: '厨卫不对门',
          // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
          img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          houseType: '2房2厅1卫',
          area: 188,
          downPayments: 725,
          monthlySupply: 65286,
          // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
          img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
};
