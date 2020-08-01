import { mapGetters } from 'vuex';

import BarChart from '@/components/echarts/bar.vue';

export default {
  name: 'distribution',
  components: { BarChart },
  data() {
    return {
      type: 1,
      newHouseData: []
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
          type: 'bar',
          backgroundStyle: {
            color: item.color
          },
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
  }
};
