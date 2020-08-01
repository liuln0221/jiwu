export default {
  name: 'help',
  data() {
    return {
      data: {
        province: '', // 省
        city: '', // 市
        region: '', // 区域
        houseType: '', // 期望户型
        budget: '', // 期望预算
        objective: '', // 购房目的
        tel: '' // 手机号码
      },
      provinces: [],
      cities: [],
      regions: []
    };
  }
};