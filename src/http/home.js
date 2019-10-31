import { request } from './api'

// 首页数据
export function getData() {
  return request ({
    url: '/home/multidata'
  })
}

export function homeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
