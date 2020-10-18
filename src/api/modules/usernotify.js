import request from '@/utils/request';

const BASE_URL = '/api/userNotify';

/**
 * 用户通知API
 */
const UserNotify = {
  /**
   * @description 添加通知
   * @param 参数
   * @return {}
   * @author liulina
   */
  userNotifyAdd: (param) => {
    return request.post(`${BASE_URL}/add`, param);
  }
};

export default UserNotify;
