import { Project, ProjectInformation } from "@/api";

import { Common } from '@/utils/common';

import HotProject from '@/views/components/hotproject/hotproject.vue';

export default {
  name: 'dynamicDetail',
  components: { HotProject },
  data() {
    return {
      data: {},
      news: {},
      newInformation: {}, // 最新动态
      prevInformation: {}, // 上一篇动态
      nextInformation: {} // 下一篇动态
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    newsId() {
      return this.$route.params.newsId;
    }
  },
  methods: {
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    getProjectInformationDetail() {
      ProjectInformation.getProjectInformationDetail(this.newsId).then(res => {
        this.news = res.data;
        this.$route.matched.find(item => item.name === 'newHouseDetailDynamicDetail').meta.label = this.news.title;
        Common.setTitle(this);
      });
    },
    getProjectInformation() {
      const newsId = this.newsId;
      const param = {
        pageIndex: 1,
        pageSize: 20,
        projectId: this.projectId
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        const itemIndex = res.data.findIndex(item => {
          return item.id === parseInt(newsId, 10);
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
