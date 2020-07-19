import { ProjectEvaluate } from '@/api';

export default {
  name: 'common',
  data() {
    return {
      data: [],
      expand: false
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    getProjectEvaluate() {
      ProjectEvaluate.getProjectEvaluate(this.projectId).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getProjectEvaluate();
  }
};