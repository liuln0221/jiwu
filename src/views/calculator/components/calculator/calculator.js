import { times, rates, downPayments } from './calculator.class';

import Adviser from '../adviser/adviser.vue';

export default {
  name: 'calculator',
  components: { Adviser },
  props: [ 'name', 'custom' ],
  data() {
    return {
      type: 'quota',
      quota: {
        money: '',
        time: 360,
        rate: 1
      },
      area: {
        price: '',
        area: '',
        downPayments: 3,
        time: 360,
        rate: 1
      },
      times,
      rates,
      downPayments
    };
  },
  computed: {
    data() {
      return {
        ...this[this.type]
      };
    },
    quotaRules() {
      return {
        money: [
          { required: true, message: '请输入贷款金额', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ]
      }
    },
    areaRules() {
      return {
        price: [
          { required: true, message: '请输入单价', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请输入面积', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    radioChange() {
      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('submit', this[this.type], this.type);
        }
      });
    },
    reset() {
      this.$emit('reset');
    }
  }
}
