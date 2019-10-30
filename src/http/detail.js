import { request } from './api'

export function Detail (goodsid) {
  return request({
    url: '/detail',
    params: {
      iid: goodsid
    }
  })
}