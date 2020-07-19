import request from '@/utils/request';

const BASE_URL = '/api/projectEvaluate';

/**
 * 楼盘点评API
 */
const ProjectEvaluate = {
  /**
   * @description 楼盘点评信息
   * @param id 楼盘id
   * @return {}
   * @author liulina
   */
  getProjectEvaluate: (id) => {
    return request.get(`${BASE_URL}/${id}`);
  }
};

export default ProjectEvaluate;