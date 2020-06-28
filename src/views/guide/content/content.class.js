/**
 * 住房贷款
 */
const housingLoans = [
  {
    title: '首套房',
    links: [
      { id: 100001, label: '优惠政策' },
      { id: 100002, label: '首套房证明' },
      { id: 100003, label: '首套房利率' },
      { id: 100004, label: '首付比例' },
      { id: 100005, label: '认定标准' }
    ]
  },
  {
    title: '二套房',
    links: [
      { id: 100001, label: '首付多少' },
      { id: 100002, label: '如何贷款' },
      { id: 100003, label: '认定标准' },
      { id: 100004, label: '公积金贷款' },
      { id: 100005, label: '贷款政策' },
      { id: 100006, label: '贷款利率' }
    ]
  },
  {
    title: '贷款买房',
    links: [
      { id: 100001, label: '商业贷款条件' },
      { id: 100002, label: '如何贷款' },
      { id: 100003, label: '贷款手续' },
      { id: 100004, label: '贷款流程' }
    ]
  },
  {
    title: '买房首付',
    links: [
      { id: 100001, label: '外地人买房首付' },
      { id: 100002, label: '首套房首付' },
      { id: 100003, label: '首付怎么算' },
      { id: 100004, label: '首付多少' },
      { id: 100005, label: '首付比例' }
    ]
  }
];

/**
 * 住房税证
 */
const housingTaxCertificates = [
  {
    title: '房产证',
    links: [
      { id: 100001, label: '在哪里办理' },
      { id: 100002, label: '需要多少钱' }
    ]
  },
  {
    title: '契税',
    links: [
      { id: 100001, label: '契税政策' },
      { id: 100002, label: '契税怎么算' }
    ]
  },
  {
    title: '房产税',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '征收标准' }
    ]
  }
];

/**
 * 住房公积金
 */
const housingProvidentFunds = [
  {
    title: '公积金查询',
    links: [
      { id: 100001, label: '账户查询' },
      { id: 100002, label: '怎么查询' }
    ]
  },
  {
    title: '公积金提取',
    links: [
      { id: 100001, label: '租房提取' },
      { id: 100002, label: '注意事项' }
    ]
  },
  {
    title: '公积金买房',
    links: [
      { id: 100001, label: '外地买房' },
      { id: 100002, label: '首付比例' }
    ]
  },
  {
    title: '公积金贷款',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '提前还款' }
    ]
  },
  {
    title: '公积金其他',
    links: [
      { id: 100001, label: '最低标准' },
      { id: 100002, label: '怎么转出' }
    ]
  },
];

/**
 * 二手房
 */
const oldHouses = [
  {
    title: '二手房买卖交易',
    links: [
      { id: 100001, label: '注意事项' },
      { id: 100002, label: '要交哪些税' }
    ]
  },
  {
    title: '二手房网签',
    links: [
      { id: 100001, label: '网签查询' },
      { id: 100002, label: '网签流程' }
    ]
  },
  {
    title: '二手房贷款',
    links: [
      { id: 100001, label: '首付比例' },
      { id: 100002, label: '能否贷款' }
    ]
  },
  {
    title: '二手房按揭',
    links: [
      { id: 100001, label: '按揭流程' },
      { id: 100002, label: '按揭费用' }
    ]
  },
  {
    title: '二手房过户',
    links: [
      { id: 100001, label: '怎么过户' },
      { id: 100002, label: '过户流程' }
    ]
  }
];

/**
 * 住房保障
 */
const housingSecuritys = [
  {
    title: '小产权房',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '小产权房价格' }
    ]
  },
  {
    title: '限价房',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '怎么摇号' }
    ]
  },
  {
    title: '廉租房',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '怎么摇号' }
    ]
  },
  {
    title: '经济适用房',
    links: [
      { id: 100001, label: '怎么摇号' },
      { id: 100002, label: '怎么申请' }
    ]
  },
  {
    title: '公租房',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '租金标准' }
    ]
  },
  {
    title: '保障房',
    links: [
      { id: 100001, label: '最新政策' },
      { id: 100002, label: '申请条件' }
    ]
  }
];

/**
 * 其他
 */
const others = [
  {
    title: '无房证明',
    links: [
      { id: 100001, label: '在哪里开' },
      { id: 100002, label: '无房证明格式' }
    ]
  }
];

export {
  housingLoans,
  housingTaxCertificates,
  housingProvidentFunds,
  oldHouses,
  housingSecuritys,
  others
};
