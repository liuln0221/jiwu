// 新房
const newHouseLinks = [
  {
    title: '区域',
    options: [
      { name: 'daxing', label: '大兴' },
      { name: 'fengtai', label: '丰台' },
      { name: 'shunyi', label: '顺义' }
    ]
  },
  {
    title: '单价',
    options: [
      { name: '3', label: '3万以下' }
    ]
  },
  {
    title: '特色',
    options: [
      { name: 'zhuanchekanfang', label: '专车看房' }
    ]
  }
];

// 二手房
const oldHouseLinks = [
  {
    title: '区域',
    options: [
      { name: 'daxing', label: '大兴' },
      { name: 'fengtai', label: '丰台' },
      { name: 'shunyi', label: '顺义' }
    ]
  },
  {
    title: '总价',
    options: [
      { name: '200', label: '200万以下' }
    ]
  },
  {
    title: '户型',
    options: [
      { name: '1', label: '一室' },
      { name: '2', label: '二室' },
      { name: '3', label: '三室' },
      { name: '4', label: '四室' },
      { name: '5', label: '五室' },
      { name: 'more', label: '五室以上' }
    ]
  },
  {
    title: '特色',
    options: [
      { name: 'fangbenmanwu', label: '房本满五' }
    ]
  }
];

// 查房价
const checkPrice = [
  {
    title: '热门区域',
    options: [
      { name: 'all', label: '全部' },
      { name: 'daxing', label: '大兴' },
      { name: 'fengtai', label: '丰台' },
      { name: 'shunyi', label: '顺义' }
    ]
  },
  {
    title: '热门板块',
    options: [
      { name: 'daxing', label: '大兴' }
    ]
  }
];

export {
  newHouseLinks,
  oldHouseLinks,
  checkPrice
};
