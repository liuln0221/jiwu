import request from '@/utils/request';

const BASE_URL = '/api/faqs';

/**
 * 问答
 */
const Faqs = {
  /**
   * @description 列表
   * @param params 参数
   * @return {}
   * @author liulina
   */
  getFaqs: (params) => {
    return request.get(BASE_URL, {
      params
    });
  },
  /**
   * @description 提问
   * @param param 参数
   * @return {}
   * @author liulina
   */
  askQuestion(param) {
    return request.post(`${BASE_URL}/askQuestion`, param);
  }
};

export default Faqs;
