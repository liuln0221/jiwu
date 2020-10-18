const types = [
  { label: '商业贷款', value: 'property' },
  { label: '公积金贷款', value: 'fund' }
];

const info = [
  { label: '原月还款额', value: 'originalMonthlyPayment', unit: '元' },
  { label: '原最后还款期', value: 'originalFinalPepaymentPeriod' },
  { label: '已还款总金额', value: 'totalAmountOfRepayment', unit: '元' },
  { label: '已返还利息', value: 'interestReturned', unit: '元' },
  { label: '该月一次还款额', value: 'lumpSumPaymentInMonth', unit: '元' },
  { label: '下月起月还款额', value: 'monthlyPaymentFromNextMonth', unit: '元' },
  { label: '节省利息支出', value: 'savingInterestExpense', unit: '元' },
  { label: '新的最后还款期', value: 'newFinalRepaymentPeriod' },
  { label: '计算结果提示', value: 'theCalculationResultsIndicateThat' }
];

export {
  types,
  info
};
