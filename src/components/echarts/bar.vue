<template>
  <div :style="{width: '100%', height: '100%'}" ref="myChart"></div>
</template>

<script>
import echarts from 'echarts';

import { Common } from '@/utils/common';

/**
 * @component BarEchart
 * @description echarts组件-柱状图
 * @author liulina 2020-07-23
 */
export default {
  name: 'barEChart',
  props: [ 'option' ],
  methods: {
    initEcharts() {
      const dm = this.$refs.myChart;
      const myChart = echarts.init(dm);
      const option = Common.merge({
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          bottom: 0,
          itemGap: 20
        },
        grid: {
          top: '10',
          bottom: '40',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        }
      }, this.option);
      myChart.setOption(option);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  },
  watch: {
    option() {
      this.initEcharts();
    }
  },
  mounted() {
    this.initEcharts();
  }
};
</script>
