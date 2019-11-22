<template>
  <div class="goods-list" @click.stop="itemGoodsClick" v-if="Object.keys(goodslist).length > 0">
    <img v-lazy="showImg?goodslist.show.img:goodslist.img" alt="" @load="imgLoad">
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
  },
  methods: {
    // 图片加载完成
    imgLoad () {
      this.$Bus.$emit('imgLoad')
    },
    // 点击获取详情信息
    itemGoodsClick () {
      console.log(this.goodslist.iid)
      this.$router.push('/detail/' + this.goodslist.iid)
    }
  },
  computed: {
    showImg() {
      return this.goodslist.show !== undefined
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