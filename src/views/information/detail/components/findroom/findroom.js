import { provinces, citys, houseTypes, budgets, regions, objectives } from './findroom.class';

export default {
  name: 'findRoom',
  data() {
    return {
      provinces,
      citys,
      houseTypes,
      budgets,
      regions,
      objectives,
      form: {
        province: '', // 期望城市（省）
        city: '', // 期望城市
        region: '', // 期望区域
        houseType: '', // 期望户型
        objective: '', // 购房目的
        budget: '', // 期望预算
        tel: '' // 手机号码
      }
    };
  },
  computed: {
    rules() {
      return {
        tel: [
          { required: true, message: '请输入您的手机号码！', trigger: 'blur' },
          { pattern: /^1[0-9]{10}$/, message: '手机号码有误，请重新填写。', trigger: 'blur' }
        ]
      };
    }
  },
  mounted() {
    this.form.province = provinces[0]; // 省
    this.form.city = citys[0]; // 城市
    this.form.houseType = houseTypes[0]; // 户型
    this.form.budget = budgets[0]; // 预算
    this.form.region = regions[0]; // 区域
    this.form.objective = objectives[0]; // 目的
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('submit');
        }
      })
    }
  }
};
