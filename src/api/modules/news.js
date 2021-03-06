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
  getLocals: (param) => {
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
   * @description 查询项目相关的资讯
   * @param 参数
   * @return {}
   * @author liulina
   */
  getProjectNews: (param) => {
    return request.get(`${BASE_URL}/projectNews`, {
      params: param
    });
  },
  /**
   * @description 查询资讯详情
   * @param id 资讯id
   * @return {}
   * @author liulina
   */
  getNewsDetail: (id) => {
    return request.get(`${BASE_URL}/${id}`);
  }
};

export default News;
