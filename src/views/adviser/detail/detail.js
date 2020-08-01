import Explain from '@/views/components/explain/explain.vue'; // 说明
import BaseInfo from './components/baseinfo/baseinfo.vue';
import ServiceDynamics from './components/servicedynamics/servicedynamics.vue';
import FamiliarProject from './components/familiarProject/familiarProject.vue';

import { Sales } from '@/api';

import { Common } from '@/utils/common';

export default {
  name: 'adviserDetail',
  components: { Explain, BaseInfo, ServiceDynamics, FamiliarProject },
  data() {
    return {
      data: {}
    };
  },
  computed: {
    salesId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getSalesDetail() {
      Sales.getSalesDetail(this.salesId).then(res => {
        this.data = res.data;
        this.$route.matched.find(item => item.name === 'adviserDetail').meta.label = this.data.name;
        Common.setTitle(this);
      });
    }
  },
  mounted() {
    this.getSalesDetail();
  }
};
