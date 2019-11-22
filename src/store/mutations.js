// 使用 mutation-types
import { ADD_CART_GOODS } from './mutatons-type'

const mutations = {
  [ADD_CART_GOODS] (state, pyload) {
    pyload.ischecked = false
    // 记录是否添加 find 返回符合条件的第一个元素 undefined findIndex 返回的是元素下标 -1
    const oneInfo = state.cartGoodsInfo.find(item => item.iid === pyload.iid)
    if (oneInfo) {
      oneInfo.count += 1
    } else {
      pyload.count = 1
      state.cartGoodsInfo.push(pyload)
    }
  }
}

export default mutations