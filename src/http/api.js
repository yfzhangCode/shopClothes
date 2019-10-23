import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  // 响应拦截
  instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

  return instance(config)
}