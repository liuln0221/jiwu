// import { news } from './dynamic.class';

import { ProjectInformation, News, Faqs, UserNotify } from '@/api';

export default {
  name: 'dynamic',
  props: [ 'data' ],
  data() {
    return {
      news: [],
      localNews: [],
      qas: [],
      activeName: 'news'
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
        this.news = res.data;
      });
    },
    /**
     * 获取项目相关的资讯
     */
    getProjectNews() {
      const param = {
        projectId: this.projectId
      };
      News.getProjectNews(param).then(res => {
        this.localNews = res.data || [];
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
    },
    priceNotify() {
      const param = {
        projectId: this.projectId,
        type: 3
      };
      UserNotify.userNotifyAdd(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  },
  mounted() {
    this.getProjectInformation();
    this.getProjectNews();
    this.getFaqs();
  }
}