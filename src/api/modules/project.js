import request from '@/utils/request';

const BASE_URL = '/services/project/';

/**
 * 楼盘服务
 */
const Project = {
  /**
   * @description 热销楼盘
   * @return {}
   * @author liulina
   */
  getHotProject: () => {
    return request.get(`${BASE_URL}hotProject`);
  },
  /**
   * @description 楼盘详情
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectDetail: (id) => {
    return request.get(`${BASE_URL}detail`, {
      params: {
        projectId: id
      }
    });
  }
};

export default Project;
