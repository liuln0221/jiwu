import { mapGetters } from 'vuex';

export default {
  name: 'district',
  props: [ 'data' ],
  data() {
    return {
      store: [
        {
          name: '玺萌壹号院',
          local: '丰台',
          price: 98900,
          tags: [ 
            { name: 'shop', label: '大型商超' },
            { name: 'kindergarten', label: '幼儿园' }
          ],
          img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: '玺萌壹号院',
          local: '丰台',
          price: 98900,
          tags: [ 
            { name: 'shop', label: '大型商超' },
            { name: 'kindergarten', label: '幼儿园' }
          ],
          img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: '玺萌壹号院',
          local: '丰台',
          price: 98900,
          tags: [ 
            { name: 'shop', label: '大型商超' },
            { name: 'kindergarten', label: '幼儿园' }
          ],
          img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: '玺萌壹号院',
          local: '丰台',
          price: 98900,
          tags: [ 
            { name: 'shop', label: '大型商超' },
            { name: 'kindergarten', label: '幼儿园' }
          ],
          img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        },
        {
          name: '玺萌壹号院',
          local: '丰台',
          price: 98900,
          tags: [ 
            { name: 'shop', label: '大型商超' },
            { name: 'kindergarten', label: '幼儿园' }
          ],
          img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
        }
      ]
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  }
};
