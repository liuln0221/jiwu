import request from '@/utils/request';

const BASE_URL = '/api/consult';

/**
 * 咨询服务API
 */
const Consult = {
  /**
   * @description 咨询登记
   * @param 参数
   * @return {}
   * @author liulina
   */
  consultRegister: param => {
    return request.post(`${BASE_URL}/register`, param);
  }
};

export default Consult;
