import { request } from './api'

// 首页数据
export function getData() {
  return request ({
    url: '/json'
  })
}

export default getData