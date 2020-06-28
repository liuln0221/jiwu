/**
 * 菜单
 */
const menus = [
  { name: 'home', label: '首页' },
  {
    name: 'newHouse',
    label: '新房',
    children: [
      { name: 'newHouse', label: '新盘' },
      { name: 'hotSaleBuilding', label: '热销楼盘' },
      { name: 'mapHouse', label: '地图找房' },
      { name: 'findHouse', label: '帮我找房' }
    ]
  },
  { name: 'oldHouse', label: '二手房' },
  { name: 'information', label: '资讯' },
  {
    name: 'guide',
    label: '指南',
    children: [
      { name: 'qa', label: '问答' },
      { name: 'encyclopedias', label: '百科' },
      { name: 'priceTrend', label: '房价走势' }
    ]
  },
  { name: 'adviser', label: '置业顾问' }
];

/**
 * 搜索选项
 */
const searchOptions = [
  { name: 'newHouse', label: '新房', placeholder: '请输入楼盘名称' },
  { name: 'oldHouse', label: '二手房', placeholder: '请输入小区名' },
];

export {
  menus,
  searchOptions
};
