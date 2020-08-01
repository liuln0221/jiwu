import Calculator from './calculator.vue';
import Property from './property/property.vue'; // 商业贷款计算器
import Fund from './fund/fund.vue'; // 公积金贷款计算器
import GroupLoan from './grouploan/grouploan.vue'; // 组合贷款计算器
import Tax from './tax/tax.vue'; // 税费计算器
import Prepayment from './prepayment/prepayment.vue'; // 提前还款计算器
import House from './house/house.vue'; // 购房能力评估

const routes = [
  {
    name: 'calculator',
    path: 'calculator',
    component: Calculator,
    redirect: { name: 'calculatorProperty' },
    children: [
      {
        name: 'calculatorProperty',
        path: 'property',
        component: Property
      },
      {
        name: 'calculatorFund',
        path: 'fund',
        component: Fund
      },
      {
        name: 'calculatorGroupLoan',
        path: 'groupLoan',
        component: GroupLoan
      },
      {
        name: 'calculatorTax',
        path: 'tax',
        component: Tax
      },
      {
        name: 'calculatorPrepayment',
        path: 'prepayment',
        component: Prepayment
      },
      {
        name: 'calculatorHouse',
        path: 'house',
        component: House
      }
    ]
  }
];

export default routes;
