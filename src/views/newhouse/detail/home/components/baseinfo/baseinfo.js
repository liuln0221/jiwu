import { Project, UserNotify, Consult } from '@/api';

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
    },
    priceNotify(type) {
      const param = {
        projectId: this.projectId,
        type
      };
      UserNotify.userNotifyAdd(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
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
    this.getProjectLayouts();
  }
}