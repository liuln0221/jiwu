export default {
  name: 'record',
  props: [ 'data' ],
  data() {
    return {
      option: {
        business: [
          { name: '盛京银行(光华路支行)', distance: 100 },
          { name: '中国农业银行(朝阳东区支行营业部)', distance: 1016 }
        ]
      }
    };
  }
};
