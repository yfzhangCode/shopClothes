import { request } from './api'

export function Detail (goodsid) {
  return request({
    url: '/detail',
    params: {
      iid: goodsid
    }
  })
}

// 详情热门推荐数据
export function DetailRecommendR() {
  return request({
    url: '/recommend'
  })
}

/**
 * 定义商品基本信息的 类
 * 
 * @export
 * @class BaseInfo
 */
export class GoodBaseInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title,
    this.price = itemInfo.price,
    this.highPrice = itemInfo.highPrice,
    this.oldPrice = itemInfo.oldPrice,
    this.discountDesc = itemInfo.discountDesc,
    this.discountBgColor = itemInfo.discountBgColor,
    this.othersInfo = columns,
    this.couriur = shopInfo.services
  }
}


/**
 * 定义获取商店基本信息的类
 * 
 * @export
 * @class Shop
 */
export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name,
    this.shopLogo = shopInfo.shopLogo,
    this.cSells = shopInfo.cSells,
    this.cGoods = shopInfo.cGoods,
    this.score = shopInfo.score
  }
}


/**
 * 定义获取底部商品详情的信息
 * 
 * @export
 * @class DetailBottomInfo
 */
export class DetailBottomInfo {
  constructor(data) {
    this.goodsParamsInfo = data.itemParams
  }
}