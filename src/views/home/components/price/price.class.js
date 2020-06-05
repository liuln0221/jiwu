const newHouse = [
  {
    name: 'region',
    label: '区域',
    options: [ { name: 'daxing', label: '大兴' } ]
  },
  {
    name: 'avgPrice',
    label: '均价',
    options: [ { name: '3', label: '3万以下' } ]
  }
];

const oldHouse = [
  {
    name: 'region',
    label: '区域',
    options: [ { name: 'daxing', label: '大兴' } ]
  },
  {
    name: 'price',
    label: '总价',
    options: [ { name: '<100', label: '100万以下' } ]
  }
];

export {
  newHouse,
  oldHouse
};
