import Home from './home/home.vue'; // 主页
import Floor from './floor/floor.vue'; // 楼盘信息
import HouseType from './housetype/housetype.vue'; // 户型图
import Album from './album/album.vue'; // 相册
import MapTraffic from './maptraffic/maptraffic.vue'; // 地图交通
import PriceTrend from './pricetrend/pricetrend.vue'; // 价格走势
import Dynamic from './dynamic/dynamic.vue'; // 楼盘动态
import DynamicDetail from './dynamic/detail/detail.vue'; // 动态详情
import QA from './qa/qa.vue'; // 有问必答

const routes = [
  {
    name: 'newHouseDetailHome',
    path: '',
    component: Home
  },
  {
    name: 'newHouseDetailFloor',
    path: 'floor',
    component: Floor,
    meta: {
      label: '楼盘信息'
    }
  },
  {
    name: 'newHouseDetailHouseType',
    path: 'houseType',
    component: HouseType,
    meta: {
      label: '户型图'
    }
  },
  {
    name: 'newHouseDetailAlbum',
    path: 'album',
    component: Album,
    meta: {
      label: '相册'
    }
  },
  {
    name: 'newHouseDetailMapTraffic',
    path: 'mapTraffic',
    component: MapTraffic,
    meta: {
      label: '地图交通'
    }
  },
  {
    name: 'newHouseDetailPriceTrend',
    path: 'priceTrend',
    component: PriceTrend,
    meta: {
      label: '价格走势'
    }
  },
  {
    name: 'newHouseDetailDynamic',
    path: 'dynamic',
    component: Dynamic,
    meta: {
      label: '楼盘动态'
    }
  },
  {
    name: 'newHouseDetailDynamicDetail',
    path: 'dynamic/:newsId',
    component: DynamicDetail
  },
  {
    name: 'newHouseDetailQA',
    path: 'qa',
    component: QA,
    meta: {
      label: '有问必答'
    }
  }
];

export default routes;
