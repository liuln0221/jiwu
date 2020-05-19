const metros = [
  { name: undefined, label: '全部', active: true },
  {
    name: 'oneLine',
    label: '地铁1号线',
    active: false,
    children: [
      { name: 'pingguoyuan', label: '苹果园', active: false },
      { name: 'gucheng', label: '古城', active: false }
    ]
  },
  { name: 'twoLine', label: '地铁2号线', active: false }
];

export {
  metros
};
