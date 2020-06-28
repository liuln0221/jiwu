import request from '@/utils/request';

const BASE_URL = '/api/banner';

/**
 * 系统Banner服务API
 */
const Banner = {
  /**
   * @description 查询首页banner列表
   * @return {}
   * @author liulina
   */
  getIndex: () => {
    return request.get(`${BASE_URL}/index`);
  }
};

export default Banner;
