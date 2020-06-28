import { Region } from '@/api';

export default {
  name: 'surroundCity',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getOpenedCity() {
      Region.getOpenedRegion().then(res => {
        if (res.data.allCities) {
          res.data.allCities.forEach(item => {
            this.data = this.data.concat(item.values);
          });
        }
      });
    }
  },
  mounted() {
    this.getOpenedCity();
  }
};
