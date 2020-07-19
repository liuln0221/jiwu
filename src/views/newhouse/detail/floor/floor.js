import PlanInfo from './components/planinfo/planinfo.vue';
import Introduce from './components/introduce/introduce.vue';
import Landscape from './components/landscape/landscape.vue';
import Location from './components/location/location.vue';
import Planning from './components/planning/planning.vue';
import EStyle from './components/style/style.vue';
import Surrounding from './components/surrounding/surrounding.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

import { Project } from '@/api';

export default {
  name: 'floor',
  props: [ 'data' ],
  components: {
    PlanInfo,
    Introduce,
    Landscape,
    Location,
    Planning,
    EStyle,
    Surrounding,
    Disclaimer,
    Expand
  },
  data() {
    return {
      description: {}
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectDescription() {
      Project.getProjectDescription(this.projectId).then(res => {
        this.description = res.data;
      });
    }
  },
  mounted() {
    this.getProjectDescription();
  }
};
