import request from '@/utils/request';

const BASE_URL = '/services/sysDict/';

/**
 * 系统数据字典
 */
const SysDict = {
  /**
   * @description 查询菜单
   * @return {}
   * @author liulina
   */
  getIndexBannerList: () => {
    return request.get(`${BASE_URL}indexBannerList`);
  },
  /**
   * @description 查询开通城市
   * @return {}
   * @author liulina
   */
  getOpenedCity: () => {
    return request.get(`${BASE_URL}openedCity`);
  },
  /**
   * @description 查询当前城市的价格区间
   * @param type 类型
   * @return {}
   * @author liulina
   */
  getCityPriceLevels: (type) => {
    return request.get(`${BASE_URL}cityPriceLevels`, {
      params: {
        type
      }
    });
  },
  /**
   * @description 查询当前城市的所有区域列表
   * @return {}
   * @author liulina
   */
  getCityAllRegion: () => {
    return request.get(`${BASE_URL}cityAllRegion`);
  }
};

export default SysDict;
