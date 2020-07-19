import { Project, Activity } from "@/api";

export default {
  name: 'activities',
  data() {
    return {
      data: {},
      activities: []
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    }
  },
  methods: {
    /**
     * 获取楼盘详情
     */
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    /**
     * 获取活动
     */
    getProjectActicity() {
      const param = {
        projectId: this.projectId
      };
      Activity.getProjectActicity(param).then(res => {
        this.activities = res.data;
      });
    },
    /**
     * 活动报名
     */
    acticityRegister(val) {
      const param = {
        activityId: val.id
      };
      Activity.acticityRegister(param).then();
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getProjectActicity();
  }
};
