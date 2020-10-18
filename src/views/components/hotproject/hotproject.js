import { mapGetters } from 'vuex';
import { Project, Consult } from '@/api';

export default {
  name: 'hotProject',
  data() {
    return {
      data: []
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ])
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
    },
    /**
     * 咨询服务
     * 
     * @param {string} projectId 楼盘id
     * @param {string} id 顾问id
     */
    consultRegister(projectId, id) {
      const param = {
        projectId,
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
    this.getHot();
  }
};
