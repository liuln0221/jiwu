import request from '@/utils/request';

const BASE_URL = '/api/projectInformation';

/**
 * 项目动态API
 */
const ProjectInformation = {
  /**
   * @description 项目动态列表
   * @param param 参数
   * @return {}
   * @author liulina
   */
  getProjectInformation: (param) => {
    return request.get(BASE_URL, {
      params: param
    });
  },
  /**
   * @description 项目动态详情
   * @param id 动态id
   * @return {}
   * @author liulina
   */
  getProjectInformationDetail: (id) => {
    return request.get(`${BASE_URL}/${id}`);
  }
};

export default ProjectInformation;