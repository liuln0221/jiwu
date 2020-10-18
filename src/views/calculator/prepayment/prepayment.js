import { types, info } from './prepayment.class';
import { times, rates } from '../components/calculator/calculator.class';
import { fundRate, propertyRate }  from '../util';

import Calculator from '../components/calculator/calculator.vue';
import Adviser from '../components/adviser/adviser.vue';
import Result from '../components/result/result.vue';
import CustomTable from '@/components/customTable.vue';

export default {
  name: 'prepayment',
  components: { Calculator, Adviser, Result, CustomTable },
  data() {
    return {
      data: {
        type: 'property',
        money: '',
        time: 360,
        rate: 1,
        firstPaymentTime: '',
        prepaymentTime: '',
        prepaymentMode: '',
        treatmentMode: ''
      },
      types,
      times,
      rates,
      info,
      store: {
        property: {},
        fund: {}
      }
    };
  },
  computed: {
    rules() {
      return {
        money: [
          { required: true, message: '请输入原贷款金额', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ],
        firstPaymentTime: [
          { required: true, message: '请选择第一次还款时间', trigger: 'blur' }
        ],
        prepaymentTime: [
          { required: true, message: '请选择提前还款时间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 等额本息
          this.store.property = this.getProperty(this.data);
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
      // 等额本息
      this.store.property = {};
    },
    /**
     * 商业贷款
     * @param {} val 表单数据 
     */
    getProperty(val) {
      const price = val.money * 10000; // 贷款总额
      const RATE = propertyRate(this.data.rate, this.data.time) / 12; // 利率
      const originalMonthlyPayment = getMonthlyRepayment(price, RATE); // 原月还款额
      const originalFinalPepaymentPeriod = this.getMonth(this.data.firstPaymentTime, this.data.time); // 原最后还款期
      const totalAmountOfRepayment = (new Date(this.data.prepaymentTime).getMonth() - new Date(this.data.firstPaymentTime).getMonth()) * originalMonthlyPayment; // 已还款总金额

      /********* 结果 *********/
      return {
        originalMonthlyPayment: originalMonthlyPayment.toFixed(2), // 原月还款额
        originalFinalPepaymentPeriod, // 原最后还款期
        totalAmountOfRepayment: totalAmountOfRepayment.toFixed(2), // 已还款总金额
        interestReturned: '', // 已返还利息
        lumpSumPaymentInMonth: '', // 该月一次还款额
        monthlyPaymentFromNextMonth: '', // 下月起月还款额
        savingInterestExpense: '', // 节省利息支出
        newFinalRepaymentPeriod: '', // 新的最后还款期
        theCalculationResultsIndicateThat: '' // 计算结果提示
      };

      // 每月月供额
      function getMonthlyRepayment(price, RATE) {
        // 每月月供额 =〔贷款的本金 × 月利率 ×（1 + 月利率）＾还款月数〕÷〔（1 + 月利率）＾还款月数 - 1〕
        return (price * RATE * Math.pow(1 + RATE, val.time)) / (Math.pow(1 + RATE, val.time) - 1);
      }
    },
    /**
     * 公积金贷款
     * @param {} val 表单数据 
     */
    getFund(val) {
      const price = val.money * 10000; // 贷款总额
      const RATE = fundRate(this.data.rate, this.data.time) / 12; // 利率
      const originalMonthlyPayment = getMonthlyRepayment(price, RATE); // 原月还款额
      // const propertyTotalInterest = val.time * propertyMonthlyRepayment - propertyPrice; // 总利息 = 还款月数 × 每月月供额 - 贷款的本金

      /********* 结果 *********/
      return {
        originalMonthlyPayment: originalMonthlyPayment.toFixed(2), // 原月还款额
        originalFinalPepaymentPeriod: '', // 原最后还款期
        totalAmountOfRepayment: '', // 已还款总金额
        interestReturned: '', // 已返还利息
        lumpSumPaymentInMonth: '', // 该月一次还款额
        monthlyPaymentFromNextMonth: '', // 下月起月还款额
        savingInterestExpense: '', // 节省利息支出
        newFinalRepaymentPeriod: '', // 新的最后还款期
        theCalculationResultsIndicateThat: '' // 计算结果提示
      };

      // 每月月供额
      function getMonthlyRepayment(price, BASE_RATE) {
        // 每月月供额 =〔贷款的本金 × 月利率 ×（1 + 月利率）＾还款月数〕÷〔（1 + 月利率）＾还款月数 - 1〕
        return (price * BASE_RATE * Math.pow(1 + BASE_RATE, val.time)) / (Math.pow(1 + BASE_RATE, val.time) - 1);
      }
    },
    getMonth(date, month) {
      const d = new Date(date);
      // 因为getMonth()获取的月份的值只能在bai0~11之间所以我们在进行setMonth()之前先给其减一
      d.setMonth((d.getMonth() - 1) + month);
      const yy1 = d.getFullYear();
      let mm1 = d.getMonth() + 1;
      console.log(mm1);
      let dd1 = d.getDate();
      if (mm1 < 10) {
        mm1 = '0' + mm1;
      }
      if (dd1 < 10) {
        dd1 = '0' + dd1;
      }
      console.log(yy1 + '/' + mm1 + '/' + dd1);
      return yy1 + '/' + mm1 + '/' + dd1;
    }
  }
};
