// import { data } from '../detail.class';

import BaseInfo from './components/baseinfo/baseinfo.vue';
import Comment from './components/comment/comment.vue';
import Dynamic from './components/dynamic/dynamic.vue';
import HouseType from './components/housetype/housetype.vue';
import PropertyInfo from './components/propertyinfo/propertyinfo.vue';
import Periphery from './components/periphery/periphery.vue';
import Album from './components/album/album.vue';
import Price from './components/price/price.vue';
import Other from './components/other/other.vue';
import SamePrice from './components/sameprice/sameprice.vue';
import District from './components/district/district.vue';
import Expand from './components/expand/expand.vue';

import { Project } from '@/api';

export default {
  name: 'home',
  components: {
    BaseInfo, Comment, Dynamic, HouseType, PropertyInfo, Periphery, Album, Price, Other, SamePrice, District, Expand
  },
  data() {
    return {
      data: {}
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
    }
  },
  mounted() {
    this.getProjectDetail();
  }
}