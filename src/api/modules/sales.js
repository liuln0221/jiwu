import request from '@/utils/request';

const BASE_URL = '/api/sales';

/**
 * 销售人员API
 */
const Sales = {
  /**
   * @description 销售顾问获取
   * @param 参数
   * @return {}
   * @author liulina
   */
  getSales: (param) => {
    return request.get(BASE_URL, {
      params: param
    });
  },
  /**
   * @description 销售顾问详情获取
   * @param id 销售id
   * @return {}
   * @author liulina
   */
  getSalesDetail: (id) => {
    return request.get(`${BASE_URL}/${id}`);
  }
};

export default Sales;
