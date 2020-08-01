// import { data } from './comment.class';
import { ProjectEvaluate } from '@/api';

export default {
  name: 'comment',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getProjectEvaluateList() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      ProjectEvaluate.getProjectEvaluateList(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getProjectEvaluateList();
  }
};
