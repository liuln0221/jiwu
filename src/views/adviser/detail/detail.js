// import { data } from './detail.class';

import Explain from '@/views/components/explain/explain.vue'; // 说明
import BaseInfo from './components/baseinfo/baseinfo.vue';
import ServiceDynamics from './components/servicedynamics/servicedynamics.vue';
import FamiliarProperties from './components/familiarproperties/familiarproperties.vue';

import { Sales } from '@/api';

export default {
  name: 'adviserDetail',
  components: { Explain, BaseInfo, ServiceDynamics, FamiliarProperties },
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
      });
    }
  },
  mounted() {
    this.getSalesDetail();
  }
};
