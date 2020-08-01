import { Price } from "@/api";

export default {
  name: 'regionPriceRank',
  data() {
    return {
      data: [],
      type: 1,
      expand: false
    };
  },
  computed: {
    region() {
      return this.$route.query.region;
    }
  },
  methods: {
    getChildRegionPricesRank() {
      const param = {
        regionCode: this.region,
        type: this.type
      };
      Price.getChildRegionPricesRank(param).then(res => {
        this.data = this.computed(res.data);
      });
    },
    computed(store) {
      const result = [];
      for (const key in store) {
        const item = store[key] ? store[key] : {};
        item.region = Object.keys(item)[0];
        item.rank = parseInt(key) + 1;
        result.push({
          ...item,
          ...item[item.region]
        });
      }
      return result;
    }
  },
  mounted() {
    this.getChildRegionPricesRank();
  }
};
