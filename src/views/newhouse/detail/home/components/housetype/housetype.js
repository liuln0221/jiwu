import { Common } from '@/utils/common';

import { Project } from '@/api';

export default {
  name: 'houseType',
  props: [ 'data' ],
  data() {
    return {
      // store: [
      //   {
      //     houseType: '2房2厅1卫',
      //     area: 188,
      //     downPayments: 725,
      //     monthlySupply: 65286,
      //     // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
      //     img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
      //   },
      //   {
      //     houseType: '2房2厅2卫',
      //     area: 213,
      //     downPayments: 851,
      //     monthlySupply: 73902,
      //     desc: '厨卫不对门',
      //     // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
      //     img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
      //   },
      //   {
      //     houseType: '2房2厅1卫',
      //     area: 188,
      //     downPayments: 725,
      //     monthlySupply: 65286,
      //     // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
      //     img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
      //   }
      // ],
      store: []
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    houseTypes() {
      return Common.arrTwoDimensional(this.store, 2);
    }
  },
  methods: {
    getProjectLayouts() {
      Project.getProjectLayouts(this.projectId).then(res => {
        this.store = this.computed(res.data);
      });
    },
    computed(store) {
      let result = [];
      for (const key in store) {
        result = result.concat(store[key]);
      }
      return result;
    }
  },
  mounted() {
    this.getProjectLayouts();
  }
};
