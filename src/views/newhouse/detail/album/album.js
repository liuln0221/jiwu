import { mapState } from 'vuex';

import { data } from '../detail.class';

import ImageInfo from '@/components/imageInfo.vue'
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

export default {
  name: 'album',
  components: { ImageInfo, Disclaimer, Expand },
  data() {
    return {
      data,
      filter: '',
      filters: [
        { name: '', label: '全部', num: 44, active: true },
        { name: 'designSketch', label: '效果图', num: 3, active: false },
        { name: 'liveView', label: '实景图', num: 5, active: false },
        { name: 'matchingDrawing', label: '配套图', num: 31, active: false },
        { name: 'propertyLicense', label: '楼盘证照', num: 2, active: false },
        { name: ' map', label: '位置交通图', num: 3, active: false }
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
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
};
