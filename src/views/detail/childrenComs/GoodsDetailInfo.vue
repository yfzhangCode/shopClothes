<template>
  <div class="goods-detail-color-info">
    <div class="goods-text-info">
      <span class="line-left"></span>
      <p>{{goodsDetailInfo.desc}}</p>
      <span class="line-right"></span>
    </div>
    <div class="goods-imges">
      <div class="" v-for="(item, index) in goodsDetailInfo.detailImage"
          :key="index">
        <div class="title">
          <h3>{{item.key}}</h3>
        </div>
        <div v-for="(el, idx) in item.list" :key="idx" class="img">
          <img :src="el" alt="" @load="imgLoad">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsDetailInfo',
  props: {
    goodsDetailInfo: {
      type: Object
    }
  },
  data () {
    return {
      count: 0,
      imgLength: 0
    }
  },
  methods: {
    imgLoad () {
      // 处于性能考虑 判断图片最后一张加载完毕在发送事件
      if (++this.count === this.imgLength) {
        this.$emit('ImgesLoad')
      }
    }
  },
  watch: {
    goodsDetailInfo: {
      handler (newv) {
        this.imgLength = newv.detailImage[0].list.length
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.goods-detail-color-info {
  padding-bottom: 20px;
  border-bottom: 5px solid #eee;
  .goods-text-info {
    text-align: left;
    font-size: $font_text_m;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
    position: relative;
    p {
      padding: 5px 0;
      margin: 10px 0;
      text-indent: 20px;
    }
    .line-left,
    .line-right {
      display: block;
      border-bottom: 1px solid #e0e0e0;
      position: relative;
      width: 30%;
      &::after {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        background: #000;
        bottom: 0;
      }
    }
    .line-right {
      position: absolute;
      right: 0;
      &::after {
        right: 0;
      }
    }
  }
  .goods-imges {
    .title {
      padding: 10px 0;
      text-align: center;
      font-size: $font_text_m;
      color: $color_text_3;
    }
    .img {
      width: 96%;
      text-align: center;
      margin-bottom: 10px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>