import LineChart from '@/components/echarts/line.vue';

export default {
  name: 'priceTrend',
  components: { LineChart },
  data() {
    return {
      optionData: [
        { name: '成交均价', value: [ 19351, 19472, 18610, 18504, 17953, 18012 ], color: '#f7624e' }      ]
    };
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
          show: false
        },
        color: [ '#f7624e' ],
        tooltip: {
          formatter: (params) => {
            console.log(params);
            const name = params[0].name.split('-')[1];
            return `${name}月<br/>${params[0].marker}${params[0].seriesName}：${params[0].data}元/平米`;
          },
          textStyle: {
            fontSize: 12
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
              return params.split('-')[1];
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
  }
};
