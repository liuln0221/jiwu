import request from '@/utils/request';

const BASE_URL = '/api/region';

/**
 * 区域服务接口API
 */
const Region = {
  /**
   * @description 查询当前城市的所有子区域列表
   * @return {}
   * @author liulina
   */
  getChildRegion: () => {
    return request.get(`${BASE_URL}/childRegion`);
  },
  /**
   * @description 查询开通城市
   * @return {}
   * @author liulina
   */
  getOpenedRegion: () => {
    return request.get(`${BASE_URL}/openedRegion`);
  }
};

export default Region;
