import { Project } from '@/api';

export default {
  name: 'baseinfo',
  props: [ 'data' ],
  data() {
    return {
      activeIndex: 1,
      houseType: []
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
    adviser() {
      return this.data.salesList && this.data.salesList.length > 0
        ? this.data.salesList[0]
        : undefined
    }
  },
  methods: {
    getProjectLayouts() {
      Project.getProjectLayouts(this.projectId).then(res => {
        this.houseType = this.computed(res.data);
      });
    },
    computed(store) {
      let result = [];
      for (const key in store) {
        result.push(
          {
            label: key,
            count: store[key].length
          }
        );
      }
      return result;
    }
  },
  mounted() {
    this.getProjectLayouts();
  }
}