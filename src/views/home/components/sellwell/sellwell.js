import { Project } from "@/api";

export default {
  name: 'sellwell',
  data() {
    return {
      data: []
    };
  },
  methods: {
    getHot() {
      const param = {
        pageIndex: 1,
        pageSize: 5
      };
      Project.getHot(param).then(res => {
        this.data = res.data;
      });
    }
  },
  mounted() {
    this.getHot();
  }
};
