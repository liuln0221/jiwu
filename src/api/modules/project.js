import request from '@/utils/request';

const BASE_URL = '/api/project';

/**
 * 楼盘服务
 */
const Project = {
  /**
   * @description 热销楼盘
   * @param params 参数
   * @return {}
   * @author liulina
   */
  getHot: (params) => {
    return request.get(`${BASE_URL}/hot`, {
      params
    });
  },
  /**
   * @description 首页轮播楼盘
   * @return {}
   * @author liulina
   */
  getIndexCarousel() {
    return request.get(`${BASE_URL}/indexCarousel`);
  },
  /**
   * @description 楼盘列表分页查询
   * @param params 查询参数
   * @return {}
   * @author liulina
   */
  getProject: (params) => {
    return request.get(BASE_URL, {
      params
    });
  },
  /**
   * @description 楼盘详情
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectDetail: (id) => {
    return request.get(`${BASE_URL}/${id}`);
  },
  /**
   * @description 户型
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectLayouts: (id) => {
    return request.get(`${BASE_URL}/${id}/layouts`);
  },
  /**
   * @description 规划信息
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectPlanInfo: (id) => {
    return request.get(`${BASE_URL}/${id}/planInfo`);
  },
  /**
   * @description 相册列表
   * @param id 楼盘id
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getProjectImgGroups: (id, param) => {
    return request.get(`${BASE_URL}/${id}/imgGroups`, {
      params: param
    });
  },
  /**
   * @description 楼盘描述信息
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectDescription: (id) => {
    return request.get(`${BASE_URL}/${id}/description`);
  },
  /**
   * @description 关注楼盘
   * @param param 参数
   * @return {}
   * @author liulina
   */
  concernProject: (param) => {
    return request.post(`${BASE_URL}/concernProject`, param);
  },
  /**
   * @description 楼盘名称模糊查询
   * @param param 参数
   * @return {}
   * @author liulina
   */
  search: (param) => {
    return request.get(`${BASE_URL}/search`, {
      params: param
    });
  },
  /**
   * @description 查询置业顾问熟悉的楼盘
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getSalesChargeProjectList: (param) => {
    return request.get(`${BASE_URL}/salesChargeProjectList`, {
      params: param
    });
  }
};

export default Project;
