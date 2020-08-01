import { info } from './tax.class';

import Calculator from '../components/calculator/calculator.vue';
import Adviser from '../components/adviser/adviser.vue';
import Result from '../components/result/result.vue';
import CustomTable from '@/components/customTable.vue';

export default {
  name: 'tax',
  components: { Calculator, Adviser, Result, CustomTable },
  data() {
    return {
      data: {
        type: 'new',
        price: '',
        area: '',
        nature: 'first'
      },
      info,
      store: {}
    };
  },
  computed: {
    rules() {
      return {
        price: [
          { required: true, message: '请输入单价', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入面积', trigger: 'blur' },
          { pattern: /^([1-9])$|^([1-9]\d)$|^([1-4]\d\d)$|^500$/, message: '请输入数字格式，且不大于500', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.store = this.getStore();
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
      this.store = {};
    },
    getStore() {
      const price = this.data.price * this.data.area; // 房款总价
      return {
        price: price.toFixed(2), // 房款总价
        stampTax: '0', // 印花税  成交总价×0.05%
        notarizationFee: (price * 0.003).toFixed(2), // 公证费
        deedTax: (price * (this.data.area <=140 ? 0.015 : 0.03)).toFixed(2), // 契税
        commission: (price * 0.003).toFixed(2), // 委托办理产权手续费  交易服务费：建筑面积(平方米)×3元
        houseSale: this.data.area <= 120 ? 500 : 1500 // 房屋买卖手续费
      }
    }
  }
}
