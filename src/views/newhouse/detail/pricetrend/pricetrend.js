import { mapGetters } from 'vuex';

import LineChart from '@/components/echarts/line.vue';
import Disclaimer from '@/views/newhouse/detail/components/disclaimer/disclaimer.vue';
import Expand from '@/views/newhouse/detail/components/expand/expand.vue';

import { Project, Price, ProjectInformation } from '@/api';

import { Common } from '@/utils/common';

export default {
  name: 'priceTrend',
  components: { LineChart, Disclaimer, Expand },
  data() {
    return {
      data: {},
      buttons: [
        { icon: 'icon-customer', text: '新消息通知', color: '#47b3e3' },
        { icon: 'icon-line-chart', text: '降价通知我', color: '#47b3e3' }
        // { icon: 'el-icon-plus', text: '房贷计算器', color: '#869099' },
        // { icon: 'el-icon-plus', text: '公积金查询', color: '#869099' }
      ],
      xData: [],
      projectValue: [],
      cityValue: [],
      tableData: [],
      news: [],
      time: 12,
      timeSelect: [
        { name: 12, label: '近1年' },
        { name: 36, label: '近3年' }
      ]
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
    /**
     * 获取楼盘详情
     */
    getProjectDetail() {
      Project.getProjectDetail(this.projectId).then(res => {
        this.data = res.data;
      });
    },
    /**
     * 获取历史价格
     */
    getHistory() {
      const param = {
        limit: this.time
      };
      Promise.all([this.getHistoryProject(param), this.getHistoryCurrentRegion(param)]).then(res => {
        this.xData = Common.mergeTwoDimensional(res).map(item => item.date).sort();
        this.projectValue = this.computed(res[0]).map(item => item.averagePrice);
        this.cityValue = this.computed(res[1]).map(item => item.averagePrice);
      });
    },
    /**
     * 获取楼盘历史价格
     * @param {} param 参数
     */
    getHistoryProject(param) {
      return new Promise((resolve) => {
        Price.getHistoryProject(this.projectId, param).then(res => {
          resolve(res.data);
        });
      });
    },
    /**
     * 获取当前城市历史价格
     * @param {} param 参数 
     */
    getHistoryCurrentRegion(param) {
      return new Promise((resolve) => {
        Price.getHistoryCurrentRegion(1, param).then(res => {
          resolve(res.data);
          this.tableData = res.data;
        });
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
     * 获取楼盘动态
     */
    getProjectInformation() {
      const param = {
        pageIndex: 1,
        pageSize: 2,
        projectId: this.projectId
      };
      ProjectInformation.getProjectInformation(param).then(res => {
        this.news = res.data;
      });
    }
  },
  mounted() {
    this.getProjectDetail();
    this.getHistory();
    this.getProjectInformation();
  }
};
