import { mapState } from 'vuex';

export default {
  name: 'checkPrice',
  data() {
    return {
      newHousePrice: {
        value: 48882,
        trend: -30
      },
      oldHousePrice: {
        value: 68340,
        trend: -130
      }
    };
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    })
  }
};
