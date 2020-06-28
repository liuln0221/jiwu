import { mapState } from 'vuex';

// import { newHouse, oldHouse } from './price.class';
import { Region, Price } from '@/api/index';

import LineChart from '@/components/echarts/line.vue';

export default {
  name: 'price',
  components: { LineChart },
  data() {
    return {
      childRegion: [],
      newHousePriceLevels: [],
      newHousePrice: [],
      xData: [] // X轴数据
    }
  },
  computed: {
    ...mapState({
      location: state => state.app.location // 当前城市
    }),
    prices() {
      return [
        { name: 'newHouse', title: '新房', links: this.newHouse },
        // { name: 'oldHouse', title: '二手房', links: oldHouse }
      ];
    },
    newHouse() {
      return [
        {
          name: 'region',
          label: '区域',
          options: this.childRegion
        },
        {
          name: 'avgPrice',
          label: '均价',
          options: this.newHousePriceLevels
        }
      ];
    },
    optionData() {
      return [
        { key: 1, name: '新房', value: this.newHousePrice, color: '#f7624e' },
        // { key: 2, name: '二手房', value: [ 64237 , 63376, 62964, 65059, 69257, 68340 ], color: '#47b3e3' }
      ];
    },
    seriesData() {
      const result = [];
      this.optionData.forEach(item => {
        result.push({
          name: item.name,
          type: 'line',
          symbol:'circle',
          symbolSize: 6,
          data: item.value
        });
      });
      return result;
    },
    // echarts配置
    option() {
      return {
        grid: {
          top: 30,
          bottom: 0,
          left: 0,
          right: 0
        },
        legend: {
          top: 0,
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          formatter: (params) => {
            const data = this.optionData.find(item => item.name === params);
            const avg = parseInt(data.value.reduce((num, next) => num + next, 0) / data.value.length);
            return `${params}${avg}元/㎡`;
          }
        },
        color: [ '#f7624e', '#47b3e3' ],
        xAxis: {
          boundaryGap: true,
          axisTick: {
            inside: true,
            length: 3,
            alignWithLabel: true,
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            color: '#3b4144',
            formatter: (params) => {
              return params.split('-')[1];
            }
          },
          data: this.xData
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: this.seriesData
      }
    }
  },
  methods: {
    /**
     * 区域
     */
    getChildRegion() {
      Region.getChildRegion().then(res => {
        this.childRegion = res.data.map(item => {
          return {
            name: item.code,
            label: item.name
          };
        }); 
      });
    },
    /**
     * 价格区间
     */
    getPriceLevles() {
      // 新房
      Price.getLevels({ type: '1' }).then(res => {
        this.newHousePriceLevels = res.data.map(item => {
          return {
            name: item.id,
            label: item.name
          };
        }); 
      })
    },
    /**
     * 均价
     */
    getHistoryCurrentRegion() {
      // 新房
      Price.getHistoryCurrentRegion('1', { limit: 6 }).then(res => {
        this.newHousePrice = res.data.map(item => {
          return item.averagePrice;
        });
        this.xData = res.data.map(item => {
          return item.date;
        });
      });
    }
  },
  mounted() {
    this.getChildRegion();
    this.getPriceLevles();
    this.getHistoryCurrentRegion();
  }
};
