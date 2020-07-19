import { Project, ProjectInformation } from "@/api";

import HotProject from '@/views/components/hotproject/hotproject.vue';

export default {
  name: 'dynamicDetail',
  components: { HotProject },
  data() {
    return {
      data: {},
      information: {},
      newInformation: {}, // 最新动态
      prevInformation: {}, // 上一篇动态
      nextInformation: {} // 下一篇动态
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    informationId() {
      return this.$route.params.informationId;
    }
  },
  methods: {
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    getProjectInformationDetail() {
      ProjectInformation.getProjectInformationDetail(this.informationId).then(res => {
        this.information = res.data;
      });
    },
    getProjectInformation() {
      const informationId = this.informationId;
      const param = {
        pageIndex: 1,
        pageSize: 20,
        projectId: this.projectId
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        const itemIndex = res.data.findIndex(item => {
          return item.id === parseInt(informationId, 10);
        });
        this.newInformation = itemIndex > 1 ? res.data[0] : undefined;
        this.prevInformation = itemIndex < res.data.length - 1 ? res.data[itemIndex + 1] : undefined;
        this.nextInformation = itemIndex > 0 ? res.data[itemIndex - 1] : undefined;
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectInformationDetail();
    this.getProjectInformation();
  }
};
