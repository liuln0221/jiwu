import Navbar from './components/navbar/navbar.vue'; // 左侧菜单
import Carousel from './components/carousel/carousel.vue'; // 轮播图
import Price from './components/price/price.vue'; // 房价
import SellWell from './components/sellwell/sellwell.vue'; // 热销新盘
import NewHouse from './components/newhouse/newhouse.vue'; // 新房
import Adviser from './components/adviser/adviser.vue'; // 置业顾问
import OldHouse from './components/oldhouse/oldhouse.vue'; // 精选二手房
import News from './components/news/news.vue'; // 房产资讯
import KnowledgeBase from './components/knowledgebase/knowledgebase.vue'; // 知识库

export default {
  name: 'home',
  components: {
    Navbar,
    Carousel,
    Price,
    SellWell,
    NewHouse,
    Adviser,
    OldHouse,
    News,
    KnowledgeBase
  }
};