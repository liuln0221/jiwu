import request from '@/utils/request';

const BASE_URL = '/api/acticity';

/**
 * 问答
 */
const Faqs = {
  /**
   * @description 项目活动列表
   * @param params 参数
   * @return {}
   * @author liulina
   */
  getProjectActicity: (params) => {
    return request.get(`${BASE_URL}/projectList`, {
      params
    });
  },
  /**
   * @description 活动报名
   * @param param 参数
   * @return {}
   * @author liulina
   */
  acticityRegister(param) {
    return request.post(`${BASE_URL}/register`, param);
  }
};

export default Faqs;
