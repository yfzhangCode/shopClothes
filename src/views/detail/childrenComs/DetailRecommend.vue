<template>
  <div class="detail-recommend">
    <div>
      <h3 class="title">热门推荐</h3>
      <div class="items">
        <ul>
          <li v-for="(item, index) in detailRecodData" :key="index">
            <img :src="item.image" alt="">
            <div>
              <h3 class="goods-desc">{{item.title}}</h3>
              <p class="price-cfav">
                <span class="price">￥{{item.price}}</span>
                <span class="cfav">{{item.cfav}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailRecommend',
  props: {
    detailRecodData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-recommend {
  .title {
    padding: 15px 10px;
    color: $color_text_3;
  }
  .items {
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      padding: 0 5px;
      li {
        width: 48%;
        margin-bottom: 6px;
        img {
          width: 100%;
          margin-bottom: 5px;
        }
        .goods-desc {
          width: 95%;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 8px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: $font_text_m;
          color: $color_text_3;
        }
        .price-cfav {
          font-size: $font_text_m;
          .price {
            color: #ff5777;
            margin-right: 10px;
          }
          .cfav {
            position: relative;
            padding: 0 25px;
            &::before {
              content: '';
              position: absolute;
              top: -3px;
              left: 0;
              width: 20px;
              height: 20px;
              display: inline-block;
              background: url('~assets/img/common/collect.svg') 0 0px/20px 20px;
            }
          }
        }
      }
    }
  }
}
</style>