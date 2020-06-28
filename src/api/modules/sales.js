import request from '@/utils/request';

const BASE_URL = '/api/sales';

/**
 * 系统Banner服务API
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
  }
};

export default Sales;
