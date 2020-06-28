import request from '@/utils/request';

const BASE_URL = '/api/verifyCode';

/**
 * 验证码服务API
 */
const VerifyCode = {
  /**
   * @description 图形验证码
   * @param 参数
   * @return {}
   * @author liulina
   */
  getGraphVerifyCode: (param) => {
    return request.get(`${BASE_URL}/graphVerifyCode`, {
      params: param
    });
  },
  /**
   * @description 短信验证码
   * @param 参数
   * @return {}
   * @author liulina
   */
  getSmsVerifyCode: (param) => {
    return request.get(`${BASE_URL}/smsVerifyCode`, {
      params: param
    });
  }
};

export default VerifyCode;
