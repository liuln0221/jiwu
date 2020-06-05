const locals = [
  { routerName: 'home', label: '房产网'},
  { routerName: 'oldHouse', label: '二手房' }
];

const data = {
  id: 10001,
  name: '福成六期 豪华装修 满两年 无尾款',
  local: '上上城青年社区',
  houseType: '2室1厅',
  area: 80,
  floor: '16/28层',
  address: '燕郊开发区',
  price: 239,
  unitPrice: 29875,
  downPayments: 72,
  monthlySupply: 9902,
  years: 2015,
  orientation: '朝南',
  renovation: '豪华装修',
  tags: [
    { name: 'fangbenmaner', label: '房本满二' },
    { name: 'suishikanfang', label: '随时看房' }
  ],
  updateTime: 1590717605480,
  // src: 'http://fximgs8.jiwu.com/newhouse/2017/05/16/148/149491799085977_s.jpg'
  src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
  adviser: {
    id: 100002,
    name: '霍亚龙',
    resSpeed: 5,
    resRate: 0.97,
    servicePersonNum: 126,
    tel: {
      number: '400-6690-048',
      relay: '734'
    },
    tags: [
      { name: '', label: '专业' },
      { name: '', label: '靠谱' },
      { name: '', label: '80后' },
      { name: '', label: '高效选房' }
    ],
    serviceExpertise: [ '学区房', '中高档小区', '豪宅项目', '地铁房' ],
    familiarArea: [ '亦庄经济技术开发区', '通州', '石景山', '朝阳', '门头沟', '丰台',' 大兴', '昌平', '房山' ],
    img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
  }
};

export {
  locals,
  data
};
