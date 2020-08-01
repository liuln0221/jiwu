import Calculator from '../components/calculator/calculator.vue'
import Result from '../components/result/result.vue';

export default {
  name: 'property',
  components: { Calculator, Result },
  methods: {
    getRate(val) {
      if (val.time <= 6) { // 六个月以内（含6个月） 4.35
        return val.rate * 4.35 / 100;
      } else if (val.time > 6 && val.time <= 12) { // 六个月至一年（含1年） 4.35
        return val.rate * 4.35 / 100;
      } else if (val.time > 12 && val.time <= 36) { // 一至三年（含3年） 4.75
        return val.rate * 4.75 / 100;
      } else if (val.time > 36 && val.time <= 60) { // 三至五年（含5年） 4.75
        return val.rate * 4.75 / 100;
      } else if (val.time > 60) { // 五年以上  4.9
        return val.rate * 4.9 / 100
      }
    },
    submit(val, type) {
      this[type](val);
    },
    reset() {
      // 等额本息
      this.$refs.result.principalInterestStore = {};
      // 等额本金
      this.$refs.result.principalStore = {};
    },
    quota(val) {
      const BASE_RATE = this.getRate(val) / 12;
      // 等额本息
      this.$refs.result.principalInterestStore = this.getPrincipalInterestStore(val, BASE_RATE);
      // 等额本金
      this.$refs.result.principalStore = this.getPrincipalStore(val, BASE_RATE);
    },
    area(val) {
      const BASE_RATE = this.getRate(val) / 12;
      val.money = val.price * val.area * (1 - val.downPayments / 10) / 10000;
      // 等额本息
      this.$refs.result.principalInterestStore = this.getPrincipalInterestStore(val, BASE_RATE);
      // 等额本金
      this.$refs.result.principalStore = this.getPrincipalStore(val, BASE_RATE);
    },
    getPrincipalInterestStore(val, BASE_RATE) {
      // 贷款总额
      const price = val.money * 10000;
      // 每月月供额 =〔贷款的本金 × 月利率 ×（1 + 月利率）＾还款月数〕÷〔（1 + 月利率）＾还款月数 - 1〕
      const monthlyRepayment = (price * BASE_RATE * Math.pow(1 + BASE_RATE, val.time)) / (Math.pow(1 + BASE_RATE, val.time) - 1);
      // 总利息 = 还款月数 × 每月月供额 - 贷款的本金
      const totalInterest = val.time * monthlyRepayment - price;
      return {
        price, // 贷款总额
        month: val.time, // 还款月数
        monthlyRepayment: monthlyRepayment.toFixed(2), // 每月还款
        totalInterest: totalInterest.toFixed(2), // 总支付利息
        totalPrincipalInterest: (price + totalInterest).toFixed(2) // 本息合计
      };
    },
    getPrincipalStore(val, BASE_RATE) {
      // 贷款总额
      const price = val.money * 10000;
      // 每月月供额 =（贷款的本金 ÷ 还款月数）+（贷款的本金 - 已归还本金累计额）× 月利率  （计算首月，故：已归还本金累计额 = 0）
      const firstMonthlyRepayment = (price / val.time) + (price - 0) * BASE_RATE;
      // 每月月供递减额＝每月应还本金×月利率＝贷款的本金÷还款月数×月利率
      const decline = price / val.time * BASE_RATE;
      // 总利息 =〔（总贷款额 ÷ 还款月数 + 总贷款额 × 月利率）+ 总贷款额 ÷ 还款月数 × （1 + 月利率）〕÷ 2 × 还款月数 - 总贷款额
      const totalInterest = ((price / val.time + price * BASE_RATE) + price / val.time * (1 + BASE_RATE)) / 2 * val.time - price;
      return {
        price, // 贷款总额
        month: val.time, // 还款月数
        firstMonthlyRepayment: firstMonthlyRepayment.toFixed(2), // 首月还款
        decline: decline.toFixed(2), // 每月月供递减额
        totalInterest: totalInterest.toFixed(2), // 总支付利息
        totalPrincipalInterest: (price + totalInterest).toFixed(2) // 本息合计
      };
    }
  }
}
