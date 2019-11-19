// 使用 mutation-types
import { ADD_CART_GOODS } from './mutatons-type'

const mutations = {
  [ADD_CART_GOODS] (state, pyload) {
    console.log(state.cartGoodsInfo)
    pyload.ischecked = false
    if (state.cartGoodsInfo.length > 0) {
      state.cartGoodsInfo.map((item) => {
        if (item.iid === pyload.iid) {
          item.count += 1
        } else {
          state.cartGoodsInfo.push(pyload)
        }
      })
    } else {
      state.cartGoodsInfo.push(pyload)
    }
  }
}

export default mutations