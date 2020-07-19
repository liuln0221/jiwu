import { Common } from '@/utils/common';

import { Project } from '@/api';

export default {
  name: 'album',
  props: [ 'data' ],
  data() {
    return {
      // filters:[
      //   { name: '', label: '全部图片', num: 44 },
      //   { name: '', label: '实景图', num: 5 },
      //   { name: '', label: '位置交通图', num: 3 },
      //   { name: '', label: '效果图', num: 3 },
      //   { name: '', label: '配套图', num: 31 },
      //   { name: '', label: '楼盘证照', num: 2 }
      // ],
      filters: [],
      // store: [
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
      //   'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
      // ]
      store: []
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    images() {
      return Common.arrTwoDimensional(this.store, 5);
    }
  },
  methods: {
    getProjectImgGroups() {
      const param = {
        sizeLimit: 10
      };
      Project.getProjectImgGroups(this.projectId, param).then(res => {
        this.computed(res.data);
      });
    },
    computed(store) {
      store.forEach(item => {
        this.store = this.store.concat(item.imgList);
      });
      store.unshift({
        name: '全部图片',
        size: this.store.length
      });
      this.filters = store;
    }
  },
  mounted() {
    this.getProjectImgGroups();
  }
};
