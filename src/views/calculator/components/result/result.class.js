// 等额本息
const principalInterest = [
  { label: '贷款总额', value: 'price', unit: '元' },
  { label: '还款月数', value: 'month', unit: '月' },
  { label: '每月还款', value: 'monthlyRepayment', unit: '元' },
  { label: '总支付利息', value: 'totalInterest', unit: '元' },
  { label: '本息合计', value: 'totalPrincipalInterest', unit: '元' }
];

// 等额本金
const principal = [
  { label: '贷款总额', value: 'price', unit: '元' },
  { label: '还款月数', value: 'month', unit: '月' },
  {
    label: '首月还款',
    getValue: (val) => {
      return val.firstMonthlyRepayment
        ? `<div class="rows">${val.firstMonthlyRepayment}&nbsp;&nbsp;&nbsp;&nbsp;元<br/>每月递减：${val.decline}&nbsp;&nbsp;&nbsp;&nbsp;元</div>`
        : '暂无数据';
    }
  },
  { label: '总支付利息', value: 'totalInterest', unit: '元' },
  { label: '本息合计', value: 'totalPrincipalInterest', unit: '元' }
];

export {
  principalInterest,
  principal
};
