import axios from 'axios';
import NProgress from 'nprogress';
import { getToken } from './auth';

const instance = axios.create({
  timeout: 5000,
  baseURL: 'http://www.mei.com/',
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    NProgress.start();
    // Do something before request is sent
    // console.log(config);
    // 在发起请求之前在请求头中设置token值
    config.headers.authorization = 'bearer ' + getToken();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
//  全局响应拦截，所有的ajax请求成功返回之后会走这个方法
//    做异常处理
//    比如 404，503， 401
instance.interceptors.response.use(
  function(response) {
    NProgress.done();
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log("报错了");
    // console.dir(error);
    // 当服务器返回401状态码的时候跳转到登录页
    if (error.response.status == 401) {
      window.location.href = '#/login';
    }
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

export function post(url, data) {
  return instance.post(url, data);
}

export function put(url, data) {
  return instance.put(url, data);
}

export function del(url) {
  return instance.put(url);
}
