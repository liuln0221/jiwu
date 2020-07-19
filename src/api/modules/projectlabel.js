import request from '@/utils/request';

const BASE_URL = '/api/projectLabel';

/**
 * 项目标签API
 */
const ProjectLabel = {
  /**
   * @description 热销楼盘
   * @param params 参数
   * @return {}
   * @author liulina
   */
  getProjectLabel: (params) => {
    return request.get(BASE_URL, {
      params
    });
  }
};

export default ProjectLabel;
