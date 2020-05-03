// const hosthttp = 'http://192.168.13.28';
// const hosthttp = 'http://192.168.253.16:8104';
// const hosthttp = 'http://192.168.55.9';
const hosthttp = 'http://192.168.20.98';

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/jiwu',
  devServer: {
    port: 5003,
    proxy: {
      '/(auth|message|statistic|product|search|rack|monitor|order|workOrder|globalSummary|workflow|infraAsset|resource)': {
        target: hosthttp
      },
      '/api/v2/(summary|trend|distribute)': {
        target: 'http://192.168.253.16:8091',
      },
      '/api/v2/(allocation)': {
        target: hosthttp,
      }
    },
    // 测试iframe时开启，需要在dist文件中添加iframe.html文件，访问项目地址加/iframe.html
    // contentBase: './dist'
  }
};
 