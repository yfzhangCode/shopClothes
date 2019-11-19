<template>
  <div class="cart">
    <!-- 顶部导航 -->
    <div class="cart-nav">
      <navBar>
        <template v-slot:center>购物车({{cartGoodsList.length}})</template>
      </navBar>
    </div>
    <!-- 购物车内容 -->
    <div class="cart-list-content">
      <cart-list :cartList="cartGoodsList" @itemClick="itemClick"></cart-list>
    </div>
    <!-- 计算价钱 -->
    <div class="make-money">
      <div class="check-all">
        <span class="checkbox"></span>
        <span>全选</span>
      </div>
      <div class="total-num">
        <span>总价：</span>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from 'component/common/navtabar/Navtabar'
import cartList from './childrenComs/cartlist/Cartlist'
import { mapGetters } from 'vuex'
export default {
  name: 'Message',
  data () {
    return {
      cartGoodsList: [] // 购物车数据
    }
  },
  mounted() {
    this.cartGoodsList = this.cartGoodsInfo
  },
  components: {
    navBar,
    cartList
  },
  computed: {
    ...mapGetters([
      'cartGoodsInfo'
    ])
  },
  methods: {
    // 选择商品
    itemClick (val) {
      console.log(val)
      this.cartGoodsList.map((item) => {
        if (item.iid === val.iid) {
          item.ischecked = !item.ischecked
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.cart {
  height: 100vh;
  overflow: hidden;
  .cart-nav {
    background-color: $theme_color;
    color: #fff;
  }
  .cart-list-content {
    height: calc(100% - 50px - 44px);
    overflow: hidden;
  }
  .make-money {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    border: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
  }
  .check-all {
    text-align: center;
    padding: 0 15px 0 0;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
    }
    .checkbox {
      width: 15px;
      height: 15px;
      border: 1px solid #eee;
      border-radius: 50%;
      margin-right: 10px;
    }
    .checked {
      background-color: #f3684f;
    }
  }
}
</style>