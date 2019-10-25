<template>
  <div class="goods-list">
    <img :src="goodslist.show.img" alt="">
    <div class="text">
      <h3>{{goodslist.title}}</h3>
      <span class="price">{{goodslist.price}}</span>
      <span>收藏人气{{goodslist.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Goodslist',
  props: {
    goodslist: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-list {
  width: 48%;
  text-align: center;
  margin-bottom: 10px;
  img {
    width:100%;
  }
  .text {
    padding-top: 5px;
    h3 {
      text-align: left;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      margin-bottom: 5px;
    }
    font-size: $font_text_s;
  }
  .price {
    color: red;
  }
}
</style>