import { mapGetters } from 'vuex';

import LineChart from '@/components/echarts/line.vue';

import { Common } from '@/utils/common';

import { Price } from '@/api';

export default {
  name: 'price',
  components: { LineChart },
  props: [ 'data' ],
  data() {
    return {
      xData: [],
      projectValue: [],
      cityValue: []
    }
  },
  computed: {
    ...mapGetters([
      'location' // 当前城市
    ]),
    projectId() {
      return this.$route.params.id;
    },
    optionData() {
      return [
        {
          name: `${this.data.name}价格`,
          value: this.projectValue,
          color: '#47b3e3'
        },
        {
          name: `${this.location.name}房价走势`,
          value: this.cityValue,
          color: '#f7624e'
        }
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
    // X轴数据
    // xData() {
    //   const result = [];
    //   const date = new Date();
    //   date.setMonth(date.getMonth() + 1, 1); // 获取到当前月份，设置月份
    //   for (let i = 0; i < 12; i++) {
    //     date.setMonth(date.getMonth() - 1); // 每循环一次，月份值减1
    //     let m = date.getMonth() + 1;
    //     m = m < 10 ? `0${m}` : m;
    //     result.push(`${date.getFullYear()}-${m}月`);
    //   }
    //   return result.reverse();
    // },
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
          show: false
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
          position: 'right',
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
    getHistory() {
      const param = {
        limit: 12
      };
      Promise.all([this.getHistoryProject(param), this.getHistoryCurrentRegion(param)]).then(res => {
        this.xData = Common.mergeTwoDimensional(res).map(item => item.date).sort();
        this.projectValue = this.computed(res[0]).map(item => item.averagePrice);
        this.cityValue = this.computed(res[1]).map(item => item.averagePrice);
      });
    },
    getHistoryProject(param) {
      return new Promise((resolve) => {
        Price.getHistoryProject(this.projectId, param).then(res => {
          resolve(res.data);
        });
      });
    },
    getHistoryCurrentRegion(param) {
      return new Promise((resolve) => {
        Price.getHistoryCurrentRegion(1, param).then(res => {
          resolve(res.data);
        });
      });
    },
    computed(store) {
      const result = this.xData.map(item => {
        const data = store.find(ver => ver.date.substring(0, 7) === item.substring(0, 7))
        return data ? data : {};
      });
      return result;
    }
  },
  mounted() {
    this.getHistory();
  }
};
