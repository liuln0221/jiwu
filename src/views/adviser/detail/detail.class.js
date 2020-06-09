const data = {
  id: 100001,
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
  personalIntroduction: '个人有着丰富的房地产经验。希望您给我一个可以为您找到一个温馨舒适的家。',
  company: '吉屋授权城市运营商',
  serviceExpertise: [ '学区房', '中高档小区', '豪宅项目', '地铁房' ], // 服务专长
  familiarArea: [ '亦庄经济技术开发区', '通州', '石景山', '朝阳', '门头沟', '丰台',' 大兴', '昌平', '房山' ], // 熟悉区域
  familiarProperties: [ // 熟悉楼盘
    {
      id: 10001,
      name: '梵悦108',
      local: '北京市朝阳区建国路乙108号',
      tel: {
        number: '400-6690-048',
        relay: '734'
      },
      price: 100000,
      tags: [
        { name: 'weipan', label: '尾盘' },
        { name: 'shop', label: '大型商超' },
        { name: 'metro', label: '地铁沿线' }
      ],
      // src: 'http://imgs2.jiwu.com/attachment/buildpic/2018/09/21/5564357_a.jpg'
      src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
    },
    {
      id: 10002,
      name: '泰禾北京公馆',
      local: '东四环中路58号',
      tel: {
        number: '400-6690-048',
        relay: '760'
      },
      price: 170000,
      tags: [
        { name: 'zaishou', label: '在售' },
        { name: 'shop', label: '大型商超' },
        { name: 'little', label: '小户型' }
      ],
      recommend: 'CBD唯一可售新盘精装现房 2、高端醇熟全体系配套，顶级精装品牌、 300°极限景观，智能家居，7大生态人居系统 3、泰禾顶豪产品系代表力作、新中式风格，文化地产 4、泰禾首个采用管家式与酒店式双重服务体系的项目且配备业主私享会所',
      service: {
        photo: 'http://appimg.jiwu.com/file/2019/07/15/1563178226349682_s.png',
        num: 920
      },
      // src: 'http://imgs2.jiwu.com/attachment/buildpic/2018/09/21/5564362_a.jpg',
      src: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
    }
  ],
  img: 'http://img-other.jiwu.com/apic/2020/03/10/115505312127.jpg/pc1920x360'
};

export {
  data
};
