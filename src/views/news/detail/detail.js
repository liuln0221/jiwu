import FindRoom from './components/findroom/findroom.vue';
import Article from './components/article/article.vue';
import Adviser from './components/adviser/adviser.vue';
import Disclaimer from './components/disclaimer/disclaimer.vue';
import HotProject from '@/views/components/hotproject/hotproject.vue';
import SellWellOld from './components/sellwellold/sellwellold.vue';
import RecommendOld from './components/recommendold/recommendold.vue';
import HotList from './components/hotlist/hotlist.vue';
import HotQA from './components/hotqa/hotqa.vue';

import { News } from '@/api';

import { Common } from '@/utils/common';

export default {
  name: 'newsDetail',
  components: { FindRoom, MyArticle: Article, Adviser, Disclaimer, HotProject, SellWellOld, RecommendOld, HotList, HotQA },
  data() {
    return {
      data: []
    };
  },
  computed: {
    newsId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getNewsDetail() {
      News.getNewsDetail(this.newsId).then(res => {
        this.data = res.data;
        this.$route.matched.find(item => item.name === 'newsDetail').meta.label = this.data.title;
        Common.setTitle(this);
      });
    }
  },
  mounted() {
    this.getNewsDetail();
  }
};
