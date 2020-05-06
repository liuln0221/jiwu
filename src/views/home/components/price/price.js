import { newHouse } from './price.class';

import LineChart from '@/components/echarts/line.vue';

export default {
  name: 'price',
  components: { LineChart },
  data() {
    return {
      prices: [
        { name: 'newHouse', title: '新房', links: newHouse },
        { name: 'oldHouse', title: '二手房', links: newHouse }
      ],
      optionData: [
        { name: '新房', value: [ 49612, 49758, 49270, 49343, 49010, 48882 ], color: '#f7624e' },
        { name: '二手房', value: [ 64237 , 63376, 62964, 65059, 69257, 68340 ], color: '#47b3e3' }
      ]
    }
  },
  computed: {
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
    xData() {
      const result = [];
      const date = new Date();
      date.setMonth(date.getMonth() + 1, 1); // 获取到当前月份，设置月份
      for (let i = 0; i < 6; i++) {
        date.setMonth(date.getMonth() - 1); // 每循环一次，月份值减1
        let m = date.getMonth() + 1;
        m = m < 10 ? `0${m}` : m;
        result.push(`${date.getFullYear()}-${m}`);
      }
      return result.reverse();
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
  }
};
