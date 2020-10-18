import { ProjectEvaluate, Consult } from '@/api';

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
    },
    /**
     * 点赞该点评
     */
    agreeProjectEvaluate(id) {
      ProjectEvaluate.agreeProjectEvaluate(id).then(res => {
        if (res.code === 200) {
          this.getProjectEvaluate();
        }
      });
    },
    /**
     * 咨询服务
     * @param {string} id 顾问id
     */
    consultRegister(id) {
      const param = {
        projectId: this.projectId,
        saleManId: id
      };
      Consult.consultRegister(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  },
  mounted() {
    this.getProjectEvaluate();
  }
};