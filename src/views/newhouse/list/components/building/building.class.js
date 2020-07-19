// 区域
const regions = [
  { id: 100001, name: '全部', active: true },
  { id: 100002, name: '大兴', num: 71, active: false },
  { id: 100003, name: '丰台', num: 44, active: false },
  { id: 100004, name: '顺义', num: 45, active: false }
];

// 均价
const priceIntervals = [
  { id: 100001, name: undefined, label: '全部', active: true },
  { id: 100002, name: '3', label: '3万以下', active: false }
];

// 物业类型
const propertyTypes = [
  { id: 1, name: '住宅' },
  { id: 2, name: '商业' },
  { id: 3, name: '别墅' },
  { id: 4, name: '综合' },
  { id: 5, name: '其它' }
];

// 楼盘特色
const propertyFeatures = [
  { id: 100001, name: '大型社区' },
  { id: 100002, name: '大型商超' }
];

// 销售状态
const saleStatus = [
  { id: 1, name: '在售' },
  { id: 2, name: '待售' },
  { id: 3, name: '售完' }
];

// 开盘状态
const openStatus = [
  { id: 1, name: '未开盘' },
  { id: 2, name: '已开盘' },
  { id: 3, name: '本月开盘' },
  { id: 4, name: '下月开盘' },
  { id: 5, name: '三月内开盘' },
  { id: 6, name: '六月内开盘' },
  { id: 7, name: '一年内开盘' }
];

export {
  regions,
  priceIntervals,
  propertyTypes,
  propertyFeatures,
  saleStatus,
  openStatus
};
