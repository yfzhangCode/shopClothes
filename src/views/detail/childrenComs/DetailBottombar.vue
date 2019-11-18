<template>
  <div class="detail-bottom-bar">
    <div class="footer-tools">
      <div class="tools tools-left">
        <ul >
          <li class="service" @click.stop="serviceClick">
            <span>客服</span>
          </li>
          <li class="shop" @click.stop="shopClick">
            <span>店铺</span>
          </li>
          <li class="cfav" @click.stop="cfavClick">
            <span>收藏</span>
          </li>
        </ul>
      </div>
      <div class="tools tools-right">
        <button class="btn add-cart" @click.stop="addCart">加入购物车</button>
        <button class="btn buy" @click.stop="buyClick">购买</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailBottombar',
  methods: {
    // 客服
    serviceClick () {

    },
    // 店铺
    shopClick () {

    },
    // 收藏
    cfavClick () {

    },
    // 加入购物车
    addCart () {
      this.$emit('addCart')
    },
    // 购买
    buyClick () {
      this.$emit('buy')
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-bottom-bar {
  background-color: #fff;
  height: 60px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  .footer-tools {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    width: 100%;
    height: 100%;
    .tools,
    .tools-left > ul {
      overflow: hidden;
      flex: 1;
      display: flex;
      justify-content: space-around;
      justify-items: center;
    }
    .tools-left > ul {
      li {
        width: 40px;
        height: 36px;
        text-align: center;
        span {
          position: relative;
          top: 38px;
        }
      }
    }
    .service {
      background: url(/img/detail_bottom.a8e4b3c7.png) center -65px no-repeat;
      background-size: 75%;
    }
    .shop {
      background: url(/img/detail_bottom.a8e4b3c7.png) center -127px no-repeat;
      background-size: 75%;
    }
    .cfav {
      background: url(/img/detail_bottom.a8e4b3c7.png) center 9px no-repeat;
      background-size: 75%;
    }
    .tools-right {
      .btn {
        flex: 1;
        border: none;
        outline: none;
        font-size: 16px;
        display: block;
        background: transparent;
        color: #fff;
        &::after {
          border: none;
          outline: none;
        }
      }
      .add-cart {
        background: #e1251b;
      }
      .buy {
        background: #f9ac00;
      }
    }
  }
}
</style>