<template>
  <div class="shop-info">
    <div class="shop-logo">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-sell-info">
      <div class="shop-sell-left">
        <div class="csell">
          <span>{{(shopInfo.cSells / 10000).toFixed(2)}}万</span>
          <span>总销量</span>
        </div>
        <div class="cgoods">
          <span>{{shopInfo.cGoods}}</span>
          <span>全部宝贝</span>
        </div>
        <div class="right-line"></div>
      </div>
      <div class="shop-sell-right">
        <ul>
          <li v-for="(item, index) in shopInfo.score" :key="index">
            <span class="score-title">{{item.name}}</span>
            <span class="scroe-nums" :class="item.isBetter?'score-high':''">{{item.score}}</span>
            <span class="low" v-if="!item.isBetter">低</span>
            <span class="high" v-if="item.isBetter" :class="{better: item.isBetter}">高</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="come-in-store" @click.stop="comeInStore">
      <button>进店逛逛</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    comeInStore () {
      console.log("进入商店")
    }
  }
}
</script>
<style lang="scss" scoped>
.shop-info {
  padding-bottom: 20px;
  border-bottom: 5px solid #e0e0e0;
  .shop-logo {
    padding: 5px 10px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    img {
      width: 60px;
      height: 60px;
      vertical-align: middle;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
  .shop-sell-info {
    display: flex;
    align-items: center;
    .shop-sell-left,
    .shop-sell-right {
      flex: 1;
    }
    .shop-sell-left {
      display: flex;
      text-align: center;
      justify-content: center;
      .csell,
      .cgoods {
        font-size: $font_text_m;
        text-align: center;
        padding: 0 10px;
        line-height: 25px;
        span {
          display: block;
        }
      }
      .csell {
        margin-right: 5px;
      }
      .right-line {
        height: 42px;
        position: relative;
        top: 4px;
        left: 4px;
        border-right: 1px solid #e0e0e0;
      }
    }
    .shop-sell-right {
      ul {
        line-height: 30px;
        li {
          font-size: $font_text_m;
          .score-title {
            margin-right: 5px;
            letter-spacing: 2px;
          }
          .scroe-nums {
            color: #5ea732;
            margin-right: 6px;
          }
          .low{
            color: #fff;
            background-color: #5ea732;
          }
          .score-high {
            color: #f13e3a;
          }
          .high {
            color: #fff;
            background-color: #f13e3a;
          }
        }
      }
    }
  }
  .come-in-store {
    padding: 15px 0;
    text-align: center;
    button {
      margin: 0;
      padding: 0;
      padding: 8px 30px;
      background: #f2f5f8;
      border: none;
      outline: none;
      border-radius: 8px;
      font-size: $font_text_m;
      color: $color_text_6;
    }
  }
}
</style>