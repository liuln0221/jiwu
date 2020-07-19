// import { informations } from './dynamic.class';

import { ProjectInformation, News, Faqs } from '@/api';

export default {
  name: 'dynamic',
  props: [ 'data' ],
  data() {
    return {
      informations: [],
      localNews: [],
      qas: [],
      activeName: 'information'
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    /**
     * 获取动态
     */
    getProjectInformation() {
      const param = {
        pageIndex: 1,
        pageSize: 2,
        projectId: this.projectId
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        this.informations = res.data;
      });
    },
    /**
     * 获取本地资讯
     */
    getLocals() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      News.getLocals(param).then(res => {
        this.localNews = res.data;
      });
    },
    /**
     * 获取问答
     */
    getFaqs() {
      const param = {
        projectId: this.projectId,
        pageIndex: 1,
        pageSize: 5
      };
      Faqs.getFaqs(param).then(res => {
        this.qas = res.data || [];
      });
    }
  },
  mounted() {
    this.getProjectInformation();
    this.getLocals();
    this.getFaqs();
  }
}