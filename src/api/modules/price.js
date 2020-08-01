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
  },
  /**
   * @description 查询楼盘历史房价记录
   * @param id 项目id
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getHistoryProject: (id, param) => {
    return request.get(`${BASE_URL}/history/project/${id}`, {
      params: param
    });
  },
  /**
   * @description 查询区域历史房价记录
   * @param code region code
   * @param type 类型
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getHistoryRegion: (code, type, param) => {
    return request.get(`${BASE_URL}/history/region/${code}/${type}`, {
      params: param
    });
  },
  /**
   * @description 查询区域历史房价记录
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getChildRegionPricesRank: (param) => {
    return request.get(`${BASE_URL}/childRegionPricesRank`, {
      params: param
    });
  }
};

export default Price;
