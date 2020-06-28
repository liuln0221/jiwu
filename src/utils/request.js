import axios from 'axios';
import md5 from 'md5';

import { getAuthToken } from '@/utils/cookies';
import { Common } from '@/utils/common';
import store from '@/store/index';

import { Message, Notification } from 'element-ui';

const Token = getAuthToken();

const getParam = () => {
  return {
    'App-Key': 'app_pc',
    'App-Version': '1.0',
    Timestamp: new Date().getTime()
  };
}

const app_secret = 'VoCT7mJcWGshRY33';

const service = axios.create({
  timeout: 300 * 1000,
  headers: Common.merge({
    'Content-Type': 'application/json;charset=UTF-8',
    'Cache-Control': 'no-cache'
  }, getParam())
});

// 配置所有request
service.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.data = true;
    }

    if (Token) {
      getParam().Token = Token;
    }

    config.headers = Common.merge({
      'Content-Type': 'application/json;charset=UTF-8',
      'Cache-Control': 'no-cache'
    }, getParam());

    config.headers['Driver-Type'] = 'pc';
    if (store.state.app.location.domain) {
      config.headers['City-Domain'] = store.state.app.location.domain;
    }
    
    const arr = Object.keys(getParam()).sort();
    let str = '';
    arr.forEach(item => {
      str += config.headers[item] ? `${item}${config.headers[item]}` : '';
    });
    config.headers.Sign = md5(`${app_secret}${str}${app_secret}`);
    return config;
  },
  error => {
    console.log(error);
  }
);

// 配置所有response
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  error => {
    if (error.response) {
      const res = error.response.data;
      switch (error.response.status) {
        case 400:
          if (error.response.config.url !== '/auth/api/v2/login'
            && error.response.config.url !== '/infraAsset/api/v2/infraAsset/import') {
            // 登录接口不用统一处理
            // const loginMsg = res.returnObj
            //   ? `${res.msg}:${res.returnObj.errorMessage}`
            //   : res.msg;

            // 资源拓扑下因为 没有res.msg，导致提示信息会多一个 冒号，以下代码 做 容错
            let loginMsg = '';
            if (res.returnObj) {
              if (res.msg) {
                loginMsg = `${res.msg}:${res.returnObj.errorMessage}`;
              } else {
                loginMsg = res.returnObj.errorMessage;
              }
            } else {
              loginMsg = res.msg;
            }
            Message({
              message: loginMsg,
              type: 'warning'
            });
          }
          break;
        case 401:
          if (process.env.NODE_ENV === 'development') { // 开发环境
            (window).vm.$router.push({ name: 'login' });
          } else {
            // window.location.href = '/'; // 生产环境
          }
          break;
        case 500:
          Notification({
            title: (window).vm && (window).vm.$t('messages.title'),
            message: (window).vm && (window).vm.$t('responseErrorMsg.500'),
            position: 'bottom-right'
          });
          break;
      }
      return Promise.reject(error);
    }
  }
);

export default service;
