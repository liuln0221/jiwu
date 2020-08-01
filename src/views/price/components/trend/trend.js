import { mapGetters } from 'vuex';

import LineChart from '@/components/echarts/line.vue';

import { Price } from '@/api';

export default {
  name: 'trend',
  components: { LineChart },
  data() {
    return {
      newHouseData: [],
      time: 12,
      xData: [],
      tel: '133123456789'
    };
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ]),
    region() {
      return this.$route.query.region;
    },
    optionData() {
      return [
        {
          name: '新房',
          value: this.newHouseData,
          color: '#47b3e3'
        }
        // {
        //   name: '二手房',
        //   value: this.cityValue,
        //   color: '#f7624e'
        // }
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
          top: 10,
          bottom: 30,
          left: 0,
          right: 0
        },
        legend: {
          // show: false
        },
        color: [ '#47b3e3', '#f7624e' ],
        tooltip: {
          textStyle: {
            fontSize: 12
          },
          formatter(params) {
            let result = `${params[0].name.substring(0, 7)}月</br>`;
            params.forEach(item => {
              result += `${item.marker} ${item.seriesName} : ${item.value ? item.value : '-'}元/平米</br>`;
            });
            return result;
          }
        },
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
              return `${params.substring(0, 7)}月`;
            }
          },
          data: this.xData
        },
        yAxis: {
          splitNumber: 2,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}元'
          },
          scale: true
        },
        series: this.seriesData
      }
    }
  },
  methods: {
    /**
     * 当前城市历史价格
     */
    getHistoryCurrentRegion() {
      // 新房
      Price.getHistoryCurrentRegion('1', { limit: 1 }).then(res => {
        this.xData = res.data.map(item => item.date).sort();
        this.newHouseData = this.computed(res.data).map(item => item.averagePrice);
      });
    },
    /**
     * 指定区域历史价格
     */
    getHistoryRegion() {
      const param = {
        limit: this.time
      };
      Price.getHistoryRegion(this.region, 1, param).then(res => {
        this.xData = res.data.map(item => item.date).sort();
        this.newHouseData = this.computed(res.data).map(item => item.averagePrice);
      });
    },
    /**
     * 处理数据
     * @param {} store 价格数据 
     */
    computed(store) {
      const result = this.xData.map(item => {
        const data = store.find(ver => ver.date.substring(0, 7) === item.substring(0, 7))
        return data ? data : {};
      });
      return result;
    },
    /**
     * 获取数据
     */
    getData() {
      if (this.region) {
        this.getHistoryRegion();
      } else {
        this.getHistoryCurrentRegion();
      }
    }
  },
  watch: {
    region() {
      this.getData();
    }
  },
  mounted() {
    this.getData();
  }
}
