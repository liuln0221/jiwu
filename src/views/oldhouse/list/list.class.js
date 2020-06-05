const filters = [
  {
    id: 100001,
    name: 'region',
    label: '位置',
    options: [
      { name: undefined, label: '全部', active: true },
      { name: 'daxing', label: '大兴', active: false },
      { name: 'fengtai', label: '丰台', active: false },
      { name: 'shunyi', label: '顺义', active: false }
    ]
  },
  {
    id: 100002,
    name: 'price',
    label: '总价',
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '<100', label: '100万以下', active: false },
      { name: '100-200', label: '100-200万', active: false },
      { name: '200-300', label: '200-300万', active: false },
      { name: '300-500', label: '300-500万', active: false },
      { name: '500-800', label: '500-800万', active: false },
      { name: '800-1000', label: '800-1000万', active: false },
      { name: '>1000', label: '1000万以上', active: false }
    ]
  },
  {
    id: 100003,
    name: 'area',
    label: '面积',
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '<50', label: '50平米以下', active: false },
      { name: '50-70', label: '50-70平米', active: false },
      { name: '70-90', label: '70-90平米', active: false },
      { name: '90-120', label: '90-120平米', active: false },
      { name: '120-150', label: '120-150平米', active: false },
      { name: '150-200', label: '150-200平米', active: false },
      { name: '200-300', label: '200-300平米', active: false },
      { name: '>300', label: '300平米以上', active: false }
    ]
  },
  {
    id: 100004,
    name: 'houseType',
    label: '户型',
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '1', label: '一室', active: false },
      { name: '2', label: '二室', active: false },
      { name: '3', label: '三室', active: false },
      { name: '4', label: '四室', active: false },
      { name: '5', label: '五室', active: false },
      { name: '>5', label: '五室以上', active: false }
    ]
  },
  {
    id: 100005,
    name: 'tag',
    label: '标签',
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '1', label: '房本满五', active: false },
      { name: '2', label: '房本满二', active: false },
      { name: '3', label: '随时看房', active: false },
      { name: '4', label: '主卧朝南', active: false },
      { name: '5', label: '客厅朝南', active: false }
    ]
  },
  {
    id: 100006,
    name: 'renovation',
    label: '装修',
    hide: true,
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '1', label: '毛坯房', active: false },
      { name: '2', label: '普通装修', active: false },
      { name: '3', label: '精装修', active: false }
    ]
  },
  {
    id: 100007,
    name: 'orientation',
    label: '朝向',
    hide: true,
    options: [
      { name: undefined, label: '全部', active: true },
      { name: '1', label: '朝东', active: false },
      { name: '2', label: '朝南', active: false },
      { name: '3', label: '朝西', active: false },
      { name: '4', label: '朝北', active: false },
      { name: '5', label: '东南', active: false },
      { name: '6', label: '东北', active: false },
      { name: '7', label: '西南', active: false },
      { name: '8', label: '西北', active: false }
    ]
  }
];

const store = [
  {
    id: 10001,
    name: '福成六期 豪华装修 满两年 无尾款',
    local: '上上城青年社区',
    houseType: '2室1厅1卫',
    area: 80,
    address: '燕郊开发区',
    price: 239,
    unitPrice: 29875,
    tags: [
      { name: 'fangbenmaner', label: '房本满二' },
      { name: 'suishikanfang', label: '随时看房' }
    ],
    updateTime: 1590717605480,
    // src: 'http://fximgs8.jiwu.com/newhouse/2017/05/16/148/149491799085977_s.jpg'
    src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
  },
  {
    id: 10002,
    name: '星光公馆 婚房两居 低于市场价30万，低首付...',
    local: '潮白星光公馆',
    houseType: '2室1厅1卫',
    area: 99,
    address: '102国道北侧',
    price: 290,
    unitPrice: 29405,
    tags: [],
    updateTime: 1590717605480,
    // src: 'http://fximgs8.jiwu.com/newhouse/2017/05/16/148/149491799085977_s.jpg'
    src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
  }
];

export {
  filters,
  store
};
