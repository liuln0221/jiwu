import { data } from '../detail.class';

import LineChart from '@/components/echarts/line.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

export default {
  name: 'priceTrend',
  components: { LineChart, Disclaimer, Expand },
  data() {
    return {
      data,
      buttons: [
        { icon: 'icon-customer', text: '新消息通知', color: '#47b3e3' },
        { icon: 'icon-line-chart', text: '降价通知我', color: '#47b3e3' }
        // { icon: 'el-icon-plus', text: '房贷计算器', color: '#869099' },
        // { icon: 'el-icon-plus', text: '公积金查询', color: '#869099' }
      ],
      optionData: [
        {
          name: `${data.name}价格`,
          value: [ 150000, 150000, 150000, 150000, 150000, 150000, 150000, 100000, 100000, 100000 ],
          color: '#47b3e3'
        },
        {
          name: '朝阳房价走势',
          value: [ 90106, 88760, 83212, 83709, 82346, 82304, 82190, 80608, 81778, 81332, 81030, 79100 ],
          color: '#f7624e'
        }
      ],
      tableData: [
        { recordTime: 1585180800000, ceilingPrice: '', avgPrice: '100000元/平米', floorPrice: '', description: ''  },
        { recordTime: 1581120000000, ceilingPrice: '', avgPrice: '0万/套', floorPrice: '100000元/平米', description: '单价100000元/平米起，一次性付款，银行按揭。'  }
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
      for (let i = 0; i < 12; i++) {
        date.setMonth(date.getMonth() - 1); // 每循环一次，月份值减1
        let m = date.getMonth() + 1;
        m = m < 10 ? `0${m}` : m;
        result.push(`${date.getFullYear()}-${m}月`);
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
        color: [ '#47b3e3', '#f7624e' ],
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
            color: '#3b4144'
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
