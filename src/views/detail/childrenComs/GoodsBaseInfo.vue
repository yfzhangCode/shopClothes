<template>
  <div class="goods-base-info">
    <div class="item-base-info">
      <h3 class="title">{{goodsInfo.title}}</h3>
      <div class="price-info" :style="{color: goodsInfo.discountBgColor}">
        <span>{{goodsInfo.price}}</span>
        <span>~</span>
        <span>{{goodsInfo.highPrice}}</span>
        <span class="oldDisPrice">{{goodsInfo.oldPrice}}</span>
        <span class="discount" :style="{background: goodsInfo.discountBgColor}">7折</span>
      </div>
    </div>
    <div class="others-info">
      <div class="other-info-box">
        <span v-for="(item, index) in goodsInfo.othersInfo" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="courier">
      <ul>
        <li v-for="(item, index) in goodsInfo.couriur" :key="index">
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.goods-base-info {
  border-bottom: 5px solid #e0e0e0;
  .item-base-info {
    width:100%;
    padding: 10px 6px;
    box-sizing: border-box;
    .title {
      font-size: $font_text_l;
      color: $color_text_3;
      margin-bottom: 5px;
    }
    .price-info {
      font-size: 20px;
      padding: 10px 0;
      .oldDisPrice {
        color: #666;
        text-decoration-line: line-through;
        font-size: 14px;
      }
      .discount {
        padding: 3px 5px;
        font-size: 12px;
        color: #fff;
        border-radius: 5px;
        position: relative;
        top: -8px;
        margin-left: 5px;
      }
    }
  }
  .others-info {
    padding: 10px;
    border-bottom: 1px solid #eee;
    .other-info-box {
      display: flex;
      justify-content: space-between;
    }
  }
  .courier {
    padding: 5px 0;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 0 10px;
      line-height: 30px;
      justify-content: flex-start;
      li {
        width: 30%;
        text-align: left;
        font-size: $font_text_s;
        img {
          vertical-align: middle;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>