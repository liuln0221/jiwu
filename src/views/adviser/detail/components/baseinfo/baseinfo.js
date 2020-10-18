import { Consult } from '@/api';

export default {
  name: 'baseinfo',
  props: [ 'data' ],
  methods: {
    /**
     * 咨询服务
     */
    consultRegister() {
      const param = {
        saleManId: this.data.id
      };
      Consult.consultRegister(param).then(res => {
        if (res && res.code === 10021) { // 非法请求，缺少Token
          this.$store.dispatch('app/setLogin', true);
        }
      });
    }
  }
};
