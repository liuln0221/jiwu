import { times, rates } from '../components/calculator/calculator.class';

import Calculator from '../components/calculator/calculator.vue';
import Adviser from '../components/adviser/adviser.vue';
import Result from '../components/result/result.vue';

export default {
  name: 'groupLoan',
  components: { Calculator, Adviser, Result },
  data() {
    return {
      data: {
        time: 360,
        fundMoney: '',
        fundRate: 1,
        propertyMoney: '',
        propertyRate: 1
      },
      times,
      fundRates: rates,
      propertyRates: rates
    };
  },
  computed: {
    rules() {
      return {
        fundMoney: [
          { required: true, message: '公积金贷款金额', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式', trigger: 'blur' }
        ],
        propertyMoney: [
          { required: true, message: '商业贷款金额', trigger: 'blur' },
          { pattern: /^[1-9]\d*$/, message: '请输入数字格式，且不大于500', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 公积金贷款利率
    getFundRate(val) {
      if (val.time <= 60) { // 五年以下（含五年） 2.75
        return val.fundRate * 2.75 / 100;
      } else if (val.time > 60) { // 五年以上  3.25
        return val.fundRate * 3.25 / 100
      }
    },
    // 商业贷款利率
    getPropertyRate(val) {
      if (val.time <= 6) { // 六个月以内（含6个月） 4.35
        return val.propertyRate * 4.35 / 100;
      } else if (val.time > 6 && val.time <= 12) { // 六个月至一年（含1年） 4.35
        return val.propertyRate * 4.35 / 100;
      } else if (val.time > 12 && val.time <= 36) { // 一至三年（含3年） 4.75
        return val.propertyRate * 4.75 / 100;
      } else if (val.time > 36 && val.time <= 60) { // 三至五年（含5年） 4.75
        return val.propertyRate * 4.75 / 100;
      } else if (val.time > 60) { // 五年以上  4.9
        return val.propertyRate * 4.9 / 100
      }
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 等额本息
          this.$refs.result.principalInterestStore = this.getPrincipalInterestStore(this.data);
          // 等额本金
          this.$refs.result.principalStore = this.getPrincipalStore(this.data);
        }
      });
    },
    reset() {
      this.$refs.form.resetFields();
      // 等额本息
      this.$refs.result.principalInterestStore = {};
      // 等额本金
      this.$refs.result.principalStore = {};
    },
    getPrincipalInterestStore(val) {
      /********* 公积金贷款 *********/
      const fundPrice = val.fundMoney * 10000; // 贷款总额
      const FUND_RATE = this.getFundRate(this.data) / 12; // 利率
      const fundMonthlyRepayment = getMonthlyRepayment(fundPrice, FUND_RATE); // 每月月供额
      const fundTotalInterest = val.time * fundMonthlyRepayment - fundPrice; // 总利息 = 还款月数 × 每月月供额 - 贷款的本金

      /********* 商业贷款 *********/
      const propertyPrice = val.fundMoney * 10000; // 贷款总额
      const PROPERTY_RATE = this.getPropertyRate(this.data) / 12; // 利率
      const propertyMonthlyRepayment = getMonthlyRepayment(propertyPrice, PROPERTY_RATE); // 每月月供额
      const propertyTotalInterest = val.time * propertyMonthlyRepayment - propertyPrice; // 总利息 = 还款月数 × 每月月供额 - 贷款的本金

      /********* 结果 *********/
      return {
        price: (fundPrice + propertyPrice).toFixed(2), // 贷款总额
        month: val.time, // 还款月数
        monthlyRepayment: (fundMonthlyRepayment + propertyMonthlyRepayment).toFixed(2), // 每月还款
        totalInterest: (fundTotalInterest + propertyTotalInterest).toFixed(2), // 总支付利息
        totalPrincipalInterest: (fundPrice + propertyPrice + fundTotalInterest + propertyTotalInterest).toFixed(2) // 本息合计（本金 + 总利息）
      };

      // 每月月供额
      function getMonthlyRepayment(price, BASE_RATE) {
        // 每月月供额 =〔贷款的本金 × 月利率 ×（1 + 月利率）＾还款月数〕÷〔（1 + 月利率）＾还款月数 - 1〕
        return (price * BASE_RATE * Math.pow(1 + BASE_RATE, val.time)) / (Math.pow(1 + BASE_RATE, val.time) - 1);
      }
    },
    getPrincipalStore(val) {
      /********* 公积金贷款 *********/
      const fundPrice = val.fundMoney * 10000; // 贷款总额
      const FUND_RATE = this.getFundRate(this.data) / 12; // 利率
      const fundFirstMonthlyRepayment = getFirstMonthlyRepayment(fundPrice, FUND_RATE); // 首月月供额
      const fundDecline = getDecline(fundPrice, FUND_RATE); // 每月月供递减额
      const fundTotalInterest = getTotalInterest(fundPrice, FUND_RATE); // // 总利息

      /********* 商业贷款 *********/
      const propertyPrice = val.fundMoney * 10000; // 贷款总额
      const PROPERTY_RATE = this.getPropertyRate(this.data) / 12; // 利率
      const propertyFirstMonthlyRepayment = getFirstMonthlyRepayment(propertyPrice, PROPERTY_RATE); // 首月月供额
      const propertyDecline = getDecline(propertyPrice, PROPERTY_RATE); // 每月月供递减额
      const propertyTotalInterest = getTotalInterest(propertyPrice, PROPERTY_RATE); // // 总利息
      return {
        price: (fundPrice + propertyPrice).toFixed(2), // 贷款总额
        month: val.time, // 还款月数
        firstMonthlyRepayment: (fundFirstMonthlyRepayment + propertyFirstMonthlyRepayment).toFixed(2), // 首月还款
        decline: (fundDecline + propertyDecline).toFixed(2), // 每月月供递减额
        totalInterest: (fundTotalInterest + propertyTotalInterest).toFixed(2), // 总支付利息
        totalPrincipalInterest: (fundPrice + propertyPrice + fundTotalInterest + propertyTotalInterest).toFixed(2) // 本息合计（本金 + 总利息）
      };

      // 首月月供额
      function getFirstMonthlyRepayment(price, BASE_RATE) {
        // 首月月供额 =（贷款的本金 ÷ 还款月数）+（贷款的本金 - 已归还本金累计额）× 月利率  （计算首月，故：已归还本金累计额 = 0）
        return (price / val.time) + (price - 0) * BASE_RATE;
      }

      // 每月月供递减额
      function getDecline(price, BASE_RATE) {
        // 每月月供递减额＝每月应还本金×月利率＝贷款的本金÷还款月数×月利率
        return price / val.time * BASE_RATE;
      }

      // 总利息
      function getTotalInterest(price, BASE_RATE) {
        // 总利息 =〔（总贷款额 ÷ 还款月数 + 总贷款额 × 月利率）+ 总贷款额 ÷ 还款月数 × （1 + 月利率）〕÷ 2 × 还款月数 - 总贷款额
        return ((price / val.time + price * BASE_RATE) + price / val.time * (1 + BASE_RATE)) / 2 * val.time - price;
      }
    }
  }
}
