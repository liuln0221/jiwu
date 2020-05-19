// 区域
const regions = [
  { name: undefined, label: '全部', active: true },
  { name: 'daxing', label: '大兴', num: 71, active: false },
  { name: 'fengtai', label: '丰台', num: 44, active: false },
  { name: 'shunyi', label: '顺义', num: 45, active: false }
];

// 均价
const avgPrices = [
  { name: undefined, label: '全部', active: true },
  { name: '3', label: '3万以下', active: false }
];

// 物业类型
const propertyTypes = [
  { name: 'residence', label: '住宅' },
  { name: 'business', label: '商业' },
  { name: 'synthesis', label: '综合体' },
  { name: 'other', label: '其他' }
];

// 楼盘特色
const propertyFeatures = [
  { name: 'residence', label: '大型社区' },
  { name: 'business', label: '大型商超' }
];

// 销售状态
const salesStatus = [
  { name: 'onSale', label: '在售' },
  { name: 'firstOpening', label: '新盘首开' },
  { name: 'oldBuildPush', label: '老盘加推' },
  { name: 'tailPlate', label: '尾盘' },
  { name: 'commissionSale', label: '代售' },
  { name: 'soldOut', label: '售完' }
];

// 开盘时间
const openingTimes = [
  { name: 'opened', label: '已开盘' },
  { name: 'unopened', label: '未开盘' },
  { name: 'openinmonth', label: '本月开盘' },
  { name: 'opennextmonth', label: '下月开盘' },
  { name: 'openwiththreemonth', label: '3个月内开盘' },
  { name: 'openwithsixmonth', label: '6个月内开盘' },
  { name: 'openwithinyear', label: '1年内开盘' }
];

export {
  regions,
  avgPrices,
  propertyTypes,
  propertyFeatures,
  salesStatus,
  openingTimes
};
