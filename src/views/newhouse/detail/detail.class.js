const locals = [
  { id: 100001, name: 'beijing', label: '北京房产网' },
  { id: 100002, name: 'loupan', label: '北京楼盘' },
  { id: 100003, name: 'chaoyang', label: '朝阳楼盘' },
  { id: 100004, name: 'guomao', label: '国贸楼盘' }
];

const data = {
  id: 10001,
  name: '梵悦108',
  alias: '翰林阁',
  site: '北京市朝阳区建国路乙108号',
  tel: {
    number: '400-6690-048',
    relay: '734'
  },
  sellPhone: '133123456789',
  price: 100000,
  label: [
    { name: 'weipan', label: '尾盘' },
    { name: 'specialCar', label: '专车看房' },
    { name: 'shop', label: '大型商超' },
    { name: 'metro', label: '地铁沿线' }
  ],
  // src: 'http://imgs2.yanxuanhaofang.com/attachment/buildpic/2018/09/21/5564357_m.jpg',
  showImgPath: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
  images: [
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360',
    'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
    // 'http://img8.yanxuanhaofang.com/newbuildpic/10/2/17712/17712706_s.jpg',
    // 'http://img8.yanxuanhaofang.com/newbuildpic/10/2/16902/16902895_s.jpg',
    // 'http://img8.yanxuanhaofang.com/newbuildpic/10/2/16921/16921858_s.jpg',
    // 'http://img8.yanxuanhaofang.com/newbuildpic/10/2/17434/17434903_s.jpg',
    // 'http://img13.yanxuanhaofang.com/newbuildpic/10/2/1851/18517415_s.jpg'
  ],
  openDate: 1589453003891,
  priceValidity: {
    startTime: 1589454003891,
    endTime: 1589455003891
  },
  sales: '东塔',
  openingQuotationTime: 1589453503891,
  houseTypes: [
    { label: '1居', num: 2 },
    { label: '2居', num: 3 }
  ],
  adviser: {
    id: 100002,
    name: '霍亚龙',
    resSpeed: 5,
    resRate: 0.97,
    servicePersonNum: 126,
    tags: [
      { name: '', label: '专业' },
      { name: '', label: '靠谱' },
      { name: '', label: '80后' },
      { name: '', label: '高效选房' }
    ],
    serviceExpertise: [ '学区房', '中高档小区', '豪宅项目', '地铁房' ],
    familiarArea: [ '亦庄经济技术开发区', '通州', '石景山', '朝阳', '门头沟', '丰台',' 大兴', '昌平', '房山' ],
    img: 'http://img-other.yanxuanhaofang.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
  }
};

const menus = [
  { name: 'newHouseDetailHome', label: '售楼处主页' },
  { name: 'newHouseDetailFloor', label: '楼盘信息' },
  { name: 'newHouseDetailHouseType', label: '户型图' },
  { name: 'newHouseDetailAlbum', label: '相册' },
  // { name: 'newHouseDetailMapTraffic', label: '地图交通' },
  { name: 'newHouseDetailPriceTrend', label: '价格走势' },
  { name: 'newHouseDetailDynamic', label: '楼盘动态' },
  { name: 'newHouseDetailQA', label: '有问必答' },
  { name: 'phone', label: '手机看盘' }
];

export {
  locals,
  data,
  menus
};
