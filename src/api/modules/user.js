import request from '@/utils/request';

const BASE_URL = '/api/user';

/**
 * 验证码服务API
 */
const VerifyCode = {
  /**
   * @description 登录
   * @param 参数
   * @return {}
   * @author liulina
   */
  login: (param) => {
    return request.post(`${BASE_URL}/loginByVerifyCode`, param);
  }
};

export default VerifyCode;
