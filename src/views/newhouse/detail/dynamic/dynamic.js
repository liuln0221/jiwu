import Activities from '@/views/components/activities/activities.vue';
import HotProject from '@/views/components/hotproject/hotproject.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

import { Project, ProjectInformation } from '@/api';

export default {
  name: 'dynamic',
  components: { Activities, HotProject, Disclaimer, Expand },
  data() {
    return {
      data: {},
      informations: []
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    getProjectInformation() {
      const param = {
        pageIndex: 1,
        pageSize: 20,
        projectId: this.projectId
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        this.informations = res.data;
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectInformation();
  }
};
