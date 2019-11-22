export default {
  cartGoodsInfo (context, pylaod) {
    return new Promise((resolve) => {
      // console.log(context)
      context.commit('addCartGoods', pylaod)
      resolve('添加商品成功')
    })
  }
}