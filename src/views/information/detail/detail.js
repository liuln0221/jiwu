import { data } from './detail.class';

import FindRoom from './components/findroom/findroom.vue';
import Article from './components/article/article.vue';
import Adviser from './components/adviser/adviser.vue';
import Disclaimer from './components/disclaimer/disclaimer.vue';
import HotProject from '@/views/components/hotproject/hotproject.vue';
import SellWellOld from './components/sellwellold/sellwellold.vue';
import RecommendOld from './components/recommendold/recommendold.vue';
import HotList from './components/hotlist/hotlist.vue';
import HotQA from './components/hotqa/hotqa.vue';

export default {
  name: 'informationDetail',
  components: { FindRoom, MyArticle: Article, Adviser, Disclaimer, HotProject, SellWellOld, RecommendOld, HotList, HotQA },
  data() {
    return {
      data
    };
  }
};
