import { mapGetters } from 'vuex';
import { locals, data } from './detail.class';

import BaseInfo from './components/baseinfo/baseinfo.vue';
import CellInfo from './components/cellinfo/cellinfo.vue';
import Description from './components/description/description.vue';
import Album from './components/album/album.vue';
import PriceTrend from './components/priceTrend/priceTrend.vue';
import Matching from './components/matching/matching.vue';
import SameCommunity from './components/samecommunity/samecommunity.vue';
import SameType from './components/sametype/sametype.vue';
import Disclaimer from './components/disclaimer/disclaimer.vue';

export default {
  name: 'oldHouseDetail',
  components: { BaseInfo, CellInfo, Description, Album, PriceTrend, Matching, SameCommunity, SameType, Disclaimer },
  data() {
    return {
      locals,
      data
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
  }
};
