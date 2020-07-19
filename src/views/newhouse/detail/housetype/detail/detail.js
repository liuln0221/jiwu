import { mapState } from 'vuex';
import { locals, data } from './detail.class';

import Header from '@/layout/header/header.vue';

import { Project } from '@/api';

export default {
  name: 'houseTypeDetail',
  components: { eHeader: Header },
  data() {
    return {
      locals,
      data,
      tabActive: {},
      store: [],
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    }),
    height() {
      return 600;
    }
  },
  methods: {
    getProjectLayouts() {
      Project.getProjectLayouts(data.projectId).then(res => {
        this.store = res.data;

        // TODO
        const response = {
          additionalProp1: [
            {
              id: 100001,
              houseType: '1房1厅1卫',
              area: 188,
              downPayments: 725,
              monthlySupply: 65286,
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
              routerTo: { name: 'newHouseTypeDetail', params: { id: 100001 } }
            },
            {
              houseType: '1房1厅1卫',
              area: 213,
              downPayments: 851,
              monthlySupply: 73902,
              desc: '厨卫不对门',
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360',
              routerTo: {}
            },
            {
              houseType: '1房2厅1卫',
              area: 188,
              downPayments: 725,
              monthlySupply: 65286,
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
              routerTo: {}
            }
          ],
          additionalProp2: [
            {
              id: 100001,
              houseType: '2房2厅1卫',
              area: 188,
              downPayments: 725,
              monthlySupply: 65286,
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
              routerTo: { name: 'newHouseTypeDetail', params: { id: 100001 } }
            },
            {
              houseType: '2房2厅2卫',
              area: 213,
              downPayments: 851,
              monthlySupply: 73902,
              desc: '厨卫不对门',
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2019/12/25/182916245378.jpg/pc1920x360',
              routerTo: {}
            },
            {
              houseType: '2房2厅1卫',
              area: 188,
              downPayments: 725,
              monthlySupply: 65286,
              // img: 'http://img8.jiwu.com/newbuildpic/10/3/2802/2802093_a.jpg',
              img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
              routerTo: {}
            }
          ]
        };
        this.store = this.computed(response);
        this.tabActive = this.store.slice(1).find(item => {
          return item.store.find(i => i.id === data.layoutId);
        });
      });
    },
    computed(store) {
      const result = [];
      let allStore = [];

      for (const key in store) {
        store[key][0].active = true;
        result.push({
          houseType: `${key.replace(/[a-zA-Z]/g, '')}室户型`,
          num: store[key].length,
          store: store[key]
        });
        allStore = allStore.concat(store[key]);
      }
      result.unshift({
        houseType: '全部户型',
        num: allStore.length,
        store: allStore
      });

      return result;
    },
    clickImg(ver, store) {
      ver.active = true;
      store.forEach((item, index) => {
        if (item.id !== ver.id) {
          store[index].active = false;
        }
      });
    }
  },
  mounted() {
    this.getProjectLayouts();
  }
};
