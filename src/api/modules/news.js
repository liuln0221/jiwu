import request from '@/utils/request';

const BASE_URL = '/api/news';

/**
 * 系统Banner服务API
 */
const News = {
  /**
   * @description 查询本地新闻列表
   * @param 参数
   * @return {}
   * @author liulina
   */
  getNewsLocal: (param) => {
    return request.get(`${BASE_URL}/locals`, {
      params: param
    });
  },
  /**
   * @description 查询本地新闻TOP
   * @param 参数
   * @return {}
   * @author liulina
   */
  getNewsLocalTop: (param) => {
    return request.get(`${BASE_URL}/local/top`, {
      params: param
    });
  },
  /**
   * @description 查询市场新闻列表
   * @param 参数
   * @return {}
   * @author liulina
   */
  getNewsMarkets: (param) => {
    return request.get(`${BASE_URL}/markets`, {
      params: param
    });
  },
  /**
   * @description 查询市场新闻TOP
   * @param 参数
   * @return {}
   * @author liulina
   */
  getNewsMarketsTop: (param) => {
    return request.get(`${BASE_URL}/market/top`, {
      params: param
    });
  }
};

export default News;
