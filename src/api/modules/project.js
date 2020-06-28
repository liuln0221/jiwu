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
  getListQuery4Page: (params) => {
    return request.get(`${BASE_URL}/listQuery4Page`, {
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
    return request.get(`${BASE_URL}/detail`, {
      params: {
        projectId: id
      }
    });
  }
};

export default Project;
