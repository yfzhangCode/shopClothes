import { request } from './api'

export function getCatory() {
  return request({
    url: '/category'
  })
}

export function getSubcatory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getSubcatoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}

