// 区域
const regions = [
  { id: 100001, name: undefined, label: '全部', active: true },
  { id: 100002, name: 'daxing', label: '大兴', num: 71, active: false },
  { id: 100003, name: 'fengtai', label: '丰台', num: 44, active: false },
  { id: 100004, name: 'shunyi', label: '顺义', num: 45, active: false }
];

// 均价
const avgPrices = [
  { id: 100001, name: undefined, label: '全部', active: true },
  { id: 100002, name: '3', label: '3万以下', active: false }
];

// 物业类型
const propertyTypes = [
  { id: 100001, name: 'residence', label: '住宅' },
  { id: 100002, name: 'business', label: '商业' },
  { id: 100003, name: 'synthesis', label: '综合体' },
  { id: 100004, name: 'other', label: '其他' }
];

// 楼盘特色
const propertyFeatures = [
  { id: 100001, name: 'residence', label: '大型社区' },
  { id: 100002, name: 'business', label: '大型商超' }
];

// 销售状态
const salesStatus = [
  { id: 100001, name: 'onSale', label: '在售' },
  { id: 100002, name: 'firstOpening', label: '新盘首开' },
  { id: 100003, name: 'oldBuildPush', label: '老盘加推' },
  { id: 100004, name: 'tailPlate', label: '尾盘' },
  { id: 100005, name: 'commissionSale', label: '代售' },
  { id: 100006, name: 'soldOut', label: '售完' }
];

// 开盘时间
const openingTimes = [
  { id: 100001, name: 'opened', label: '已开盘' },
  { id: 100002, name: 'unopened', label: '未开盘' },
  { id: 100003, name: 'openinmonth', label: '本月开盘' },
  { id: 100004, name: 'opennextmonth', label: '下月开盘' },
  { id: 100005, name: 'openwiththreemonth', label: '3个月内开盘' },
  { id: 100006, name: 'openwithsixmonth', label: '6个月内开盘' },
  { id: 100007, name: 'openwithinyear', label: '1年内开盘' }
];

export {
  regions,
  avgPrices,
  propertyTypes,
  propertyFeatures,
  salesStatus,
  openingTimes
};
