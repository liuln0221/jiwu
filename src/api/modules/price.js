import request from '@/utils/request';

const BASE_URL = '/api/price';

/**
 * 价格接口API
 */
const Price = {
  /**
   * @description 查询当前城市的价格区间
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getLevels: (param) => {
    return request.get(`${BASE_URL}/levels`, {
      params: param
    });
  },
  /**
   * @description 查询当前城市历史房价记录
   * @param type 查询类型
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getHistoryCurrentRegion: (type, param) => {
    return request.get(`${BASE_URL}/history/currentRegion/${type}`, {
      params: param
    });
  }
};

export default Price;
